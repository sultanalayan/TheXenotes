/* XENOS NOTES — shared engine
 * Renders the library home (all registered books) and the book viewer (sidebar +
 * sections), driven by hash routing so links are shareable and back/forward work.
 * Adding a book only ever touches books/<slug>.js + one <script> tag in index.html —
 * this file never needs to change for new content. */

window.XenosBooks = (function () {
  const registry = [];
  return {
    register(book) { registry.push(book); },
    all() { return registry; },
    get(slug) { return registry.find(b => b.slug === slug); },
  };
})();

// Every books/*.js <script> tag in index.html carries a data-title matching
// its book. If a book file has a bug (most often a stray unescaped quote
// breaking its JS) its <script> never runs and it never calls register() —
// with no error visible anywhere. Comparing the two lists catches exactly
// that: any script whose slug never made it into the registry is a book
// that failed to load, and its title (read straight off the tag, not from
// the broken file) is enough to warn about it without guessing further.
function getFailedBookTitles() {
  const registered = new Set(XenosBooks.all().map(b => b.slug));
  return Array.from(document.querySelectorAll('script[src^="books/"][data-title]'))
    .filter(s => !registered.has(s.getAttribute('src').replace(/^books\//, '').replace(/\.js$/, '')))
    .map(s => s.dataset.title);
}

function tintedBg(color, alpha) {
  return `color-mix(in srgb, ${color} ${Math.round(alpha * 100)}%, transparent)`;
}

// Shows a small "Your best: X / Y" badge above a quiz, pulled from Supabase
// if the visitor is signed in and has a saved result for this section.
function showBestBadge(badgeEl, bookSlug, sectionId) {
  if (!badgeEl || !window.XenosAuth || !window.XenosAuth.getQuizResult) return;
  window.XenosAuth.getQuizResult(bookSlug, sectionId).then(result => {
    if (!result) { badgeEl.style.display = 'none'; return; }
    badgeEl.textContent = `⭐ Your best: ${result.correct} / ${result.total}`;
    badgeEl.style.display = '';
  });
}

// ─── Mode switch — ☀️ light · ⭐ dark (brown/pink) · 🌙 high-contrast (black & white) ───
// One stored preference, 'xenos-theme', one of 'light' | 'dark' | 'contrast'.
// index.html's inline head script already applied the right data-theme
// before first paint — this just syncs the three buttons and wires clicks.
(function initModeSwitch() {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('.mode-btn');
  if (!buttons.length) return;

  function current() {
    try {
      const m = localStorage.getItem('xenos-theme');
      return (m === 'dark' || m === 'contrast') ? m : 'light';
    } catch (e) { return 'light'; }
  }
  function apply(mode) {
    if (mode === 'light') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', mode);
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.mode === mode)));
  }
  apply(current());

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      try { localStorage.setItem('xenos-theme', mode); } catch (e) {}
      apply(mode);
    });
  });
})();

// ─── Mascot buttons — M (left) & A (right), bob on the library home page,
// both are just two cute doors into the same game. Wired on DOMContentLoaded
// (not immediately) since data/mascot-sprites.js loads after this file. ───
function initMascotButtons() {
  const btnM = document.getElementById('mascot-btn-m');
  const btnA = document.getElementById('mascot-btn-a');
  if (!btnM || !btnA || !window.XENOS_MASCOTS) return;
  const svgM = window.XENOS_MASCOTS.toSVG('M', 1);
  const svgA = window.XENOS_MASCOTS.toSVG('A', 1);
  btnM.insertAdjacentHTML('afterbegin', svgM);
  btnA.insertAdjacentHTML('afterbegin', svgA);
  btnM.addEventListener('click', () => { location.hash = '#/play/m'; });
  btnA.addEventListener('click', () => { location.hash = '#/play/a'; });
}
window.addEventListener('DOMContentLoaded', initMascotButtons);

// ─── Cast decorations — a themed character quietly sits in the corner of
// specific book pages (name + companion shown on hover/focus). Purely
// decorative otherwise; one shared wrapper element gets swapped/hidden
// on each route change rather than injecting a fresh element per book. ───
const CHARACTER_LABELS = {
  'doc-azuz': "Doc.Azuz & Juju",
  'raerae': "Raerae & Essssssss",
  'lulu': "Queen Lulu & her royal unicorn",
  'raad': "Ra'ad & Usuul",
  'pika': "Pika & Chuu",
  'cj': "CJ, X, Y & Z",
};
const BOOK_CHARACTER_MAP = {
  // Iʿjāz
  'ijaz-ilmi': { char: 'doc-azuz', side: 'right' },
  // Fiqh — both books in the category
  'al-waraqat': { char: 'raad', side: 'right' },
  'milk-al-yamin': { char: 'raad', side: 'right' },
  // Aqeedah — every book in the category
  '200-questions-aqeedah': { char: 'pika', side: 'right' },
  'enjoining-right': { char: 'pika', side: 'right' },
  'fear-and-hope': { char: 'pika', side: 'right' },
  'sharh-al-sunnah': { char: 'pika', side: 'right' },
  'shifa-al-alil': { char: 'pika', side: 'right' },
  // Manṭiq
  'mantiq-bayan': { char: 'cj', side: 'right' },
  // Love & Family — a few books split between Raerae and Lulu
  'nurturing-eeman-children': { char: 'raerae', side: 'left' },
  'happiest-woman': { char: 'raerae', side: 'left' },
  'now-a-mother': { char: 'raerae', side: 'left' },
  'winning-wife-heart': { char: 'lulu', side: 'left' },
  'winning-husband-heart': { char: 'lulu', side: 'left' },
  'best-of-husbands': { char: 'lulu', side: 'left' },
};
function updateBookCharacter(slug) {
  let wrap = document.getElementById('page-character-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'page-character-wrap';
    wrap.className = 'page-character-wrap';
    wrap.tabIndex = 0;
    wrap.innerHTML = '<img alt="" /><span class="char-deco-label"></span>';
    document.body.appendChild(wrap);
  }
  const entry = BOOK_CHARACTER_MAP[slug];
  if (!entry) { wrap.classList.remove('active'); return; }
  wrap.querySelector('img').src = `assets/characters/${entry.char}.svg`;
  wrap.querySelector('.char-deco-label').textContent = CHARACTER_LABELS[entry.char] || '';
  wrap.className = `page-character-wrap active pc-${entry.side}`;
}

