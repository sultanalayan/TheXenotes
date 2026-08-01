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
        { q: 'In what century (AH) did Ibn Ḥajar al-ʿAsqalānī live?', choices: ['8th–9th century AH (773–852H)', '2nd century AH', '10th century AH', '5th century AH'], correct: 0, explain: 'He was born in 773H and died in 852H.' },
        { q: 'What prompted Ibn Ḥajar to write Nukhbat al-Fikar?', choices: ["A request from companions to summarize the subject in a concise booklet", 'A commission from a ruler', 'A refutation of a rival scholar', 'A translation project of an older text'], correct: 0 },
        { q: "What is the name of Ibn Ḥajar's own commentary on this text?", choices: ['Nuzhat al-Naẓar fī Tawḍīḥ Nukhbat al-Fikar', 'Fatḥ al-Bārī', 'Tahdhīb al-Tahdhīb', 'Al-Iṣābah'], correct: 0, explain: 'Fatḥ al-Bārī (a Ṣaḥīḥ al-Bukhārī commentary) and Tahdhīb al-Tahdhīb / Al-Iṣābah (biographical dictionaries) are other famous works by Ibn Ḥajar, but on different subjects.' },
      ]
    },
    {
      id: 'khabar-types', icon: '🔢', label: 'Classifying by Number of Chains', subtitle: 'Mutawātir, Mashhūr, ʿAzīz, Gharīb, Āḥād', color: 'var(--emerald)',
      intro: 'The first way a Khabar (report/ḥadīth) is classified is simply by how many independent chains (ṭuruq) carry it — unlimited chains (Mutawātir), or a limited, countable number (Āḥād, which further splits into Mashhūr, ʿAzīz, and Gharīb).',
      bullets: [
        { label: 'Al-Mutawātir', text: 'Narrated by so many independent narrators in every generation that collaborating on a lie becomes impossible → gives Ilm al-Yaqīnī al-Badīhī (certain, self-evident knowledge). No need to verify (Taḥqīq) its narrators at all.' },
        { label: 'Al-Mashhūr / Al-Mustafīḍ (p.23)', text: 'More than two chains in every generation, but below Mutawātir level. Most scholars treat Mashhūr and Mustafīḍ as synonyms.' },
        { label: "Al-ʿAzīz (p.23-24)", text: 'Never fewer than TWO narrators in any single generation of the chain. This is NOT a condition for a ḥadīth to be Ṣaḥīḥ.' },
        { label: 'Al-Gharīb (p.24)', text: 'Only ONE narrator in some generation. Absolute Gharīb = alone from the Companion level; Relative Gharīb = alone only later in the chain.' },
        { label: 'Al-Āḥād (p.24-26)', text: 'Everything that is not Mutawātir (i.e. Mashhūr + ʿAzīz + Gharīb, all together). Gives Ẓann (probability) by itself — but can reach certainty with supporting evidence (Qarāʾin).' },
      ],
      qanda: [
        { q: 'What makes a ḥadīth Mutawātir, and what level of certainty does it give?', a: "It's narrated by such a large number of independent narrators in every generation of its chain that their collaborating on a lie is inconceivable. It gives Ilm al-Yaqīnī al-Badīhī — certain, self-evident knowledge, the same category as knowing the sun rises. Because of this, its narrators don't even need to be individually verified." },
        { q: "What's the difference between Mashhūr and ʿAzīz?", a: 'Mashhūr requires MORE than two chains in every generation. ʿAzīz requires a MINIMUM of two chains in every generation — never dropping below that. Both are below Mutawātir and above Gharīb in chain-count.' },
        { q: 'What are the two types of Gharīb, and how do they differ?', a: 'Gharīb Muṭlaq (Absolute): the narrator is alone from the very beginning of the chain, at the level of the Companion. Gharīb Nisbī (Relative): the solitary narration only occurs later in the chain, not at the earliest level.' },
        { q: 'Does a ḥadīth need to be Mutawātir — or even ʿAzīz — to be authentic (Ṣaḥīḥ)?', a: 'No. Chain-count and authenticity are separate questions. A Gharīb ḥadīth (only one narrator in some generation) can still be perfectly Ṣaḥīḥ — authenticity depends on the reliability of the narrators, not how many chains carry the report.' },
      ],
      quiz: [
        { q: 'A ḥadīth narrated by only ONE person in some generation of its chain is called:', choices: ['Al-Gharīb', 'Al-ʿAzīz', 'Al-Mashhūr', 'Al-Mutawātir'], correct: 0 },
        { q: 'What kind of knowledge does a Mutawātir ḥadīth give?', choices: ['Certain, self-evident knowledge (Ilm al-Yaqīnī al-Badīhī)', 'Only probability (Ẓann)', 'No benefit at all', 'Knowledge only after checking every narrator'], correct: 0 },
        { q: 'Al-ʿAzīz requires a minimum of how many narrators in every generation?', choices: ['Two', 'One', 'Three', 'Ten'], correct: 0 },
        { q: 'True or false: a ḥadīth must be classified as ʿAzīz (at least) to be considered Ṣaḥīḥ.', choices: ['False — chain-count and authenticity are separate; even a Gharīb can be Ṣaḥīḥ', 'True — every Ṣaḥīḥ ḥadīth must have at least two chains'], correct: 0 },
      ]
    },
    {
      id: 'maqbul', icon: '✅', label: 'Al-Maqbūl — The Accepted Ḥadīth', subtitle: 'Ṣaḥīḥ and Ḥasan, li-Dhātihi and li-Ghayrihi', color: 'var(--burgundy-light)',
      intro: 'A Maqbūl (accepted) Āḥād ḥadīth comes in four grades, all built on the same five underlying conditions of authenticity — the grade just depends on how fully those conditions are met, and whether outside support (multiple chains) is needed to make up for a shortfall.',
      bullets: [
        { label: 'The Five Conditions (p.29)', text: "1) 'Ādil narrator (upright) 2) Tāmm al-Ḍabṭ (perfect memory) 3) Muttaṣil chain (unbroken) 4) free of hidden defect ('Illah Khafiyyah) 5) not Shādh (doesn't contradict someone more reliable)" },
        { label: "'Ādil Defined (p.30)", text: 'A person who abstains from major sins and unbecoming public conduct (e.g. shouting in public, keeping low company).' },
        { label: 'Ḍabṭ — Two Types (p.30)', text: "Ḍabṭ al-Ṣadr: perfect recall from memory, no delay or confusion.\nḌabṭ al-Kitābah: perfect, error-free written preservation." },
        { label: 'Ḥasan li-Dhātihi (p.32)', text: 'Same as Ṣaḥīḥ li-Dhātihi but with weaker Ḍabṭ — 4 of the 5 conditions are met.' },
        { label: 'The li-Ghayrihi Upgrades (p.32-33)', text: "Ṣaḥīḥ li-Ghayrihi: a Ḥasan li-Dhātihi elevated to Ṣaḥīḥ by multiple supporting chains.\nḤasan li-Ghayrihi: a weak (Ḍaʿīf) narration elevated to Ḥasan by multiple supporting chains." },
      ],
      qanda: [
        { q: 'What are the five conditions for a ḥadīth to be Ṣaḥīḥ li-Dhātihi?', a: "(1) The narrator must be 'Ādil (upright). (2) He must have Tāmm al-Ḍabṭ (perfect memory). (3) The chain (Sanad) must be Muttaṣil (unbroken). (4) It must be free of any hidden defect ('Illah Khafiyyah). (5) It must not be Shādh (contradicting a more reliable narrator)." },
        { q: "What's the difference between Ṣaḥīḥ li-Dhātihi and Ḥasan li-Dhātihi?", a: 'They share the same five conditions, except Ḥasan li-Dhātihi has a narrator whose Ḍabṭ (memory) is weaker than perfect — 4 of the 5 conditions are fully met, the fifth is only partial.' },
        { q: 'How can a Ḥasan ḥadīth become Ṣaḥīḥ li-Ghayrihi?', a: 'If the same Ḥasan li-Dhātihi ḥadīth is also narrated through several independent chains (Ṭuruq), those multiple chains make up for the individual weakness in memory, and the ḥadīth is upgraded to Ṣaḥīḥ li-Ghayrihi — "Ṣaḥīḥ on account of something else."' },
        { q: 'Are all Ṣaḥīḥ li-Dhātihi aḥādīth equal in strength?', a: 'No (p.31) — their rank varies with the qualities of their narrators. The order given is: (1) narrated in Bukhārī, (2) narrated in Muslim, (3) meeting the conditions of both, (4) meeting the conditions of Bukhārī alone, (5) meeting the conditions of Muslim alone.' },
      ],
      quiz: [
        { q: 'Which of these is NOT one of the five conditions of Ṣaḥīḥ li-Dhātihi?', choices: ['The ḥadīth must be Mutawātir', "The narrator must be 'Ādil", 'The chain must be Muttaṣil', 'The narrator must have perfect Ḍabṭ'], correct: 0 },
        { q: 'A ḥadīth meeting 4 of the 5 conditions of Ṣaḥīḥ, missing only perfect Ḍabṭ, is called:', choices: ['Ḥasan li-Dhātihi', 'Ṣaḥīḥ li-Ghayrihi', 'Ḍaʿīf', 'Mawḍūʿ'], correct: 0 },
        { q: 'What elevates a weak (Ḍaʿīf) narration to Ḥasan li-Ghayrihi?', choices: ['Multiple supporting chains making up for the individual weakness', 'A scholar simply declaring it acceptable', 'Its content matching the Qurʾān', 'Being narrated by Bukhārī specifically'], correct: 0 },
      ]
    },
    {
      id: 'ziyadah', icon: '➕', label: 'Additions & Corroboration', subtitle: 'Ziyādah, Mutābaʿah, Shāhid, Iʿtibār', color: 'var(--emerald-light)',
      intro: 'This section covers two related tools: how scholars judge an EXTRA piece of information added by one narrator that others omit (Ziyādah), and how narrations SUPPORT one another through corroborating chains and similar wording (Mutābaʿah / Shāhid), gathered through a process called Iʿtibār.',
      bullets: [
        { label: 'Ziyādah — The Basic Rule (p.34)', text: "A reliable narrator's addition is accepted so long as no more reliable (Awthaq) narrator contradicts it." },
        { label: 'Five Resulting Labels (p.35)', text: 'Maqbūl (accepted addition) · Maḥfūẓ (the preferred version when two Thiqāt contradict) · Shādh (the weaker of the two) · Maʿrūf (the reliable version when a Thiqah opposes a Ḍaʿīf) · Munkar (the Ḍaʿīf version in that case)' },
        { label: 'Mutābaʿah (p.36)', text: "A second narrator corroborates a chain that looked like a solitary (Fard Nisbī) narration. The corroborator is the Mutābiʿ." },
        { label: 'Shāhid (p.36)', text: 'A second, independently-chained ḥadīth whose TEXT (Matn) is similar in wording or meaning to the solitary narration — supporting its content rather than its exact chain.' },
        { label: 'Iʿtibār (p.36)', text: 'The deliberate practice of searching out Mutābiʿs and Shawāhid for a ḥadīth that looks Gharīb, to see whether it is genuinely supported elsewhere.' },
      ],
      qanda: [
        { q: 'What happens when two reliable (Thiqah) narrators contradict each other?', a: "The preferred, stronger version is called Maḥfūẓ; the weaker, rejected version is called Shādh. (If it's a Ḍaʿīf narrator contradicting a Thiqah instead, the labels become Maʿrūf and Munkar respectively.)" },
        { q: "What's the difference between Mutābaʿah and Shāhid?", a: 'Mutābaʿah is when a second narrator corroborates the same chain (Sanad) of a solitary narration. Shāhid is when a second, independently-chained ḥadīth has a similar text (Matn) — supporting the content, not the exact same chain.' },
        { q: 'What is Iʿtibār, and why do scholars do it?', a: 'It is the process of actively searching out Mutābiʿs and Shawāhid for a ḥadīth that appears to be Gharīb (solitary), to determine whether it is actually supported by other independent narrations.' },
        { q: 'What five classifications can result from evaluating an addition (Ziyādah)?', a: 'Maqbūl, Maḥfūẓ, Shādh, Maʿrūf, and Munkar — depending on whether the adding narrator is contradicted, and by whom.' },
      ],
      quiz: [
        { q: "When a Thiqah narrator's version is preferred over another Thiqah's contradicting version, the preferred one is called:", choices: ['Al-Maḥfūẓ', 'Al-Shādh', 'Al-Munkar', "Al-Maʿrūf"], correct: 0 },
        { q: 'A Mutābiʿ is:', choices: ["A narrator who corroborates another narrator's chain (Sanad)", "A narrator who corroborates only the MEANING of a hadith's text", 'A narrator known to lie', 'A narrator who contradicts reliable narrators'], correct: 0 },
        { q: 'What is the purpose of Iʿtibār?', choices: ['To search out corroborating chains and supporting narrations for an apparently solitary ḥadīth', 'To memorize a ḥadīth perfectly', 'To translate a ḥadīth into another language', 'To determine whether a ḥadīth is Mutawātir'], correct: 0 },
      ]
    },
    {
      id: 'taarud', icon: '⚖️', label: 'Maqbūl Ḥadīth & Contradiction', subtitle: 'Muḥkam, Nāsikh-Mansūkh, Tarjīḥ, Tawaqquf', color: 'var(--grey-accent)',
      intro: "Even among accepted (Maqbūl) ḥadīth, two authentic reports can appear to contradict each other. This section is Ibn Ḥajar's roadmap for resolving that: reconcile if possible, abrogate if one is provably later, prefer the stronger if neither works, or — as a last resort — withhold judgment.",
      bullets: [
        { label: 'Muḥkam (p.37)', text: 'An accepted ḥadīth completely free of contradiction — acted upon directly, no further work needed.' },
        { label: 'Mukhtalif al-Ḥadīth', text: 'Two contradictory-but-equal ḥadīth that CAN be reconciled (Jamʿ) — both are acted upon once reconciled.' },
        { label: 'Nāsikh / Mansūkh', text: 'When reconciliation is impossible but one ḥadīth is proven to be chronologically later, it abrogates (Nāsikh) the earlier one (Mansūkh).' },
        { label: 'Rājiḥ / Marjūḥ (Tarjīḥ)', text: "If neither reconciliation nor abrogation works, scholars give preference (Tarjīḥ) to the stronger report (Rājiḥ); the other becomes Marjūḥ." },
        { label: 'Tawaqquf', text: 'If none of Jamʿ, Naskh, or Tarjīḥ is possible, scholars withhold judgment entirely — no verdict is passed until later clarity emerges.' },
      ],
      qanda: [
        { q: 'What are the seven outcomes Ibn Ḥajar describes for a Maqbūl ḥadīth regarding possible contradiction?', a: '(1) Muḥkam — no contradiction. (2) Mukhtalif al-Ḥadīth — reconcilable contradiction. (3) Nāsikh — the abrogating, later ruling. (4) Mansūkh — the abrogated, earlier ruling. (5) Rājiḥ — the preferred of two unreconcilable ḥadīth. (6) Marjūḥ — the less preferred one. (7) Mutawaqqaf fīh — where no resolution is possible and no verdict is passed.' },
        { q: "What's the difference between Mukhtalif al-Ḥadīth and Nāsikh/Mansūkh?", a: 'Mukhtalif al-Ḥadīth means both contradictory ḥadīth can still be acted upon together once properly reconciled (Jamʿ) — neither is discarded. Nāsikh/Mansūkh means reconciliation was NOT possible, so the later-established ruling (Nāsikh) fully replaces the earlier one (Mansūkh), which is no longer acted upon.' },
        { q: 'When do scholars resort to Tawaqquf (suspension of judgment)?', a: 'Only when reconciliation (Jamʿ), abrogation (Naskh), and preference (Tarjīḥ) are all impossible — i.e., there is no way to determine which of two contradicting, equally-weighted ḥadīth should be acted upon.' },
        { q: 'What does Taʿāruḍ (contradiction) mean in this context, and why does it matter?', a: "It's when two pieces of evidence conflict such that acting on one necessarily excludes acting on the other. It matters because Islamic scholarship needs a rigorous, ordered method for resolving such conflicts rather than arbitrarily picking a side." },
      ],
      quiz: [
        { q: 'Two authentic ḥadīth that appear to contradict but CAN both be acted upon through reconciliation are called:', choices: ['Mukhtalif al-Ḥadīth', 'Nāsikh and Mansūkh', 'Muḥkam', 'Musalsal'], correct: 0 },
        { q: 'The abrogated (no-longer-applicable) ḥadīth in a Nāsikh/Mansūkh pair is called:', choices: ['Al-Mansūkh', 'Al-Nāsikh', 'Al-Rājiḥ', 'Al-Marjūḥ'], correct: 0 },
        { q: 'If reconciliation and abrogation are both impossible and neither ḥadīth is clearly stronger, scholars:', choices: ['Withhold judgment (Tawaqquf)', 'Automatically reject both ḥadīth', 'Automatically accept both without further thought', 'Declare both fabricated'], correct: 0 },
      ]
    },
    {
      id: 'saqt', icon: '❌', label: 'Rejection Through Omission', subtitle: "Muʿallaq, Mursal, Muʿḍal, Munqaṭiʿ, Mudallas", color: 'var(--burgundy)',
      intro: 'A Mardūd (rejected) ḥadīth results from either Saqṭ (a dropped/omitted narrator) or Ṭaʿn (a criticized narrator). This covers Saqṭ — both the obvious, visible kind and the hidden kind that takes real expertise to detect.',
      bullets: [
        { label: 'Two Causes of Radd (p.40)', text: 'Saqṭ — omission, a narrator missing from the chain.\nṬaʿn — criticism, a flaw discovered in a narrator himself.' },
        { label: 'Muʿallaq (p.40)', text: 'The beginning of the chain (closest to the author/compiler) is dropped entirely — the author just says "the Prophet ﷺ said..."' },
        { label: 'Mursal (p.41)', text: "The Ṣaḥābī is dropped — a Tābiʿī attributes something directly to the Prophet ﷺ without the Companion in between." },
        { label: 'Muʿḍal vs Munqaṭiʿ (p.42)', text: 'Muʿḍal: TWO or more narrators dropped consecutively from the middle.\nMunqaṭiʿ: only ONE dropped from the middle, or more than one but NOT consecutively.' },
        { label: 'Hidden Omission (p.42-47)', text: "Mudallas: uses ambiguous wording (like \"ʿan\") implying a meeting that never actually happened.\nMursal Khafī: narrating from a contemporary the narrator never actually met at all." },
      ],
      qanda: [
        { q: 'What are the two main causes of a ḥadīth being rejected (Mardūd)?', a: 'Saqṭ (Omission) — a narrator is missing from the chain — and Ṭaʿn (Criticism) — a flaw or weakness is found in one of the narrators themselves.' },
        { q: 'How does a Muʿallaq ḥadīth differ from a Mursal ḥadīth?', a: 'Muʿallaq drops the BEGINNING of the chain — the part closest to the compiler/author. Mursal drops the END of the chain — specifically, the Ṣaḥābī is missing, so a Tābiʿī reports directly from the Prophet ﷺ.' },
        { q: "What's the difference between Muʿḍal and Munqaṭiʿ?", a: 'Muʿḍal is when TWO OR MORE consecutive narrators are missing from the middle of the chain. Munqaṭiʿ is when only ONE narrator is missing from the middle, or more than one but not consecutively.' },
        { q: 'What is Tadlīs, and why is it "hidden" rather than an obvious omission?', a: "Tadlīs is when a narrator uses wording (like \"ʿan\" — from) that implies he met and heard directly from someone, when he actually did not. Unlike an openly acknowledged gap, this looks like a complete, connected chain on the surface — the break is only discovered through careful cross-checking, which is why it's classified as hidden (Khafī) rather than apparent (Wāḍiḥ) omission." },
      ],
      quiz: [
        { q: "When a Tābiʿī narrates directly from the Prophet ﷺ without mentioning the Ṣaḥābī in between, the ḥadīth is called:", choices: ['Mursal', 'Muʿallaq', 'Muʿḍal', 'Munqaṭiʿ'], correct: 0 },
        { q: 'A ḥadīth missing TWO OR MORE consecutive narrators from the middle of its chain is:', choices: ['Muʿḍal', 'Munqaṭiʿ', 'Mursal', 'Muʿallaq'], correct: 0 },
        { q: 'What distinguishes Tadlīs from an openly-acknowledged Inqiṭāʿ (disconnection)?', choices: ['The narrator uses ambiguous wording implying a meeting that never happened', 'The narrator openly admits he never met the person', 'The narrator was not yet born', 'The chain has no narrators at all'], correct: 0 },
        { q: 'A ḥadīth missing narrators at the very beginning of its chain (nearest the compiler) is called:', choices: ['Muʿallaq', 'Mursal', 'Musalsal', 'Musnad'], correct: 0 },
      ]
    },
    {
      id: 'tan', icon: '🔍', label: 'The Ten Causes of Criticism', subtitle: 'Al-Ṭaʿn — Why a Narrator Is Rejected', color: 'var(--burgundy-deep)',
      intro: "Ṭaʿn (criticism of the narrator himself, rather than a gap in the chain) is the second main cause of rejection. Ibn Ḥajar lists exactly ten specific reasons a narrator can be criticized, and each one produces its own distinct technical label for the resulting ḥadīth.",
      bullets: [
        { label: '1–2: Lying', text: 'Deliberate lying about the Prophet ﷺ → Mawḍūʿ (fabricated).\nMerely accused of lying, unproven → Matrūk (discarded).' },
        { label: '3–5: Errors & Sin', text: 'Severe/frequent mistakes, extreme carelessness, or open transgression (Fisq) → all three result in Munkar.' },
        { label: '6–7: Confusion & Contradiction', text: 'Unintentional error (Wahm) → Muʿallal (hidden defect).\nContradicting reliable narrators (Mukhālafat al-Thiqāt) → Shādh or Munkar.' },
        { label: '8: Jahālah (Unknown Status)', text: "Majhūl al-ʿAyn: only ONE person narrates from him — his identity is essentially unknown.\nMajhūl al-Ḥāl (a.k.a. Mastūr): several narrate from him, but no Imām has verified his reliability." },
        { label: '9–10: Bidʿah & Weak Memory', text: "Bidʿah of Kufr → narration rejected outright. Bidʿah of Fisq → conditionally accepted.\nSūʾ al-Ḥifẓ: permanent (Lāzim) → Shādh; temporary/old-age (Ṭāriʾ) → Mukhtalaṭ (only pre-decline narrations accepted)." },
      ],
      qanda: [
        { q: 'What are the ten causes of Ṭaʿn that Ibn Ḥajar lists?', a: "(1) Kidhb — lying, (2) Tuhmat al-Kidhb — accusation of lying, (3) Fuḥsh al-Ghalaṭ — severe mistakes, (4) Kathrat al-Ghaflah — extreme carelessness, (5) Al-Fisq — open transgression, (6) Al-Wahm — unintentional error, (7) Mukhālafat al-Thiqāt — contradicting reliable narrators, (8) Al-Jahālah — unknown status, (9) Al-Bidʿah — innovation, (10) Sūʾ al-Ḥifẓ — weakness of memory." },
        { q: "What's the difference between Majhūl al-ʿAyn and Majhūl al-Ḥāl (Mastūr)?", a: 'Majhūl al-ʿAyn: only ONE person has ever narrated from him, so his identity and reliability are essentially unknown. Majhūl al-Ḥāl / Mastūr: MORE than one person narrates from him, but no recognized Imām has declared him Thiqah (reliable) — his outward reputation may be fine, but his standing is unverified.' },
        { q: 'What are the two types of Bidʿah, and how does each affect acceptance of the narrator?', a: 'Bidʿah of Kufr — an innovation that takes a person entirely outside Islam (e.g., believing a Companion literally became divine); his narrations are NOT accepted at all. Bidʿah of Fisq — an innovation that leads to sin but not disbelief; his narrations can be conditionally accepted if he meets several safeguards (doesn\'t reject anything proven by Tawātur, doesn\'t distort Qurʾān/ḥadīth to support his view, doesn\'t consider lying permissible, and his narration has nothing to do with his innovated belief).' },
        { q: 'What is Mukhtalaṭ, and how are that narrator\'s ḥadīth treated?', a: "Mukhtalaṭ describes a narrator whose memory weakened later in life — typically from old age or losing his notes. His narrations from BEFORE the decline are accepted as normal; those made AFTER the decline are not." },
      ],
      quiz: [
        { q: 'A narrator who intentionally fabricates a statement and attributes it to the Prophet ﷺ produces a ḥadīth called:', choices: ["Mawḍūʿ (fabricated)", 'Munkar', 'Shādh', "Muʿallal"], correct: 0 },
        { q: 'A narrator known to only ONE person, whose identity is essentially unknown, is:', choices: ["Majhūl al-ʿAyn", "Majhūl al-Ḥāl", "Thiqah", "Mastūr"], correct: 0 },
        { q: 'Innovation that takes a person entirely outside of Islam is called:', choices: ['Bidʿah of Kufr', 'Bidʿah of Fisq', "Taʾwīl", "Taḥrīf"], correct: 0, explain: 'Narrations from someone with Bidʿah of Kufr are rejected outright; Bidʿah of Fisq narrations can be conditionally accepted.' },
        { q: "A narrator whose memory permanently weakened, whose errors now equal or exceed his correct narrations, is described as having:", choices: ["Sūʾ al-Ḥifẓ (weakness of memory)", 'Thiqah Thiqah status', 'Ṣaḥābī status', 'Kadhdhab (proven liar) status automatically'], correct: 0 },
        { q: 'What is Mukhtalaṭ?', choices: ['A narrator whose memory declined later in life — earlier narrations accepted, later ones not', 'A ḥadīth with two irreconcilable chains', 'A narrator who lied about meeting the Prophet ﷺ', 'A fabricated ḥadīth'], correct: 0 },
      ]
    },
    {
      id: 'mukhalafah', icon: '🔄', label: 'Types of Contradiction', subtitle: 'Mukhālafah — Six Forms', color: 'var(--emerald)',
      intro: "When a narrator's report doesn't match what more reliable narrators report, the specific MANNER of that mismatch determines its technical name — Ibn Ḥajar lists six distinct forms.",
      bullets: [
        { label: 'Mudraj al-Isnād (p.54)', text: "The chain itself gets mixed — e.g. combining two separate chains into one, or mistaking a Shaykh's own remarks for part of the ḥadīth text." },
        { label: 'Mudraj al-Matn (p.54)', text: "Extra wording gets folded into the ḥadīth's text so that the original and the addition can no longer be told apart." },
        { label: 'Maqlūb (p.55)', text: 'The order of the text or chain is reversed — e.g. mixing up two similar narrator names like Ibn ʿUmar and Ibn ʿAmr.' },
        { label: 'Muḍṭarib', text: 'Multiple conflicting versions exist with NO way to prefer one over the other.' },
        { label: 'Muṣaḥḥaf / Muḥarraf (p.58)', text: 'Muṣaḥḥaf: wording changes from misreading a DOT on a letter.\nMuḥarraf: wording changes from misreading a VOWEL/diacritic, letters unchanged.' },
      ],
      qanda: [
        { q: 'What are the six forms of Mukhālafah (contradiction) Ibn Ḥajar lists?', a: '(1) Mudraj al-Isnād — mixed chain, (2) Mudraj al-Matn — mixed text, (3) Maqlūb — reversed order, (4) Mazīd fī al-Muttaṣil — an extra narrator added, (5) Muḍṭarab — irreconcilable conflicting versions, (6) Muṣaḥḥaf/Muḥarraf — altered letters or vowels.' },
        { q: "What's the difference between Mudraj al-Isnād and Mudraj al-Matn?", a: 'Mudraj al-Isnād is when the CHAIN gets mixed or altered (e.g. combining chains, mistaking a comment for part of the Sanad). Mudraj al-Matn is when the TEXT of the ḥadīth gets extra wording folded in that becomes inseparable from the original.' },
        { q: 'What makes a ḥadīth Muḍṭarib, and why is that particularly problematic?', a: "It's Muḍṭarib when there are multiple conflicting versions and NO way to determine which is more reliable (no Tarjīḥ possible). It's problematic because, unlike most other contradiction types, there's no resolution path at all — scholars are simply left without a preferred version." },
        { q: "What's the difference between Muṣaḥḥaf and Muḥarraf?", a: 'Muṣaḥḥaf is a change caused by misreading the dots (Nuqṭah) on a letter — e.g. narrating "Sittān" as "Shayʾān." Muḥarraf is a change in vowelization (Iʿrāb) while the letters themselves, dots included, stay exactly the same.' },
      ],
      quiz: [
        { q: 'When the order of narrators or parts of a text get reversed (e.g. swapping two similar names), the ḥadīth is called:', choices: ['Maqlūb', 'Muḍṭarib', 'Mudraj', 'Muṣaḥḥaf'], correct: 0 },
        { q: 'A ḥadīth with irreconcilable conflicting versions, where no version can be preferred, is called:', choices: ['Muḍṭarib', 'Maqlūb', "Maʿrūf", "Maḥfūẓ"], correct: 0 },
        { q: "When a ḥadīth's wording changes because someone misread the DOTS on a letter, this is called:", choices: ['Muṣaḥḥaf', 'Muḥarraf', 'Mudraj', 'Maqlūb'], correct: 0, explain: 'Muḥarraf specifically refers to a change in vowelization/diacritics while the letters (dots included) stay the same.' },
      ]
    },
    {
      id: 'isnad-end', icon: '🎯', label: 'Classifying by End of the Chain', subtitle: 'Marfūʿ, Mawqūf, Maqṭūʿ, Musnad', color: 'var(--burgundy-light)',
      intro: "A separate classification axis from chain-quality: WHO the report is ultimately attributed to — the Prophet ﷺ himself, a Companion, or a Successor — and separately, whether that chain of attribution looks fully connected.",
      bullets: [
        { label: "Marfūʿ (p.69)", text: 'Attributed to the Prophet ﷺ himself — his saying (Qawl), action (Fiʿl), or tacit approval (Taqrīr).' },
        { label: 'Mawqūf (p.69)', text: "Attributed only to a Ṣaḥābī's own saying, action, or approval. Also called Athar." },
        { label: 'Maqṭūʿ (p.69)', text: "Attributed to a Tābiʿī or below. Mawqūf and Maqṭūʿ are BOTH called Athar." },
        { label: 'Ṣaḥābī & Tābiʿī Defined (p.74)', text: "Ṣaḥābī: met the Prophet ﷺ believing in him, and died upon Islam.\nTābiʿī: met a (believing) Ṣaḥābī and died upon Īmān." },
        { label: 'Al-Musnad (p.75)', text: 'A Marfūʿ report of a Ṣaḥābī whose chain APPEARS fully connected (Muttaṣil) — even a hidden break can still count as Musnad if it looks connected on the surface.' },
      ],
      qanda: [
        { q: "What are the three levels a ḥadīth's chain of attribution can end at?", a: "Marfūʿ (ending at the Prophet ﷺ), Mawqūf (ending at a Ṣaḥābī), and Maqṭūʿ (ending at a Tābiʿī or below)." },
        { q: "Can something be Marfūʿ even if it's a Companion speaking, not directly quoting the Prophet ﷺ?", a: "Yes — this is called Marfūʿ Ḥukmī. If a Ṣaḥābī states something that couldn't come from personal opinion (like details about the start of creation), performs an action unrelated to independent reasoning, or does something in the Prophet's ﷺ presence that he didn't object to, it's treated as if it were Marfūʿ." },
        { q: 'How are Ṣaḥābī and Tābiʿī defined in the text?', a: 'A Ṣaḥābī is someone who met the Prophet ﷺ while believing in him and died upon Islam. A Tābiʿī is someone who met a (believing) Ṣaḥābī, while himself believing, and died upon Īmān.' },
        { q: 'What is the difference between Mawqūf/Maqṭūʿ (both called "Athar") and Musnad?', a: "Mawqūf and Maqṭūʿ describe WHERE the attribution stops (a Companion or below). Musnad specifically describes a Marfūʿ (Prophetic) report whose chain appears fully connected — it's a statement about chain quality/completeness, not about who the report is attributed to." },
      ],
      quiz: [
        { q: "A report attributed only to a Companion's own words or actions (not the Prophet ﷺ) is called:", choices: ['Mawqūf', "Marfūʿ", "Maqṭūʿ", 'Musnad'], correct: 0 },
        { q: 'A report attributed to a Tābiʿī or someone below him is called:', choices: ["Maqṭūʿ", "Mawqūf", "Marfūʿ", 'Musalsal'], correct: 0 },
        { q: 'Who qualifies as a Ṣaḥābī according to the definition given?', choices: ['Someone who met the Prophet ﷺ believing in him and died upon Islam', "Anyone who lived during the Prophet's ﷺ lifetime, regardless of belief", 'Anyone who met a Companion', 'Only the first four Caliphs'], correct: 0 },
        { q: 'A Musnad ḥadīth is specifically:', choices: ["A Marfūʿ report of a Ṣaḥābī with an apparently connected (Muttaṣil) chain", 'Any ḥadīth regardless of chain quality', "A report attributed only to a Tābiʿī", 'A fabricated ḥadīth'], correct: 0 },
      ]
    },
    {
      id: 'narrators', icon: '👥', label: 'Relationships Between Narrators', subtitle: 'Aqrān, Mudabbaj, Sābiq-Lāḥiq, Musalsal', color: 'var(--emerald-light)',
      intro: 'Beyond judging each chain in isolation, scholars also studied the RELATIONSHIPS between narrators themselves — their relative seniority, the timing of their deaths, and even shared quirks in how they phrased their narrations.',
      bullets: [
        { label: 'Riwāyat al-Aqrān (p.81)', text: 'Two narrators who are contemporaries/equals — in age, or by sharing the same teacher.' },
        { label: 'Al-Mudabbaj (p.82)', text: 'A specific case of Aqrān where the two contemporaries narrate FROM each other. (Every Mudabbaj is Aqrān, not the reverse.)' },
        { label: "Akābir 'an al-Aṣāghir / Aṣāghir 'an al-Akābir (p.82-83)", text: 'A senior narrating from a junior (in age, rank, or knowledge) vs. the far more common reverse — a junior narrating from a senior.' },
        { label: 'Al-Sābiq wal-Lāḥiq (p.83-84)', text: 'Two narrators sharing the same teacher, one of whom died much earlier (up to 150 years apart on record!). Narrating through the later-dying Lāḥiq shortens the chain.' },
        { label: 'Al-Musalsal (p.87-88)', text: 'Every single narrator in the chain shares the same wording, phrase, or action while transmitting — e.g. all saying "Samiʿtu," or all interlacing their fingers at the same point.' },
      ],
      qanda: [
        { q: 'What is Al-Mudabbaj, and how does it relate to Riwāyat al-Aqrān?', a: 'Mudabbaj is a specific type of Riwāyat al-Aqrān where the two contemporary narrators narrate FROM each other, not just being equals in age or teacher. Every Mudabbaj case is technically also Aqrān, but not every Aqrān case is Mudabbaj — Aqrān is the general category, Mudabbaj the specific one.' },
        { q: 'What is the most common relationship pattern between a narrator and his source?', a: "Aṣāghir 'an al-Akābir — a junior narrating from a senior. This is by far the most common pattern in ḥadīth transmission, as most students narrate from older teachers." },
        { q: 'What is Al-Sābiq wal-Lāḥiq, and why does it matter for chain length?', a: 'It describes two narrators who share the same teacher, where one (the Sābiq) dies much earlier than the other (the Lāḥiq) — sometimes up to 150 years apart. Narrating through the Lāḥiq (who died later) gives a shorter, higher chain (fewer intermediate narrators) than narrating through the long-dead Sābiq.' },
        { q: 'What is a Musalsal ḥadīth? Give an example type.', a: "A ḥadīth where every narrator in the chain shares the same distinguishing feature while transmitting it. Examples: Musalsal in wording (every narrator says \"Samiʿtu\" or \"Ḥaddathanā\"), Musalsal in speech (every narrator addressed his student with the exact same words, like \"I love you for the sake of Allāh, O Muʿādh\"), or Musalsal in action (every narrator performed the same physical action, like interlacing fingers, while narrating)." },
      ],
      quiz: [
        { q: 'When two contemporary narrators narrate FROM EACH OTHER, this specific relationship is called:', choices: ['Al-Mudabbaj', 'Riwāyat al-Aqrān (in general)', 'Al-Sābiq wal-Lāḥiq', 'Al-Musalsal'], correct: 0 },
        { q: 'The most common narrator relationship in ḥadīth transmission is:', choices: ["A junior narrating from a senior (Aṣāghir 'an al-Akābir)", 'A senior narrating from a junior', 'Two equals narrating from each other', 'A narrator quoting himself'], correct: 0 },
        { q: 'What is the recorded maximum age gap between a Sābiq and a Lāḥiq sharing the same teacher?', choices: ['150 years', '10 years', '500 years', 'There is no recorded maximum mentioned'], correct: 0 },
        { q: 'A ḥadīth where every narrator in the chain used the exact same wording (e.g. all said "I heard...") is called:', choices: ['Musalsal', 'Mudabbaj', 'Mursal', "Maqṭūʿ"], correct: 0 },
      ]
    },
    {
      id: 'ada', icon: '🗣️', label: 'Words Used to Narrate', subtitle: 'Ṣīghat al-Adāʾ and Ijāzah', color: 'var(--grey-accent)',
      intro: "The exact WORDING a narrator uses to describe how he received a ḥadīth carries real weight — from \"I heard\" (the strongest, clearest form) down through several tiers of permission-based transmission (Ijāzah).",
      bullets: [
        { label: 'Highest Rank (p.89-90)', text: 'Samiʿtu / Ḥaddathanī ("I heard" / "he narrated to me") — direct, singular hearing. The clearest and strongest form.' },
        { label: 'Reading Back (p.90)', text: "Akhbaranī / Qaraʾtu ʿalayhi (\"he informed me\" / \"I read to him\") — used when the STUDENT reads back to the teacher, who listens and confirms." },
        { label: 'Lower Tiers (Ijāzah-based)', text: "Anbaʾanī, Nāwalanī, Shāfahanī, Kataba ilayya — progressively lower ranks, each tied to a different form of Ijāzah (permission) rather than direct hearing." },
        { label: "Lowest — 'An", text: '"An" ("from") is the most ambiguous wording, and the one most associated with the possible risk of hidden Tadlīs.' },
        { label: 'Ijāzah — Valid & Invalid Forms', text: "General Ijāzah (permission given to a wide group) is valid. Ijāzah lil-Maʿdūm — permission granted to someone not yet born/existing — is NOT valid." },
      ],
      qanda: [
        { q: 'Why does "Samiʿtu" (I heard) rank higher than "ʿan" (from) as a narration formula?', a: '"Samiʿtu" states unambiguously that the narrator directly and personally heard the ḥadīth from the person named. "ʿan" is vague — it implies a connection without confirming direct hearing, which is exactly the ambiguity that a Mudallis (one who practices Tadlīs) exploits.' },
        { q: 'What is Ijāzah, and give one valid and one invalid type mentioned in the text.', a: 'Ijāzah is permission granted by a teacher (Shaykh) for a student to narrate on his authority, without requiring the student to have directly heard the material. A general Ijāzah given to a group of people is valid. An Ijāzah given to someone not yet born (Ijāzah lil-Maʿdūm) is explicitly NOT valid.' },
        { q: "What's the practical difference between Akhbaranī and Samiʿtu?", a: 'Samiʿtu/Ḥaddathanī describes the teacher speaking and the student simply listening. Akhbaranī/Qaraʾtu ʿalayhi describes the reverse direction — the STUDENT reads the material aloud TO the teacher, who listens and approves it.' },
        { q: 'Why is the wording "ʿan" considered risky in terms of potential Tadlīs?', a: 'Because "ʿan" only implies a possible connection between narrators without explicitly confirming that direct hearing (Simāʿ) actually took place — which is precisely the gap a Mudallis relies on to make an unmet or unheard source look like a direct one.' },
      ],
      quiz: [
        { q: 'Which narration formula ranks HIGHEST in reliability?', choices: ['"Samiʿtu" (I heard) / "Ḥaddathanī" (he narrated to me)', '"ʿAn" (from)', '"Kataba ilayya" (he wrote to me)', '"Shāfahanī" (he orally authorized me)'], correct: 0 },
        { q: 'Giving Ijāzah (permission to narrate) to a person not yet born is:', choices: ['Not valid', 'Valid and commonly practiced', 'The strongest form of Ijāzah', 'Required for every narration'], correct: 0 },
        { q: 'Which wording is most associated with the RISK of hidden Tadlīs?', choices: ['"ʿAn" (from)', '"Samiʿtu" (I heard)', '"Ḥaddathanā" (he narrated to us)', '"Qaraʾtu ʿalayhi" (I read to him)'], correct: 0 },
      ]
    },
    {
      id: 'khatimah', icon: '🎓', label: 'The Conclusion', subtitle: "Ṭabaqāt, Jarḥ wa Taʿdīl, Adab, and Compilations", color: 'var(--burgundy)',
      intro: "Ibn Ḥajar closes with the practical matters every serious student of ḥadīth needs: knowing narrator generations, the precise vocabulary of criticism and praise, proper etiquette, and how the great ḥadīth collections are organized.",
      bullets: [
        { label: 'The 12 Ṭabaqāt (p.100-101)', text: 'From the Ṣaḥābah down through generations of Tābiʿūn and their students, ending with scholars like al-Tirmidhī — based on Taqrīb al-Tahdhīb.' },
        { label: 'Jarḥ (Criticism) Ranks (p.102)', text: 'From lightest ("Layyin" / "something is said about him") to worst ("the greatest liar of his time").' },
        { label: 'Taʿdīl (Praise) Ranks (p.103)', text: 'From lightest ("Maqbūl, only with a corroborator") to highest ("the most reliable of people").' },
        { label: 'Key Rule (p.105-106)', text: 'Jarḥ takes precedence over Taʿdīl IF the critic is a qualified scholar who clearly states his reasons (Jarḥ Mubayyan).' },
        { label: 'Adab & Compilation Types', text: 'Etiquette is expected of both the Muḥaddith (sincerity, humility) and the student (respect, attentiveness). Compilations are organized variously — by Ṣaḥābī (Masānīd), by topic (Abwāb), by narrator defects (ʿIlal), and more.' },
      ],
      qanda: [
        { q: 'What are the 12 Ṭabaqāt (generations), broadly?', a: 'They run from the Ṣaḥābah (highest rank) through senior, middle, and junior Tābiʿūn, then senior, middle, and junior Tabaʿ al-Tābiʿīn, and finally three further generations of their students — ending with scholars like al-Tirmidhī. Example early figure: Saʿīd ibn al-Musayyab (senior Tābiʿī); example late figure: al-Tirmidhī.' },
        { q: 'What does it mean that "Jarḥ takes precedence over Taʿdīl," and under what condition?', a: 'If a qualified scholar criticizes (Jarḥ) a narrator whom another scholar has praised (Taʿdīl), the criticism generally wins out — PROVIDED that the critic clearly explains his specific reasons (this is called Jarḥ Mubayyan). If no Imām has praised a criticized narrator at all, even an unspecified (Mujmal) criticism is accepted.' },
        { q: 'Name three etiquettes expected of a student of ḥadīth.', a: "Among those listed: keeping correct intention (Niyyah), respecting the teacher, not being shy to ask questions, being punctual, listening carefully and taking notes, staying far from sin, and avoiding backbiting (Ghībah) and idle talk." },
        { q: "What's the difference between a Musnad-style compilation (like Musnad Aḥmad) and a Sunan-style compilation (like Sunan Abī Dāwūd)?", a: 'A Musnad organizes ḥadīth by which Ṣaḥābī narrated them — all of one Companion\'s narrations grouped together, regardless of topic. A Sunan organizes ḥadīth by Fiqh topic/chapter (legal matters), regardless of which Companion narrated them.' },
      ],
      quiz: [
        { q: 'When does criticism (Jarḥ) of a narrator take precedence over praise (Taʿdīl) of him?', choices: ['When the criticism comes from a qualified scholar who clearly states his reasons (Jarḥ Mubayyan)', 'Never — praise always wins', 'Only if the critic is more famous than the one who praised', 'Only if two critics happen to agree'], correct: 0 },
        { q: 'A ḥadīth compilation organized by grouping all narrations of each individual Companion together is called:', choices: ['Musnad', 'Sunan', "Jāmiʿ", "ʿIlal"], correct: 0 },
        { q: 'Which of these is an expected etiquette of the STUDENT of ḥadīth?', choices: ['Being punctual, listening carefully, and never being shy to ask questions', 'Correcting the teacher publicly whenever possible', 'Avoiding note-taking to rely on memory only', 'Choosing only the easiest narrations to study'], correct: 0 },
      ]
    },
    {
      id: 'summary', icon: '📊', label: 'Master Summary', subtitle: 'The Complete Classification Tree', color: 'var(--burgundy-deep)',
      intro: 'Pulling every classification in this book together into one reference: by number of chains, by acceptance or rejection, and by where the chain of attribution ends.',
      bullets: [
        { label: 'By Number of Chains', text: "Khabar\n├── Mutawātir — unlimited chains → certain knowledge\n└── Āḥād — limited chains\n    ├── Mashhūr / Mustafīḍ — more than 2 chains\n    ├── ʿAzīz — minimum 2 in every generation\n    └── Gharīb — only 1 in some generation" },
        { label: 'By Acceptance or Rejection', text: "Āḥād\n├── Maqbūl (Accepted)\n│   ├── Ṣaḥīḥ li-Dhātihi — all 5 conditions met\n│   ├── Ṣaḥīḥ li-Ghayrihi — Ḥasan elevated by multiple chains\n│   ├── Ḥasan li-Dhātihi — 4 of 5 conditions, weak Ḍabṭ\n│   └── Ḥasan li-Ghayrihi — weak, elevated by multiple chains\n└── Mardūd (Rejected)\n    ├── Saqṭ (Omission): Muʿallaq, Mursal, Muʿḍal, Munqaṭiʿ, Mudallas, Mursal Khafī\n    └── Ṭaʿn (Criticism, 10 causes): Mawḍūʿ, Matrūk, Munkar, Muʿallal, Shādh, Majhūl, Mubtadaʿ, Mukhtalaṭ" },
        { label: 'By End of the Isnād', text: "├── Marfūʿ — reaches the Prophet ﷺ\n├── Mawqūf — reaches a Ṣaḥābī\n└── Maqṭūʿ — reaches a Tābiʿī or below" },
      ],
      qanda: [
        { q: 'Which single label applies to an Āḥād ḥadīth that meets all 5 conditions of authenticity?', a: 'Ṣaḥīḥ li-Dhātihi — it satisfies every condition in its own right, without needing outside support from other chains.' },
        { q: 'Name one classification that results from Saqṭ and one that results from Ṭaʿn.', a: 'From Saqṭ (omission): e.g. Mursal (the Ṣaḥābī is dropped) or Muʿallaq (the beginning of the chain is dropped). From Ṭaʿn (criticism): e.g. Mawḍūʿ (fabricated, from deliberate lying) or Munkar (from severe mistakes or contradicting reliable narrators).' },
        { q: "What are the three possible 'ends' of an isnād discussed in this book?", a: 'Marfūʿ (ending at the Prophet ﷺ), Mawqūf (ending at a Ṣaḥābī), and Maqṭūʿ (ending at a Tābiʿī or below).' },
      ],
      quiz: [
        { q: 'A ḥadīth with unlimited chains so numerous that collective lying is impossible is:', choices: ['Mutawātir', 'Āḥād', "ʿAzīz", 'Gharīb'], correct: 0 },
        { q: 'Which classification comes from a hidden DEFECT discovered through Wahm (unintentional error)?', choices: ["Muʿallal", 'Musalsal', 'Musnad', "Marfūʿ"], correct: 0 },
        { q: "A report attributed to a Tābiʿī (not the Prophet ﷺ or a Companion) is called:", choices: ["Maqṭūʿ", "Marfūʿ", 'Mawqūf', "ʿAzīz"], correct: 0 },
        { q: "What describes a reliable narrator's addition being accepted because no more reliable narrator opposes it?", choices: ['Maqbūl / Maḥfūẓ', 'Shādh', 'Munkar', 'Matrūk'], correct: 0 },
      ]
    },
  ]
});
