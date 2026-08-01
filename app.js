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

  document.getElementById('content').innerHTML = `
    <div class="library-hdr">
      <h1 class="library-title">Xenos Notes</h1>
      <p class="library-sub">Study notes on Islamic books &amp; topics — pick one to explore.</p>
      <input type="text" class="search-box" id="search-box" placeholder="Search notes, topics, tags…" value="${filter ? filter.replace(/"/g, '&quot;') : ''}" />
    </div>
    ${groupsHtml || `<div class="empty-state">No notes match "${q}" yet.</div>`}
  `;

  const input = document.getElementById('search-box');
  input.addEventListener('input', () => renderLibrary(input.value));
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
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

  const tableHtml = sec.sectsTable ? `
    <div class="sects-table-wrap">
      <table class="sects-table">
        <thead><tr><th>Item</th><th>Core Error</th><th>Correction</th></tr></thead>
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