// ─── Routing ───
function parseHash() {
  const raw = location.hash.replace(/^#\/?/, '');
  if (!raw) return { view: 'library' };
  const parts = raw.split('/').filter(Boolean);
  if (parts[0] === 'book' && parts[1]) {
    return { view: 'book', slug: parts[1], section: parts[2] || null };
  }
  if (parts[0] === 'arabic') {
    return { view: 'arabic', levelId: parts[1] ? parseInt(parts[1], 10) : null };
  }
  if (parts[0] === 'play') {
    return { view: 'play', who: parts[1] === 'a' ? 'a' : (parts[1] === 'm' ? 'm' : null) };
  }
  if (parts[0] === 'castgame') {
    return { view: 'castgame' };
  }
  if (parts[0] === 'saved') {
    return { view: 'saved' };
  }
  if (parts[0] === 'leaderboard') {
    return { view: 'leaderboard' };
  }
  return { view: 'library' };
}

function isGated() {
  const acc = window.XenosAccess;
  return !!(acc && acc.gateEnabled && acc.status !== 'granted');
}

function route() {
  const r = parseHash();
  if (window.XenosGame && r.view !== 'play') window.XenosGame.stop();
  // Clear any book's corner character by default; renderBook() re-sets it
  // right after if the new route is a book with one mapped (this also
  // covers renderArabicApp, which reuses the 'view-book' body class).
  updateBookCharacter(null);
  if (r.view === 'book' && XenosBooks.get(r.slug) && !isGated()) {
    renderBook(r.slug, r.section);
  } else if (r.view === 'arabic') {
    renderArabicApp(r.levelId);
  } else if (r.view === 'play') {
    renderPlayPage(r.who);
  } else if (r.view === 'castgame') {
    renderCastGamePage();
  } else if (r.view === 'saved') {
    renderSavedNotes();
  } else if (r.view === 'leaderboard') {
    renderLeaderboardPage();
  } else {
    renderLibrary();
  }
  closeSidebar();
  window.scrollTo(0, 0);
}

// ─── Learn Arabic — its own full page, same shell as a book (header +
// sidebar), not gated behind Discord sign-in since it lives next to the
// always-public Names/Huroof sections on the home page. ───
function renderArabicApp(levelId) {
  const levels = window.XENOS_ARABIC_LEVELS || [];
  if (!levels.length || !window.XenosArabicApp) { renderLibrary(); return; }
  document.body.classList.add('view-book');
  document.body.classList.remove('view-library', 'view-play');

  document.getElementById('header-title').textContent = 'Learn Arabic — Interactive';
  document.getElementById('header-sub').textContent = 'Six levels, from your first letter to full sentence parsing (iʿrāb).';
  document.getElementById('header-arabic-bg').textContent = 'تعلم العربية';
  document.getElementById('header-tags').innerHTML = ['Ḥurūf', 'Naḥw', 'Iʿrāb', 'Qirāʾah'].map(t => `<span class="header-tag">${t}</span>`).join('');

  const validLevel = levelId && levels.find(l => l.id === levelId);
  document.getElementById('sidebar-wrap').innerHTML = `
    <a href="#/" class="back-to-library">← All Notes</a>
    <p class="sidebar-label">Learn Arabic</p>
    <div id="arabic-nav-items">
      ${levels.map(lvl => `
        <button class="nav-btn ${validLevel && levelId === lvl.id ? 'active' : ''}" data-goto="${lvl.id}" style="--accent:${lvl.color}">
          <span class="nav-icon">${lvl.icon}</span>
          <span class="nav-labels">
            <span class="nav-main">Level ${lvl.id}</span>
            <span class="nav-sub">${lvl.subtitle.replace(/^Level \d+ — /, '')}</span>
          </span>
        </button>
      `).join('')}
    </div>
    <div class="sidebar-footer">
      <div class="sidebar-footer-name">Learn Arabic — Interactive</div>
      <div class="sidebar-footer-desc">Built from two real Arabic-language course books — flashcards, matching, listening, reading, and full sentence parsing.</div>
    </div>
  `;
  document.querySelectorAll('#arabic-nav-items .nav-btn').forEach(btn => {
    btn.addEventListener('click', () => { location.hash = `#/arabic/${btn.dataset.goto}`; });
  });

  const content = document.getElementById('content');
  content.classList.remove('fade-in');
  void content.offsetWidth;
  content.innerHTML = `<div class="arabic-page"><div class="arabic-page-host" id="arabic-page-host"></div></div>`;
  content.classList.add('fade-in');

  const host = document.getElementById('arabic-page-host');
  if (validLevel) {
    window.XenosArabicApp.renderLevel(host, levelId, () => { location.hash = '#/arabic'; });
  } else {
    window.XenosArabicApp.renderGrid(host, (id) => { location.hash = `#/arabic/${id}`; });
  }
}

// ─── The Game — M & A's little jump-and-catch. Same one game behind both
// mascots ("two cute doors"); `who` only changes the welcome line and which
// sprite you play as. Not gated — it's a fun extra, not study content. ───
const XENOS_GAME_HIGHSCORE_KEY = 'xenos-game-highscore';
function getGameHighScore() {
  try { return parseInt(localStorage.getItem(XENOS_GAME_HIGHSCORE_KEY), 10) || 0; } catch (e) { return 0; }
}

const MASCOT_LINES = {
  m: "Assalamu alaikum! I'm M — tap or press Space to jump. Clear the obstacles and catch the stars with me!",
  a: "Hey, I'm A! Bet you can't beat my high score. Tap or press Space to jump — let's see what you've got!",
};

function renderPlayPage(whoParam) {
  const who = whoParam === 'a' ? 'a' : 'm';
  document.body.classList.add('view-play');
  document.body.classList.remove('view-library', 'view-book');

  document.getElementById('header-title').textContent = "M & A's Little Game";
  document.getElementById('header-sub').textContent = 'A tiny arcade break — jump the obstacles, catch the stars.';
  document.getElementById('header-arabic-bg').textContent = 'العب';
  document.getElementById('header-tags').innerHTML = ['Jump', 'Catch', 'High Score'].map(t => `<span class="header-tag">${t}</span>`).join('');
  document.getElementById('sidebar-wrap').innerHTML = '';

  const mascotSvg = window.XENOS_MASCOTS ? window.XENOS_MASCOTS.toSVG(who === 'a' ? 'A' : 'M', 1) : '';
  const best = getGameHighScore();

  const content = document.getElementById('content');
  content.classList.remove('fade-in');
  void content.offsetWidth;
  content.innerHTML = `
    <div class="play-page">
      <a href="#/" class="back-to-library play-back-link">← All Notes</a>

      <div class="play-intro" id="play-intro">
        <div class="play-mascot-big">${mascotSvg}</div>
        <div class="play-speech" id="play-speech">${MASCOT_LINES[who]}</div>
        <div class="play-door-switch" role="group" aria-label="Choose your mascot">
          <button class="play-door-btn ${who === 'm' ? 'active' : ''}" data-who="m" type="button">M</button>
          <button class="play-door-btn ${who === 'a' ? 'active' : ''}" data-who="a" type="button">A</button>
        </div>
        <div class="play-highscore">🏆 Best score: <span id="play-highscore-val">${best}</span></div>
        <button class="play-start-btn" id="play-start-btn" type="button">▶ Start Game</button>
        <div class="play-controls-hint">Tap the screen, click, or press <b>Space</b> to jump — clear the obstacles, catch the stars for bonus points!</div>
      </div>

      <div class="play-canvas-wrap" id="play-canvas-wrap" style="display:none;">
        <div class="play-hud">
          <span id="play-hud-score">Score: 0</span>
          <span id="play-hud-best">Best: ${best}</span>
        </div>
        <canvas id="xenos-game-canvas" class="xenos-game-canvas"></canvas>
        <button class="play-jump-btn" id="play-jump-btn" type="button">JUMP</button>
      </div>

      <div class="play-gameover" id="play-gameover" style="display:none;">
        <div class="play-gameover-title">Game Over</div>
        <div class="play-gameover-score" id="play-gameover-score"></div>
        <button class="play-btn-primary" id="play-again-btn" type="button">↻ Play Again</button>
        <a href="#/" class="play-btn-secondary">← Back to Library</a>
      </div>
    </div>
  `;
  content.classList.add('fade-in');

  const introEl = document.getElementById('play-intro');
  const canvasWrapEl = document.getElementById('play-canvas-wrap');
  const gameOverEl = document.getElementById('play-gameover');
  const canvas = document.getElementById('xenos-game-canvas');

  document.querySelectorAll('.play-door-btn').forEach(btn => {
    btn.addEventListener('click', () => { location.hash = `#/play/${btn.dataset.who}`; });
  });

  document.getElementById('play-start-btn').addEventListener('click', () => {
    introEl.style.display = 'none';
    gameOverEl.style.display = 'none';
    canvasWrapEl.style.display = '';
    if (window.XenosGame) window.XenosGame.start(canvas, who, onGameOver);
  });

  document.getElementById('play-again-btn').addEventListener('click', () => {
    gameOverEl.style.display = 'none';
    canvasWrapEl.style.display = '';
    if (window.XenosGame) window.XenosGame.start(canvas, who, onGameOver);
  });

  function onGameOver(finalScore, highScore, isNewHigh) {
    canvasWrapEl.style.display = 'none';
    gameOverEl.style.display = '';
    document.getElementById('play-gameover-score').innerHTML =
      `Score: <b>${finalScore}</b>` + (isNewHigh ? ' — <span class="play-newhigh">✨ New high score!</span>' : ` · Best: <b>${highScore}</b>`);
  }
}

// ─── Cast Clash — the character cast's own 1-on-1 fighting game. Vector
// art (not pixel sprites), lives entirely in cast-game.js; this just
// owns the page shell + picker→battle state, matching the renderPlayPage
// shell pattern above. ───
function renderCastGamePage() {
  document.body.classList.add('view-play');
  document.body.classList.remove('view-library', 'view-book');

  document.getElementById('header-title').textContent = 'Cast Clash';
  document.getElementById('header-sub').textContent = 'Pick two fighters from the cast and see who wins.';
  document.getElementById('header-arabic-bg').textContent = 'قتال';
  document.getElementById('header-tags').innerHTML = ['1v1', 'Leaderboard'].map(t => `<span class="header-tag">${t}</span>`).join('');
  document.getElementById('sidebar-wrap').innerHTML = '';

  const content = document.getElementById('content');
  content.classList.remove('fade-in');
  void content.offsetWidth;
  content.innerHTML = `
    <div class="play-page">
      <a href="#/" class="back-to-library play-back-link">← All Notes</a>
      <div class="castgame-host" id="castgame-host"></div>
    </div>
  `;
  content.classList.add('fade-in');

  const host = document.getElementById('castgame-host');
  if (!window.XenosCastGame) { host.innerHTML = '<p>Cast Clash isn\'t available right now.</p>'; return; }

  function cleanup() { if (host._castgameCleanup) { host._castgameCleanup(); host._castgameCleanup = null; } }

  function showPicker() {
    cleanup();
    window.XenosCastGame.renderPicker(host, (idA, idB) => showBattle(idA, idB));
  }
  function showBattle(idA, idB) {
    cleanup();
    window.XenosCastGame.renderBattle(host, idA, idB, (a, b) => showBattle(a, b), showPicker);
  }
  showPicker();
}

// ─── My Saved Notes — every bookmark a signed-in visitor has made, across
// every book, linking straight back to the section it was saved from. ───
async function renderSavedNotes() {
  document.body.classList.add('view-play');
  document.body.classList.remove('view-library', 'view-book');

  document.getElementById('header-title').textContent = 'My Saved Notes';
  document.getElementById('header-sub').textContent = 'Every section you\'ve bookmarked, in one place.';
  document.getElementById('header-arabic-bg').textContent = 'المحفوظات';
  document.getElementById('header-tags').innerHTML = '';
  document.getElementById('sidebar-wrap').innerHTML = '';

  const content = document.getElementById('content');
  content.classList.remove('fade-in');
  void content.offsetWidth;

  const currentUser = window.XenosAuth && window.XenosAuth.getCurrentUser ? await window.XenosAuth.getCurrentUser() : null;

  if (!currentUser || !window.XenosAuth) {
    content.innerHTML = `
      <div class="play-page">
        <a href="#/" class="back-to-library play-back-link">← All Notes</a>
        <div class="play-intro">
          <div class="play-mascot-big" style="font-size:44px;">🔖</div>
          <div class="play-speech">Sign in to bookmark sections and build your own saved-notes list.</div>
        </div>
      </div>
    `;
    content.classList.add('fade-in');
    return;
  }

  content.innerHTML = `
    <div class="play-page">
      <a href="#/" class="back-to-library play-back-link">← All Notes</a>
      <div class="saved-notes-list" id="saved-notes-list"><div class="empty-state">Loading…</div></div>
    </div>
  `;
  content.classList.add('fade-in');

  const bookmarks = await window.XenosAuth.getBookmarks();
  const listEl = document.getElementById('saved-notes-list');
  if (!listEl) return; // navigated away while loading

  if (!bookmarks.length) {
    listEl.innerHTML = `<div class="empty-state">No saved notes yet — open any section and tap 🔖 to save it here.</div>`;
    return;
  }

  listEl.innerHTML = bookmarks.map(bm => {
    const book = XenosBooks.get(bm.book_slug);
    const sec = book && book.sections.find(s => s.id === bm.section_id);
    if (!book || !sec) return ''; // book/section since removed or renamed
    const noteText = (bm.note || '').trim();
    return `
      <div class="saved-note-card" data-bookmark-id="${bm.id}">
        <a class="saved-note-link" href="#/book/${book.slug}/${sec.id}">
          <div class="saved-note-icon">${sec.icon}</div>
          <div class="saved-note-body">
            <div class="saved-note-path">${book.title} <span class="content-result-sep">›</span> ${sec.label}</div>
            <div class="saved-note-date">Saved ${new Date(bm.created_at).toLocaleDateString()}</div>
          </div>
        </a>
        <div class="saved-note-remark" data-bookmark-id="${bm.id}" title="Click to edit your remark">${noteText ? escapeHtml(noteText) : '<span class="saved-note-remark-empty">+ add a remark</span>'}</div>
        <button class="saved-note-remove" title="Remove">✕</button>
      </div>
    `;
  }).join('') || `<div class="empty-state">No saved notes yet — open any section and tap 🔖 to save it here.</div>`;

  listEl.querySelectorAll('.saved-note-remove').forEach(btn => {
    btn.addEventListener('click', async () => {
      const card = btn.closest('.saved-note-card');
      btn.disabled = true;
      await window.XenosAuth.removeBookmark(card.dataset.bookmarkId);
      card.remove();
      if (!listEl.querySelector('.saved-note-card')) {
        listEl.innerHTML = `<div class="empty-state">No saved notes yet — open any section and tap 🔖 to save it here.</div>`;
      }
    });
  });

  listEl.querySelectorAll('.saved-note-remark').forEach(remarkEl => {
    remarkEl.addEventListener('click', () => {
      if (remarkEl.querySelector('input')) return; // already editing
      const id = remarkEl.dataset.bookmarkId;
      const current = remarkEl.textContent.trim() === '+ add a remark' ? '' : remarkEl.textContent;
      remarkEl.innerHTML = `<input type="text" class="saved-note-remark-input" maxlength="280" value="${escapeHtml(current)}" placeholder="A private remark for yourself…" />`;
      const input = remarkEl.querySelector('input');
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
      const save = async () => {
        const val = input.value.trim();
        await window.XenosAuth.updateBookmarkNote(id, val);
        remarkEl.innerHTML = val ? escapeHtml(val) : '<span class="saved-note-remark-empty">+ add a remark</span>';
      };
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') input.blur(); });
      input.addEventListener('blur', save);
    });
  });
}

// ─── Leaderboard — aggregated from every visible quiz_progress row. ───
async function renderLeaderboardPage() {
  document.body.classList.add('view-play');
  document.body.classList.remove('view-library', 'view-book');

  document.getElementById('header-title').textContent = 'Leaderboard';
  document.getElementById('header-sub').textContent = 'Top quiz scores across every book.';
  document.getElementById('header-arabic-bg').textContent = 'المتصدرون';
  document.getElementById('header-tags').innerHTML = '';
  document.getElementById('sidebar-wrap').innerHTML = '';

  const content = document.getElementById('content');
  content.classList.remove('fade-in');
  void content.offsetWidth;
  content.innerHTML = `
    <div class="play-page">
      <a href="#/" class="back-to-library play-back-link">← All Notes</a>
      <div class="leaderboard-list" id="leaderboard-list"><div class="empty-state">Loading…</div></div>
    </div>
  `;
  content.classList.add('fade-in');

  if (!window.XenosAuth || !window.XenosAuth.getLeaderboard) {
    document.getElementById('leaderboard-list').innerHTML = `<div class="empty-state">Sign-in isn't set up on this site yet.</div>`;
    return;
  }

  const { error, rows } = await window.XenosAuth.getLeaderboard(50);
  const listEl = document.getElementById('leaderboard-list');
  if (!listEl) return;

  if (error) {
    // Two very different reasons produce an error here — tell them apart so
    // the message is actually useful: a visitor who isn't signed in just
    // needs to sign in (SELECT is restricted to authenticated users so
    // scores stay behind the same sign-in as the rest of the site), while a
    // missing column means the site owner hasn't run the small follow-up
    // migration that adds display_name/avatar_url to quiz_progress yet.
    const needsSignIn = /permission denied/i.test(error);
    listEl.innerHTML = needsSignIn
      ? `<div class="empty-state">Sign in to see the leaderboard.</div>`
      : `<div class="empty-state">Leaderboard isn't finished setting up yet — it needs a small follow-up database change.</div>`;
    return;
  }
  if (!rows.length) {
    listEl.innerHTML = `<div class="empty-state">No quiz scores yet — be the first! Sign in and complete any quiz.</div>`;
    return;
  }

  const medals = ['🥇', '🥈', '🥉'];
  listEl.innerHTML = rows.map((r, i) => `
    <div class="leaderboard-row ${i < 3 ? 'top-three' : ''}">
      <div class="leaderboard-rank">${medals[i] || (i + 1)}</div>
      <div class="leaderboard-avatar">${r.avatar_url ? `<img src="${r.avatar_url}" alt="" referrerpolicy="no-referrer" />` : '👤'}</div>
      <div class="leaderboard-body">
        <div class="leaderboard-name">${r.display_name}</div>
        <div class="leaderboard-sub">${r.sectionsCompleted} quiz${r.sectionsCompleted === 1 ? '' : 'zes'} completed</div>
      </div>
      <div class="leaderboard-score">${r.totalCorrect}<span class="leaderboard-score-of"> / ${r.totalQuestions}</span></div>
    </div>
  `).join('');
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);
// auth.js dispatches this once sign-in state / Discord-membership status
// resolves (it's async, so the very first route() call usually fires
// while status is still 'checking') — re-render with the final result.
window.addEventListener('xenos-access-changed', route);

// ─── Access gate — "join the Discord & sign in" wall around the book content ───
function renderAccessGate() {
  const acc = window.XenosAccess || {};
  let title, body, actionsHtml;
  if (acc.status === 'checking') {
    title = 'Checking your access…';
    body = 'One moment while we confirm your Discord membership.';
    actionsHtml = '';
  } else if (acc.reason === 'not-member') {
    title = "You're signed in — but haven't joined the server yet";
    body = 'These study notes are a perk for members of the Xenos Discord server. Join, then check again.';
    actionsHtml = `
      <a class="gate-btn gate-btn-primary" href="${acc.inviteUrl}" target="_blank" rel="noopener">Join the Discord</a>
      <button class="gate-btn gate-btn-secondary" id="gate-retry-btn" type="button">I've joined — check again</button>
    `;
  } else if (acc.reason === 'wrong-provider') {
    title = 'Sign in with Discord to unlock the notes';
    body = "You're signed in with Google — membership can only be verified through Discord. Sign in with Discord instead (your Google sign-in still saves quiz scores just fine).";
    actionsHtml = `<button class="gate-btn gate-btn-primary" id="gate-discord-btn" type="button">Continue with Discord</button>`;
  } else if (acc.reason === 'unverified') {
    title = 'Quick re-confirmation needed';
    body = "We can't re-check Discord membership from a saved session — sign in with Discord once more to confirm you're still a member.";
    actionsHtml = `<button class="gate-btn gate-btn-primary" id="gate-discord-btn" type="button">Continue with Discord</button>`;
  } else {
    title = 'Sign in with Discord to unlock the notes';
    body = 'These study notes are a perk for members of the Xenos Discord server. Join the server, then sign in with Discord to unlock everything below.';
    actionsHtml = `<button class="gate-btn gate-btn-primary" id="gate-discord-btn" type="button">Continue with Discord</button>`;
  }
  return `
    <div class="access-gate">
      <div class="access-gate-icon">🔒</div>
      <div class="access-gate-title">${title}</div>
      <div class="access-gate-body">${body}</div>
      <div class="access-gate-actions">${actionsHtml}</div>
    </div>
  `;
}
function wireAccessGate() {
  const retryBtn = document.getElementById('gate-retry-btn');
  if (retryBtn) retryBtn.addEventListener('click', async () => {
    retryBtn.disabled = true;
    retryBtn.textContent = 'Checking…';
    await window.XenosAccess.retry();
  });
  const discordBtn = document.getElementById('gate-discord-btn');
  if (discordBtn) discordBtn.addEventListener('click', () => {
    const realBtn = document.querySelector('.auth-provider-discord');
    if (realBtn) realBtn.click();
  });
}

// ─── Search normalization — two independent sources make "the same word"
// look like different strings to a plain substring search: Arabic
// transliteration diacritics (Ḥadīth vs Hadith, Qur'ān vs Quran, Ṣaḥīḥ vs
// Sahih), and genuine alternate spellings that aren't just diacritics
// (hadith vs hadeeth, Quran vs Koran, salah vs salat). normalizeForSearch
// strips the first; XENOS_TERM_VARIANTS folds the second. Both the query
// and the indexed text are normalized identically, so a search in any
// spelling finds text in any other. ───
const XENOS_TERM_VARIANTS = [
  ['hadith', 'hadeeth', 'ahadith', 'ahadeeth', 'hadiths', 'hadeeths'],
  ['quran', 'quraan', 'koran', "qur'an", "qur'aan"],
  ['sunnah', 'sunna'],
  ['salah', 'salat', 'salaah', 'salaat'],
  ['dua', 'duaa', "du'a", "du'aa"],
  ['ramadan', 'ramadhan', 'ramadaan', 'ramzan'],
  ['tawheed', 'tawhid', 'tauheed', 'tauhid'],
  ['zakat', 'zakah', 'zakaah', 'zakaat'],
  ['hijab', 'hijaab'],
  ['dhikr', 'zikr', 'thikr'],
  ['wudu', 'wudhu', 'wuduu'],
  ['aisha', 'aishah', "a'ishah", 'ayesha'],
  ['muhammad', 'mohammed', 'mohammad', 'mohamed'],
  ['bukhari', 'bukhaari'],
  ['ummah', 'umma'],
  ['jihad', 'jihaad'],
  ['eid', 'eed'],
];
const _termVariantMap = (() => {
  const map = new Map();
  XENOS_TERM_VARIANTS.forEach(group => group.forEach(spelling => map.set(spelling, group)));
  return map;
})();
// Lowercases, decomposes accented letters (NFD) and drops the combining
// marks plus hamza/ayn apostrophes — "Ḥadīth" and "Qur'ān" both come out
// as plain "hadith" / "quran". Also returns a position map so a match
// found in the normalized string can be translated back to an offset in
// the original, human-readable text (needed to slice correct snippets).
function normalizeForSearch(text) {
  const lower = (text || '').toLowerCase();
  let norm = '';
  const map = [];
  for (let i = 0; i < lower.length; i++) {
    const decomposed = lower[i].normalize('NFD');
    for (const ch of decomposed) {
      if (/[̀-ͯ]/.test(ch)) continue; // combining diacritical mark
      if (ch === "'" || ch === '’' || ch === '`' || ch === 'ʿ' || ch === 'ʾ') continue; // hamza/ayn
      norm += ch;
      map.push(i);
    }
  }
  return { norm, map };
}
function normalizeSimple(text) {
  return normalizeForSearch(text).norm;
}
// Given an already-normalized query, returns every spelling worth trying
// against normalized text: the query itself, plus one substitution per
// word that has known alternate spellings (a handful of combinations at
// most — real queries rarely hit more than one such word).
function expandQueryVariants(normQuery) {
  const words = normQuery.split(/\s+/);
  const variants = [normQuery];
  words.forEach((word, i) => {
    const group = _termVariantMap.get(word);
    if (!group) return;
    group.forEach(alt => {
      if (alt === word) return;
      const altWords = words.slice();
      altWords[i] = alt;
      variants.push(altWords.join(' '));
    });
  });
  return variants;
}

// ─── Content search — searches *inside* every book's sections (bullets,
// Q&A, intro text), not just book titles/tags like the plain card filter
// above. Built once and cached; each book registers once at load time so
// the index never goes stale within a page session. ───
let _contentSearchIndex = null;
function _stripHtml(html) {
  return (html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}
function buildContentSearchIndex() {
  if (_contentSearchIndex) return _contentSearchIndex;
  const index = [];
  const withNorm = (entry) => {
    const { norm, map } = normalizeForSearch(entry.text);
    entry.normText = norm;
    entry.normMap = map;
    index.push(entry);
  };
  XenosBooks.all().forEach(book => {
    (book.sections || []).forEach(section => {
      if (section.intro) {
        const text = _stripHtml(section.intro);
        if (text) withNorm({ book, section, kind: 'intro', label: section.label, text });
      }
      (section.bullets || []).forEach(b => {
        const text = _stripHtml(`${b.label || ''}. ${b.text || ''}`);
        if (text) withNorm({ book, section, kind: 'bullet', label: b.label || section.label, text });
      });
      (section.qanda || []).forEach(qa => {
        const text = _stripHtml(`${qa.q || ''} ${qa.a || ''}`);
        if (text) withNorm({ book, section, kind: 'qanda', label: qa.q, text });
      });
    });
  });
  _contentSearchIndex = index;
  return index;
}
function searchContent(query) {
  const qNorm = normalizeSimple(query.trim());
  if (qNorm.length < 3) return [];
  const queryVariants = expandQueryVariants(qNorm);
  const index = buildContentSearchIndex();
  const seenSections = new Set();
  const results = [];
  for (const entry of index) {
    let normIdx = -1, matchedVariant = '';
    for (const qv of queryVariants) {
      normIdx = entry.normText.indexOf(qv);
      if (normIdx !== -1) { matchedVariant = qv; break; }
    }
    if (normIdx === -1) continue;
    const dedupeKey = entry.book.slug + '::' + entry.section.id;
    if (seenSections.has(dedupeKey)) continue; // one hit per section is enough to link to it
    seenSections.add(dedupeKey);
    // Translate the match position — found in the diacritic-stripped
    // comparison copy — back to the real text via the position map built
    // alongside it, so the snippet and highlight show actual source text
    // (however it's actually spelled there), not the normalized copy.
    const origStart = entry.normMap[normIdx];
    const origEnd = entry.normMap[normIdx + matchedVariant.length - 1] + 1;
    const matchedText = entry.text.slice(origStart, origEnd);
    const start = Math.max(0, origStart - 60);
    const end = Math.min(entry.text.length, origEnd + 60);
    let snippet = entry.text.slice(start, end);
    if (start > 0) snippet = '…' + snippet;
    if (end < entry.text.length) snippet = snippet + '…';
    results.push({ ...entry, snippet, matchedText, matchIndex: origStart - start + (start > 0 ? 1 : 0) });
    if (results.length >= 30) break;
  }
  return results;
}
function escapeHtml(s) {
  return (s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function highlightSnippet(snippet, query, matchIndex) {
  const escaped = escapeHtml(snippet);
  // matchIndex was computed on the raw (unescaped) snippet; escaping only
  // ever grows length via multi-char entities, so re-find the query in the
  // escaped text directly rather than trusting the offset across that shift.
  const q = escapeHtml(query.trim());
  const lower = escaped.toLowerCase();
  const i = lower.indexOf(q.toLowerCase());
  if (i === -1) return escaped;
  return escaped.slice(0, i) + '<mark>' + escaped.slice(i, i + q.length) + '</mark>' + escaped.slice(i + q.length);
}

// ─── Daily quote widget — same quote for everyone on a given calendar day,
// picked deterministically from the day-of-year so it needs no server and
// no stored state. Only shown on the plain (unfiltered, ungated) home view.
function renderDailyQuote() {
  const quotes = window.XENOS_DAILY_QUOTES;
  if (!quotes || !quotes.length) return '';
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / 86400000);
  const q = quotes[dayOfYear % quotes.length];
  return `
    <div class="daily-quote-card">
      <div class="daily-quote-label">Today's Reminder</div>
      <div class="daily-quote-ar">${q.ar}</div>
      <div class="daily-quote-en">"${q.en}"</div>
      <div class="daily-quote-source">${q.source}</div>
    </div>
  `;
}

// ─── Library home ───
function renderLibrary(filter) {
  document.body.classList.add('view-library');
  document.body.classList.remove('view-book', 'view-play');
  document.getElementById('sidebar-wrap').innerHTML = '';

  const books = XenosBooks.all();
  const q = (filter || '').trim().toLowerCase();
  // Spelling/diacritic-insensitive: "hadeeth" matches "Ḥadīth", "Quran"
  // matches "Qur'ān", etc. — see normalizeForSearch / XENOS_TERM_VARIANTS.
  const qVariants = q ? expandQueryVariants(normalizeSimple(q)) : [];
  const matchesQuery = (text) => {
    const norm = normalizeSimple(text || '');
    return qVariants.some(qv => norm.includes(qv));
  };
  const visible = q
    ? books.filter(b =>
        matchesQuery(b.title) ||
        matchesQuery(b.subtitle) ||
        matchesQuery(b.category) ||
        (b.tags || []).some(t => matchesQuery(t)))
    : books;

  const groups = new Map();
  visible.forEach(b => {
    const cat = b.category || 'Notes';
    if (!groups.has(cat)) groups.set(cat, []);
    groups.get(cat).push(b);
  });

  let stagger = 0;
  const groupsHtml = Array.from(groups.entries()).map(([cat, groupBooks]) => `
    <div class="category-group">
      <div class="category-label">${cat}</div>
      <div class="book-grid">
        ${groupBooks.map(b => {
          const html = `
            <a class="book-card" href="#/book/${b.slug}" data-slug="${b.slug}" style="--stagger:${stagger}">
              <div class="book-card-icon">${b.icon}</div>
              <div class="book-card-body">
                <div class="book-card-title">${b.title}</div>
                <div class="book-card-sub">${b.subtitle}</div>
                <div class="book-card-tags">${(b.tags || []).map(t => `<span class="tag" data-tag="${t}">${t}</span>`).join('')}</div>
              </div>
              <div class="book-card-pin-badge" style="display:none;" title="Sections you've bookmarked in this book">🔖 0</div>
              <div class="book-card-arrow">→</div>
            </a>
          `;
          stagger++;
          return html;
        }).join('')}
      </div>
    </div>
  `).join('');

  const duaHtml = `
    <div class="dua-card">
      <div class="dua-ornament">﴾ ﴿</div>
      <div class="dua-arabic">اللَّهُمَّ يَا مُقَلِّبَ الْقُلُوبِ، ثَبِّتْ قُلُوبَنَا عَلَى دِينِكَ، وَارْزُقْنَا إِيمَانًا رَاسِخًا وَيَقِينًا لَا يَتَزَعْزَعُ، وَبَارِكْ لَنَا فِي أَرْزَاقِنَا وَأَزْوَاجِنَا وَذُرِّيَّاتِنَا، وَامْنُنْ عَلَيْنَا بِالصِّحَّةِ وَالْعَافِيَةِ، وَاجْعَلْنَا مِنَ الْغُرَبَاءِ الَّذِينَ أَصْلَحُوا مَا أَفْسَدَ النَّاسُ. آمِين</div>
      <div class="dua-translit">Allāhumma yā Muqallib al-Qulūb, thabbit qulūbanā ʿalā dīnik, warzuqnā īmānan rāsikhan wa yaqīnan lā yatazaʿzaʿ, wa bārik lanā fī arzāqinā wa azwājinā wa dhurriyyātinā, wamnun ʿalaynā biṣ-ṣiḥḥati wal-ʿāfiyah, wajʿalnā minal-ghurabāʾ alladhīna aṣlaḥū mā afsada an-nās. Āmīn.</div>
      <div class="dua-translation">"O Allah, Turner of hearts — make our hearts firm upon Your religion. Grant us unshakeable faith and a certainty that never wavers. Bless our provision, our spouses, and our children. Grant us health and well-being in body and heart. And make us among the ghurabā who set right what the people corrupted."</div>
      <div class="dua-footnote">A dua for every soul in the Xenos family — <span class="dua-footnote-ar">الغرباء</span></div>
    </div>
  `;

  const namesHtml = (window.XENOS_NAMES && window.XENOS_NAMES.length) ? `
    <div class="names-section">
      <div class="names-hero" id="names-hero"></div>
      <button class="names-toggle" id="names-toggle">
        <span>Browse all ${window.XENOS_NAMES.length} Names of Allah</span>
        <span class="names-toggle-arrow">›</span>
      </button>
      <div class="names-grid-wrap" id="names-grid-wrap">
        <div class="names-grid" id="names-grid"></div>
      </div>
    </div>
  ` : '';

  const huroofHtml = (window.XENOS_HUROOF && window.XENOS_HUROOF.length) ? `
    <div class="huroof-section">
      <div class="huroof-hero" id="huroof-hero"></div>
      <button class="huroof-toggle" id="huroof-toggle">
        <span>Explore the Arabic Alphabet</span>
        <span class="huroof-toggle-arrow">›</span>
      </button>
      <div class="huroof-panel-wrap" id="huroof-panel-wrap">
        <div class="huroof-panel" id="huroof-panel"></div>
      </div>
    </div>
  ` : '';

  const arabicAppHtml = (window.XENOS_ARABIC_LEVELS && window.XENOS_ARABIC_LEVELS.length) ? `
    <a href="#/arabic" class="arabic-app-section">
      <div class="arabic-app-hero">
        <div class="arabic-app-hero-title">📚 Learn Arabic — Interactive</div>
        <div class="arabic-app-hero-sub">Six levels, from your first letter to full sentence parsing (iʿrāb) — flashcards, matching, listening, and reading, built from real Arabic-language course books.</div>
        <div class="arabic-app-cta">LEARN <span class="arabic-app-cta-arrow">→</span></div>
      </div>
    </a>
  ` : '';

  const mascotInviteHtml = window.XENOS_MASCOTS ? `
    <a href="#/play" class="mascot-invite-section">
      <div class="mascot-invite-hero">
        <div class="mascot-invite-faces">
          <div class="mascot-invite-face">${window.XENOS_MASCOTS.toSVG('M', 1)}</div>
          <div class="mascot-invite-face">${window.XENOS_MASCOTS.toSVG('A', 1)}</div>
        </div>
        <div class="mascot-invite-body">
          <div class="mascot-invite-title">Take a break with M &amp; A 🎮</div>
          <div class="mascot-invite-sub">A tiny arcade game — jump the obstacles, catch the stars, beat your high score.</div>
        </div>
        <div class="mascot-invite-cta">PLAY →</div>
      </div>
    </a>
  ` : '';

  const gated = isGated();
  const contentResults = (!gated && q) ? searchContent(q) : [];
  const contentResultsHtml = contentResults.length ? `
    <div class="content-search-results">
      <div class="content-search-label">Found inside ${contentResults.length === 30 ? '30+' : contentResults.length} note${contentResults.length === 1 ? '' : 's'}</div>
      <div class="content-search-list">
        ${contentResults.map(r => `
          <a class="content-result-card" href="#/book/${r.book.slug}/${r.section.id}">
            <div class="content-result-icon">${r.book.icon}</div>
            <div class="content-result-body">
              <div class="content-result-path">${r.book.title} <span class="content-result-sep">›</span> ${r.section.label}</div>
              <div class="content-result-snippet">${highlightSnippet(r.snippet, r.matchedText, r.matchIndex)}</div>
            </div>
          </a>
        `).join('')}
      </div>
    </div>
  ` : '';
  const booksAreaHtml = gated
    ? renderAccessGate()
    : `${groupsHtml || (contentResults.length ? '' : `<div class="empty-state">No notes match "${q}" yet.</div>`)}${contentResultsHtml}${!filter ? duaHtml : ''}`;

  const failedTitles = getFailedBookTitles();
  const failedBooksHtml = failedTitles.length ? `
    <div class="book-load-error-banner" role="alert">
      <div class="book-load-error-title">⚠️ ${failedTitles.length === 1 ? 'A note' : `${failedTitles.length} notes`} failed to load</div>
      <div class="book-load-error-sub">This is almost always a small bug in the file, not a removal — safe to ignore if you're not the admin.</div>
      <ul class="book-load-error-list">${failedTitles.map(t => `<li>${t}</li>`).join('')}</ul>
    </div>
  ` : '';

  document.getElementById('content').innerHTML = `
    <div class="library-hdr">
      <h1 class="library-title">Xenos Notes</h1>
      <p class="library-sub">Study notes on Islamic books &amp; topics — pick one to explore.</p>
      ${failedBooksHtml}
      ${gated ? '' : `<input type="text" class="search-box" id="search-box" placeholder="Search notes, topics, tags, or anything inside a book…" value="${filter ? filter.replace(/"/g, '&quot;') : ''}" />`}
    </div>
    ${(!filter && !gated) ? renderDailyQuote() : ''}
    ${(!filter && !gated) ? '<div class="pins-panel" id="pins-panel"></div>' : ''}
    ${!filter ? namesHtml : ''}
    ${!filter ? huroofHtml : ''}
    ${!filter ? arabicAppHtml : ''}
    ${!filter ? mascotInviteHtml : ''}
    ${booksAreaHtml}
  `;

  if (gated) {
    wireAccessGate();
  } else {
    const input = document.getElementById('search-box');
    input.addEventListener('input', () => renderLibrary(input.value));
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);

    document.querySelectorAll('.book-card-tags .tag[data-tag]').forEach(tagEl => {
      tagEl.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        renderLibrary(tagEl.dataset.tag);
      });
    });

    if (!filter) renderPinsAndLibraryBadges();
  }

  initNamesSection();
  initHuroofSection();
}

// ─── Pins panel (welcome page) + per-book bookmark-count badges — both
// draw from the same getBookmarks() call, populated after the initial
// library render so a slow/offline fetch never blocks the page itself. ───
async function renderPinsAndLibraryBadges() {
  if (!window.XenosAuth || !window.XenosAuth.getCurrentUser) return;
  const currentUser = await window.XenosAuth.getCurrentUser();
  const panel = document.getElementById('pins-panel');
  if (!currentUser) { if (panel) panel.innerHTML = ''; return; }

  const bookmarks = await window.XenosAuth.getBookmarks();
  if (!panel && !bookmarks.length) return;

  // Per-book badge counts, shown right on each library card.
  const counts = {};
  bookmarks.forEach(bm => { counts[bm.book_slug] = (counts[bm.book_slug] || 0) + 1; });
  Object.entries(counts).forEach(([slug, n]) => {
    const badge = document.querySelector(`.book-card[data-slug="${slug}"] .book-card-pin-badge`);
    if (badge) { badge.textContent = `🔖 ${n}`; badge.style.display = ''; }
  });

  // The pins strip itself — every bookmark, newest first, capped so the
  // welcome page doesn't turn into a second saved-notes page.
  if (!panel) return;
  if (!bookmarks.length) { panel.innerHTML = ''; return; }
  const shown = bookmarks.slice(0, 12);
  panel.innerHTML = `
    <div class="pins-panel-label">📌 Your Pins ${bookmarks.length > shown.length ? `(${shown.length} of ${bookmarks.length})` : `(${bookmarks.length})`}</div>
    <div class="pins-strip">
      ${shown.map(bm => {
        const book = XenosBooks.get(bm.book_slug);
        const sec = book && book.sections.find(s => s.id === bm.section_id);
        if (!book || !sec) return '';
        const note = (bm.note || '').trim();
        const pinTitle = note ? escapeHtml(note) : escapeHtml(book.title + ' — ' + sec.label);
        return `
          <a class="pin-chip" href="#/book/${book.slug}/${sec.id}" title="${pinTitle}">
            <span class="pin-chip-icon">${sec.icon}</span>
            <span class="pin-chip-text">${book.title} <span class="content-result-sep">›</span> ${sec.label}</span>
          </a>
        `;
      }).join('')}
      ${bookmarks.length > shown.length ? `<a class="pin-chip pin-chip-more" href="#/saved">See all ${bookmarks.length} →</a>` : ''}
    </div>
  `;
}

// ─── Names of Allah (top-of-home interactive section) ───
function initNamesSection() {
  const names = window.XENOS_NAMES || [];
  const hero = document.getElementById('names-hero');
  const grid = document.getElementById('names-grid');
  const gridWrap = document.getElementById('names-grid-wrap');
  const toggleBtn = document.getElementById('names-toggle');
  if (!names.length || !hero || !grid || !gridWrap || !toggleBtn) return;

  let i = Math.floor(Math.random() * names.length);
  const renderHero = () => {
    hero.classList.remove('is-visible');
    setTimeout(() => {
      const n = names[i];
      hero.innerHTML = `
        <div class="names-hero-label">Name of the Moment</div>
        <div class="names-hero-ar">${n.ar}</div>
        <div class="names-hero-tr">${n.tr}</div>
        <div class="names-hero-meaning">${n.meaning}</div>
      `;
      hero.classList.add('is-visible');
    }, 350);
    i = (i + 1) % names.length;
  };
  renderHero();
  setInterval(renderHero, 10000);

  grid.innerHTML = names.map((n, idx) => `
    <button class="name-card" style="--stagger:${idx % 14}">
      <div class="name-card-ar">${n.ar}</div>
      <div class="name-card-tr">${n.tr}</div>
      <div class="name-card-meaning-wrap"><div class="name-card-meaning">${n.meaning}</div></div>
    </button>
  `).join('');
  grid.querySelectorAll('.name-card').forEach(card => {
    card.addEventListener('click', () => card.classList.toggle('open'));
  });

  toggleBtn.addEventListener('click', () => {
    const open = toggleBtn.classList.toggle('open');
    gridWrap.classList.toggle('open', open);
  });
}

// ─── Ḥurūf (Arabic alphabet — one letter, then pairs, then triples) ───
const HARAKAT = {
  fatha: 'َ', kasra: 'ِ', damma: 'ُ', sukun: 'ْ', shadda: 'ّ',
  tanwinFath: 'ً', tanwinKasr: 'ٍ', tanwinDamm: 'ٌ',
};

function huroofSingleForms(letter) {
  const m = HARAKAT;
  return [
    { ar: letter + m.fatha, label: 'Fatḥah' },
    { ar: letter + m.kasra, label: 'Kasrah' },
    { ar: letter + m.damma, label: 'Ḍammah' },
    { ar: letter + m.sukun, label: 'Sukūn' },
    { ar: letter + m.shadda + m.fatha, label: 'Shaddah + Fatḥah' },
    { ar: letter + m.shadda + m.kasra, label: 'Shaddah + Kasrah' },
    { ar: letter + m.shadda + m.damma, label: 'Shaddah + Ḍammah' },
    { ar: letter + m.tanwinFath + 'ا', label: 'Tanwīn Fatḥ' },
    { ar: letter + m.tanwinKasr, label: 'Tanwīn Kasr' },
    { ar: letter + m.tanwinDamm, label: 'Tanwīn Ḍamm' },
    { ar: letter + m.fatha + 'ا', label: 'Madd — Alif' },
    { ar: letter + m.kasra + 'ي', label: 'Madd — Yāʾ' },
    { ar: letter + m.damma + 'و', label: 'Madd — Wāw' },
  ];
}

function huroofPairForms(letterObj) {
  return (letterObj.pairs || []).map(w => ({ ar: w.ar, label: `${w.tr} — ${w.en}` }));
}

function huroofTripleForms(letterObj) {
  return (letterObj.triples || []).map(w => ({ ar: w.ar, label: `${w.tr} — ${w.en}` }));
}

function initHuroofSection() {
  const huroof = window.XENOS_HUROOF || [];
  const hero = document.getElementById('huroof-hero');
  const panelWrap = document.getElementById('huroof-panel-wrap');
  const panel = document.getElementById('huroof-panel');
  const toggleBtn = document.getElementById('huroof-toggle');
  if (!huroof.length || !hero || !panelWrap || !panel || !toggleBtn) return;

  // Hero: one huge letter, auto-cycling
  let hi = Math.floor(Math.random() * huroof.length);
  const renderHeroLetter = () => {
    hero.classList.remove('is-visible');
    setTimeout(() => {
      const h = huroof[hi];
      hero.innerHTML = `
        <div class="huroof-hero-label">Letter of the Moment</div>
        <div class="huroof-hero-letter">${h.ar}</div>
        <div class="huroof-hero-name">${h.name} (${h.tr})</div>
      `;
      hero.classList.add('is-visible');
      hi = (hi + 1) % huroof.length;
    }, 350);
  };
  renderHeroLetter();
  setInterval(renderHeroLetter, 3200);
  hero.addEventListener('click', () => toggleBtn.click());

  // State for the expanded panel
  let selectedIdx = 0;
  let deck = 1; // 1 = single letter, 2 = pairs, 3 = triples

  function renderGrid() {
    panel.innerHTML = `<div class="huroof-grid">${huroof.map((h, idx) => `
      <button class="huroof-letter-card" data-idx="${idx}" style="--stagger:${idx % 14}">
        <div class="huroof-letter-card-ar">${h.ar}</div>
        <div class="huroof-letter-card-name">${h.name}</div>
      </button>
    `).join('')}</div>`;
    panel.querySelectorAll('.huroof-letter-card').forEach(card => {
      card.addEventListener('click', () => {
        selectedIdx = parseInt(card.dataset.idx, 10);
        deck = 1;
        renderDetail();
      });
    });
  }

  function formsForDeck() {
    const h = huroof[selectedIdx];
    if (deck === 1) return huroofSingleForms(h.ar);
    if (deck === 2) return huroofPairForms(h);
    return huroofTripleForms(h);
  }

  function renderFormsGrid() {
    const grid = document.getElementById('huroof-forms-grid');
    if (!grid) return;
    grid.style.animation = 'none';
    void grid.offsetWidth;
    grid.style.animation = '';
    const forms = formsForDeck();
    grid.innerHTML = forms.length ? forms.map(f => `
      <div class="huroof-form-card">
        <div class="huroof-form-ar">${f.ar}</div>
        <div class="huroof-form-label">${f.label}</div>
      </div>
    `).join('') : `<div class="huroof-forms-empty">No words for this letter yet — try another tab.</div>`;
  }

  function updateDeckTabs() {
    panel.querySelectorAll('.huroof-deck-tab').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.deck, 10) === deck);
    });
    const nav = panel.querySelector('.huroof-letter-nav');
    if (nav) nav.style.visibility = deck === 1 ? 'visible' : 'hidden';
  }

  function renderDetail() {
    const h = huroof[selectedIdx];
    const deckLabels = { 1: '1 Letter', 2: '2 Letters', 3: '3 Letters' };
    panel.innerHTML = `
      <div class="huroof-detail">
        <div class="huroof-detail-topbar">
          <button class="huroof-back">← All Letters</button>
          <div class="huroof-letter-nav">
            <button class="huroof-nav-arrow" data-dir="-1" aria-label="Previous letter">‹</button>
            <button class="huroof-nav-arrow" data-dir="1" aria-label="Next letter">›</button>
          </div>
        </div>
        <div class="huroof-detail-hero">
          <div class="huroof-detail-letter">${h.ar}</div>
          <div class="huroof-detail-name">${h.name} (${h.tr})</div>
          ${h.word ? `<div class="huroof-detail-word"><span class="huroof-detail-word-ar">${h.word}</span>${h.wordTr} — ${h.wordEn}</div>` : ''}
        </div>
        <div class="huroof-deck-tabs">
          ${[1, 2, 3].map(d => `<button class="huroof-deck-tab ${deck === d ? 'active' : ''}" data-deck="${d}">${deckLabels[d]}</button>`).join('')}
        </div>
        <div class="huroof-forms-grid" id="huroof-forms-grid"></div>
        <div class="huroof-swipe-hint">Swipe, or use the tabs above, to move between one letter, pairs, and triples</div>
      </div>
    `;
    renderFormsGrid();
    updateDeckTabs();

    panel.querySelector('.huroof-back').addEventListener('click', renderGrid);
    panel.querySelectorAll('.huroof-nav-arrow').forEach(btn => {
      btn.addEventListener('click', () => {
        const dir = parseInt(btn.dataset.dir, 10);
        selectedIdx = (selectedIdx + dir + huroof.length) % huroof.length;
        renderDetail();
      });
    });
    panel.querySelectorAll('.huroof-deck-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        deck = parseInt(btn.dataset.deck, 10);
        updateDeckTabs();
        renderFormsGrid();
      });
    });

    let touchX = null;
    const detailEl = panel.querySelector('.huroof-detail');
    detailEl.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    detailEl.addEventListener('touchend', (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) {
        if (dx < 0 && deck < 3) deck++;
        else if (dx > 0 && deck > 1) deck--;
        updateDeckTabs();
        renderFormsGrid();
      }
      touchX = null;
    }, { passive: true });
  }

  toggleBtn.addEventListener('click', () => {
    const open = toggleBtn.classList.toggle('open');
    panelWrap.classList.toggle('open', open);
    if (open && !panel.innerHTML) renderGrid();
  });
}

// ─── Book viewer ───
function renderBook(slug, sectionId) {
  const book = XenosBooks.get(slug);
  if (!book) { renderLibrary(); return; }
  document.body.classList.add('view-book');
  document.body.classList.remove('view-library', 'view-play');
  updateBookCharacter(slug);

  const sections = book.sections;
  const activeId = sectionId && sections.find(s => s.id === sectionId) ? sectionId : sections[0].id;

  document.getElementById('header-title').textContent = book.title;
  document.getElementById('header-sub').textContent = book.subtitle;
  document.getElementById('header-arabic-bg').textContent = book.arabicBg || '';
  document.getElementById('header-tags').innerHTML = (book.tags || [])
    .map(t => `<span class="header-tag">${t}</span>`).join('');

  document.getElementById('sidebar-wrap').innerHTML = `
    <a href="#/" class="back-to-library">← All Notes</a>
    <p class="sidebar-label">${book.title} <span class="sidebar-progress-badge" id="sidebar-progress-badge"></span></p>
    <div id="nav-items">
      ${sections.map(s => `
        <button class="nav-btn ${s.id === activeId ? 'active' : ''}" data-goto="${s.id}" data-section-id="${s.id}" style="--accent:${s.color}">
          <span class="nav-icon">${s.icon}</span>
          <span class="nav-labels">
            <span class="nav-main">${s.label}</span>
            <span class="nav-sub">${s.subtitle}</span>
          </span>
          <span class="nav-read-check" title="Read">✓</span>
        </button>
      `).join('')}
    </div>
    <div class="sidebar-footer">
      <div class="sidebar-footer-name">${book.title}</div>
      <div class="sidebar-footer-desc">${book.footer || ''}</div>
      <button class="share-book-btn" id="share-book-btn" type="button">🔗 Copy shareable link</button>
      <button class="share-book-btn" id="print-book-btn" type="button">🖨️ Print / Save as PDF</button>
    </div>
  `;
  document.querySelectorAll('#nav-items .nav-btn').forEach(btn => {
    btn.addEventListener('click', () => { location.hash = `#/book/${slug}/${btn.dataset.goto}`; });
  });

  const shareBtn = document.getElementById('share-book-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      // Points at the static /book/<slug>.html share page (not the #/book/
      // hash route) — that page carries real per-book Open Graph meta tags
      // so links shared to Discord/WhatsApp show this book's own preview
      // card instead of the site's generic one, then redirects the visitor
      // straight into the normal app.
      const shareUrl = `${location.origin}/book/${slug}.html`;
      try {
        await navigator.clipboard.writeText(shareUrl);
        shareBtn.textContent = '✓ Link copied!';
      } catch (e) {
        shareBtn.textContent = shareUrl;
      }
      setTimeout(() => { shareBtn.textContent = '🔗 Copy shareable link'; }, 2200);
    });
  }

  const printBtn = document.getElementById('print-book-btn');
  if (printBtn) printBtn.addEventListener('click', () => printBook(book));

  refreshSidebarProgress(book);
  renderBookSection(book, activeId);
}

