/* XENOS NOTES — "Cast Clash", a 1-on-1 fighting game for the
 * Doc.Azuz/Raerae/Lulu/Ra'ad/Pika/CJ cast. Vector-art based (reuses the
 * same assets/characters/*.svg already deployed as page decorations) —
 * no pixel sprites, unlike M & A's game.
 *
 * Combat has real choices, not just one attack button:
 *   - Light attack: fast, low damage, short cooldown, builds the special
 *     meter a little.
 *   - Heavy attack: slow, high damage, long cooldown, builds the special
 *     meter a lot — but the CPU has a real chance to block it for
 *     reduced damage.
 *   - Block: a short window where incoming damage is cut way down, on
 *     its own cooldown so it can't be held forever.
 *   - Special: once the meter is full, a big themed finishing move
 *     (unique per character) that resets the meter.
 * The CPU opponent picks light/heavy attacks on its own timer and has a
 * chance to block your heavies; it doesn't use its own special (keeps
 * the AI simple and matches beatable).
 *
 * On win, the running score for both fighters updates in Supabase
 * (window.XENOS_SUPABASE, same project the rest of the site uses) and,
 * if a webhook is configured, the result posts to Discord — see
 * data/discord-webhook-config.js.
 *
 * Public API: window.XenosCastGame.renderPicker(host, onPick)
 *             window.XenosCastGame.renderBattle(host, fighterAId, fighterBId, onRematch, onBackToPicker)
 */
