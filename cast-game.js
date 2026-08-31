/* XENOS NOTES — "Cast Clash", a tiny 1-on-1 fighting game for the
 * Doc.Azuz/Raerae/Lulu/Ra'ad/Pika/CJ cast. Vector-art based (reuses the
 * same assets/characters/*.svg already deployed as page decorations) —
 * no pixel sprites, unlike M & A's game. Click/tap or press Space to
 * attack; the CPU opponent swings back on its own timer. First fighter
 * to 0 HP loses. On win, the running score for both fighters updates in
 * Supabase (window.XENOS_SUPABASE, same project the rest of the site
 * uses) and, if a webhook is configured, the result is posted to
 * Discord — see data/discord-webhook-config.js.
 *
 * Public API: window.XenosCastGame.renderPicker(host, onPick)
 *             window.XenosCastGame.renderBattle(host, fighterAId, fighterBId, onRematch, onBackToPicker)
 */
window.XenosCastGame = (function () {
  const FIGHTERS = [
    { id: 'doc-azuz', name: 'Doc.Azuz' },
    { id: 'raerae', name: 'Raerae' },
    { id: 'lulu', name: 'Queen Lulu' },
    { id: 'raad', name: "Ra'ad" },
    { id: 'pika', name: 'Pika' },
    { id: 'cj', name: 'CJ' },
  ];
  const MAX_HP = 100;
  const ATTACK_COOLDOWN_MS = 550;
  const CPU_ATTACK_EVERY_MS = [900, 1600];
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

  // ─── Battle screen ───
  function renderBattle(host, idA, idB, onRematch, onBackToPicker) {
    const fA = fighterById(idA), fB = fighterById(idB);
    if (!fA || !fB) { onBackToPicker(); return; }
    let hpA = MAX_HP, hpB = MAX_HP;
    let over = false;
    let lastPlayerAttack = 0;
    let cpuTimer = null;

    host.innerHTML = `
      <div class="castgame-battle">
        <div class="castgame-fighter castgame-fighter-a">
          <div class="castgame-hpbar"><div class="castgame-hpfill" id="cg-hp-a"></div></div>
          <div class="castgame-name">${fA.name}</div>
          <img src="assets/characters/${fA.id}.svg" alt="" id="cg-img-a" />
        </div>
        <div class="castgame-vs">VS</div>
        <div class="castgame-fighter castgame-fighter-b">
          <div class="castgame-hpbar"><div class="castgame-hpfill" id="cg-hp-b"></div></div>
          <div class="castgame-name">${fB.name}</div>
          <img src="assets/characters/${fB.id}.svg" alt="" id="cg-img-b" class="castgame-flip" />
        </div>
        <button class="castgame-attack-btn" id="cg-attack" type="button">⚔️ Attack (or press Space)</button>
        <div class="castgame-result" id="cg-result" style="display:none;"></div>
        <div class="castgame-postgame" id="cg-postgame" style="display:none;">
          <button class="castgame-attack-btn" id="cg-rematch" type="button">Rematch</button>
          <button class="castgame-attack-btn castgame-secondary" id="cg-back" type="button">Choose new fighters</button>
        </div>
      </div>
    `;
    const hpFillA = host.querySelector('#cg-hp-a');
    const hpFillB = host.querySelector('#cg-hp-b');
    const imgA = host.querySelector('#cg-img-a');
    const imgB = host.querySelector('#cg-img-b');
    const attackBtn = host.querySelector('#cg-attack');
    const resultEl = host.querySelector('#cg-result');
    const postgameEl = host.querySelector('#cg-postgame');

    function paint() {
      hpFillA.style.width = Math.max(0, hpA) + '%';
      hpFillB.style.width = Math.max(0, hpB) + '%';
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

    async function finish(winnerId, loserId) {
      over = true;
      clearTimeout(cpuTimer);
      attackBtn.style.display = 'none';
      resultEl.style.display = 'block';
      resultEl.textContent = `${fighterById(winnerId).name} wins! Recording the result…`;
      const { winnerScore, loserScore } = await recordMatch(winnerId, loserId);
      resultEl.textContent = `🏆 ${winnerScore} ${fighterById(winnerId).name} defeated ${loserScore} ${fighterById(loserId).name}`;
      postgameEl.style.display = 'flex';
    }

    function playerAttack() {
      if (over) return;
      const now = performance.now();
      if (now - lastPlayerAttack < ATTACK_COOLDOWN_MS) return;
      lastPlayerAttack = now;
      const dmg = 8 + Math.floor(Math.random() * 11);
      hpB -= dmg;
      lunge(imgA); bump(imgB);
      paint();
      if (hpB <= 0) { finish(fA.id, fB.id); return; }
      scheduleCpu();
    }
    function cpuAttack() {
      if (over) return;
      const dmg = 8 + Math.floor(Math.random() * 11);
      hpA -= dmg;
      lunge(imgB); bump(imgA);
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

    attackBtn.addEventListener('click', playerAttack);
    const keyHandler = (e) => { if (e.code === 'Space') { e.preventDefault(); playerAttack(); } };
    window.addEventListener('keydown', keyHandler);
    host._castgameCleanup = () => { window.removeEventListener('keydown', keyHandler); clearTimeout(cpuTimer); };

    host.querySelector('#cg-rematch').addEventListener('click', () => { onRematch(idA, idB); });
    host.querySelector('#cg-back').addEventListener('click', () => { onBackToPicker(); });

    paint();
    scheduleCpu();
  }

  return { FIGHTERS, renderPicker, renderBattle };
})();