// ─── Reading progress — a signed-in-only enhancement layered onto the
// sidebar after the fact (fetching it is async; the sidebar itself renders
// synchronously above so navigation never waits on a network round-trip).
// Re-run any time the read-set might have changed (on book open, and again
// after visiting a section) rather than trying to patch the DOM in place. ───
async function refreshSidebarProgress(book) {
  if (!window.XenosAuth || !window.XenosAuth.getReadSections) return;
  const badge = document.getElementById('sidebar-progress-badge');
  if (!badge) return; // navigated away already
  const readIds = await window.XenosAuth.getReadSections(book.slug);
  const badgeNow = document.getElementById('sidebar-progress-badge'); // re-check post-await
  if (!badgeNow) return;
  const readSet = new Set(readIds);
  const total = book.sections.length;
  if (readSet.size) {
    badgeNow.textContent = `${readSet.size} / ${total} read`;
    badgeNow.style.display = '';
  } else {
    badgeNow.style.display = 'none';
  }
  document.querySelectorAll('#nav-items .nav-btn').forEach(btn => {
    btn.classList.toggle('is-read', readSet.has(btn.dataset.sectionId));
  });
}

// ─── Print / export-to-PDF — the SPA only ever has the *current* section
// in the DOM, so this builds a separate full-book document (every section,
// concatenated) into a print-only container, prints it via the browser's
// native print dialog (which is also how a visitor saves it as a PDF —
// no server-side PDF generation needed for a static site), then tears the
// container back down afterward. ───
function printBook(book) {
  const parts = book.sections.map(sec => {
    const bulletsHtml = (sec.bullets && sec.bullets.length) ? `
      <div class="bullets-grid">
        ${sec.bullets.map(b => `
          <div class="bullet-card" style="border-top-color:${sec.color}">
            <div class="bullet-label" style="color:${sec.color}">${b.label}</div>
            <div class="bullet-text">${b.text}</div>
          </div>
        `).join('')}
      </div>
    ` : '';

    const qaHtml = (sec.qanda && sec.qanda.length) ? `
      <div class="qa-label">Study Questions &amp; Answers</div>
      ${sec.qanda.map(qa => `
        <div class="print-qa-item">
          <div class="print-qa-q">${qa.q}</div>
          <div class="qa-answer">${qa.a}</div>
        </div>
      `).join('')}
    ` : '';

    // Quizzes render as a plain answer key in print — the interactive
    // click-to-reveal buttons don't mean anything on paper.
    const quizHtml = (sec.quiz && sec.quiz.length) ? `
      <div class="quiz-label">Quiz — Answer Key</div>
      ${sec.quiz.map((qz, qi) => `
        <div class="print-quiz-item">
          <div class="print-qa-q">${qi + 1}. ${qz.q}</div>
          <div class="qa-answer">Answer: ${qz.choices[qz.correct]}${qz.explain ? ' — ' + qz.explain : ''}</div>
        </div>
      `).join('')}
    ` : '';

    return `
      <div class="print-section">
        <div class="section-title">${sec.label}</div>
        <div class="section-subtitle">${sec.subtitle}</div>
        <div class="intro-card" style="border-left-color:${sec.color}">${sec.intro}</div>
        ${bulletsHtml}
        ${qaHtml}
        ${quizHtml}
      </div>
    `;
  }).join('');

  const container = document.createElement('div');
  container.id = 'print-book-content';
  container.innerHTML = `
    <div class="print-book-title">${book.title}</div>
    <div class="print-book-subtitle">${book.subtitle}</div>
    <div class="print-book-footer-note">${book.footer || ''}</div>
    ${parts}
    <div class="print-book-colophon">Printed from thexenotes.com — ${book.title}</div>
  `;
  document.body.appendChild(container);
  document.body.classList.add('printing-book');

  const cleanup = () => {
    document.body.classList.remove('printing-book');
    container.remove();
    window.removeEventListener('afterprint', cleanup);
  };
  window.addEventListener('afterprint', cleanup);

  window.print();
}

