/* XENOS NOTES — Arabic Learning App, level content
 * Six progressive levels, each with several activities (exercise types):
 * flashcards (learn), match (click-pairs), mcq (multiple choice / "circle
 * the right one" / listen-and-choose), order (arrange words into a
 * sentence), parse (i'raab — click a word, choose its grammatical role),
 * reading (a passage + glossary + comprehension questions).
 *
 * Level 1 vocabulary is sourced directly from "الحروف العربية مع سمير"
 * (Samir's Arabic Letters) — three real words per letter, chosen by the
 * book to show that letter in a word's beginning, middle, and end.
 * Levels 4-6 draw their story themes and nahw/sarf syllabus from
 * "اللغة العربية 3", a grade-3 Arabic language course book (its actual
 * table of contents: sentence types, الجملة الاسمية, أنواع الخبر, الجملة
 * التعجبية/الاستفهامية, الأسماء الموصولة, الأفعال الخمسة, إعراب الفعل
 * المضارع, etc. — the real syllabus this level content is built around).
 */
window.XENOS_ARABIC_LEVELS = [
  // ═══════════════════════════ LEVEL 1 ═══════════════════════════
  {
    id: 1, icon: '🔤', color: 'var(--burgundy)',
    title: 'المستوى ١ — الحروف العربية', subtitle: 'Level 1 — The Arabic Letters',
    intro: 'Every one of the 28 letters, each shown through three real words — one where the letter opens the word, one where it sits in the middle, and one where it closes it. Exactly how "الحروف العربية مع سمير" teaches it.',
    activities: [
      {
        type: 'flashcards', title: 'تعلّم — Learn the Letters', icon: '📇',
        cards: [
          { ar: 'أ', name: 'Alif', words: [{ ar: 'أرنب', en: 'rabbit', emoji: '🐰', pos: 'start' }, { ar: 'هاتف', en: 'telephone', emoji: '☎️', pos: 'middle' }, { ar: 'كوسا', en: 'zucchini', emoji: '🥒', pos: 'end' }] },
          { ar: 'ب', name: 'Bāʾ', words: [{ ar: 'بطة', en: 'duck', emoji: '🦆', pos: 'start' }, { ar: 'لعبة', en: 'toy', emoji: '🎲', pos: 'middle' }, { ar: 'كتاب', en: 'book', emoji: '📖', pos: 'end' }] },
          { ar: 'ت', name: 'Tāʾ', words: [{ ar: 'تفاحة', en: 'apple', emoji: '🍎', pos: 'start' }, { ar: 'مفتاح', en: 'key', emoji: '🔑', pos: 'middle' }, { ar: 'عنكبوت', en: 'spider', emoji: '🕷️', pos: 'end' }] },
          { ar: 'ث', name: 'Thāʾ', words: [{ ar: 'ثعلب', en: 'fox', emoji: '🦊', pos: 'start' }, { ar: 'مثلث', en: 'triangle', emoji: '🔺', pos: 'middle' }, { ar: 'أثاث', en: 'furniture', emoji: '🛋️', pos: 'end' }] },
          { ar: 'ج', name: 'Jīm', words: [{ ar: 'جمل', en: 'camel', emoji: '🐫', pos: 'start' }, { ar: 'فجل', en: 'radish', emoji: '🥬', pos: 'middle' }, { ar: 'تاج', en: 'crown', emoji: '👑', pos: 'end' }] },
          { ar: 'ح', name: 'Ḥāʾ', words: [{ ar: 'حليب', en: 'milk', emoji: '🥛', pos: 'start' }, { ar: 'نحلة', en: 'bee', emoji: '🐝', pos: 'middle' }, { ar: 'بلح', en: 'dates', emoji: '🌴', pos: 'end' }] },
          { ar: 'خ', name: 'Khāʾ', words: [{ ar: 'خروف', en: 'sheep', emoji: '🐑', pos: 'start' }, { ar: 'نخلة', en: 'palm tree', emoji: '🌴', pos: 'middle' }, { ar: 'كوخ', en: 'hut', emoji: '🛖', pos: 'end' }] },
          { ar: 'د', name: 'Dāl', words: [{ ar: 'ديك', en: 'rooster', emoji: '🐓', pos: 'start' }, { ar: 'بندورة', en: 'tomato', emoji: '🍅', pos: 'middle' }, { ar: 'قرد', en: 'monkey', emoji: '🐒', pos: 'end' }] },
          { ar: 'ذ', name: 'Dhāl', words: [{ ar: 'ذرة', en: 'corn', emoji: '🌽', pos: 'start' }, { ar: 'حذاء', en: 'shoe', emoji: '👞', pos: 'middle' }, { ar: 'أستاذ', en: 'teacher', emoji: '🧑‍🏫', pos: 'end' }] },
          { ar: 'ر', name: 'Rāʾ', words: [{ ar: 'رمان', en: 'pomegranate', emoji: '🍎', pos: 'start' }, { ar: 'دراجة', en: 'bicycle', emoji: '🚲', pos: 'middle' }, { ar: 'قمر', en: 'moon', emoji: '🌙', pos: 'end' }] },
          { ar: 'ز', name: 'Zāy', words: [{ ar: 'زرافة', en: 'giraffe', emoji: '🦒', pos: 'start' }, { ar: 'جزر', en: 'carrot', emoji: '🥕', pos: 'middle' }, { ar: 'موز', en: 'banana', emoji: '🍌', pos: 'end' }] },
          { ar: 'س', name: 'Sīn', words: [{ ar: 'ساعة', en: 'clock', emoji: '⏰', pos: 'start' }, { ar: 'مسجد', en: 'mosque', emoji: '🕌', pos: 'middle' }, { ar: 'شمس', en: 'sun', emoji: '☀️', pos: 'end' }] },
          { ar: 'ش', name: 'Shīn', words: [{ ar: 'شجرة', en: 'tree', emoji: '🌳', pos: 'start' }, { ar: 'فراشة', en: 'butterfly', emoji: '🦋', pos: 'middle' }, { ar: 'قرش', en: 'shark', emoji: '🦈', pos: 'end' }] },
          { ar: 'ص', name: 'Ṣād', words: [{ ar: 'صابون', en: 'soap', emoji: '🧼', pos: 'start' }, { ar: 'بصل', en: 'onion', emoji: '🧅', pos: 'middle' }, { ar: 'قميص', en: 'shirt', emoji: '👕', pos: 'end' }] },
          { ar: 'ض', name: 'Ḍād', words: [{ ar: 'ضفدع', en: 'frog', emoji: '🐸', pos: 'start' }, { ar: 'خضار', en: 'vegetables', emoji: '🥬', pos: 'middle' }, { ar: 'بيض', en: 'eggs', emoji: '🥚', pos: 'end' }] },
          { ar: 'ط', name: 'Ṭāʾ', words: [{ ar: 'طائرة', en: 'airplane', emoji: '✈️', pos: 'start' }, { ar: 'بطريق', en: 'penguin', emoji: '🐧', pos: 'middle' }, { ar: 'قط', en: 'cat', emoji: '🐱', pos: 'end' }] },
          { ar: 'ظ', name: 'Ẓāʾ', words: [{ ar: 'ظرف', en: 'envelope', emoji: '✉️', pos: 'start' }, { ar: 'نظارة', en: 'glasses', emoji: '👓', pos: 'middle' }, { ar: 'بلاط', en: 'tile', emoji: '🧱', pos: 'end' }] },
          { ar: 'ع', name: 'ʿAyn', words: [{ ar: 'عنب', en: 'grapes', emoji: '🍇', pos: 'start' }, { ar: 'معلم', en: 'teacher', emoji: '🧑‍🏫', pos: 'middle' }, { ar: 'شارع', en: 'street', emoji: '🛣️', pos: 'end' }] },
          { ar: 'غ', name: 'Ghayn', words: [{ ar: 'غزال', en: 'gazelle', emoji: '🦌', pos: 'start' }, { ar: 'ببغاء', en: 'parrot', emoji: '🦜', pos: 'middle' }, { ar: 'دماغ', en: 'brain', emoji: '🧠', pos: 'end' }] },
          { ar: 'ف', name: 'Fāʾ', words: [{ ar: 'فيل', en: 'elephant', emoji: '🐘', pos: 'start' }, { ar: 'سفينة', en: 'ship', emoji: '🚢', pos: 'middle' }, { ar: 'كف', en: 'palm (of hand)', emoji: '✋', pos: 'end' }] },
          { ar: 'ق', name: 'Qāf', words: [{ ar: 'قطة', en: 'cat', emoji: '🐱', pos: 'start' }, { ar: 'بقرة', en: 'cow', emoji: '🐄', pos: 'middle' }, { ar: 'إبريق', en: 'teapot', emoji: '🫖', pos: 'end' }] },
          { ar: 'ك', name: 'Kāf', words: [{ ar: 'كلب', en: 'dog', emoji: '🐕', pos: 'start' }, { ar: 'سكين', en: 'knife', emoji: '🔪', pos: 'middle' }, { ar: 'سمك', en: 'fish', emoji: '🐟', pos: 'end' }] },
          { ar: 'ل', name: 'Lām', words: [{ ar: 'ليمون', en: 'lemon', emoji: '🍋', pos: 'start' }, { ar: 'ملعقة', en: 'spoon', emoji: '🥄', pos: 'middle' }, { ar: 'جمل', en: 'camel', emoji: '🐫', pos: 'end' }] },
          { ar: 'م', name: 'Mīm', words: [{ ar: 'مقلمة', en: 'pencil case', emoji: '✏️', pos: 'start' }, { ar: 'قمر', en: 'moon', emoji: '🌙', pos: 'middle' }, { ar: 'نجم', en: 'star', emoji: '⭐', pos: 'end' }] },
          { ar: 'ن', name: 'Nūn', words: [{ ar: 'نعامة', en: 'ostrich', emoji: '🦤', pos: 'start' }, { ar: 'فنجان', en: 'cup', emoji: '☕', pos: 'middle' }, { ar: 'تلفزيون', en: 'television', emoji: '📺', pos: 'end' }] },
          { ar: 'ه', name: 'Hāʾ', words: [{ ar: 'هدية', en: 'gift', emoji: '🎁', pos: 'start' }, { ar: 'زهرة', en: 'flower', emoji: '🌸', pos: 'middle' }, { ar: 'فواكه', en: 'fruits', emoji: '🍉', pos: 'end' }] },
          { ar: 'و', name: 'Wāw', words: [{ ar: 'وردة', en: 'rose', emoji: '🌹', pos: 'start' }, { ar: 'نجوم', en: 'stars', emoji: '⭐', pos: 'middle' }, { ar: 'دلو', en: 'bucket', emoji: '🪣', pos: 'end' }] },
          { ar: 'ي', name: 'Yāʾ', words: [{ ar: 'يد', en: 'hand', emoji: '✋', pos: 'start' }, { ar: 'بيت', en: 'house', emoji: '🏠', pos: 'middle' }, { ar: 'كرسي', en: 'chair', emoji: '🪑', pos: 'end' }] },
        ],
      },
      {
        type: 'match', title: 'طابق — Match Each Letter to Its Word', icon: '🔗',
        pairs: [
          { left: 'أ', right: 'أرنب 🐰' }, { left: 'ب', right: 'بطة 🦆' }, { left: 'ت', right: 'تفاحة 🍎' },
          { left: 'ث', right: 'ثعلب 🦊' }, { left: 'ج', right: 'جمل 🐫' }, { left: 'ح', right: 'حليب 🥛' },
          { left: 'خ', right: 'خروف 🐑' }, { left: 'د', right: 'ديك 🐓' },
        ],
      },
      {
        type: 'match', title: 'طابق — More Letters and Words', icon: '🔗',
        pairs: [
          { left: 'ذ', right: 'ذرة 🌽' }, { left: 'ر', right: 'رمان 🍎' }, { left: 'ز', right: 'زرافة 🦒' },
          { left: 'س', right: 'ساعة ⏰' }, { left: 'ش', right: 'شجرة 🌳' }, { left: 'ص', right: 'صابون 🧼' },
          { left: 'ض', right: 'ضفدع 🐸' }, { left: 'ط', right: 'طائرة ✈️' },
        ],
      },
      {
        type: 'mcq', title: 'اختر — Which Letter Does This Word Start With?', icon: '🎯',
        questions: [
          { prompt: 'أرنب 🐰', choices: ['أ', 'ن', 'ب', 'ر'], correct: 0 },
          { prompt: 'ثعلب 🦊', choices: ['ب', 'ث', 'ل', 'ع'], correct: 1 },
          { prompt: 'جمل 🐫', choices: ['م', 'ل', 'ج', 'ح'], correct: 2 },
          { prompt: 'خروف 🐑', choices: ['خ', 'ر', 'ف', 'و'], correct: 0 },
          { prompt: 'زرافة 🦒', choices: ['ر', 'ف', 'ز', 'ة'], correct: 2 },
          { prompt: 'شجرة 🌳', choices: ['ج', 'ش', 'ر', 'ة'], correct: 1 },
          { prompt: 'ضفدع 🐸', choices: ['ف', 'د', 'ض', 'ع'], correct: 2 },
          { prompt: 'قطة 🐱', choices: ['ط', 'ة', 'ق', 'ت'], correct: 2 },
          { prompt: 'ليمون 🍋', choices: ['ل', 'ي', 'م', 'ن'], correct: 0 },
          { prompt: 'وردة 🌹', choices: ['د', 'ر', 'ة', 'و'], correct: 3 },
        ],
      },
      {
        type: 'mcq', title: 'استمع واختر — Listen and Choose the Letter', icon: '🔊', listening: true,
        questions: [
          { prompt: 'أ', audioText: 'أ', choices: ['ا', 'ح', 'ع', 'و'], correct: 0 },
          { prompt: 'ب', audioText: 'ب', choices: ['ت', 'ب', 'ث', 'ن'], correct: 1 },
          { prompt: 'ج', audioText: 'ج', choices: ['ح', 'خ', 'ج', 'ع'], correct: 2 },
          { prompt: 'د', audioText: 'د', choices: ['ذ', 'د', 'ر', 'ز'], correct: 1 },
          { prompt: 'س', audioText: 'س', choices: ['ش', 'ص', 'س', 'ث'], correct: 2 },
          { prompt: 'ط', audioText: 'ط', choices: ['ت', 'ظ', 'ض', 'ط'], correct: 3 },
          { prompt: 'ق', audioText: 'ق', choices: ['ك', 'ق', 'غ', 'ف'], correct: 1 },
          { prompt: 'م', audioText: 'م', choices: ['ن', 'م', 'ل', 'و'], correct: 1 },
        ],
      },
    ],
  },

  // ═══════════════════════════ LEVEL 2 ═══════════════════════════
  {
    id: 2, icon: '✍️', color: 'var(--gold)',
    title: 'المستوى ٢ — أشكال الحروف والحركات', subtitle: 'Level 2 — Letter Forms & Harakāt',
    intro: 'The same 28 letters look different depending on where they sit in a word — isolated, at the start, in the middle, or at the end. This level also introduces the ḥarakāt (short vowel marks) that tell you exactly how to pronounce every letter.',
    activities: [
      {
        type: 'flashcards', title: 'تعلّم — The Four Positions', icon: '📇',
        cards: [
          { ar: 'ب', name: 'Bāʾ — the four shapes', words: [{ ar: 'ب', en: 'isolated (alone)', emoji: '①' }, { ar: 'بـ', en: 'initial (start of word)', emoji: '②' }, { ar: 'ـبـ', en: 'medial (middle of word)', emoji: '③' }, { ar: 'ـب', en: 'final (end of word)', emoji: '④' }] },
          { ar: 'ع', name: 'ʿAyn — the four shapes', words: [{ ar: 'ع', en: 'isolated', emoji: '①' }, { ar: 'عـ', en: 'initial', emoji: '②' }, { ar: 'ـعـ', en: 'medial', emoji: '③' }, { ar: 'ـع', en: 'final', emoji: '④' }] },
          { ar: 'م', name: 'Mīm — the four shapes', words: [{ ar: 'م', en: 'isolated', emoji: '①' }, { ar: 'مـ', en: 'initial', emoji: '②' }, { ar: 'ـمـ', en: 'medial', emoji: '③' }, { ar: 'ـم', en: 'final', emoji: '④' }] },
          { ar: 'ه', name: 'Hāʾ — the four shapes (the trickiest one!)', words: [{ ar: 'ه', en: 'isolated', emoji: '①' }, { ar: 'هـ', en: 'initial', emoji: '②' }, { ar: 'ـهـ', en: 'medial', emoji: '③' }, { ar: 'ـه', en: 'final', emoji: '④' }] },
          { ar: 'َ', name: 'Al-Fatḥah — a short line above the letter', words: [{ ar: 'بَ', en: '"ba" — a short A sound', emoji: '🔊' }] },
          { ar: 'ِ', name: 'Al-Kasrah — a short line below the letter', words: [{ ar: 'بِ', en: '"bi" — a short I sound', emoji: '🔊' }] },
          { ar: 'ُ', name: 'Ad-Dammah — a small curl above the letter', words: [{ ar: 'بُ', en: '"bu" — a short U sound', emoji: '🔊' }] },
          { ar: 'ْ', name: 'As-Sukūn — a small circle above the letter', words: [{ ar: 'بْ', en: 'no vowel at all — just "b"', emoji: '🔇' }] },
          { ar: 'ً ٍ ٌ', name: 'At-Tanwīn — doubling a ḥarakah', words: [{ ar: 'كتابًا', en: 'fatḥatayn — "an" sound', emoji: '🔊' }, { ar: 'كتابٍ', en: 'kasratayn — "in" sound', emoji: '🔊' }, { ar: 'كتابٌ', en: 'dammatayn — "un" sound', emoji: '🔊' }] },
        ],
      },
      {
        type: 'match', title: 'طابق — Match the Shape to Its Position', icon: '🔗',
        pairs: [
          { left: 'ب (alone)', right: 'isolated' }, { left: 'بـ', right: 'start of word' },
          { left: 'ـبـ', right: 'middle of word' }, { left: 'ـب', right: 'end of word' },
          { left: 'بَ', right: 'fatḥah — a sound' }, { left: 'بِ', right: 'kasrah — i sound' },
          { left: 'بُ', right: 'dammah — u sound' }, { left: 'بْ', right: 'sukūn — no vowel' },
        ],
      },
      {
        type: 'mcq', title: 'اختر — Which Ḥarakah Do You Hear?', icon: '🔊', listening: true,
        questions: [
          { prompt: 'بَ', audioText: 'بَ', choices: ['fatḥah (a)', 'kasrah (i)', 'dammah (u)', 'sukūn (none)'], correct: 0 },
          { prompt: 'بِ', audioText: 'بِ', choices: ['fatḥah (a)', 'kasrah (i)', 'dammah (u)', 'sukūn (none)'], correct: 1 },
          { prompt: 'بُ', audioText: 'بُ', choices: ['fatḥah (a)', 'kasrah (i)', 'dammah (u)', 'sukūn (none)'], correct: 2 },
          { prompt: 'بْ', audioText: 'بْ', choices: ['fatḥah (a)', 'kasrah (i)', 'dammah (u)', 'sukūn (none)'], correct: 3 },
          { prompt: 'كَ', audioText: 'كَ', choices: ['fatḥah (a)', 'kasrah (i)', 'dammah (u)', 'sukūn (none)'], correct: 0 },
          { prompt: 'نِ', audioText: 'نِ', choices: ['fatḥah (a)', 'kasrah (i)', 'dammah (u)', 'sukūn (none)'], correct: 1 },
          { prompt: 'رُ', audioText: 'رُ', choices: ['fatḥah (a)', 'kasrah (i)', 'dammah (u)', 'sukūn (none)'], correct: 2 },
        ],
      },
      {
        type: 'mcq', title: 'اختر — Spot the Correct Medial Form', icon: '🎯',
        questions: [
          { prompt: 'How does ب look in the MIDDLE of a word?', choices: ['ب', 'بـ', 'ـبـ', 'ـب'], correct: 2 },
          { prompt: 'How does ع look at the START of a word?', choices: ['ع', 'عـ', 'ـعـ', 'ـع'], correct: 1 },
          { prompt: 'How does م look at the END of a word?', choices: ['م', 'مـ', 'ـمـ', 'ـم'], correct: 3 },
          { prompt: 'Which letters NEVER connect to the letter after them (so a word "breaks" after them)?', choices: ['ب and ت', 'س and ش', 'ا، د، ذ، ر، ز، و', 'ع and غ'], correct: 2 },
          { prompt: 'What does a sukūn (ـْـ) tell you?', choices: ['Say the letter twice', 'The letter has no vowel sound', 'Stretch the vowel long', 'Stop reading here'], correct: 1 },
        ],
      },
    ],
  },

  // ═══════════════════════════ LEVEL 3 ═══════════════════════════
  {
    id: 3, icon: '🧩', color: 'var(--emerald)',
    title: 'المستوى ٣ — بناء الكلمات والمفردات', subtitle: 'Level 3 — Building Words & Vocabulary',
    intro: 'Letters become words. This level practices reading and building whole words — colors, numbers, family, and everyday things — and starts noticing the small connector letters (و، في، من، على) that link words into phrases.',
    activities: [
      {
        type: 'flashcards', title: 'تعلّم — Colors, Numbers, Family', icon: '📇',
        cards: [
          { ar: 'أَحْمَر', name: 'red', words: [{ ar: '🔴', en: 'aḥmar', emoji: '🔴' }] },
          { ar: 'أَزْرَق', name: 'blue', words: [{ ar: '🔵', en: 'azraq', emoji: '🔵' }] },
          { ar: 'أَخْضَر', name: 'green', words: [{ ar: '🟢', en: 'akhḍar', emoji: '🟢' }] },
          { ar: 'أَصْفَر', name: 'yellow', words: [{ ar: '🟡', en: 'aṣfar', emoji: '🟡' }] },
          { ar: 'وَاحِد ١', name: 'one', words: [] }, { ar: 'اِثْنَان ٢', name: 'two', words: [] },
          { ar: 'ثَلَاثَة ٣', name: 'three', words: [] }, { ar: 'أَرْبَعَة ٤', name: 'four', words: [] },
          { ar: 'خَمْسَة ٥', name: 'five', words: [] },
          { ar: 'أَب', name: 'father', words: [{ ar: '👨', en: 'ab', emoji: '👨' }] },
          { ar: 'أُم', name: 'mother', words: [{ ar: '👩', en: 'umm', emoji: '👩' }] },
          { ar: 'أَخ', name: 'brother', words: [{ ar: '👦', en: 'akh', emoji: '👦' }] },
          { ar: 'أُخْت', name: 'sister', words: [{ ar: '👧', en: 'ukht', emoji: '👧' }] },
          { ar: 'جَدّ', name: 'grandfather', words: [{ ar: '👴', en: 'jadd', emoji: '👴' }] },
          { ar: 'جَدَّة', name: 'grandmother', words: [{ ar: '👵', en: 'jaddah', emoji: '👵' }] },
        ],
      },
      {
        type: 'match', title: 'طابق — Word to Picture', icon: '🔗',
        pairs: [
          { left: 'قِطّة', right: '🐱 cat' }, { left: 'شَمْس', right: '☀️ sun' }, { left: 'بَيْت', right: '🏠 house' },
          { left: 'مَاء', right: '💧 water' }, { left: 'كِتَاب', right: '📖 book' }, { left: 'وَرْدَة', right: '🌹 rose' },
          { left: 'سَيَّارَة', right: '🚗 car' }, { left: 'مَدْرَسَة', right: '🏫 school' },
        ],
      },
      {
        type: 'order', title: 'رتّب — Unscramble the Letters Into a Word', icon: '🧩',
        tasks: [
          { scrambled: ['ب', 'ي', 'ت'], answer: 'بيت', translation: 'house' },
          { scrambled: ['ق', 'ل', 'م'], answer: 'قلم', translation: 'pen' },
          { scrambled: ['ش', 'م', 'س'], answer: 'شمس', translation: 'sun' },
          { scrambled: ['ك', 'ل', 'ب'], answer: 'كلب', translation: 'dog' },
          { scrambled: ['ب', 'ا', 'ب'], answer: 'باب', translation: 'door' },
          { scrambled: ['و', 'ر', 'د', 'ة'], answer: 'وردة', translation: 'rose' },
        ],
      },
      {
        type: 'mcq', title: 'اختر — Colors and Numbers', icon: '🎯',
        questions: [
          { prompt: '🔴 = ?', choices: ['أَزْرَق', 'أَحْمَر', 'أَصْفَر', 'أَخْضَر'], correct: 1 },
          { prompt: '🟢 = ?', choices: ['أَخْضَر', 'أَحْمَر', 'أَبْيَض', 'أَسْوَد'], correct: 0 },
          { prompt: '٣ = ?', choices: ['اِثْنَان', 'أَرْبَعَة', 'ثَلَاثَة', 'خَمْسَة'], correct: 2 },
          { prompt: 'Which word means "mother"?', choices: ['أَب', 'أُم', 'أَخ', 'جَدّ'], correct: 1 },
          { prompt: 'Which word means "grandfather"?', choices: ['جَدَّة', 'أُخْت', 'جَدّ', 'أَب'], correct: 2 },
        ],
      },
    ],
  },

  // ═══════════════════════════ LEVEL 4 ═══════════════════════════
  {
    id: 4, icon: '📝', color: 'var(--burgundy-light)',
    title: 'المستوى ٤ — الجمل والقراءة', subtitle: 'Level 4 — Sentences & Reading',
    intro: 'Words join into sentences. Drawing on the same story units a real grade-3 Arabic course teaches with — talking animals, honest friendships — this level covers the two basic sentence types (الجملة الاسمية / الفعلية) and practices reading short passages.',
    activities: [
      {
        type: 'flashcards', title: 'تعلّم — Two Kinds of Sentences', icon: '📇',
        cards: [
          { ar: 'الجملة الاسمية', name: 'The Nominal Sentence', words: [{ ar: 'الْقِطَّةُ نَائِمَةٌ', en: '"The cat is sleeping" — starts with a noun (الْقِطَّةُ)', emoji: '🐱' }] },
          { ar: 'المبتدأ والخبر', name: 'Mubtadaʾ & Khabar', words: [{ ar: 'الْوَلَدُ مُجْتَهِدٌ', en: 'الْوَلَدُ = mubtadaʾ (topic) · مُجْتَهِدٌ = khabar (what is said about it)', emoji: '👦' }] },
          { ar: 'الجملة الفعلية', name: 'The Verbal Sentence', words: [{ ar: 'أَكَلَ الْوَلَدُ التُّفَّاحَةَ', en: '"The boy ate the apple" — starts with a verb (أَكَلَ)', emoji: '🍎' }] },
          { ar: 'الفعل والفاعل والمفعول به', name: 'Verb, Subject, Object', words: [{ ar: 'أَكَلَ / الْوَلَدُ / التُّفَّاحَةَ', en: 'verb / subject (fāʿil) / object (mafʿūl bihi)', emoji: '📝' }] },
          { ar: 'الجملة التعجبية', name: 'The Exclamatory Sentence', words: [{ ar: 'مَا أَجْمَلَ الْحَدِيقَةَ !', en: '"How beautiful the garden is!"', emoji: '❗' }] },
          { ar: 'الجملة الاستفهامية', name: 'The Question Sentence', words: [{ ar: 'هَلْ أَنْتَ سَعِيدٌ ؟', en: '"Are you happy?" — opens with a question word', emoji: '❓' }] },
        ],
      },
      {
        type: 'mcq', title: 'اختر — Nominal or Verbal?', icon: '🎯',
        questions: [
          { prompt: 'الشَّمْسُ مُشْرِقَةٌ', choices: ['جملة اسمية (nominal)', 'جملة فعلية (verbal)'], correct: 0 },
          { prompt: 'ذَهَبَ الْأَصْدِقَاءُ إِلَى الْغَابَةِ', choices: ['جملة اسمية (nominal)', 'جملة فعلية (verbal)'], correct: 1 },
          { prompt: 'الْحَيَوَانَاتُ خَائِفَةٌ', choices: ['جملة اسمية (nominal)', 'جملة فعلية (verbal)'], correct: 0 },
          { prompt: 'سَمِعَ الْغَزَالُ صَوْتًا', choices: ['جملة اسمية (nominal)', 'جملة فعلية (verbal)'], correct: 1 },
          { prompt: 'فِي الْجُمْلَة "الْقِطَّةُ نَائِمَةٌ" — ما هو الْخَبَر؟', choices: ['الْقِطَّةُ', 'نَائِمَةٌ', 'لا يوجد خبر'], correct: 1 },
          { prompt: 'فِي الْجُمْلَة "أَكَلَ الْوَلَدُ التُّفَّاحَةَ" — ما هو الْفَاعِل؟', choices: ['أَكَلَ', 'الْوَلَدُ', 'التُّفَّاحَةَ'], correct: 1 },
        ],
      },
      {
        type: 'order', title: 'رتّب — Put the Sentence in the Right Order', icon: '🧩',
        tasks: [
          { scrambled: ['نَائِمَةٌ', 'الْقِطَّةُ'], answer: 'الْقِطَّةُ نَائِمَةٌ', translation: 'The cat is sleeping.' },
          { scrambled: ['التُّفَّاحَةَ', 'الْوَلَدُ', 'أَكَلَ'], answer: 'أَكَلَ الْوَلَدُ التُّفَّاحَةَ', translation: 'The boy ate the apple.' },
          { scrambled: ['إِلَى', 'الْأَصْدِقَاءُ', 'الْغَابَةِ', 'ذَهَبَ'], answer: 'ذَهَبَ الْأَصْدِقَاءُ إِلَى الْغَابَةِ', translation: 'The friends went to the forest.' },
          { scrambled: ['مُشْرِقَةٌ', 'الشَّمْسُ'], answer: 'الشَّمْسُ مُشْرِقَةٌ', translation: 'The sun is shining.' },
        ],
      },
      {
        type: 'reading', title: 'اقرأ — الْأَصْدِقَاءُ الثَّلَاثَةُ', icon: '📖',
        passages: [{
          title: 'The Three Friends',
          text: 'كَانَ فِي الْغَابَةِ أَرْنَبٌ وَسِنْجَابٌ وَغُرَابٌ، وَكَانُوا أَصْدِقَاءَ مُتَعَاوِنِينَ. فِي يَوْمٍ مِنَ الْأَيَّامِ، سَمِعُوا صَوْتَ خَطَرٍ قَادِمٍ. طَارَ الْغُرَابُ عَالِيًا لِيَرَى مَا يَحْدُثُ، وَرَكَضَ السِّنْجَابُ لِيُحَذِّرَ بَقِيَّةَ الْحَيَوَانَاتِ، وَحَفَرَ الْأَرْنَبُ حُفْرَةً آمِنَةً لِلْجَمِيعِ. بِفَضْلِ تَعَاوُنِهِمْ، نَجَا سُكَّانُ الْغَابَةِ كُلُّهُمْ.',
          glossary: [
            { ar: 'سِنْجَاب', en: 'squirrel' }, { ar: 'غُرَاب', en: 'crow' }, { ar: 'خَطَر', en: 'danger' },
            { ar: 'حَذَّرَ', en: 'to warn' }, { ar: 'حَفَرَ', en: 'to dig' }, { ar: 'نَجَا', en: 'to be saved' },
          ],
          questions: [
            { prompt: 'مَنْ كَانَ أَصْدِقَاءَ فِي الْغَابَةِ؟', choices: ['أَسَدٌ وَنَمِرٌ وَذِئْبٌ', 'أَرْنَبٌ وَسِنْجَابٌ وَغُرَابٌ', 'قِطَّةٌ وَكَلْبٌ وَفَأْرٌ'], correct: 1 },
            { prompt: 'مَاذَا فَعَلَ الْغُرَابُ؟', choices: ['طَارَ لِيَرَى الْخَطَرَ', 'حَفَرَ حُفْرَةً', 'نَامَ طَوِيلًا'], correct: 0 },
            { prompt: 'لِمَاذَا نَجَا سُكَّانُ الْغَابَةِ؟', choices: ['لِأَنَّهُمْ هَرَبُوا بَعِيدًا', 'بِفَضْلِ تَعَاوُنِ الْأَصْدِقَاءِ الثَّلَاثَةِ', 'لِأَنَّ الْخَطَرَ لَمْ يَأْتِ'], correct: 1 },
          ],
        }],
      },
    ],
  },

  // ═══════════════════════════ LEVEL 5 ═══════════════════════════
  {
    id: 5, icon: '📐', color: 'var(--emerald-light)',
    title: 'المستوى ٥ — أساسيات النحو', subtitle: 'Level 5 — Foundations of Naḥw (Grammar)',
    intro: "Classical Arabic grammar starts with one question: is this word an ism (noun), a fiʿl (verb), or a ḥarf (particle)? From there, this level introduces the three case-endings (marfūʿ, manṣūb, majrūr) that i'rāb is built on.",
    activities: [
      {
        type: 'flashcards', title: 'تعلّم — Ism, Fiʿl, Ḥarf', icon: '📇',
        cards: [
          { ar: 'اِسْم', name: 'Ism — Noun', words: [{ ar: 'وَلَد، بَيْت، قَلَم، سَعِيد', en: 'names a person, place, thing, or quality — can take a definite article (الـ) and tanwīn', emoji: '📛' }] },
          { ar: 'فِعْل', name: 'Fiʿl — Verb', words: [{ ar: 'كَتَبَ، يَكْتُبُ، اُكْتُبْ', en: 'an action, tied to a time — past (مَاضِي), present (مُضَارِع), or command (أَمْر)', emoji: '⚡' }] },
          { ar: 'حَرْف', name: 'Ḥarf — Particle', words: [{ ar: 'فِي، مِنْ، إِلَى، وَ، هَلْ', en: 'a small connecting word with no meaning fully on its own — never changes form', emoji: '🔗' }] },
          { ar: 'مَرْفُوع', name: 'Marfūʿ — Nominative', words: [{ ar: 'الْوَلَدُ (ــُـ / ـٌ)', en: 'the "default" case — subjects, mubtadaʾ, khabar; usually ends in ḍammah', emoji: '⬆️' }] },
          { ar: 'مَنْصُوب', name: 'Manṣūb — Accusative', words: [{ ar: 'الْوَلَدَ (ــَـ / ـً)', en: 'objects of a verb, and several other roles; usually ends in fatḥah', emoji: '➡️' }] },
          { ar: 'مَجْرُور', name: 'Majrūr — Genitive', words: [{ ar: 'بِالْوَلَدِ (ــِـ / ـٍ)', en: 'after a preposition, or the second part of an iḍāfah; usually ends in kasrah', emoji: '⬇️' }] },
        ],
      },
      {
        type: 'mcq', title: 'اختر — Ism, Fiʿl, or Ḥarf?', icon: '🎯',
        questions: [
          { prompt: 'كِتَاب', choices: ['اِسْم', 'فِعْل', 'حَرْف'], correct: 0 },
          { prompt: 'ذَهَبَ', choices: ['اِسْم', 'فِعْل', 'حَرْف'], correct: 1 },
          { prompt: 'فِي', choices: ['اِسْم', 'فِعْل', 'حَرْف'], correct: 2 },
          { prompt: 'يَكْتُبُ', choices: ['اِسْم', 'فِعْل', 'حَرْف'], correct: 1 },
          { prompt: 'مَدْرَسَة', choices: ['اِسْم', 'فِعْل', 'حَرْف'], correct: 0 },
          { prompt: 'هَلْ', choices: ['اِسْم', 'فِعْل', 'حَرْف'], correct: 2 },
          { prompt: 'مِنْ', choices: ['اِسْم', 'فِعْل', 'حَرْف'], correct: 2 },
          { prompt: 'جَلَسَ', choices: ['اِسْم', 'فِعْل', 'حَرْف'], correct: 1 },
        ],
      },
      {
        type: 'match', title: 'طابق — Match the Ending Sound to Its Case', icon: '🔗',
        pairs: [
          { left: 'الْوَلَدُ', right: 'مَرْفُوع (ḍammah)' }, { left: 'الْوَلَدَ', right: 'مَنْصُوب (fatḥah)' },
          { left: 'بِالْوَلَدِ', right: 'مَجْرُور (kasrah)' }, { left: 'مُعَلِّمٌ', right: 'مَرْفُوع (tanwīn ḍamm)' },
          { left: 'كِتَابًا', right: 'مَنْصُوب (tanwīn fatḥ)' }, { left: 'مِنْ بَيْتٍ', right: 'مَجْرُور (tanwīn kasr)' },
        ],
      },
      {
        type: 'mcq', title: 'اختر — Marfūʿ, Manṣūb, or Majrūr?', icon: '🎯',
        questions: [
          { prompt: 'الشَّمْسُ مُشْرِقَةٌ — ما إعراب "الشَّمْسُ"؟', choices: ['مَرْفُوع', 'مَنْصُوب', 'مَجْرُور'], correct: 0 },
          { prompt: 'قَرَأَ الْوَلَدُ الْكِتَابَ — ما إعراب "الْكِتَابَ"؟', choices: ['مَرْفُوع', 'مَنْصُوب', 'مَجْرُور'], correct: 1 },
          { prompt: 'ذَهَبَ إِلَى الْمَدْرَسَةِ — ما إعراب "الْمَدْرَسَةِ"؟', choices: ['مَرْفُوع', 'مَنْصُوب', 'مَجْرُور'], correct: 2 },
          { prompt: 'الْوَلَدُ مُجْتَهِدٌ — ما إعراب "مُجْتَهِدٌ" (الخبر)؟', choices: ['مَرْفُوع', 'مَنْصُوب', 'مَجْرُور'], correct: 0 },
          { prompt: 'لِمَاذَا يُجَرُّ الاسم بَعْدَ حرف الجر مِثْل "فِي" و"مِنْ"؟', choices: ['لأن حروف الجر تجعل الاسم مجرورًا دائمًا', 'لأن الاسم فاعل', 'لا يوجد سبب'], correct: 0 },
        ],
      },
    ],
  },

  // ═══════════════════════════ LEVEL 6 ═══════════════════════════
  {
    id: 6, icon: '🎓', color: 'var(--gold)',
    title: 'المستوى ٦ — الإعراب والقراءة المتقدّمة', subtitle: "Level 6 — Iʿrāb & Advanced Reading",
    intro: "The full picture: click through a real sentence, word by word, and identify each word's exact grammatical role — subject, predicate, object, and more — then read a longer passage inspired by Ibn Baṭṭūṭah's travels and answer questions that mix reading comprehension with i'rāb.",
    activities: [
      {
        type: 'flashcards', title: 'تعلّم — Common Iʿrāb Roles', icon: '📇',
        cards: [
          { ar: 'مُبْتَدَأ', name: 'Mubtadaʾ', words: [{ ar: 'الْوَلَدُ مُجْتَهِدٌ', en: 'the topic a nominal sentence opens with — always marfūʿ', emoji: '1️⃣' }] },
          { ar: 'خَبَر', name: 'Khabar', words: [{ ar: 'الْوَلَدُ مُجْتَهِدٌ', en: 'what is said about the mubtadaʾ — usually marfūʿ too', emoji: '2️⃣' }] },
          { ar: 'فَاعِل', name: 'Fāʿil (Subject)', words: [{ ar: 'كَتَبَ الْوَلَدُ', en: 'who/what did the verb\'s action — always marfūʿ', emoji: '🏃' }] },
          { ar: 'مَفْعُول بِهِ', name: 'Mafʿūl Bihi (Object)', words: [{ ar: 'كَتَبَ الْوَلَدُ الدَّرْسَ', en: 'who/what received the verb\'s action — always manṣūb', emoji: '🎯' }] },
          { ar: 'اسم إِنَّ / خَبَر إِنَّ', name: 'After ʾinna', words: [{ ar: 'إِنَّ الْوَلَدَ مُجْتَهِدٌ', en: 'ʾinna makes its noun manṣūb (اسْمهَا) but its khabar stays marfūʿ (خبرهَا)', emoji: '❗' }] },
          { ar: 'مُضَاف إِلَيْه', name: 'Muḍāf Ilayhi', words: [{ ar: 'كِتَابُ الْوَلَدِ', en: 'the second noun in an iḍāfah ("possession") pair — always majrūr', emoji: '🔗' }] },
        ],
      },
      {
        type: 'parse', title: 'أَعْرِب — Click Each Word, Choose Its Role', icon: '🔍',
        sentences: [
          {
            words: [
              { text: 'الْوَلَدُ', role: 'مبتدأ (marfūʿ — the topic)' },
              { text: 'مُجْتَهِدٌ', role: 'خبر (marfūʿ — what is said about it)' },
            ],
            translation: '"The boy is diligent." — a simple nominal sentence.',
          },
          {
            words: [
              { text: 'قَرَأَ', role: 'فعل ماضٍ (past-tense verb)' },
              { text: 'الْوَلَدُ', role: 'فاعل (marfūʿ — who did the reading)' },
              { text: 'الْكِتَابَ', role: 'مفعول به (manṣūb — what was read)' },
            ],
            translation: '"The boy read the book." — a verbal sentence with a subject and an object.',
          },
          {
            words: [
              { text: 'إِنَّ', role: 'حرف ناسخ (a particle that changes the case of what follows)' },
              { text: 'الْوَلَدَ', role: 'اسم إنّ (manṣūb — ʾinna makes this word manṣūb)' },
              { text: 'مُجْتَهِدٌ', role: 'خبر إنّ (marfūʿ — the khabar stays marfūʿ)' },
            ],
            translation: '"Indeed the boy is diligent." — ʾinna adds emphasis and changes the mubtadaʾ\'s case.',
          },
          {
            words: [
              { text: 'ذَهَبَ', role: 'فعل ماضٍ (past-tense verb)' },
              { text: 'الرَّحَّالَةُ', role: 'فاعل (marfūʿ — the traveler, who went)' },
              { text: 'إِلَى', role: 'حرف جر (preposition — makes the next word majrūr)' },
              { text: 'مَكَّةَ', role: 'مجرور بحرف الجر (majrūr — after "إلى")' },
            ],
            translation: '"The traveler went to Makkah."',
          },
        ],
      },
      {
        type: 'reading', title: 'اقرأ — رِحْلَةُ ابْنِ بَطُّوطَةَ', icon: '📖',
        passages: [{
          title: "The Journey of Ibn Baṭṭūṭah",
          text: 'كَانَ ابْنُ بَطُّوطَةَ رَحَّالَةً مَشْهُورًا، وُلِدَ فِي مَدِينَةِ طَنْجَةَ. فِي شَبَابِهِ، قَرَّرَ أَنْ يُسَافِرَ إِلَى مَكَّةَ الْمُكَرَّمَةِ لِأَدَاءِ فَرِيضَةِ الْحَجِّ. لَكِنَّ رِحْلَتَهُ لَمْ تَتَوَقَّفْ هُنَاكَ، بَلِ اسْتَمَرَّتْ سَنَوَاتٍ طَوِيلَةً، فَزَارَ الْهِنْدَ وَالصِّينَ وَبِلَادَ إِفْرِيقِيَا. كَانَ يَكْتُبُ عَنْ كُلِّ مَدِينَةٍ يَزُورُهَا: عَادَاتِ أَهْلِهَا، وَأَسْوَاقِهَا، وَمَسَاجِدِهَا. لِهَذَا يُعْتَبَرُ ابْنُ بَطُّوطَةَ مِنْ أَعْظَمِ الرَّحَّالَةِ فِي التَّارِيخِ.',
          glossary: [
            { ar: 'رَحَّالَة', en: 'traveler / explorer' }, { ar: 'فَرِيضَة', en: 'religious obligation' },
            { ar: 'اِسْتَمَرَّتْ', en: 'it continued' }, { ar: 'عَادَات', en: 'customs' }, { ar: 'أَسْوَاق', en: 'markets' },
          ],
          questions: [
            { prompt: 'أَيْنَ وُلِدَ ابْنُ بَطُّوطَةَ؟', choices: ['فِي مَكَّةَ', 'فِي طَنْجَةَ', 'فِي الْهِنْدِ'], correct: 1 },
            { prompt: 'لِمَاذَا سَافَرَ ابْنُ بَطُّوطَةَ أَوَّلًا؟', choices: ['لِلتِّجَارَةِ', 'لِأَدَاءِ فَرِيضَةِ الْحَجِّ', 'لِلدِّرَاسَةِ'], correct: 1 },
            { prompt: 'مَا إعراب كلمة "رَحَّالَةً" فِي "كَانَ ابْنُ بَطُّوطَةَ رَحَّالَةً مَشْهُورًا"؟', choices: ['خبر كان (منصوب)', 'فاعل (مرفوع)', 'مفعول به'], correct: 0 },
            { prompt: 'أَيَّ بِلَادٍ زَارَ ابْنُ بَطُّوطَةَ غَيْرَ مَكَّةَ؟', choices: ['أوروبا وأمريكا', 'الهند والصين وإفريقيا', 'أستراليا فقط'], correct: 1 },
          ],
        }],
      },
      {
        type: 'mcq', title: 'مراجعة شاملة — Mixed Final Review', icon: '🏆',
        questions: [
          { prompt: 'مَا الْفَرْقُ بَيْنَ الجملة الاسمية والفعلية؟', choices: ['لا فرق بينهما', 'الاسمية تبدأ باسم، والفعلية تبدأ بفعل', 'الفعلية أقصر دائمًا'], correct: 1 },
          { prompt: 'فِي "قَرَأَ الْوَلَدُ الْكِتَابَ" ما إعراب "الْوَلَدُ"؟', choices: ['فاعل مرفوع', 'مفعول به منصوب', 'مضاف إليه مجرور'], correct: 0 },
          { prompt: 'أَيّ كلمة هي "حرف" وليست اسمًا ولا فعلًا؟', choices: ['كِتَاب', 'ذَهَبَ', 'إِلَى'], correct: 2 },
          { prompt: 'مَا عَلامَة الرَّفْع الأصلية؟', choices: ['الفتحة', 'الضمة', 'الكسرة'], correct: 1 },
          { prompt: 'فِي "كِتَابُ الْوَلَدِ" ما إعراب "الْوَلَدِ"؟', choices: ['مضاف إليه مجرور', 'فاعل مرفوع', 'خبر'], correct: 0 },
          { prompt: 'إِنَّ الْوَلَدَ مُجْتَهِدٌ — ما إعراب "الْوَلَدَ"؟', choices: ['اسم إنّ منصوب', 'خبر إنّ مرفوع', 'فاعل'], correct: 0 },
        ],
      },
    ],
  },
];
