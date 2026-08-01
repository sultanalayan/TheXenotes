/* XENOS NOTES — book module
 * To add a new book: copy this file's shape, fill in the metadata + sections, save
 * it as books/<your-slug>.js, then add one <script> line in index.html. That's it —
 * the shared engine (app.js) handles rendering, navigation, search, and styling. */
XenosBooks.register({
  slug: 'sharh-al-sunnah',
  title: 'Sharḥ al-Sunnah of al-Muzanī',
  subtitle: 'Commentary by al-ʿAllāmah Aḥmad ibn Yaḥyā al-Najmī (d.1429H) · 9 Core Points of Athari Aqeedah',
  icon: '📜',
  category: 'Aqeedah',
  arabicBg: 'شرح السنة',
  tags: ['Aqeedah', 'Iman', 'Qadar', 'Ṣifāt', 'Hereafter', 'Companions', 'Deviant Sects'],
  footer: 'Al-Muzanī (d.264H) · Commentary by al-Najmī (d.1429H) · Sunnah Publishing',

  sections: [
    {
      id: 'authors', icon: '📜', label: 'The Two Authors', subtitle: 'Al-Muzanī & Al-Najmī', color: 'var(--burgundy)',
      intro: 'Al-Muzanī (d.264H) was the foremost student of Imām al-Shāfiʿī — called "the standard-bearer of my school." Al-Najmī (d.1429H) was Grand Muftī of Jīzān Province, Saudi Arabia, and one of the senior scholars of Ahlus-Sunnah in the 20th century. His commentary makes this 9th-century classical text accessible for every Muslim today.',
      bullets: [
        { label: "Al-Muzanī's Full Name", text: "Abū Ibrāhīm Ismāʿīl ibn Yaḥyā al-Muzanī al-Miṣrī (175–264 AH)" },
        { label: "His Primary Teacher", text: "Imām Muḥammad ibn Idrīs al-Shāfiʿī — al-Muzanī accompanied him closely and rarely left Egypt" },
        { label: "Al-Shāfiʿī on al-Muzanī", text: '"Al-Muzanī is the standard-bearer of my school" — the highest praise' },
        { label: "His Famous Student", text: "Abū Jaʿfar al-Ṭaḥāwī (d.321H) — author of al-ʿAqīdah al-Ṭaḥāwiyyah — was the son of al-Muzanī's sister" },
        { label: "Al-Najmī (Commentator)", text: "Aḥmad ibn Yaḥyā al-Najmī (1346–1429 AH) — Grand Muftī of Jīzān, senior scholar of Ahlus-Sunnah, firm Athari aqeedah" },
      ],
      qanda: [
        { q: "Who was al-Muzanī and what was his relationship to al-Shāfiʿī?", a: "Abū Ibrāhīm Ismāʿīl al-Muzanī (175–264 AH) was the foremost student of Imām al-Shāfiʿī. He accompanied his teacher closely and rarely traveled beyond Egypt. Al-Shāfiʿī called him 'the standard-bearer of my school' — the highest praise a teacher can give. Al-Muzanī was so devoted that he rarely sought knowledge from others, sufficing with al-Shāfiʿī and scholars who visited Egypt." },
        { q: "How do al-Muzanī and al-Ṭaḥāwī connect?", a: "Abū Jaʿfar al-Ṭaḥāwī (d.321H) — author of the world-famous al-ʿAqīdah al-Ṭaḥāwiyyah — was the son of al-Muzanī's sister and also studied under al-Muzanī directly. This makes Sharḥ al-Sunnah and al-ʿAqīdah al-Ṭaḥāwiyyah sister texts — both expressing the same Athari creed from the same scholarly lineage." },
        { q: "Why does al-Muzanī matter for Athari theology?", a: "Al-Muzanī (d.264H) wrote before the Ashʿarī (born ~260H) and Māturīdī (d.333H) theological schools developed. His creed represents the undiluted early Athari position — what the students of al-Shāfiʿī and Aḥmad actually believed. When you read this text, you are reading first-generation post-Tābiʿūn scholarship — not later theological development." },
        { q: "What did al-Muzanī write besides Sharḥ al-Sunnah?", a: "His greatest work was the Mukhtaṣar — the fiqh masterpiece he spent 20 years writing and rewrote three times. He said: 'If al-Shāfiʿī had reached me, he would have listened to this Mukhtaṣar from me.' Ibn Surayj called it 'the primary source for all books written about the Shāfiʿī madhhab.' Other works: Ifsād al-Taqlīd, al-Targhīb fī al-ʿIlm, and al-Jāmiʿ al-Kabīr." },
      ],
      quiz: [
        { q: "Who was al-Muzanī's primary teacher?", choices: ["Imām al-Shāfiʿī", "Imām Abū Ḥanīfah", "Imām Aḥmad ibn Ḥanbal", "Imām Mālik"], correct: 0 },
        { q: "What did al-Shāfiʿī call al-Muzanī?", choices: ['"The standard-bearer of my school"', '"The greatest liar of his time"', "A fellow Companion", "An innovator"], correct: 0 },
        { q: "Which famous scholar was al-Muzanī's nephew and student, later writing al-ʿAqīdah al-Ṭaḥāwiyyah?", choices: ["Abū Jaʿfar al-Ṭaḥāwī", "Aḥmad ibn Ḥanbal", "Ibn Taymiyyah", "Al-Bukhārī"], correct: 0 },
      ]
    },
    {
      id: 'context', icon: '📖', label: 'Why Was It Written?', subtitle: 'The Occasion & Purpose', color: 'var(--emerald)',
      intro: 'This text was not a textbook — it was a personal creedal declaration under pressure. Al-Muzanī was falsely accused of holding deviant beliefs about Qadar and the Qurʾān. He responded by writing Sharḥ al-Sunnah as definitive proof of his correct aqeedah, point by point.',
      bullets: [
        { label: "The Accusation", text: "A group in Tripoli accused al-Muzanī of 'speaking about Qadar and arguing with qiyās and philosophical speculation'" },
        { label: "Their Concern", text: "They feared this indicated Qadarī or Muʿtazilī views — both deviant sects of his era" },
        { label: "The Response", text: "Al-Muzanī replied with Sharḥ al-Sunnah — a concise, definitive statement of his aqeedah, point by point" },
        { label: "His Hope for the Book", text: '"Clarify to you from the Sunnah an affair that you may make yourself patient in adherence to it and avert thereby the doubtful sayings and the deviation in the newly-invented affairs of the misguided ones"' },
      ],
      qanda: [
        { q: "What accusations were made against al-Muzanī?", a: "Two accusations: (1) That he 'speaks about the Qadar' — suggesting Qadarī views denying divine pre-decree. (2) That he held 'waqf' regarding the Qurʾān — refusing to declare whether it was created or uncreated. Both were false. Sharḥ al-Sunnah was his definitive refutation of these accusations." },
        { q: "What is the 'waqf' position and why was it condemned?", a: "Waqf means 'withholding' — refusing to declare the Qurʾān created or uncreated. Some scholars held this out of excessive caution. However, scholars condemned it because: (1) It implied doubt about something that must be certain. (2) In practice it leaned toward the Muʿtazilī position. The correct position is unambiguous: the Qurʾān is Allāh's Speech and is NOT created." },
        { q: "Why does the format of the text matter?", a: "Because it's a personal creedal testimony, not academic theology. Every sentence is al-Muzanī saying 'this is exactly what I believe.' This gives each point the weight of a sincere declaration. It also means every point was actively contested in his era — al-Muzanī was choosing a side in live theological battles, not writing theoretical exercises." },
      ],
      quiz: [
        { q: "What was al-Muzanī falsely accused of?", choices: ["Holding Qadarī views and being unclear on the Qurʾān's createdness", "Fabricating ḥadīth", "Rejecting the Sunnah entirely", "Abandoning prayer"], correct: 0 },
        { q: 'What is the "waqf" position on the Qurʾān?', choices: ["Refusing to declare it created or uncreated", "Declaring it definitely created", "Declaring it definitely uncreated", "A position about prayer timing"], correct: 0 },
        { q: "Why did scholars condemn the waqf position?", choices: ["It implied doubt about something that must be certain, and leaned toward the Muʿtazilī view", "It was too extreme in the opposite direction", "It was simply unpopular", "It contradicted a specific madhhab only"], correct: 0 },
      ]
    },
    {
      id: 'iman', icon: '🤍', label: 'Point 1 — Īmān', subtitle: 'The Definition of Faith', color: 'var(--burgundy-light)',
      intro: 'Iman (faith) consists of three inseparable components: declaration with the tongue, belief in the heart, and action with the limbs. It increases with obedience and decreases with sin. This is the Athari definition — directly refuting the Murjiʾah who removed actions from Iman.',
      bullets: [
        { label: "Component 1 — Tongue", text: "Iqrār bil-lisān — Declaration with the tongue (the shahādah and all verbal acts of worship)" },
        { label: "Component 2 — Heart", text: "Taṣdīq bil-qalb — Sincere belief, affirmation, and conviction in the heart" },
        { label: "Component 3 — Limbs", text: "ʿAmal bil-jawāriḥ — Action with the limbs (performing obligations, avoiding prohibitions)" },
        { label: "Increases & Decreases", text: "Q 74:31, Q 48:4, Q 8:2 — all prove Iman increases and decreases. Unanimous position of the Companions and Salaf." },
        { label: "Sect Refuted", text: "The Murjiʾah — who removed actions from Iman and said sins do not decrease it" },
      ],
      qanda: [
        { q: "What are the 3 components of Iman according to Ahlus-Sunnah?", a: "(1) Iqrār bil-lisān — verbal declaration with the tongue (the shahādah and verbal worship). (2) Taṣdīq bil-qalb — sincere heartfelt belief. (3) ʿAmal bil-jawāriḥ — action with the limbs (performing obligations, avoiding prohibitions). All three are required. Mālik, al-Shāfiʿī, Aḥmad, and al-Bukhārī were unanimous on this." },
        { q: "Does Iman increase and decrease? What is the evidence?", a: "Yes, Iman increases and decreases. Evidence: 'And that the believers' faith would increase' (Q 74:31); 'So that they may increase in faith' (Q 48:4); 'When Allāh is mentioned, their hearts tremble, and when His verses are recited to them, it increases their faith' (Q 8:2). Iman increases through obedience, knowledge, and dhikr. It decreases through sins and heedlessness." },
        { q: "Who are the Murjiʾah and what is their error?", a: "The Murjiʾah 'postponed' judgment — removing actions from Iman. They said sins don't decrease Iman and good deeds don't increase it. Sub-groups: Murjiʾat al-Fuqahāʾ (Iman = belief + speech only, no action), Jahmiyyah (Iman = knowledge in heart only), Karrāmiyyah (Iman = speech only). All are wrong. The Companions were unanimous that actions are part of Iman." },
        { q: "Can a major sinner still be a Muslim?", a: "Yes — this is the Ahlus-Sunnah middle position between two extremes: The Murjiʾah said sins have no effect on Iman (wrong). The Khawārij said a major sinner becomes a kāfir (wrong). The Sunnah position: the major sinner is a believer with deficient Iman — under Allāh's will, punished or forgiven. He does not become a disbeliever through sin unless he denies an established religious obligation." },
      ],
      quiz: [
        { q: "What are the three components of Iman?", choices: ["Tongue, heart, and limbs (speech, belief, action)", "Only belief in the heart", "Only verbal declaration", "Belief and prayer only"], correct: 0 },
        { q: "Does Iman increase and decrease according to Ahlus-Sunnah?", choices: ["Yes — it increases through obedience and decreases through sin", "No — Iman never changes once attained", "It only ever decreases", "It only applies to converts"], correct: 0 },
        { q: "What is the core error of the Murjiʾah?", choices: ["Removing actions from the definition of Iman", "Removing belief from the definition of Iman", "Declaring major sinners disbelievers", "Denying Allāh's attributes"], correct: 0 },
        { q: "Does committing a major sin make someone a disbeliever, per Ahlus-Sunnah?", choices: ["No — he remains a believer with deficient Iman, unless he denies an established obligation", "Yes, immediately upon committing it", "Only if he repeats it three times", "Only sins related to prayer count"], correct: 0 },
      ]
    },
    {
      id: 'quran', icon: '📿', label: 'Point 2 — The Qurʾān', subtitle: 'Uncreated Speech of Allāh', color: 'var(--burgundy)',
      intro: 'The Qurʾān is Allāh\'s Speech — not created. This was the defining theological battle of al-Muzanī\'s era. Caliph al-Maʾmūn forced scholars to declare the Qurʾān created. Imām Aḥmad ibn Ḥanbal was flogged and imprisoned for refusing. Al-Muzanī\'s position was unambiguous.',
      bullets: [
        { label: "The Athari Position", text: "Qurʾān = Kalāmullāh (Speech of Allāh). Speech is Allāh's attribute. Allāh's attributes are not created. Therefore the Qurʾān is NOT created (makhlūq)." },
        { label: "The Proof", text: "Q 9:6 — 'so that he may hear the Speech of Allāh' — Allāh Himself calls it His Speech" },
        { label: "The Miḥnah (Inquisition)", text: "Caliph al-Maʾmūn (218H) adopted the Muʿtazilī position. Imām Aḥmad was flogged and imprisoned for refusing to say the Qurʾān was created. He persevered and became the symbol of Ahlus-Sunnah." },
        { label: "The Waqf Error", text: "'Withholding' on whether the Qurʾān is created or not was condemned as leaning toward the Muʿtazilī position" },
      ],
      qanda: [
        { q: "What is the Athari position on the Qurʾān?", a: "The Qurʾān is the Speech of Allāh (Kalāmullāh) — NOT created. Proof: 'so that he may hear the Speech of Allāh' (Q 9:6). Speech is Allāh's attribute. His attributes are not separate from Him. Allāh is not created — therefore His attribute of Speech — the Qurʾān — is uncreated. Al-Muzanī also affirms Allāh spoke it with real letters (ḥurūf) and sounds (aṣwāt) in a manner befitting His Majesty." },
        { q: "What was the Fitnah of Khalq al-Qurʾān?", a: "The Muʿtazilah claimed the Qurʾān was created (makhlūq). Caliph al-Maʾmūn (d.218H) adopted this and established the Miḥnah (Inquisition) — forcing scholars to agree or face imprisonment. Imām Aḥmad ibn Ḥanbal was flogged and imprisoned but refused to recant. The Miḥnah ended under al-Mutawakkil (232H) who restored the Athari position. This explains why al-Muzanī had to explicitly state his creed on this issue." },
        { q: "What is the difference between the Athari and Ashʿarī positions on the Qurʾān?", a: "The Ashʿariyyah developed Kalām Nafsī — 'inner speech' existing eternally in Allāh without letters or sounds. They say the actual Arabic Qurʾān (with letters and verses) is expressed through Jibreel's voice — making the expressed form 'created.' The Athari position: Allāh spoke the Qurʾān with real letters and sounds in a manner befitting Him — just as He directly spoke to Mūsā (Q 4:164). Al-Muzanī precedes the Ashʿarī school and represents the undiluted early position." },
        { q: "What does 'the Qurʾān is uncreated' mean practically?", a: "(1) The Qurʾān is divine — not human or angelic composition. It came directly from Allāh. (2) Revering it is obligatory — desecrating it is desecrating Allāh's Speech. (3) It is perfectly preserved — Allāh promised to protect it (Q 15:9). (4) Its guidance is absolutely authoritative — not a human document subject to cultural revision or reinterpretation based on modernity." },
      ],
      quiz: [
        { q: "What is the Athari position on the Qurʾān?", choices: ["It is Allāh's uncreated Speech", "It was created by Allāh like everything else", "Its status is unknown and should not be discussed", "It only became Allāh's word after Jibrīl recited it"], correct: 0 },
        { q: "What was the Miḥnah?", choices: ["An inquisition forcing scholars to declare the Qurʾān created", "A pilgrimage ritual", "A method of ḥadīth transmission", "A theological school founded by al-Ashʿarī"], correct: 0 },
        { q: "Who was flogged and imprisoned for refusing to say the Qurʾān was created?", choices: ["Imām Aḥmad ibn Ḥanbal", "Imām al-Shāfiʿī", "Al-Muzanī", "Al-Bukhārī"], correct: 0 },
      ]
    },
    {
      id: 'attributes', icon: '✨', label: 'Point 3 — Attributes', subtitle: 'Affirm Without Likening', color: 'var(--emerald-light)',
      intro: 'Affirm every attribute Allāh described Himself with or that the Prophet ﷺ described Him with. Negate any resemblance to creation. Do not ask "how." Do not reinterpret the meaning away from its Arabic meaning. The master verse that captures this entire methodology: Q 42:11.',
      bullets: [
        { label: "Master Verse", text: "Q 42:11 — 'There is nothing like Him — and He is the All-Hearing, All-Seeing.' Negates resemblance (no tashbīh) AND affirms real attributes (no taʿṭīl) simultaneously." },
        { label: "The 4-Step Method", text: "1. Read the text exactly as it came.\n2. Accept the linguistic meaning Arabic gives it.\n3. Negate any resemblance to creation (tanzīh).\n4. Leave the 'how' (kayfiyyah) to Allāh — do NOT ask how." },
        { label: "Taʿṭīl (Stripping)", text: "Denying/stripping Allāh's attributes entirely — the error of the Jahmiyyah and Muʿtazilah" },
        { label: "Tashbīh (Likening)", text: "Likening Allāh's attributes to those of creation — the error of the anthropomorphists (Mujassimah)" },
        { label: "Taʾwīl (Reinterpretation)", text: "Reinterpreting attributes to something other than their Arabic meaning — also rejected by Ahlus-Sunnah" },
      ],
      qanda: [
        { q: "What is the difference between taʿṭīl, tashbīh, and taʾwīl?", a: "Tashbīh: Likening Allāh's attributes to creation — e.g. 'Allāh has a hand like our hands.' Error of the Mujassimah. Taʿṭīl: Denying Allāh's attributes entirely — e.g. 'Allāh has no hand, no face, no attributes.' Error of the Jahmiyyah. Taʾwīl (blameworthy): Reinterpreting attributes away from their Arabic meaning — e.g. 'hand means power, face means essence.' The Athari position rejects all three: affirm the Arabic meaning, negate resemblance, leave the 'how' to Allāh." },
        { q: "What specific attributes did al-Muzanī affirm?", a: "All attributes established in Qurʾān and authentic Sunnah: ʿIlm (Knowledge), Qudrah (Power), Irādah (Will), Ḥayāh (Life), Kalām (Speech), Samʿ (Hearing), Baṣar (Sight), Wajh (Face — Q 28:88), Yadān (Two Hands — Q 38:75), ʿAyn (Eye — Q 54:14), Istiwaʾ ʿalā al-ʿArsh (Rising above the Throne — Q 20:5), and Actions such as descending and love. All affirmed as befitting His Majesty, without resemblance to creation." },
        { q: "What did the Jahmiyyah believe and why is it considered kufr?", a: "Jahm ibn Ṣafwān (executed 128H) denied ALL of Allāh's Names and Attributes — saying Allāh is indescribable and attributeless. He fell into total taʿṭīl. He also said the Qurʾān was created and denied Allāh's elevation above creation. Scholars unanimously condemned this as kufr. Imām Aḥmad said: 'Jahm negated the Lord.' Al-Muzanī's affirmation of every attribute is a direct rejection of Jahmī theology." },
        { q: "Why can't we ask 'how' about Allāh's Attributes?", a: "Asking 'how' (takyīf) is an innovation because: (1) The Companions, Tābiʿūn, and Tabiʿ al-Tābiʿīn never asked this — they accepted the texts. (2) 'They do not encompass Him in knowledge' (Q 20:110). (3) Imām Mālik's famous reply when asked about istiwa: 'The istiwa is known (from Arabic), the how is unknown, believing in it is obligatory, asking about it is an innovation.' This principle applies to all of Allāh's attributes." },
      ],
      quiz: [
        { q: "What is the master verse capturing the Athari method on the Attributes?", choices: ["Q 42:11 — \"There is nothing like Him... All-Hearing, All-Seeing\"", "Q 2:255 — Āyat al-Kursī", "Sūrah al-Ikhlāṣ (Q 112)", "Sūrah al-Fātiḥah (Q 1)"], correct: 0 },
        { q: "What is Taʿṭīl?", choices: ["Denying or stripping away Allāh's attributes entirely", "Likening Allāh's attributes to creation", "Reinterpreting an attribute away from its meaning", "Accepting an attribute without question"], correct: 0 },
        { q: "What is Tashbīh?", choices: ["Likening Allāh's attributes to those of creation", "Denying Allāh's attributes entirely", "Accepting attributes exactly as they came", "Rejecting the Qurʾān's authenticity"], correct: 0 },
        { q: "According to Imām Mālik, what should we do about the 'how' of an attribute like istiwāʾ?", choices: ["Leave it be — asking about the how is an innovation", "Investigate it thoroughly using logic", "Reject the attribute if the how is unclear", "Only scholars are permitted to know the how"], correct: 0 },
      ]
    },
    {
      id: 'istawa', icon: '🌟', label: 'Point 4 — ʿUluww', subtitle: "Allāh is Above His Throne", color: 'var(--emerald)',
      intro: "Allāh is above His creation, above His Throne. This is established in 7 Qurʾānic verses, multiple aḥādīth, and the consensus of the Companions and early scholars. Al-Muzanī made an extraordinary statement: the validity of one's tawḥīd depends on knowing this.",
      bullets: [
        { label: "Al-Muzanī's Key Statement", text: '"The tawḥīd of a person is not valid until he knows that Allāh is above His Throne, above His heavens, separate from His creation — in a manner that befits His Majesty." — Al-Dhahabī, al-Siyar 12/494' },
        { label: "Qurʾānic Evidence (7x)", text: "Q 20:5 — 'Al-Raḥmān rose above (istawā) the Throne' — stated 7 times in the Qurʾān. Q 67:16 — 'He who is above the heavens.' Q 35:10 — 'To Him ascend the pure words.'" },
        { label: "The Slave Girl Ḥadīth", text: "Prophet ﷺ asked: 'Where is Allāh?' She pointed upward. He said: 'Free her, she is a believer.' — Ṣaḥīḥ Muslim 537" },
        { label: "Imām Mālik's Statement", text: '"Al-istiwa is known (from Arabic), the how is unknown, believing in it is obligatory, asking about it is an innovation."' },
      ],
      qanda: [
        { q: "What does 'istawā ʿalā al-ʿArsh' mean?", a: "Istiwa means 'rose above' and 'elevated Himself' — istawā ʿalā in Arabic means irtafaʿa wa ʿalā (rose and was elevated above). Mentioned 7 times in the Qurʾān (Q 7:54, 10:3, 13:2, 20:5, 25:59, 32:4, 57:4). The Athari position: Allāh literally rose above His Throne in a manner befitting His Majesty. The meaning is known from Arabic. The 'how' is unknown and not asked about." },
        { q: "What does the slave girl hadith prove?", a: "The Prophet ﷺ asked a slave girl: 'Where is Allāh?' She pointed upward. He asked: 'Who am I?' She said: 'The Messenger of Allāh.' He said: 'Free her, for she is a believer.' (Ṣaḥīḥ Muslim 537). This proves: (1) 'Where is Allāh?' is a legitimate question — the answer is 'above.' (2) Pointing upward is the correct Athari response. (3) The Prophet ﷺ accepted this as sufficient proof of tawḥīd — exactly as al-Muzanī stated." },
        { q: "What is the Jahmī reinterpretation of istiwa and why is it rejected?", a: "The Jahmiyyah reinterpreted istiwa as istawlā — meaning 'took control/dominated.' Rejected because: (1) Istawlā requires an opponent to overcome — no one competed with Allāh for His Throne. (2) Istawā in Arabic does not mean istawlā — this is a linguistic invention. (3) The Companions understood it literally. (4) If this method is valid, any attribute can be explained away — which is exactly what the Jahmiyyah did to all of Allāh's attributes." },
        { q: "What did al-Muzanī say about tawhid and the Throne?", a: "Al-Dhahabī records in al-Siyar (12/494) that al-Muzanī said: 'The tawḥīd of a person is not valid until he knows that Allāh is above His Throne, above His heavens, separate from His creation — in a manner that befits His Majesty and Greatness.' This is extraordinary — al-Muzanī is saying knowing Allāh's elevation above His Throne is a condition for tawḥīd to be valid. This shows how foundational this point is in the Athari creed." },
      ],
      quiz: [
        { q: "What does al-Muzanī say is necessary for one's tawḥīd to be valid?", choices: ["Knowing Allāh is above His Throne, separate from creation", "Knowing the exact number of Allāh's names", "Performing ḥajj at least once", "Memorizing the entire Qurʾān"], correct: 0 },
        { q: 'What did the slave girl do when asked "Where is Allāh?"', choices: ["She pointed upward", 'She said "everywhere"', "She stayed silent", "She pointed to her heart"], correct: 0 },
        { q: "How many times is Allāh's rising above the Throne (istiwāʾ) mentioned in the Qurʾān?", choices: ["7 times", "Once", "3 times", "100 times"], correct: 0 },
        { q: "What is the Jahmī reinterpretation of istawā?", choices: ['Istawlā — "took control / dominated"', 'Irtafaʿa — "rose above" (the correct meaning)', 'Nazala — "descended"', "'Alima — \"knew\""], correct: 0 },
      ]
    },
    {
      id: 'qadar', icon: '⚡', label: 'Point 5 — Al-Qadar', subtitle: 'The Divine Pre-Decree', color: 'var(--burgundy-light)',
      intro: "Everything that exists and happens is within Allāh's knowledge, writing, will, and creation — these are the 4 levels of Qadar. At the same time, humans have real genuine choice and are fully accountable for it. Both truths exist simultaneously. This is the Athari middle position.",
      bullets: [
        { label: "Level 1 — ʿIlm", text: "Allāh's eternal prior knowledge of everything — He knew it all before creating it" },
        { label: "Level 2 — Kitābah", text: "He wrote everything in al-Lawḥ al-Maḥfūẓ (the Preserved Tablet) 50,000 years before creation — Ṣaḥīḥ Muslim 2653" },
        { label: "Level 3 — Mashīʾah", text: "His universal Will — nothing happens in existence except by His will" },
        { label: "Level 4 — Khalq", text: "He created everything, including human actions — Q 37:96: 'Allāh created you and what you do'" },
        { label: "Human Responsibility", text: "Humans have real genuine choice and are fully accountable — Q 99:7-8" },
      ],
      qanda: [
        { q: "What are the 4 levels of al-Qadar that must be believed?", a: "(1) ʿIlm — Allāh's eternal knowledge; He knew everything before creating it. (2) Kitābah — Everything was written in al-Lawḥ al-Maḥfūẓ 50,000 years before Allāh created the heavens and earth (Ṣaḥīḥ Muslim 2653). (3) Mashīʾah — Allāh's universal Will; nothing happens outside His will. (4) Khalq — Allāh created everything including human actions: 'Allāh created you and what you do' (Q 37:96). Denying any one of these four levels is deviation." },
        { q: "Who were the Qadariyyah and why were they called 'Magians of this Ummah'?", a: "The Qadariyyah denied Allāh's prior knowledge and predestination of human actions — claiming humans create their own actions independently. The Prophet ﷺ called them 'the Magians of this Ummah' because the Zoroastrians (Magians) believed in two independent eternal powers (good and evil). Similarly, the Qadariyyah effectively believe in two independent creative powers — Allāh and humans — each creating their own domain. This is a form of shirk in Allāh's Rubūbiyyah (Lordship)." },
        { q: "How do we reconcile divine decree with human responsibility?", a: "Both are affirmed by the texts simultaneously: Divine decree: 'Indeed all things We created with pre-decree' (Q 54:49); 'You will not will unless Allāh wills' (Q 76:30). Human responsibility: 'Whoever does an atom's weight of good will see it' (Q 99:7); 'Whoever wills, let him believe; whoever wills, let him disbelieve' (Q 18:29). The Athari position: both are true. Humans genuinely choose — AND their choices were pre-known, pre-written, pre-willed, and pre-created by Allāh. The 'how' of reconciling these is beyond human comprehension." },
        { q: "What is the Jabrī error?", a: "The Jabriyyah went to the opposite extreme — saying humans have NO real choice and are completely compelled (mujbarūn) like a leaf in wind. This contradicts: (1) The entire framework of reward and punishment — if no real choice, punishment is unjust. (2) Clear human experience of making decisions. (3) Q 2:286: 'for the benefit of your own souls.' The Athari correct position is between the two extremes: real human choice within Allāh's encompassing decree." },
      ],
      quiz: [
        { q: "What are the 4 levels of al-Qadar?", choices: ["ʿIlm, Kitābah, Mashīʾah, Khalq (knowledge, writing, will, creation)", "Only knowledge and writing", "Only will and creation", "Belief, speech, action, and intention"], correct: 0 },
        { q: "When was everything written in al-Lawḥ al-Maḥfūẓ?", choices: ["50,000 years before the creation of the heavens and earth", "At the moment of each person's birth", "After the Day of Judgment", "During the Prophet's ﷺ lifetime"], correct: 0 },
        { q: "Why did the Prophet ﷺ call the Qadariyyah \"the Magians of this Ummah\"?", choices: ["Because, like the Zoroastrians, they effectively believe in two independent creative powers", "Because they worship fire", "Because they reject the Qurʾān entirely", "Because they were a specifically Persian sect"], correct: 0 },
        { q: "What is the Jabrī error?", choices: ["Claiming humans have no real choice at all", "Claiming humans have complete independent choice with no divine decree", "Denying Allāh's knowledge", "Denying the Day of Judgment"], correct: 0 },
      ]
    },
    {
      id: 'ruyah', icon: '👁️', label: 'Point 6 — Ruʾyat Allāh', subtitle: 'Seeing Allāh in the Hereafter', color: 'var(--emerald-light)',
      intro: "Believers will see Allāh with their own eyes in the Hereafter. This seeing is literal, physical, and ocular — not metaphorical knowledge or spiritual proximity. It is the greatest joy of Paradise. The Muʿtazilah denied it. The Companions were unanimous that it is real and established.",
      bullets: [
        { label: "Qurʾānic Proof", text: "Q 75:22-23 — 'Faces that Day will be radiant, looking (nāẓirah) at their Lord.' Arabic nāẓirah unambiguously means looking with the eyes." },
        { label: "Q 10:26 Proof", text: "'For those who have done good is the best and more (ziyādah).' Prophet ﷺ interpreted 'ziyādah' as seeing Allāh's face — Ṣaḥīḥ Muslim 181." },
        { label: "The Hadith", text: "Ṣaḥīḥ al-Bukhārī 554 — 'You will see your Lord as you see the full moon — you will not be crowded in seeing Him.'" },
        { label: "Sect Refuted", text: "The Muʿtazilah denied ruʾyah using rational arguments — Athari response: when the naṣṣ is clear, rational arguments against it are rejected, not the naṣṣ." },
      ],
      qanda: [
        { q: "What is the Qurʾānic proof for seeing Allāh?", a: "Q 75:22-23: 'Faces that Day will be radiant — looking (nāẓirah) at their Lord.' The Arabic word nāẓirah means looking with the eyes — this is its primary, unambiguous meaning. Q 10:26: 'more (ziyādah)' — the Prophet ﷺ explicitly interpreted 'ziyādah' as seeing Allāh's face (Ṣaḥīḥ Muslim 181). This Prophetic interpretation closes the discussion — the 'more' beyond Paradise is seeing Allāh Himself." },
        { q: "How did the Prophet ﷺ describe seeing Allāh?", a: "'You will see your Lord as you see the full moon — you will not be crowded in seeing Him' (Ṣaḥīḥ al-Bukhārī 554; Muslim 633). The full moon comparison serves two purposes: (1) Clarity — the sight of Allāh will be clear and unmistakable, not confused or uncertain. (2) Ease — everyone can see the full moon without pushing or crowding — everyone in Paradise will see Allāh without difficulty or competition." },
        { q: "Why did the Muʿtazilah deny the ruʾyah and how are they refuted?", a: "The Muʿtazilah argued: (1) Seeing requires direction — Allāh has no direction. (2) Eyes can only see material things — Allāh is not material. Athari response: When Qurʾān and Sunnah establish something clearly, rational arguments against it are rejected — not the naṣṣ. The Companions were unanimous on ruʾyah. Ibn Masrūq said: 'Whoever denies Allāh will be seen in the Hereafter has disbelieved.' Allāh is capable of being seen in a manner befitting His Majesty." },
      ],
      quiz: [
        { q: "Will believers see Allāh in the Hereafter, according to Ahlus-Sunnah?", choices: ["Yes, literally with their own eyes", "No, it is only metaphorical knowledge", "Only the Prophets will see Him", "It is a disputed matter with no clear answer"], correct: 0 },
        { q: "What did the Prophet ﷺ compare seeing Allāh to?", choices: ["Seeing the full moon clearly, without being crowded", "Seeing the sun directly", "A dream vision only", "Seeing angels"], correct: 0 },
        { q: "Which group denied Ruʾyat Allāh using rational arguments?", choices: ["The Muʿtazilah", "The vast majority of Ahlus-Sunnah scholars", "The Companions", "The Ḥanbalīs"], correct: 0 },
      ]
    },
    {
      id: 'bath', icon: '🌙', label: 'Point 7 — Al-Baʿth', subtitle: 'The Resurrection', color: 'var(--emerald)',
      intro: "The resurrection is physical — body AND soul will be reunited. The very same body that lived in this world, did deeds, and was buried will be raised on the Day of Judgment. Paradise and Hell are real and already exist right now, before the Day of Judgment.",
      bullets: [
        { label: "Physical Resurrection", text: "Q 75:3-4 — 'Does man think that We will not assemble his bones? Yes! We are Able to put together in perfect order the tips of his fingers.'" },
        { label: "Prophetic Proof", text: "The Prophet ﷺ: 'You will be resurrected barefoot, naked, and uncircumcised' — describing the same human bodies being raised." },
        { label: "Sequence of Events", text: "Al-Baʿth (resurrection) → Al-Ḥisāb (reckoning) → Al-Mīzān (scale) → Al-Ṣirāṭ (bridge over Hell) → Al-Shafāʿah (intercession) → Jannah or Nār" },
        { label: "Paradise & Hell Exist Now", text: "Q 3:133 — 'prepared (uʿiddat) for the righteous' — past tense proves both currently exist. The Prophet ﷺ saw them during the Miʿrāj (Night Journey)." },
      ],
      qanda: [
        { q: "Is the resurrection physical or only spiritual?", a: "Physical (jismānī) — body AND soul reunited. Q 75:3-4: 'We will assemble his bones... the tips of his fingers.' The Prophet ﷺ: 'You will be resurrected barefoot, naked, and uncircumcised' — explicitly describing physical human bodies. This refutes those influenced by Greek philosophy who claimed only the soul is resurrected." },
        { q: "Do Paradise and Hell already exist right now?", a: "Yes. Q 3:133: 'a Garden... prepared (uʿiddat) for the righteous' — past tense = currently exists. The Prophet ﷺ was shown both Paradise and Hell during the Miʿrāj (Night Journey). During the eclipse prayer he saw them and reached forward for a bunch of grapes from Paradise (Ṣaḥīḥ al-Bukhārī 1052). All Companions were unanimous that both Jannah and Nār exist right now." },
        { q: "What is al-Shafāʿah al-ʿUẓmā (the Greatest Intercession)?", a: "On the Day of Judgment, people will be in extreme distress waiting for the reckoning to begin. They will go to Ādam, Nūḥ, Ibrāhīm, Mūsā, then ʿĪsā — each saying 'my soul, my soul' (fearing for themselves). All will direct them to Muḥammad ﷺ. He will prostrate before Allāh and intercede. Allāh will accept — and the reckoning begins. This is the Maqām Maḥmūd (Praised Station) promised in Q 17:79." },
      ],
      quiz: [
        { q: "Is the resurrection physical or only spiritual, according to Ahlus-Sunnah?", choices: ["Physical — body and soul reunited", "Only spiritual", "Neither, it is purely symbolic", "Only for the righteous"], correct: 0 },
        { q: "Do Paradise and Hell exist right now, before the Day of Judgment?", choices: ["Yes, both already exist", "No, they will be created on Judgment Day", "Only Paradise exists now", "It is an unresolved question"], correct: 0 },
        { q: "What is al-Shafāʿah al-ʿUẓmā?", choices: ["The Greatest Intercession, made by the Prophet ﷺ for all of mankind", "A prayer performed at Ḥajj", "The first sermon of Islam", "A Qurʾānic verse about mercy"], correct: 0 },
      ]
    },
    {
      id: 'qabr', icon: '🌿', label: 'Point 8 — ʿAdhāb al-Qabr', subtitle: 'Punishment & Blessing of the Grave', color: 'var(--grey-accent)',
      intro: "The punishment and blessing of the grave are real. The deceased experiences the barzakh — the realm between death and resurrection — and is questioned by two angels. The Qurʾān itself establishes this with Q 40:46, and multiple ṣaḥīḥ aḥādīth confirm it.",
      bullets: [
        { label: "The Barzakh", text: "The realm between death and resurrection. Niʿmat al-qabr (blessing) for the believer. ʿAdhāb al-qabr (punishment) for the disbeliever/hypocrite." },
        { label: "Qurʾānic Proof", text: "Q 40:46 — 'They are exposed to the Fire morning and evening' (before the Day of Judgment) — proves barzakh punishment is real and distinct from the punishment of the Hereafter." },
        { label: "The 3 Questions", text: "1. Who is your Lord?\n2. What is your religion?\n3. Who is this man (the Prophet ﷺ)?\nBeliever answers → grave expands. Hypocrite cannot answer → punishment begins." },
        { label: "Sunnah Proof", text: "Prophet ﷺ placed green branches on graves to reduce punishment (Bukhārī 1361). Regularly sought refuge from grave punishment in duʿāʾ (Bukhārī 1377)." },
      ],
      qanda: [
        { q: "What is the Qurʾānic proof for punishment of the grave?", a: "Q 40:46: 'They are exposed to the Fire morning and evening, and the Day the Hour appears: Admit the people of Pharaoh into the severest punishment.' This proves: (1) Punishment occurs before the Day of Judgment (morning and evening in the barzakh). (2) A distinct, more severe punishment on the Day of Judgment itself. Two separate punishments are clearly established." },
        { q: "What questions are asked in the grave?", a: "Two angels (Munkar and Nakīr) ask three questions: (1) 'Who is your Lord?' — Believer: 'My Lord is Allāh.' (2) 'What is your religion?' — Believer: 'My religion is Islām.' (3) 'Who is this man sent among you?' — Believer: 'The Messenger of Allāh, Muḥammad ﷺ.' The believer answers correctly: a door to Paradise opens, his grave becomes spacious, he rests in comfort. The hypocrite/disbeliever cannot answer — the punishment begins." },
        { q: "How is the grave punishment proven from the Sunnah?", a: "(1) The Prophet ﷺ placed green branches on two graves saying 'perhaps it will reduce their punishment while fresh' (Bukhārī 1361) — proves real punishment in the grave. (2) 'Seek refuge with Allāh from the punishment of the grave' — the Prophet ﷺ regularly sought refuge himself (Bukhārī 1377). (3) 'The grave is either a garden from Paradise or a pit from Hell' — establishes both possibilities as real barzakh experiences." },
      ],
      quiz: [
        { q: "What is the Barzakh?", choices: ["The realm between death and resurrection", "The bridge over Hell", "The gate of Paradise", "The first heaven"], correct: 0 },
        { q: "What are the three questions asked in the grave?", choices: ["Who is your Lord, what is your religion, who is this man (the Prophet ﷺ)", "Name, age, and birthplace", "What good deeds did you do", "How many prayers did you miss"], correct: 0 },
        { q: "Why did the Prophet ﷺ place green branches on two graves?", choices: ["Saying it may reduce the punishment while the branches are still fresh", "As a burial offering", "To mark the grave's location", "To give to the deceased's family"], correct: 0 },
      ]
    },
    {
      id: 'sahaba', icon: '⭐', label: 'Point 9 — The Ṣaḥābah', subtitle: 'Their Rank & Our Obligation', color: 'var(--burgundy)',
      intro: "The Companions (Ṣaḥābah) are the best of the Ummah after the Prophets. Allāh declared He was pleased with them. We must love them all, seek Allāh's mercy for all, and must not curse any of them. Their rank order is established by text and the consensus of Ahlus-Sunnah.",
      bullets: [
        { label: "Rank Order", text: "1. Abū Bakr al-Ṣiddīq RA\n2. ʿUmar ibn al-Khaṭṭāb RA\n3. ʿUthmān ibn ʿAffān RA\n4. ʿAlī ibn Abī Ṭālib RA\n5. Remaining six of the ten promised Paradise\n6. Companions of Badr\n7. Bayʿat al-Riḍwān" },
        { label: "Our Obligations", text: "Love them all · Seek Allāh's mercy for all · Do NOT curse any of them · Do NOT take sides in their fitnahs · Speak of them only with good" },
        { label: "Qurʾānic Praise", text: "Q 9:100 — 'And Allāh was pleased with them and they were pleased with Him' — direct divine praise" },
        { label: "Prophetic Warning", text: "Bukhārī 3673 — 'Do not revile my Companions. By Allāh, if one of you were to spend gold the size of Uḥud, it would not reach the mudds or even half of one of them.'" },
      ],
      qanda: [
        { q: "What is the rank order of the Companions according to Ahlus-Sunnah?", a: "The agreed ranking: (1) Abū Bakr al-Ṣiddīq RA — best of humanity after the Prophets. (2) ʿUmar ibn al-Khaṭṭāb RA. (3) ʿUthmān ibn ʿAffān RA. (4) ʿAlī ibn Abī Ṭālib RA. Then the other six of the ten promised Paradise: Ṭalḥah, al-Zubayr, Saʿd ibn Abī Waqqāṣ, Saʿīd ibn Zayd, ʿAbd al-Raḥmān ibn ʿAwf, Abū ʿUbaydah ibn al-Jarrāḥ. Then Companions of Badr. Then those of Bayʿat al-Riḍwān. Allāh praised them all: 'Allāh was pleased with them' (Q 9:100)." },
        { q: "What is the correct position on the fitnah between the Companions?", a: "The Athari position: (1) Both sides in the fitnah between ʿAlī and Muʿāwiyah RA were mujtahids making sincere scholarly judgments. (2) The correct one gets two rewards (ijtihād + being right). (3) The one who erred gets one reward for sincere effort. (4) We do NOT curse either side. (5) We do NOT take sides beyond what the texts say. (6) We ask Allāh's mercy on all. Al-Shāfiʿī, Aḥmad, and al-Bukhārī all held this position." },
        { q: "What are the Rāfiḍah errors regarding the Companions?", a: "(1) Cursing and insulting Abū Bakr, ʿUmar, and ʿUthmān RA — claiming they usurped ʿAlī's leadership. (2) Declaring most Companions apostates — saying they abandoned Islām after the Prophet ﷺ died. (3) Extreme exaltation of ʿAlī RA — some Ghulāt Shīʿah worship him. Athari response: Allāh praised the Companions (Q 9:100, Q 48:29). The Prophet ﷺ forbade reviling them (Bukhārī 3673). Declaring them apostates destroys the entire transmission of the Qurʾān and Sunnah — the religion itself." },
        { q: "What did the Prophet ﷺ say about the Companions' virtue?", a: "'Do not revile my Companions. By Allāh, if one of you were to spend gold the size of Uḥud, it would not reach the mudds or even half of one of them' (Ṣaḥīḥ al-Bukhārī 3673). Also: 'They are like the stars — whichever of them you follow, you will be guided.' Their direct companionship with the Prophet ﷺ, participation in revelations, and sacrifice in the earliest battles gives them uniquely high and irreplaceable rank." },
      ],
      quiz: [
        { q: "Who is ranked first among the Companions?", choices: ["Abū Bakr al-Ṣiddīq", "ʿUmar ibn al-Khaṭṭāb", "ʿUthmān ibn ʿAffān", "ʿAlī ibn Abī Ṭālib"], correct: 0 },
        { q: "What is the Ahlus-Sunnah position on the fitnah between the Companions?", choices: ["Both sides were sincere mujtahids — we don't curse either side and ask Allāh's mercy on all", "One side was clearly evil and the other entirely righteous", "We must pick a side and condemn the other", "The fitnah never actually happened"], correct: 0 },
        { q: "What did the Prophet ﷺ say about spending gold the size of Uḥud?", choices: ["It wouldn't reach the reward of even half a Companion's small charity", "It would guarantee Paradise regardless of deeds", "It was forbidden to do so", "It refers to a specific zakāt calculation"], correct: 0 },
      ]
    },
    {
      id: 'sects', icon: '⚔️', label: 'Deviant Sects', subtitle: 'Quick Reference Guide', color: 'var(--burgundy-deep)',
      intro: "Al-Muzanī's Sharḥ al-Sunnah implicitly refutes all major deviant sects of his era throughout each point. Know each sect, their core error, and the Athari correction — this is essential for understanding why each point of the text was written the way it was.",
      bullets: [
        { label: "Jahmiyyah", text: "Denied ALL of Allāh's Names & Attributes. Said Qurʾān is created. Denied Allāh's elevation. Denied free will (Jabr)." },
        { label: "Muʿtazilah", text: "Said Qurʾān is created. Denied Allāh's Attributes. Denied Ruʾyat Allāh. Denied Qadar. Held 'station between two stations' on sinners." },
        { label: "Murjiʾah", text: "Removed actions from the definition of Iman. Said sins do not decrease Iman." },
        { label: "Qadariyyah", text: "Denied Allāh's prior knowledge and predestination of human actions. Called 'Magians of the Ummah.'" },
        { label: "Jabriyyah", text: "Denied human free will entirely. Said humans are completely compelled with no real choice or accountability." },
        { label: "Khawārij", text: "Declared Muslim rulers and major sinners apostates (kāfir). Made armed rebellion against rulers obligatory." },
      ],
      sectsTable: [
        { name: "Jahmiyyah", error: "Denied all Attributes, Quran created, no ʿUluww", correct: "Affirm attributes, Quran uncreated, Allāh above Throne" },
        { name: "Muʿtazilah", error: "Quran created, deny Attributes, deny Ruʾyah, deny Qadar", correct: "Quran uncreated, all Attributes affirmed, Ruʾyah affirmed, all 4 levels of Qadar" },
        { name: "Murjiʾah", error: "Actions not part of Iman; sins don't decrease it", correct: "Iman = belief + speech + action; increases & decreases" },
        { name: "Qadariyyah", error: "Deny Allāh's prior knowledge and predestination", correct: "All 4 levels of Qadar affirmed" },
        { name: "Jabriyyah", error: "Humans have no real choice — completely compelled", correct: "Real human choice within Allāh's encompassing decree" },
        { name: "Rāfiḍah", error: "Curse Companions, declare them apostates", correct: "Love and seek mercy for all Companions without exception" },
        { name: "Khawārij", error: "Takfīr of sinners, rebellion against rulers obligatory", correct: "Sinners remain Muslims; obedience to rulers in non-sin matters" },
      ],
      qanda: [
        { q: "Who were the Jahmiyyah and why are they considered the worst sect?", a: "The Jahmiyyah follow Jahm ibn Ṣafwān (executed 128H). Core errors: (1) Denied ALL of Allāh's Names and Attributes — total taʿṭīl. (2) Said the Qurʾān was created. (3) Denied Allāh's elevation above creation. (4) Held Jabrī position — denied human free will. (5) Said Iman is mere knowledge in the heart only. Imām Aḥmad called Jahm a kāfir and said 'Jahm negated the Lord.' Their errors strike at the very root of tawḥīd itself." },
        { q: "Who were the Muʿtazilah and what were their main errors?", a: "Founded ~2nd century AH, the Muʿtazilah are a rationalist theological school. Major errors: (1) Said the Qurʾān was created — caused the Miḥnah inquisition. (2) Denied Allāh's Attributes — fell into taʿṭīl. (3) Denied Ruʾyat Allāh in the Hereafter. (4) Denied Qadar — humans create their own actions independently of Allāh. (5) The manzilah bayna al-manzilatayn — the grave sinner is 'between Iman and kufr.' They held political power under al-Maʾmūn and persecuted scholars." },
        { q: "Who are the Khawārij and what did the Prophet ﷺ say about them?", a: "The Khawārij first appeared 37H, rebelling against ʿAlī RA. Core errors: (1) Takfīr of sinners — declaring any Muslim who commits a major sin a kāfir. (2) Made armed rebellion against Muslim rulers obligatory when they sin. The Prophet ﷺ: 'They recite Qurʾān but it does not pass beyond their throats. They exit Islām as an arrow exits its target' (Bukhārī 3611). Their methodology persists today in modern takfīrī and terrorist groups." },
        { q: "What single error unites all deviant sects?", a: "All deviant sects share one core error: they allowed human reason to override or reinterpret the clear texts of Qurʾān and Sunnah. The Jahmiyyah used rationalism to deny attributes. The Muʿtazilah used rationalism to deny the Qurʾān being uncreated and to deny ruʾyah. The Khawārij used their own 'justice' to declare rulers kāfir. Al-Muzanī's method in Sharḥ al-Sunnah: state what the texts say, without adding, removing, or reinterpreting. The naṣṣ (text) is the authority — not human reason." },
      ],
      quiz: [
        { q: "Which sect denied ALL of Allāh's attributes?", choices: ["The Jahmiyyah", "The Ashʿariyyah", "The Māturīdiyyah", "The Ẓāhiriyyah"], correct: 0 },
        { q: "What is the core error of the Khawārij?", choices: ["Declaring major sinners and rulers disbelievers (takfīr) and rebelling against them", "Denying Allāh's attributes", "Removing actions from Iman", "Cursing the Companions"], correct: 0 },
        { q: "What single error unites all the deviant sects covered here?", choices: ["Letting human reason override or reinterpret the clear texts of Qurʾān and Sunnah", "All rejecting the Qurʾān outright", "All being purely political movements", "All originating in the exact same century"], correct: 0 },
      ]
    }
  ]
});