function renderBookSection(book, id) {
  const sections = book.sections;
  const sec = sections.find(s => s.id === id);
  if (!sec) return;
  const idx = sections.indexOf(sec);
  const prev = sections[idx - 1];
  const next = sections[idx + 1];

  const bulletsHtml = (sec.bullets && sec.bullets.length) ? `
    <div class="bullets-grid">
      ${sec.bullets.map((b, i) => `
        <div class="bullet-card" style="border-top-color:${sec.color}; --stagger:${i}">
          <div class="bullet-label" style="color:${sec.color}">${b.label}</div>
          <div class="bullet-text">${b.text}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const headers = sec.tableHeaders || ['Item', 'Core Error', 'Correction'];
  const tableHtml = sec.sectsTable ? `
    ${sec.tableLabel ? `<div class="qa-label">${sec.tableLabel}</div>` : ''}
    <div class="sects-table-wrap">
      <table class="sects-table">
        <thead><tr><th>${headers[0]}</th><th>${headers[1]}</th><th>${headers[2]}</th></tr></thead>
        <tbody>
          ${sec.sectsTable.map(row => `
            <tr>
              <td class="sect-name">${row.name}</td>
              <td class="sect-error">${row.error}</td>
              <td class="sect-correct">${row.correct}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  ` : '';

  const qaHtml = (sec.qanda && sec.qanda.length) ? `
    <div class="qa-label">📋 Study Questions &amp; Answers — Click to Expand</div>
    ${sec.qanda.map((qa) => `
      <div class="qa-item">
        <button class="qa-btn" style="--qa-color:${sec.color}">
          <span>${qa.q}</span>
          <span class="qa-arrow">›</span>
        </button>
        <div class="qa-answer-wrap"><div class="qa-answer">${qa.a}</div></div>
      </div>
    `).join('')}
  ` : '';

  const quizHtml = (sec.quiz && sec.quiz.length) ? `
    <div class="quiz-block" data-total="${sec.quiz.length}" data-correct="0" data-answered="0">
      <div class="quiz-label">🧠 Quick Quiz — Test Yourself</div>
      <div class="quiz-best-badge" style="display:none;"></div>
      ${sec.quiz.map((qz, qi) => `
        <div class="quiz-item">
          <div class="quiz-q">${qi + 1}. ${qz.q}</div>
          <div class="quiz-choices">
            ${qz.choices.map((c, ci) => `<button class="quiz-choice" data-correct-choice="${ci === qz.correct ? '1' : '0'}">${c}</button>`).join('')}
          </div>
          <div class="quiz-explain-wrap"><div class="quiz-explain">${qz.explain || ''}</div></div>
        </div>
      `).join('')}
      <div class="quiz-score"></div>
    </div>
  ` : '';

  const pnHtml = `
    <div class="pn-nav">
      ${prev ? `<button class="pn-btn" data-goto="${prev.id}">← ${prev.label}</button>` : '<div></div>'}
      ${next ? `<button class="pn-btn next" data-goto="${next.id}" style="--accent:${next.color}">${next.label} →</button>` : '<div></div>'}
    </div>
  `;

  const content = document.getElementById('content');
  content.classList.remove('fade-in');
  // force reflow so the fade-in animation replays each navigation
  void content.offsetWidth;

  content.innerHTML = `
    <div class="section-hdr">
      <div class="section-hdr-row">
        <div class="section-icon-badge" style="background:${tintedBg(sec.color, 0.14)};border-color:${tintedBg(sec.color, 0.35)}">${sec.icon}</div>
        <div class="section-hdr-titles">
          <div class="section-title">${sec.label}</div>
          <div class="section-subtitle">${sec.subtitle}</div>
        </div>
        <button class="bookmark-toggle-btn" id="bookmark-toggle-btn" type="button" title="Bookmark this section">🔖</button>
      </div>
      <div class="bookmark-note-wrap" id="bookmark-note-wrap" style="display:none;"></div>
    </div>
    <div class="intro-card" style="border-left-color:${sec.color}">${sec.intro}</div>
    ${bulletsHtml}
    ${tableHtml}
    ${qaHtml}
    ${quizHtml}
    <div class="correction-flag-wrap">
      <button class="correction-flag-btn" id="correction-flag-btn" type="button">🚩 Spot a mistake? Suggest a correction</button>
      <div class="correction-form-wrap" id="correction-form-wrap" style="display:none;"></div>
    </div>
    ${pnHtml}
  `;
  content.classList.add('fade-in');

  // Q&A toggle (animated height, not instant display swap)
  content.querySelectorAll('.qa-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const wrap = btn.nextElementSibling;
      const open = btn.classList.toggle('open');
      const color = btn.style.getPropertyValue('--qa-color');
      btn.style.background = open ? tintedBg(color, 0.1) : '';
      if (open) {
        wrap.style.gridTemplateRows = '1fr';
      } else {
        wrap.style.gridTemplateRows = '0fr';
      }
    });
  });

  // Quiz interaction: click a choice to answer, disable the rest, reveal
  // explanation, track a running score for the section.
  content.querySelectorAll('.quiz-block').forEach(block => {
    const total = parseInt(block.dataset.total, 10);
    const scoreEl = block.querySelector('.quiz-score');
    const bestBadge = block.querySelector('.quiz-best-badge');
    const updateScore = () => {
      const correct = parseInt(block.dataset.correct, 10);
      const answered = parseInt(block.dataset.answered, 10);
      if (answered === 0) { scoreEl.textContent = ''; return; }
      scoreEl.textContent = answered === total
        ? `Quiz complete — ${correct} / ${total} correct`
        : `Score so far: ${correct} / ${answered}`;
      if (answered === total && window.XenosAuth && window.XenosAuth.saveQuizResult) {
        window.XenosAuth.saveQuizResult(book.slug, sec.id, correct, total).then(() => {
          if (bestBadge) showBestBadge(bestBadge, book.slug, sec.id);
        });
      }
    };
    if (window.XenosAuth && window.XenosAuth.getQuizResult) showBestBadge(bestBadge, book.slug, sec.id);
    block.querySelectorAll('.quiz-item').forEach(item => {
      const choices = item.querySelectorAll('.quiz-choice');
      const explainWrap = item.querySelector('.quiz-explain-wrap');
      choices.forEach(btn => {
        btn.addEventListener('click', () => {
          if (item.classList.contains('answered')) return;
          item.classList.add('answered');
          const isCorrect = btn.dataset.correctChoice === '1';
          choices.forEach(b => {
            b.disabled = true;
            if (b.dataset.correctChoice === '1') b.classList.add('correct');
          });
          if (!isCorrect) btn.classList.add('incorrect');
          explainWrap.style.gridTemplateRows = '1fr';
          block.dataset.answered = String(parseInt(block.dataset.answered, 10) + 1);
          if (isCorrect) block.dataset.correct = String(parseInt(block.dataset.correct, 10) + 1);
          updateScore();
        });
      });
    });
  });

  // prev/next + sidebar active state
  content.querySelectorAll('.pn-btn[data-goto]').forEach(btn => {
    btn.addEventListener('click', () => { location.hash = `#/book/${book.slug}/${btn.dataset.goto}`; });
  });
  document.querySelectorAll('#nav-items .nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.goto === id);
  });

  wireQuoteCardSharing(content);
  wireBookmarkToggle(book, sec);
  wireCorrectionFlag(book, sec);

  if (window.XenosAuth && window.XenosAuth.markSectionRead) {
    window.XenosAuth.markSectionRead(book.slug, sec.id).then(() => refreshSidebarProgress(book));
  }
  if (window.XenosAuth && window.XenosAuth.trackPageview) {
    window.XenosAuth.trackPageview(book.slug, sec.id);
  }
}

