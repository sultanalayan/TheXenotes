/* XENOS NOTES — Learn Arabic, interactive app
 * Six levels (data/arabic-app-data.js), each a sequence of activities.
 * Activity types: flashcards (learn), match (click-pairs), mcq (multiple
 * choice / listen-and-choose), order (unscramble/arrange), parse (i'rab —
 * click a word, pick its grammatical role), reading (passage + glossary +
 * comprehension mcq). Progress is saved in localStorage, no login needed.
 *
 * Pronunciation uses the browser's own built-in speech synthesis (free,
 * no audio files) — quality and Arabic-voice availability depend on the
 * visitor's browser/OS, not real human recordings.
 */
(function () {
  // Chrome/Edge/Safari all load the voice list asynchronously — calling
  // getVoices() right on page load very often returns an empty array, so
  // we cache it and refresh on the voiceschanged event that fires once
  // it's actually populated. Without this, speak() would frequently pick
  // no voice at all and produce nothing, with no error to catch.
  let cachedVoices = [];
  function refreshVoices() { cachedVoices = window.speechSynthesis ? window.speechSynthesis.getVoices() : []; }
  if (window.speechSynthesis) {
    refreshVoices();
    window.speechSynthesis.onvoiceschanged = refreshVoices;
  }
  function findArabicVoice() { return cachedVoices.find(v => /^ar/i.test(v.lang)) || null; }
  function hasArabicVoice() { return !!findArabicVoice(); }

  function speak(text, btn) {
    try {
      if (!window.speechSynthesis) { flashNoVoice(btn); return; }
      if (!cachedVoices.length) refreshVoices();
      const voice = findArabicVoice();
      if (!voice) { flashNoVoice(btn); return; }
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.voice = voice;
      u.lang = voice.lang;
      u.rate = 0.8;
      window.speechSynthesis.speak(u);
    } catch (e) { flashNoVoice(btn); }
  }
  function flashNoVoice(btn) {
    if (!btn) return;
    const original = btn.innerHTML;
    btn.classList.add('aa-speak-btn-nosound');
    btn.title = 'No Arabic voice found on this device/browser. Try Microsoft Edge, or add an Arabic language/voice pack in your system\'s language settings.';
    btn.textContent = '🔇';
    setTimeout(() => { btn.innerHTML = original; }, 1600);
  }

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem('xenos-arabic-progress') || '{}'); }
    catch (e) { return {}; }
  }
  function saveProgress(levelId, stars) {
    const p = loadProgress();
    const prevStars = (p[levelId] && p[levelId].stars) || 0;
    p[levelId] = { completed: true, stars: Math.max(prevStars, stars) };
    try { localStorage.setItem('xenos-arabic-progress', JSON.stringify(p)); } catch (e) {}
  }
  function shuffle(arr) { return arr.map(v => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map(v => v[1]); }

  // ─── Activity renderers — each calls onDone(scoreFraction 0..1) when finished ───

  function renderFlashcards(activity, host, onDone) {
    let i = 0;
    function draw() {
      const c = activity.cards[i];
      host.innerHTML = `
        <div class="aa-flashcard">
          <div class="aa-flash-progress">${i + 1} / ${activity.cards.length}</div>
          <div class="aa-flash-hero">
            <div class="aa-flash-big">${c.ar}</div>
            <button class="aa-speak-btn" type="button" aria-label="Listen">🔊</button>
          </div>
          <div class="aa-flash-name">${c.name}</div>
          ${c.words.length ? `<div class="aa-flash-words">
            ${c.words.map(w => `
              <div class="aa-flash-word">
                <span class="aa-flash-word-emoji">${w.emoji || ''}</span>
                <span class="aa-flash-word-text"><span class="aa-flash-word-ar">${w.ar}</span><span class="aa-flash-word-en">${w.en}</span></span>
                ${w.pos ? `<span class="aa-flash-word-pos aa-flash-word-pos-${w.pos}">${w.pos}</span>` : ''}
              </div>
            `).join('')}
          </div>` : ''}
          <div class="aa-flash-nav">
            <button class="gate-btn gate-btn-secondary aa-flash-prev" type="button" ${i === 0 ? 'disabled' : ''}>‹ Back</button>
            <button class="gate-btn gate-btn-primary aa-flash-next" type="button">${i === activity.cards.length - 1 ? 'Done ✓' : 'Next ›'}</button>
          </div>
        </div>
      `;
      { const b = host.querySelector('.aa-speak-btn'); b.addEventListener('click', () => speak(c.ar, b)); }
      const prevBtn = host.querySelector('.aa-flash-prev');
      if (prevBtn) prevBtn.addEventListener('click', () => { i--; draw(); });
      host.querySelector('.aa-flash-next').addEventListener('click', () => {
        if (i === activity.cards.length - 1) onDone(1);
        else { i++; draw(); }
      });
    }
    draw();
  }

  function renderMatch(activity, host, onDone) {
    const left = shuffle(activity.pairs.map((p, idx) => ({ idx, text: p.left })));
    const right = shuffle(activity.pairs.map((p, idx) => ({ idx, text: p.right })));
    let selected = null;
    let matched = 0;
    let wrongTries = 0;
    function draw() {
      host.innerHTML = `
        <div class="aa-match">
          <div class="aa-match-progress">${matched} / ${activity.pairs.length} matched</div>
          <div class="aa-match-cols">
            <div class="aa-match-col">${left.map(it => `<button class="aa-match-item" data-idx="${it.idx}" data-side="left">${it.text}</button>`).join('')}</div>
            <div class="aa-match-col">${right.map(it => `<button class="aa-match-item" data-idx="${it.idx}" data-side="right">${it.text}</button>`).join('')}</div>
          </div>
        </div>
      `;
      host.querySelectorAll('.aa-match-item').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.classList.contains('matched')) return;
          const idx = parseInt(btn.dataset.idx, 10);
          const side = btn.dataset.side;
          if (!selected) {
            selected = { idx, side, btn };
            btn.classList.add('selected');
            return;
          }
          if (selected.side === side) {
            selected.btn.classList.remove('selected');
            selected = { idx, side, btn };
            btn.classList.add('selected');
            return;
          }
          if (selected.idx === idx) {
            btn.classList.add('matched');
            selected.btn.classList.add('matched');
            selected.btn.disabled = true;
            btn.disabled = true;
            selected = null;
            matched++;
            host.querySelector('.aa-match-progress').textContent = `${matched} / ${activity.pairs.length} matched`;
            if (matched === activity.pairs.length) {
              setTimeout(() => onDone(wrongTries === 0 ? 1 : 0.7), 500);
            }
          } else {
            wrongTries++;
            btn.classList.add('wrong');
            selected.btn.classList.add('wrong');
            setTimeout(() => {
              btn.classList.remove('wrong');
              selected.btn.classList.remove('wrong', 'selected');
              selected = null;
            }, 480);
          }
        });
      });
    }
    draw();
  }

  function renderMcq(activity, host, onDone) {
    let qi = 0, correctCount = 0;
    function draw() {
      const q = activity.questions[qi];
      host.innerHTML = `
        <div class="aa-mcq">
          <div class="aa-mcq-progress">${qi + 1} / ${activity.questions.length}</div>
          <div class="aa-mcq-prompt-row">
            <div class="aa-mcq-prompt">${q.prompt}</div>
            ${(activity.listening && q.audioText) ? `<button class="aa-speak-btn" type="button" aria-label="Listen">🔊</button>` : ''}
          </div>
          <div class="aa-mcq-choices">
            ${q.choices.map((c, ci) => `<button class="aa-mcq-choice" data-ci="${ci}">${c}</button>`).join('')}
          </div>
        </div>
      `;
      const speakBtn = host.querySelector('.aa-speak-btn');
      if (speakBtn) { speakBtn.addEventListener('click', () => speak(q.audioText, speakBtn)); speak(q.audioText, speakBtn); }
      let answered = false;
      host.querySelectorAll('.aa-mcq-choice').forEach(btn => {
        btn.addEventListener('click', () => {
          if (answered) return;
          answered = true;
          const ci = parseInt(btn.dataset.ci, 10);
          const isCorrect = ci === q.correct;
          if (isCorrect) correctCount++;
          host.querySelectorAll('.aa-mcq-choice').forEach(b => {
            b.disabled = true;
            if (parseInt(b.dataset.ci, 10) === q.correct) b.classList.add('correct');
          });
          if (!isCorrect) btn.classList.add('incorrect');
          setTimeout(() => {
            if (qi < activity.questions.length - 1) { qi++; draw(); }
            else onDone(correctCount / activity.questions.length);
          }, 900);
        });
      });
    }
    draw();
  }

  function renderOrder(activity, host, onDone) {
    let ti = 0, correctCount = 0;
    function draw() {
      const task = activity.tasks[ti];
      let bank = shuffle(task.scrambled.map((w, i) => ({ w, i })));
      let answer = [];
      function redraw() {
        host.innerHTML = `
          <div class="aa-order">
            <div class="aa-order-progress">${ti + 1} / ${activity.tasks.length}</div>
            <div class="aa-order-answer">${answer.length ? answer.map(a => `<span class="aa-order-chip aa-order-chip-answer" data-i="${a.i}">${a.w}</span>`).join('') : '<span class="aa-order-placeholder">Tap the letters/words below, in order</span>'}</div>
            <div class="aa-order-bank">${bank.map(b => `<button class="aa-order-chip" data-i="${b.i}" type="button">${b.w}</button>`).join('')}</div>
            <div class="aa-order-actions">
              <button class="gate-btn gate-btn-secondary aa-order-reset" type="button">↺ Reset</button>
              <button class="gate-btn gate-btn-primary aa-order-check" type="button" ${answer.length !== task.scrambled.length ? 'disabled' : ''}>Check ✓</button>
            </div>
            <div class="aa-order-feedback"></div>
          </div>
        `;
        host.querySelectorAll('.aa-order-bank .aa-order-chip').forEach(chip => {
          chip.addEventListener('click', () => {
            const i = parseInt(chip.dataset.i, 10);
            const item = bank.find(b => b.i === i);
            bank = bank.filter(b => b.i !== i);
            answer.push(item);
            redraw();
          });
        });
        host.querySelectorAll('.aa-order-answer .aa-order-chip').forEach(chip => {
          chip.addEventListener('click', () => {
            const i = parseInt(chip.dataset.i, 10);
            const item = answer.find(a => a.i === i);
            answer = answer.filter(a => a.i !== i);
            bank.push(item);
            redraw();
          });
        });
        host.querySelector('.aa-order-reset').addEventListener('click', () => {
          bank = shuffle(task.scrambled.map((w, i) => ({ w, i })));
          answer = [];
          redraw();
        });
        const checkBtn = host.querySelector('.aa-order-check');
        if (checkBtn) checkBtn.addEventListener('click', () => {
          const built = answer.map(a => a.w).join(task.scrambled.length && task.scrambled[0].length <= 2 ? '' : ' ').trim();
          // words joined with spaces for sentences, letters joined with nothing for single words
          const builtWord = answer.map(a => a.w).join('');
          const builtSentence = answer.map(a => a.w).join(' ');
          const isCorrect = builtWord === task.answer || builtSentence === task.answer;
          const fb = host.querySelector('.aa-order-feedback');
          if (isCorrect) {
            correctCount++;
            fb.innerHTML = `<span class="aa-order-correct">✓ ${task.answer}${task.translation ? ' — ' + task.translation : ''}</span>`;
            setTimeout(() => {
              if (ti < activity.tasks.length - 1) { ti++; draw(); }
              else onDone(correctCount / activity.tasks.length);
            }, 1100);
          } else {
            fb.innerHTML = `<span class="aa-order-wrong">Not quite — try again</span>`;
          }
        });
      }
      redraw();
    }
    draw();
  }

  function renderParse(activity, host, onDone) {
    let si = 0, totalWords = 0, correctWords = 0;
    activity.sentences.forEach(s => { totalWords += s.words.length; });
    function draw() {
      const sent = activity.sentences[si];
      let doneInSentence = 0;
      const allRoles = shuffle(sent.words.map(w => w.role));
      host.innerHTML = `
        <div class="aa-parse">
          <div class="aa-parse-progress">${si + 1} / ${activity.sentences.length}</div>
          <div class="aa-parse-sentence">
            ${sent.words.map((w, wi) => `<button class="aa-parse-word" data-wi="${wi}" type="button">${w.text}</button>`).join('')}
          </div>
          <div class="aa-parse-translation">${sent.translation || ''}</div>
          <div class="aa-parse-picker" id="aa-parse-picker" style="display:none;"></div>
        </div>
      `;
      const picker = host.querySelector('#aa-parse-picker');
      host.querySelectorAll('.aa-parse-word').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.classList.contains('done')) return;
          host.querySelectorAll('.aa-parse-word').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const wi = parseInt(btn.dataset.wi, 10);
          const correctRole = sent.words[wi].role;
          // Build 3 options: the correct role + up to 2 other roles from this sentence
          const distractors = shuffle(allRoles.filter(r => r !== correctRole)).slice(0, 2);
          const options = shuffle([correctRole, ...distractors]);
          picker.style.display = '';
          picker.innerHTML = options.map(o => `<button class="aa-parse-role-option" data-role="${o.replace(/"/g, '&quot;')}" type="button">${o}</button>`).join('');
          picker.querySelectorAll('.aa-parse-role-option').forEach(opt => {
            opt.addEventListener('click', () => {
              const chosen = opt.dataset.role;
              if (chosen === correctRole) {
                btn.classList.add('done', 'correct');
                btn.title = correctRole;
                correctWords++;
                doneInSentence++;
                picker.style.display = 'none';
                btn.classList.remove('active');
                if (doneInSentence === sent.words.length) {
                  setTimeout(() => {
                    if (si < activity.sentences.length - 1) { si++; draw(); }
                    else onDone(correctWords / totalWords);
                  }, 700);
                }
              } else {
                opt.classList.add('incorrect');
                setTimeout(() => opt.classList.remove('incorrect'), 420);
              }
            });
          });
        });
      });
    }
    draw();
  }

  function renderReading(activity, host, onDone) {
    const passage = activity.passages[0];
    let glossaryOpen = false;
    function drawIntro() {
      host.innerHTML = `
        <div class="aa-reading">
          <div class="aa-reading-title">${passage.title}</div>
          <div class="aa-reading-text">${passage.text}</div>
          <button class="aa-reading-glossary-toggle" type="button">📖 Word Glossary (${passage.glossary.length})</button>
          <div class="aa-reading-glossary" style="display:none;">
            ${passage.glossary.map(g => `<div class="aa-reading-glossary-item"><span class="aa-reading-glossary-ar">${g.ar}</span><span class="aa-reading-glossary-en">${g.en}</span></div>`).join('')}
          </div>
          <button class="gate-btn gate-btn-primary aa-reading-continue" type="button">Answer Questions ›</button>
        </div>
      `;
      host.querySelector('.aa-reading-glossary-toggle').addEventListener('click', () => {
        glossaryOpen = !glossaryOpen;
        host.querySelector('.aa-reading-glossary').style.display = glossaryOpen ? '' : 'none';
      });
      host.querySelector('.aa-reading-continue').addEventListener('click', () => {
        renderMcq({ questions: passage.questions }, host, onDone);
      });
    }
    drawIntro();
  }

  const RENDERERS = { flashcards: renderFlashcards, match: renderMatch, mcq: renderMcq, order: renderOrder, parse: renderParse, reading: renderReading };

  // ─── Level detail: steps through a level's activities in sequence ───
  function renderLevelDetail(level, host, onBack) {
    let ai = 0;
    const scores = [];
    function drawStepHeader() {
      return `
        <div class="aa-level-detail-header" style="--lvl-color:${level.color}">
          <button class="aa-back-to-levels" type="button">‹ All Levels</button>
          <div class="aa-level-detail-title">${level.icon} ${level.title}</div>
          <div class="aa-activity-dots">
            ${level.activities.map((a, i) => `<span class="aa-activity-dot ${i < ai ? 'done' : ''} ${i === ai ? 'active' : ''}"></span>`).join('')}
          </div>
        </div>
      `;
    }
    function drawActivity() {
      const activity = level.activities[ai];
      host.innerHTML = `
        ${drawStepHeader()}
        <div class="aa-activity-title">${activity.icon || ''} ${activity.title}</div>
        <div class="aa-activity-host"></div>
      `;
      host.querySelector('.aa-back-to-levels').addEventListener('click', onBack);
      const activityHost = host.querySelector('.aa-activity-host');
      const renderer = RENDERERS[activity.type];
      if (!renderer) { activityHost.innerHTML = '<div class="empty-state">This activity type isn\'t available yet.</div>'; return; }
      renderer(activity, activityHost, (score) => {
        scores.push(score);
        if (ai < level.activities.length - 1) {
          ai++;
          drawActivity();
          host.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          finishLevel();
        }
      });
    }
    function finishLevel() {
      const avg = scores.reduce((a, b) => a + b, 0) / (scores.length || 1);
      const stars = avg >= 0.9 ? 3 : avg >= 0.7 ? 2 : 1;
      saveProgress(level.id, stars);
      host.innerHTML = `
        ${drawStepHeader()}
        <div class="aa-complete-screen">
          <div class="aa-complete-emoji">🎉</div>
          <div class="aa-complete-title">Level ${level.id} Complete!</div>
          <div class="aa-complete-stars">${'⭐'.repeat(stars)}${'☆'.repeat(3 - stars)}</div>
          <div class="aa-complete-body">${avg >= 0.9 ? 'Excellent work — you\'ve mastered this level.' : avg >= 0.7 ? 'Good progress! Feel free to redo it for a better score.' : 'Nice effort — try this level again any time to improve.'}</div>
          <div class="aa-complete-actions">
            <button class="gate-btn gate-btn-secondary aa-redo-level" type="button">↺ Redo This Level</button>
            <button class="gate-btn gate-btn-primary aa-to-levels" type="button">All Levels ›</button>
          </div>
        </div>
      `;
      host.querySelector('.aa-back-to-levels').addEventListener('click', onBack);
      host.querySelector('.aa-to-levels').addEventListener('click', onBack);
      host.querySelector('.aa-redo-level').addEventListener('click', () => { ai = 0; scores.length = 0; drawActivity(); });
    }
    drawActivity();
  }

  // ─── Entry point — called by app.js's renderArabicApp(), which owns the
  // page shell (header + sidebar) the same way it does for a book. ───
  window.XenosArabicApp = {
    // Level-select grid, shown at #/arabic
    renderGrid(host, onSelectLevel) {
      const levels = window.XENOS_ARABIC_LEVELS || [];
      const progress = loadProgress();
      host.innerHTML = `
        <div class="aa-intro">
          <div class="aa-intro-title">اِخْتَرِ الْمُسْتَوَى — Choose a Level</div>
          <div class="aa-intro-sub">Work through them in order, or jump straight to whichever fits you — each level chains a few activities together and finishes with a star rating.</div>
        </div>
        <div class="aa-level-grid">
          ${levels.map(lvl => {
            const p = progress[lvl.id];
            return `
              <button class="aa-level-card" data-id="${lvl.id}" style="--lvl-color:${lvl.color}">
                <div class="aa-level-card-icon">${lvl.icon}</div>
                <div class="aa-level-card-num">Level ${lvl.id}</div>
                <div class="aa-level-card-title">${lvl.subtitle.replace(/^Level \d+ — /, '')}</div>
                <div class="aa-level-card-stars">${p ? '⭐'.repeat(p.stars) + '☆'.repeat(3 - p.stars) : 'Not started'}</div>
              </button>
            `;
          }).join('')}
        </div>
      `;
      host.querySelectorAll('.aa-level-card').forEach(card => {
        card.addEventListener('click', () => onSelectLevel(parseInt(card.dataset.id, 10)));
      });
    },
    // A single level's activity sequence, shown at #/arabic/<id>
    renderLevel(host, levelId, onBack) {
      const level = (window.XENOS_ARABIC_LEVELS || []).find(l => l.id === levelId);
      if (!level) { host.innerHTML = '<div class="empty-state">Level not found.</div>'; return; }
      renderLevelDetail(level, host, onBack);
    },
  };
})();
