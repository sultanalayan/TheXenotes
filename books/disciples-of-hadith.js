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
        { q: 'What group was al-Khaṭīb al-Baghdādī primarily defending "the people of hadith" against in this book?', choices: ['Innovators and philosophers of kalām who mocked them for lacking sophisticated reasoning', 'Foreign armies invading Muslim lands', 'Other hadith scholars from a rival city', 'Poets who wrote satirical verse'], correct: 0 },
        { q: 'What is the title of the second, shorter treatise that follows Sharaf Aṣḥāb al-Ḥadīth in this book?', choices: ['Naṣīḥat Ahl al-Ḥadīth (The Faithful Counsel)', 'Taqrīb al-Tahdhīb', 'Al-Muwaṭṭaʾ', 'Ṣaḥīḥ al-Bukhārī'], correct: 0 },
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
        { q: 'What did the Prophet ﷺ say would happen to someone who deliberately lied about him?', choices: ['Let him prepare his place in the Fire', 'He would simply be corrected by scholars', 'Nothing, since intentions matter more than words', 'He would be forgiven automatically'], correct: 0 },
        { q: "According to 'Umar ibn 'Abd al-'Azīz, what happens to someone who makes their religion \"the object of argumentation\"?", choices: ['They will frequently change their position', 'They become a great scholar', 'Nothing changes for them', 'They are guaranteed Paradise'], correct: 0 },
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
        { q: 'According to this hadith, when did Islam begin as something "strange," and what does the Prophet ﷺ say will happen to it?', choices: ['It began strange and will go back to being strange', 'It began strange and will become permanently mainstream', 'It never was strange at all', 'It will disappear entirely'], correct: 0 },
        { q: 'Who did the Prophet ﷺ identify as the ghurabāʾ (the strangers) in this hadith?', choices: ['Those who keep his Sunnah alive and teach it to others', 'Foreign travelers passing through Madinah', 'People who live alone in the desert', 'Anyone who disagrees with the majority on any topic'], correct: 0 },
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
        { q: 'How many sects does the hadith say the Prophet\'s ﷺ Ummah will split into, with only one saved?', choices: ['Seventy-three', 'Ten', 'One hundred', 'Three'], correct: 0 },
        { q: "What was Aḥmad ibn Ḥanbal's repeated answer when asked who the \"victorious group\" adhering to the truth actually was?", choices: ['"If they are not the people of ḥadīth, then I do not know who they are"', '"It is impossible to know"', '"It refers only to the Caliphs"', '"It refers to philosophers"'], correct: 0 },
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
        { q: 'According to this hadith, who carries authentic knowledge in every generation?', choices: ['Its just people, who refute extremists, falsifiers, and the ignorant', 'Only the ruling government', 'Only the wealthiest scholars', 'No one — knowledge is said to disappear each generation'], correct: 0 },
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
        { q: "Who did Ṣāliḥ al-Rāzī and Aḥmad ibn Ḥanbal both identify as \"al-abdāl\"?", choices: ['The people of hadith', 'The ruling caliphs of their era', 'A specific tribe in Makkah', 'Foreign scholars visiting Baghdad'], correct: 0 },
        { q: 'How did Ṣāliḥ al-Rāzī define "the just person" (al-ʿadl)?', choices: ['One whose testimony about the Prophet\'s ﷺ words is accepted', 'One who has never sinned at all', 'One who is wealthy and generous', 'One who has memorized the entire Qur\'an'], correct: 0 },
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
        { q: 'Where did Hārūn ar-Rashīd say he found "truth", according to this chapter?', choices: ['With the companions of ḥadīth', 'With the Jahmiyyah', 'With the Muʿtazilah', 'With the Rāfiḍah'], correct: 0 },
        { q: "What reason did al-Bukhārī give for why hadith scholars specifically might be the group referred to in \"a group will continue to adhere to the truth\"?", choices: ['While others were busy with trade, manufacturing, or ruling kingdoms, they kept the Sunnah alive', 'They were the wealthiest people in society', 'They had the largest armies', 'They controlled the most territory'], correct: 0 },
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
        { q: 'What did the scholars quoted in this chapter say about "the path of ḥadīth" in relation to Paradise?', choices: ['It is the straightest path they know of to Paradise', 'It has no relationship to salvation at all', 'It is one of many equally valid paths, no different from any other', "It only applies to the wealthy"], correct: 0 },
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
        { q: 'According to ash-Shāfiʿī, when should a person acquire knowledge?', choices: ['While still young, before becoming a leader', 'Only after becoming wealthy', 'Only in old age, after retirement', 'It does not matter when'], correct: 0 },
        { q: 'What is the title of al-Khaṭīb\'s separate, more detailed book on the conduct expected of a hadith narrator?', choices: ['Akhlāq ar-Rāwī wa Ādāb as-Sāmiʿ', 'Ṣaḥīḥ al-Bukhārī', 'Al-Muwaṭṭaʾ', "Taqrīb al-Tahdhīb"], correct: 0 },
      ]
    },
  ]
});