// ─── Bookmarks — a single toggle button in the section header (section-
// level for now; see auth.js for why bullet_index is reserved but unused).
// Checks current state on every render since the button is rebuilt fresh
// each navigation, same reasoning as the reading-progress badge above. ───
async function wireBookmarkToggle(book, sec) {
  const btn = document.getElementById('bookmark-toggle-btn');
  if (!btn || !window.XenosAuth || !window.XenosAuth.findBookmark) return;

  let currentId = await window.XenosAuth.findBookmark(book.slug, sec.id);
  const btnNow = document.getElementById('bookmark-toggle-btn'); // re-check post-await
  const noteWrap = document.getElementById('bookmark-note-wrap');
  if (!btnNow || !noteWrap) return;

  const closeNoteBox = () => { noteWrap.style.display = 'none'; noteWrap.innerHTML = ''; };

  const applyState = () => {
    btnNow.classList.toggle('is-bookmarked', !!currentId);
    btnNow.title = currentId ? 'Remove bookmark' : 'Bookmark this section';
  };
  applyState();

  const openNoteBox = () => {
    noteWrap.style.display = '';
    noteWrap.innerHTML = `
      <input type="text" class="bookmark-note-input" id="bookmark-note-input"
             placeholder="Add a private remark to this bookmark (optional) — Enter to save" maxlength="280" />
    `;
    const input = document.getElementById('bookmark-note-input');
    input.focus();
    const save = async () => {
      const val = input.value.trim();
      if (currentId && val) await window.XenosAuth.updateBookmarkNote(currentId, val);
      closeNoteBox();
    };
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') save(); if (e.key === 'Escape') closeNoteBox(); });
    input.addEventListener('blur', () => setTimeout(save, 120));
  };

  btnNow.addEventListener('click', async () => {
    btnNow.disabled = true;
    if (currentId) {
      await window.XenosAuth.removeBookmark(currentId);
      currentId = null;
      closeNoteBox();
    } else {
      const row = await window.XenosAuth.addBookmark(book.slug, sec.id, null);
      currentId = row ? row.id : null;
      if (currentId) openNoteBox();
    }
    btnNow.disabled = false;
    applyState();
  });
}

