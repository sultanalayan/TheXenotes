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

function tintedBg(color, alpha) {
  return `color-mix(in srgb, ${color} ${Math.round(alpha * 100)}%, transparent)`;
}

// ─── Theme toggle (light ⇄ dark) ───
(function initThemeToggle() {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  function apply(isDark) {
    if (isDark) root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  // index.html's inline head script already set data-theme before first paint;
  // just sync the button label to whatever state that left us in.
  apply(root.getAttribute('data-theme') === 'dark');
  btn.addEventListener('click', () => {
    const goingDark = root.getAttribute('data-theme') !== 'dark';
    apply(goingDark);
    try { localStorage.setItem('xenos-theme', goingDark ? 'dark' : 'light'); } catch (e) {}
  });
})();

// ─── Routing ───
function parseHash() {
  const raw = location.hash.replace(/^#\/?/, '');
  if (!raw) return { view: 'library' };
  const parts = raw.split('/').filter(Boolean);
  if (parts[0] === 'book' && parts[1]) {
    return { view: 'book', slug: parts[1], section: parts[2] || null };
  }
  return { view: 'library' };
}

function route() {
  const r = parseHash();
  if (r.view === 'book' && XenosBooks.get(r.slug)) {
    renderBook(r.slug, r.section);
  } else {
    renderLibrary();
  }
  closeSidebar();
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', route);
window.addEventListener('DOMContentLoaded', route);

// ─── Library home ───
function renderLibrary(filter) {
  document.body.classList.add('view-library');
  document.body.classList.remove('view-book');
  document.getElementById('sidebar-wrap').innerHTML = '';

  const books = XenosBooks.all();
  const q = (filter || '').trim().toLowerCase();
  const visible = q
    ? books.filter(b =>
        b.title.toLowerCase().includes(q) ||
        b.subtitle.toLowerCase().includes(q) ||
        (b.category || '').toLowerCase().includes(q) ||
        (b.tags || []).some(t => t.toLowerCase().includes(q)))
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
            <a class="book-card" href="#/book/${b.slug}" style="--stagger:${stagger}">
              <div class="book-card-icon">${b.icon}</div>
              <div class="book-card-body">
                <div class="book-card-title">${b.title}</div>
                <div class="book-card-sub">${b.subtitle}</div>
                <div class="book-card-tags">${(b.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
              </div>
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

  document.getElementById('content').innerHTML = `
    <div class="library-hdr">
      <h1 class="library-title">Xenos Notes</h1>
      <p class="library-sub">Study notes on Islamic books &amp; topics — pick one to explore.</p>
      <input type="text" class="search-box" id="search-box" placeholder="Search notes, topics, tags…" value="${filter ? filter.replace(/"/g, '&quot;') : ''}" />
    </div>
    ${namesHtml}
    ${huroofHtml}
    ${groupsHtml || `<div class="empty-state">No notes match "${q}" yet.</div>`}
    ${duaHtml}
  `;

  const input = document.getElementById('search-box');
  input.addEventListener('input', () => renderLibrary(input.value));
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);

  initNamesSection();
  initHuroofSection();
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
  document.body.classList.remove('view-library');

  const sections = book.sections;
  const activeId = sectionId && sections.find(s => s.id === sectionId) ? sectionId : sections[0].id;

  document.getElementById('header-title').textContent = book.title;
  document.getElementById('header-sub').textContent = book.subtitle;
  document.getElementById('header-arabic-bg').textContent = book.arabicBg || '';
  document.getElementById('header-tags').innerHTML = (book.tags || [])
    .map(t => `<span class="header-tag">${t}</span>`).join('');

  document.getElementById('sidebar-wrap').innerHTML = `
    <a href="#/" class="back-to-library">← All Notes</a>
    <p class="sidebar-label">${book.title}</p>
    <div id="nav-items">
      ${sections.map(s => `
        <button class="nav-btn ${s.id === activeId ? 'active' : ''}" data-goto="${s.id}" style="--accent:${s.color}">
          <span class="nav-icon">${s.icon}</span>
          <span class="nav-labels">
            <span class="nav-main">${s.label}</span>
            <span class="nav-sub">${s.subtitle}</span>
          </span>
        </button>
      `).join('')}
    </div>
    <div class="sidebar-footer">
      <div class="sidebar-footer-name">${book.title}</div>
      <div class="sidebar-footer-desc">${book.footer || ''}</div>
    </div>
  `;
  document.querySelectorAll('#nav-items .nav-btn').forEach(btn => {
    btn.addEventListener('click', () => { location.hash = `#/book/${slug}/${btn.dataset.goto}`; });
  });

  renderBookSection(book, activeId);
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
        <div>
          <div class="section-title">${sec.label}</div>
          <div class="section-subtitle">${sec.subtitle}</div>
        </div>
      </div>
    </div>
    <div class="intro-card" style="border-left-color:${sec.color}">${sec.intro}</div>
    ${bulletsHtml}
    ${tableHtml}
    ${qaHtml}
    ${quizHtml}
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
    const updateScore = () => {
      const correct = parseInt(block.dataset.correct, 10);
      const answered = parseInt(block.dataset.answered, 10);
      if (answered === 0) { scoreEl.textContent = ''; return; }
      scoreEl.textContent = answered === total
        ? `Quiz complete — ${correct} / ${total} correct`
        : `Score so far: ${correct} / ${answered}`;
    };
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
    el.classList.remove('is-visible');
    setTimeout(() => {
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
