/* XENOS NOTES — book module
 * To add a new book: copy this file's shape, fill in the metadata + sections, save
 * it as books/<your-slug>.js, then add one <script> line in index.html. That's it —
 * the shared engine (app.js) handles rendering, navigation, search, and styling. */
XenosBooks.register({
  slug: 'enjoining-right',
  title: 'Enjoining Right & Forbidding Wrong',
  subtitle: 'By Shaykh al-Islām Ibn Taymiyyah (d.728H) · Trans. Salim Abdallah ibn Morgan',
  icon: '📢',
  category: 'Manhaj',
  arabicBg: 'الأمر بالمعروف',
  tags: ['Al-Amr bil-Maʿrūf', 'Manhaj', 'Ibn Taymiyyah', 'Daʿwah', 'Ṣabr'],
  footer: 'Ibn Taymiyyah (d.728H) · "Enjoining Right & Forbidding Wrong" · Trans. Salim Abdallah ibn Morgan',

  sections: [
    {
      id: 'intro', icon: '📖', label: 'What Is Enjoining Right & Forbidding Wrong?', subtitle: 'Its Place at the Heart of the Message', color: 'var(--burgundy)',
      intro: "Ibn Taymiyyah opens by placing al-amr bil-maʿrūf wan-nahy ʿan al-munkar (enjoining right and forbidding wrong) at the very center of why Allah sent every Messenger. He argues that Muḥammad ﷺ's message is the most complete of all — enjoining every good, forbidding every evil, allowing every clean thing, and prohibiting every unclean or harmful thing — where earlier prophetic messages were, by Allah's own decree, more limited in scope.",
      bullets: [
        { label: 'The Prophet Completed the Deen', text: '"My analogy in relation to the other prophets of Allah is like a man who built a house, perfecting everything about it except the location of a single brick... I am that brick, and I am the seal of the Prophets."' },
        { label: 'Earlier Messages Were Partial', text: "Qur'an 4:160 and 3:93 show that earlier nations sometimes had extra things forbidden to them, or were not forbidden everything harmful — completion came only through Muḥammad ﷺ" },
        { label: 'The Best Nation', text: '"You are the best nation brought forth for the people of the world: you enjoin right and you forbid wrong, and you believe in Allah." (Qurʾān 3:110) — this Ummah is the best because it enjoins ALL that is right and forbids ALL that is wrong, for ALL people' },
        { label: "Abū Hurayrah's Description", text: '"You are the best people for the people — you tie them in chains and shackles and drag them off to Paradise."' },
      ],
      qanda: [
        { q: 'Why does Ibn Taymiyyah say the Prophet ﷺ\'s message is more complete than those before him?', a: "He argues that earlier prophets' messages sometimes contained the prohibition of things that were actually clean and good (as with some things forbidden to the Jews as a punishment), or did not forbid everything harmful (as with the Children of Israel before the Tawrāh). Through Muḥammad ﷺ, Allah completed the enjoining of all good and the forbidding of all evil — nothing was left partial." },
        { q: 'What makes this Ummah "the best nation brought forth for the people"?', a: 'Because, unlike previous nations, this Ummah enjoins ALL that is right and forbids ALL that is wrong, addresses its message to the entire world (not just its own people), and upholds this with jihād with both life and property — the complete package of benefit that no prior nation achieved in full.' },
      ],
      quiz: [
        { q: 'According to Ibn Taymiyyah, what made the Prophet ﷺ\'s message more complete than those of earlier prophets?', choices: ['It enjoined all good and forbade all evil without exception', 'It was revealed faster', 'It contained no laws at all', 'It was only for the Arabs'], correct: 0 },
        { q: 'What Qur\'anic description does Ibn Taymiyyah use for "the best nation"?', choices: ["Qur'an 3:110 — enjoining right, forbidding wrong, believing in Allah", "A description of wealth and status", "A description limited to scholars only", "A verse about the Day of Judgement"], correct: 0 },
      ]
    },
    {
      id: 'collective-obligation', icon: '👥', label: 'A Collective Obligation', subtitle: 'Farḍ Kifāyah — Not on Every Individual Alone', color: 'var(--burgundy-deep)',
      intro: "Enjoining right and forbidding wrong is a farḍ kifāyah (collective obligation) — commanded of the Ummah as a group, not demanded in full from every single Muslim regardless of ability. Ibn Taymiyyah lays out exactly how far each person's individual responsibility extends.",
      bullets: [
        { label: 'The Qur\'anic Basis', text: '"Let there be from among you a group which calls to what is good, enjoins right, and forbids wrong. These are the successful ones."' },
        { label: 'Its Limit', text: 'It is not the duty of the one enjoining right to reach every person in the world — this was not even required of the Prophets. What is required is making the truth available to those who seek it.' },
        { label: 'Three Levels — Ḥadīth in Muslim', text: '"Whoever of you sees wrong being committed, let him change it with his hand. If he is unable, then with his tongue, and if he is unable, then with his heart — and that is the weakest of faith."' },
        { label: 'The Heart Level Is Never Optional', text: 'Rejecting evil with the heart is obligatory on everyone in every circumstance, since it costs nothing — Ibn Masʿūd said the "living dead" is one who does not even acknowledge right as right, or reject wrong as wrong' },
        { label: 'A Warning Against Silence', text: '"Tests are shown to the hearts like a straw mat, straw by straw..." — a heart that keeps absorbing wrongs without objecting eventually goes dark and can no longer tell right from wrong at all' },
      ],
      qanda: [
        { q: 'What does farḍ kifāyah mean, and how does it apply here?', a: "A farḍ kifāyah is an obligation upon the Ummah collectively — if enough people fulfil it, the rest are not sinful for not doing so themselves. But if NO ONE undertakes it, the entire Ummah is in sin to the extent each person was capable of contributing." },
        { q: 'Why is the "heart" level of rejecting wrong described as obligatory on absolutely everyone, with no exception?', a: 'Because it requires no risk, no confrontation, and no capability beyond simply not approving of evil internally — the hadith says failing even this level of rejection leaves "not a single mustard seed\'s weight of faith."' },
      ],
      quiz: [
        { q: 'What type of obligation is enjoining right and forbidding wrong, according to Ibn Taymiyyah?', choices: ['Farḍ kifāyah — a collective obligation', 'Farḍ ʿayn on every single individual regardless of ability', 'A recommended act only, not obligatory', 'Only obligatory upon rulers'], correct: 0 },
        { q: 'Per the hadith in Muslim, what are the three levels of changing a wrong?', choices: ['Hand, tongue, heart', 'Money, speech, silence', 'Prayer, fasting, charity', 'Anger, patience, forgiveness'], correct: 0 },
      ]
    },
    {
      id: 'maruf-munkar', icon: '⚖️', label: "What Is Ma'rūf and Munkar?", subtitle: 'Defining Right and Wrong', color: 'var(--emerald)',
      intro: "Before anyone can enjoin right or forbid wrong, they need a clear criterion for what actually counts as each. Ibn Taymiyyah defines maʿrūf (the recognized good) and munkar (the rejected evil) precisely, rooting both in what Allah and His Messenger ﷺ have actually enjoined or forbidden — not in personal taste or culture.",
      bullets: [
        { label: "Ma'rūf Includes", text: 'Sincerity to Allah, dependence on Him, truthfulness, fulfilling obligations, returning trusts, good behaviour to parents, maintaining family ties, generosity to neighbours and orphans, and justice in speech and action' },
        { label: 'Munkar in Its Worst Form', text: 'Shirk (associating partners with Allah) is the ultimate munkar — praying to, or seeking aid from, anyone or anything besides Allah, including the sun, moon, angels, prophets, or graves' },
        { label: 'Other Forms of Munkar', text: 'Unjustified killing, taking property unlawfully, interest, gambling, breaking family ties, cruelty to parents, cheating in trade, and any "worship" that Allah did not ordain' },
        { label: 'Who Enforces It', text: "Those in authority — scholars and rulers alike — carry the responsibility of standing over the people, ordering the good and prohibiting the wrong that Allah's law defines" },
      ],
      qanda: [
        { q: 'Why does Ibn Taymiyyah insist that maʿrūf and munkar be defined by revelation, not by personal opinion?', a: "Because if 'right' and 'wrong' were left to individual taste or cultural preference, enjoining and forbidding would just be enforcing personal desires — which is itself a form of following hawā (base desire). The only stable, non-arbitrary criterion is what Allah and His Messenger ﷺ have actually defined as good or evil." },
      ],
      quiz: [
        { q: "What does Ibn Taymiyyah identify as the worst and ultimate form of munkar?", choices: ['Shirk — associating partners with Allah', 'Being late to prayer', 'Disagreeing with a scholar', 'Traveling on a journey'], correct: 0 },
        { q: 'Who is responsible for enjoining right and forbidding wrong upon the general population, according to this section?', choices: ['Both scholars and rulers ("those in authority")', 'Only the youth', 'Only foreign visitors', 'No one — it is left to each person alone'], correct: 0 },
      ]
    },
    {
      id: 'benefit-harm', icon: '🎚️', label: 'Weighing Benefit Against Harm', subtitle: "The Core Methodological Principle", color: 'var(--gold)',
      intro: 'This is arguably the most important operating principle in the whole treatise: enjoining right and forbidding wrong is only correct when its net benefit outweighs its net harm. Ibn Taymiyyah insists this calculation must be made honestly, using the scales of the Sharīʿah — not personal zeal.',
      bullets: [
        { label: 'The General Rule', text: 'If carrying out an act of enjoining or forbidding causes more harm than the harm it prevents, it is no longer part of what Allah has commanded — it becomes ḥarām, because its net harm exceeds its net benefit' },
        { label: 'When Good and Evil Are Mixed', text: 'If a greater good cannot be separated from a lesser evil, the greater good must still be enjoined. If a greater evil cannot be separated from a lesser good, the greater evil must be forbidden, even at the cost of losing the lesser good' },
        { label: 'A Sunnah Example', text: "The Prophet ﷺ left the hypocrite leader Abdullah ibn Ubayy ibn Salūl unpunished despite his open hypocrisy, because acting against him risked provoking his tribe into far greater chaos and bloodshed" },
        { label: 'The Only Valid Scale', text: "Whenever a clear text exists, follow it directly; where none exists, reason by analogy — but the criterion is always the Sharīʿah, never raw enthusiasm or anger" },
      ],
      qanda: [
        { q: 'Why does Ibn Taymiyyah use the example of the Prophet ﷺ tolerating Abdullah ibn Ubayy\'s hypocrisy?', a: 'To show that even the Prophet ﷺ, who had every right and ability to act against an open hypocrite, chose not to punish him — because doing so would have provoked his tribe\'s loyalty into chaos and bloodshed among the Muslims, a greater harm than leaving one hypocrite\'s evil unaddressed for the time being.' },
        { q: 'What happens, in Ibn Taymiyyah\'s view, when someone enjoins right or forbids wrong in a way that causes more harm than it prevents?', a: 'It is no longer counted as the good deed of "enjoining right and forbidding wrong" at all — it becomes an act of disobedience (ḥarām) in itself, regardless of the enjoiner\'s good intentions, because net harm has exceeded net benefit.' },
      ],
      quiz: [
        { q: 'What is the core rule for whether an act of enjoining/forbidding should go ahead?', choices: ['Its overall benefit must outweigh its overall harm', 'It should always be done regardless of consequences', 'It should never be done if it upsets anyone', 'Only if a ruler personally approves it'], correct: 0 },
        { q: 'Why did the Prophet ﷺ leave Abdullah ibn Ubayy\'s hypocrisy unpunished, per this section?', choices: ['Punishing him risked provoking his tribe into far greater chaos and bloodshed', 'The Prophet ﷺ did not know about it', 'Ibn Ubayy was innocent', 'It was outside the Prophet\'s authority'], correct: 0 },
      ]
    },
    {
      id: 'rulers', icon: '👑', label: 'Patience With Unjust Rulers', subtitle: 'Ahl as-Sunnah vs. the Khawārij, Muʿtazilah & Rāfiḍah', color: 'var(--burgundy)',
      tableHeaders: ['Group', 'Their Error', "Ahl as-Sunnah's Position"],
      tableLabel: '📋 How Deviant Sects Misapplied "Enjoining Right"',
      sectsTable: [
        { name: 'Khawārij', error: 'Took up arms against Muslim rulers over sin, believing this was "forbidding wrong"', correct: 'Patience with an unjust ruler is commanded so long as he maintains the prayer; rebellion causes far greater harm' },
        { name: "Muʿtazilah", error: 'Made "warfare against the imāms of the Muslims" one of their five core religious principles', correct: 'The Prophet ﷺ said: "Give them what is due to them, and ask Allah what is due to you" (Muslim)' },
        { name: 'Rāfiḍah (Shīʿah)', error: 'Considered themselves the true enjoiners of right while rejecting the legitimate leadership of the Ummah', correct: 'Loyalty to the larger body of the Ummah and its rulers is a foundational principle of Ahl as-Sunnah wal-Jamāʿah' },
      ],
      intro: "Ibn Taymiyyah applies the benefit-versus-harm principle directly to a live political question of his era: what should a believer do when the ruler is unjust? His answer — patience, not rebellion — became one of the defining positions of Ahl as-Sunnah wal-Jamāʿah, in direct contrast to the Khawārij, Muʿtazilah, and Rāfiḍah.",
      bullets: [
        { label: 'The Core Instruction', text: 'The Prophet ﷺ ordered patience with an unjust ruler and forbade fighting against him, so long as he maintains the prayer' },
        { label: 'Why Rebellion Backfires', text: 'The corruption caused by rebelling against rulers under the banner of "enjoining right" has historically been far greater than the injustice it claimed to fix' },
        { label: "Ahl as-Sunnah's Principle", text: "Loyalty to the larger group of the Muslim Ummah, not rebelling against its rulers, and staying out of battles when chaos (fitnah) arises" },
      ],
      qanda: [
        { q: 'Why does Ibn Taymiyyah single out the Khawārij, Muʿtazilah, and Rāfiḍah in this discussion?', a: 'Because all three groups, in his account, genuinely believed they were fulfilling the obligation of enjoining right and forbidding wrong by taking up arms against Muslim rulers — but the resulting fitnah, bloodshed, and division caused far more harm than the injustices they were reacting to, illustrating his benefit-versus-harm principle in a real historical case.' },
      ],
      quiz: [
        { q: 'What did the Prophet ﷺ instruct regarding an unjust Muslim ruler, according to this section?', choices: ['Be patient with him and do not fight him, so long as he maintains the prayer', 'Immediately remove him by force', 'Ignore all rulers entirely', 'Only obey rulers who are scholars'], correct: 0 },
        { q: 'Which group made "warfare against the imāms of the Muslims" one of the five principles of their creed?', choices: ['The Muʿtazilah', 'Ahl as-Sunnah wal-Jamāʿah', 'The Ḥanbalī scholars', "The Companions"], correct: 0 },
      ]
    },
    {
      id: 'hawaa', icon: '💭', label: 'Love, Hate, and Following Hawā', subtitle: "Aligning the Heart With What Allah Loves", color: 'var(--emerald-light)',
      intro: "Ibn Taymiyyah draws a sharp line between the heart's natural likes and dislikes (which are not sinful in themselves) and hawā (base desire) — acting on those likes and dislikes without any basis from Allah and His Messenger ﷺ. He argues this is one of the deepest roots of going astray, in matters of religion even more than worldly affairs.",
      bullets: [
        { label: 'What Hawā Actually Is', text: 'The loving and loathing that is naturally in the self is not blameworthy by itself — what is blameworthy is following those likes and dislikes without any order from Allah and His Messenger ﷺ' },
        { label: 'Qur\'anic Warning', text: '"And who is more astray than the one who follows his hawā without any guidance from Allah?" (Qurʾān 28:50)' },
        { label: 'It Can Reach the Level of Shirk', text: "Ibn Taymiyyah notes that unchecked following of desire can reach the point of a person effectively taking their own hawā as their god (see Qur'an 43:25)" },
        { label: 'The Heart Must Match Allah\'s Love', text: "A believer's love for good and hatred for evil should be in harmony with what Allah loves and hates — not with what is merely comfortable or familiar to them" },
      ],
      qanda: [
        { q: 'Is having likes and dislikes itself considered a sin in this treatise?', a: "No — Ibn Taymiyyah is explicit that the mere presence of loves and dislikes in the self (hawā) is not blameworthy, since it isn't fully under a person's control. What is blameworthy is FOLLOWING those inclinations when they contradict what Allah and His Messenger ﷺ have commanded." },
      ],
      quiz: [
        { q: "According to Ibn Taymiyyah, what exactly is blameworthy about hawā?", choices: ["Following one's likes/dislikes without guidance from Allah and His Messenger", "Having any feelings at all", "Disagreeing with a friend", "Enjoying halal food"], correct: 0 },
        { q: 'What does Ibn Taymiyyah say unchecked following of hawā can eventually become?', choices: ['A form of shirk — taking one\'s own desire as one\'s god', 'A minor, harmless habit', 'A sign of strong faith', 'A requirement of worship'], correct: 0 },
      ]
    },
    {
      id: 'requirements', icon: '🕊️', label: 'Knowledge, Compassion & Patience', subtitle: 'The Three Prerequisites for Enjoining Right', color: 'var(--burgundy-light)',
      intro: 'Ibn Taymiyyah lays out three qualities that must be present in anyone who enjoins right or forbids wrong — absent any one of them, the effort tends to cause more harm than good, no matter how correct the underlying position is.',
      bullets: [
        { label: 'Knowledge — Before Acting', text: 'One must know the ruling itself, know what is forbidden, and understand the condition of the person being addressed, before enjoining or forbidding anything' },
        { label: 'Compassion — During the Act', text: '"Compassion does not enter into anything without beautifying it, and is not removed from anything without making it ugly." The Prophet ﷺ told ʿĀʾishah that Allah loves compassion and gives through it what force alone cannot achieve' },
        { label: 'Patience — After the Act', text: 'Persecution and pushback are a near-certainty for anyone who genuinely enjoins right — without patience, the enjoiner causes more corruption than reform' },
        { label: 'A Narration on All Three', text: 'None should enjoin right and forbid wrong except one who is knowledgeable in what he enjoins and forbids, compassionate in it, and forbearing in it (narrated by Abū Yaʿlā in al-Muʿtamad)' },
      ],
      qanda: [
        { q: 'Why does Ibn Taymiyyah insist all three qualities — knowledge, compassion, and patience — must be present together?', a: 'Because missing any one undermines the whole effort: without knowledge, a person may forbid something that is actually permissible or misjudge a situation; without compassion, correct advice is delivered in a way that repels rather than reforms; and without patience, the enjoiner collapses under the near-inevitable pushback and may respond in a way that causes more corruption than the original wrong.' },
      ],
      quiz: [
        { q: 'What are the three qualities Ibn Taymiyyah says are required in anyone who enjoins right and forbids wrong?', choices: ['Knowledge, compassion, and patience', 'Wealth, status, and eloquence', 'Anger, force, and speed', 'Silence, isolation, and doubt'], correct: 0 },
        { q: "What did the Prophet ﷺ tell ʿĀ'ishah about compassion?", choices: ['Allah loves compassion and gives through it what force alone cannot', 'Compassion is a weakness to avoid', 'Compassion should only be shown to family', 'Compassion is optional in dawah'], correct: 0 },
      ]
    },
    {
      id: 'courage', icon: '🦁', label: 'Courage & Generosity vs. Cowardice & Miserliness', subtitle: 'The Character the Believer Needs', color: 'var(--gold)',
      intro: "Ibn Taymiyyah closes the practical section of the treatise by contrasting the character needed to actually carry out enjoining right — courage and generosity — against the character that causes people to abandon the obligation: cowardice and miserliness, both repeatedly condemned in the Qur'an and Sunnah.",
      bullets: [
        { label: 'What True Courage Is', text: "Courage is not physical strength — it is strength and steadfastness of the heart, and the only praiseworthy courage is one guided by knowledge, not mere wildness" },
        { label: 'On Miserliness', text: '"And which defect is more serious than miserliness!?" — the Prophet ﷺ and Abū Bakr both treated miserliness as one of the most serious moral defects a person can have' },
        { label: 'On Anger and Grief', text: '"No slave of Allah has struck a more effective blow than wisdom and forbearance in anger and patience in the face of calamity" (al-Ḥasan al-Baṣrī)' },
        { label: 'Four Categories of People', text: '1) Strive for Allah with courage and forbearance — true believers. 2) Strive for other than Allah — benefit only in this life. 3) Work for Allah without courage/forbearance — an element of hypocrisy. 4) Neither work for Allah nor have courage — no share in either life' },
      ],
      qanda: [
        { q: 'Why does Ibn Taymiyyah connect cowardice and miserliness directly to the failure to enjoin right and forbid wrong?', a: "Because carrying out this obligation almost always requires some form of personal cost — speaking an unwelcome truth, risking a relationship, or spending one's wealth or effort for the sake of reform. A person who is fundamentally cowardly or miserly will find reasons to avoid that cost every time, dressing up their avoidance as caution or prudence." },
      ],
      quiz: [
        { q: 'According to Ibn Taymiyyah, what is true courage actually rooted in?', choices: ['Strength and steadfastness of the heart, guided by knowledge', 'Physical size and strength alone', 'Never feeling fear at all', 'Acting without thinking'], correct: 0 },
        { q: 'Of the four categories of people Ibn Taymiyyah describes, who are "the believers who deserve the reward of Paradise"?', choices: ['Those who strive for the sake of Allah with courage and forbearance', 'Those who strive for other than Allah with courage', 'Those who work for Allah without courage or forbearance', 'Those with no courage and no work for Allah'], correct: 0 },
      ]
    },
    {
      id: 'sincerity', icon: '🎯', label: 'Sincerity & Following the Sunnah', subtitle: 'The Two Conditions for Any Accepted Deed', color: 'var(--burgundy-deep)',
      intro: "The treatise closes on the same principle that governs every act of worship in Islam: a deed is only accepted from Allah if it meets two conditions together — sincerity purely for His sake, and correctness according to the Sunnah. Ibn Taymiyyah applies this directly to enjoining right and forbidding wrong, warning against those who do it for reputation rather than for Allah.",
      bullets: [
        { label: "Al-Fuḍayl ibn ʿIyāḍ's Definition", text: '"The most sincere, and the most correct. Any action done in complete sincerity but not correct is rejected; done correctly but without sincerity is rejected. Only sincerity to Allah plus correctness according to the Sunnah is accepted."' },
        { label: 'A Warning Hadith', text: 'The first three people whose deeds will be used to kindle the Fire are a scholar, a fighter, and a giver of charity — each of whom acted only so people would praise them, not for Allah' },
        { label: "Sa'īd ibn Jubayr's Formula", text: 'No statement is accepted without action. No statement and action is accepted without sincere intention. No statement, action, and intention is accepted unless it is in accordance with the Sunnah' },
        { label: "Rejection of the Murji'ah", text: "This formula directly refutes the Murji'ah position that mere verbal profession of faith is sufficient — faith (imān) requires both statement and action together" },
      ],
      qanda: [
        { q: 'What are the two conditions Ibn Taymiyyah says every righteous deed must meet to be accepted?', a: 'That it be done purely and sincerely for the sake of Allah (ikhlāṣ), and that it be correct — meaning it follows the Qurʾān and the Sunnah of the Prophet ﷺ, rather than being an innovation. A deed missing either condition is not accepted, no matter how impressive it looks outwardly.' },
        { q: 'How does this section use the hadith about the scholar, the fighter, and the charitable man who are the first three thrown into the Fire?', a: "As a warning that even genuinely good-looking actions — teaching knowledge, fighting, and giving charity — are worthless before Allah if the real motive was to be praised and admired by people, rather than sincerity to Allah alone. The same warning applies directly to anyone who enjoins right or forbids wrong to build a reputation rather than to please Allah." },
      ],
      quiz: [
        { q: 'What two conditions must a deed meet to be accepted, according to al-Fuḍayl ibn ʿIyāḍ as quoted in this treatise?', choices: ['Sincerity to Allah and correctness according to the Sunnah', 'Wealth and public recognition', 'Speed and physical strength', 'Being witnessed by many people'], correct: 0 },
        { q: 'What position does the formula "statement, action, and sincere intention, all in accordance with the Sunnah" refute?', choices: ["The Murji'ah view that mere verbal profession of faith is sufficient", 'The obligation of the five daily prayers', "The existence of Hellfire", "The concept of the Hereafter"], correct: 0 },
      ]
    },
  ]
});