// ─── Correction flagging — every submission is stored in Supabase and
// posted to a Discord channel via a database trigger (see the site
// owner's own migration; nothing about that lives in this file). ───
function wireCorrectionFlag(book, sec) {
  const btn = document.getElementById('correction-flag-btn');
  const formWrap = document.getElementById('correction-form-wrap');
  if (!btn || !formWrap) return;

  btn.addEventListener('click', async () => {
    if (formWrap.style.display !== 'none') { formWrap.style.display = 'none'; formWrap.innerHTML = ''; return; }
    if (!window.XenosAuth || !window.XenosAuth.submitCorrection) return;

    formWrap.style.display = '';
    formWrap.innerHTML = `
      <textarea class="correction-textarea" id="correction-textarea" maxlength="600"
                placeholder="What's wrong, and where? Be as specific as you can — a quote, a claim, a broken link…"></textarea>
      <div class="correction-form-actions">
        <button class="correction-submit-btn" id="correction-submit-btn" type="button">Send</button>
        <span class="correction-form-status" id="correction-form-status"></span>
      </div>
    `;
    const textarea = document.getElementById('correction-textarea');
    const submitBtn = document.getElementById('correction-submit-btn');
    const status = document.getElementById('correction-form-status');
    textarea.focus();

    submitBtn.addEventListener('click', async () => {
      const message = textarea.value.trim();
      if (!message) { status.textContent = 'Write what\'s wrong first.'; return; }
      submitBtn.disabled = true;
      status.textContent = 'Sending…';
      const ok = await window.XenosAuth.submitCorrection(book.slug, sec.id, message);
      if (ok) {
        formWrap.innerHTML = `<div class="correction-form-thanks">✅ Thank you — sent.</div>`;
        setTimeout(() => { formWrap.style.display = 'none'; formWrap.innerHTML = ''; }, 2400);
      } else {
        submitBtn.disabled = false;
        status.textContent = 'Something went wrong — try again?';
      }
    });
  });
}

