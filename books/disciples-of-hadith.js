/* XENOS NOTES — book module
 * To add a new book: copy this file's shape, fill in the metadata + sections, save
 * it as books/<your-slug>.js, then add one <script> line in index.html. That's it —
 * the shared engine (app.js) handles rendering, navigation, search, and styling. */
XenosBooks.register({
  slug: 'disciples-of-hadith',
  title: 'Disciples of Ḥadīth — The Noble Guardians',
  subtitle: 'By al-Ḥāfiẓ Abū Bakr Aḥmad ibn ʿAlī al-Khaṭīb al-Baghdādī (d.463H)',
  icon: '🛡️',
  category: 'Ilm al-Ḥadīth',
  arabicBg: 'شرف أصحاب الحديث',
  tags: ['Sharaf Aṣḥāb al-Ḥadīth', 'Ghurabāʾ', 'Ahl al-Ḥadīth', 'Al-Khaṭīb al-Baghdādī'],
  footer: "Al-Khaṭīb al-Baghdādī (d.463H) · \"Sharaf Aṣḥāb al-Ḥadīth wa Naṣīḥat Ahl al-Ḥadīth\"",

  sections: [
    {
      id: 'author-context', icon: '📜', label: 'The Author and Why He Wrote This', subtitle: "Defending the People of Ḥadīth Against Their Critics", color: 'var(--burgundy)',
      intro: "Al-Khaṭīb al-Baghdādī (392–463H) was among the greatest ḥadīth masters of his era, memorizing ḥadīth from childhood and travelling across Basrah, Nishapur, ash-Shām, and Makkah to study under its leading scholars. He wrote this two-part work — Sharaf Aṣḥāb al-Ḥadīth (The Honour of the People of Ḥadīth) and its companion Naṣīḥat Ahl al-Ḥadīth (The Faithful Counsel) — specifically to answer innovators and philosophers of his day who mocked hadith scholars as unsophisticated literalists.",
      bullets: [
        { label: 'Who He Was Defending Against', text: "Philosophers of kalām (speculative theology) who 'made their religion into something for the purpose of disputation,' rejecting hadith texts in favour of pure reasoning" },
        { label: 'His Core Argument', text: "Those who abandon the Sunnah for opinion have, by definition, abandoned the Qur'an's own rulings too — since the Qur'an itself commands following the Messenger ﷺ" },
        { label: "Abū Yūsuf's Warning", text: '"Whoever seeks [knowledge of] the religion through philosophical discourse is a zindīq (a heretic posing as Muslim); whoever seeks the gharīb of ḥadīth is a liar; whoever seeks wealth through alchemy will become bankrupt."' },
        { label: "Sufyān ath-Thawrī's Refrain", text: '"The religion is only through traditions, not through opinion" — repeated three times for emphasis' },
        { label: 'The Two Treatises', text: 'Sharaf Aṣḥāb al-Ḥadīth runs 57 chapters compiling narrations on the virtue of hadith scholars; Naṣīḥat Ahl al-Ḥadīth follows as a shorter, practical advice manual for students of hadith' },
      ],
      qanda: [
        { q: 'What was al-Khaṭīb al-Baghdādī actually responding to when he wrote this book?', a: "A real, contemporary controversy: certain innovators and philosophically-minded theologians (mutakallimūn) were openly mocking hadith scholars as intellectually unsophisticated literalists who merely memorized and transmitted texts rather than reasoning about religion. Al-Khaṭīb wrote this as a direct, extensively-sourced defence — collecting dozens of narrations from the Prophet ﷺ, the Companions, and later scholars establishing that transmitting and preserving hadith is itself one of the highest religious virtues, not a lesser substitute for theological reasoning." },
      ],
      quiz: [
        { q: 'What group was al-Khaṭīb al-Baghdādī primarily defending "the people of hadith" against in this book?', choices: ['Foreign armies invading Muslim lands', 'Other hadith scholars from a rival city', 'Poets who wrote satirical verse about them', 'Innovators and philosophers of kalām who mocked them for lacking sophisticated reasoning'], correct: 3 },
        { q: 'What is the title of the second, shorter treatise that follows Sharaf Aṣḥāb al-Ḥadīth in this book?', choices: ['Taqrīb al-Tahdhīb', 'Al-Muwaṭṭaʾ', 'Ṣaḥīḥ al-Bukhārī', 'Naṣīḥat Ahl al-Ḥadīth (The Faithful Counsel)'], correct: 3 },
        { q: 'How many chapters does Sharaf Aṣḥāb al-Ḥadīth run to, according to this section?', choices: ['10 chapters', '200 chapters', '57 chapters', '3 chapters'], correct: 2 },
        { q: 'What did Abū Yūsuf say about someone who "seeks the gharīb of ḥadīth"?', choices: ['That he is a liar', 'That he is a great scholar', 'That he will become wealthy', 'That he is a zindīq'], correct: 0 },
        { q: 'What did Abū Yūsuf specifically call someone who seeks religious knowledge through philosophical discourse (kalām)?', choices: ['A mujtahid', 'A muḥaddith', 'A zindīq — a heretic posing as Muslim', 'A faqīh'], correct: 2 },
        { q: 'What was al-Khaṭīb al-Baghdādī\'s core argument against abandoning the Sunnah for personal opinion?', choices: ['That doing so, by definition, also abandons the Qur\'an\'s own rulings, since the Qur\'an commands following the Messenger ﷺ', 'That opinion-based reasoning is always factually wrong', 'That the Sunnah and the Qur\'an frequently contradict each other', 'That only Companions were permitted to reason independently'], correct: 0 },
      ]
    },
    {
      id: 'convey', icon: '📢', label: '"Convey From Me"', subtitle: 'The Foundational Command to Transmit', color: 'var(--burgundy-deep)',
      intro: "Al-Khaṭīb opens his case for the virtue of hadith scholars with the single hadith that founded their entire discipline: the Prophet's ﷺ direct command to pass on his words, paired with an equally direct warning against those who would twist them.",
      bullets: [
        { label: 'The Founding Hadith', text: '"Convey from me, even if it is only a single verse... but whoever deliberately lied against me, let him prepare his place in the Fire." [Ṣaḥīḥ al-Bukhārī]' },
        { label: 'Why Precision Mattered So Much', text: "This single command created two obligations at once: transmit what you've heard, and never distort it — which is precisely why the entire science of isnād criticism (covered in Rules Governing the Criticism of Ḥadīth) developed in the first place" },
        { label: "Ibn 'Umar's Refusal to Debate", text: "Imām Mālik censured religious argumentation, recounting how he refused even to debate a man who wanted to wager over doctrine: \"Allah sent Muḥammad ﷺ with a single religion, but I see you moving from religion to religion\"" },
        { label: "'Umar ibn 'Abd al-'Azīz's Warning", text: '"Whoever makes his religion the object of argumentation will frequently change [it]."' },
        { label: 'Honouring the Scholars', text: "A full chapter (Ch.6) is devoted to the Prophet's ﷺ advice to honour the scholars of hadith specifically — treating their preservation of his words as deserving of real communal respect" },
      ],
      qanda: [
        { q: "Why does al-Khaṭīb pair the command to convey hadith with such a severe warning about lying about the Prophet ﷺ in the very same narration?", a: "Because conveying carries real risk of distortion — intentional or accidental. By placing the warning about deliberate lies immediately after the command to transmit, the Prophet ﷺ built accountability directly into the instruction: spreading his words is a virtue, but only when done with total fidelity to what was actually said, which is exactly why later scholars developed such painstaking isnād-criticism methods." },
      ],
      quiz: [
        { q: 'What did the Prophet ﷺ say would happen to someone who deliberately lied about him?', choices: ['He would simply be corrected by scholars', 'Nothing, since intentions matter more than words', 'He would be forgiven automatically regardless', 'Let him prepare his place in the Fire'], correct: 3 },
        { q: "According to 'Umar ibn 'Abd al-'Azīz, what happens to someone who makes their religion \"the object of argumentation\"?", choices: ['They become a great scholar in time', 'Nothing changes for them either way', 'They are guaranteed Paradise regardless', 'They will frequently change their position'], correct: 3 },
        { q: 'What is the founding hadith al-Khaṭīb opens this chapter with?', choices: ['"Convey from me, even if it is only a single verse..."', '"Actions are judged by intentions"', '"The believer is not one who eats his fill while his neighbour goes hungry"', '"Religion is sincerity"'], correct: 0 },
        { q: 'What two obligations does al-Khaṭīb say the "Convey from me" hadith creates at once?', choices: ['Memorize the Qur\'an and teach Arabic', 'Travel widely and collect wealth', 'Transmit what was heard, and never distort it', 'Debate opponents and win arguments'], correct: 2 },
        { q: 'Why did Ibn ʿUmar reportedly refuse to debate a man who wanted to wager over doctrine?', choices: ['Because Allah sent Muḥammad ﷺ with a single religion, while the man moved between religions', 'Because he did not know how to argue effectively', 'Because debating was considered financially costly', 'Because the man was not a Muslim at all'], correct: 0 },
        { q: 'What discipline does al-Khaṭīb say developed directly out of the need for precision in conveying the Prophet\'s ﷺ words?', choices: ['Arabic poetry', 'Astronomy', 'The science of isnād criticism', 'Islamic inheritance law'], correct: 2 },
      ]
    },
    {
      id: 'ghuraba', icon: '🌙', label: 'The Strangers (al-Ghurabāʾ)', subtitle: 'Islam Began Strange, and Will Return to Being Strange', color: 'var(--emerald)',
      intro: 'This chapter carries special weight for anyone drawn to the name "Xenos" (al-Ghurabāʾ, "the strangers") — al-Khaṭīb devotes an entire chapter to the hadith explicitly identifying who these "strangers" the Prophet ﷺ gave glad tidings to actually are.',
      bullets: [
        { label: 'The Hadith', text: '"Verily, Islam began as something strange and will go back to being something strange, so glad tidings to the strangers (ghurabāʾ)." [Ṣaḥīḥ Muslim, Ibn Mājah]' },
        { label: 'The Prophet ﷺ Named Them Directly', text: 'Asked "who are the strangers?", he replied: "[They are] those who keep alive my Sunnah after me and teach it to the slaves of Allah" — and in another narration: "the scholars of ḥadīth (aṣḥāb al-ḥadīth) from the early generations"' },
        { label: "'Abdān's Gloss", text: 'Asked the same question in a different narration, the reply came: "the strangers from among the tribes" — to which the narrator \'Abdān added: "They are the scholars of ḥadīth from the early generations"' },
        { label: 'Why This Matters for the Whole Book', text: "Al-Khaṭīb places this chapter early and deliberately — it establishes that being few, unfamiliar, and out of step with the mainstream is not a mark of error for the people of hadith, but the very sign the Prophet ﷺ said to expect and be glad about" },
      ],
      qanda: [
        { q: 'Who did the Prophet ﷺ identify as "the strangers" (al-ghurabāʾ) he gave glad tidings to?', a: 'Those who keep his Sunnah alive after him and teach it to others — explicitly identified in another narration as "the scholars of ḥadīth from the early generations." The hadith frames being few and unfamiliar to the wider culture not as a weakness, but as the specific, expected condition of those who hold fast to authentic knowledge when the majority has drifted from it.' },
      ],
      quiz: [
        { q: 'According to this hadith, when did Islam begin as something "strange," and what does the Prophet ﷺ say will happen to it?', choices: ['It began strange and will become permanently mainstream', 'It never was strange at any point', 'It will disappear entirely with no return', 'It began strange and will go back to being strange'], correct: 3 },
        { q: 'Who did the Prophet ﷺ identify as the ghurabāʾ (the strangers) in this hadith?', choices: ['Foreign travelers passing through Madinah', 'People who live alone in the desert', 'Anyone who disagrees with the majority on any topic whatsoever', 'Those who keep his Sunnah alive and teach it to others'], correct: 3 },
        { q: 'In which two collections is the "Islam began strange" ḥadīth found, according to this section?', choices: ['Ṣaḥīḥ Muslim and Ibn Mājah', 'Only in al-Muwaṭṭaʾ', 'Only in a single obscure manuscript', 'Ṣaḥīḥ al-Bukhārī and Sunan Abī Dāwūd'], correct: 0 },
        { q: 'In another narration cited in this section, how were the strangers described more specifically?', choices: ['As the wealthiest members of society', 'As the rulers of distant lands', 'As the scholars of ḥadīth from the early generations', 'As anyone born outside Arabia'], correct: 2 },
        { q: 'What did the narrator ʿAbdān add after hearing the reply "the strangers from among the tribes"?', choices: ['That this could not possibly be true', 'That they are the scholars of ḥadīth from the early generations', 'That the hadith was fabricated', 'That it referred only to the Prophet\'s ﷺ own tribe'], correct: 1 },
        { q: 'Why does al-Khaṭīb place this chapter early and deliberately in the book, according to this section?', choices: ['To establish that being few and out of step with the mainstream is the very sign the Prophet ﷺ said to expect and be glad about, not a mark of error', 'To discourage readers from continuing further in the book', 'Because it was the shortest chapter to write', 'Because chronological order required it'], correct: 0 },
      ]
    },
    {
      id: 'seventy-sects', icon: '⚡', label: 'Seventy-Three Sects, and One Saved', subtitle: 'The Group That Adheres to the Truth', color: 'var(--gold)',
      intro: "Two closely-linked chapters build the case that identifying the 'saved sect' isn't left to guesswork — al-Khaṭīb compiles a whole series of scholarly testimonies, all converging on a single answer.",
      bullets: [
        { label: 'The Division Hadith', text: 'Banū Isrāʾīl split into 71 sects, the Christians into 72, "and my Ummah will split into seventy-three — all of them will be in the Fire except one [sect]"' },
        { label: 'The Saved Sect Named', text: 'A questioner asked in a dream who the saved sect was; the reply came: "You! O people of ḥadīth (aṣḥāb al-ḥadīth)"' },
        { label: '"A Group Will Continue to Adhere to the Truth"', text: '"A group from among my Ummah will continue to adhere to the truth, and those who abandon them will not harm them, until the Hour is established"' },
        { label: "Aḥmad ibn Ḥanbal's Repeated Answer", text: 'Asked directly who this victorious group was, Imām Aḥmad answered plainly each time it was raised: "If they are not the people of ḥadīth, then I do not know who they are"' },
        { label: 'A Note on Authenticity', text: "Al-Khaṭīb himself grades several of the specific chains for these narrations as weak in places (and openly says so in his footnotes) — but the core hadith on the 73 sects and the enduring 'saved group' are independently authenticated through other, stronger routes" },
      ],
      qanda: [
        { q: "Why does it matter that al-Khaṭīb himself flags some of these narrations' chains as weak, rather than just presenting them as uniformly authentic?", a: "It's a mark of the same rigorous honesty this entire discipline is built on (see Rules Governing the Criticism of Ḥadīth) — al-Khaṭīb doesn't inflate his case by hiding weak chains. He's transparent that some specific wordings (like the exact dream narration naming 'aṣḥāb al-ḥadīth') rest on weaker isnāds, while the core division-into-sects hadith and the 'group that adheres to the truth' hadith are solidly authenticated through other routes — letting the reader weigh the strength of each claim individually rather than taking everything on faith." },
      ],
      quiz: [
        { q: 'How many sects does the hadith say the Prophet\'s ﷺ Ummah will split into, with only one saved?', choices: ['Ten', 'One hundred', 'Three', 'Seventy-three'], correct: 3 },
        { q: "What was Aḥmad ibn Ḥanbal's repeated answer when asked who the \"victorious group\" adhering to the truth actually was?", choices: ['"It is impossible to know for certain"', '"It refers only to the Caliphs"', '"It refers to the philosophers"', '"If they are not the people of ḥadīth, then I do not know who they are"'], correct: 3 },
        { q: 'How many sects did Banū Isrāʾīl split into, according to the division ḥadīth cited?', choices: ['72', '73', '71', '100'], correct: 2 },
        { q: 'In a dream narration cited in this chapter, what was the reply to a questioner asking who the saved sect was?', choices: ['"You! O people of ḥadīth"', '"No one can ever know"', '"The Companions alone"', '"The rulers of the age"'], correct: 0 },
        { q: 'What does the hadith "a group from my Ummah will continue to adhere to the truth" say about those who abandon that group?', choices: ['They will destroy the group entirely', 'They will be forgiven automatically', 'Those who abandon them will not harm them, until the Hour is established', 'The group will cease to exist without them'], correct: 2 },
        { q: 'How does al-Khaṭīb treat the authenticity of some of the specific chains in this chapter?', choices: ['He hides any weaknesses to strengthen his argument', 'He openly grades some as weak while noting the core hadiths are authenticated through other, stronger routes', 'He claims every single chain is equally ṣaḥīḥ', 'He refuses to discuss chain quality at all in this chapter'], correct: 1 },
      ]
    },
    {
      id: 'just-people', icon: '⚖️', label: 'Knowledge Borne by Its Just People', subtitle: 'Refuting Extremists, Falsifiers, and the Ignorant', color: 'var(--burgundy-light)',
      intro: "This chapter's hadith gives the people of hadith a specific, active job description — not passive memorizers, but the generation-by-generation defenders who keep three distinct threats away from authentic knowledge.",
      bullets: [
        { label: 'The Hadith', text: '"This knowledge will be borne in every generation by its just people; they refute the corruption of extremists, the distortions of falsifiers, and the [false] interpretations of the ignorant."' },
        { label: 'Three Named Threats', text: 'Extremists (ghulāt) who corrupt the religion through excess, falsifiers (kadhdhābūn) who fabricate content, and the ignorant (juhhāl) who misinterpret authentic material out of a lack of real knowledge' },
        { label: 'Why "Every Generation"', text: "The hadith doesn't describe a one-time historical event — it describes an ongoing, generation-by-generation function that has to be renewed continuously as new distortions arise" },
      ],
      qanda: [
        { q: 'What three specific threats does this hadith say the "just people" of each generation refute?', a: "The corruption of extremists (those who take the religion to an excessive or fanatical extreme), the distortions of falsifiers (those who deliberately fabricate content and attribute it to the Prophet ﷺ), and the false interpretations of the ignorant (those who misread authentic material due to a genuine lack of knowledge, not malice). The hadith frames this as active, ongoing defensive work, not passive memorization." },
      ],
      quiz: [
        { q: 'According to this hadith, who carries authentic knowledge in every generation?', choices: ['Only the ruling government of the time', 'Only the wealthiest scholars available', 'No one — knowledge is said to disappear each generation', 'Its just people, who refute extremists, falsifiers, and the ignorant'], correct: 3 },
        { q: 'What are the three specific threats this hadith says the "just people" refute?', choices: ['Poverty, illness, and war', 'Foreign invasion, famine, and drought', 'The corruption of extremists, the distortions of falsifiers, and the interpretations of the ignorant', 'Heresy, apostasy, and disbelief generally, with no further detail'], correct: 2 },
        { q: 'What does "falsifiers" (kadhdhābūn) specifically refer to in this hadith?', choices: ['Those who make honest transcription errors', 'Those who translate hadith into other languages', 'Those who deliberately fabricate content and attribute it to the Prophet ﷺ', 'Those who simply disagree with a majority opinion'], correct: 2 },
        { q: 'What does "extremists" (ghulāt) refer to in this hadith\'s framing?', choices: ['Those who take the religion to an excessive or fanatical extreme', 'Those who are simply strict in personal worship', 'Anyone who fasts more than the obligatory days', 'Foreign converts to Islam'], correct: 0 },
        { q: 'Why does this section emphasize the phrase "every generation" in the hadith?', choices: ['Because it describes a one-time historical event now concluded', 'Because it describes an ongoing function renewed continuously as new distortions arise', 'Because it only applied during the time of the Companions', 'Because it refers exclusively to the four Rightly-Guided Caliphs'], correct: 1 },
        { q: 'How does this hadith characterize the "ignorant" (juhhāl) as a threat to knowledge?', choices: ['As those who deliberately conspire to destroy Islam', 'As foreign agents infiltrating scholarly circles', 'As people who refuse to study entirely', 'As those who misinterpret authentic material out of a lack of real knowledge, not malice'], correct: 3 },
      ]
    },
    {
      id: 'best-of-people', icon: '🏆', label: 'The Best of People, and the Abdāl', subtitle: 'What Later Scholars Said About Them Directly', color: 'var(--emerald-light)',
      intro: "By the time al-Khaṭīb reaches these chapters, he shifts from hadith texts to what the great early Imāms themselves said about the people of hadith in their own words — sharp, personal, unambiguous statements.",
      bullets: [
        { label: "Abū Yūsuf's Remark at the Door", text: 'Seeing hadith students gathered early one morning, the great Ḥanafī jurist Abū Yūsuf remarked: "There is no one on earth better than you; have you not arrived early in the morning to hear the ḥadīth of the Messenger of Allah ﷺ?"' },
        { label: "'Uthmān ibn Abī Shaybah's Comparison", text: 'Seeing hadith scholars in a moment of commotion, he still said: "Verily, the corrupt one (fāsiq) among them is better than the devout worshipper who is not one of them"' },
        { label: 'The Abdāl (The Substitutes)', text: "Salih al-Razi, asked who the abdāl (a special rank of hidden righteous people mentioned in early scholarly tradition) were, replied: \"If the people of hadith are not al-abdāl, then I don't know who al-abdāl are\" — attributing the same view to Sufyān ath-Thawrī" },
        { label: "Defining 'The Just Person'", text: '"The just person is not [merely] the one who refrains from unlawful sexual relations, shedding blood, or taking the property of others. The just person is the one who testifies to [the words of] the Prophet ﷺ, and his testimony is accepted" — Ṣāliḥ al-Rāzī' },
        { label: "Aḥmad ibn Ḥanbal's Version", text: '"If [they], the people of hadith, are not al-abdāl, then who are they?!"' },
      ],
      qanda: [
        { q: "How does Ṣāliḥ al-Rāzī's definition of \"the just person\" (al-'adl) reframe justice compared to how it's usually defined?", a: "The conventional definition of a just, upright witness focuses on what he abstains from — avoiding major sins like unlawful intimacy, bloodshed, or theft. Ṣāliḥ al-Rāzī reframes it around a positive function instead: the just person is specifically the one whose testimony about the Prophet's ﷺ words is trustworthy and accepted — directly tying the concept of religious justice/integrity to the reliability of a hadith narrator." },
      ],
      quiz: [
        { q: "Who did Ṣāliḥ al-Rāzī and Aḥmad ibn Ḥanbal both identify as \"al-abdāl\"?", choices: ['The ruling caliphs of their era', 'A specific tribe in Makkah', 'Foreign scholars visiting Baghdad', 'The people of hadith'], correct: 3 },
        { q: 'How did Ṣāliḥ al-Rāzī define "the just person" (al-ʿadl)?', choices: ['One who has never sinned in his life', 'One who is wealthy and generous to the poor', 'One who has memorized the entire Qur\'an by heart', 'One whose testimony about the Prophet\'s ﷺ words is accepted'], correct: 3 },
        { q: 'What did Abū Yūsuf remark upon seeing hadith students gathered early one morning?', choices: ['"There is no one on earth better than you"', '"You should be resting instead"', '"This is a waste of your time"', '"Only scholars of fiqh deserve this praise"'], correct: 0 },
        { q: 'What comparison did ʿUthmān ibn Abī Shaybah make about hadith scholars, even in a moment of commotion?', choices: ['That they were no different from ordinary worshippers', 'That their commotion proved they lacked discipline', 'That the corrupt one among them is better than the devout worshipper who is not one of them', 'That worship always outweighs hadith study'], correct: 2 },
        { q: 'How does Ṣāliḥ al-Rāzī\'s definition of "the just person" differ from the conventional definition?', choices: ['It focuses on positive testimony reliability rather than merely what sins one avoids', 'It focuses exclusively on wealth and social status', 'It requires formal government appointment', 'It requires memorizing the entire Qur\'an first'], correct: 0 },
        { q: 'What is the abdāl, as described in this section?', choices: ['A formal governmental position under the Caliphate', 'A specific city known for hadith scholarship', 'A special rank of hidden righteous people mentioned in early scholarly tradition', 'A title given only to the four Rightly-Guided Caliphs'], correct: 2 },
      ]
    },
    {
      id: 'foundation-of-islam', icon: '🕌', label: '"Were It Not for Them, We Would Not Have Studied Islam"', subtitle: "Hārūn ar-Rashīd's Famous Verdict", color: 'var(--burgundy)',
      intro: "This pair of chapters contains what may be the most quotable material in the entire book — a sequence of blunt statements from major scholars and even a Caliph, all converging on the same conclusion about where genuine truth is actually found.",
      bullets: [
        { label: "Ḥafṣ ibn Ghiyāth's Statement", text: '"Were it not that Allah had placed endeavour in the hearts of these — the seekers of knowledge — this matter, Islam, would have been wiped out"' },
        { label: "Abū Dāwūd's Version", text: '"Were it not for this group — the people of ḥadīth — we would not have studied Islam"' },
        { label: "Al-Bukhārī's Own Testimony", text: "Recalling standing with three or four companions at a scholar's door, hoping the hadith \"a group from my Ummah will continue to adhere to the truth\" referred to them specifically: \"because the merchants have busied themselves with trading, the manufacturers with manufacturing, and the kings with the affairs of their kingdoms, while you keep alive the Sunnah of the Prophet ﷺ\"" },
        { label: "Hārūn ar-Rashīd's Famous Fourfold Search", text: '"I sought four things and found them in four places: I sought disbelief and found it among the Jahmiyyah. I sought kalām (speculative theology) and argument and found them with the Muʿtazilah. I sought untruthfulness and found it with the Rāfiḍah. And I sought truth and found it with the companions of ḥadīth."' },
        { label: 'A Poem Preserved in the Chapter', text: '"They strive to carry the lights of Allah\'s Religion, / Men who give life to the ḥadīth of Muḥammad... / Their inkwells shine and illuminate, as if / They are lamps illuminating the centre of a Masjid"' },
      ],
      qanda: [
        { q: "What is significant about Hārūn ar-Rashīd's fourfold statement specifically naming the Jahmiyyah, Muʿtazilah, and Rāfiḍah before landing on the people of hadith?", a: "As the reigning Caliph of his era, Hārūn ar-Rashīd had direct exposure to every major theological faction competing for religious authority in his court and empire. His statement functions as a real-world verdict from someone with the widest possible vantage point — he explicitly tried each of the three rival groups (each already associated with a specific vice: disbelief, empty argumentation, and dishonesty) and found what he was actually looking for, truth, only with the muḥaddithīn." },
      ],
      quiz: [
        { q: 'Where did Hārūn ar-Rashīd say he found "truth", according to this chapter?', choices: ['With the Jahmiyyah', 'With the Muʿtazilah', 'With the Rāfiḍah', 'With the companions of ḥadīth'], correct: 3 },
        { q: "What reason did al-Bukhārī give for why hadith scholars specifically might be the group referred to in \"a group will continue to adhere to the truth\"?", choices: ['They were the wealthiest people in society', 'They had the largest armies of their time', 'They controlled the most territory of any group', 'While others were busy with trade, manufacturing, or ruling kingdoms, they kept the Sunnah alive'], correct: 3 },
        { q: 'Where did Hārūn ar-Rashīd say he found disbelief, according to his fourfold statement?', choices: ['Among the Rāfiḍah', 'Among the Jahmiyyah', 'Among the Muʿtazilah', 'Among the companions of ḥadīth'], correct: 1 },
        { q: 'Where did Hārūn ar-Rashīd say he found kalām (speculative theology) and argument?', choices: ['With the Jahmiyyah', 'With the Muʿtazilah', 'With the companions of ḥadīth', 'With the Rāfiḍah'], correct: 1 },
        { q: 'What did Abū Dāwūd say would have happened had it not been for "this group," the people of ḥadīth?', choices: ['Islam would have been studied identically regardless', 'Only the Qur\'an would have survived, without the Sunnah', 'We would not have studied Islam', 'Nothing would have changed'], correct: 2 },
        { q: 'What did Ḥafṣ ibn Ghiyāth say Allah placed in the hearts of the seekers of knowledge?', choices: ['Wealth and social standing', 'Endeavour, without which Islam would have been wiped out', 'Physical strength for battle', 'Political ambition'], correct: 1 },
      ]
    },
    {
      id: 'worldly-benefit', icon: '🧳', label: 'Travel, Provision, and Combined Reward', subtitle: 'Chapters 26–28 — Why the Effort Pays in Both Worlds', color: 'var(--emerald-light)',
      intro: "Three linked chapters address the practical cost of pursuing ḥadīth — the hardship of travel, the risk of neglecting worldly livelihood — and answer it by insisting the pursuit itself pays out in both this life and the next, not just the Hereafter.",
      bullets: [
        { label: "Ibrāhīm ibn Adham on the Purpose of Travel", text: 'Asked whether the companions of ḥadīth are named in the Qurʾān, Ḥammād ibn Zayd replied: "Certainly! Have you not heard the Words of Allah: \'that they may obtain understanding in the religion and warn their people when they return to them\' (Q 9:122)? This refers to everyone who travels for the purpose of seeking knowledge and understanding, then returns with it to those he left behind and teaches it to them."' },
        { label: "ʿAlī ibn Maʿbad's Description", text: 'Seeing the companions of ḥadīth, he said: "Their hair is unkempt, their garments are soiled, and their faces are dusty. If there is no reward for this, then by Allah, that is a punishment."' },
        { label: "Wakīʿ ibn al-Jarrāḥ", text: '"Were it that a man did not receive any reward for a ḥadīth except that it keeps him from heresy, he would have acquired benefit from it."' },
        { label: "Imām Aḥmad, Asked About Those Who Write Ḥadīth Without Visible Piety", text: 'Isḥāq ibn Ibrāhīm asked him: "[What if] a people write ḥadīth and one does not see the signs of it upon them, and they have no dignity?" Abū ʿAbdullāh (Aḥmad) replied: "They will be led by ḥadīth to goodness."' },
        { label: "Sahl ibn ʿAbdullāh al-Zāhid", text: '"Whoever desired the life of this world and that of the Hereafter, let him record ḥadīth, for in that there is benefit in this world and in the Hereafter."' },
        { label: "Sufyān al-Thawrī", text: '"Hearing ḥadīth is a strength for the one who desired to attain thereby the life of this world, and it is integrity for the one who desired to attain thereby the Hereafter."' },
        { label: "ʿUmar ibn ʿAbd al-ʿAzīz's Instruction to the Governor of Ḥimṣ", text: 'He wrote ordering a stipend from the Treasury for the righteous scholars there, "so that nothing preoccupies them" from the Qurʾān and the pursuit of knowledge — one of several Caliphs, per this chapter, who funded ḥadīth scholars directly from public funds.' },
      ],
      qanda: [
        { q: 'What does Ḥammād ibn Zayd say Q 9:122 actually refers to?', a: 'He explains it refers to everyone who travels for the purpose of seeking knowledge and religious understanding (fiqh), then returns to teach what he learned to those he left behind — treating the verse\'s praise of "a group who remain to obtain understanding" as a direct description of the companions of ḥadīth and their travels.' },
        { q: 'Why does al-Khaṭīb include Imām Aḥmad\'s answer about hadith-writers who show no outward dignity?', a: 'Because it anticipates an obvious objection — that some who study ḥadīth do not visibly look the part of the pious. Aḥmad\'s answer reframes the concern: exposure to ḥadīth is itself formative, and will "lead them to goodness" over time, rather than requiring polish as a precondition.' },
        { q: 'What two benefits does Sahl ibn ʿAbdullāh say recording ḥadīth secures at once?', a: 'Benefit in this world and benefit in the Hereafter simultaneously — a theme repeated by several scholars in this chapter (Ibn Dāwūd, Sufyān al-Thawrī), each framing ḥadīth study as one of the few pursuits that does not force a choice between the two.' },
      ],
      quiz: [
        { q: 'What did Ḥammād ibn Zayd say Q 9:122 refers to?', choices: ['Only the Companions who fought at Badr', 'Everyone who travels to seek knowledge and returns to teach it to those left behind', 'Only the Prophet\'s ﷺ immediate household', 'A verse unrelated to seeking knowledge'], correct: 1 },
        { q: 'What did ʿAlī ibn Maʿbad say about the companions of ḥadīth he observed — unkempt hair, soiled garments, dusty faces?', choices: ['That such neglect proved they were insincere', 'That if there is no reward for this, it would be a punishment', 'That this was a sign they should stop traveling', 'That only the wealthy could afford such travel'], correct: 1 },
        { q: 'How did Imām Aḥmad respond when asked about ḥadīth-writers who show no outward sign of piety or dignity?', choices: ['That they should be barred from studying ḥadīth', 'That such people cannot be trusted at all', 'That ḥadīth will lead them to goodness', 'That dignity is irrelevant to religious knowledge'], correct: 2 },
        { q: 'According to Sahl ibn ʿAbdullāh al-Zāhid, what does recording ḥadīth secure for a person?', choices: ['Benefit in this world and the Hereafter simultaneously', 'Benefit only in the Hereafter, at the cost of this world', 'Benefit only in this world', 'No benefit in either, only obligation'], correct: 0 },
        { q: 'What did Sufyān al-Thawrī say hearing ḥadīth provides for one seeking the Hereafter specifically?', choices: ['Wealth', 'Fame among scholars', 'Integrity', 'Physical strength'], correct: 2 },
        { q: 'What did ʿUmar ibn ʿAbd al-ʿAzīz instruct the Governor of Ḥimṣ to provide for righteous scholars?', choices: ['A stipend from the Treasury so nothing would distract them from knowledge', 'Land grants for farming', 'Military appointments', 'Exemption from all religious obligations'], correct: 0 },
      ]
    },
    {
      id: 'comparisons', icon: '⚖️', label: 'Ḥadīth Weighed Against Acts of Worship', subtitle: 'Chapters 40–46 — A Startling, Repeated Claim', color: 'var(--burgundy-light)',
      intro: "Seven consecutive chapters make one of the boldest claims in the whole book: several early scholars ranked studying and narrating ḥadīth above tasbīḥ, above voluntary prayer, above voluntary fasting — not because worship is unimportant, but because they judged ḥadīth to be, in their specific era, the more urgent need.",
      bullets: [
        { label: "Sufyān al-Thawrī — Ch.40", text: '"I do not know of any action on the face of the earth that is better than seeking ḥadīth for one who desires Allah\'s Countenance." Elsewhere: "There is nothing more frightening to me than ḥadīth, and there is nothing better than it for one who desires what is with Allah."' },
        { label: "Wakīʿ ibn al-Jarrāḥ — Ch.40", text: '"Allah is not worshipped by anything better than ḥadīth."' },
        { label: "Bishr ibn al-Ḥārith — Ch.40", text: '"I do not know of any deed on the face of the earth better than seeking knowledge and ḥadīth for one who fears Allah and whose intention is good."' },
        { label: "Wakīʿ, on Tasbīḥ — Ch.41", text: '"Were it not that ḥadīth is, in my view, better than tasbīḥ [saying \'Subḥān Allāh\'], I would not have related ḥadīth."' },
        { label: "Abū Mijlaz, on Studying the Qurʾān — Ch.42", text: 'Interrupted while relating a ḥadīth and told "perhaps you should recite a Sūrah instead," he replied: "That in which we are engaged is of no less importance to me than reciting a Sūrah from the Qurʾān."' },
        { label: "Ibn ʿAmr to a Narrator — Ch.43", text: '"When you have finished with your ḥadīth, make sajdah, for you are [already] in prayer" — treating the act of relating ḥadīth itself as equivalent in standing to prayer.' },
        { label: "Wakīʿ and Abū ʿImrān, on Voluntary Prayer — Ch.44", text: 'Wakīʿ: "If I knew that voluntary prayer was better than ḥadīth, I would not relate ḥadīth." Abū ʿImrān, asked whether prayer or writing ḥadīth was more beloved to him: "Writing a single ḥadīth is more beloved to me than standing at night in prayer."' },
        { label: "Imām Aḥmad, on Voluntary Fasting — Ch.45", text: 'Asked whether it is better that a man writes ḥadīth or fasts and prays, he answered: "[It is better that] he writes ḥadīth" — reasoning: "So that none may say, \'I saw a people doing something, and so I followed them,\' [without knowing why]." Al-Khaṭīb adds his own view: "Studying ḥadīth in this time is better than all kinds of acts of obedience, due to the prevailing ignorance of the Sunan... and the appearance of innovations."' },
        { label: "Al-Dāraquṭnī's Cure — Ch.46", text: 'When ill, he would tell Muḥammad ibn Mallāḍ, "Bring me the companions of ḥadīth," and when they arrived, he would say, "Recite ḥadīth to me" — treating the recitation itself as a source of comfort and relief.' },
      ],
      qanda: [
        { q: 'What is the actual argument behind ranking ḥadīth above voluntary acts of worship in this section, according to Imām Aḥmad\'s own reasoning?', a: 'Not that ḥadīth is intrinsically superior to prayer or fasting as an act of worship, but that in a given era — one with "prevailing ignorance of the Sunan" and rising innovation, as al-Khaṭīb puts it — preserving and transmitting the texts that let people worship correctly at all becomes the more urgent priority, since voluntary devotion without sound knowledge risks simply imitating others without understanding why.' },
        { q: 'What does Wakīʿ\'s statement about tasbīḥ actually compare?', a: 'He is not saying dhikr is worthless — he is making the narrower claim that, for himself personally, relating ḥadīth outweighed even the specific act of tasbīḥ (saying "Subḥān Allāh") in his own priorities, framed as a personal conviction strong enough that he says he would have stopped narrating hadith entirely if he judged otherwise.' },
        { q: 'What does Ibn ʿAmr\'s instruction "make sajdah, for you are in prayer" imply about how he regarded a ḥadīth-narration session?', a: 'That the session of relating ḥadīth itself carried the same devotional standing as formal prayer — worthy, in his view, of ending it the way one would end a prayer, with a prostration, rather than treating it as a purely academic or social activity distinct from worship.' },
      ],
      quiz: [
        { q: 'What did Sufyān al-Thawrī say about seeking ḥadīth compared to all other actions "on the face of the earth"?', choices: ['That he did not know of any action better than it for one who desires Allah\'s Countenance', 'That it was the least important of all religious pursuits', 'That it applied only to scholars, not laypeople', 'That fasting was always superior to it'], correct: 0 },
        { q: 'What did Wakīʿ ibn al-Jarrāḥ say about tasbīḥ compared to relating ḥadīth?', choices: ['That tasbīḥ was always superior', 'That he considered ḥadīth better than tasbīḥ, in his own view', 'That the two were entirely unrelated topics', 'That tasbīḥ should replace ḥadīth study entirely'], correct: 1 },
        { q: 'What did Abū Mijlaz say when told he should recite a Sūrah instead of relating a ḥadīth?', choices: ['That relating ḥadīth was of no less importance to him than reciting a Sūrah', 'That he immediately stopped to recite the Sūrah', 'That reciting the Qur\'an was always the priority', 'That he had never read the Qur\'an'], correct: 0 },
        { q: 'What did Abū ʿImrān say was more beloved to him than standing at night in prayer?', choices: ['Sleeping early', 'Writing a single ḥadīth', 'Traveling to Makkah', 'Teaching Arabic grammar'], correct: 1 },
        { q: 'Why did Imām Aḥmad say it was better for a man to write ḥadīth than to fast and pray voluntarily?', choices: ['So that none may imitate others\' actions without understanding the reasoning behind them', 'Because fasting and prayer were considered optional obligations', 'Because writing was easier than physical worship', 'Because he believed voluntary worship was forbidden'], correct: 0 },
        { q: 'What did al-Dāraquṭnī request when he fell ill, according to this section?', choices: ['A physician', 'To be left alone in silence', 'That the companions of ḥadīth come and recite ḥadīth to him', 'That his family recite the Qur\'an only'], correct: 2 },
      ]
    },
    {
      id: 'dreams', icon: '🌌', label: 'Dreams of the Righteous', subtitle: 'Chapter 51 — What Scholars of Ḥadīth Reported Seeing', color: 'var(--grey-accent)',
      intro: "This chapter collects dream narrations — a recognized, if lesser, category of religious evidence per the Prophet's ﷺ own words on al-mubashshirāt — in which deceased scholars of ḥadīth are seen describing how Allah treated them, and specifically crediting their hadith work for their outcome.",
      bullets: [
        { label: "The Prophetic Basis for Dreams as Evidence", text: '"Prophethood has gone; there is no prophethood after me. But al-mubashshirāt [the glad tidings] remain: a good dream experienced by a Muslim, or a dream experienced by another that concerns him." [cited as ḥasan by the author, per Ḥudhayfah]' },
        { label: "Yazīd ibn Hārūn, Asked Directly", text: 'Seen in a dream after his death and asked "How did Allah treat you?" — he replied that Allah admitted him to Paradise. Asked "Was it due to the Qurʾān?" he said "No." Asked "Then due to what?" he replied: "Due to the ḥadīth."' },
        { label: "The Longer Account of Yazīd ibn Hārūn al-Wāsiṭī", text: 'In a fuller version, he describes being questioned in the grave by Munkar and Nakīr — "Who is your Lord? What is your religion? Who is your Prophet?" — and being recognized specifically as a lifelong scholar of ḥadīth, told: "Sleep the sleep of a newly-wed, and let there be no fear upon you after today."' },
        { label: "What Yazīd Attributes His Outcome To", text: '"Due to the gatherings for the purpose of my having spoken the truth, my honesty in narrating ḥadīth, my standing for long periods in prayer, and my patience when faced with poverty" — a combination, not ḥadīth work alone.' },
        { label: "Ibn al-Mubārak, Seen in a Dream", text: 'Asked "How did Allah treat you?" he replied: "He forgave me due to my travelling [in pursuit of ḥadīth]" — reported through two separate chains in this chapter.' },
      ],
      qanda: [
        { q: 'What status do dream narrations hold as evidence in this book, compared to an authenticated ḥadīth or Qurʾānic verse?', a: 'A distinctly lower one — the Prophet ﷺ himself frames al-mubashshirāt (good dreams) as a surviving, minor echo of prophethood after his death, not as a source of religious ruling. Al-Khaṭīb includes these accounts as edifying and consistent with the book\'s broader argument, not as independent proof of anyone\'s specific fate — and, true to form, he still notes weaknesses in some of the chains carrying them.' },
        { q: 'What does Yazīd ibn Hārūn\'s fuller dream account specifically attribute his good outcome to, beyond just ḥadīth transmission?', a: 'Four things together: speaking the truth in his gatherings, honesty specifically in narrating ḥadīth, long periods of standing in prayer, and patience under poverty — meaning the chapter does not frame ḥadīth work as a substitute for personal piety, but as one strand alongside worship and character.' },
        { q: 'What did Ibn al-Mubārak say, in the dream reported by two separate narrators, earned him Allah\'s forgiveness?', a: '"My travelling" — a direct reference to his journeys undertaken in pursuit of ḥadīth, tying this chapter back to the earlier chapter on the virtue of travelling in search of ḥadīth (Chapter 26).' },
      ],
      quiz: [
        { q: 'According to the ḥadīth cited on al-mubashshirāt, what remains of prophethood after the Prophet ﷺ?', choices: ['Nothing remains at all', 'Good dreams experienced by a Muslim, or concerning him', 'A new line of prophets from his descendants', 'Only the Qur\'an, with no other form of guidance'], correct: 1 },
        { q: 'When asked in a dream whether his admission to Paradise was due to the Qur\'an, what did Yazīd ibn Hārūn reply?', choices: ['Yes, solely due to the Qur\'an', 'No — due to the ḥadīth', 'He gave no answer', 'Due to his wealth given in charity'], correct: 1 },
        { q: 'In the fuller account of Yazīd ibn Hārūn al-Wāsiṭī\'s dream, what did the angels say to him after recognizing his status?', choices: ['That he would be punished for his sins', 'That he must be questioned again the next day', '"Sleep the sleep of a newly-wed, and let there be no fear upon you after today"', 'That his case remained undecided'], correct: 2 },
        { q: 'What four things did Yazīd attribute his good outcome to in the dream, besides ḥadīth transmission?', choices: ['Wealth, lineage, fame, and eloquence', 'Nothing else — only ḥadīth mattered', 'Physical strength, travel, marriage, and children', 'Speaking the truth, honesty in narrating, long prayer, and patience under poverty'], correct: 3 },
        { q: 'What did Ibn al-Mubārak say, when seen in a dream, earned him Allah\'s forgiveness?', choices: ['His wealth given in charity', 'His travelling in pursuit of ḥadīth', 'His military service', 'His skill in poetry'], correct: 1 },
        { q: 'What status does this book give to dream narrations, relative to authenticated ḥadīth and Qur\'anic verses?', choices: ['Equal in authority to the Qur\'an', 'A distinctly lower, minor category of evidence, not a source of religious ruling', 'Higher authority, since dreams come directly from Allah', 'They are dismissed entirely as worthless'], correct: 1 },
      ]
    },
    {
      id: 'salvation', icon: '🌅', label: 'The Most Deserving of Salvation', subtitle: 'The Straightest Path to Paradise', color: 'var(--gold)',
      intro: 'The book closes its first treatise on a hopeful note — a chapter of statements about the ultimate reward awaiting those who genuinely dedicate themselves to preserving and transmitting authentic knowledge.',
      bullets: [
        { label: "Abū Jaʿfar al-Nufaylī's Statement", text: '"If there is anyone on the face of the earth who will be saved, it is these [people] who study ḥadīth"' },
        { label: 'On the Straightest Path', text: '"I do not know of any path to Paradise straighter than that of one who follows the path of ḥadīth"' },
        { label: 'On the Ṣirāṭ (the Bridge Over Hell)', text: 'Attributed to Ibn al-Mubārak: "The steadiest of people on the Ṣirāṭ will be the companions of ḥadīth"' },
        { label: "A Verse Preserved in the Chapter", text: '"The people of ḥadīth are the saved ones, if they act upon it, / If it does not come from anyone accused... / If any of them died in that state, his martyrdom is near, / So the deceased in his grave will be in a pleasant state"' },
        { label: "Al-Khaṭīb's Own Scholarly Honesty", text: "True to the standards of his own discipline, al-Khaṭīb notes several of these specific chains as weak or containing unknown narrators in his footnotes — the sentiment is a running theme across the whole book, even where any one individual narration's chain is not strong" },
      ],
      qanda: [
        { q: 'Why does this chapter matter as the closing note of the first treatise, given everything covered before it?', a: "The book builds a cumulative case across its chapters — establishing that hadith scholars are the ghurabā promised glad tidings, the saved sect amid seventy-three, the just bearers of knowledge each generation, and the ones even a Caliph and the greatest Imāms recognized as holding the truth. This final chapter caps that argument with its natural conclusion: if all of that is true, then dedicating oneself to preserving and transmitting the Prophet's ﷺ words honestly is presented as one of the most direct paths to salvation available." },
      ],
      quiz: [
        { q: 'What did the scholars quoted in this chapter say about "the path of ḥadīth" in relation to Paradise?', choices: ['It has no relationship to salvation at all', 'It is one of many equally valid paths, no different from any other', "It only applies to the wealthy", 'It is the straightest path they know of to Paradise'], correct: 3 },
        { q: 'What did Abū Jaʿfar al-Nufaylī say about who will be saved on the face of the earth?', choices: ['That it is those who study ḥadīth, if anyone is saved at all', 'That salvation is impossible to predict for anyone', 'That only the wealthy will be saved', 'That salvation is reserved solely for rulers'], correct: 0 },
        { q: 'What is attributed to Ibn al-Mubārak regarding the Ṣirāṭ (the Bridge Over Hell)?', choices: ['That no one can predict who will cross safely', 'That the steadiest people on it will be the companions of ḥadīth', 'That it does not apply to scholars', 'That only Prophets will cross it safely'], correct: 1 },
        { q: 'What does the verse preserved in this chapter say about a person from the ahl al-ḥadīth who dies while acting on it?', choices: ['That his fate is uncertain like anyone else\'s', 'That his martyrdom is near, and he will be in a pleasant state in his grave', 'That he must first perform Ḥajj for this to apply', 'That this applies only to scholars over the age of sixty'], correct: 1 },
        { q: 'How does al-Khaṭīb treat the chains of some of the narrations in this closing chapter?', choices: ['He claims all of them are unquestionably ṣaḥīḥ', 'He notes several as weak or containing unknown narrators, in keeping with his own discipline\'s standards', 'He refuses to discuss their authenticity at all', 'He removes them from the book entirely'], correct: 1 },
        { q: 'How does this chapter function as the conclusion to the first treatise\'s cumulative argument?', choices: ['It introduces an entirely new and unrelated topic', 'It caps the argument that hadith scholars are the ghurabāʾ, the saved sect, and the just bearers of knowledge, concluding this path is one of the most direct to salvation', 'It retracts the praise given in earlier chapters', 'It shifts focus entirely to fiqh rulings'], correct: 1 },
      ]
    },
    {
      id: 'faithful-counsel', icon: '🧭', label: 'The Faithful Counsel — Practical Advice', subtitle: 'How the Second Treatise Opens', color: 'var(--emerald)',
      intro: "Sharaf Aṣḥāb al-Ḥadīth closes with a direct prayer for protection from error, and al-Khaṭīb immediately follows it with Naṣīḥat Ahl al-Ḥadīth — a shorter, far more practical treatise of advice specifically for students of hadith, rather than more praise of the field itself.",
      bullets: [
        { label: 'Who It Is Written For', text: '"I have written this book for the follower of ḥadīth in particular, but also for others" — al-Khaṭīb\'s own stated purpose in the introduction' },
        { label: 'His Central Warning', text: 'Advising readers to stay away from complacent ignorance, and not to waste their limited time and life on things that keep them from acquiring the knowledge Allah has ordained upon them — the lawful, the unlawful, the obligatory, the recommended, the abrogating and the abrogated' },
        { label: "Ash-Shāfiʿī's Opening Counsel", text: '"Acquire knowledge while you are still young, before you become a leader, for once you become a leader, there is no way to acquire knowledge"' },
        { label: "'Umar's Parallel Advice", text: '"Study Islamic Jurisprudence before you become leaders" — al-Khaṭīb explains the reasoning directly: leadership and chieftainship themselves become an obstacle to further learning once attained' },
        { label: 'The Companion Volume', text: "Al-Khaṭīb notes elsewhere that the specific conduct expected of a hadith narrator — what is obligatory, recommended, and disliked for them — is covered in still more detail in his separate book, Akhlāq ar-Rāwī wa Ādāb as-Sāmiʿ" },
      ],
      qanda: [
        { q: 'Why does ash-Shāfiʿī specifically say to acquire knowledge "before you become a leader"?', a: "Because leadership and chieftainship demand time, attention, and administrative responsibility that directly compete with a student's ability to keep learning — once someone takes on that role, the practical opportunity to sit and study intensively is largely gone. Both ash-Shāfiʿī and 'Umar frame this as a now-or-never window: acquire the foundation while you still have the freedom of a student, because that freedom disappears once you're the one being deferred to." },
      ],
      quiz: [
        { q: 'According to ash-Shāfiʿī, when should a person acquire knowledge?', choices: ['Only after becoming wealthy first', 'Only in old age, after retirement', 'It does not matter when, timing is irrelevant', 'While still young, before becoming a leader'], correct: 3 },
        { q: 'What is the title of al-Khaṭīb\'s separate, more detailed book on the conduct expected of a hadith narrator?', choices: ['Ṣaḥīḥ al-Bukhārī', 'Al-Muwaṭṭaʾ', "Taqrīb al-Tahdhīb", 'Akhlāq ar-Rāwī wa Ādāb as-Sāmiʿ'], correct: 3 },
        { q: 'Who does al-Khaṭīb state, in his own introduction, that Naṣīḥat Ahl al-Ḥadīth is written for?', choices: ['The follower of ḥadīth in particular, but also for others', 'Only rulers and political leaders', 'Only children just beginning their education', 'Only scholars who have already mastered the field'], correct: 0 },
        { q: 'What does al-Khaṭīb warn readers to stay away from in this treatise?', choices: ['Traveling to seek knowledge in other cities', 'Studying under more than one teacher', 'Complacent ignorance and wasting limited time on things that block acquiring obligatory knowledge', 'Writing down what they hear from scholars'], correct: 2 },
        { q: 'What reasoning does al-Khaṭīb give for why leadership becomes an obstacle to further learning?', choices: ['Leadership demands time and responsibility that directly competes with a student\'s ability to keep learning', 'Leaders are forbidden from studying by religious law', 'Leadership requires abandoning previously learned knowledge', 'Scholars are never permitted to become leaders in the first place'], correct: 0 },
        { q: 'What does this section say Sharaf Aṣḥāb al-Ḥadīth closes with, right before Naṣīḥat Ahl al-Ḥadīth begins?', choices: ['A complete list of all narrators mentioned in the book', 'A biography of al-Khaṭīb himself', 'A direct prayer for protection from error', 'A refutation of a specific named opponent'], correct: 2 },
      ]
    },
  ]
});
