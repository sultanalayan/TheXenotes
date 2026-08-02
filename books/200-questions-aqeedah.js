/* XENOS NOTES — book module
 * To add a new book: copy this file's shape, fill in the metadata + sections, save
 * it as books/<your-slug>.js, then add one <script> line in index.html. That's it —
 * the shared engine (app.js) handles rendering, navigation, search, and styling. */
XenosBooks.register({
  slug: '200-questions-aqeedah',
  title: '200 Questions & Answers on Aqeedah',
  subtitle: 'By Shaykh Ḥāfiẓ ibn Aḥmad al-Ḥakamī · A Complete Catechism of Islamic Belief',
  icon: '📿',
  category: 'Aqeedah',
  arabicBg: 'أسئلة وأجوبة',
  tags: ['Tawḥīd', 'Īmān', 'Qadar', 'Six Pillars', 'Al-Ḥakamī'],
  footer: 'Shaykh Ḥāfiẓ ibn Aḥmad al-Ḥakamī · "200 FAQ on Islamic Beliefs" · Trans. ʿAlī As-Sayed Al-Ḥalawānī',

  sections: [
    {
      id: 'purpose', icon: '🌱', label: 'The Purpose of Worship', subtitle: 'Why Any of This Matters at All', color: 'var(--burgundy)',
      intro: "The book opens not with a definition, but with a question about purpose — what were human beings actually created for, and what does that imply about the very first obligation upon them? Everything that follows in the book's 200 questions builds on the answer given here.",
      bullets: [
        { label: 'العبادة (Al-ʿIbādah — Worship)', text: 'A comprehensive word covering everything that pleases Allah — every word and deed, manifest or concealed — and freedom from all that contradicts it' },
        { label: 'The Two Elements of a True Act of Worship', text: 'Perfect love for Allah, paired with perfect submission to Him — "Verily they used to hasten on to do good deeds, and they used to call on Us with hope and fear" (Q 21:90)' },
        { label: 'The Three Conditions of Worship', text: '1) Sincere determination — no laziness between word and deed. 2) Sincerity of intention — for Allah alone. 3) Compliance with the Sharīʿah as actually revealed' },
      ],
      qanda: [
        { q: 'What is the first (religious) obligation on Allah\'s servants?', a: 'To realize the purpose for which Allah created them — the purpose for which He took their covenant, sent His Messengers and Books, and created this life, the Hereafter, Paradise, and Hell-fire.' },
        { q: 'What is the purpose of creation, according to the Qurʾān?', a: '"And I (Allah) created not the jinn and mankind except that they should worship Me (Alone). I seek not any provision from them nor do I ask that they should feed Me." (Q 51:56-58) Creation exists to worship its Creator, not to meet any need of His.' },
        { q: 'How can we prove that a servant of Allah genuinely loves his Lord?', a: 'By loving what Allah loves and disliking what He dislikes, acting according to His commands and avoiding His prohibitions, standing with those who love Allah, and showing enmity to His enemies — love and hatred purely for Allah\'s sake are among the clearest signs of real Īmān.' },
        { q: 'What is the meaning of "sincerity of determination," the first condition of worship?', a: 'Warding off lethargy and laziness, and exerting effort so that one\'s words actually coincide with one\'s deeds — "O you who believe! Why do you say that which you do not do? Most hateful it is with Allah that you say that which you do not do." (Q 61:2-3)' },
      ],
      quiz: [
        { q: "According to this section, what is the first religious obligation upon Allah's servants?", choices: ['To realize the purpose for which Allah created them', 'To memorize the entire Qur\'an', 'To perform Ḥajj', 'To learn Arabic grammar'], correct: 0 },
        { q: 'What are the two elements required for a deed to count as true worship?', choices: ['Perfect love for Allah paired with perfect submission to Him', 'Wealth and social status', 'Public recognition', 'Physical strength'], correct: 0 },
      ]
    },
    {
      id: 'tawhid', icon: '☝️', label: 'The Three Categories of Tawḥīd', subtitle: "Rubūbiyyah, Ulūhiyyah & Asmāʾ wa-ṣ-Ṣifāt", color: 'var(--emerald)',
      intro: "Having faith in Allah, per the book, breaks down into three interlocking categories of Tawḥīd (Oneness) — and their opposite, shirk, likewise divides into major and minor forms with very different consequences.",
      bullets: [
        { label: 'توحيد الربوبية (Tawḥīd ar-Rubūbiyyah)', text: 'Affirming the unity of Allah\'s Lordship — that He alone creates, sustains, and governs all things' },
        { label: 'توحيد الألوهية (Tawḥīd al-Ulūhiyyah)', text: "Affirming the unity of Allah's worship — that none has the right to be worshipped, in any form (praying, invoking, swearing, sacrificing, fasting) except Him alone" },
        { label: 'توحيد الأسماء والصفات (Tawḥīd al-Asmāʾ wa-ṣ-Ṣifāt)', text: "Affirming the unity of Allah's Names and Attributes — accepting them as He and His Messenger ﷺ described them, without distortion" },
        { label: 'الشرك الأكبر (Ash-Shirk al-Akbar — Major Shirk)', text: 'Associating partners with Allah — loving, fearing, or relying on someone the way one should only love, fear, or rely on Allah. Removes a person from Islam entirely.' },
        { label: 'الشرك الأصغر (Ash-Shirk al-Aṣghar — Minor Shirk)', text: 'Ar-Riyāʾ (showing off in worship) is the clearest example — the Prophet ﷺ called this "the thing I fear most for you" after Major Shirk, along with swearing oaths by anything other than Allah' },
      ],
      qanda: [
        { q: 'What does maintaining Tawḥīd al-Ulūhiyyah (the unity of worship) actually mean in practice?', a: 'That none has the right to be worshipped — meaning all sayings and deeds of worship, manifest or concealed (praying, invoking, asking help from the unseen, swearing, sacrificing, charity, fasting, pilgrimage) — except Allah alone. "And your Lord has decreed that you worship none but Him." (Q 17:23)' },
        { q: 'What is Major Shirk?', a: 'Associating partners with the Lord of the worlds — loving someone the way one should only love Allah, fearing someone as one should only fear Allah, relying on or invoking someone else, showing sinful loyalty, or obeying someone in what displeases Allah. "Verily! Allah forgives not the sin of setting up partners with Him." (Q 4:116)' },
        { q: 'What is Minor Shirk?', a: 'Ar-Riyāʾ — performing an act of worship or religious deed to gain praise, fame, or worldly benefit. The Prophet ﷺ described it: "A man stands in prayer, performs it more beautifully than ever, because he notices someone looking at him." Swearing oaths by one\'s father, honesty, or anything besides Allah also falls under this category.' },
        { q: 'Is there any difference, in terms of disbelief, between someone who openly declares shirk and someone who conceals it?', a: 'No — the ruling is the same for open polytheists and for hypocrites who declare Islam while secretly harboring shirk. "Verily, the hypocrites will be in the lowest depth of the Fire." (Q 4:145) The exception is genuine, sincere repentance before death.' },
      ],
      quiz: [
        { q: "What are the three categories of Tawḥīd described in this section?", choices: ['Rubūbiyyah, Ulūhiyyah, and Asmāʾ wa-ṣ-Ṣifāt', 'Only one category exists', 'Sunni, Shia, and Sufi', 'Makkan and Madinan'], correct: 0 },
        { q: 'What did the Prophet ﷺ identify as "the thing I fear most for you" after Major Shirk?', choices: ['Ar-Riyāʾ (showing off in worship)', 'Poverty', 'Illness', 'War'], correct: 0 },
      ]
    },
    {
      id: 'shahadatayn', icon: '🤲', label: 'The Two Testimonies', subtitle: 'Shahādatayn and the Five Pillars', color: 'var(--gold)',
      intro: "The book treats the two testimonies — that none deserves worship but Allah, and that Muhammad ﷺ is His Messenger — as the doorway into the rest of the pillars, with specific conditions attached to reciting them meaningfully rather than as empty words.",
      bullets: [
        { label: 'الشهادتان (Ash-Shahādatayn — The Two Testimonies)', text: 'Lā ilāha illa-llāh (there is no god but Allah) and Muḥammadun rasūlu-llāh (Muḥammad is the Messenger of Allah) — the gateway to every other pillar' },
        { label: "The Conditions of the Shahādah — Not Just Words", text: "Knowledge of its meaning, certainty (yaqīn) free of doubt, complete submission, sincere acceptance, truthfulness, sincerity of intent, and love for Allah and His Messenger ﷺ — reciting the words alone, without these, does not fulfil the testimony" },
        { label: 'The Five Pillars (Arkān al-Islām)', text: 'The two testimonies, Prayer (Ṣalāh), Zakāh, Fasting (Ṣawm), and Pilgrimage (Ḥajj) — each established by explicit Qurʾānic and Prophetic proof' },
      ],
      qanda: [
        { q: "What must be fulfilled for a person's recitation of the Shahādah to actually count, beyond simply saying the words?", a: "Knowledge of its meaning, certainty (yaqīn) without doubt, complete submission to what it requires, sincere acceptance of the message, truthfulness in saying it, sincerity of intention, and genuine love for Allah and His Messenger ﷺ. The book treats the Shahādah as a testimony that must be understood and lived, not a phrase recited without comprehension." },
        { q: 'What is the ruling on someone who denies one of the five pillars of Islam outright, versus someone who acknowledges it but neglects it out of laziness?', a: "Denying a pillar out of arrogance or rejecting its obligation removes a person from Islam. Neglecting a pillar while still acknowledging its truth — due to laziness or a misinterpretation — is treated differently and far more seriously than outright denial, though it remains a serious matter depending on which pillar and the circumstances." },
      ],
      quiz: [
        { q: 'What are the two testimonies (Shahādatayn)?', choices: ['That none deserves worship but Allah, and that Muḥammad ﷺ is His Messenger', 'That prayer is obligatory and fasting is optional', 'Two verses from Sūrah al-Fātiḥah', 'A greeting exchanged between Muslims'], correct: 0 },
        { q: "Is merely pronouncing the words of the Shahādah, without understanding or sincerity, sufficient according to this book?", choices: ['No — specific conditions like knowledge, certainty, and sincerity must also be fulfilled', 'Yes, the words alone are always sufficient', 'Only if said in Arabic', 'Only if said during Ramaḍān'], correct: 0 },
      ]
    },
    {
      id: 'iman-pillars', icon: '🕌', label: 'Īmān and Its Six Pillars', subtitle: 'What Faith Includes, and How It Varies', color: 'var(--burgundy-light)',
      intro: 'The book distinguishes between "Īmān" used broadly (covering the whole religion) and "Īmān" used specifically (referring to six defined articles) — and it establishes, against a rival theological position, that faith is not a fixed, unchanging quantity.',
      bullets: [
        { label: 'الأركان الستة (The Six Pillars of Īmān)', text: "Belief in Allah, His Angels, His Books, His Messengers, the Last Day, and al-Qadar (the Divine Decree) — established directly by the ḥadīth of Jibrīl (Ṣaḥīḥ Muslim)" },
        { label: 'Īmān Increases and Decreases', text: "Against those who claim faith is a static, unchanging thing, the book affirms Īmān rises with obedience and righteous deeds and falls with sin and neglect — a position defended at length with Qurʾānic proof" },
        { label: 'Faith Varies Between People', text: 'Q 56:10-27 and Q 35:32 describe differing ranks — those foremost in good, those on a middle course, and those who wrong themselves — showing degrees of faith rather than one uniform level for everyone' },
      ],
      qanda: [
        { q: 'What is the textual proof that faith is used in a specific sense to mean six articles?', a: 'The ḥadīth of Jibrīl: when the Prophet ﷺ was asked by Jibrīl about faith, he replied, "That you affirm your faith in Allah, in His angels, His Books, His Messengers, the Day of Judgment, and you affirm your faith in the Divine Decree, be it good or evil." (Ṣaḥīḥ Muslim)' },
        { q: 'What is the proof that the degrees of faith vary from one person to another?', a: 'Q 56:10-27 describes those "foremost" in faith as nearest to Allah, distinct from "those on the Right Hand." The Prophet ﷺ also said that whoever has faith equal to the weight of a grain of barley, or wheat, or even an atom, will eventually be taken out of Hell — implying faith exists in different measurable degrees, not as a single uniform state.' },
        { q: 'What is the proof that Īmān is used in a general sense to mean the whole religion?', a: 'When the Prophet ﷺ addressed the delegation of ʿAbd al-Qays, he said: "I order you to believe in Allah alone," then explained this meant testifying to the Shahādah, offering Prayer, paying Zakāh, fasting Ramaḍān, and paying a fifth of war spoils — showing "Īmān" here covers the entire religious system, not a narrow belief alone.' },
      ],
      quiz: [
        { q: 'What are the six pillars of Īmān, according to the ḥadīth of Jibrīl?', choices: ['Allah, His Angels, His Books, His Messengers, the Last Day, and al-Qadar', 'The five daily prayers only', 'Belief in one Book only', 'Only belief in the Last Day'], correct: 0 },
        { q: 'Does this book\'s author agree that faith is a fixed quantity that never changes?', choices: ['No — Īmān is affirmed to increase with obedience and decrease with sin', 'Yes, faith never changes once acquired', 'Faith cannot be discussed at all', 'Only scholars have faith that changes'], correct: 0 },
      ]
    },
    {
      id: 'names-attributes', icon: '✨', label: 'The Names and Attributes of Allah', subtitle: 'Affirming Without Distortion', color: 'var(--gold)',
      intro: "This section covers the third category of Tawḥīd in greater depth — how the Most Beautiful Names point to their meanings, the classical Atharī position on Allah's Rising over the Throne (al-Istiwāʾ), and what specifically contradicts sound belief in this area.",
      bullets: [
        { label: 'How the Names Point to Meaning', text: 'Each Name affirms itself, the Attribute it carries, and the ruling/implication that follows from it — e.g. as-Samīʿ (the All-Hearing) affirms the Name, the Attribute of hearing, and the implication that Allah hears everything, open and secret' },
        { label: 'الاستواء (Al-Istiwāʾ — Rising Over the Throne)', text: "The position of the Salaf, as commonly summarized: the fact of Allah's Rising is known, its exact modality (kayf) is unknown to us, believing in it is obligatory, and asking \"how\" is an unacceptable innovation" },
        { label: 'What Contradicts Tawḥīd al-Asmāʾ wa-ṣ-Ṣifāt', text: 'Two errors in opposite directions: taʿṭīl (stripping Allah of His attributes entirely) and tashbīh (likening His attributes to those of creation) — the sound position affirms the attributes without either denial or resemblance' },
      ],
      qanda: [
        { q: "What did the pious predecessors (as-Salaf) say concerning al-Istiwāʾ (Allah's Rising over the Throne)?", a: 'That the fact of the Rising is to be affirmed as mentioned in the texts, that its exact manner (kayfiyyah) is unknown to created beings, that believing in it is obligatory, and that asking about its "how" is an innovation to be avoided — since Allah\'s Attributes are not comparable to anything in creation, they cannot be pictured or compared the way a creature\'s attributes can.' },
        { q: "What contradicts Tawḥīd al-Asmāʾ wa-ṣ-Ṣifāt?", a: "Two opposite errors: taʿṭīl, which strips Allah of attributes He described Himself with (as the Jahmiyyah did), and tashbīh, which likens His attributes to the attributes of created beings. The correct position affirms every attribute Allah and His Messenger ﷺ described, in the manner befitting His majesty, without falling into either extreme." },
      ],
      quiz: [
        { q: "What is the Salaf's position on the exact manner (kayf) of Allah's Rising over the Throne?", choices: ['It is unknown to us, though the fact of it is affirmed', 'It is exactly like how a person sits on a throne', 'It should not be mentioned or believed in at all', "It is purely a metaphor with no real meaning"], correct: 0 },
        { q: 'What are the two opposite errors that contradict sound belief in the Names and Attributes?', choices: ["Taʿṭīl (stripping Allah of attributes) and tashbīh (likening them to creation)", 'Reading too much Qur\'an and too little Hadith', 'Praying too often and fasting too rarely', 'Two forms of the same identical error'], correct: 0 },
      ]
    },
    {
      id: 'unseen', icon: '📖', label: 'Angels, Books & Messengers', subtitle: 'Three of the Six Pillars, in Detail', color: 'var(--emerald-light)',
      intro: "Belief in the Unseen extends to three specific pillars covered together here — the Angels who carry out Allah's commands, the Books He revealed (with a specific controversy over whether the Qur'an is created), and the Messengers who conveyed His message across history.",
      bullets: [
        { label: "The Qur'an Is the Uncreated Speech of Allah", text: 'The book treats claiming the Qurʾān is "created" as a serious deviation, associated historically with the Jahmiyyah and Muʿtazilah — since Speech is one of Allah\'s Attributes, and His Attributes are not created' },
        { label: 'الواقفة (Al-Wāqifah)', text: "Those who refused to say whether the Qur'an is created or uncreated, taking a deliberately non-committal position — the book treats this evasiveness itself as a deviation from the clear Salaf position" },
        { label: 'أولو العزم (Ūlū al-ʿAzm — Messengers of Firm Will)', text: 'The five Messengers of the greatest resolve: Nūḥ, Ibrāhīm, Mūsā, ʿĪsā, and Muḥammad ﷺ, the last and seal of them all' },
        { label: 'Shared Core, Differing Details', text: "All Messengers called to the same core — the worship of Allah alone — while their specific Sharīʿah rulings on what is ḥalāl and ḥarām differed according to the needs of their time" },
      ],
      qanda: [
        { q: 'What is the ruling concerning the person who claims the Qurʾān is "created"?', a: "The book treats this as a serious deviation — Allah's Speech, like His other Attributes, is not created, since Speech is intrinsic to who He is, not something separate that came into being. This was a major point of contention with the Jahmiyyah and Muʿtazilah, historically." },
        { q: "Did all the Messengers call to the same core message?", a: 'Yes — every Messenger called people to the same essential principle: the worship of Allah alone, without partners. What differed between them was their specific Sharīʿah — the particular rulings on what was lawful and unlawful for their people, suited to their time and circumstances.' },
        { q: "Who are the Ūlū al-ʿAzm, the Messengers of Firm Will?", a: 'Nūḥ, Ibrāhīm, Mūsā, ʿĪsā, and Muḥammad ﷺ — named together in the Qurʾān as possessing the greatest resolve and patience among all the Messengers.' },
      ],
      quiz: [
        { q: "According to this section, is Allah's Speech (including the Qur'an) created?", choices: ['No — it is one of His Attributes, and His Attributes are not created', 'Yes, it was created at a specific point in time', 'The book takes no position on this', 'Only some parts of it are created'], correct: 0 },
        { q: 'Who are named as the Ūlū al-ʿAzm (Messengers of Firm Will)?', choices: ['Nūḥ, Ibrāhīm, Mūsā, ʿĪsā, and Muḥammad ﷺ', 'Only Muḥammad ﷺ alone', 'All 124,000 prophets equally', 'Only the Israelite prophets'], correct: 0 },
      ]
    },
    {
      id: 'last-day', icon: '⏳', label: 'The Last Day', subtitle: "Death, the Grave, Resurrection, and Judgment", color: 'var(--burgundy)',
      intro: "This is the single longest section of the book, walking through everything belief in the Last Day actually entails — from the signs preceding it, through death and the trial of the grave, to resurrection, the gathering, the Balance, the Bridge, Paradise and Hell, and finally the possibility of seeing Allah Himself.",
      bullets: [
        { label: "The Sequence of Events", text: 'Signs of the Hour → death → the trial of the grave → the Trumpet and resurrection → the Gathering (Ḥashr) → the spreading of the Records of Deeds → the Balance (al-Mīzān) → the Straight Path (aṣ-Ṣirāṭ) → Just Requital → Paradise or the Fire' },
        { label: 'الحوض (Al-Ḥawḍ — The Cistern / Kawthar)', text: "A specific reward for the Prophet's ﷺ Ummah, established by both Qur'anic and Prophetic proof, distinct from the general reckoning" },
        { label: "Seeing Allah in the Hereafter", text: "The book affirms this directly, citing textual proof that the believers will see their Lord — a matter the Salaf held firmly against those who denied any possibility of vision" },
        { label: 'الشفاعة (Ash-Shafāʿah — Intercession)', text: 'Multiple kinds of intercession exist, with "the greatest intercession" (al-Shafāʿah al-ʿUẓmā) belonging to the Prophet ﷺ specifically on the Day of Judgment' },
        { label: "Does Anyone Enter Paradise by Their Deeds Alone?", text: 'The book addresses the apparent tension between "no one enters Paradise by his deeds alone" and Qurʾānic verses describing Paradise as "inherited for what you used to do" (Q 7:43) — deeds are the means Allah honors, not an independent payment that obligates Him' },
      ],
      qanda: [
        { q: 'What is the textual proof that the trial of the grave is a reality?', a: "The book cites both Qur'anic and Prophetic evidence establishing that the grave involves either blessing or torment — treating this as a matter of firm belief, not speculation, since it directly concerns what awaits every person immediately after death, before the greater resurrection." },
        { q: 'How can we reconcile the ḥadīth "it is up to Allah to forgive or punish him" with the earlier statement that whoever\'s sins outweigh his good deeds will enter the Fire?', a: "These describe different possible outcomes rather than a contradiction: a person whose sins outweigh good deeds is genuinely at risk of the Fire on the basis of the weighing itself, but Allah retains the sovereign choice to forgive out of pure mercy regardless of that balance — the weighing establishes what a person deserves; Allah's mercy is not bound only to release what is earned." },
        { q: 'What is the meaning of the Qurʾānic description that Paradise is "inherited" for one\'s deeds (Q 7:43), given the ḥadīth that no one enters Paradise by deeds alone?', a: 'Both are true simultaneously: no deed, however great, obligates Allah to admit anyone to Paradise as though owed a debt — entry is by His mercy. But that mercy operates THROUGH the deeds He facilitated and accepted, so the deeds are the real means by which the mercy is attained and are rightly described as what one is rewarded for, even though the reward itself remains a grace, not a wage.' },
      ],
      quiz: [
        { q: 'What is al-Ḥawḍ (the Cistern), also known as al-Kawthar?', choices: ["A specific reward for the Prophet's ﷺ Ummah, established by Qur'anic and Prophetic proof", 'A river in Paradise unrelated to any reward', 'A metaphor with no literal reality', 'Only mentioned once with no supporting evidence'], correct: 0 },
        { q: "Does this book affirm that believers will see Allah in the Hereafter?", choices: ['Yes, directly, citing textual proof', 'No, this is denied outright', 'The book refuses to discuss the topic', 'Only Prophets will see Allah'], correct: 0 },
      ]
    },
    {
      id: 'qadar', icon: '🖋️', label: 'The Divine Decree (Al-Qadar)', subtitle: 'Four Ranks, and Why Deeds Still Matter', color: 'var(--grey-accent)',
      intro: "Belief in al-Qadar is structured around four specific ranks of pre-ordainment, each with its own textual proof — and the book directly addresses the practical question every student of this topic eventually asks: if everything is already written, why act at all?",
      bullets: [
        { label: 'الرتبة الأولى — العلم (Rank One — Knowledge)', text: "Affirming Allah's comprehensive knowledge of all things before they occur" },
        { label: 'الرتبة الثانية — الكتابة (Rank Two — Writing)', text: 'Affirming that Allah wrote the decree of all things in al-Lawḥ al-Maḥfūẓ (the Preserved Tablet), including several layers: the Eternal pre-ordainment, the pre-ordainment of a lifetime at conception (recorded by an angel after 120 days in the womb), the Annual pre-ordainment decreed on Laylat al-Qadr, and the Daily pre-ordainment' },
        { label: 'الرتبة الثالثة — المشيئة (Rank Three — Will)', text: "Affirming that nothing occurs in the heavens or earth except by Allah's Will" },
        { label: 'الرتبة الرابعة — الخلق (Rank Four — Creation)', text: 'Affirming that Allah is the Creator of everything, including the actions of His servants' },
        { label: "Why Belief in Qadar Doesn't Cancel Effort", text: "When the Companions asked, \"why do good deeds at all if everything is already decreed?\", the Prophet ﷺ replied: \"Act, for everyone is facilitated towards what he intends to do\" — Qadar necessitates diligence, not fatalism, since a person's own choices are themselves part of what was decreed" },
      ],
      qanda: [
        { q: "What is the textual proof of the Annual Pre-ordainment that takes place on Laylat al-Qadr?", a: '"Therein (that night) is decreed every matter of ordainments." (Q 44:4-5) Ibn ʿAbbās explained that matters of death, birth, provision, and calamities for the whole coming year are copied from al-Lawḥ al-Maḥfūẓ on this night.' },
        { q: "How does belief in Allah's pre-ordainment of a person's life affect how one should act in this world?", a: 'All the Divine Books and the Prophetic Sunnah agree: pre-ordainment does not nullify acting, nor does it justify simply relying on fate passively. On the contrary, it necessitates seriousness and diligence in doing good — when the Companions asked why deeds mattered if everything was already written, the Prophet ﷺ said: "Act, for everyone is facilitated towards what he intends to do," then recited Q 92:5-10 on the two different paths made easy for those who give and fear Allah versus those who are miserly and self-satisfied.' },
        { q: 'What is the textual proof of the Pre-ordainment of a lifetime when the Nuṭfah (the earliest stage of human formation) is first created?', a: 'The ḥadīth of Ibn Masʿūd: after forty days as a clot, then forty as a piece of flesh, "Allah sends an angel who is ordered to write four things: his deeds, his livelihood, his death, and whether he will be blessed or wretched. Then the soul is breathed into him." (Bukhārī and Muslim)' },
      ],
      quiz: [
        { q: 'What are the four ranks of belief in al-Qadar described in this section?', choices: ["Allah's Knowledge, Writing, Will, and Creation of all things", 'Only two ranks exist', 'Belief in Qadar has no defined structure', 'Wealth, health, family, and career'], correct: 0 },
        { q: 'What did the Prophet ﷺ say when Companions asked why deeds mattered if everything was already decreed?', choices: ['"Act, for everyone is facilitated towards what he intends to do"', '"Deeds are meaningless since everything is already decided"', '"Stop performing good deeds entirely"', 'He refused to answer the question'], correct: 0 },
      ]
    },
    {
      id: 'kufr-shirk', icon: '⚠️', label: 'What Contradicts Faith', subtitle: 'Disbelief, Sorcery, and the Unseen Sciences', color: 'var(--burgundy-deep)',
      intro: "The book draws careful lines around what actually removes a person from Islam versus what falls short of that — and applies this specifically to widely-practiced folk beliefs like sorcery, amulets, soothsaying, and astrology.",
      bullets: [
        { label: 'كفر جحود (Kufr Juḥūd — Disbelief of Denial)', text: 'Rejecting a truth one actually knows to be true, out of arrogance or stubbornness — one of several distinct categories of Major Disbelief the book enumerates' },
        { label: 'Kufr That Does Not Expel One from Islam', text: "Practical acts of disobedience are distinguished from the specific acts (prostrating to an idol, mocking the Qur'an, abusing the Prophet ﷺ or the religion) that DO expel a person from Islam even without a verbal declaration" },
        { label: 'السحر (As-Siḥr — Sorcery)', text: 'Treated as a serious matter with a prescribed penalty (ḥadd) for the sorcerer — the ruling is severe precisely because sorcery typically requires seeking help from other-than-Allah, tying it directly back to shirk' },
        { label: 'الرقية (Ar-Ruqyah — Islamic Healing)', text: "Divided into lawful (using Qur'an, authentic supplications, and known permissible words) and unlawful (using unknown incantations, unclear words, or seeking help from jinn) forms" },
        { label: 'Amulets, Soothsayers, and Astrology', text: "Wearing protective charms/strings, consulting soothsayers, believing them, and practicing astrology to predict events are all addressed — attributing rainfall to the rising or setting of stars specifically is identified as a form of disbelief in the origin of provision" },
      ],
      qanda: [
        { q: "What is the ruling pertaining to sorcery and sorcerers?", a: "Sorcery is treated with severity precisely because it commonly involves seeking the aid of jinn or other unseen forces besides Allah — tying the practice directly to shirk. The book specifies a prescribed penalty (ḥadd) for the sorcerer, reflecting how seriously the tradition treats this as a threat to sound Tawḥīd." },
        { q: 'What is the difference between lawful and unlawful Ruqyah (Islamic healing/incantation)?', a: "Lawful Ruqyah uses the Qur'an, authentic supplications, and clear, known, permissible words whose meaning is understood. Unlawful Ruqyah involves unknown incantations, unclear or foreign words of uncertain meaning, or anything that involves seeking help from jinn or other than Allah." },
        { q: 'What is the ruling on attributing rainfall to the rising or setting of a particular star?', a: 'This is identified as a form of disbelief, because it attributes the actual bringing of rain — something only Allah does — to a created object with no causal power of its own. This is distinct from simply noting that rain historically tends to fall around a certain season associated with a star\'s position, which is a factual observation rather than a belief about causation.' },
      ],
      quiz: [
        { q: "What makes sorcery (as-siḥr) such a serious matter in this book's treatment?", choices: ['It typically requires seeking help from jinn or other-than-Allah, tying it to shirk', 'It is treated as a harmless folk tradition', 'It has no connection to Tawḥīd at all', 'It is only a minor etiquette issue'], correct: 0 },
        { q: 'What distinguishes lawful Ruqyah from unlawful Ruqyah?', choices: ["Lawful Ruqyah uses the Qur'an and clear, known permissible words; unlawful Ruqyah involves unknown incantations or seeking help from jinn", 'There is no real difference between them', 'Lawful Ruqyah must be performed in a mosque only', 'Unlawful Ruqyah is simply a longer version of lawful Ruqyah'], correct: 0 },
      ]
    },
    {
      id: 'sins-repentance', icon: '🔄', label: 'Sins and Repentance', subtitle: 'Al-Kabāʾir, Expiation, and Tawbah', color: 'var(--emerald)',
      intro: 'The book closes its discussion of personal accountability with a clear-eyed treatment of sin — distinguishing major from minor, explaining how sins are actually expiated, and drawing a hard line on when the door of repentance finally closes.',
      bullets: [
        { label: 'الكبائر (Al-Kabāʾir — Major Sins)', text: 'Defined and distinguished from minor sins, which are described as being expiated automatically through avoidance of the major ones, alongside good deeds, prayer, and genuine hardships faced in life' },
        { label: 'التوبة النصوح (At-Tawbah an-Naṣūḥ — Sincere Repentance)', text: 'Requires specific conditions: sincerely regretting the sin, ceasing it immediately, and firm resolve never to return to it — plus restitution where another person\'s right was violated' },
        { label: "When the Door of Repentance Closes for an Individual", text: "At the point when death actually begins (the moment the soul starts to depart) — repentance offered exactly at that threshold, as with Firʿawn's declaration of belief while drowning, is no longer accepted" },
        { label: 'When Repentance Closes for the Whole World', text: "When the sun rises from the west — a sign explicitly named among the greater signs of the Hour, after which no new repentance is accepted from anyone" },
      ],
      qanda: [
        { q: 'How can all sins — both major and minor — actually be expiated?', a: 'Through several means working together: avoiding the major sins (which the Qurʾān says expiates the minor ones automatically), performing good deeds which "remove" bad ones, sincere repentance, and enduring calamities and hardships in this life, which the Prophet ﷺ described as a means of expiation for a believer.' },
        { q: 'When do the doors of repentance close for an individual person specifically?', a: 'At the point when death actually begins — when the soul starts to depart the body. This is why Firʿawn\'s declaration of belief as he was drowning was rejected: the moment of unavoidable death had already begun, and repentance offered only then, once a person sees what was previously unseen, is no longer of any benefit.' },
        { q: 'When does repentance stop being accepted for the entire world, not just for individuals?', a: 'When the sun rises from the west — one of the greatest and final signs of the Hour. After this sign occurs, the door of repentance is closed for everyone remaining, not merely for whoever happens to be dying at that moment.' },
      ],
      quiz: [
        { q: "According to the Qur'an, what effect does avoiding the major sins have on the minor ones?", choices: ['It expiates them automatically', 'It has no effect on minor sins at all', 'It makes minor sins worse', 'Minor sins do not exist in Islam'], correct: 0 },
        { q: 'What sign marks the point when repentance is no longer accepted from anyone in the world?', choices: ['The sun rising from the west', 'A solar eclipse', 'The building of a large city', 'A change in the calendar'], correct: 0 },
      ]
    },
    {
      id: 'sunnah-bidah', icon: '🛡️', label: "Sunnah, Bidʿah & the Companions", subtitle: "Guarding the Path, and Honoring Those Who Walked It First", color: 'var(--burgundy-light)',
      intro: "The book closes its major themes with two closely connected topics: what counts as a blameworthy innovation in the religion, and what is owed to the generation that received the religion directly from the Prophet ﷺ himself.",
      bullets: [
        { label: 'البدعة (Al-Bidʿah — Innovation)', text: "The opposite of Sunnah — legislating in religion what Allah has not ordained. \"If any of you introduces into this affair of ours anything which does not belong to it, it is rejected.\" (Bukhārī and Muslim)" },
        { label: 'Two Divisions of Innovation', text: 'Blasphemous Innovation (denying something unanimously established in the religion, e.g. the Jahmiyyah rejecting the Attributes) versus Non-blasphemous Innovation (a genuine mistake in practice, without denying any core textual matter)' },
        { label: 'Innovation Within Acts of Worship — Two Kinds', text: '1) Adopting an entirely new method of worship not prescribed by Allah (e.g. certain Ṣūfī practices resembling "whistling and clapping," Q 8:35). 2) Taking something originally lawful and performing it outside its proper time, place, or manner.' },
        { label: 'The Seventy-Three Sects Ḥadīth', text: '"This nation will be divided into seventy-three religious sects, all in Hell, except one, and that one is: on which I and my companions are today" — i.e. following the Qurʾān and the Prophet\'s ﷺ Sunnah as understood by the earliest generation' },
        { label: "What Is Owed to the Companions", text: 'Keeping the heart and tongue clean regarding all of them, spreading their merits, avoiding discussion of disputes between them, and recognizing the extensive Qurʾānic praise given to the Muhājirūn, the Anṣār, and those who followed them in good faith' },
      ],
      qanda: [
        { q: 'What are the two main divisions of Innovation (Bidʿah) that contradict the religion?', a: 'Blasphemous Innovation and Non-blasphemous Innovation. Blasphemous Innovation denies or rejects something unanimously agreed upon in the religion — the book gives the Jahmiyyah\'s rejection of Allah\'s Attributes as an example. Non-blasphemous Innovation does not deny any core textual matter, but is still a departure from the practice of the earliest generation, done instead out of false interpretation or worldly motive.' },
        { q: 'What must Muslims observe regarding the Companions of the Prophet ﷺ and his household?', a: 'Keeping the heart and tongue clean and sound regarding all of them, spreading their merits and virtues, avoiding discussion of the disputes that arose among them, and honoring the extensive Qurʾānic praise given to them — "Muhammad is the Messenger of Allah. And those who are with him are severe against disbelievers, and merciful among themselves." (Q 48:29)' },
        { q: 'How does innovation specifically affect an act of worship — does it always nullify it entirely?', a: "It depends on the type: some innovations nullify the entire act (such as adding an extra rakʿah to an obligatory prayer), while others are themselves blameworthy but don't nullify the underlying act — such as adding an extra washing during ablution, which the Prophet ﷺ criticized as \"transgressing and doing wrong\" without declaring the ablution itself invalid." },
      ],
      quiz: [
        { q: 'According to the ḥadīth on seventy-three sects, which one is described as saved?', choices: ['The one following the Qurʾān and the Prophet\'s ﷺ Sunnah as his Companions understood it', 'Whichever sect has the most members today', 'None of them are saved', 'The one founded most recently'], correct: 0 },
        { q: 'What example does the book give of Blasphemous Innovation?', choices: ["The Jahmiyyah's rejection of Allah's Attributes", 'Adding an extra washing during ablution', 'Delaying a prayer by a few minutes', 'Reciting Qur\'an in a soft voice'], correct: 0 },
      ]
    },
  ]
});
