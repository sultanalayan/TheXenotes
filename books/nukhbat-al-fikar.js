/* XENOS NOTES — book module
 * To add a new book: copy this file's shape, fill in the metadata + sections, save
 * it as books/<your-slug>.js, then add one <script> line in index.html. That's it —
 * the shared engine (app.js) handles rendering, navigation, search, and styling. */
XenosBooks.register({
  slug: 'nukhbat-al-fikar',
  title: 'Nukhbat al-Fikar of Ibn Ḥajar',
  subtitle: 'The Choice Thought Concerning the Terminology of the People of Ḥadīth',
  icon: '🕌',
  category: 'Ilm al-Ḥadīth',
  arabicBg: 'نخبة الفكر',
  tags: ['Muṣṭalaḥ al-Ḥadīth', 'Isnād', 'Ṣaḥīḥ', 'Ḍaʿīf', 'Narrators', 'Terminology'],
  footer: 'Al-Ḥāfiẓ Ibn Ḥajar al-ʿAsqalānī (773–852H) · with reference to Tuḥfat al-Durar',

  sections: [
    {
      id: 'intro', icon: '📖', label: 'About the Book', subtitle: "Ibn Ḥajar's Nukhbat al-Fikar", color: 'var(--burgundy)',
      intro: 'Nukhbat al-Fikar fī Muṣṭalaḥ Ahl al-Athar — "The Choice Thought Concerning the Terminology of the People of Ḥadīth" — is a short, dense primer on ḥadīth terminology written by Al-Ḥāfiẓ Ibn Ḥajar al-ʿAsqalānī (773–852H). Despite its brevity, it became one of the most widely studied introductions to the science of ḥadīth criticism, precisely because it compresses the entire discipline into a tight, logically ordered structure.',
      bullets: [
        { label: 'Full Arabic Title', text: 'نُخْبَةُ الْفِكَرِ فِي مُصْطَلَحِ أَهْلِ الْأَثَرِ — "The Choice Thought Concerning the Terminology of the People of Ḥadīth (Athar)"' },
        { label: 'The Author', text: "Al-Ḥāfiẓ Aḥmad ibn ʿAlī ibn Ḥajar al-ʿAsqalānī (773–852 AH), also the author of Fatḥ al-Bārī and Tahdhīb al-Tahdhīb" },
        { label: 'Why He Wrote It (p.18)', text: 'Many books already existed on Uṣūl al-Ḥadīth — some too detailed, some too brief. Some of his companions asked him to summarize the most important aspects, and he obliged.' },
        { label: "The Author's Own Commentary", text: 'Ibn Ḥajar himself later wrote Nuzhat al-Naẓar fī Tawḍīḥ Nukhbat al-Fikar, explaining his own terse text — considered essential for understanding the matn properly' },
      ],
      qanda: [
        { q: 'Who wrote Nukhbat al-Fikar, and roughly when?', a: 'Al-Ḥāfiẓ Aḥmad ibn ʿAlī ibn Ḥajar al-ʿAsqalānī, who lived from 773 to 852 AH (roughly the 8th–9th century AH / 14th–15th century CE).' },
        { q: 'What does the title of the book actually mean?', a: '"The Choice Thought Concerning the Terminology of the People of Ḥadīth (Athar)." It is a deliberately concise handbook of the technical vocabulary used to classify and evaluate ḥadīth.' },
        { q: 'Why did Ibn Ḥajar write this book given how many others already existed on the topic?', a: 'In his own introduction (p.18) he explains that existing works on Uṣūl al-Ḥadīth were either too detailed or too brief, and some of his companions asked him to compile a booklet summarizing the important aspects — so he did, hoping to be counted among the servants of ḥadīth.' },
        { q: "What is Nuzhat al-Naẓar, and why does it matter for studying this text?", a: "It is Ibn Ḥajar's own commentary explaining his own terse matn (Nukhbat al-Fikar). Because the original text is so compressed, his own explanation is usually studied alongside it rather than the bare matn alone." },
      ],
      quiz: [
        { q: 'In what century (AH) did Ibn Ḥajar al-ʿAsqalānī live?', choices: ['2nd century AH', '10th century AH', '8th–9th century AH (773–852H)', '5th century AH'], correct: 2, explain: 'He was born in 773H and died in 852H.' },
        { q: 'What prompted Ibn Ḥajar to write Nukhbat al-Fikar?', choices: ['A commission from a ruler', "A request from companions to summarize the subject in a concise booklet", 'A translation project of an older text', 'A refutation of a rival scholar'], correct: 1 },
        { q: "What is the name of Ibn Ḥajar's own commentary on this text?", choices: ['Fatḥ al-Bārī', 'Tahdhīb al-Tahdhīb', 'Al-Iṣābah', 'Nuzhat al-Naẓar fī Tawḍīḥ Nukhbat al-Fikar'], correct: 3, explain: 'Fatḥ al-Bārī (a Ṣaḥīḥ al-Bukhārī commentary) and Tahdhīb al-Tahdhīb / Al-Iṣābah (biographical dictionaries) are other famous works by Ibn Ḥajar, but on different subjects.' },
        { q: 'What is the full Arabic title of this book referring to?', choices: ['The Complete Guide to Qur\'anic Recitation', 'The Path of the Prophetic Sunnah', 'The Choice Thought Concerning the Terminology of the People of Ḥadīth (Athar)', 'The Book of Certainty in Belief'], correct: 2 },
        { q: 'What does Ibn Ḥajar say existing works on Uṣūl al-Ḥadīth suffered from, prompting this book?', choices: ['They were written in a foreign language', 'They contradicted the Qur\'an directly', 'They were either too detailed or too brief', 'They had all been lost by his time'], correct: 2 },
        { q: 'Why is Ibn Ḥajar\'s own commentary usually studied alongside the bare matn of Nukhbat al-Fikar?', choices: ['Because the matn was lost and only the commentary survives', 'Because the original text is considered unreliable without it', 'Because the original text is so compressed that it needs his own explanation', 'Because scholars consider the commentary more authoritative than the matn'], correct: 2 },
      ]
    },
    {
      id: 'khabar-types', icon: '🔢', label: 'Classifying by Number of Chains', subtitle: 'Mutawātir, Mashhūr, ʿAzīz, Gharīb, Āḥād', color: 'var(--emerald)',
      intro: 'The first way a Khabar (report/ḥadīth) is classified is simply by how many independent chains (ṭuruq) carry it — unlimited chains (Mutawātir), or a limited, countable number (Āḥād, which further splits into Mashhūr, ʿAzīz, and Gharīb).',
      bullets: [
        { label: 'المتواتر (Al-Mutawātir)', text: 'Narrated by so many independent narrators in every generation that collaborating on a lie becomes impossible → gives Ilm al-Yaqīnī al-Badīhī (certain, self-evident knowledge). No need to verify (Taḥqīq) its narrators at all.' },
        { label: 'المشهور / المستفيض (Al-Mashhūr / Al-Mustafīḍ) — p.23', text: 'More than two chains in every generation, but below Mutawātir level. Most scholars treat Mashhūr and Mustafīḍ as synonyms.' },
        { label: "العزيز (Al-ʿAzīz) — p.23-24", text: 'Never fewer than TWO narrators in any single generation of the chain. This is NOT a condition for a ḥadīth to be Ṣaḥīḥ.' },
        { label: 'الغريب (Al-Gharīb) — p.24', text: 'Only ONE narrator in some generation. Absolute Gharīb = alone from the Companion level; Relative Gharīb = alone only later in the chain.' },
        { label: 'الآحاد (Al-Āḥād) — p.24-26', text: 'Everything that is not Mutawātir (i.e. Mashhūr + ʿAzīz + Gharīb, all together). Gives Ẓann (probability) by itself — but can reach certainty with supporting evidence (Qarāʾin).' },
      ],
      qanda: [
        { q: 'What makes a ḥadīth Mutawātir, and what level of certainty does it give?', a: "It's narrated by such a large number of independent narrators in every generation of its chain that their collaborating on a lie is inconceivable. It gives Ilm al-Yaqīnī al-Badīhī — certain, self-evident knowledge, the same category as knowing the sun rises. Because of this, its narrators don't even need to be individually verified." },
        { q: "What's the difference between Mashhūr and ʿAzīz?", a: 'Mashhūr requires MORE than two chains in every generation. ʿAzīz requires a MINIMUM of two chains in every generation — never dropping below that. Both are below Mutawātir and above Gharīb in chain-count.' },
        { q: 'What are the two types of Gharīb, and how do they differ?', a: 'Gharīb Muṭlaq (Absolute): the narrator is alone from the very beginning of the chain, at the level of the Companion. Gharīb Nisbī (Relative): the solitary narration only occurs later in the chain, not at the earliest level.' },
        { q: 'Does a ḥadīth need to be Mutawātir — or even ʿAzīz — to be authentic (Ṣaḥīḥ)?', a: 'No. Chain-count and authenticity are separate questions. A Gharīb ḥadīth (only one narrator in some generation) can still be perfectly Ṣaḥīḥ — authenticity depends on the reliability of the narrators, not how many chains carry the report.' },
      ],
      quiz: [
        { q: 'A ḥadīth narrated by only ONE person in some generation of its chain is called:', choices: ['Al-ʿAzīz', 'Al-Gharīb', 'Al-Mashhūr', 'Al-Mutawātir'], correct: 1 },
        { q: 'What kind of knowledge does a Mutawātir ḥadīth give?', choices: ['Only probability (Ẓann)', 'No benefit whatsoever', 'Knowledge only after individually checking every narrator', 'Certain, self-evident knowledge (Ilm al-Yaqīnī al-Badīhī)'], correct: 3 },
        { q: 'Al-ʿAzīz requires a minimum of how many narrators in every generation?', choices: ['One', 'Two', 'Three', 'Ten'], correct: 1 },
        { q: 'True or false: a ḥadīth must be classified as ʿAzīz (at least) to be considered Ṣaḥīḥ.', choices: ['True — every Ṣaḥīḥ ḥadīth must have at least two chains', 'False — chain-count and authenticity are separate; even a Gharīb can be Ṣaḥīḥ'], correct: 1 },
        { q: 'What is the difference between Mashhūr and ʿAzīz, per this section?', choices: ['They are exact synonyms with no difference at all', 'Mashhūr applies only to the Companion generation', 'Mashhūr requires more than two chains per generation; ʿAzīz requires a minimum of exactly two', 'ʿAzīz requires more chains than Mashhūr'], correct: 2 },
        { q: 'What distinguishes Gharīb Muṭlaq (Absolute) from Gharīb Nisbī (Relative)?', choices: ['Absolute Gharīb means alone from the Companion level; Relative Gharīb means alone only later in the chain', 'Absolute Gharīb is always weak; Relative Gharīb is always Ṣaḥīḥ', 'There is no real distinction between the two', 'Absolute Gharīb applies only to Mutawātir reports'], correct: 0 },
      ]
    },
    {
      id: 'maqbul', icon: '✅', label: 'Al-Maqbūl — The Accepted Ḥadīth', subtitle: 'Ṣaḥīḥ and Ḥasan, li-Dhātihi and li-Ghayrihi', color: 'var(--burgundy-light)',
      intro: 'A Maqbūl (accepted) Āḥād ḥadīth comes in four grades, all built on the same five underlying conditions of authenticity — the grade just depends on how fully those conditions are met, and whether outside support (multiple chains) is needed to make up for a shortfall.',
      bullets: [
        { label: 'The Five Conditions (p.29)', text: "1) 'Ādil narrator (upright) 2) Tāmm al-Ḍabṭ (perfect memory) 3) Muttaṣil chain (unbroken) 4) free of hidden defect ('Illah Khafiyyah) 5) not Shādh (doesn't contradict someone more reliable)" },
        { label: "العادل (Al-ʿĀdil) Defined — p.30", text: 'A person who abstains from major sins and unbecoming public conduct (e.g. shouting in public, keeping low company).' },
        { label: 'الضبط (Al-Ḍabṭ) — Two Types (p.30)', text: "Ḍabṭ al-Ṣadr: perfect recall from memory, no delay or confusion.\nḌabṭ al-Kitābah: perfect, error-free written preservation." },
        { label: 'حسن لذاته (Ḥasan li-Dhātihi) — p.32', text: 'Same as Ṣaḥīḥ li-Dhātihi but with weaker Ḍabṭ — 4 of the 5 conditions are met.' },
        { label: 'The li-Ghayrihi Upgrades (p.32-33)', text: "Ṣaḥīḥ li-Ghayrihi: a Ḥasan li-Dhātihi elevated to Ṣaḥīḥ by multiple supporting chains.\nḤasan li-Ghayrihi: a weak (Ḍaʿīf) narration elevated to Ḥasan by multiple supporting chains." },
        { label: 'Four Forms of Ḥasan li-Ghayrihi (Tuḥfat al-Durar, p.68)', text: "1) A weak-memory (Sūʾ al-Ḥifẓ) narrator's Ḥadīth, where a Mutābiʿ of equal or higher rank is found.\n2) A Mastūr narrator's Ḥadīth, where a reliable (Muʿtabar) Mutābiʿ is found.\n3) A Mursal chain, where a Mutābiʿ is found.\n4) A chain containing Tadlīs, where a Mutābiʿ is found.\nIn each case the individual weakness is real, but the combined weight of the corroborating chains (Majmūʿ) raises the ḥadīth to Ḥasan — never to Ṣaḥīḥ, since the underlying defect in any single chain never fully disappears." },
      ],
      qanda: [
        { q: 'What are the five conditions for a ḥadīth to be Ṣaḥīḥ li-Dhātihi?', a: "(1) The narrator must be 'Ādil (upright). (2) He must have Tāmm al-Ḍabṭ (perfect memory). (3) The chain (Sanad) must be Muttaṣil (unbroken). (4) It must be free of any hidden defect ('Illah Khafiyyah). (5) It must not be Shādh (contradicting a more reliable narrator)." },
        { q: "What's the difference between Ṣaḥīḥ li-Dhātihi and Ḥasan li-Dhātihi?", a: 'They share the same five conditions, except Ḥasan li-Dhātihi has a narrator whose Ḍabṭ (memory) is weaker than perfect — 4 of the 5 conditions are fully met, the fifth is only partial.' },
        { q: 'How can a Ḥasan ḥadīth become Ṣaḥīḥ li-Ghayrihi?', a: 'If the same Ḥasan li-Dhātihi ḥadīth is also narrated through several independent chains (Ṭuruq), those multiple chains make up for the individual weakness in memory, and the ḥadīth is upgraded to Ṣaḥīḥ li-Ghayrihi — "Ṣaḥīḥ on account of something else."' },
        { q: 'Are all Ṣaḥīḥ li-Dhātihi aḥādīth equal in strength?', a: 'No (p.31) — their rank varies with the qualities of their narrators. The order given is: (1) narrated in Bukhārī, (2) narrated in Muslim, (3) meeting the conditions of both, (4) meeting the conditions of Bukhārī alone, (5) meeting the conditions of Muslim alone.' },
        { q: 'What are the four specific situations (p.68) in which a Mutābiʿ elevates a weak narration to Ḥasan li-Ghayrihi rather than leaving it Ḍaʿīf?', a: "(1) The narrator has weak memory (Sūʾ al-Ḥifẓ) but an equal-or-higher-ranked Mutābiʿ is found; (2) the narrator is Mastūr (unverified status) but a reliable Mutābiʿ is found; (3) the chain is Mursal but a Mutābiʿ is found; (4) the chain contains Tadlīs but a Mutābiʿ is found. In every case it is the collective weight of multiple routes (Majmūʿ), not the individual chain, that earns the Ḥasan grade." },
      ],
      quiz: [
        { q: 'Which of these is NOT one of the five conditions of Ṣaḥīḥ li-Dhātihi?', choices: ["The narrator must be 'Ādil", 'The ḥadīth must be Mutawātir', 'The chain must be Muttaṣil', 'The narrator must have perfect Ḍabṭ'], correct: 1 },
        { q: 'A ḥadīth meeting 4 of the 5 conditions of Ṣaḥīḥ, missing only perfect Ḍabṭ, is called:', choices: ['Ṣaḥīḥ li-Ghayrihi', 'Ḍaʿīf', 'Mawḍūʿ', 'Ḥasan li-Dhātihi'], correct: 3 },
        { q: 'What elevates a weak (Ḍaʿīf) narration to Ḥasan li-Ghayrihi?', choices: ['A scholar simply declaring it acceptable by personal preference', 'Multiple supporting chains making up for the individual weakness', 'Being narrated by Bukhārī specifically', 'Its content matching the Qurʾān directly'], correct: 1 },
        { q: 'How does the text define al-ʿĀdil (the upright narrator)?', choices: ['One who has memorized the entire Qur\'an', 'One who is a recognized scholar of fiqh', 'One who abstains from major sins and unbecoming public conduct', 'One who has performed Ḥajj at least once'], correct: 2 },
        { q: 'What are the two types of Ḍabṭ (precision) described in this section?', choices: ['Ḍabṭ al-Ṣadr (memory) and Ḍabṭ al-Kitābah (written preservation)', 'Ḍabṭ al-Qawl and Ḍabṭ al-Fiʿl', 'Ḍabṭ al-Sanad and Ḍabṭ al-Matn', 'There is only one type of Ḍabṭ'], correct: 0 },
        { q: 'According to this section, what is the highest-ranked category among all Ṣaḥīḥ li-Dhātihi aḥādīth?', choices: ['Those meeting only the conditions of Muslim alone', 'All Ṣaḥīḥ aḥādīth are equal in rank', 'Those narrated in Ṣaḥīḥ al-Bukhārī', 'Those meeting only the conditions of Bukhārī alone'], correct: 2 },
      ]
    },
    {
      id: 'ziyadah', icon: '➕', label: 'الزيادة (Al-Ziyādah) — Additions & Corroboration', subtitle: 'Ziyādah, Mutābaʿah, Shāhid, Iʿtibār', color: 'var(--emerald-light)',
      intro: 'This section covers two related tools: how scholars judge an EXTRA piece of information added by one narrator that others omit (Ziyādah), and how narrations SUPPORT one another through corroborating chains and similar wording (Mutābaʿah / Shāhid), gathered through a process called Iʿtibār.',
      bullets: [
        { label: 'الزيادة (Al-Ziyādah) — The Basic Rule (p.34)', text: "A reliable narrator's addition is accepted so long as no more reliable (Awthaq) narrator contradicts it." },
        { label: 'Five Resulting Labels (p.35)', text: 'مقبول (Maqbūl — accepted addition) · محفوظ (Maḥfūẓ — the preferred version when two Thiqāt contradict) · شاذ (Shādh — the weaker of the two) · معروف (Maʿrūf — the reliable version when a Thiqah opposes a Ḍaʿīf) · منكر (Munkar — the Ḍaʿīf version in that case)' },
        { label: 'المتابعة (Al-Mutābaʿah) — p.36', text: "A second narrator corroborates a chain that looked like a solitary (Fard Nisbī) narration. The corroborator is the Mutābiʿ." },
        { label: 'الشاهد (Al-Shāhid) — p.36', text: 'A second, independently-chained ḥadīth whose TEXT (Matn) is similar in wording or meaning to the solitary narration — supporting its content rather than its exact chain.' },
        { label: 'الاعتبار (Al-Iʿtibār) — p.36', text: 'The deliberate practice of searching out Mutābiʿs and Shawāhid for a ḥadīth that looks Gharīb, to see whether it is genuinely supported elsewhere.' },
      ],
      qanda: [
        { q: 'What happens when two reliable (Thiqah) narrators contradict each other?', a: "The preferred, stronger version is called Maḥfūẓ; the weaker, rejected version is called Shādh. (If it's a Ḍaʿīf narrator contradicting a Thiqah instead, the labels become Maʿrūf and Munkar respectively.)" },
        { q: "What's the difference between Mutābaʿah and Shāhid?", a: 'Mutābaʿah is when a second narrator corroborates the same chain (Sanad) of a solitary narration. Shāhid is when a second, independently-chained ḥadīth has a similar text (Matn) — supporting the content, not the exact same chain.' },
        { q: 'What is Iʿtibār, and why do scholars do it?', a: 'It is the process of actively searching out Mutābiʿs and Shawāhid for a ḥadīth that appears to be Gharīb (solitary), to determine whether it is actually supported by other independent narrations.' },
        { q: 'What five classifications can result from evaluating an addition (Ziyādah)?', a: 'Maqbūl, Maḥfūẓ, Shādh, Maʿrūf, and Munkar — depending on whether the adding narrator is contradicted, and by whom.' },
      ],
      quiz: [
        { q: "When a Thiqah narrator's version is preferred over another Thiqah's contradicting version, the preferred one is called:", choices: ['Al-Shādh', 'Al-Munkar', "Al-Maʿrūf", 'Al-Maḥfūẓ'], correct: 3 },
        { q: 'A Mutābiʿ is:', choices: ["A narrator who corroborates only the MEANING of a hadith's text", "A narrator who corroborates another narrator's chain (Sanad)", 'A narrator who contradicts reliable narrators', 'A narrator known to lie'], correct: 1 },
        { q: 'What is the purpose of Iʿtibār?', choices: ['To memorize a ḥadīth perfectly from a single reading', 'To translate a ḥadīth into another language', 'To search out corroborating chains and supporting narrations for an apparently solitary ḥadīth', 'To determine whether a ḥadīth is Mutawātir specifically'], correct: 2 },
        { q: 'What is the difference between Maḥfūẓ/Shādh and Maʿrūf/Munkar, per this section?', choices: ['They are simply four synonyms for the same concept', 'Maḥfūẓ/Shādh only apply to chains, never to text', 'Maḥfūẓ/Shādh apply when two Thiqāt contradict; Maʿrūf/Munkar apply when a Thiqah opposes a Ḍaʿīf', 'Maʿrūf/Munkar apply only to Mutawātir reports'], correct: 2 },
        { q: 'What is a Shāhid, as distinguished from a Mutābiʿ?', choices: ['A second, independently-chained ḥadīth whose text is similar in wording or meaning, supporting content rather than chain', 'A narrator who corroborates the exact same chain', 'A narrator known to fabricate ḥadīth', 'A narrator who died before reaching adulthood'], correct: 0 },
        { q: 'What is the basic rule this section gives for accepting a reliable narrator\'s addition (Ziyādah)?', choices: ['It is accepted so long as no more reliable narrator contradicts it', 'It is always rejected regardless of reliability', 'It is accepted only if it appears in Ṣaḥīḥ al-Bukhārī', 'It is accepted only if multiple narrators add the identical wording'], correct: 0 },
      ]
    },
    {
      id: 'taarud', icon: '⚖️', label: 'Maqbūl Ḥadīth & Contradiction', subtitle: 'Muḥkam, Nāsikh-Mansūkh, Tarjīḥ, Tawaqquf', color: 'var(--grey-accent)',
      intro: "Even among accepted (Maqbūl) ḥadīth, two authentic reports can appear to contradict each other. This section is Ibn Ḥajar's roadmap for resolving that: reconcile if possible, abrogate if one is provably later, prefer the stronger if neither works, or — as a last resort — withhold judgment.",
      bullets: [
        { label: 'المحكم (Al-Muḥkam) — p.37', text: 'An accepted ḥadīth completely free of contradiction — acted upon directly, no further work needed.' },
        { label: 'مختلف الحديث (Mukhtalif al-Ḥadīth)', text: 'Two contradictory-but-equal ḥadīth that CAN be reconciled (Jamʿ) — both are acted upon once reconciled.' },
        { label: 'الناسخ / المنسوخ (Nāsikh / Mansūkh)', text: 'When reconciliation is impossible but one ḥadīth is proven to be chronologically later, it abrogates (Nāsikh) the earlier one (Mansūkh).' },
        { label: 'الراجح / المرجوح (Rājiḥ / Marjūḥ) — Tarjīḥ', text: "If neither reconciliation nor abrogation works, scholars give preference (Tarjīḥ) to the stronger report (Rājiḥ); the other becomes Marjūḥ." },
        { label: 'التوقف (Al-Tawaqquf)', text: 'If none of Jamʿ, Naskh, or Tarjīḥ is possible, scholars withhold judgment entirely — no verdict is passed until later clarity emerges.' },
      ],
      qanda: [
        { q: 'What are the seven outcomes Ibn Ḥajar describes for a Maqbūl ḥadīth regarding possible contradiction?', a: '(1) Muḥkam — no contradiction. (2) Mukhtalif al-Ḥadīth — reconcilable contradiction. (3) Nāsikh — the abrogating, later ruling. (4) Mansūkh — the abrogated, earlier ruling. (5) Rājiḥ — the preferred of two unreconcilable ḥadīth. (6) Marjūḥ — the less preferred one. (7) Mutawaqqaf fīh — where no resolution is possible and no verdict is passed.' },
        { q: "What's the difference between Mukhtalif al-Ḥadīth and Nāsikh/Mansūkh?", a: 'Mukhtalif al-Ḥadīth means both contradictory ḥadīth can still be acted upon together once properly reconciled (Jamʿ) — neither is discarded. Nāsikh/Mansūkh means reconciliation was NOT possible, so the later-established ruling (Nāsikh) fully replaces the earlier one (Mansūkh), which is no longer acted upon.' },
        { q: 'When do scholars resort to Tawaqquf (suspension of judgment)?', a: 'Only when reconciliation (Jamʿ), abrogation (Naskh), and preference (Tarjīḥ) are all impossible — i.e., there is no way to determine which of two contradicting, equally-weighted ḥadīth should be acted upon.' },
        { q: 'What does Taʿāruḍ (contradiction) mean in this context, and why does it matter?', a: "It's when two pieces of evidence conflict such that acting on one necessarily excludes acting on the other. It matters because Islamic scholarship needs a rigorous, ordered method for resolving such conflicts rather than arbitrarily picking a side." },
      ],
      quiz: [
        { q: 'Two authentic ḥadīth that appear to contradict but CAN both be acted upon through reconciliation are called:', choices: ['Nāsikh and Mansūkh', 'Mukhtalif al-Ḥadīth', 'Musalsal', 'Muḥkam'], correct: 1 },
        { q: 'The abrogated (no-longer-applicable) ḥadīth in a Nāsikh/Mansūkh pair is called:', choices: ['Al-Nāsikh', 'Al-Rājiḥ', 'Al-Marjūḥ', 'Al-Mansūkh'], correct: 3 },
        { q: 'If reconciliation and abrogation are both impossible and neither ḥadīth is clearly stronger, scholars:', choices: ['Automatically reject both ḥadīth outright', 'Withhold judgment (Tawaqquf)', 'Declare both fabricated regardless of chain', 'Automatically accept both without further thought'], correct: 1 },
        { q: 'What does Al-Muḥkam refer to, as the first of the seven possible outcomes?', choices: ['A ḥadīth with an unresolvable conflict', 'A ḥadīth suspended pending further clarity', 'An accepted ḥadīth completely free of contradiction, acted upon directly', 'A ḥadīth requiring Tarjīḥ between two versions'], correct: 2 },
        { q: 'What is Tarjīḥ, as the third possible resolution when Jamʿ and Naskh both fail?', choices: ['Giving preference to the stronger of two reports (Rājiḥ), with the other becoming Marjūḥ', 'Automatically discarding both conflicting reports', 'Declaring both reports equally authoritative forever', 'Waiting indefinitely with no resolution attempted'], correct: 0 },
        { q: 'What condition must be met for one ḥadīth to abrogate (Nāsikh) another, according to this section?', choices: ['It must simply be narrated by a more famous Companion', 'It must have more chains of transmission', 'It must be proven chronologically later than the other', 'It must appear in Ṣaḥīḥ al-Bukhārī specifically'], correct: 2 },
      ]
    },
    {
      id: 'saqt', icon: '❌', label: 'Rejection Through Omission', subtitle: "Muʿallaq, Mursal, Muʿḍal, Munqaṭiʿ, Mudallas", color: 'var(--burgundy)',
      intro: 'A Mardūd (rejected) ḥadīth results from either Saqṭ (a dropped/omitted narrator) or Ṭaʿn (a criticized narrator). This covers Saqṭ — both the obvious, visible kind and the hidden kind that takes real expertise to detect.',
      bullets: [
        { label: 'Two Causes of Radd (p.40)', text: 'سقط (Saqṭ) — omission, a narrator missing from the chain.\nطعن (Ṭaʿn) — criticism, a flaw discovered in a narrator himself.' },
        { label: 'المعلق (Al-Muʿallaq) — p.40', text: 'The beginning of the chain (closest to the author/compiler) is dropped entirely — the author just says "the Prophet ﷺ said..."' },
        { label: 'المرسل (Al-Mursal) — p.41', text: "The Ṣaḥābī is dropped — a Tābiʿī attributes something directly to the Prophet ﷺ without the Companion in between." },
        { label: 'المعضل vs المنقطع (Muʿḍal vs Munqaṭiʿ) — p.42', text: 'Muʿḍal: TWO or more narrators dropped consecutively from the middle.\nMunqaṭiʿ: only ONE dropped from the middle, or more than one but NOT consecutively.' },
        { label: 'Hidden Omission (p.42-47)', text: "المدلس (Mudallas): uses ambiguous wording (like \"ʿan\") implying a meeting that never actually happened.\nالمرسل الخفي (Mursal Khafī): narrating from a contemporary the narrator never actually met at all." },
      ],
      qanda: [
        { q: 'What are the two main causes of a ḥadīth being rejected (Mardūd)?', a: 'Saqṭ (Omission) — a narrator is missing from the chain — and Ṭaʿn (Criticism) — a flaw or weakness is found in one of the narrators themselves.' },
        { q: 'How does a Muʿallaq ḥadīth differ from a Mursal ḥadīth?', a: 'Muʿallaq drops the BEGINNING of the chain — the part closest to the compiler/author. Mursal drops the END of the chain — specifically, the Ṣaḥābī is missing, so a Tābiʿī reports directly from the Prophet ﷺ.' },
        { q: "What's the difference between Muʿḍal and Munqaṭiʿ?", a: 'Muʿḍal is when TWO OR MORE consecutive narrators are missing from the middle of the chain. Munqaṭiʿ is when only ONE narrator is missing from the middle, or more than one but not consecutively.' },
        { q: 'What is Tadlīs, and why is it "hidden" rather than an obvious omission?', a: "Tadlīs is when a narrator uses wording (like \"ʿan\" — from) that implies he met and heard directly from someone, when he actually did not. Unlike an openly acknowledged gap, this looks like a complete, connected chain on the surface — the break is only discovered through careful cross-checking, which is why it's classified as hidden (Khafī) rather than apparent (Wāḍiḥ) omission." },
      ],
      quiz: [
        { q: "When a Tābiʿī narrates directly from the Prophet ﷺ without mentioning the Ṣaḥābī in between, the ḥadīth is called:", choices: ['Muʿallaq', 'Muʿḍal', 'Munqaṭiʿ', 'Mursal'], correct: 3 },
        { q: 'A ḥadīth missing TWO OR MORE consecutive narrators from the middle of its chain is:', choices: ['Munqaṭiʿ', 'Muʿḍal', 'Muʿallaq', 'Mursal'], correct: 1 },
        { q: 'What distinguishes Tadlīs from an openly-acknowledged Inqiṭāʿ (disconnection)?', choices: ['The narrator openly admits he never met the person', 'The narrator was not yet born at the time', 'The chain has no narrators listed at all', 'The narrator uses ambiguous wording implying a meeting that never happened'], correct: 3 },
        { q: 'A ḥadīth missing narrators at the very beginning of its chain (nearest the compiler) is called:', choices: ['Mursal', 'Muʿallaq', 'Musnad', 'Musalsal'], correct: 1 },
        { q: 'What are the two main causes of Radd (rejection), according to this section?', choices: ['Saqṭ (omission) and Ṭaʿn (criticism)', 'Kidhb (lying) and Fisq (transgression) only', 'Wahm (error) and Bidʿah (innovation) only', 'Ḍabṭ (memory) and ʿAdālah (uprightness) only'], correct: 0 },
        { q: 'What is Mursal Khafī, as distinguished from ordinary Tadlīs?', choices: ['Dropping the Companion link entirely and openly', 'A fabricated narration with no chain whatsoever', 'Narrating from a contemporary the narrator never actually met at all', 'Narrating with an admitted, visible gap in the chain'], correct: 2 },
      ]
    },
    {
      id: 'tan', icon: '🔍', label: 'The Ten Causes of Criticism', subtitle: 'Al-Ṭaʿn — Why a Narrator Is Rejected', color: 'var(--burgundy-deep)',
      intro: "Ṭaʿn (criticism of the narrator himself, rather than a gap in the chain) is the second main cause of rejection. Ibn Ḥajar lists exactly ten specific reasons a narrator can be criticized, and each one produces its own distinct technical label for the resulting ḥadīth.",
      bullets: [
        { label: '1–2: Lying', text: 'Deliberate lying about the Prophet ﷺ → موضوع (Mawḍūʿ — fabricated).\nMerely accused of lying, unproven → متروك (Matrūk — discarded).' },
        { label: '3–5: Errors & Sin', text: 'Severe/frequent mistakes, extreme carelessness, or open transgression (Fisq) → all three result in منكر (Munkar).' },
        { label: '6–7: Confusion & Contradiction', text: 'Unintentional error (Wahm) → معلل (Muʿallal — hidden defect).\nContradicting reliable narrators (Mukhālafat al-Thiqāt) → شاذ (Shādh) or منكر (Munkar).' },
        { label: '8: الجهالة (Al-Jahālah) — Unknown Status', text: "مجهول العين (Majhūl al-ʿAyn): only ONE person narrates from him — his identity is essentially unknown.\nمجهول الحال (Majhūl al-Ḥāl, a.k.a. مستور Mastūr): several narrate from him, but no Imām has verified his reliability." },
        { label: '9–10: البدعة (Bidʿah) & Weak Memory', text: "Bidʿah of Kufr → narration rejected outright. Bidʿah of Fisq → conditionally accepted.\nسوء الحفظ (Sūʾ al-Ḥifẓ): permanent (Lāzim) → شاذ (Shādh); temporary/old-age (Ṭāriʾ) → مختلط (Mukhtalaṭ — only pre-decline narrations accepted)." },
      ],
      qanda: [
        { q: 'What are the ten causes of Ṭaʿn that Ibn Ḥajar lists?', a: "(1) Kidhb — lying, (2) Tuhmat al-Kidhb — accusation of lying, (3) Fuḥsh al-Ghalaṭ — severe mistakes, (4) Kathrat al-Ghaflah — extreme carelessness, (5) Al-Fisq — open transgression, (6) Al-Wahm — unintentional error, (7) Mukhālafat al-Thiqāt — contradicting reliable narrators, (8) Al-Jahālah — unknown status, (9) Al-Bidʿah — innovation, (10) Sūʾ al-Ḥifẓ — weakness of memory." },
        { q: "What's the difference between Majhūl al-ʿAyn and Majhūl al-Ḥāl (Mastūr)?", a: 'Majhūl al-ʿAyn: only ONE person has ever narrated from him, so his identity and reliability are essentially unknown. Majhūl al-Ḥāl / Mastūr: MORE than one person narrates from him, but no recognized Imām has declared him Thiqah (reliable) — his outward reputation may be fine, but his standing is unverified.' },
        { q: 'What are the two types of Bidʿah, and how does each affect acceptance of the narrator?', a: 'Bidʿah of Kufr — an innovation that takes a person entirely outside Islam (e.g., believing a Companion literally became divine); his narrations are NOT accepted at all. Bidʿah of Fisq — an innovation that leads to sin but not disbelief; his narrations can be conditionally accepted if he meets several safeguards (doesn\'t reject anything proven by Tawātur, doesn\'t distort Qurʾān/ḥadīth to support his view, doesn\'t consider lying permissible, and his narration has nothing to do with his innovated belief).' },
        { q: 'What is Mukhtalaṭ, and how are that narrator\'s ḥadīth treated?', a: "Mukhtalaṭ describes a narrator whose memory weakened later in life — typically from old age or losing his notes. His narrations from BEFORE the decline are accepted as normal; those made AFTER the decline are not." },
      ],
      quiz: [
        { q: 'A narrator who intentionally fabricates a statement and attributes it to the Prophet ﷺ produces a ḥadīth called:', choices: ['Munkar', 'Shādh', "Muʿallal", "Mawḍūʿ (fabricated)"], correct: 3 },
        { q: 'A narrator known to only ONE person, whose identity is essentially unknown, is:', choices: ["Majhūl al-Ḥāl", "Majhūl al-ʿAyn", "Mastūr", "Thiqah"], correct: 1 },
        { q: 'Innovation that takes a person entirely outside of Islam is called:', choices: ['Bidʿah of Fisq', "Taʾwīl", 'Bidʿah of Kufr', "Taḥrīf"], correct: 2, explain: 'Narrations from someone with Bidʿah of Kufr are rejected outright; Bidʿah of Fisq narrations can be conditionally accepted.' },
        { q: "A narrator whose memory permanently weakened, whose errors now equal or exceed his correct narrations, is described as having:", choices: ['Thiqah Thiqah status', "Sūʾ al-Ḥifẓ (weakness of memory)", 'Kadhdhab (proven liar) status automatically', 'Ṣaḥābī status specifically'], correct: 1 },
        { q: 'What is Mukhtalaṭ?', choices: ['A ḥadīth with two irreconcilable chains', 'A narrator whose memory declined later in life — earlier narrations accepted, later ones not', 'A fabricated ḥadīth with no chain', 'A narrator who lied about meeting the Prophet ﷺ'], correct: 1 },
        { q: 'What distinguishes Majhūl al-Ḥāl (Mastūr) from Majhūl al-ʿAyn?', choices: ['Several people narrate from him, but no recognized Imām has verified his reliability', 'Only one person has ever narrated from him at all', 'He is a proven liar unlike Majhūl al-ʿAyn', 'He is more reliable than a Thiqah narrator'], correct: 0 },
      ]
    },
    {
      id: 'mukhalafah', icon: '🔄', label: 'Types of Contradiction', subtitle: 'Mukhālafah — Six Forms', color: 'var(--emerald)',
      intro: "When a narrator's report doesn't match what more reliable narrators report, the specific MANNER of that mismatch determines its technical name — Ibn Ḥajar lists six distinct forms.",
      bullets: [
        { label: 'مدرج الإسناد (Mudraj al-Isnād) — p.54', text: "The chain itself gets mixed — e.g. combining two separate chains into one, or mistaking a Shaykh's own remarks for part of the ḥadīth text." },
        { label: 'مدرج المتن (Mudraj al-Matn) — p.54', text: "Extra wording gets folded into the ḥadīth's text so that the original and the addition can no longer be told apart." },
        { label: 'مقلوب (Maqlūb) — p.55', text: 'The order of the text or chain is reversed — e.g. mixing up two similar narrator names like Ibn ʿUmar and Ibn ʿAmr.' },
        { label: 'مضطرب (Muḍṭarib)', text: 'Multiple conflicting versions exist with NO way to prefer one over the other.' },
        { label: 'مصحف / محرف (Muṣaḥḥaf / Muḥarraf) — p.58', text: 'Muṣaḥḥaf: wording changes from misreading a DOT on a letter.\nMuḥarraf: wording changes from misreading a VOWEL/diacritic, letters unchanged.' },
      ],
      qanda: [
        { q: 'What are the six forms of Mukhālafah (contradiction) Ibn Ḥajar lists?', a: '(1) Mudraj al-Isnād — mixed chain, (2) Mudraj al-Matn — mixed text, (3) Maqlūb — reversed order, (4) Mazīd fī al-Muttaṣil — an extra narrator added, (5) Muḍṭarab — irreconcilable conflicting versions, (6) Muṣaḥḥaf/Muḥarraf — altered letters or vowels.' },
        { q: "What's the difference between Mudraj al-Isnād and Mudraj al-Matn?", a: 'Mudraj al-Isnād is when the CHAIN gets mixed or altered (e.g. combining chains, mistaking a comment for part of the Sanad). Mudraj al-Matn is when the TEXT of the ḥadīth gets extra wording folded in that becomes inseparable from the original.' },
        { q: 'What makes a ḥadīth Muḍṭarib, and why is that particularly problematic?', a: "It's Muḍṭarib when there are multiple conflicting versions and NO way to determine which is more reliable (no Tarjīḥ possible). It's problematic because, unlike most other contradiction types, there's no resolution path at all — scholars are simply left without a preferred version." },
        { q: "What's the difference between Muṣaḥḥaf and Muḥarraf?", a: 'Muṣaḥḥaf is a change caused by misreading the dots (Nuqṭah) on a letter — e.g. narrating "Sittān" as "Shayʾān." Muḥarraf is a change in vowelization (Iʿrāb) while the letters themselves, dots included, stay exactly the same.' },
      ],
      quiz: [
        { q: 'When the order of narrators or parts of a text get reversed (e.g. swapping two similar names), the ḥadīth is called:', choices: ['Muḍṭarib', 'Maqlūb', 'Muṣaḥḥaf', 'Mudraj'], correct: 1 },
        { q: 'A ḥadīth with irreconcilable conflicting versions, where no version can be preferred, is called:', choices: ['Maqlūb', "Maʿrūf", "Maḥfūẓ", 'Muḍṭarib'], correct: 3 },
        { q: "When a ḥadīth's wording changes because someone misread the DOTS on a letter, this is called:", choices: ['Muḥarraf', 'Mudraj', 'Maqlūb', 'Muṣaḥḥaf'], correct: 3, explain: 'Muḥarraf specifically refers to a change in vowelization/diacritics while the letters (dots included) stay the same.' },
        { q: 'What is Mudraj al-Isnād, as distinguished from Mudraj al-Matn?', choices: ['The chain itself gets mixed, e.g. combining two separate chains into one', 'Extra wording gets folded into the text of the ḥadīth', 'Two narrator names are swapped for each other', 'A vowel is misread while letters stay the same'], correct: 0 },
        { q: 'What is Mudraj al-Matn?', choices: ['A chain gets grafted onto the wrong text entirely', 'A narrator\'s name gets reversed with another\'s', 'Extra wording gets folded into the ḥadīth\'s text so original and addition can no longer be distinguished', 'A hidden defect surfaces only after cross-referencing'], correct: 2 },
        { q: 'How many distinct forms of Mukhālafah (contradiction) does Ibn Ḥajar list in this section?', choices: ['Six', 'Two', 'Ten', 'Three'], correct: 0 },
      ]
    },
    {
      id: 'isnad-end', icon: '🎯', label: 'Classifying by End of the Chain', subtitle: 'Marfūʿ, Mawqūf, Maqṭūʿ, Musnad', color: 'var(--burgundy-light)',
      intro: "A separate classification axis from chain-quality: WHO the report is ultimately attributed to — the Prophet ﷺ himself, a Companion, or a Successor — and separately, whether that chain of attribution looks fully connected.",
      bullets: [
        { label: "مرفوع (Marfūʿ) — p.69", text: 'Attributed to the Prophet ﷺ himself — his saying (Qawl), action (Fiʿl), or tacit approval (Taqrīr).' },
        { label: 'موقوف (Mawqūf) — p.69', text: "Attributed only to a Ṣaḥābī's own saying, action, or approval. Also called Athar." },
        { label: 'مقطوع (Maqṭūʿ) — p.69', text: "Attributed to a Tābiʿī or below. Mawqūf and Maqṭūʿ are BOTH called Athar." },
        { label: 'الصحابي والتابعي (Ṣaḥābī & Tābiʿī) Defined — p.74', text: "Ṣaḥābī: met the Prophet ﷺ believing in him, and died upon Islam.\nTābiʿī: met a (believing) Ṣaḥābī and died upon Īmān." },
        { label: 'المسند (Al-Musnad) — p.75', text: 'A Marfūʿ report of a Ṣaḥābī whose chain APPEARS fully connected (Muttaṣil) — even a hidden break can still count as Musnad if it looks connected on the surface.' },
      ],
      qanda: [
        { q: "What are the three levels a ḥadīth's chain of attribution can end at?", a: "Marfūʿ (ending at the Prophet ﷺ), Mawqūf (ending at a Ṣaḥābī), and Maqṭūʿ (ending at a Tābiʿī or below)." },
        { q: "Can something be Marfūʿ even if it's a Companion speaking, not directly quoting the Prophet ﷺ?", a: "Yes — this is called Marfūʿ Ḥukmī. If a Ṣaḥābī states something that couldn't come from personal opinion (like details about the start of creation), performs an action unrelated to independent reasoning, or does something in the Prophet's ﷺ presence that he didn't object to, it's treated as if it were Marfūʿ." },
        { q: 'How are Ṣaḥābī and Tābiʿī defined in the text?', a: 'A Ṣaḥābī is someone who met the Prophet ﷺ while believing in him and died upon Islam. A Tābiʿī is someone who met a (believing) Ṣaḥābī, while himself believing, and died upon Īmān.' },
        { q: 'What is the difference between Mawqūf/Maqṭūʿ (both called "Athar") and Musnad?', a: "Mawqūf and Maqṭūʿ describe WHERE the attribution stops (a Companion or below). Musnad specifically describes a Marfūʿ (Prophetic) report whose chain appears fully connected — it's a statement about chain quality/completeness, not about who the report is attributed to." },
      ],
      quiz: [
        { q: "A report attributed only to a Companion's own words or actions (not the Prophet ﷺ) is called:", choices: ["Marfūʿ", 'Mawqūf', 'Musnad', "Maqṭūʿ"], correct: 1 },
        { q: 'A report attributed to a Tābiʿī or someone below him is called:', choices: ["Mawqūf", "Maqṭūʿ", 'Musalsal', "Marfūʿ"], correct: 1 },
        { q: 'Who qualifies as a Ṣaḥābī according to the definition given?', choices: ["Anyone who lived during the Prophet's ﷺ lifetime, regardless of belief", 'Anyone who met a Companion, regardless of era', 'Only the first four Rightly-Guided Caliphs', 'Someone who met the Prophet ﷺ believing in him and died upon Islam'], correct: 3 },
        { q: 'A Musnad ḥadīth is specifically:', choices: ['Any ḥadīth regardless of chain quality', "A Marfūʿ report of a Ṣaḥābī with an apparently connected (Muttaṣil) chain", 'A fabricated ḥadīth with no real chain', "A report attributed only to a Tābiʿī"], correct: 1 },
        { q: 'What is Marfūʿ Ḥukmī, as described in this section?', choices: ['When a Ṣaḥābī states something that couldn\'t come from personal opinion, treated as if Marfūʿ even without directly quoting the Prophet ﷺ', 'A report explicitly quoting the Prophet ﷺ word for word', 'A report attributed to a Tābiʿī rather than a Ṣaḥābī', 'A completely fabricated report with no basis'], correct: 0 },
        { q: 'How is a Tābiʿī defined in this section?', choices: ['Anyone born after the Prophet\'s ﷺ death, regardless of belief', 'Someone who narrated at least one hundred ḥadīth', 'Someone who met a believing Ṣaḥābī, while himself believing, and died upon Īmān', 'A scholar who compiled a hadith collection'], correct: 2 },
      ]
    },
    {
      id: 'narrators', icon: '👥', label: 'Relationships Between Narrators', subtitle: 'Aqrān, Mudabbaj, Sābiq-Lāḥiq, Musalsal', color: 'var(--emerald-light)',
      intro: 'Beyond judging each chain in isolation, scholars also studied the RELATIONSHIPS between narrators themselves — their relative seniority, the timing of their deaths, and even shared quirks in how they phrased their narrations.',
      bullets: [
        { label: 'رواية الأقران (Riwāyat al-Aqrān) — p.81', text: 'Two narrators who are contemporaries/equals — in age, or by sharing the same teacher.' },
        { label: 'المدبج (Al-Mudabbaj) — p.82', text: 'A specific case of Aqrān where the two contemporaries narrate FROM each other. (Every Mudabbaj is Aqrān, not the reverse.)' },
        { label: "الأكابر عن الأصاغر / الأصاغر عن الأكابر (Akābir 'an al-Aṣāghir / Aṣāghir 'an al-Akābir) — p.82-83", text: 'A senior narrating from a junior (in age, rank, or knowledge) vs. the far more common reverse — a junior narrating from a senior.' },
        { label: 'السابق واللاحق (Al-Sābiq wal-Lāḥiq) — p.83-84', text: 'Two narrators sharing the same teacher, one of whom died much earlier (up to 150 years apart on record!). Narrating through the later-dying Lāḥiq shortens the chain.' },
        { label: 'المسلسل (Al-Musalsal) — p.87-88', text: 'Every single narrator in the chain shares the same wording, phrase, or action while transmitting — e.g. all saying "Samiʿtu," or all interlacing their fingers at the same point.' },
      ],
      qanda: [
        { q: 'What is Al-Mudabbaj, and how does it relate to Riwāyat al-Aqrān?', a: 'Mudabbaj is a specific type of Riwāyat al-Aqrān where the two contemporary narrators narrate FROM each other, not just being equals in age or teacher. Every Mudabbaj case is technically also Aqrān, but not every Aqrān case is Mudabbaj — Aqrān is the general category, Mudabbaj the specific one.' },
        { q: 'What is the most common relationship pattern between a narrator and his source?', a: "Aṣāghir 'an al-Akābir — a junior narrating from a senior. This is by far the most common pattern in ḥadīth transmission, as most students narrate from older teachers." },
        { q: 'What is Al-Sābiq wal-Lāḥiq, and why does it matter for chain length?', a: 'It describes two narrators who share the same teacher, where one (the Sābiq) dies much earlier than the other (the Lāḥiq) — sometimes up to 150 years apart. Narrating through the Lāḥiq (who died later) gives a shorter, higher chain (fewer intermediate narrators) than narrating through the long-dead Sābiq.' },
        { q: 'What is a Musalsal ḥadīth? Give an example type.', a: "A ḥadīth where every narrator in the chain shares the same distinguishing feature while transmitting it. Examples: Musalsal in wording (every narrator says \"Samiʿtu\" or \"Ḥaddathanā\"), Musalsal in speech (every narrator addressed his student with the exact same words, like \"I love you for the sake of Allāh, O Muʿādh\"), or Musalsal in action (every narrator performed the same physical action, like interlacing fingers, while narrating)." },
      ],
      quiz: [
        { q: 'When two contemporary narrators narrate FROM EACH OTHER, this specific relationship is called:', choices: ['Riwāyat al-Aqrān (in general)', 'Al-Mudabbaj', 'Al-Musalsal', 'Al-Sābiq wal-Lāḥiq'], correct: 1 },
        { q: 'The most common narrator relationship in ḥadīth transmission is:', choices: ['A senior narrating from a junior', 'Two equals narrating from each other', 'A narrator quoting himself repeatedly', "A junior narrating from a senior (Aṣāghir 'an al-Akābir)"], correct: 3 },
        { q: 'What is the recorded maximum age gap between a Sābiq and a Lāḥiq sharing the same teacher?', choices: ['10 years', '500 years', 'There is no recorded maximum mentioned', '150 years'], correct: 3 },
        { q: 'A ḥadīth where every narrator in the chain used the exact same wording (e.g. all said "I heard...") is called:', choices: ['Mudabbaj', 'Mursal', "Maqṭūʿ", 'Musalsal'], correct: 3 },
        { q: 'What is Riwāyat al-Aqrān, as the general category that Mudabbaj falls under?', choices: ['Two narrators who are contemporaries/equals in age or by sharing the same teacher', 'A junior narrating from a much older senior', 'A narrator whose memory declined with age', 'A fabricated relationship invented by later scholars'], correct: 0 },
        { q: 'Why does narrating through the Lāḥiq (later-dying narrator) shorten a chain compared to the Sābiq?', choices: ['Because the Lāḥiq is always more reliable than the Sābiq', 'Because the Sābiq\'s narrations are always rejected', 'Because fewer intermediate narrators are needed to reach a narrator who died more recently', 'Because the Lāḥiq necessarily met the Prophet ﷺ directly'], correct: 2 },
      ]
    },
    {
      id: 'uluww-nuzul', icon: '🪜', label: "ʿUluww & Nuzūl — The Height of a Chain", subtitle: 'Fewer Links, Higher Rank — Muwāfaqah, Badal, Musāwāt, Musāfaḥah', color: 'var(--gold)',
      intro: "A fourth way to classify a chain (Tuḥfat al-Durar, p.77-80): simply count its links. Fewer narrators between you and the source makes a chain ʿĀlī (elevated/high); more makes it Nāzil (descending/low); an equal count on two different chains makes them Musāwī. Ibn Ḥajar then breaks the 'high chain' idea into four increasingly technical sub-types, each depending on exactly whose chain you're comparing yours to.",
      bullets: [
        { label: "ʿUluww Muṭlaq vs. ʿUluww Nisbī", text: "ʿUluww Muṭlaq (Absolute): few Wasāʾiṭ (links) between a narrator and the Prophet ﷺ himself.\nʿUluww Nisbī (Relative): few links between a narrator and a later Imām of Ḥadīth — even if the total distance from that Imām back to the Prophet ﷺ is actually longer." },
        { label: '1) Muwāfaqah', text: "Finding a chain to the SAME shaykh that a Muṣannif (compiler) narrates from, but reaching him by a different, shorter route that bypasses the Muṣannif himself. Example: Bukhārī narrates from Qutaybah ibn Saʿīd, who narrates from Mālik. If you find a chain reaching Qutaybah WITHOUT going through Bukhārī, that is Muwāfaqah." },
        { label: '2) Badal', text: "Finding a chain to the Muṣannif's shaykh's OWN shaykh, again bypassing both the Muṣannif and his shaykh. Example: a chain reaching Mālik directly, without passing through both Bukhārī and Qutaybah — this is Badal (a substitute route one link further back than Muwāfaqah)." },
        { label: '3) Musāwāt', text: "Having a chain to the Prophet ﷺ with the exact same NUMBER of narrators as a given Muṣannif's own chain has — even though the actual people in the chain are completely different. Example: if Nasāʾī's chain to the Prophet ﷺ has 10 narrators, and your own separate chain to the Prophet ﷺ also has 10, that is Musāwāt between you and Nasāʾī." },
        { label: '4) Musāfaḥah', text: "One further step down from Musāwāt: your chain's narrator-count matches not the Muṣannif himself, but the Muṣannif's STUDENT'S chain-count instead." },
        { label: "Bukhārī's Thulāthiyyāt — the Highest Sanad on Record", text: "The fewer the links, the higher-ranked the chain — provided every link is Thiqah (reliable); a highly-reliable Nāzil chain still outranks a less-reliable ʿĀlī one. Bukhārī's shortest chains have only THREE narrators between him and the Prophet ﷺ (Thulāthiyyāt) — 22 such chains exist in Ṣaḥīḥ al-Bukhārī: 11 via Makkī ibn Ibrāhīm and 6 via Abū ʿĀṣim an-Nabīl (both students of Abū Ḥanīfah), 3 via Muḥammad ibn ʿAbdullāh al-Anṣārī (student of Abū Ḥanīfah's student Zufar), and 2 more besides. Mālik's Muwaṭṭaʾ tops out at Thunāʾiyyāt — chains with only TWO narrators in between." },
      ],
      qanda: [
        { q: "Why does Ibn Ḥajar need FOUR separate sub-types of ʿUluww Nisbī (Muwāfaqah, Badal, Musāwāt, Musāfaḥah) instead of just saying a chain is 'high' or 'low'?", a: "Because 'high' is always relative to something specific — a compiler's own chain, that compiler's shaykh, the Prophet ﷺ directly, or a compiler's student. Muwāfaqah and Badal both involve bypassing part of a specific Muṣannif's chain (at the shaykh level vs. the shaykh's-shaykh level), while Musāwāt and Musāfaḥah compare total narrator-counts to the Prophet ﷺ (matching the Muṣannif himself vs. matching one of his students). Each label pins down exactly which comparison point is being used, which matters because the practical value of an 'elevated' chain depends entirely on who you're claiming to be as concise as." },
        { q: 'Why is a Nāzil (lower/longer) chain sometimes still ranked ABOVE a shorter ʿĀlī chain?', a: 'Because chain-height alone is not the goal — reliability is. An ʿĀlī chain is only counted as genuinely valuable if all of its narrators are Thiqah (reliable). If a longer chain has more trustworthy, precise narrators throughout, it outranks a shorter chain whose narrators are less reliable, since the entire point of counting links is to gauge how much room for error has accumulated, not simply to celebrate brevity.' },
      ],
      quiz: [
        { q: 'What does ʿUluww Muṭlaq (Absolute) measure, as distinguished from ʿUluww Nisbī?', choices: ['The number of links between a narrator and the Prophet ﷺ himself', 'The number of links between a narrator and any later Imām', 'The total number of chains a ḥadīth has', 'Whether a chain contains a Mudallis'], correct: 0 },
        { q: 'In the worked example, Bukhārī narrates from Qutaybah ibn Saʿīd who narrates from Mālik. A chain reaching Qutaybah WITHOUT passing through Bukhārī is called:', choices: ['Badal', 'Musāfaḥah', 'Muwāfaqah', 'Musāwāt'], correct: 2 },
        { q: 'A chain reaching Mālik directly, bypassing BOTH Bukhārī and Qutaybah, is called:', choices: ['Muwāfaqah', 'Musāwāt', 'Musāfaḥah', 'Badal'], correct: 3 },
        { q: "If Nasāʾī's chain to the Prophet ﷺ has 10 narrators and your own separate chain also has exactly 10, this relationship between you and Nasāʾī is called:", choices: ['Musāwāt', 'Muwāfaqah', 'Badal', 'ʿUluww Muṭlaq'], correct: 0 },
        { q: 'How many Thulāthiyyāt (three-narrator chains) does Ṣaḥīḥ al-Bukhārī contain, according to this section?', choices: ['3', '10', '22', '150'], correct: 2 },
        { q: 'Under what condition does this section say a Nāzil (lower) chain can outrank a shorter ʿĀlī chain?', choices: ['Never — a shorter chain always outranks a longer one', 'If the Nāzil chain\'s narrators are more reliable (Thiqah) than the ʿĀlī chain\'s', 'If the Nāzil chain is Mutawātir', 'If the Nāzil chain was narrated by a Companion'], correct: 1 },
      ]
    },
    {
      id: 'ada', icon: '🗣️', label: 'Words Used to Narrate', subtitle: 'Ṣīghat al-Adāʾ and Ijāzah', color: 'var(--grey-accent)',
      intro: "The exact WORDING a narrator uses to describe how he received a ḥadīth carries real weight — from \"I heard\" (the strongest, clearest form) down through several tiers of permission-based transmission (Ijāzah).",
      bullets: [
        { label: 'Highest Rank (p.89-90)', text: 'Samiʿtu / Ḥaddathanī ("I heard" / "he narrated to me") — direct, singular hearing. The clearest and strongest form.' },
        { label: 'Reading Back (p.90)', text: "Akhbaranī / Qaraʾtu ʿalayhi (\"he informed me\" / \"I read to him\") — used when the STUDENT reads back to the teacher, who listens and confirms." },
        { label: 'Lower Tiers (Ijāzah-based)', text: "Anbaʾanī, Nāwalanī, Shāfahanī, Kataba ilayya — progressively lower ranks, each tied to a different form of Ijāzah (permission) rather than direct hearing." },
        { label: "Lowest — عن ('An)", text: '"An" ("from") is the most ambiguous wording, and the one most associated with the possible risk of hidden Tadlīs.' },
        { label: 'الإجازة (Al-Ijāzah) — Valid & Invalid Forms', text: "General Ijāzah (permission given to a wide group) is valid. Ijāzah lil-Maʿdūm — permission granted to someone not yet born/existing — is NOT valid." },
      ],
      qanda: [
        { q: 'Why does "Samiʿtu" (I heard) rank higher than "ʿan" (from) as a narration formula?', a: '"Samiʿtu" states unambiguously that the narrator directly and personally heard the ḥadīth from the person named. "ʿan" is vague — it implies a connection without confirming direct hearing, which is exactly the ambiguity that a Mudallis (one who practices Tadlīs) exploits.' },
        { q: 'What is Ijāzah, and give one valid and one invalid type mentioned in the text.', a: 'Ijāzah is permission granted by a teacher (Shaykh) for a student to narrate on his authority, without requiring the student to have directly heard the material. A general Ijāzah given to a group of people is valid. An Ijāzah given to someone not yet born (Ijāzah lil-Maʿdūm) is explicitly NOT valid.' },
        { q: "What's the practical difference between Akhbaranī and Samiʿtu?", a: 'Samiʿtu/Ḥaddathanī describes the teacher speaking and the student simply listening. Akhbaranī/Qaraʾtu ʿalayhi describes the reverse direction — the STUDENT reads the material aloud TO the teacher, who listens and approves it.' },
        { q: 'Why is the wording "ʿan" considered risky in terms of potential Tadlīs?', a: 'Because "ʿan" only implies a possible connection between narrators without explicitly confirming that direct hearing (Simāʿ) actually took place — which is precisely the gap a Mudallis relies on to make an unmet or unheard source look like a direct one.' },
      ],
      quiz: [
        { q: 'Which narration formula ranks HIGHEST in reliability?', choices: ['"ʿAn" (from)', '"Kataba ilayya" (he wrote to me)', '"Shāfahanī" (he orally authorized me)', '"Samiʿtu" (I heard) / "Ḥaddathanī" (he narrated to me)'], correct: 3 },
        { q: 'Giving Ijāzah (permission to narrate) to a person not yet born is:', choices: ['Valid and commonly practiced', 'The strongest form of Ijāzah available', 'Required for every narration to be valid', 'Not valid'], correct: 3 },
        { q: 'Which wording is most associated with the RISK of hidden Tadlīs?', choices: ['"Samiʿtu" (I heard)', '"Ḥaddathanā" (he narrated to us)', '"Qaraʾtu ʿalayhi" (I read to him)', '"ʿAn" (from)'], correct: 3 },
        { q: 'What distinguishes "Akhbaranī" from "Samiʿtu" in terms of who is speaking and who is listening?', choices: ['Akhbaranī describes the student reading aloud to the teacher, who listens and confirms', 'They are exact synonyms with no functional difference', 'Akhbaranī is used only for fabricated narrations', 'Samiʿtu is a lower-ranked formula than Akhbaranī'], correct: 0 },
        { q: 'What kind of Ijāzah is described as valid in this section?', choices: ['A general Ijāzah given to a wide group of people', 'An Ijāzah given to someone not yet born', 'An Ijāzah given without the teacher\'s knowledge', 'No form of Ijāzah is considered valid'], correct: 0 },
        { q: 'Why does "ʿan" carry more risk of hidden Tadlīs than "Samiʿtu"?', choices: ['Because it is grammatically incorrect Arabic', 'Because it was invented specifically by the Jahmiyyah', 'Because it only implies a possible connection without confirming direct hearing actually took place', 'Because it is used exclusively by fabricators'], correct: 2 },
      ]
    },
    {
      id: 'ishtibah-naming', icon: '🏷️', label: 'Ishtibāh — When Narrators Look Alike', subtitle: 'Muttafiq wa Muftariq, Muʾtalif wa Mukhtalif, Mutashābih, Nisbah Traps', color: 'var(--burgundy-deep)',
      intro: "Two different narrators can share an identical-looking name; two narrators with genuinely different names can look identical once written without vowel marks; and a single narrator's title, nickname, or hometown-link can actively mislead someone who doesn't know its real origin. Ibn Ḥajar treats this naming confusion (Ishtibāh) as a serious branch of the science in its own right (p.96-113), because misidentifying a narrator can silently swap a reliable chain for an unreliable one.",
      bullets: [
        { label: '1) Muttafiq wa Muftariq — Same Name, Different People', text: "Two narrators whose names AND fathers' names are identical in both spelling and pronunciation, yet who are two entirely separate individuals. Examples given: six different narrators named Khalīl ibn Aḥmad; four named Aḥmad ibn Jaʿfar ibn Ḥamdān, all from the same era; two named Abū ʿImrān Jawnī (same kunyah and nisbah); two named Muḥammad ibn ʿAbdullāh al-Anṣārī (same name, father's name, AND nisbah); two named Abū Bakr ibn Ayyāsh (same kunyah and father's name)." },
        { label: '2) Muʾtalif wa Mukhtalif — Same Spelling, Different Pronunciation', text: 'Names that are written identically but pronounced differently, e.g. ʿAqīl and ʿUqayl. Muʾtalif refers to their shared spelling, Mukhtalif to their differing pronunciation.' },
        { label: '3) Mutashābih — Mixed Cases', text: "Combines the two problems above: e.g. two narrators whose OWN names match but whose fathers' names look alike in writing yet differ in pronunciation (Muḥammad ibn ʿAqīl of Nīshāpūr vs. Muḥammad ibn ʿUqayl of Firyāb); or the reverse; or cases where names and fathers' names match but the nisbahs differ in pronunciation (Muḥammad ibn ʿAbdullāh al-Mukharrimī, Bukhārī's teacher, vs. Muḥammad ibn ʿAbdullāh al-Makhramī, ash-Shāfiʿī's student)." },
        { label: 'Naming Vocabulary: Ism, Kunyah, Laqab, Nisbah', text: "Some narrators are known far more by their Kunyah (a \"father/mother-of\" title) than their actual Ism (given name) — e.g. az-Zuhrī's real name is Muḥammad ibn Muslim ibn ʿUbaydullāh ibn ʿAbdullāh ibn Shihāb, and Abū Bakr's real name is ʿAbdullāh ibn ʿUthmān (whose own father's Kunyah, in turn, was Abū Quḥāfah). A Laqab is a descriptive nickname (a physical trait like al-Aʿraj \"the limper,\" or a profession like al-ʿAṭṭār \"the perfumer\"). A Nisbah links someone to a tribe, hometown, or trade." },
        { label: 'Nisbah Traps — When the Obvious Reading Is Wrong', text: "Abū Masʿūd ʿUqbah ibn ʿAmr al-Anṣārī is called \"al-Badrī\" — NOT because he fought at the Battle of Badr, but because he later settled there. Muʿāwiyah ibn ʿAbd al-Karīm is called \"aḍ-Ḍāll\" (\"the lost one\") simply because he once got lost travelling to Makkah. Isḥāq ibn Ibrāhīm's father carries the nickname \"Rāhawayh\" (\"of the road\") because he happened to be born en route to Makkah." },
        { label: 'Al-Ikhwah wal-Akhawāt — Telling Siblings Apart', text: "It matters which of two same-surnamed brothers narrated a given ḥadīth, since their reliability can differ sharply. Example: ʿUbaydullāh ibn ʿUmar al-ʿUmarī is Thiqah by unanimous agreement, while his own brother ʿAbdullāh ibn ʿUmar al-ʿUmarī is Mutakallam Fīh (a narrator whose reliability is actively disputed) — an easy mix-up with real consequences for a chain's grade." },
      ],
      qanda: [
        { q: 'What is the core difference between Muttafiq wa Muftariq and Muʾtalif wa Mukhtalif?', a: "Muttafiq wa Muftariq describes two DIFFERENT people whose names (and often their fathers' names too) are spelled AND pronounced identically — the confusion is over identity. Muʾtalif wa Mukhtalif describes names that are written identically but pronounced differently (like ʿAqīl vs. ʿUqayl) — the confusion is purely phonetic, and it may or may not even involve two different people." },
        { q: 'Why does the case of Abū Masʿūd al-Badrī matter as a cautionary example, beyond just being a trivia fact?', a: 'Because it shows how a nisbah can actively mislead a student who assumes the "obvious" explanation. Anyone unfamiliar with his biography would reasonably assume "al-Badrī" means he fought at Badr — a mistake that could wrongly inflate or misdate his standing as a Companion-narrator. The book flags this precisely because Nisbah traps like it require verified biographical knowledge, not guesswork from the label alone.' },
        { q: 'Why does the book bother distinguishing ʿUbaydullāh ibn ʿUmar al-ʿUmarī from his brother ʿAbdullāh ibn ʿUmar al-ʿUmarī?', a: "Because their near-identical names (both patronymic 'al-ʿUmarī' sons of ʿUmar) mask a sharp difference in reliability — one brother is Thiqah by consensus, the other is Mutakallam Fīh. Confusing the two in a chain could mean silently substituting a reliable narrator's standing for a disputed one, or vice versa, changing the entire grade of a ḥadīth without anyone noticing." },
      ],
      quiz: [
        { q: 'What defines Muttafiq wa Muftariq, as this section explains it?', choices: ['Two different narrators whose names and fathers\' names are identical in both spelling and pronunciation', 'Two names spelled the same but pronounced differently', 'A single narrator known by several different Kunyahs', 'Two narrators who are brothers with the same surname'], correct: 0 },
        { q: 'ʿAqīl and ʿUqayl — identical in writing but different in pronunciation — are given as the classic example of:', choices: ['Muttafiq wa Muftariq', 'Mutashābih', 'Muʾtalif wa Mukhtalif', 'Nisbah'], correct: 2 },
        { q: 'Why is Abū Masʿūd ʿUqbah ibn ʿAmr al-Anṣārī called "al-Badrī," according to this section?', choices: ['Because he fought at the Battle of Badr', 'Because he later settled and lived in Badr', 'Because his father was born in Badr', 'Because he narrated the most ḥadīth about the Battle of Badr'], correct: 1 },
        { q: 'What is a Laqab, as distinguished from a Kunyah and a Nisbah in this section?', choices: ['A link to a tribe, hometown, or trade', 'A "father/mother-of" style title', 'A descriptive nickname, such as a physical trait or profession', 'A narrator\'s formal given name'], correct: 2 },
        { q: 'Why does it matter to distinguish ʿUbaydullāh ibn ʿUmar al-ʿUmarī from his brother ʿAbdullāh ibn ʿUmar al-ʿUmarī?', choices: ['They lived in different centuries entirely', 'One of them was never actually a real person', 'Their names are not similar at all', 'One brother is Thiqah by consensus while the other is Mutakallam Fīh (disputed)'], correct: 3 },
        { q: 'What does Mutashābih describe, as the third and most complex Ishtibāh category?', choices: ['Two chains that are perfectly identical with no possible confusion', 'A narrator with no Kunyah, Laqab, or Nisbah at all', 'A ḥadīth with a fabricated isnād', 'A case combining elements of both Muttafiq wa Muftariq and Muʾtalif wa Mukhtalif at once'], correct: 3 },
      ]
    },
    {
      id: 'khatimah', icon: '🎓', label: 'The Conclusion', subtitle: "Ṭabaqāt, Jarḥ wa Taʿdīl, Adab, and Compilations", color: 'var(--burgundy)',
      intro: "Ibn Ḥajar closes with the practical matters every serious student of ḥadīth needs: knowing narrator generations, the precise vocabulary of criticism and praise, proper etiquette, and how the great ḥadīth collections are organized.",
      bullets: [
        { label: 'The 12 Ṭabaqāt, with Named Exemplars (Taqrīb al-Tahdhīb, p.100-101)', text: "1) All the Ṣaḥābah. 2) Senior Tābiʿūn + the Mukhaḍramūn, e.g. Saʿīd ibn al-Musayyib. 3) 'Middle' Tābiʿūn, e.g. al-Ḥasan al-Baṣrī, Ibn Sīrīn. 4) Slightly lower Tābiʿūn, e.g. az-Zuhrī, Qatādah. 5) Junior Tābiʿūn who met only a few Ṣaḥābah, e.g. Abū Ḥanīfah, al-Aʿmash. 6) Same era but met NO Ṣaḥābah, e.g. Ibn Jurayj. 7) Senior Tabaʿ al-Tābiʿīn, e.g. Mālik, Sufyān al-Thawrī. 8) 'Middle' Tabaʿ al-Tābiʿīn, e.g. Sufyān ibn ʿUyaynah, Ismāʿīl ibn ʿUlayyah. 9) Junior Tabaʿ al-Tābiʿīn, e.g. ash-Shāfiʿī, Abū Dāwūd aṭ-Ṭayālisī. 10) Next era's seniors (met no Tābiʿī), e.g. Aḥmad ibn Ḥanbal. 11) 'Middle' students of the Tabaʿ al-Tābiʿīn, e.g. al-Bukhārī, adh-Dhuhlī. 12) The generation's juniors, e.g. at-Tirmidhī." },
        { label: 'The 12-Level Jarḥ/Taʿdīl Scale (Taqrīb, p.104-105) — Praise Side (1 = highest)', text: "1) A Ṣaḥābī (Ṣaḥābah are simply the best of mankind). 2) Emphatically acclaimed by the Imāms of Jarḥ wa Taʿdīl, regardless of exact wording. 3) Acclaimed with ONE strong term — Thiqah / Mutqin / Thabat / ʿĀdil. 4) One notch lower — Ṣadūq (truthful) / Lā Baʾsa Bihi (nothing wrong with him). 5) Lower still — Ṣadūq Sayyiʾ al-Ḥifẓ (truthful, weak memory), Ṣadūq Yukhṭiʾ (truthful, errs at times), or Ṣadūq Taghayyara fī Ākhirihi (truthful, but grew senile late in life)." },
        { label: 'The Same Scale — Criticism Side (6-12 = declining)', text: "6) Very few narrations, no Jarḥ leveled — accepted only as a Mutābiʿ, never standalone. 7) More than one student narrated from him but no Imām verified him — Mastūr/Majhūl al-Ḥāl. 8) Declared Ḍaʿīf with no stated reason (Jarḥ Mubham). 9) Only ONE student ever narrated from him — Majhūl. 10) Extremely weak with no Taʿdīl at all — Matrūk / Wāhī al-Ḥadīth. 11) Accused of Kidhb — narrations contradict Islam's established foundations, or he is a habitual liar in daily life. 12) Proven to fabricate ḥadīth outright." },
        { label: 'Key Rule (p.105-106)', text: 'Jarḥ takes precedence over Taʿdīl IF the critic is a qualified scholar who clearly states his reasons (Jarḥ Mubayyan). If no Imām has praised the narrator at all, even an unspecified (Mujmal) criticism is accepted.' },
        { label: 'Adab of the Muḥaddith and the Student', text: 'Etiquette is expected of both the Muḥaddith (sincerity, humility, guarding against greed/envy/showing off) and the student (respect, punctuality, never being shy to ask, taking notes, avoiding backbiting) — see the next section for the full range of Ḥadīth compilation types (Tasnīf) this book closes with.' },
      ],
      qanda: [
        { q: 'What are the 12 Ṭabaqāt (generations), broadly?', a: 'They run from the Ṣaḥābah (highest rank) through senior, middle, and junior Tābiʿūn, then senior, middle, and junior Tabaʿ al-Tābiʿīn, and finally three further generations of their students — ending with scholars like al-Tirmidhī. Example early figure: Saʿīd ibn al-Musayyab (senior Tābiʿī); example late figure: al-Tirmidhī.' },
        { q: 'Where does Imām Abū Ḥanīfah fall in Ibn Ḥajar\'s 12-Ṭabaqah system, and where does al-Bukhārī fall?', a: "Abū Ḥanīfah falls in rank 5 — the junior Tābiʿūn who met only a handful of Ṣaḥābah (he was born in 80 AH, while many Ṣaḥābah were still alive, and reportedly met and narrated from several, including Anas ibn Mālik). Al-Bukhārī falls in rank 11 — the 'middle' generation among the students of the Tabaʿ al-Tābiʿīn, alongside adh-Dhuhlī." },
        { q: 'What does it mean that "Jarḥ takes precedence over Taʿdīl," and under what condition?', a: 'If a qualified scholar criticizes (Jarḥ) a narrator whom another scholar has praised (Taʿdīl), the criticism generally wins out — PROVIDED that the critic clearly explains his specific reasons (this is called Jarḥ Mubayyan). If no Imām has praised a criticized narrator at all, even an unspecified (Mujmal) criticism is accepted.' },
        { q: 'Name three etiquettes expected of a student of ḥadīth.', a: "Among those listed: keeping correct intention (Niyyah), respecting the teacher, not being shy to ask questions, being punctual, listening carefully and taking notes, staying far from sin, and avoiding backbiting (Ghībah) and idle talk." },
        { q: "What's the difference between a Musnad-style compilation (like Musnad Aḥmad) and a Sunan-style compilation (like Sunan Abī Dāwūd)?", a: 'A Musnad organizes ḥadīth by which Ṣaḥābī narrated them — all of one Companion\'s narrations grouped together, regardless of topic. A Sunan organizes ḥadīth by Fiqh topic/chapter (legal matters), regardless of which Companion narrated them.' },
      ],
      quiz: [
        { q: 'When does criticism (Jarḥ) of a narrator take precedence over praise (Taʿdīl) of him?', choices: ['Never — praise always wins regardless of circumstance', 'Only if the critic is more famous than the one who praised', 'Only if two separate critics happen to agree', 'When the criticism comes from a qualified scholar who clearly states his reasons (Jarḥ Mubayyan)'], correct: 3 },
        { q: 'Which of these is an expected etiquette of the STUDENT of ḥadīth?', choices: ['Correcting the teacher publicly whenever possible', 'Avoiding note-taking to rely on memory only', 'Choosing only the easiest narrations to study', 'Being punctual, listening carefully, and never being shy to ask questions'], correct: 3 },
        { q: 'How many Ṭabaqāt (generations) does this section describe, based on Taqrīb al-Tahdhīb?', choices: ['3', '73', '12', '5'], correct: 2 },
        { q: "In Ibn Ḥajar's 12-Ṭabaqah system, which rank does Imām Abū Ḥanīfah fall into?", choices: ['Rank 1 — the Ṣaḥābah', 'Rank 5 — junior Tābiʿūn who met only a few Ṣaḥābah', 'Rank 11 — the middle generation among students of the Tabaʿ al-Tābiʿīn', 'Rank 12 — the generation\'s juniors'], correct: 1 },
        { q: 'On the 12-level Jarḥ/Taʿdīl scale, what occupies the very highest (1st) rank of praise?', choices: ['Being a Ṣaḥābī, since the Ṣaḥābah are simply the best of mankind', 'Being called "Thiqah" by a single critic', 'Being praised by exactly two Imāms', 'Having no Jarḥ leveled against oneself at all'], correct: 0 },
        { q: 'If no Imām has praised a criticized narrator at all, what happens according to this section?', choices: ['Even an unspecified (Mujmal) criticism is accepted', 'The criticism is automatically dismissed', 'The narrator is treated as equal to a Companion', 'The narrator\'s status remains permanently undetermined'], correct: 0 },
      ]
    },
    {
      id: 'tasneef-types', icon: '📚', label: 'Tareeqah of Tasnīf — Types of Ḥadīth Compilations', subtitle: 'Jāmiʿ, Sunan, Musnad, Muʿjam, and 17 More', color: 'var(--emerald)',
      intro: "Ibn Ḥajar closes the book proper with a practical field guide: once you pick up any classical ḥadīth work, how do you know what KIND of book it is before you've read a page of it? Tuḥfat al-Durar (p.116-121) catalogs roughly twenty distinct compilation formats, each organizing its material by a different principle — by narrator, by topic, by Companion, by defect, or by something else entirely.",
      bullets: [
        { label: 'Jāmiʿ & Sunan — the Two Everyday Formats', text: "Jāmiʿ: covers all EIGHT major subject areas at once — Siyar (campaigns), Ādāb (etiquettes), Tafsīr, ʿAqāʾid, Fitan (trials), Ashrāṭ (signs of the Hour), Aḥkām (rulings), and Manāqib (virtues). Al-Bukhārī and at-Tirmidhī are Jāmiʿs (Muslim has almost no Tafsīr material, and Abū Dāwūd/Nasāʾī/Ibn Mājah are Sunan works instead).\nSunan: arranged by fiqh chapter specifically to supply the jurists with proof-texts, e.g. Sunan Abī Dāwūd, at-Tirmidhī, an-Nasāʾī." },
        { label: 'Musnad & Muʿjam — Organized by Person', text: "Musnad: groups every ḥadīth by WHICH Companion narrated it, regardless of topic, e.g. Musnad Aḥmad.\nMuʿjam: groups ḥadīth by WHICH TEACHER (shaykh) the compiler heard them from, e.g. aṭ-Ṭabarānī's three Muʿjams (al-Kabīr, al-Awsaṭ, aṣ-Ṣaghīr)." },
        { label: 'Mustadrak & Mustakhraj — Building on Another Book', text: "Mustadrak: gathers ḥadīth meeting a PRIOR compiler's own stated conditions that he simply never got around to including, e.g. al-Ḥākim's Mustadrak ʿalā aṣ-Ṣaḥīḥayn.\nMustakhraj: re-narrates another book's ḥadīth through entirely DIFFERENT chains, to independently corroborate it, e.g. al-Ismāʿīlī's Mustakhraj on al-Bukhārī, Abū ʿAwānah's on Muslim." },
        { label: 'Narrow, Single-Purpose Formats', text: "Ajzāʾ/Juz: ḥadīth on just ONE issue, e.g. al-Bukhārī's Juz al-Qirāʾah.\nAfrād wa Gharāʾib: gathers a single compiler's unique, uncorroborated narrations, e.g. Kitāb al-Afrād of ad-Dāraquṭnī.\nTajrīd: strips out sanads and repetitions entirely, e.g. az-Zubaydī's Tajrīd al-Bukhārī.\nTakhrīj: gathers another book's ḥadīth WITHOUT their sanads, e.g. Naṣb ar-Rāyah of az-Zaylaʿī.\nAtrāf: lists every sanad of a ḥadīth but keeps only the OPENING words of the text, e.g. al-Mizzī's Tuḥfat al-Ashrāf." },
        { label: 'Reference & Research Tools', text: "Fahāris: indexes for quick lookup, e.g. Miftāḥ Kunūz as-Sunnah.\nArbaʿīn: a curated set of exactly 40 ḥadīth, e.g. al-Arbaʿīn an-Nawawiyyah.\nMawḍūʿāt: compilations specifically of FABRICATED ḥadīth, e.g. al-Mawḍūʿāt al-Kubrā of Mullā ʿAlī al-Qārī.\nGharīb al-Ḥadīth: dictionaries explaining rare/difficult words in the texts, e.g. Ibn al-Athīr's an-Nihāyah.\nʿIlal: catalogs ḥadīth with disputed, criticized (Mutakallam Fīh) chains, e.g. at-Tirmidhī's al-ʿIlal al-Kabīr.\nKutub al-Adhkār: the Prophet's ﷺ own supplications and daily practices, e.g. an-Nawawī's al-Adhkār.\nZawāʾid: collects everything unique to one book that ISN'T found in another, e.g. al-Haythamī's Majmaʿ az-Zawāʾid." },
        { label: 'Asbāb al-Wurūd — the Occasion Behind a Ḥadīth', text: "Just as the Qurʾān has Asbāb an-Nuzūl (occasions of revelation), ḥadīth have Asbāb al-Wurūd — the specific incident or question that prompted a given saying. Al-Ḥusaynī's three-volume al-Bayān wat-Taʿrīf fī Asbāb Wurūd al-Ḥadīth ash-Sharīf is the standout work in this field." },
      ],
      qanda: [
        { q: 'What is the core organizing difference between a Musnad and a Muʿjam, even though both group ḥadīth "by person"?', a: 'A Musnad groups every ḥadīth by which COMPANION originally narrated it from the Prophet ﷺ (e.g. all of Abū Hurayrah\'s narrations together, regardless of topic). A Muʿjam instead groups ḥadīth by which TEACHER (shaykh) the compiler personally heard them from — a completely different point in the chain, closer to the compiler\'s own generation rather than the earliest one.' },
        { q: 'Why would a scholar bother compiling a Mustakhraj on a book that was already considered authentic, like Ṣaḥīḥ al-Bukhārī?', a: "Because a Mustakhraj deliberately finds NEW, independent chains for the same ḥadīth texts — meaning the ḥadīth is no longer resting on just al-Bukhārī's original chains alone. If other, entirely separate routes of transmission reach the same wording, that is powerful additional corroboration (similar in spirit to finding a Shāhid), which is why al-Ismāʿīlī's and Abū ʿAwānah's Mustakhrajs are valued works in their own right." },
        { q: 'What is the difference between a Takhrīj-style compilation and an Atrāf-style one?', a: "A Takhrīj-style book (like Naṣb ar-Rāyah) gathers another book's ḥadīth but strips out their sanads entirely, focused on the ruling/discussion. An Atrāf-style book (like Tuḥfat al-Ashrāf) does the opposite in one sense — it keeps and organizes every SANAD of a ḥadīth, but only prints the opening words of the text itself, since the point is cross-referencing chains, not re-reading the full wording each time." },
      ],
      quiz: [
        { q: 'What are the eight subject areas that define a Jāmiʿ-style compilation?', choices: ['Only Aḥkām and Manāqib', 'Ṣaḥīḥ, Ḥasan, Ḍaʿīf, and Mawḍūʿ', 'Marfūʿ, Mawqūf, and Maqṭūʿ', 'Siyar, Ādāb, Tafsīr, ʿAqāʾid, Fitan, Ashrāṭ, Aḥkām, and Manāqib'], correct: 3 },
        { q: 'What organizing principle defines a Musnad-style compilation like Musnad Aḥmad?', choices: ['Ḥadīth are grouped by fiqh chapter', 'Ḥadīth are grouped by which Companion narrated them, regardless of topic', 'Ḥadīth are grouped by which teacher the compiler heard them from', 'Ḥadīth are grouped by their grade (Ṣaḥīḥ/Ḥasan/Ḍaʿīf)'], correct: 1 },
        { q: 'A Mustadrak, such as al-Ḥākim\'s on aṣ-Ṣaḥīḥayn, specifically gathers:', choices: ['Fabricated ḥadīth for warning purposes', 'Ḥadīth meeting a prior compiler\'s own conditions that he simply never included', 'Ḥadīth with disputed, criticized chains', 'Only the opening words of ḥadīth texts, without their chains'], correct: 1 },
        { q: 'What is the specific purpose of a Mustakhraj, like al-Ismāʿīlī\'s on al-Bukhārī?', choices: ['To index a book\'s ḥadīth alphabetically', 'To collect only fabricated narrations', 'To re-narrate the same ḥadīth through entirely different, independent chains for corroboration', 'To strip out a book\'s sanads for brevity'], correct: 2 },
        { q: 'What does a Zawāʾid-style compilation, like al-Haythamī\'s Majmaʿ az-Zawāʾid, collect?', choices: ['Ḥadīth unique to one book that are NOT found in another', 'Only the 40 most famous ḥadīth', 'Explanations of rare or difficult words', 'Ḥadīth organized strictly by fiqh topic'], correct: 0 },
        { q: 'What are Asbāb al-Wurūd, as this section explains them?', choices: ['The chain of narrators for a given ḥadīth', 'The grade (Ṣaḥīḥ/Ḥasan/Ḍaʿīf) assigned to a ḥadīth', 'The specific occasion or incident that prompted a given ḥadīth, similar to Asbāb an-Nuzūl for the Qurʾān', 'A list of fabricated ḥadīth and their known inventors'], correct: 2 },
      ]
    },
    {
      id: 'summary', icon: '📊', label: 'Master Summary', subtitle: 'The Complete Classification Tree', color: 'var(--burgundy-deep)',
      intro: 'Pulling every classification in this book together into one reference: by number of chains, by acceptance or rejection, and by where the chain of attribution ends.',
      bullets: [
        { label: 'By Number of Chains', text: "خبر (Khabar)\n├── متواتر (Mutawātir) — unlimited chains → certain knowledge\n└── آحاد (Āḥād) — limited chains\n    ├── مشهور (Mashhūr) / مستفيض (Mustafīḍ) — more than 2 chains\n    ├── عزيز (ʿAzīz) — minimum 2 in every generation\n    └── غريب (Gharīb) — only 1 in some generation" },
        { label: 'By Acceptance or Rejection', text: "آحاد (Āḥād)\n├── مقبول (Maqbūl) — Accepted\n│   ├── صحيح لذاته (Ṣaḥīḥ li-Dhātihi) — all 5 conditions met\n│   ├── صحيح لغيره (Ṣaḥīḥ li-Ghayrihi) — Ḥasan elevated by multiple chains\n│   ├── حسن لذاته (Ḥasan li-Dhātihi) — 4 of 5 conditions, weak Ḍabṭ\n│   └── حسن لغيره (Ḥasan li-Ghayrihi) — weak, elevated by multiple chains\n└── مردود (Mardūd) — Rejected\n    ├── سقط (Saqṭ / Omission): معلق (Muʿallaq), مرسل (Mursal), معضل (Muʿḍal), منقطع (Munqaṭiʿ), مدلس (Mudallas), مرسل خفي (Mursal Khafī)\n    └── طعن (Ṭaʿn / Criticism, 10 causes): موضوع (Mawḍūʿ), متروك (Matrūk), منكر (Munkar), معلل (Muʿallal), شاذ (Shādh), مجهول (Majhūl), مبتدع (Mubtadaʿ), مختلط (Mukhtalaṭ)" },
        { label: 'By End of the Isnād', text: "├── مرفوع (Marfūʿ) — reaches the Prophet ﷺ\n├── موقوف (Mawqūf) — reaches a Ṣaḥābī\n└── مقطوع (Maqṭūʿ) — reaches a Tābiʿī or below" },
      ],
      qanda: [
        { q: 'Which single label applies to an Āḥād ḥadīth that meets all 5 conditions of authenticity?', a: 'Ṣaḥīḥ li-Dhātihi — it satisfies every condition in its own right, without needing outside support from other chains.' },
        { q: 'Name one classification that results from Saqṭ and one that results from Ṭaʿn.', a: 'From Saqṭ (omission): e.g. Mursal (the Ṣaḥābī is dropped) or Muʿallaq (the beginning of the chain is dropped). From Ṭaʿn (criticism): e.g. Mawḍūʿ (fabricated, from deliberate lying) or Munkar (from severe mistakes or contradicting reliable narrators).' },
        { q: "What are the three possible 'ends' of an isnād discussed in this book?", a: 'Marfūʿ (ending at the Prophet ﷺ), Mawqūf (ending at a Ṣaḥābī), and Maqṭūʿ (ending at a Tābiʿī or below).' },
      ],
      quiz: [
        { q: 'A ḥadīth with unlimited chains so numerous that collective lying is impossible is:', choices: ['Āḥād', "ʿAzīz", 'Gharīb', 'Mutawātir'], correct: 3 },
        { q: 'Which classification comes from a hidden DEFECT discovered through Wahm (unintentional error)?', choices: ['Musalsal', 'Musnad', "Marfūʿ", "Muʿallal"], correct: 3 },
        { q: "A report attributed to a Tābiʿī (not the Prophet ﷺ or a Companion) is called:", choices: ["Marfūʿ", 'Mawqūf', "ʿAzīz", "Maqṭūʿ"], correct: 3 },
        { q: "What describes a reliable narrator's addition being accepted because no more reliable narrator opposes it?", choices: ['Shādh', 'Munkar', 'Matrūk', 'Maqbūl / Maḥfūẓ'], correct: 3 },
        { q: 'Under the "By Acceptance or Rejection" branch, which two categories does Mardūd (rejected) split into?', choices: ['Saqṭ (omission) and Ṭaʿn (criticism)', 'Ṣaḥīḥ and Ḥasan only', 'Mutawātir and Āḥād only', 'Marfūʿ and Mawqūf only'], correct: 0 },
        { q: 'Which of these appears under the "By End of the Isnād" branch of the classification tree?', choices: ['Ṣaḥīḥ li-Dhātihi and Ḥasan li-Dhātihi', 'Mutawātir and Gharīb', 'Marfūʿ, Mawqūf, and Maqṭūʿ', 'Mudraj and Maqlūb'], correct: 2 },
      ]
    },
  ]
});