// ─── Shareable quote-card images — any .xn-quote-card built by a book's
// Quotes section (currently just Shifa' al-Alil, but works for any future
// book using the same markup) gets a small share button injected after the
// fact, since that HTML is embedded raw in the book's own `intro` string
// and has no button of its own. Clicking it draws a branded PNG on a canvas
// and downloads it. ───
function wireQuoteCardSharing(content) {
  content.querySelectorAll('.xn-quote-card').forEach(card => {
    if (card.querySelector('.xn-quote-share-btn')) return; // already wired
    const arEl = card.querySelector('.xn-quote-ar');
    const enEl = card.querySelector('.xn-quote-en');
    const citeEl = card.querySelector('.xn-quote-cite');
    if (!arEl || !enEl) return; // e.g. a table-only card with no plain quote text

    const btn = document.createElement('button');
    btn.className = 'xn-quote-share-btn';
    btn.type = 'button';
    btn.title = 'Download as an image';
    btn.textContent = '📤 Share as image';
    card.appendChild(btn);

    btn.addEventListener('click', () => {
      btn.disabled = true;
      const originalText = btn.textContent;
      btn.textContent = 'Generating…';
      generateQuoteImage(arEl.textContent.trim(), enEl.textContent.trim(), citeEl ? citeEl.textContent.trim() : '')
        .finally(() => { btn.disabled = false; btn.textContent = originalText; });
    });
  });
}

