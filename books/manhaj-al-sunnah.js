/* XENOS NOTES — book module
 * To add a new book: copy this file's shape, fill in the metadata + sections, save
 * it as books/<your-slug>.js, then add one <script> line in index.html. That's it —
 * the shared engine (app.js) handles rendering, navigation, search, and styling. */
XenosBooks.register({
  slug: 'manhaj-al-sunnah',
  title: 'Manhaj al-Sunnah al-Nabawiyyah',
  subtitle: 'By Shaykh al-Islām Ibn Taymiyyah (d.728H) · Refutation of Rāfiḍah Theology on Imāmah',
  icon: '⚔️',
  category: 'Firaq wa Radd',
  arabicBg: 'منهاج السنة',
  tags: ['Imāmah', 'Rāfiḍah Refutation', 'Khilāfah', 'Companions', 'ʿAqīdah', 'Ibn Taymiyyah'],
  footer: 'Ibn Taymiyyah (d.728H) · Abridged by al-Ghunaimān · Translated by Nasiru Garba · 605 Pages',

  sections: [
    {
      id: 'overview', icon: '📚', label: 'The Book & Its Context', subtitle: 'Who, Why, and What', color: 'var(--burgundy)',
      intro: "Manhaj al-Sunnah al-Nabawiyyah (المنهاج — \"The Path of the Prophetic Sunnah\") is among the greatest works ever written in Islamic theological polemics. Ibn Taymiyyah wrote it as a comprehensive, systematic refutation of Minhāj al-Karāmah fī Maʿrifat al-Imāmah — a Shīʿah Imāmiyyah treatise written by Ibn al-Muṭahhar al-Ḥillī for a Mongol king. This abridged translation (605 pages) covers all major Shīʿah theological claims and answers each one.",
      bullets: [
        { label: 'The Author', text: 'Shaykh al-Islām Taqī al-Dīn Aḥmad ibn ʿAbd al-Ḥalīm ibn Taymiyyah al-Ḥarrānī al-Dimashqī (661–728 AH)' },
        { label: 'The Text He Refuted', text: 'منهاج الكرامة (Minhāj al-Karāmah) by Ibn al-Muṭahhar al-Ḥillī — written to invite a Mongol king to Shīʿism' },
        { label: 'Why He Wrote It', text: 'Scholars of Ahl al-Sunnah brought him the Shīʿah book and asked him to expose its errors so believers would be protected from its claims' },
        { label: "Ibn Taymiyyah's Own Words", text: '"Those people are among the most strayed away from the right path... they are the most liars in textual quotations and the most ignorant in intellectual reasoning."' },
        { label: 'The Six Chapters', text: "1. Imāmah is not the most important principle\n2. Which sect to follow\n3. Proofs for ʿAlī's Imāmah refuted\n4. The Twelve Imāms claim refuted\n5. Leadership of the first three Caliphs\n6. Shīʿah critique of Abū Bakr refuted" },
      ],
      qanda: [
        { q: 'Why is this book so significant in Islamic scholarship?', a: "It is the most comprehensive systematic refutation of Shīʿah Imāmiyyah theology ever written. Ibn Taymiyyah addresses every major argument the Shīʿah make for their creed — rational, Qurʾānic, and ḥadīth-based — and answers each one. He also traces the historical origins of Shīʿism, examines narrations used by the Shīʿah, defends the Companions against specific claims, and lays out the Ahl al-Sunnah position on the caliphate." },
        { q: 'Who was Ibn Taymiyyah?', a: 'Shaykh al-Islām Aḥmad ibn ʿAbd al-Ḥalīm ibn Taymiyyah (661–728 AH) is considered one of the most influential scholars in Islamic history. Born in Ḥarrān, he settled in Damascus, mastering fiqh, ḥadīth, tafsīr, and ʿaqīdah. He faced significant persecution from political authorities and was imprisoned multiple times for his positions — yet continued writing from prison. He died in Damascus while imprisoned in the Citadel.' },
        { q: 'What was the historical context behind this book?', a: "In the 13th–14th century, the Mongol invasions had devastated much of the Muslim world, and some Mongol rulers were being courted by various sects. A Mongol king was being invited to Shīʿism by Ibn al-Muṭahhar al-Ḥillī, who wrote a theological treatise to persuade him — a matter with real political consequences for the Muslims under that rule. Ibn Taymiyyah's refutation was written to address the Shīʿah claims directly." },
        { q: 'What does the title mean?', a: '"Manhaj" means path or methodology. "Al-Sunnah al-Nabawiyyah" means the Prophetic Sunnah. The title is a direct counter to the Shīʿah book\'s title, Minhāj al-Karāmah ("The Path of Honor") — Ibn Taymiyyah argues the true path is the Prophetic Sunnah as understood and practiced by the Companions.' },
      ],
      quiz: [
        { q: 'What Shīʿah text did Ibn Taymiyyah write this book to refute?', choices: ['Minhāj al-Karāmah fī Maʿrifat al-Imāmah', 'Nahj al-Balāghah', 'Al-Kāfī', 'Biḥār al-Anwār'], correct: 0 },
        { q: 'Who was the intended audience of the original Shīʿah treatise?', choices: ['A Mongol king being invited to Shīʿism', 'A group of Sunni scholars', 'The general Muslim public in Damascus', 'The Ottoman Sultan'], correct: 0 },
        { q: 'What does "Manhaj al-Sunnah al-Nabawiyyah" mean?', choices: ['The Path of the Prophetic Sunnah', 'The Path of Honor', 'The Book of Certainty', 'The Choice Thought'], correct: 0 },
      ]
    },
    {
      id: 'rafidah', icon: '⚔️', label: 'Who Are the Rāfiḍah?', subtitle: 'Name · History · Origins · Comparisons', color: 'var(--burgundy-deep)',
      intro: 'Before refuting Shīʿah theology in detail, Ibn Taymiyyah establishes who the Rāfiḍah are, traces the historical origins of Shīʿism, and draws comparisons to the People of the Book. This section frames all the arguments that follow.',
      bullets: [
        { label: 'الرافضة (Al-Rāfiḍah)', text: 'Means "the Rejecters" — those who reject the caliphate of Abū Bakr, ʿUmar, and ʿUthmān. The term applies specifically to extremist Shīʿah, not all Shīʿah sects, and generally rejects most Companions as apostate.' },
        { label: 'Historical Origin', text: "Ibn Taymiyyah traces Rāfiḍī roots to ʿAbdullāh ibn Sabaʾ, whom ʿAlī himself sought to punish. ʿAlī publicly stated from the pulpit in Kūfah: \"The best of this community after its Prophet is Abū Bakr and then ʿUmar\" (Bukhārī, Abū Dāwūd)." },
        { label: 'Comparison to Jews', text: 'Like Jews who knew the truth but rejected it out of spite and envy — the Rāfiḍah are argued to know what the Companions were, yet reject them out of hostility.' },
        { label: 'Comparison to Christians', text: "Like Christians who exaggerated (ghuluw) about their prophet — some Rāfiḍī sects exaggerate about ʿAlī and the Imāms to the point of near-divine status." },
        { label: "Imām al-Shaʿbī's Assessment", text: '"I never see a people more imprudent than the Shīʿah. If they were birds they would have been owls. I swear by Allāh, if they asked me to fabricate a ḥadīth for ʿAlī, I would not do that."' },
      ],
      qanda: [
        { q: 'What does "Rāfiḍah" mean and who does it apply to?', a: 'It means "Rejecters" — those who reject the caliphate of Abū Bakr, ʿUmar, and ʿUthmān. It applies specifically to the extremists who hold Abū Bakr and ʿUmar to be illegitimate usurpers, and who reject most of the Prophet\'s Companions as apostates, rather than to every Shīʿah group.' },
        { q: 'How does Ibn Taymiyyah trace the origin of extreme Shīʿism?', a: "He identifies ʿAbdullāh ibn Sabaʾ as an early figure spreading the idea that ʿAlī was divinely appointed and that Abū Bakr and ʿUmar were usurpers — teachings ʿAlī himself moved to suppress. Ibn Taymiyyah notes that even early Shīʿah figures who lived with ʿAlī did not hold the later Rāfiḍī position." },
        { q: 'What are the two comparisons Ibn Taymiyyah draws to the People of the Book?', a: "(1) Like Jews, who knew the truth about a matter but rejected it out of envy. (2) Like Christians, who fell into ghuluw (exaggeration) about their central figure until some worshipped him — paralleling how some Rāfiḍī sects exalt ʿAlī to a near-divine status." },
      ],
      quiz: [
        { q: 'What does the word "Rāfiḍah" literally mean?', choices: ['Rejecters', 'Followers', 'Innovators', 'Companions'], correct: 0 },
        { q: 'Who does Ibn Taymiyyah identify as an early source of the extreme Shīʿī position on Abū Bakr and ʿUmar?', choices: ['ʿAbdullāh ibn Sabaʾ', 'Ibn al-Muṭahhar al-Ḥillī', 'Al-Shaʿbī', 'Al-Ashʿarī'], correct: 0 },
        { q: 'Ibn Taymiyyah compares the Rāfiḍah exaggerating about ʿAlī to which group\'s error about their central figure?', choices: ['Christians and Jesus', 'Jews and Moses', 'Zoroastrians and fire', 'Buddhists and the Buddha'], correct: 0 },
      ]
    },
    {
      id: 'ch1', icon: '👑', label: 'Chapter 1 — Imāmah', subtitle: 'Not the Most Important Principle', color: 'var(--burgundy-light)',
      intro: 'The Shīʿah Rāfiḍah claim that al-Imāmah (leadership/succession) is the single most important principle in the religion. Ibn Taymiyyah answers this claim from several angles — logically, textually, and historically.',
      bullets: [
        { label: 'The Shīʿah Claim', text: '"The issue of al-Imāmah is the most important principle of religious precepts... which will lead to eternal life in Paradise." — Ibn al-Muṭahhar al-Ḥillī' },
        { label: "Ibn Taymiyyah's Response", text: 'Belief in Allāh and His Messenger is more important than the issue of al-Imāmah — this is known by necessity in the religion of Islam.' },
        { label: 'Proof from the Call to Islam', text: "When the Prophet ﷺ called people to Islam, he called them to the Shahādah, Prayer, and Zakāh — never to a belief in a specific Imām." },
        { label: 'Proof from the Companions', text: "The Companions — the best generation by consensus — did not hold the belief in the Twelve Imāms. If it were the most important principle, how were they the best generation without knowing it?" },
        { label: 'The Internal Contradiction', text: "The Shīʿah claim the current Imām has been hidden (ghaybah) since 260H — over a thousand years. What benefit is a central religious principle whose Imām cannot be found?" },
      ],
      qanda: [
        { q: "Why does Ibn Taymiyyah reject the claim that Imāmah is the most important principle?", a: "Because the Prophet ﷺ never made belief in a specific Imām a condition of entering Islam — only the Shahādah, Prayer, and Zakāh were required. The best generation, the Companions, did not hold this belief. And if the \"most important principle\" refers to belief in a hidden Imām who has been unreachable for over a thousand years, that would make the most important obligation in Islam something inaccessible — a conclusion Ibn Taymiyyah calls false by necessity." },
        { q: 'What does the Qurʾān establish about the conditions for entering Islam?', a: "Ibn Taymiyyah cites verses showing the conditions given are repentance, prayer, and zakāh — never belief in a specific Imām. This shows that following the Messenger ﷺ, not a separately appointed Imām, is the actual obligation upon Muslims." },
        { q: 'What is the Ahl al-Sunnah position on leadership?', a: 'That the real leader is whoever actually holds authority and discharges its responsibilities — comparable to how the imām of a prayer is whoever is actually leading it, not merely whoever might have deserved to.' },
      ],
      quiz: [
        { q: 'According to the Shīʿah Rāfiḍah claim that Ibn Taymiyyah refutes, what is "the most important principle" of religion?', choices: ['Al-Imāmah (leadership/succession)', 'Tawḥīd', 'Ṣalāh', 'Zakāh'], correct: 0 },
        { q: 'What did the Prophet ﷺ actually require of people converting to Islam?', choices: ['The Shahādah, Prayer, and Zakāh', 'Belief in a specific hidden Imām', 'Recognition of twelve successors', 'Nothing beyond verbal agreement'], correct: 0 },
        { q: "What problem does Ibn Taymiyyah highlight with the Shīʿah Imām's status?", choices: ["He has been in hiding (ghaybah) for over a thousand years, providing no accessible guidance", 'He was never actually born', 'He converted to a different religion', 'He renounced his own claim to Imāmah'], correct: 0 },
      ]
    },
    {
      id: 'ch2', icon: '📖', label: 'Chapter 2 — Which Sect?', subtitle: 'Why the Shīʿah Claim of Exclusivity Fails', color: 'var(--emerald)',
      intro: "The Rāfiḍah claim that only their sect holds the correct creed. Ibn Taymiyyah responds by showing the Companions were the praised generation according to the Qurʾān itself, and that the Rāfiḍī framing of the Companions' history does not match the record.",
      bullets: [
        { label: 'The Shīʿah Claim', text: 'That it is obligatory to follow the Shīʿah Imāmiyyah specifically because they alone took their religion from "the infallibles."' },
        { label: 'Qurʾānic Praise of the Companions', text: 'Multiple verses (e.g. 9:100, 48:29) praise the Muhājirūn, Anṣār, and those who followed them in good — declaring Allāh was pleased with them.' },
        { label: 'The Best-Generation Principle', text: '"The best of people are those in my generation, then those who come after them" — a Prophetic statement that stands in tension with declaring most Companions corrupt.' },
        { label: 'The Rāfiḍī Division of People', text: "The Shīʿah text divides people after the Prophet's death into four groups, only one of which sought truth. Ibn Taymiyyah argues this framing has no basis in the actual historical record." },
      ],
      qanda: [
        { q: 'What do the Qurʾānic verses about the Companions establish, according to Ibn Taymiyyah?', a: 'That their virtue is affirmed by revelation itself, not merely by later scholarly opinion — meaning any claim that most of them were corrupt directly contradicts the Qurʾān\'s own praise of them.' },
        { q: 'What is the "best generation" principle and how does it bear on this debate?', a: "The Prophet ﷺ described his own generation as the best of the Ummah. A theology that treats most Companions as apostates or misguided is, in Ibn Taymiyyah's argument, in tension with this description of them as the best generation." },
        { q: 'What is the Islamic ruling on speaking ill of the Companions, according to the texts cited?', a: 'The Prophet ﷺ instructed against reviling his Companions, saying that even a great expenditure in charity by a later Muslim would not match the reward of a small charitable act by one of them.' },
      ],
      quiz: [
        { q: 'Which Qurʾānic term describes the group of early emigrants praised alongside the Anṣār?', choices: ['Al-Muhājirūn', 'Al-Rāfiḍah', 'Al-Māturīdiyyah', 'Al-Khawārij'], correct: 0 },
        { q: 'What did the Prophet ﷺ say about his own generation relative to those after it?', choices: ['That it was the best generation', 'That it was the most corrupt generation', 'That it would be forgotten', 'That it required an infallible Imām to be valid'], correct: 0 },
      ]
    },
    {
      id: 'ch3', icon: '⚡', label: "Chapter 3 — ʿAlī's Leadership", subtitle: 'The Ghadīr Khum Arguments Examined', color: 'var(--burgundy-deep)',
      intro: "The Rāfiḍah present numerous arguments — rational, Qurʾānic, and ḥadīth-based — that ʿAlī ibn Abī Ṭālib was divinely appointed as the Prophet's immediate successor. This is the longest chapter in the book; the table below summarizes the main arguments and Ibn Taymiyyah's responses.",
      bullets: [
        { label: 'حديث غدير خم (Ḥadīth Ghadīr Khum)', text: '"Whoever I am his mawlā, ʿAlī is his mawlā." The Rāfiḍah read mawlā as "political successor"; Ibn Taymiyyah argues mawlā primarily means helper/close friend in Arabic, and that no Companion present understood it as a declaration of succession.' },
        { label: 'حديث هارون وموسى (The "Aaron to Moses" Ḥadīth)', text: '"You are to me as Hārūn was to Mūsā." Ibn Taymiyyah notes Hārūn did not succeed Mūsā — and the Prophet ﷺ himself qualified the comparison by adding "except there is no prophet after me."' },
        { label: 'The Rational (ʿAqlī) Argument', text: "The Rāfiḍah reason: a leader must be infallible → only ʿAlī was infallible → therefore ʿAlī must lead. Ibn Taymiyyah replies that the truly infallible guide is the Prophet ﷺ himself, whose Sunnah is preserved and accessible — unlike a hidden Imām who provides no benefit." },
        { label: 'The Decisive Test', text: 'If ʿAlī were divinely appointed by these texts, why did he himself never invoke them, instead giving bayʿah to Abū Bakr and praying behind him?' },
      ],
      sectsTable: [
        { name: 'Ghadīr Khum Ḥadīth', error: 'Mawlā = political successor; ʿAlī appointed as Imām', correct: "Mawlā means helper/friend; no Companion understood it as political appointment; ʿAlī never cited it as caliphate proof" },
        { name: '"Aaron to Moses" Ḥadīth', error: "ʿAlī is the Prophet's successor as Hārūn was to Mūsā", correct: "Hārūn did not succeed Mūsā — Yūshaʿ did; the Prophet ﷺ said \"no prophet after me,\" limiting the comparison" },
        { name: 'Āyat al-Wilāyah (5:55)', error: 'Revealed about ʿAlī giving his ring as charity while bowing', correct: '"Those" is plural in Arabic; giving charity mid-prayer is not an established practice; the context concerns disbelievers, not Imāmah' },
        { name: 'Āyat al-Tablīgh (5:67)', error: "Commanded the Prophet ﷺ to declare ʿAlī's Imāmah", correct: 'No mention of ʿAlī or Imāmah appears in the verse; its context concerns conveying the message to the People of the Book' },
        { name: 'Āyat al-Taṭhīr (33:33)', error: 'ʿAlī, Fāṭimah, Ḥasan, and Ḥusayn are infallible leaders', correct: "The verse's surrounding context addresses the Prophet's wives; removing impurity does not establish political appointment" },
      ],
      tableHeaders: ['Argument', "Shīʿah Reading", "Ibn Taymiyyah's Response"],
      tableLabel: "📋 The Main Ghadīr-Era Arguments and Their Answers",
      qanda: [
        { q: 'What is the Ḥadīth of Ghadīr Khum and how does Ibn Taymiyyah read it?', a: 'At Ghadīr Khum, the Prophet ﷺ said: "Whoever I am his mawlā, ʿAlī is his mawlā." The Rāfiḍah read this as appointing ʿAlī as political successor. Ibn Taymiyyah responds that mawlā primarily means a helper or beloved friend in Arabic — not "ruler" — and points out that no Companion present, including Abū Bakr or ʿUmar, understood the statement as a declaration of political succession, nor did ʿAlī himself ever cite it during the actual dispute over leadership.' },
        { q: 'What is the "Aaron to Moses" argument and its response?', a: 'The Prophet ﷺ told ʿAlī, "You are to me as Hārūn was to Mūsā," which the Rāfiḍah read as proof of succession. Ibn Taymiyyah notes that Hārūn (Aaron) did not succeed Mūsā (Moses) — Hārūn died before him — so the comparison establishes closeness, not succession. The Prophet ﷺ himself limited the comparison by adding "except there is no prophet after me."' },
        { q: 'What is the rational (ʿaqlī) argument for an infallible Imām, and how is it answered?', a: 'The argument runs: people need a leader; that leader must be infallible to avoid an endless chain of fallible leaders; therefore an infallible Imām, namely ʿAlī and his line, is necessary. Ibn Taymiyyah answers that the Prophet ﷺ already fills the role of the infallible guide, and that his Sunnah is fully preserved and accessible — so no additional, and in practice unreachable, infallible Imām is needed.' },
      ],
      quiz: [
        { q: 'What does the Arabic word "mawlā" primarily mean, according to Ibn Taymiyyah\'s reading?', choices: ['Helper / close friend', 'Political ruler', 'Prophet', 'Judge'], correct: 0 },
        { q: 'In the "Aaron to Moses" comparison, what key historical fact does Ibn Taymiyyah point out?', choices: ['Hārūn (Aaron) died before Mūsā (Moses) and did not succeed him', 'Hārūn actually did succeed Mūsā', 'The comparison never happened', 'Hārūn was younger than ʿAlī'], correct: 0 },
        { q: "What does Ibn Taymiyyah say fills the role that the Rāfiḍah assign to an infallible Imām?", choices: ["The Prophet ﷺ himself, through his preserved and accessible Sunnah", 'A council of scholars', 'The Mongol king', 'No one — the role is left unfilled in Islam'], correct: 0 },
      ]
    },
    {
      id: 'ch4', icon: '🔮', label: 'Chapter 4 — The Twelve Imāms', subtitle: 'The Hidden Imām Problem', color: 'var(--grey-accent)',
      intro: "The Ithnā ʿAshariyyah (Twelver) Shīʿah hold that twelve specific Imāms from the Prophet's family were divinely appointed in sequence, and that the twelfth entered occultation (al-ghaybah) as a child in 260H, to return before the Day of Judgment. Ibn Taymiyyah examines this claim from several angles.",
      bullets: [
        { label: 'الغيبة (Al-Ghaybah — The Occultation)', text: 'The claim that Muḥammad ibn al-Ḥasan al-ʿAskarī, said to be five years old, entered hiding in 260H and remains alive and hidden today.' },
        { label: 'Not Accepted by Other Shīʿah Sects', text: 'The Zaydiyyah, Ismāʿīliyyah, and other Shīʿah groups reject this specific narrative — meaning it is far from a universally-held "concurrent" report even within Shīʿism.' },
        { label: 'When the Claim Appears', text: "Ibn Taymiyyah argues this specific narrative only appears in the historical record after al-ʿAskarī's death — not earlier." },
        { label: "The Practical Question", text: 'If an infallible guide has been inaccessible for over a thousand years, what benefit does his existence provide his followers in practice?' },
        { label: 'Al-Mahdī — The Authentic Position', text: "Ahl al-Sunnah accept authentic narrations about a future Mahdī who will appear openly and fill the earth with justice — distinct from the claim of a person already born and hidden since 260H." },
      ],
      qanda: [
        { q: 'What is the Twelver Shīʿah claim about the twelfth Imām?', a: 'That Muḥammad ibn al-Ḥasan al-ʿAskarī entered occultation (ghaybah) as a young child in 260H and remains alive in hiding, to reappear before the Day of Judgment.' },
        { q: 'Why does Ibn Taymiyyah question the claim that this is a "concurrent" (mutawātir) report?', a: 'Because other major Shīʿah sects — the Zaydiyyah and Ismāʿīliyyah among them — do not accept this specific account, which undercuts the claim that it was universally transmitted and beyond dispute even among Shīʿah themselves.' },
        { q: "What is the difference between the Sunni and Twelver Shīʿah understanding of the Mahdī?", a: "Ahl al-Sunnah hold that a Mahdī will appear openly in the future and fill the earth with justice, based on authentic narrations. The Twelver Shīʿah position holds that this figure was already born in the 3rd century AH and has been hidden ever since — a claim Ibn Taymiyyah treats as unestablished." },
      ],
      quiz: [
        { q: 'In what century (AH) did the claimed occultation (ghaybah) of the twelfth Imām begin?', choices: ['3rd century AH (260H)', '1st century AH', '7th century AH', '10th century AH'], correct: 0 },
        { q: 'Which other Shīʿah sects does Ibn Taymiyyah note reject the Twelver occultation narrative?', choices: ['The Zaydiyyah and Ismāʿīliyyah', 'The Ḥanafīs and Shāfiʿīs', 'The Ashʿarīs and Māturīdīs', 'There are no other Shīʿah sects'], correct: 0 },
        { q: "What is the Ahl al-Sunnah understanding of the Mahdī?", choices: ['A figure who will appear openly in the future, not someone already hidden for centuries', 'The same as the Twelver occultation claim', 'A purely symbolic concept with no real figure', 'A title held by every Caliph'], correct: 0 },
      ]
    },
    {
      id: 'ch5', icon: '⭐', label: 'Chapter 5 — The First Three Caliphs', subtitle: 'Defense of Abū Bakr, ʿUmar & ʿUthmān', color: 'var(--emerald-light)',
      intro: "The Rāfiḍah extensively criticize the leadership of Abū Bakr, ʿUmar, and ʿUthmān. Ibn Taymiyyah defends all three, arguing their legitimacy is established by the consensus (ijmāʿ) of the Companions — including ʿAlī himself.",
      bullets: [
        { label: 'البيعة (Al-Bayʿah — The Pledge)', text: "Abū Bakr's caliphate was established through the bayʿah of the Companions, including ʿAlī, at Saqīfah Banī Sāʿidah." },
        { label: "ʿAlī's Own Testimony", text: 'ʿAlī declared from the pulpit in Kūfah: "The best of this community after its Prophet is Abū Bakr and then ʿUmar" — recorded in Bukhārī, Abū Dāwūd, and Ibn Mājah.' },
        { label: "On ʿUmar's Knowledge", text: 'The claim that ʿUmar lacked knowledge of Islamic law is addressed case by case; his rulings are studied across Islamic legal scholarship as examples of sound reasoning.' },
        { label: "On ʿUthmān's Murder", text: 'The claim that Muslims collectively agreed to kill ʿUthmān is rejected — he was killed by a rebellious faction that the Companions, including ʿAlī, publicly condemned.' },
        { label: 'The Fitnah Between Companions', text: 'Ahl al-Sunnah hold that all parties in the civil strife acted as sincere mujtahids — the correct side receiving two rewards, the mistaken side one — rather than treating either side as villainous.' },
      ],
      qanda: [
        { q: "How was Abū Bakr's caliphate established, and why does Ibn Taymiyyah consider it legitimate?", a: 'Through the bayʿah (pledge) of the Companions, including ʿAlī, shortly after the Prophet\'s death. ʿAlī\'s own later public statement affirming Abū Bakr and ʿUmar as the best of the community after the Prophet is treated as decisive testimony against the claim that he considered the caliphate usurped.' },
        { q: 'Did ʿAlī oppose Abū Bakr\'s caliphate, according to the evidence Ibn Taymiyyah presents?', a: "No — Ibn Taymiyyah presents ʿAlī's own recorded statement affirming Abū Bakr and ʿUmar's precedence, his continued prayer behind both of them, and the absence of any recorded claim by ʿAlī himself to have been divinely appointed and denied his right." },
        { q: "What is the Ahl al-Sunnah position on the civil wars between Companions?", a: "That the participants on differing sides were sincere mujtahids rather than wrongdoers acting in bad faith — the party that was correct receives two rewards, the mistaken party one — and that Muslims should seek Allāh's mercy for all of them rather than take sides beyond what the texts establish." },
      ],
      quiz: [
        { q: "How was Abū Bakr's caliphate established?", choices: ["Through the bayʿah (pledge of allegiance) of the Companions", 'By hereditary right', 'By a written appointment from the Prophet ﷺ', 'By military conquest'], correct: 0 },
        { q: 'What did ʿAlī himself say about Abū Bakr and ʿUmar from the pulpit in Kūfah?', choices: ['That they were the best of the community after the Prophet', 'That they had wrongfully taken his right', 'That he refused to recognize their leadership', 'Nothing — he never commented on them'], correct: 0 },
        { q: "What is the Ahl al-Sunnah view of Companions on opposing sides of the civil wars?", choices: ['Both sides were sincere mujtahids, not wrongdoers', 'One side was entirely evil', 'Neither side deserves any respect', 'The wars never actually happened'], correct: 0 },
      ]
    },
    {
      id: 'aisha', icon: '🌙', label: "Defense of ʿĀʾishah", subtitle: 'Umm al-Muʾminīn', color: 'var(--burgundy)',
      intro: "The Rāfiḍah make specific allegations against ʿĀʾishah RA. Ibn Taymiyyah defends her using the Qurʾān, Sunnah, and the historical record of her scholarly standing among the Companions.",
      bullets: [
        { label: 'البراءة (Al-Barāʾah — Her Innocence)', text: 'Her innocence from slander was declared directly in the Qurʾān (24:11-20) — a matter of revelation, not human judgment.' },
        { label: 'Her Scholarly Standing', text: 'She narrated over 2,000 ḥadīths and was consulted by senior male Companions on matters of religious law, per multiple narrations.' },
        { label: 'أم المؤمنين (Umm al-Muʾminīn)', text: 'As a wife of the Prophet ﷺ, she holds the status of "Mother of the Believers" (Q 33:6) — love and honor for her is part of honoring the Prophet ﷺ himself.' },
        { label: 'The Battle of the Camel', text: 'Ibn Taymiyyah treats her involvement as that of a sincere mujtahidah acting on what she believed was a just cause, not as sin — noting she later expressed regret over the outcome.' },
      ],
      qanda: [
        { q: "What is the basis for ʿĀʾishah's innocence from the slander leveled against her?", a: 'It was declared directly by revelation, in Qurʾān 24:11-20 — meaning her innocence rests on the highest possible textual authority, not merely on later scholarly defense.' },
        { q: "What does her scholarly record show?", a: 'She is reported to have narrated over 2,000 ḥadīths, and multiple narrations describe senior Companions consulting her on matters of Islamic law and the Prophet\'s ﷺ private practice.' },
        { q: "How does Ibn Taymiyyah frame her role at the Battle of the Camel?", a: 'As a sincere mujtahidah acting on what she believed was a just cause — seeking accountability after ʿUthmān\'s murder — rather than as willful wrongdoing, noting she later expressed regret over how events unfolded.' },
      ],
      quiz: [
        { q: "Where was ʿĀʾishah's innocence from slander established?", choices: ['Directly in the Qurʾān (24:11-20)', 'Only in later scholarly opinion', 'It was never formally addressed', 'In a private statement from Abū Bakr'], correct: 0 },
        { q: 'What title does the Qurʾān give to the wives of the Prophet ﷺ, including ʿĀʾishah?', choices: ['Umm al-Muʾminīn (Mother of the Believers)', 'Ṣaḥābiyyāt only', 'Munāfiqāt', 'No special title is given'], correct: 0 },
      ]
    },
    {
      id: 'companions', icon: '🌟', label: 'Defense of Other Companions', subtitle: "Muʿāwiyah, Khālid ibn al-Walīd, and Others", color: 'var(--burgundy-light)',
      intro: 'Beyond the Caliphs and ʿĀʾishah, the Rāfiḍah level specific allegations at other Companions. Ibn Taymiyyah addresses Muʿāwiyah ibn Abī Sufyān and Khālid ibn al-Walīd directly, within the general Ahl al-Sunnah framework for evaluating Companions involved in later disputes.',
      bullets: [
        { label: 'معاوية بن أبي سفيان (Muʿāwiyah ibn Abī Sufyān)', text: "A Companion of the Prophet ﷺ and a scribe of revelation. In his dispute with ʿAlī, Ahl al-Sunnah regard him as the erring mujtahid — not as someone to be cursed." },
        { label: 'خالد بن الوليد (Khālid ibn al-Walīd)', text: '"The Sword of Allāh" — a title given by the Prophet ﷺ himself. Disputed incidents attributed to him are treated as, at most, matters of ijtihād rather than proof of wrongdoing.' },
        { label: 'The General Principle', text: "Companions who took differing sides in the later civil strife are not, on that basis alone, stripped of their status — their broader record of service and sacrifice is weighed as a whole." },
        { label: 'On Yazīd and Karbalāʾ', text: "Ibn Taymiyyah takes a measured position: the killing of al-Ḥusayn was a real tragedy, but this does not translate into cursing Yazīd by name, nor into treating the event as a basis for new religious observance." },
      ],
      qanda: [
        { q: 'What is the Ahl al-Sunnah position on Muʿāwiyah RA?', a: 'That he was a genuine Companion of the Prophet ﷺ and a scribe of revelation; in his dispute with ʿAlī he is regarded as the party that erred in ijtihād, deserving of one reward for sincere effort — not as someone to be cursed or vilified.' },
        { q: 'How does Ibn Taymiyyah address disputed incidents involving Khālid ibn al-Walīd?', a: 'By treating them, where they cannot be firmly established, as at most matters of disputed ijtihād during a genuinely difficult period (the wars against apostasy) — set against Khālid\'s extensive and well-attested service to Islam, for which the Prophet ﷺ himself praised him.' },
        { q: "What is Ibn Taymiyyah's position on the tragedy of Karbalāʾ?", a: "That al-Ḥusayn's killing was a genuine wrong, but this does not warrant cursing Yazīd by name — since his exact culpability is not established with certainty — nor does it warrant turning the event into a new ritual observance not practiced by the earliest Muslims." },
      ],
      quiz: [
        { q: 'What title did the Prophet ﷺ give to Khālid ibn al-Walīd?', choices: ['"The Sword of Allāh"', '"The Trustworthy"', '"The Truthful"', '"The Just"'], correct: 0 },
        { q: "How does Ahl al-Sunnah generally regard Muʿāwiyah's role in his dispute with ʿAlī?", choices: ['As the erring mujtahid, not as someone to be cursed', 'As entirely without fault', 'As a non-Muslim', 'As having no connection to the Prophet ﷺ at all'], correct: 0 },
      ]
    },
    {
      id: 'method', icon: '🔍', label: "Ibn Taymiyyah's Method", subtitle: 'Logic, Text, History, and Consistency', color: 'var(--grey-accent)',
      intro: "Beyond refuting specific claims, Ibn Taymiyyah applies a consistent set of methodological principles throughout the book — worth understanding on their own, since they apply broadly to evaluating any theological argument.",
      bullets: [
        { label: 'Ḥadīth Criticism First', text: 'Any narration used to support a claim must have a sound chain (isnād) — he repeatedly asks, "where is the chain of this report?"' },
        { label: 'إجماع الصحابة (Consensus of the Companions)', text: "Their agreement on accepting Abū Bakr, ʿUmar, and ʿUthmān's leadership is treated as decisive, outweighing isolated or later-appearing reports." },
        { label: 'Exposing Internal Contradiction', text: 'He repeatedly shows the Rāfiḍī position undermines itself — e.g., claiming to follow ʿAlī while rejecting what ʿAlī himself stated.' },
        { label: 'The Qurʾānic Standard', text: "When a verse is cited as proof, he checks its actual context, its Arabic grammar, and whether any Companion — including ʿAlī — ever understood it the way later Rāfiḍī scholars do." },
        { label: 'Turning Arguments Back on Their Source', text: "If the Rāfiḍah's own reports must be mutawātir (concurrently transmitted) to be reliable, why do most other Shīʿah sects not transmit or accept them?" },
      ],
      qanda: [
        { q: 'What is the first test Ibn Taymiyyah applies to any narration used as proof?', a: 'Whether it has a sound chain of transmission (isnād) — he treats ḥadīth criticism as a prerequisite to any theological argument built on a narration.' },
        { q: 'Why does the consensus of the Companions carry special weight in his method?', a: 'Because it represents the collective judgment of the generation the Qurʾān itself praises, reached at the time closest to the events in question — outweighing isolated reports that surface generations later.' },
        { q: 'Give an example of how Ibn Taymiyyah exposes internal contradiction in the Rāfiḍī position.', a: 'He points out that claiming to follow ʿAlī while rejecting ʿAlī\'s own recorded statement praising Abū Bakr and ʿUmar is internally inconsistent — a follower of ʿAlī should, by the Rāfiḍah\'s own logic, accept what ʿAlī himself said.' },
      ],
      quiz: [
        { q: "What does Ibn Taymiyyah demand before accepting any narration as proof?", choices: ['A sound chain of transmission (isnād)', 'Popular acceptance alone', 'Agreement with personal preference', 'Nothing — all narrations are treated equally'], correct: 0 },
        { q: "Why does he treat the Companions' consensus as especially authoritative?", choices: ["It reflects the judgment of the generation closest to events, which the Qur'an itself praises", 'Because it was written down centuries later', "Because it agrees with the Rāfiḍah's position", 'It is not actually treated as significant'], correct: 0 },
      ]
    },
    {
      id: 'sunnipos', icon: '🤍', label: 'The Ahl al-Sunnah Position', subtitle: 'On the Caliphate and the Companions', color: 'var(--emerald)',
      intro: 'After answering the Rāfiḍī claims, Ibn Taymiyyah summarizes the constructive Ahl al-Sunnah position on the caliphate, the Companions, and Islamic leadership generally — the positive conclusion the whole book builds toward.',
      bullets: [
        { label: 'ترتيب الخلفاء (The Order of the Caliphs)', text: 'Abū Bakr, then ʿUmar, then ʿUthmān, then ʿAlī — established by the consensus of the Companions and by ʿAlī\'s own testimony.' },
        { label: 'On the Companions Generally', text: 'Love them all, seek mercy for all, curse none, and do not take sides in their disputes beyond what the texts themselves establish.' },
        { label: 'On Obedience to Rulers', text: 'Obey in what is good, and do not take up arms against a ruler even where he is unjust — patience is commanded, not rebellion.' },
        { label: 'On Leadership Generally', text: "The Ummah does not require an infallible hidden Imām to be guided — the preserved Qurʾān, authenticated Sunnah, and the example of the Companions are sufficient." },
      ],
      sectsTable: [
        { name: 'Al-Imāmah', error: 'Most important religious principle; an obligatory belief', correct: 'Tawḥīd and belief in the Messenger come first; Imāmah is not a pillar of faith' },
        { name: "Abū Bakr's Caliphate", error: "Usurpation of ʿAlī's right", correct: "Legitimate, by the Companions' consensus; ʿAlī himself affirmed it" },
        { name: 'The Companions', error: 'Most were apostates except a handful', correct: 'All honored by the Qurʾān; love for them is part of the faith' },
        { name: 'The Twelve Imāms', error: 'Divinely appointed and infallible', correct: "Respected scholarly figures from the Prophet's family; not infallible or divinely appointed" },
        { name: 'The Hidden Imām', error: 'In occultation since 260H, will return', correct: 'His existence and status are unestablished by sound evidence' },
      ],
      tableHeaders: ['Topic', 'Rāfiḍī Position', 'Ahl al-Sunnah Position'],
      tableLabel: '📋 Key Theological Differences at a Glance',
      qanda: [
        { q: 'What is the Ahl al-Sunnah order of precedence for the four Rightly-Guided Caliphs?', a: "Abū Bakr first, then ʿUmar, then ʿUthmān, then ʿAlī — based on the Companions' consensus and ʿAlī's own public statement affirming Abū Bakr and ʿUmar's precedence." },
        { q: 'What is the Ahl al-Sunnah position on obeying an unjust ruler?', a: 'To obey him in what is good and to refrain from armed rebellion, exercising patience rather than taking up the sword against him — a position aimed at preserving the unity and stability of the Muslim community.' },
        { q: "What are the main takeaways of the book, in summary?", a: "That the Qurʾān itself praises the Companions collectively; that ḥadīth criticism is the proper tool for evaluating any narration used to argue otherwise; that ʿAlī himself affirmed Abū Bakr and ʿUmar's precedence; that an inaccessible hidden Imām provides no practical religious guidance; and that Ahl al-Sunnah's method — Qurʾān, Sunnah, and the consensus of the Companions — provides complete guidance without requiring an infallible Imām." },
      ],
      quiz: [
        { q: 'What is the Ahl al-Sunnah order of the four Caliphs, from first to last?', choices: ['Abū Bakr, ʿUmar, ʿUthmān, ʿAlī', 'ʿAlī, Abū Bakr, ʿUmar, ʿUthmān', 'ʿUmar, Abū Bakr, ʿAlī, ʿUthmān', 'There is no established order'], correct: 0 },
        { q: 'What does Ahl al-Sunnah say about rebelling against an unjust ruler?', choices: ['Obey in what is good and refrain from armed rebellion', 'Armed rebellion is always obligatory', 'The ruler should simply be ignored', 'There is no guidance on this matter'], correct: 0 },
        { q: "According to the summary, what three sources provide complete religious guidance without needing an infallible Imām?", choices: ['The Qurʾān, the Sunnah, and the consensus of the Companions', 'Only personal opinion', 'Only the writings of Ibn Taymiyyah', 'Only the rulings of the Twelve Imāms'], correct: 0 },
      ]
    },
  ]
});
