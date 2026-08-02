/* XENOS NOTES — book module
 * To add a new book: copy this file's shape, fill in the metadata + sections, save
 * it as books/<your-slug>.js, then add one <script> line in index.html. That's it —
 * the shared engine (app.js) handles rendering, navigation, search, and styling. */
XenosBooks.register({
  slug: 'rules-of-hadeeth',
  title: 'Rules Governing the Criticism of Ḥadīth',
  subtitle: 'By Dr. Mahmoud At-Ṭaḥḥān · A Guide to Muṣṭalaḥ al-Ḥadīth',
  icon: '🔎',
  category: 'Ilm al-Ḥadīth',
  arabicBg: 'قواعد',
  tags: ['Muṣṭalaḥ al-Ḥadīth', 'Isnād', 'Rijāl', 'Ṣaḥīḥ', 'Ḍaʿīf'],
  footer: 'Dr. Mahmoud At-Ṭaḥḥān · "Rules Governing the Criticism of Ḥadeeth"',

  sections: [
    {
      id: 'intro', icon: '📖', label: 'The Isnād and the Birth of Muṣṭalaḥ al-Ḥadīth', subtitle: 'Why the Chain of Narration Matters', color: 'var(--burgundy)',
      intro: 'A ḥadīth is made of two parts: the matn (the text itself) and the isnād (the chain of reporters who transmitted it). At-Ṭaḥḥān opens by explaining why the isnād became indispensable — a reasonable-sounding text still needs a reliable chain to be accepted, since without that discipline anyone could attribute anything to the Prophet ﷺ.',
      bullets: [
        { label: "Ibn al-Mubārak's Famous Statement", text: '"The isnād is part of the religion: had it not been for the isnād, whoever wished to would have said whatever he liked."' },
        { label: 'How the Need Arose', text: 'Companions quoted the Prophet ﷺ directly; some Successors quoted him through a Companion, others omitted that link entirely (a mursal ḥadīth) — creating the need to verify every chain' },
        { label: 'First to Use the Isnād', text: 'Imām Mālik said the first to systematically employ the isnād was Ibn Shihāb az-Zuhrī (d. 124 AH)' },
        { label: 'Seven Ways Ḥadīth Are Classified', text: '1) By authority referenced (marfūʿ/mawqūf/maqṭūʿ)\n2) By chain continuity (musnad/mursal/munqaṭiʿ, etc.)\n3) By number of reporters (mutawātir/āḥād)\n4) By wording used to report (ʿan, ḥaddathanā, etc.)\n5) By nature of matn/isnād (shādhdh, munkar, mudraj)\n6) By hidden defects (muʿallal)\n7) By reporter reliability (ṣaḥīḥ/ḥasan/ḍaʿīf/mawḍūʿ)' },
        { label: 'Rijāl al-Ḥadīth', text: "Muṣṭalaḥ al-Ḥadīth is inseparable from Rijāl al-Ḥadīth (the study of the reporters themselves) — major works include al-Mizzī's Tahdhīb al-Kamāl and Ibn Ḥajar's Taqrīb al-Tahdhīb" },
      ],
      qanda: [
        { q: "Why couldn't a hadith just be accepted on the strength of its text (matn) alone?", a: "Because a statement can sound perfectly reasonable and pious while being entirely fabricated. Without a chain of named, individually-verifiable reporters back to the Prophet ﷺ, there is no way to distinguish a genuine prophetic statement from something someone simply made up and attributed to him — which is exactly what Ibn al-Mubārak's statement warns against." },
      ],
      quiz: [
        { q: 'What are the two components of a ḥadīth, according to this section?', choices: ['The title and the author', 'The Arabic text and its translation', 'The matn (text) and the isnād (chain of reporters)', 'The chapter and the verse'], correct: 2 },
        { q: 'Who did Imām Mālik credit as the first to systematically use the isnād?', choices: ['Abū Hurayrah', 'Imām al-Bukhārī', "Ibn al-Mubārak", 'Ibn Shihāb az-Zuhrī'], correct: 3 },
        { q: 'What does Ibn al-Mubārak\'s famous statement say the isnād is part of?', choices: ['A modern innovation with no early basis', 'Part of Arabic grammar only', 'Part of the religion itself', 'A purely academic exercise with no religious weight'], correct: 2 },
        { q: 'What is a mursal ḥadīth, as introduced in this section?', choices: ['A ḥadīth reported by over sixty Companions', 'A narration where a Successor omits the Companion link entirely', 'A ḥadīth found only in one book', 'A ḥadīth with a fabricated text'], correct: 1 },
        { q: 'Which of these is listed as one of the seven ways ḥadīth are classified in this section?', choices: ['By the reporter\'s home country', 'By the number of pages in the collection', 'By the wording used to report (ʿan, ḥaddathanā, etc.)', 'By the century in which it was written down'], correct: 2 },
        { q: 'What discipline does this section say is inseparable from Muṣṭalaḥ al-Ḥadīth?', choices: ['Islamic jurisprudence exclusively', 'Arabic poetry', 'Rijāl al-Ḥadīth — the study of the reporters themselves', 'Qur\'anic recitation (Tajwīd)'], correct: 2 },
      ]
    },
    {
      id: 'by-authority', icon: '👤', label: 'Classified by the Authority Referenced', subtitle: 'Marfūʿ, Mawqūf & Maqṭūʿ', color: 'var(--burgundy-deep)',
      intro: "The most immediately useful classification distinguishes whose words a narration actually records — the Prophet ﷺ, a Companion, or a Successor — since this alone tells you at a glance whether you're reading prophetic speech or a scholarly opinion.",
      bullets: [
        { label: 'Marfūʿ (Elevated)', text: 'A ḥadīth attributed directly back to the Prophet ﷺ — e.g. "The Messenger of Allah ﷺ said..."' },
        { label: 'Mawqūf (Halted)', text: "A narration attributed to a Companion only, without being credited to the Prophet ﷺ — e.g. \"Ibn ʿAbbās said...\"" },
        { label: 'Maqṭūʿ (Severed)', text: 'A narration attributed to a Successor — e.g. "Al-Ḥasan al-Baṣrī said..."' },
        { label: 'Why It Matters for Fiqh', text: 'This classification instantly separates the Prophet\'s ﷺ own words from the opinions of those who came after him — essential in any fiqh debate' },
        { label: "Imām Mālik's al-Muwaṭṭaʾ, by the Numbers", text: "According to Abū Bakr al-Abharī: 600 marfūʿ, 613 mawqūf, 285 maqṭūʿ, and 228 mursal narrations — 1,726 in total" },
      ],
      qanda: [
        { q: 'Why is the marfūʿ / mawqūf / maqṭūʿ distinction "especially helpful in debate in matters of fiqh," as the book puts it?', a: "Because a mawqūf statement from a Companion or a maqṭūʿ statement from a Successor — however respected they are — does not carry the same legislative weight as the Prophet's ﷺ own marfūʿ words. Knowing at a glance which category a narration falls into stops someone from mistakenly treating a scholar's personal opinion as binding prophetic legislation." },
      ],
      quiz: [
        { q: 'A narration reported as "Ibn ʿAbbās said..." without crediting the Prophet ﷺ is classified as:', choices: ['Marfūʿ', 'Maqṭūʿ', 'Mutawātir', 'Mawqūf'], correct: 3 },
        { q: 'A narration attributed to a Successor (Tābiʿī), such as al-Ḥasan al-Baṣrī, is classified as:', choices: ['Marfūʿ', 'Mawqūf', 'Mursal', 'Maqṭūʿ'], correct: 3 },
        { q: 'How many marfūʿ narrations does Abū Bakr al-Abharī count in Imām Mālik\'s al-Muwaṭṭaʾ?', choices: ['285', '1,726', '600', '228'], correct: 2 },
        { q: 'Why does this section say the marfūʿ/mawqūf/maqṭūʿ distinction matters especially in fiqh debate?', choices: ['It has no real bearing on fiqh at all', 'It separates the Prophet\'s ﷺ own binding words from the opinions of those who came after him', 'It only matters for classifying ḥadīth length', 'It determines which language a ḥadīth was originally spoken in'], correct: 1 },
        { q: 'What is a "marfūʿ" ḥadīth attributed directly to?', choices: ['A Companion only', 'A Successor only', 'The Prophet ﷺ himself', 'An anonymous transmitter'], correct: 2 },
        { q: 'According to al-Abharī\'s count, how many total narrations appear in al-Muwaṭṭaʾ across all four categories?', choices: ['1,726', '600', '4,000', '100'], correct: 0 },
      ]
    },
    {
      id: 'chain-link', icon: '🔗', label: 'Classified by the Link Among Reporters', subtitle: 'Musnad, Mursal, Munqaṭiʿ, Muʿḍal & Muʿallaq', color: 'var(--emerald)',
      tableHeaders: ['Scholar', "Their Position on the Mursal Ḥadīth", 'Reasoning / Conditions'],
      tableLabel: '📋 The Great Scholarly Debate Over the Mursal Ḥadīth',
      sectsTable: [
        { name: 'Mālik & Abū Ḥanīfah', error: 'Fully accept it', correct: "A trustworthy person's Mursal is valid proof, just like a musnad ḥadīth — some Mālikī jurists held it even superior" },
        { name: 'Ash-Shāfiʿī', error: 'Accepts with conditions', correct: 'Requires corroboration (another isnād, Companion sayings, scholarly consensus) AND a narrator who is an elder Successor not known to name unreliable authorities' },
        { name: 'Aḥmad ibn Ḥanbal', error: 'Accepts, ranked 4th', correct: 'Prefers mursal/ḍaʿīf over qiyās (analogy) when nothing opposes it in a given issue — he only used ṣaḥīḥ/ḍaʿīf as categories, not the later ṣaḥīḥ/ḥasan/ḍaʿīf split' },
        { name: 'Ibn Ḥazm', error: 'Rejects outright', correct: 'Unacceptable regardless of the narrator — even the Mursal of a lesser-known Companion is rejected' },
        { name: 'Abū Dāwūd', error: 'Conditional acceptance', correct: 'Accepted only if no musnad ḥadīth exists on the issue, and if one does exist, the mursal must not contradict it' },
        { name: 'Al-Ḥakim & Al-Khaṭīb al-Baghdādī', error: 'Reject except from elder Successors', correct: 'Al-Khaṭīb: "Irsāl leads to one reporter being ambiguous; if he is ambiguous, to ascertain his reliability is impossible"' },
        { name: 'Ibn al-Ṣalāḥ', error: 'Rejects unless proven musnad elsewhere', correct: 'Agrees with ash-Shāfiʿī\'s stricter standard' },
        { name: 'Ibn Taymiyyah', error: 'Three-tier view', correct: 'Accepted if the narrator only narrates mursal from reliable authorities; rejected if he mixes reliable and unreliable ones without disclosure' },
      ],
      intro: "This is where the book gets technical, and where whole schools of fiqh actually diverged: what happens when a link in the chain is missing? At-Ṭaḥḥān walks through musnad (fully connected), then each way a chain can break — mursal, munqaṭiʿ, muʿḍal, and muʿallaq — before devoting an entire section to the fierce scholarly disagreement over whether a mursal ḥadīth can be trusted at all.",
      bullets: [
        { label: 'Musnad', text: "Al-Ḥākim's definition: a chain where each reporter is known to have heard directly from his shaykh, all the way back to a well-known Companion who reports from the Prophet ﷺ" },
        { label: 'Mursal', text: 'The link between the Successor and the Prophet ﷺ is missing — a Successor simply says "The Prophet ﷺ said..." with no Companion named' },
        { label: "Munqaṭiʿ", text: 'A missing link anywhere else in the chain (closer to the collector), including a chain that looks connected but where a reporter is later found not to have actually heard from his shaykh' },
        { label: "Muʿḍal", text: 'Two or more consecutive reporters are missing from the isnād' },
        { label: "Muʿallaq (Hanging)", text: 'The reporter omits the entire chain and quotes the Prophet ﷺ directly, e.g. Mālik saying "It reached me that the Messenger of Allah ﷺ said..."' },
      ],
      qanda: [
        { q: "Why does the book spend so much space on scholarly disagreement over the Mursal ḥadīth specifically, more than any other chain defect?", a: "Because unlike a munqaṭiʿ or muʿḍal chain (where the missing link could be anyone, including an unreliable narrator), a mursal chain is missing exactly the Companion link — and since all Companions are considered trustworthy by scholarly consensus, some scholars argued the missing name doesn't actually threaten the chain's reliability. Others disagreed, arguing the Successor might actually have omitted TWO names (an elder Successor plus the Companion), reintroducing real uncertainty. That single question split Mālik, Abū Ḥanīfah, and Aḥmad from ash-Shāfiʿī, Ibn Ḥazm, and al-Khaṭīb al-Baghdādī." },
        { q: 'What is the practical difference between a mursal and a muʿallaq ḥadīth?', a: 'In a mursal ḥadīth, the missing link is specifically the Companion between the Successor and the Prophet ﷺ — everything else in the chain before the Successor is intact. In a muʿallaq ḥadīth, the entire chain is dropped at once and the collector quotes the Prophet ﷺ directly, with nothing named in between at all.' },
      ],
      quiz: [
        { q: 'In a mursal ḥadīth, which specific link is missing?', choices: ['Two or more consecutive reporters', 'Only the collector\'s own name', 'The entire chain, all at once', 'The Companion, between the Successor and the Prophet ﷺ'], correct: 3 },
        { q: 'Which scholar rejected the Mursal ḥadīth outright, regardless of who narrated it?', choices: ['Imām Mālik', 'Abū Ḥanīfah', 'Ibn Ḥazm', "Aḥmad ibn Ḥanbal"], correct: 2 },
        { q: "What did Al-Khaṭīb al-Baghdādī say was the core problem with Irsāl (narrating mursal)?", choices: ['It takes too long to narrate properly', 'It is only ever used by liars', "It contradicts the Qur'an directly", 'It leaves one reporter ambiguous, making his reliability impossible to verify'], correct: 3 },
        { q: 'What is a muʿḍal ḥadīth, as distinguished from mursal in this section?', choices: ['A chain with no missing links at all', 'A chain missing only the Companion link', 'A chain missing two or more consecutive reporters', 'A chain that quotes the Prophet ﷺ directly with no names given'], correct: 2 },
        { q: 'What condition does ash-Shāfiʿī require for a mursal ḥadīth to be accepted?', choices: ['No conditions — he accepts every mursal unconditionally', 'Corroboration plus a narrator who is an elder Successor not known to name unreliable authorities', 'That it be narrated only by Mālik or Abū Ḥanīfah', 'That it be reported by at least sixty independent chains'], correct: 1 },
        { q: 'What is a muʿallaq ("hanging") ḥadīth, according to this section?', choices: ['One where the reporter omits the entire chain and quotes the Prophet ﷺ directly', 'One with exactly two reporters at every stage', 'One that is agreed upon by every school of fiqh', 'One found only in Ibn Ḥazm\'s writings'], correct: 0 },
      ]
    },
    {
      id: 'number-reporters', icon: '🔢', label: 'Classified by the Number of Reporters', subtitle: 'Mutawātir vs. Āḥād — Gharīb, ʿAzīz & Mashhūr', color: 'var(--gold)',
      intro: 'How many independent people reported a ḥadīth changes everything about how certain we can be of it. At one extreme sits the mutawātir ḥadīth — reported by so many people that collusion on a lie is inconceivable. Everything else falls under āḥād, itself split into three further tiers by how many reporters appear at the thinnest point in the chain.',
      bullets: [
        { label: 'Mutawātir', text: 'Reported by such a large number of people, at every stage of the chain, that they could not possibly have agreed upon a lie — e.g. "Whoever lies about me intentionally, let him reserve his seat in the Fire," reported by over 62 Companions' },
        { label: "Al-Ghazālī's Refinement", text: 'A true mutawātir narration needs large numbers of reporters equally at the beginning, middle, and end of the chain — not just at one point' },
        { label: 'Gharīb (Rare)', text: 'Only one reporter is found at some stage of the chain, usually right at the start — most gharīb narrations are weak, and Aḥmad ibn Ḥanbal warned: "Do not write these gharīb aḥādīth because they are munkar and most of them are weak"' },
        { label: "ʿAzīz (Scarce)", text: 'Exactly two reporters are found narrating it at some stage of the chain' },
        { label: 'Mashhūr (Widespread)', text: 'More than two reporters carry it at some stage — a narration can start as gharīb or ʿazīz and only become mashhūr later, once more people begin transmitting it' },
      ],
      qanda: [
        { q: "Why does the book emphasize al-Ghazālī's point that a mutawātir chain needs large numbers at the beginning, middle, AND end?", a: "Because a narration can be widely known TODAY (mashhūr among the general public) without having actually started with a large number of reporters at the very first stage — meaning it might not truly qualify as mutawātir even though it \"feels\" universally accepted. Al-Ghazālī's stipulation prevents loosely calling something mutawātir just because it's popular now." },
      ],
      quiz: [
        { q: 'What defines a mutawātir ḥadīth?', choices: ['It was reported by exactly two people', 'It only appears in Ṣaḥīḥ al-Bukhārī', 'It was reported only by the Prophet\'s ﷺ own family', 'So many independent reporters, at every stage, that collusion on a lie is inconceivable'], correct: 3 },
        { q: 'A ḥadīth with exactly two reporters at some stage of its chain is called:', choices: ['Gharīb', 'Mashhūr', "ʿAzīz", 'Mutawātir'], correct: 2 },
        { q: 'What refinement did al-Ghazālī add to the definition of mutawātir?', choices: ['That mutawātir requires exactly 62 reporters, no more or fewer', 'That mutawātir only applies to ḥadīth about worship', 'That large numbers are needed equally at the beginning, middle, and end of the chain, not just one point', 'That mutawātir status expires after one generation'], correct: 2 },
        { q: 'What did Aḥmad ibn Ḥanbal warn about gharīb narrations?', choices: ['That they should be written down more than any other type', 'That they are munkar and most of them are weak', 'That they are always more reliable than mashhūr narrations', 'That they should never be studied at all'], correct: 1 },
        { q: 'Can a narration that starts as gharīb or ʿazīz later become mashhūr, according to this section?', choices: ['No, a narration\'s classification is permanently fixed at its origin', 'Yes — once more people begin transmitting it, it can later become mashhūr', 'Only if the Prophet ﷺ himself repeats it a second time', 'Only mutawātir narrations can change classification'], correct: 1 },
        { q: 'Roughly how many Companions are reported to have transmitted "Whoever lies about me intentionally, let him reserve his seat in the Fire"?', choices: ['Over 62', 'Exactly 2', 'Exactly 10', 'Only 1'], correct: 0 },
      ]
    },
    {
      id: 'manner-reported', icon: '🎭', label: 'Classified by the Manner of Reporting', subtitle: 'Tadlīs (Concealment) & Musalsal Chains', color: 'var(--burgundy-light)',
      intro: "Some of the sharpest scrutiny in this science is reserved for how a reporter phrases their transmission — because a chain can look perfectly sound on paper while concealing that the reporter never actually heard the hadith from the person they're citing. This is tadlīs, and the book treats it as a serious integrity issue, not a minor technicality.",
      bullets: [
        { label: 'Tadlīs al-Isnād', text: "A reporter narrates from a shaykh he met, something he didn't actually hear from him — or from a contemporary he never even met — phrasing it to sound like direct hearing" },
        { label: 'Tadlīs al-Shuyūkh', text: "The reporter does name his shaykh, but uses an obscure name, by-name, or nickname specifically to obscure who it really is" },
        { label: "Tadlīs at-Taswiyah — The Worst Kind", text: 'A reliable shaykh reports from a WEAK authority who reports from another reliable shaykh — the reporter quietly omits the weak middle link, making the whole chain look reliable. Practiced by Baqiyyah ibn al-Walīd, al-Walīd ibn Muslim, al-Aʿmash, and ath-Thawrī' },
        { label: "Shuʿbah's Verdict on Tadlīs", text: '"Tadlīs is the brother of lying" and "To commit adultery is more favourable to me than to report by way of Tadlīs"' },
        { label: 'Musalsal (Continued) Chains', text: 'Every reporter in the chain repeats the same distinctive phrase or action (e.g. always saying "I heard," or always interlocking fingers at a certain point) — useful precisely because it helps rule out tadlīs' },
      ],
      qanda: [
        { q: 'Why did Ibn Ḥajar rank tadlīs al-taswiyah as the worst of the three types?', a: "Because it doesn't just hide the reporter's own uncertain hearing (as in ordinary tadlīs al-isnād) — it actively erases a genuinely weak narrator from view entirely, leaving behind a chain that LOOKS composed of nothing but trustworthy reporters. A reader has no way to detect the deception without independently cross-checking every possible route of the same narration." },
      ],
      quiz: [
        { q: "What is tadlīs al-taswiyah, considered the worst form of tadlīs?", choices: ['Simply forgetting a reporter\'s name', 'Adding an extra reporter for emphasis', 'Translating a hadith incorrectly', 'Quietly omitting a weak middle reporter so the whole chain looks reliable'], correct: 3 },
        { q: "What did Shuʿbah say tadlīs was comparable to?", choices: ['A minor and harmless habit', 'A sign of great scholarship', 'A requirement for all narrators', 'Lying — he called it "the brother of lying"'], correct: 3 },
        { q: 'What is tadlīs al-shuyūkh, as distinguished from tadlīs al-isnād in this section?', choices: ['Naming the shaykh correctly but citing a different hadith entirely', 'Naming the shaykh but using an obscure name or nickname to obscure who it really is', 'Refusing to name any shaykh at all', 'Naming two shaykhs instead of one'], correct: 1 },
        { q: 'Which narrators does this section name as known practitioners of tadlīs at-taswiyah?', choices: ['Al-Bukhārī and Muslim', 'Baqiyyah ibn al-Walīd, al-Walīd ibn Muslim, al-Aʿmash, and ath-Thawrī', 'Ibn ʿAbbās and Abū Hurayrah', 'Ash-Shāfiʿī and Mālik'], correct: 1 },
        { q: 'What is the purpose of a musalsal (continued) chain, according to this section?', choices: ['It has no practical use beyond tradition', 'It helps rule out tadlīs, since every reporter repeats the same distinctive phrase or action', 'It is only used for weak ḥadīth', 'It replaces the need for an isnād entirely'], correct: 1 },
        { q: 'What does tadlīs al-isnād specifically involve?', choices: ['Narrating from a shaykh something not actually heard from him, phrased to sound like direct hearing', 'Adding a completely fictional narrator to a chain', 'Reversing the order of words in the matn', 'Contradicting a more reliable narrator\'s version'], correct: 0 },
      ]
    },
    {
      id: 'text-nature', icon: '📝', label: 'Classified by the Nature of the Text', subtitle: 'Shādhdh, Munkar & Mudraj (Insertions)', color: 'var(--emerald-light)',
      intro: "Sometimes the chain looks fine and the problem is in the content itself — either because a trustworthy narrator's version conflicts with someone even more reliable, or because a well-meaning explanation got silently folded into the Prophet's ﷺ actual words.",
      bullets: [
        { label: 'Shādhdh (Aloof)', text: "Ash-Shāfiʿī's definition: reported by a trustworthy person, but contradicting the narration of someone MORE reliable than him — this does not apply to a report that is simply unique and uncontradicted" },
        { label: 'Munkar (Denounced)', text: 'A narration contradicting a more authentic ḥadīth, reported by a WEAK narrator — early traditionists like Aḥmad would label any weak reporter\'s ḥadīth this way' },
        { label: "Al-Awzāʿī's Method", text: '"We used to listen to aḥādīth and present them to fellow traditionists just as we present forged coins to a money-exchanger: whatever they recognise, we accept, and whatever they reject, we also reject"' },
        { label: 'Ziyādah Thiqah (A Trustworthy Addition)', text: "If a reliable reporter adds something not found in other authentic sources, and it doesn't contradict them, the addition is normally accepted" },
        { label: 'Mudraj (Inserted)', text: 'A worked example: "Perform the ablution fully; woe to the heels from the Fire!" — al-Khaṭīb showed the first phrase was actually Abū Hurayrah\'s own comment, not the Prophet\'s ﷺ words, confirmed by comparing al-Bukhārī\'s version' },
      ],
      qanda: [
        { q: "Why isn't a report that is simply unique — not corroborated by anyone else — automatically shādhdh?", a: 'Because ash-Shāfiʿī\'s definition of shādhdh specifically requires CONTRADICTION with a more reliable narrator, not mere uniqueness. The book gives the example of "Actions are judged by intentions" — narrated by only one reporter at each early stage of its chain, yet not shādhdh, because every one of those solitary reporters was trustworthy and nothing else contradicts them.' },
        { q: "How did scholars actually detect that 'woe to the heels from the Fire' was mudraj — a Companion's addition mixed into the Prophet's ﷺ words?", a: "By comparing multiple narrations of the same hadith. Al-Bukhari's version explicitly separates Abū Hurayrah's own instruction ('Complete the ablution') from his direct quotation of the Prophet ﷺ ('for Abul Qāsim said: Woe to the heels from the Fire!'), which let al-Khaṭīb pinpoint exactly where the Companion's own commentary had been folded into the text in other versions." },
      ],
      quiz: [
        { q: "According to ash-Shāfiʿī, what makes a ḥadīth shādhdh?", choices: ['It has never been narrated by anyone else', 'It is reported by more than three separate people', 'A trustworthy narrator\'s report contradicts someone even more reliable', 'It appears in only one collection'], correct: 2 },
        { q: 'What is a mudraj ḥadīth?', choices: ['A hadith reported by exactly two people', 'A hadith with a missing Companion link', 'A fabricated hadith with no chain at all', "A narrator's own comment or explanation gets folded into the Prophet's ﷺ actual words"], correct: 3 },
        { q: 'Why is a uniquely-reported, uncontradicted ḥadīth NOT automatically classified as shādhdh?', choices: ['Because shādhdh specifically requires contradiction with a more reliable narrator, not mere uniqueness', 'Because uniqueness always strengthens a ḥadīth\'s status', 'Because shādhdh only applies to mutawātir reports', 'Because shādhdh was abolished by later scholars'], correct: 0 },
        { q: 'What is munkar, as distinguished from shādhdh in this section?', choices: ['A contradiction reported by a trustworthy narrator', 'A contradiction with a more authentic ḥadīth, reported by a WEAK narrator', 'A hadith with no chain whatsoever', 'A hadith accepted by every school of fiqh'], correct: 1 },
        { q: 'How did al-Khaṭīb show that "woe to the heels from the Fire" was mudraj?', choices: ['By finding a version with no chain at all', 'By asking Abū Hurayrah\'s descendants directly', 'By comparing versions and showing al-Bukhārī\'s account separates Abū Hurayrah\'s own instruction from his direct quotation of the Prophet ﷺ', 'By noting the phrase does not appear in any collection'], correct: 2 },
        { q: 'What analogy does al-Awzāʿī use to describe how traditionists checked ḥadīth against each other?', choices: ['Comparing them like forged coins presented to a money-exchanger', 'Comparing them like witnesses in a court case', 'Comparing them like students reciting from memory', 'Comparing them like merchants weighing goods'], correct: 0 },
      ]
    },
    {
      id: 'hidden-defects', icon: '🕵️', label: 'Hidden Defects — Muḍṭarib, Maqlūb & Muʿallal', subtitle: "Al-Bukhārī's Famous Trial in Baghdad", color: 'var(--burgundy)',
      intro: "This is where the science becomes genuine detective work — a chain or text that LOOKS completely sound until deep cross-referencing across every version reveals something has gone wrong. At-Ṭaḥḥān illustrates it with one of the most celebrated stories in ḥadīth history: the public trial the scholars of Baghdad devised to test Imām al-Bukhārī.",
      bullets: [
        { label: 'Muḍṭarib (Shaky)', text: 'Reporters disagree about a shaykh, some detail, or the wording — in a way that no version can be preferred over another. Example: Rāfiʿ ibn Khadīj\'s six differing narrations on renting farmland, so contradictory that Aḥmad rejected the whole group as muḍṭarib' },
        { label: 'Maqlūb (Reversed)', text: "A chain gets grafted onto the wrong text, a narrator's name is swapped or reversed (e.g. 'al-Walīd ibn Muslim' for 'Muslim ibn al-Walīd'), or a phrase's word order is flipped" },
        { label: "Al-Bukhārī's Trial in Baghdad", text: 'Traditionists tested him with 10 men reciting 10 ḥadīth each, every chain deliberately grafted onto the wrong text. Al-Bukhārī rejected all of them as presented — then recited every single one back with its CORRECT chain, from memory, earning him enormous honour among the scholars there' },
        { label: "Ma'lūl / Mu'allal (Defective)", text: "Ibn al-Ṣalāḥ: \"appears to be sound, but thorough research reveals a disparaging factor\" — such as a hadith secretly being mursal though it looks musnad, or a reporter shown to have never actually met his claimed shaykh" },
        { label: 'A Worked Example', text: 'Muslim narrated a hadith about the days of creation from Abū Hurayrah; Ibn Taymiyyah notes al-Bukhārī and Yaḥyā ibn Maʿīn — both more knowledgeable than Muslim in this — identified it as actually the words of Kaʿb al-Aḥbār, not the Prophet ﷺ' },
      ],
      qanda: [
        { q: "What made al-Bukhari's response to the Baghdad trial so impressive, beyond simply catching that the chains were wrong?", a: "It wasn't enough to notice something was off — al-Bukhari had to reconstruct, from memory alone, the CORRECT chain that actually belonged to each of the 100 mismatched hadith the ten examiners presented, and recite each one back precisely paired with its rightful isnad. That combination of catching the deliberate errors AND supplying the accurate original from memory is what won him such renown among Baghdad's scholars." },
        { q: 'Why is a muʿallal (defective) ḥadīth considered more dangerous than an obviously weak one?', a: 'Because by definition it "appears to be sound" — the chain looks complete and every reporter looks reliable at first glance. The defect (like a reporter who never actually met his claimed shaykh, or a hadith secretly mursal despite looking musnad) only surfaces after painstaking cross-referencing of every version of the narration, which is why only a small number of specialist scholars like Ibn al-Madini and ad-Daraqutni ever compiled books on it.' },
      ],
      quiz: [
        { q: 'In the famous Baghdad trial, what did al-Bukhārī do after rejecting all ten men\'s mismatched narrations?', choices: ['Refused to answer any further questions', 'Asked to see the original manuscripts first', 'Declared all ten examiners liars outright', 'Recited each hadith back with its correct isnad, from memory'], correct: 3 },
        { q: 'What is a muḍṭarib ḥadīth?', choices: ['One with only a single reporter in the entire chain', 'One that is unanimously agreed upon by all scholars', 'One where reporters disagree on key details in a way no version can be preferred', "One that contains only a grammatical error"], correct: 2 },
        { q: 'How many men and how many ḥadīth each were used to test al-Bukhārī in the Baghdad trial?', choices: ['10 men reciting 10 ḥadīth each', '2 men reciting 50 ḥadīth each', '100 men reciting 1 ḥadīth each', '5 men reciting 20 ḥadīth each'], correct: 0 },
        { q: 'What is a maqlūb ḥadīth, according to this section?', choices: ['A chain grafted onto the wrong text, or a narrator\'s name swapped/reversed', 'A chain with two missing consecutive links', 'A chain agreed upon by every scholar', 'A chain with only one reporter at the first stage'], correct: 0 },
        { q: 'How does Ibn al-Ṣalāḥ define a muʿallal (defective) ḥadīth?', choices: ['One that is obviously and immediately weak to any reader', 'One that appears to be sound, but thorough research reveals a disparaging factor', 'One with a text that has never been challenged', 'One that only scholars of grammar can evaluate'], correct: 1 },
        { q: 'What did Ibn Taymiyyah note about the ḥadīth on the days of creation narrated by Muslim from Abū Hurayrah?', choices: ['That al-Bukhārī and Yaḥyā ibn Maʿīn identified it as actually the words of Kaʿb al-Aḥbār, not the Prophet ﷺ', 'That it was unanimously accepted by every scholar without dispute', 'That it does not appear in any collection at all', 'That it was later confirmed authentic beyond doubt'], correct: 0 },
      ]
    },
    {
      id: 'grading', icon: '⚖️', label: 'The Final Verdict — Ṣaḥīḥ, Ḥasan, Ḍaʿīf & Mawḍūʿ', subtitle: 'Grading by Reporter Reliability', color: 'var(--gold)',
      intro: "Every classification in this book eventually feeds into one final question: given everything now known about the chain and the text, what grade does this ḥadīth actually deserve? At-Ṭaḥḥān walks through the four possible verdicts, from the gold-standard ṣaḥīḥ down to outright fabrication — including some sobering, real examples of how fabricated ḥadīth were caught.",
      bullets: [
        { label: "Ṣaḥīḥ (Sound) — Ibn al-Ṣalāḥ's Definition", text: 'A continuous chain of trustworthy, reliable memorizers, free of shādhdh and any hidden defect — this single definition excludes every weak category discussed so far' },
        { label: 'The "Golden Isnād"', text: 'Ash-Shāfiʿī — Mālik — Nāfiʿ — Ibn ʿUmar — the Prophet ﷺ, named for the renown of every single reporter in the chain' },
        { label: 'Ḥasan (Agreeable)', text: "At-Tirmidhī's standard: not shādhdh, no disparaged reporter, and reported through more than one route — al-Dhahabi summarized it simply as excelling ḍaʿīf but not quite reaching ṣaḥīḥ" },
        { label: "Ḍaʿīf (Weak)", text: 'Fails to reach ḥasan — usually due to a broken chain (mursal, munqaṭiʿ, muʿḍal) or a reporter with a disparaged character: lying, excessive mistakes, or involvement in innovation' },
        { label: "Mawḍūʿ (Fabricated) — A Confession", text: 'ʿAbd al-Karīm Abū al-ʿAwjāʾ, executed for heresy, confessed to fabricating four thousand ḥadīth, declaring the lawful unlawful and vice versa' },
        { label: "ʿUmar Catches a Forgery", text: "When Jewish leaders presented a document claiming exemption from jizyah, witnessed by Sa'd ibn Muʿādh and Muʿāwiyah — ʿUmar spotted the fraud instantly: Saʿd died in 3 AH, and Muʿāwiyah only accepted Islam in 8 AH, years after the document's claimed date" },
      ],
      qanda: [
        { q: "How did ʿUmar ibn al-Khaṭṭāb prove the Khaybar document was fabricated, using pure logic rather than checking the reporters?", a: "By checking the timeline of the two named witnesses against known history. The document was dated to the conquest of Khaybar (6 AH), but one of its witnesses, Sa'd ibn Mu'adh, had already died three years earlier (3 AH), and the other witness, Mu'awiyah, did not even become Muslim until two years AFTER the document's date (8 AH). Two people who couldn't possibly have witnessed the document at the time it claimed proved the whole thing a forgery." },
        { q: 'What is the practical difference between ṣaḥīḥ and ḥasan, per this section?', a: 'A ṣaḥīḥ ḥadīth requires reporters who are trustworthy AND excellent in memory/preservation, with a fully continuous chain free of any defect. A ḥasan ḥadīth meets the same basic honesty and continuity requirements, but its reporters are graded a notch below in precision of memory — good enough to be accepted and acted upon, but a step short of the top tier.' },
      ],
      quiz: [
        { q: "How did ʿUmar know the Khaybar exemption document was forged?", choices: ['The handwriting on the document looked wrong', 'The Jewish leaders admitted the forgery themselves', 'It directly contradicted a verse of the Qur\'an', "Its named witnesses couldn't have been present — one had died years earlier, the other converted to Islam years later"], correct: 3 },
        { q: "According to Ibn al-Ṣalāḥ, what four things must a ṣaḥīḥ ḥadīth's chain have?", choices: ['At least five reporters present at every single stage', 'Reporters who were themselves practicing scholars', "Agreement from every school of fiqh before acceptance", 'Continuity, trustworthy reporters, good memory, and freedom from shādhdh/defects'], correct: 3 },
        { q: 'What made the "Golden Isnād" (Ash-Shāfiʿī–Mālik–Nāfiʿ–Ibn ʿUmar–the Prophet ﷺ) so named?', choices: ['It was the shortest chain ever recorded', 'The renown and reliability of every single reporter in the chain', 'It was the only chain never disputed by any scholar', 'It contains exactly five reporters, a symbolic number'], correct: 1 },
        { q: 'What is at-Tirmidhī\'s standard for a ḥadīth to be classified ḥasan?', choices: ['Not shādhdh, no disparaged reporter, and reported through more than one route', 'Reported by exactly sixty-two Companions', 'Free from any possible criticism whatsoever', 'Only accepted if it appears in Ṣaḥīḥ al-Bukhārī'], correct: 0 },
        { q: 'What did ʿAbd al-Karīm Abū al-ʿAwjāʾ confess to before his execution?', choices: ['Fabricating four thousand ḥadīth', 'Forging the Khaybar exemption document', 'Inventing the science of isnād criticism', 'Translating the Qur\'an incorrectly'], correct: 0 },
        { q: 'What typically causes a ḥadīth to be classified ḍaʿīf (weak), according to this section?', choices: ['A broken chain or a reporter with a disparaged character, such as lying or excessive mistakes', 'Being reported by more than two independent chains', 'Appearing in more than one collection', 'Being narrated by a Companion rather than a Successor'], correct: 0 },
      ]
    },
    {
      id: 'further-branches', icon: '🧩', label: 'Further Branches of Muṣṭalaḥ and Rijāl al-Ḥadīth', subtitle: "Ibn al-Ṣalāḥ's 65 Terms — the 42 Beyond the Main Classifications", color: 'var(--emerald)',
      intro: "At-Ṭaḥḥān closes the book by noting that Ibn al-Ṣalāḥ's original work actually names sixty-five technical terms — the seven main classifications above account for twenty-three of them (plus muʿallaq and mutawātir, drawn from elsewhere). The remaining forty-two are narrower, more specialised branches of the science, mostly concerned with correctly identifying and cross-referencing the reporters themselves. The best-developed of the forty-two — iʿtibār, mutābaʿah, and shāhid — is explained in full; the rest are surveyed as the compact list at-Ṭaḥḥān gives them.",
      bullets: [
        { label: 'Iʿtibār (Cross-Checking for Corroboration)', text: "Traditionists always search for more witnesses in favour of a ḥadīth reported by only one source — this search itself is called iʿtibār. Worked example: a ḥadīth reaches us as Ḥammād ibn Salama — Ayyūb — Ibn Sīrīn — Abū Hurayrah — the Prophet ﷺ. Research is done to see whether another trustworthy reporter also narrates from Ayyūb." },
        { label: 'Mutābaʿah Tāmmah vs. Qaṣīrah', text: "If another reporter is found narrating from Ayyūb himself, it is a mutābaʿah tāmmah (complete corroboration). If no such reporter exists at that exact point, the search moves one link further back — if a different reporter is found narrating from Ibn Sīrīn instead, it is a mutābaʿah qaṣīrah (incomplete/partial corroboration)." },
        { label: 'Shāhid & Fard Muṭlaq', text: "If a similar wording is found reported through an entirely different Companion rather than the same one, that supporting narration is called a shāhid (witness). If no corroboration of any kind is found anywhere in the chain, the ḥadīth is left standing alone — declared fard muṭlaq (absolutely singular) or gharīb." },
        { label: 'Naming & Identity Branches (Selected)', text: "Muʾtalif wa Mukhtalif — names spelled identically but pronounced differently (e.g. Kuraiz vs. Kāriz). Muttafiq wa Muftariq — identical names belonging to different people (e.g. two separate reporters both called \"al-Ḥanafī\" — one for his tribe Banū Ḥanīfah, the other for following the Ḥanafī madhhab). Nisbah traps — Abū Masʿūd al-Badrī is called \"al-Badrī\" not because he fought at Badr, but because he later lived there." },
        { label: 'Reporter-Relationship Branches (Selected)', text: 'Elders narrating from younger reporters, and the reverse; reporters of similar age narrating from each other; siblings among reporters; fathers narrating from their own sons, and sons from their fathers; the knowledge of mawālī (freed slaves) among the reporters; and the knowledge of reporters\' homelands and hometowns.' },
        { label: 'The Full List, by the Numbers', text: 'At-Ṭaḥḥān lists all 42 in brief — spanning reporter character requirements, how a ḥadīth is heard/written/reported, manners required of traditionists and students, higher vs. lower isnād, difficult words, abrogated ḥadīth, altered wording, contradictory ḥadīth, the Companions and Successors as distinct fields of knowledge, ambiguous reporters, dates of birth/death, and trustworthy reporters known to grow confused in old age.' },
      ],
      qanda: [
        { q: 'Why does the book bother distinguishing mutābaʿah tāmmah from mutābaʿah qaṣīrah instead of just saying "corroborated" or "not corroborated"?', a: "Because the strength of the corroboration depends on exactly where in the chain the second witness appears. A mutābaʿah tāmmah confirms the ḥadīth at the very same point where the original narrator (Ayyūb) is reporting, which is the strongest possible corroboration. A mutābaʿah qaṣīrah only confirms it one step further back (at Ibn Sīrīn), leaving Ayyūb's own link still uncorroborated — weaker, but still valuable, which is why at-Ṭaḥḥān keeps the two labeled separately rather than collapsing them into one category." },
        { q: 'What is the practical difference between a mutābaʿah and a shāhid?', a: "A mutābaʿah corroborates the ḥadīth through the SAME Companion's route (Abū Hurayrah, in the worked example) — just a different chain of narrators after him. A shāhid corroborates the same wording or meaning through an entirely DIFFERENT Companion altogether. Both serve the same purpose of iʿtibār (strengthening a solitary report), but a shāhid is the wider-net search, since it doesn't require sharing the original Companion at all." },
      ],
      quiz: [
        { q: "In the worked example (Ḥammād ibn Salama — Ayyūb — Ibn Sīrīn — Abū Hurayrah — the Prophet ﷺ), what is the name given to the process of searching for more witnesses for this solitary ḥadīth?", choices: ['Tadlīs', 'Idrāj', 'Iʿtibār', 'Iʿlāl'], correct: 2 },
        { q: 'If another trustworthy reporter is found narrating from Ayyūb himself (the same point in the chain), what is this corroboration called?', choices: ['Mutābaʿah qaṣīrah (incomplete)', 'Shāhid', 'Mutābaʿah tāmmah (complete)', 'Gharīb'], correct: 2 },
        { q: 'If no corroboration is found anywhere for a ḥadīth, leaving it standing entirely alone, what is it declared?', choices: ['Mashhūr', "ʿAzīz", 'Mutawātir', 'Fard muṭlaq (absolutely singular) or gharīb'], correct: 3 },
        { q: 'What distinguishes a shāhid from a mutābaʿah, in this section?', choices: ['A shāhid corroborates through an entirely different Companion, not the same one', 'A shāhid can only be used for marfūʿ ḥadīth', 'A shāhid is always weaker than a fard muṭlaq', 'There is no difference — the terms are interchangeable'], correct: 0 },
        { q: 'The example of two different reporters both nicknamed "al-Ḥanafī" — one for his tribe, one for his madhhab — illustrates which naming category?', choices: ['Muʾtalif wa mukhtalif', 'Muttafiq wa muftariq', 'Mudallis naming', "Kunyah without a name"], correct: 1 },
        { q: "Why is Abū Masʿūd called \"al-Badrī,\" according to this section's nisbah example?", choices: ['Because he fought at the Battle of Badr', 'Because his father was named Badr', 'Because he narrated the most ḥadīth about Badr', 'Because he later came to live in Badr, not because he witnessed the battle'], correct: 3 },
      ]
    },
  ]
});