function wrapCanvasText(ctx, text, maxWidth) {
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  words.forEach(w => {
    const trial = (cur + ' ' + w).trim();
    if (ctx.measureText(trial).width > maxWidth && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = trial;
    }
  });
  if (cur) lines.push(cur);
  return lines;
}

async function generateQuoteImage(arText, enText, citeText) {
  // Wait for the actual web fonts to be loaded, or canvas text falls back
  // to a generic system font (and Arabic often falls back to *nothing*,
  // rendering boxes) — this is exactly the failure mode already hit once
  // this session with the static OG images, just in the browser instead
  // of PIL.
  try {
    await Promise.all([
      document.fonts.load('700 44px "Cormorant Garamond"'),
      document.fonts.load('italic 30px "EB Garamond"'),
      document.fonts.load('30px "Noto Naskh Arabic"'),
      document.fonts.load('600 24px "EB Garamond"'),
    ]);
  } catch (e) { /* best effort — still try to draw */ }

  const W = 1080, H = 1350;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');

  // background + double border, matching the site's card aesthetic
  ctx.fillStyle = '#FAF5EA';
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = '#A03B54'; ctx.lineWidth = 4;
  ctx.strokeRect(24, 24, W - 48, H - 48);
  ctx.strokeStyle = '#C4954A'; ctx.lineWidth = 1.5;
  ctx.strokeRect(38, 38, W - 76, H - 76);

  // header
  ctx.fillStyle = '#A03B54';
  ctx.font = '700 26px "EB Garamond"';
  ctx.textAlign = 'left';
  ctx.fillText('XENOS NOTES', 80, 110);

  // gold accent quote-mark
  ctx.fillStyle = '#C4954A';
  ctx.font = '700 120px Georgia, serif';
  ctx.fillText('"', 76, 230);

  // Arabic text (RTL, wrapped, right-aligned)
  ctx.direction = 'rtl';
  ctx.textAlign = 'right';
  ctx.fillStyle = '#2A221A';
  ctx.font = '32px "Noto Naskh Arabic"';
  const arLines = wrapCanvasText(ctx, arText, W - 160);
  let y = 300;
  arLines.forEach(line => { ctx.fillText(line, W - 80, y); y += 56; });

  // English translation (LTR, wrapped, left-aligned, italic)
  ctx.direction = 'ltr';
  ctx.textAlign = 'left';
  ctx.fillStyle = '#5C5240';
  ctx.font = 'italic 30px "EB Garamond"';
  y += 30;
  const enLines = wrapCanvasText(ctx, '"' + enText + '"', W - 160);
  enLines.forEach(line => { ctx.fillText(line, 80, y); y += 42; });

  // citation
  y += 20;
  ctx.fillStyle = '#A03B54';
  ctx.font = '600 24px "EB Garamond"';
  ctx.fillText(citeText, 80, y);

  // footer
  ctx.strokeStyle = '#C4954A'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(80, H - 110); ctx.lineTo(W - 80, H - 110); ctx.stroke();
  ctx.fillStyle = '#7A2638';
  ctx.font = '22px "EB Garamond"';
  ctx.fillText('thexenotes.com', 80, H - 70);

  const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'xenos-notes-quote.png';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// ─── Mobile sidebar ───
function openSidebar() { document.getElementById('sidebar').classList.add('open'); }
function closeSidebar() { document.getElementById('sidebar').classList.remove('open'); }
window.openSidebar = openSidebar;
window.closeSidebar = closeSidebar;

// ─── Custom cursor (pointer devices only) ───
// Position is driven by a single requestAnimationFrame loop with light lerp
// smoothing, NOT a CSS transition on transform — a CSS transition re-triggers
// on every mousemove event, which queues/stacks on a fast mouse and feels
// laggy. rAF + lerp gives a buttery, responsive trail at a steady 60fps.
(function () {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const cursor = document.createElement('div');
  cursor.className = 'xn-cursor';
  document.body.appendChild(cursor);

  const HOVER_SELECTOR = 'a, button, .quiz-choice, .nav-btn, .book-card, .qa-btn';

  let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
  let curX = targetX, curY = targetY;
  let scaleTarget = 1, curScale = 1;

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(HOVER_SELECTOR)) cursor.classList.add('is-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(HOVER_SELECTOR)) cursor.classList.remove('is-hover');
  });
  window.addEventListener('mousedown', () => { cursor.classList.add('is-down'); scaleTarget = 0.82; });
  window.addEventListener('mouseup', () => { cursor.classList.remove('is-down'); scaleTarget = 1; });

  function tick() {
    curX += (targetX - curX) * 0.35;
    curY += (targetY - curY) * 0.35;
    curScale += (scaleTarget - curScale) * 0.3;
    cursor.style.transform = `translate(${curX}px, ${curY}px) scale(${curScale})`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

// ─── Side quote rails (wide desktop, library home only) ───
const XENOS_QUOTES = [
  { ar: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', en: 'Read, in the name of your Lord who created.', ref: "Qur'an 96:1" },
  { ar: 'وَقُل رَّبِّ زِدْنِي عِلْمًا', en: 'And say: My Lord, increase me in knowledge.', ref: "Qur'an 20:114" },
  { ar: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', en: 'Verily, in the remembrance of Allah do hearts find rest.', ref: "Qur'an 13:28" },
  { ar: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ', en: 'And whoever relies upon Allah — He is sufficient for him.', ref: "Qur'an 65:3" },
  { ar: 'مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ', en: 'Whoever treads a path in search of knowledge, Allah makes easy for him a path to Paradise.', ref: 'Ṣaḥīḥ Muslim' },
  { ar: 'طُوبَى لِلْغُرَبَاءِ', en: 'Glad tidings to the strangers (al-ghurabā).', ref: 'Ṣaḥīḥ Muslim' },
];

function initQuoteRails() {
  const left = document.getElementById('quote-card-left');
  const right = document.getElementById('quote-card-right');
  if (!left || !right) return;

  const render = (el, q) => {
    el.classList.remove('is-visible');
    setTimeout(() => {
      el.innerHTML = `
        <div class="quote-arabic">${q.ar}</div>
        <div class="quote-en">${q.en}</div>
        <div class="quote-ref">${q.ref}</div>
      `;
      el.classList.add('is-visible');
    }, 350);
  };

  let i = 0;
  const rotate = () => {
    render(left, XENOS_QUOTES[i % XENOS_QUOTES.length]);
    render(right, XENOS_QUOTES[(i + 3) % XENOS_QUOTES.length]);
    i++;
  };
  rotate();
  setInterval(rotate, 9000);
}
initQuoteRails();

// ─── Winners corner (cycling display) ───
const XENOS_WINNERS = [
  { medal: '🥇', accent: '🧠', label: 'Quiz Competition', name: 'Mu' },
  { medal: '🥇', accent: '📖', label: 'Khatm Competition · 1st', name: 'Dziri' },
  { medal: '🥈', accent: '🎉', label: 'Khatm Competition · 2nd', name: 'Cofe' },
];
const WINNERS_ROTATIONS = ['-2deg', '2deg', '-1.5deg', '1.5deg'];

function initWinnersCycle() {
  const el = document.getElementById('winners-cycle');
  if (!el) return;

  let i = 0;
  const render = () => {
    // Skip while a book/section is open — the corner is CSS-hidden there
    // anyway, but not re-rendering it every 2.4s avoids any chance of a
    // fixed-position element "leaking" through display:none during a
    // repaint on some mobile browsers.
    if (document.body.classList.contains('view-book')) return;
    el.classList.remove('is-visible');
    setTimeout(() => {
      if (document.body.classList.contains('view-book')) return;
      const w = XENOS_WINNERS[i % XENOS_WINNERS.length];
      el.style.setProperty('--enter-rotate', WINNERS_ROTATIONS[i % WINNERS_ROTATIONS.length]);
      el.innerHTML = `
        <span class="winner-accent" aria-hidden="true">${w.accent}</span>
        <span class="winner-medal" aria-hidden="true">${w.medal}</span>
        <span class="winner-cycle-label">${w.label}</span>
        <span class="winner-name">${w.name}</span>
      `;
      el.classList.add('is-visible');
      i++;
    }, 350);
  };
  render();
  setInterval(render, 2400);
}
initWinnersCycle();

// Mix in the current top 2 live quiz scorers alongside the permanent
// hall-of-fame entries above (never replacing them — those record real past
// competition results). XENOS_WINNERS is read fresh on every render() tick,
// so pushing into it here is picked up automatically once this resolves,
// with no need to touch/restart the rotation itself.
(async function augmentWinnersWithLeaderboard() {
  if (!window.XenosAuth) {
    // auth.js may not have finished defining window.XenosAuth yet at this
    // exact point in page load — give it one retry shortly after.
    setTimeout(() => { if (window.XenosAuth) augmentWinnersWithLeaderboard(); }, 1500);
    return;
  }
  if (!window.XenosAuth.getLeaderboard) return;
  const { error, rows } = await window.XenosAuth.getLeaderboard(2);
  if (error || !rows.length) return;
  const medals = ['🥇', '🥈'];
  rows.forEach((r, i) => {
    XENOS_WINNERS.push({ medal: medals[i] || '🏅', accent: '📊', label: 'Quiz Leaderboard', name: r.display_name });
  });
})();

// Every khatm competition the bot has recorded as complete, appended
// permanently alongside the hand-written hall-of-fame entries above —
// new completions show up here with no further site changes needed.
(async function augmentWinnersWithKhatmResults() {
  if (!window.XenosAuth) {
    setTimeout(() => { if (window.XenosAuth) augmentWinnersWithKhatmResults(); }, 1700);
    return;
  }
  if (!window.XenosAuth.getKhatmWinners) return;
  const { error, rows } = await window.XenosAuth.getKhatmWinners();
  if (error || !rows.length) return;
  const rankMedal = { 1: '🥇', 2: '🥈', 3: '🥉' };
  const rankWord = { 1: '1st', 2: '2nd', 3: '3rd' };
  rows.forEach(r => {
    XENOS_WINNERS.push({
      medal: rankMedal[r.rank] || '🏅',
      accent: '📖',
      label: `Khatm Competition · ${rankWord[r.rank] || r.rank}`,
      name: r.discord_name,
    });
  });
})();