window.XenosCastGame = (function () {
  const FIGHTERS = [
    { id: 'doc-azuz', name: 'Doc.Azuz', special: 'Panda Slam' },
    { id: 'raerae', name: 'Raerae', special: 'Ice Spiral' },
    { id: 'lulu', name: 'Queen Lulu', special: 'Unicorn Charge' },
    { id: 'raad', name: "Ra'ad", special: 'Lightning Surge' },
    { id: 'pika', name: 'Pika', special: 'Blessed Strike' },
    { id: 'cj', name: 'CJ', special: 'Genius Overload' },
  ];
  const MAX_HP = 100;
  const MAX_METER = 100;
  const LIGHT_DMG = [6, 12];
  const LIGHT_COOLDOWN_MS = 400;
  const LIGHT_METER_GAIN = 8;
  const HEAVY_DMG = [16, 26];
  const HEAVY_COOLDOWN_MS = 1100;
  const HEAVY_METER_GAIN = 14;
  const CPU_BLOCK_CHANCE_VS_HEAVY = 0.3;
  const BLOCK_WINDOW_MS = 650;
  const BLOCK_COOLDOWN_MS = 1400;
  const BLOCK_DAMAGE_MULT = 0.3;
  const SPECIAL_DMG = [30, 40];
  const CPU_ATTACK_EVERY_MS = [850, 1500];
  const CPU_HEAVY_CHANCE = 0.35;
  const WIN_POINTS = 100;
  const LOSS_POINTS = 40;
  const START_SCORE = 500;

  function fighterById(id) { return FIGHTERS.find(f => f.id === id) || null; }

  // ─── Supabase score read/write — same project as the rest of the site
  // (window.XENOS_SUPABASE from data/supabase-config.js). Table:
  // cast_scores(character_id text primary key, score int, wins int,
  // losses int). See SETUP-CAST-GAME.md for the SQL to create it. ───
  function getClient() {
    const cfg = window.XENOS_SUPABASE;
    if (!cfg || !cfg.url || !window.supabase || typeof window.supabase.createClient !== 'function') return null;
    if (!getClient._sb) getClient._sb = window.supabase.createClient(cfg.url, cfg.anonKey);
    return getClient._sb;
  }

  async function getScore(id) {
    const sb = getClient();
    if (!sb) return START_SCORE;
    try {
      const { data } = await sb.from('cast_scores').select('score').eq('character_id', id).maybeSingle();
      return data ? data.score : START_SCORE;
    } catch (e) { return START_SCORE; }
  }

  async function recordMatch(winnerId, loserId) {
    const sb = getClient();
    const winnerName = fighterById(winnerId).name;
    const loserName = fighterById(loserId).name;
    let winnerScore = START_SCORE + WIN_POINTS;
    let loserScore = Math.max(0, START_SCORE - LOSS_POINTS);
    if (sb) {
      try {
        const [wRow, lRow] = await Promise.all([
          sb.from('cast_scores').select('score,wins,losses').eq('character_id', winnerId).maybeSingle(),
          sb.from('cast_scores').select('score,wins,losses').eq('character_id', loserId).maybeSingle(),
        ]);
        const wPrev = wRow.data || { score: START_SCORE, wins: 0, losses: 0 };
        const lPrev = lRow.data || { score: START_SCORE, wins: 0, losses: 0 };
        winnerScore = wPrev.score + WIN_POINTS;
        loserScore = Math.max(0, lPrev.score - LOSS_POINTS);
        await Promise.all([
          sb.from('cast_scores').upsert({ character_id: winnerId, score: winnerScore, wins: (wPrev.wins || 0) + 1, losses: wPrev.losses || 0, updated_at: new Date().toISOString() }),
          sb.from('cast_scores').upsert({ character_id: loserId, score: loserScore, wins: lPrev.wins || 0, losses: (lPrev.losses || 0) + 1, updated_at: new Date().toISOString() }),
        ]);
        await sb.from('cast_matches').insert({ winner_id: winnerId, loser_id: loserId, winner_score: winnerScore, loser_score: loserScore });
      } catch (e) { /* Supabase not set up yet — scores just won't persist */ }
    }
    postToDiscord(winnerName, winnerScore, loserName, loserScore);
    return { winnerScore, loserScore };
  }

  function postToDiscord(winnerName, winnerScore, loserName, loserScore) {
    const cfg = window.XENOS_DISCORD_WEBHOOK;
    if (!cfg || !cfg.url) return;
    fetch(cfg.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `🏆 **Cast Clash** — ${winnerScore} ${winnerName} defeated ${loserScore} ${loserName}!`,
      }),
    }).catch(() => { /* best-effort; a failed post shouldn't break the game */ });
  }

  // ─── Picker screen ───
  function renderPicker(host, onPick) {
    host.innerHTML = `
      <div class="castgame-picker">
        <p class="castgame-hint">Pick two fighters — character vs character, any matchup.</p>
        <div class="castgame-grid" id="castgame-grid-a">
          ${FIGHTERS.map(f => `
            <button class="castgame-card" data-id="${f.id}" data-slot="a" type="button">
              <img src="assets/characters/${f.id}.svg" alt="" />
              <span>${f.name}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
    let slotA = null;
    const grid = host.querySelector('#castgame-grid-a');
    const hint = host.querySelector('.castgame-hint');
    grid.querySelectorAll('.castgame-card').forEach(btn => {
      btn.addEventListener('click', () => {
        if (!slotA) {
          slotA = btn.dataset.id;
          hint.textContent = `${fighterById(slotA).name} is fighting who?`;
          grid.querySelectorAll('.castgame-card').forEach(b => b.classList.toggle('picked', b.dataset.id === slotA));
        } else {
          const slotB = btn.dataset.id;
          if (slotB === slotA) return;
          onPick(slotA, slotB);
        }
      });
    });
  }

  function rand(range) { return range[0] + Math.floor(Math.random() * (range[1] - range[0] + 1)); }

  // ─── Battle screen ───
  function renderBattle(host, idA, idB, onRematch, onBackToPicker) {
    const fA = fighterById(idA), fB = fighterById(idB);
    if (!fA || !fB) { onBackToPicker(); return; }
    let hpA = MAX_HP, hpB = MAX_HP;
    let meterA = 0;
    let over = false;
    let lastLight = 0, lastHeavy = 0, lastBlock = -Infinity;
    let playerBlockingUntil = 0;
    let cpuTimer = null;
    let logTimer = null;

    host.innerHTML = `
      <div class="castgame-battle">
        <div class="castgame-fighter castgame-fighter-a">
          <div class="castgame-hpbar"><div class="castgame-hpfill" id="cg-hp-a"></div></div>
          <div class="castgame-meterbar"><div class="castgame-meterfill" id="cg-meter-a"></div></div>
          <div class="castgame-name">${fA.name}</div>
          <img src="assets/characters/${fA.id}.svg" alt="" id="cg-img-a" />
        </div>
        <div class="castgame-vs">VS</div>
        <div class="castgame-fighter castgame-fighter-b">
          <div class="castgame-hpbar"><div class="castgame-hpfill" id="cg-hp-b"></div></div>
          <div class="castgame-name">${fB.name}</div>
          <img src="assets/characters/${fB.id}.svg" alt="" id="cg-img-b" class="castgame-flip" />
        </div>
      </div>
      <div class="castgame-log" id="cg-log">&nbsp;</div>
      <div class="castgame-controls" id="cg-controls">
        <button class="castgame-move-btn castgame-move-light" id="cg-light" type="button">
          <span>🥊 Light</span><small>fast, low dmg</small>
        </button>
        <button class="castgame-move-btn castgame-move-heavy" id="cg-heavy" type="button">
          <span>🔨 Heavy</span><small>slow, high dmg</small>
        </button>
        <button class="castgame-move-btn castgame-move-block" id="cg-block" type="button">
          <span>🛡️ Block</span><small>cuts incoming dmg</small>
        </button>
        <button class="castgame-move-btn castgame-move-special" id="cg-special" type="button" disabled>
          <span>✨ ${fA.special}</span><small>charge meter to use</small>
        </button>
      </div>
      <div class="castgame-controls-hint">Space = Light, Shift = Heavy, Ctrl = Block</div>
      <div class="castgame-result" id="cg-result" style="display:none;"></div>
      <div class="castgame-postgame" id="cg-postgame" style="display:none;">
        <button class="castgame-attack-btn" id="cg-rematch" type="button">Rematch</button>
        <button class="castgame-attack-btn castgame-secondary" id="cg-back" type="button">Choose new fighters</button>
      </div>
    `;
    const hpFillA = host.querySelector('#cg-hp-a');
    const hpFillB = host.querySelector('#cg-hp-b');
    const meterFillA = host.querySelector('#cg-meter-a');
    const imgA = host.querySelector('#cg-img-a');
    const imgB = host.querySelector('#cg-img-b');
    const logEl = host.querySelector('#cg-log');
    const controlsEl = host.querySelector('#cg-controls');
    const lightBtn = host.querySelector('#cg-light');
    const heavyBtn = host.querySelector('#cg-heavy');
    const blockBtn = host.querySelector('#cg-block');
    const specialBtn = host.querySelector('#cg-special');
    const resultEl = host.querySelector('#cg-result');
    const postgameEl = host.querySelector('#cg-postgame');

    function paint() {
      hpFillA.style.width = Math.max(0, hpA) + '%';
      hpFillB.style.width = Math.max(0, hpB) + '%';
      meterFillA.style.width = meterA + '%';
      specialBtn.disabled = meterA < MAX_METER || over;
    }
    function bump(el) {
      el.classList.remove('castgame-hit');
      void el.offsetWidth;
      el.classList.add('castgame-hit');
    }
    function lunge(el) {
      el.classList.remove('castgame-lunge');
      void el.offsetWidth;
      el.classList.add('castgame-lunge');
    }
    function log(text) {
      logEl.textContent = text;
      clearTimeout(logTimer);
      logTimer = setTimeout(() => { logEl.innerHTML = '&nbsp;'; }, 1800);
    }
    function isPlayerBlocking() { return performance.now() < playerBlockingUntil; }

    async function finish(winnerId, loserId) {
      over = true;
      clearTimeout(cpuTimer);
      controlsEl.style.display = 'none';
      host.querySelector('.castgame-controls-hint').style.display = 'none';
      resultEl.style.display = 'block';
      resultEl.textContent = `${fighterById(winnerId).name} wins! Recording the result…`;
      const { winnerScore, loserScore } = await recordMatch(winnerId, loserId);
      resultEl.textContent = `🏆 ${winnerScore} ${fighterById(winnerId).name} defeated ${loserScore} ${fighterById(loserId).name}`;
      postgameEl.style.display = 'flex';
    }

    function playerLight() {
      if (over) return;
      const now = performance.now();
      if (now - lastLight < LIGHT_COOLDOWN_MS) return;
      lastLight = now;
      const dmg = rand(LIGHT_DMG);
      hpB -= dmg;
      meterA = Math.min(MAX_METER, meterA + LIGHT_METER_GAIN);
      lunge(imgA); bump(imgB);
      log(`${fA.name} lands a quick hit — ${dmg} dmg`);
      paint();
      if (hpB <= 0) { finish(fA.id, fB.id); return; }
      scheduleCpu();
    }
    function playerHeavy() {
      if (over) return;
      const now = performance.now();
      if (now - lastHeavy < HEAVY_COOLDOWN_MS) return;
      lastHeavy = now;
      let dmg = rand(HEAVY_DMG);
      let blocked = false;
      if (Math.random() < CPU_BLOCK_CHANCE_VS_HEAVY) {
        dmg = Math.round(dmg * BLOCK_DAMAGE_MULT);
        blocked = true;
      }
      hpB -= dmg;
      meterA = Math.min(MAX_METER, meterA + HEAVY_METER_GAIN);
      lunge(imgA); bump(imgB);
      log(blocked ? `${fB.name} blocks most of it — ${dmg} dmg` : `${fA.name} lands a heavy hit — ${dmg} dmg!`);
      paint();
      if (hpB <= 0) { finish(fA.id, fB.id); return; }
      scheduleCpu();
    }
    function playerBlock() {
      if (over) return;
      const now = performance.now();
      if (now - lastBlock < BLOCK_COOLDOWN_MS) return;
      lastBlock = now;
      playerBlockingUntil = now + BLOCK_WINDOW_MS;
      imgA.classList.add('castgame-blocking');
      setTimeout(() => imgA.classList.remove('castgame-blocking'), BLOCK_WINDOW_MS);
      log(`${fA.name} braces to block`);
    }
    function playerSpecial() {
      if (over || meterA < MAX_METER) return;
      const dmg = rand(SPECIAL_DMG);
      hpB -= dmg;
      meterA = 0;
      lunge(imgA); bump(imgB);
      log(`✨ ${fA.name} unleashes ${fA.special} — ${dmg} dmg!`);
      paint();
      if (hpB <= 0) { finish(fA.id, fB.id); return; }
      scheduleCpu();
    }

    function cpuAttack() {
      if (over) return;
      const heavy = Math.random() < CPU_HEAVY_CHANCE;
      let dmg = rand(heavy ? HEAVY_DMG : LIGHT_DMG);
      let blocked = false;
      if (isPlayerBlocking()) {
        dmg = Math.round(dmg * BLOCK_DAMAGE_MULT);
        blocked = true;
      }
      hpA -= dmg;
      lunge(imgB); bump(imgA);
      log(blocked ? `${fA.name} blocks it — ${dmg} dmg` : `${fB.name} hits back — ${dmg} dmg`);
      paint();
      if (hpA <= 0) { finish(fB.id, fA.id); return; }
      scheduleCpu();
    }
    function scheduleCpu() {
      clearTimeout(cpuTimer);
      if (over) return;
      const [lo, hi] = CPU_ATTACK_EVERY_MS;
      cpuTimer = setTimeout(cpuAttack, lo + Math.random() * (hi - lo));
    }

    lightBtn.addEventListener('click', playerLight);
    heavyBtn.addEventListener('click', playerHeavy);
    blockBtn.addEventListener('click', playerBlock);
    specialBtn.addEventListener('click', playerSpecial);
    const keyHandler = (e) => {
      if (e.code === 'Space') { e.preventDefault(); playerLight(); }
      else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') { e.preventDefault(); playerHeavy(); }
      else if (e.code === 'ControlLeft' || e.code === 'ControlRight') { e.preventDefault(); playerBlock(); }
    };
    window.addEventListener('keydown', keyHandler);
    host._castgameCleanup = () => { window.removeEventListener('keydown', keyHandler); clearTimeout(cpuTimer); clearTimeout(logTimer); };

    host.querySelector('#cg-rematch').addEventListener('click', () => { onRematch(idA, idB); });
    host.querySelector('#cg-back').addEventListener('click', () => { onBackToPicker(); });

    paint();
    scheduleCpu();
  }

  return { FIGHTERS, renderPicker, renderBattle };
})();
