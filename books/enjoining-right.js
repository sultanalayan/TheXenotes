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
        { q: 'According to Ibn Taymiyyah, what made the Prophet ﷺ\'s message more complete than those of earlier prophets?', choices: ['It was revealed faster than earlier messages', 'It contained no laws at all, only spirituality', 'It enjoined all good and forbade all evil without exception', 'It was intended only for the Arabs'], correct: 2 },
        { q: 'What Qur\'anic description does Ibn Taymiyyah use for "the best nation"?', choices: ['A verse about the Day of Judgement exclusively', 'A description limited to scholars only', "Qur'an 3:110 — enjoining right, forbidding wrong, believing in Allah", 'A description of wealth and status'], correct: 2 },
        { q: 'What analogy does the Prophet ﷺ use to describe his own place among the prophets?', choices: ['The final brick completing a house otherwise perfectly built', 'The foundation stone laid before all others', 'A roof covering an unfinished house', 'A window in an otherwise windowless house'], correct: 0 },
        { q: 'What do Qur\'an 4:160 and 3:93 show, according to this section?', choices: ['That earlier nations had identical laws to this Ummah', 'That earlier nations had no laws whatsoever', 'That earlier nations sometimes had extra things forbidden to them or were not forbidden everything harmful', 'That earlier nations were forbidden nothing at all'], correct: 2 },
        { q: 'How does Abū Hurayrah describe this Ummah\'s role toward others, according to this section?', choices: ['As silent observers who never intervene', 'As people who "tie them in chains and shackles and drag them off to Paradise"', 'As a people focused solely on their own salvation', 'As scholars who only write books, not act'], correct: 1 },
        { q: 'What is the central concept this whole section introduces, in Arabic?', choices: ['Al-amr bil-maʿrūf wan-nahy ʿan al-munkar', 'Al-walāʾ wal-barāʾ', 'Al-qadar', 'Al-ʿaqīdah'], correct: 0 },
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
        { q: 'What type of obligation is enjoining right and forbidding wrong, according to Ibn Taymiyyah?', choices: ['A recommended act only, not truly obligatory', 'Only obligatory upon rulers specifically', 'Farḍ ʿayn on every single individual regardless of ability', 'Farḍ kifāyah — a collective obligation'], correct: 3 },
        { q: 'Per the hadith in Muslim, what are the three levels of changing a wrong?', choices: ['Money, speech, silence', 'Prayer, fasting, charity', 'Anger, patience, forgiveness', 'Hand, tongue, heart'], correct: 3 },
        { q: 'What happens, according to this section, if no one in the Ummah undertakes this collective obligation at all?', choices: ['Nothing — since it is collective, no one is ever blamed', 'Only the ruler bears any responsibility', 'The entire Ummah is in sin, to the extent each person was capable of contributing', 'The obligation is automatically waived permanently'], correct: 2 },
        { q: 'What does Ibn Masʿūd say characterizes the "living dead"?', choices: ['Someone who has stopped eating and drinking', 'Someone who does not even acknowledge right as right or reject wrong as wrong', 'Someone who has left the Ummah entirely', 'Someone who has committed a major sin once'], correct: 1 },
        { q: 'What limit does Ibn Taymiyyah place on an individual\'s responsibility to enjoin right, according to this section?', choices: ['It is not one\'s duty to reach every person in the world — even the Prophets were not required to do this', 'Every Muslim must personally reach every other human being', 'The obligation ends once a person turns eighteen', 'Only scholars carry any responsibility whatsoever'], correct: 0 },
        { q: 'What metaphor is used in the ḥadīth about tests presented to hearts "like a straw mat"?', choices: ['A heart that keeps absorbing wrongs without objecting eventually goes dark and cannot distinguish right from wrong', 'A mat that protects the heart from all future tests', 'A description of physical illness unrelated to sin', 'A metaphor for how quickly good deeds are rewarded'], correct: 0 },
      ]
    },
    {
      id: 'pitfalls', icon: '⚠️', label: 'Two Ways People Err', subtitle: 'Abandoning the Duty vs. Reckless Zealotry', color: 'var(--emerald)',
      intro: "Ibn Taymiyyah identifies two opposite groups who both get this obligation wrong. One clings to a misreading of a single verse to abandon the duty entirely; the other charges ahead enjoining and forbidding with their tongues and hands in every situation, with no knowledge, patience, or sense of what is actually beneficial.",
      bullets: [
        { label: 'The First Group\'s Misreading', text: 'They cling to Qurʾān 5:105 — "your selves are your responsibility, those who go astray will not harm you when you stick to guidance" — to excuse abandoning the obligation altogether' },
        { label: "Abū Bakr's Correction", text: '"O people, verily you read this āyah, and you apply it where it does not belong, for I heard the Prophet ﷺ say: Verily when the people see the wrong-doer, and do not seize his hand, Allah is about to inflict them with a general punishment."' },
        { label: 'The Second Group\'s Error', text: 'They desire to enjoin and forbid with their tongues and hands absolutely, in all situations, "without sufficient knowledge of the sharīʿah, nor forbearance, nor patience, nor regard for that which is beneficial and that which has more harm than benefit"' },
        { label: "Abū Thaʿlabah's Ḥadīth on the 'Days of Patience'", text: '"...enjoin on one another what is right and forbid what is wrong until you see obedience to greed, following of lusts... and when you see a situation over which you have no power, what is upon you then is your private affairs. For verily, the Days of Patience are coming; patience in those days is like squeezing a hot coal in your hand. The reward of one who fulfills all of his obligations in those days is equal to the reward of fifty such people today."' },
        { label: 'Both Errors Trace to the Khawārij and Muʿtazilah', text: 'Ibn Taymiyyah notes that many deviant groups — the Khawārij, the Muʿtazilah, the Rāfiḍah — considered themselves enjoiners of right and forbidders of wrong, when "the corruption caused by this kind of enjoining and forbidding is much greater than any good which may result"' },
      ],
      qanda: [
        { q: 'What is the actual scope of Qurʾān 5:105 ("your selves are your responsibility..."), according to Abū Bakr\'s correction?', a: 'Abū Bakr explained that this verse only applies once a person has genuinely fulfilled their obligation of enjoining right and forbidding wrong to the extent of their ability — at that point, other people\'s continued wrongdoing does not harm them. It was never meant to excuse abandoning the duty altogether, and he warned that ignoring visible wrongdoing invites Allah\'s general punishment on the whole community.' },
        { q: 'What does the "Days of Patience" ḥadīth suggest about how the nature of this obligation changes over time?', a: 'It suggests that as corruption and self-interest spread and people\'s capacity to influence others shrinks, the correct response shifts from active enjoining/forbidding toward guarding one\'s own private conduct — and that the reward for steadfastness in such difficult later times is multiplied fifty-fold compared to easier eras, precisely because patience becomes so much harder to sustain.' },
      ],
      quiz: [
        { q: 'Which verse does the first erring group misuse to excuse abandoning the obligation entirely?', choices: ['Qurʾān 5:105 — "your selves are your responsibility..."', 'Qurʾān 2:255, Āyat al-Kursī', 'Qurʾān 112, Sūrat al-Ikhlāṣ', 'Qurʾān 1, al-Fātiḥah'], correct: 0 },
        { q: 'What did Abū Bakr warn would happen if people see a wrongdoer and do not "seize his hand"?', choices: ['Nothing at all — individual sin never affects the group', 'Allah is about to inflict them with a general punishment', 'The wrongdoer would automatically repent on his own', 'The obligation would be permanently cancelled'], correct: 1 },
        { q: 'What is missing from the second erring group\'s approach, according to Ibn Taymiyyah?', choices: ['Wealth and social status', 'A desire to see reform happen', 'Knowledge of the sharīʿah, forbearance, patience, and regard for benefit versus harm', 'Any interest in religion at all'], correct: 2 },
        { q: 'According to the ḥadīth of Abū Thaʿlabah, what should a person\'s focus become once they have no power to change a situation?', choices: ['Aggressive public confrontation regardless of consequence', 'Their own private affairs', 'Immediate rebellion against all authority', 'Complete silence on all religious matters permanently'], correct: 1 },
        { q: 'How much greater is the reward for fulfilling one\'s obligations during the coming "Days of Patience," per the ḥadīth cited?', choices: ['Equal to the reward of ten such people today', 'No different from any other era', 'Equal to the reward of fifty such people today', 'Equal to the reward of a hundred such people today'], correct: 2 },
        { q: 'What common thread does Ibn Taymiyyah find between the Khawārij, the Muʿtazilah, and the Rāfiḍah?', choices: ['All three refused to ever engage in enjoining right or forbidding wrong', 'Each considered itself the true enjoiner of right, yet caused corruption greater than the good it claimed to pursue', 'All three were founded by the same individual', 'None of them ever discussed rulers or leadership'], correct: 1 },
      ]
    },
    {
      id: 'human-nature', icon: '🧭', label: 'Human Nature and the Four Motivators', subtitle: 'Why Peer Pressure Cuts Both Ways', color: 'var(--gold)',
      intro: "Ibn Taymiyyah gives a strikingly psychological account of why people slide into collective sin or collective virtue. He identifies four escalating motivators that drive both good and evil in groups, and divides people into three categories based on how consistently their hearts follow guidance rather than desire — mapping this directly onto the early history of the Ummah.",
      bullets: [
        { label: 'The First Motivator: Innate Drives', text: "Every person has an internal drive toward good (truthfulness, justice, fulfilling trusts) and toward evil (oppression, indulgence) — present even in total isolation" },
        { label: 'The Second: Seeing Peers Do It', text: '"When he sees his peers oppressing, or indulging in these desires, a drive appears in him to do these things which is much stronger than previously" — people are "like the feathers of an owl," gravitating toward conformity' },
        { label: 'The Third: In-Group Love and Hate', text: 'People of evil love those who agree with their sin and hate those who abstain — sometimes out of envy that the abstainer looks superior, sometimes fearing he may expose them' },
        { label: 'The Fourth: Active Enforcement', text: 'They actively order others to join their sin — and once a person succumbs, they hold him in contempt and use his fall as "evidence" against him in unrelated matters' },
        { label: 'Three Categories of People', text: '1) Those driven only by hawā, contented whenever their desires are met, regardless of ḥalāl or ḥarām. 2) Those who are sincerely pious reformers, patient under persecution. 3) The majority — a mix of both, sometimes piety prevails, sometimes desire' },
        { label: 'Mapped Onto Early Islamic History', text: "Abū Bakr and ʿUmar's caliphates saw no chaos because the Ummah was still overwhelmingly of the second category (souls at peace); by the end of ʿUthmān's and during ʿAlī's caliphate, the third category — a mixture of piety and hawā — became more numerous, producing the great fitnah" },
      ],
      qanda: [
        { q: 'Why does Ibn Taymiyyah say the "four motivators" toward good are even stronger than the four toward evil?', a: 'He cites Qurʾān 2:166 — "those who believe are stronger in love" — arguing that the internal drive to faith, truthfulness, and justice, reinforced by seeing righteous peers, mutual love among believers, and active encouragement to do good, together form an even more powerful reinforcing cycle than the equivalent chain that drives people toward sin.' },
        { q: 'How does Ibn Taymiyyah explain the outbreak of the great fitnah after ʿUthmān\'s caliphate using his three-category framework?', a: 'He argues that during Abū Bakr\'s and ʿUmar\'s time, the Ummah was still dominated by people whose souls were "at peace" (mutmaʾinnah) — sincere believers with little internal conflict between piety and desire. By the end of ʿUthmān\'s caliphate and into ʿAlī\'s, the third category — people whose hearts mixed real piety with hawā — had grown far more numerous among both rulers and subjects, so that both sides in the conflict genuinely believed they were "enjoining right," while each position was in fact contaminated by an element of desire and suspicion.' },
      ],
      quiz: [
        { q: 'What analogy does Ibn Taymiyyah use to describe how people imitate their peers?', choices: ['Bees returning to a hive', 'Fish swimming against a current', 'Feathers of an owl, gravitating toward conformity', 'Trees growing toward light'], correct: 2 },
        { q: 'What is the "third motivator" toward evil that Ibn Taymiyyah describes?', choices: ['Financial reward for wrongdoing', 'People of evil loving those who agree with their sin and hating those who abstain', 'Government legislation', 'Complete isolation from society'], correct: 1 },
        { q: 'Which Qurʾānic verse does Ibn Taymiyyah cite to show the motivators toward good are even stronger than those toward evil?', choices: ['Qurʾān 2:166 — "those who believe are stronger in love"', 'Qurʾān 5:3, on the completion of the religion', 'Qurʾān 112, on tawḥīd', 'Qurʾān 4:59, on obeying those in authority'], correct: 0 },
        { q: 'According to the three categories of people, who is described as "contented whenever their desires are met, regardless of ḥalāl or ḥarām"?', choices: ['The sincere reformers of the second category', 'The Companions collectively', 'The first category, driven only by hawā', 'Only the rulers, never the common people'], correct: 2 },
        { q: 'Why does Ibn Taymiyyah say the caliphates of Abū Bakr and ʿUmar were free of the chaos that followed?', choices: ['Because they had larger armies than later caliphs', 'Because the Ummah was still overwhelmingly made up of people whose souls were "at peace," close to the era of revelation', 'Because no Companions were alive to disagree', 'Because they ruled for a shorter period of time'], correct: 1 },
        { q: 'What happens to a person, per the "fourth motivator," after he finally succumbs and joins others in their sin?', choices: ['He is welcomed as a full equal with no further consequence', 'He is immediately forgiven and forgotten', 'He is held in contempt and his fall is used as evidence against him in unrelated matters', 'He automatically becomes their leader'], correct: 2 },
      ]
    },
    {
      id: 'sins-justice', icon: '⚖️', label: 'Types of Sin and the Primacy of Justice', subtitle: 'Why an Unjust Muslim State Fails Faster Than a Just Disbelieving One', color: 'var(--burgundy-light)',
      intro: "Ibn Taymiyyah classifies sin according to who it harms, then makes one of his most striking practical claims: that worldly affairs are held together by justice far more than by correct belief alone — an oppressive state, even a Muslim one, collapses faster than a just one, even a disbelieving one.",
      bullets: [
        { label: 'Three Types of Sin', text: '1) Sins that oppress others (theft, denying rights, envy). 2) Sins that only harm oneself (private intoxication, private fornication). 3) Sins that do both — such as a ruler who seizes people\'s property to fund his own fornication or drinking' },
        { label: 'The Root Cause: Shuḥḥ', text: '"Beware of shuḥḥ (greedy desire), for verily it destroyed those who came before you. It ordered them to be miserly and they were miserly, it ordered them to commit oppression and they oppressed, and it ordered them to cut family ties and they cut family ties."' },
        { label: "ʿAbd ar-Raḥmān ibn ʿAwf's Duʿāʾ", text: 'He was heard during Ṭawāf saying, "O Lord, protect me from the shuḥḥ of my own self," explaining that being protected from shuḥḥ protects a person from miserliness, oppression, and severing family ties all at once' },
        { label: 'The Startling Political Principle', text: '"Allah establishes the just state even if it is disbelieving, and does not establish the oppressing state, even if it is Muslim." Also: "The affairs of this world last with justice and kufr, but they do not last with oppression and Islam."' },
        { label: 'A Prophetic Warning on Speed of Punishment', text: '"The quickest of evils to be punished are injustice and breaking of family ties" (Ibn Mājah) — the unjust transgressor is overcome in this life, even if he is eventually forgiven in the next' },
      ],
      qanda: [
        { q: 'Why does Ibn Taymiyyah say a just disbelieving state can outlast an unjust Muslim one?', a: 'Because he treats justice as "the system of everything" — a structural requirement for any human society to function and endure, independent of whether its people hold correct religious belief. A ruler who governs justly, even without faith, benefits from this worldly stability, though he forfeits reward in the Hereafter; a Muslim ruler who oppresses his subjects undermines the very foundation his society rests on, so his rule crumbles in this world even if his creed is correct.' },
        { q: 'What three consequences does ʿAbdur-Raḥmān ibn ʿAwf say follow from being protected from shuḥḥ?', a: 'He said that if he is protected from the shuḥḥ (greedy desire) of his own self, he will be protected from miserliness (withholding what he has), oppression (taking what belongs to others), and the severing of family ties — showing that Ibn Taymiyyah traces all three of these vices back to this single root cause of greedy self-interest.' },
      ],
      quiz: [
        { q: 'Which of the three types of sin describes a ruler who seizes people\'s property to fund his own drinking or fornication?', choices: ['A sin that harms only the ruler himself', 'A sin that combines oppressing others and self-harm together', 'Not a sin at all, since rulers are exempt', 'A sin that harms no one'], correct: 1 },
        { q: 'What did the Prophet ﷺ say shuḥḥ did to the nations that came before this one?', choices: ['It made them prosperous and secure', 'It had no lasting religious effect', 'It destroyed them by driving them to miserliness, oppression, and cutting family ties', 'It only affected their trade relationships'], correct: 2 },
        { q: 'According to the striking political principle Ibn Taymiyyah cites, which state does Allah "establish"?', choices: ['Any Muslim state regardless of its justice', 'The just state, even if it is disbelieving', 'Only a state ruled by scholars', 'Whichever state has the largest population'], correct: 1 },
        { q: 'What did ʿAbd ar-Raḥmān ibn ʿAwf ask Allah to protect him from while making Ṭawāf?', choices: ['The shuḥḥ (greedy desire) of his own self', 'The envy of his enemies', 'Poverty in old age', 'Illness during Ḥajj'], correct: 0 },
        { q: 'According to the ḥadīth in Ibn Mājah cited in this section, which sins are "the quickest to be punished"?', choices: ['Minor errors in prayer', 'Missing a single fast', 'Injustice and breaking of family ties', 'Forgetting to give charity once'], correct: 2 },
        { q: 'What does Ibn Taymiyyah mean by calling justice "the system of everything"?', choices: ['That justice is only relevant to legal scholars', 'That justice is the structural foundation that lets any society endure, regardless of its people\'s belief', 'That justice has no bearing on how long a society lasts', 'That justice only matters in the Hereafter, not this world'], correct: 1 },
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
        { q: "What does Ibn Taymiyyah identify as the worst and ultimate form of munkar?", choices: ['Being late to an obligatory prayer', 'Disagreeing respectfully with a scholar', 'Shirk — associating partners with Allah', 'Traveling for a legitimate journey'], correct: 2 },
        { q: 'Who is responsible for enjoining right and forbidding wrong upon the general population, according to this section?', choices: ['Only the youth of the community', 'Only foreign visitors passing through', 'No one — it is left entirely to each person\'s private conscience', 'Both scholars and rulers ("those in authority")'], correct: 3 },
        { q: 'Which of the following is explicitly listed as part of maʿrūf in this section?', choices: ['Returning trusts and maintaining family ties', 'Interest-based lending', 'Cheating in trade', 'Cruelty to parents'], correct: 0 },
        { q: 'Besides shirk, which of these is listed as a form of munkar in this section?', choices: ['Truthfulness in speech', 'Generosity to neighbours', 'Unjustified killing and taking property unlawfully', 'Sincerity to Allah'], correct: 2 },
        { q: 'Why does Ibn Taymiyyah insist maʿrūf and munkar be rooted in revelation rather than personal taste?', choices: ['Because leaving it to personal taste would just mean enforcing base desire (hawā) under a religious label', 'Because personal taste is always more accurate than revelation', 'Because revelation and personal taste always agree completely', 'Because culture is the only reliable standard'], correct: 0 },
        { q: 'What kind of "worship" does this section classify as munkar?', choices: ['Any worship performed with excessive wealth', 'Any worship performed in congregation', 'Any worship Allah did not ordain', 'Any worship performed silently'], correct: 2 },
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
        { q: 'What is the core rule for whether an act of enjoining/forbidding should go ahead?', choices: ['It should always be done regardless of the consequences', 'It should never be done if it upsets anyone at all', 'Its overall benefit must outweigh its overall harm', 'Only if a ruler personally approves it beforehand'], correct: 2 },
        { q: 'Why did the Prophet ﷺ leave Abdullah ibn Ubayy\'s hypocrisy unpunished, per this section?', choices: ['The Prophet ﷺ was unaware of his hypocrisy', 'Ibn Ubayy was considered innocent of any wrongdoing', 'Punishing him fell outside the Prophet\'s authority', 'Punishing him risked provoking his tribe into far greater chaos and bloodshed'], correct: 3 },
        { q: 'What does Ibn Taymiyyah say happens to an act of enjoining/forbidding whose harm exceeds its benefit?', choices: ['It remains a good deed regardless of outcome', 'It becomes ḥarām, since net harm has exceeded net benefit', 'It is simply postponed until conditions improve', 'It is judged solely by the enjoiner\'s intention, regardless of outcome'], correct: 1 },
        { q: 'What does this section say should happen when a greater good cannot be separated from a lesser evil?', choices: ['Both must be abandoned entirely', 'The lesser evil must always take priority', 'The greater good must still be enjoined despite the lesser evil', 'The matter must be left entirely to the ruler\'s discretion'], correct: 2 },
        { q: 'What is "the only valid scale" this section says should be used to weigh benefit and harm?', choices: ['Personal enthusiasm or anger', 'Popular opinion of the community', 'The Sharīʿah — clear texts first, then analogy where none exist', 'Whatever produces the fastest visible result'], correct: 2 },
        { q: 'What should happen when a greater evil cannot be separated from a lesser good, according to this section?', choices: ['The lesser good must be preserved at all costs', 'The greater evil must be forbidden, even at the cost of losing the lesser good', 'Neither should be addressed at all', 'The ruler alone decides with no fixed principle'], correct: 1 },
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
        { q: 'What did the Prophet ﷺ instruct regarding an unjust Muslim ruler, according to this section?', choices: ['Immediately remove him by force', 'Ignore all rulers entirely, whether just or unjust', 'Only obey rulers who are themselves trained scholars', 'Be patient with him and do not fight him, so long as he maintains the prayer'], correct: 3 },
        { q: 'Which group made "warfare against the imāms of the Muslims" one of the five principles of their creed?', choices: ['Ahl as-Sunnah wal-Jamāʿah', 'The Ḥanbalī scholars specifically', 'The Companions collectively', 'The Muʿtazilah'], correct: 3 },
        { q: 'What error does this section attribute to the Khawārij regarding rulers?', choices: ['They took up arms against Muslim rulers over sin, believing this was "forbidding wrong"', 'They refused to ever criticize any ruler', 'They supported only hereditary succession', 'They rejected the concept of rulership altogether'], correct: 0 },
        { q: 'What Prophetic instruction does this section cite in response to the Muʿtazilah\'s position?', choices: ['"Give them what is due to them, and ask Allah what is due to you"', '"Fight every unjust ruler without delay"', '"Rulers have no rights over their subjects"', '"Obedience to rulers is never required"'], correct: 0 },
        { q: 'What error does this section attribute to the Rāfiḍah regarding enjoining right?', choices: ['They considered themselves the true enjoiners of right while rejecting the Ummah\'s legitimate leadership', 'They refused to ever discuss politics', 'They supported every ruler unconditionally', 'They rejected the concept of maʿrūf and munkar entirely'], correct: 0 },
        { q: 'What does Ibn Taymiyyah say historically resulted from rebelling against rulers under the banner of "enjoining right"?', choices: ['Consistently positive reform with minimal cost', 'No discernible effect either way', 'Corruption and harm far greater than the injustice it claimed to fix', 'Immediate restoration of ideal governance'], correct: 2 },
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
        { q: "According to Ibn Taymiyyah, what exactly is blameworthy about hawā?", choices: ["Having any feelings or inclinations whatsoever", "Disagreeing with a friend over a minor matter", "Enjoying food that is ḥalāl", "Following one's likes/dislikes without guidance from Allah and His Messenger"], correct: 3 },
        { q: 'What does Ibn Taymiyyah say unchecked following of hawā can eventually become?', choices: ['A minor, harmless personal habit', 'A sign of unusually strong faith', 'A requirement of proper worship', 'A form of shirk — taking one\'s own desire as one\'s god'], correct: 3 },
        { q: 'What Qur\'anic verse does this section cite as a direct warning against following hawā?', choices: ['Q 28:50 — "who is more astray than one who follows his hawā without guidance from Allah?"', 'Q 112, on the Oneness of Allah', 'Q 1, al-Fātiḥah', 'Q 33:33, on the Prophet\'s household'], correct: 0 },
        { q: 'Is merely having natural likes and dislikes considered sinful in itself, according to this section?', choices: ['Yes, all natural inclinations are sinful by default', 'No — only acting on them without any basis from Allah and His Messenger ﷺ is blameworthy', 'Only dislikes are sinful, likes are always permitted', 'The section takes no position on this'], correct: 1 },
        { q: 'What standard does this section say the heart\'s love and hatred should be measured against?', choices: ['What is merely comfortable or familiar to the person', 'What the majority of society currently prefers', 'What Allah loves and hates, not personal comfort', 'What produces the least social friction'], correct: 2 },
        { q: 'Which verse does Ibn Taymiyyah reference to show hawā can reach the level of a person\'s own god?', choices: ['Q 43:25', 'Q 2:255', 'Q 112:1', 'Q 5:3'], correct: 0 },
      ]
    },
    {
      id: 'temptation-leadership', icon: '🛡️', label: '"Don\'t Expose Me to Temptation"', subtitle: 'A False Excuse, and Why Every Group Needs a Leader', color: 'var(--grey-accent)',
      intro: "Ibn Taymiyyah exposes a specific kind of self-deception: citing fear of falling into temptation as an excuse to abandon jihād or the duty of enjoining right altogether. He then pivots to a more structural point — that human beings, simply by virtue of living together, always need enjoining, forbidding, and leadership of some kind, whether they orient it toward good or toward evil.",
      bullets: [
        { label: 'The Verse and Its Occasion', text: '"Among them are he who says: Excuse me, and do not expose me to temptation. But, verily, they have already fallen for temptation." (Qurʾān 9:49) — revealed about al-Jadd ibn Qays, who asked to be excused from fighting the Romans, citing his weakness for women' },
        { label: 'The Prophet\'s ﷺ Response', text: 'The Prophet ﷺ simply turned his face away from al-Jadd and said, "I have excused you" — al-Jadd was later the only Companion not forgiven at Bayʿat ar-Riḍwān, having hidden behind a red camel instead of taking the oath' },
        { label: 'The Real Point', text: "Turning away from the obligation of jihād out of fear of a minor, hypothetical temptation is itself a much greater temptation already fallen into — the weakness and sickness of heart that made avoiding jihād look good and acceptable" },
        { label: 'Two Categories Who Get This Wrong', text: "1) Those who enjoin/forbid/fight believing they remove chaos, but their actions are a greater chaos than what they sought to remove (e.g. the Khawārij). 2) Those who abandon the duty entirely to avoid temptation, having already fallen into a worse one" },
        { label: 'Every Group Needs Enjoining and Forbidding', text: '"Even if he was completely alone, he would order himself and forbid" — and once two or more people come together, mutual enjoining and forbidding of some kind becomes inevitable, whether toward good or evil' },
        { label: 'A Structural Example', text: 'The Prophet ﷺ said, "It is not allowed for three who go on a trip to fail to appoint one of them as amīr (leader)" — even the smallest human grouping requires leadership and rules' },
      ],
      qanda: [
        { q: 'Why does Ibn Taymiyyah say al-Jadd ibn Qays had "already fallen for temptation" by asking to be excused from jihād?', a: "Because his very act of turning away from an obligation Allah had ordered — driven by weakness of faith and a heart that found excuses appealing — was itself a far more serious and already-realized temptation than the minor, merely hypothetical risk of being tempted by women he might see on campaign. Ibn Taymiyyah reasons that it makes no sense to avoid a smaller, uncertain future risk by committing a larger, certain sin in the present." },
        { q: 'What is the structural argument Ibn Taymiyyah makes about why human societies always have "enjoining and forbidding" of some kind?', a: "He argues that anyone with free will and desires — which is every human being — necessarily orders and forbids himself internally, and that this multiplies the moment people live together: two or more people inevitably develop mutual expectations, commands, and prohibitions between them, whether these are aligned with good (as Allah and His Messenger ﷺ define it) or with falsehood and desire. The only real choice is which content fills that inevitable structure, not whether the structure exists." },
      ],
      quiz: [
        { q: 'Who was Qurʾān 9:49 revealed about, according to the scholars of tafsīr cited in this section?', choices: ['Al-Jadd ibn Qays, who asked to be excused from fighting the Romans over his weakness for women', 'Abū Bakr, regarding his role in the Hijrah', 'A group of hypocrites planning an assassination', 'ʿUmar ibn al-Khaṭṭāb, regarding a legal ruling'], correct: 0 },
        { q: 'What did the Prophet ﷺ say when al-Jadd asked to be excused from the campaign?', choices: ['"You are commanded to fight regardless"', '"I have excused you"', '"This excuse is unacceptable and you must fight"', 'He gave no response at all'], correct: 1 },
        { q: 'What does Ibn Taymiyyah say is the "real" temptation al-Jadd had already fallen into?', choices: ['An actual affair with a Roman woman', 'The weakness and sickness of heart that made avoiding jihād seem good and acceptable to him', 'A financial fraud unrelated to the campaign', 'A dispute with another Companion'], correct: 1 },
        { q: 'What later happened to al-Jadd ibn Qays at Bayʿat ar-Riḍwān, according to this section?', choices: ['He led the oath-taking himself', 'He was appointed as a general', 'He hid behind a red camel instead of taking the oath, and was the only Companion not included in the Prophet\'s ﷺ statement of forgiveness', 'He converted to another faith'], correct: 2 },
        { q: 'What example does Ibn Taymiyyah give to show that even the smallest human grouping requires structure and leadership?', choices: ['A person praying entirely alone', 'The Prophet\'s ﷺ instruction that three people on a trip must appoint one of them as amīr', 'A market transaction between two strangers', 'A single scholar writing a book alone'], correct: 1 },
        { q: 'According to Ibn Taymiyyah, is a solitary person, with no one else around, ever free from "enjoining and forbidding"?', choices: ['Yes, enjoining and forbidding only exists in groups of people', 'No — even alone, a person orders and forbids himself internally', 'Only if that person is a scholar', 'The text takes no position on this'], correct: 1 },
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
        { q: 'What are the three qualities Ibn Taymiyyah says are required in anyone who enjoins right and forbids wrong?', choices: ['Wealth, status, and eloquence', 'Anger, force, and speed', 'Silence, isolation, and doubt', 'Knowledge, compassion, and patience'], correct: 3 },
        { q: "What did the Prophet ﷺ tell ʿĀʾishah about compassion?", choices: ['That compassion is a weakness best avoided in daʿwah', 'That compassion should be reserved only for one\'s own family', 'That compassion is entirely optional in daʿwah', 'That Allah loves compassion and gives through it what force alone cannot'], correct: 3 },
        { q: 'What must be known about the person being addressed, according to the "knowledge" requirement?', choices: ['Only their name and tribe', 'The ruling itself, what is forbidden, and the condition of the person being addressed', 'Nothing — knowledge of the ruling alone suffices regardless of the person', 'Only their financial status'], correct: 1 },
        { q: 'What does this section say is a near-certainty for anyone who genuinely enjoins right?', choices: ['Immediate universal praise and agreement', 'Persecution and pushback', 'Financial reward from the community', 'Formal recognition from the ruler'], correct: 1 },
        { q: 'What does the narration from Abū Yaʿlā say about who should NOT enjoin right and forbid wrong?', choices: ['Only scholars over the age of sixty', 'Only those without wealth', 'Anyone lacking knowledge, compassion, or forbearance in doing it', 'Only women'], correct: 2 },
        { q: 'What phrase describes compassion\'s effect on any action, according to this section?', choices: ['It has no measurable effect either way', 'It beautifies whatever it enters and its absence makes things ugly', 'It only matters in private matters, not public ones', 'It is only relevant for scholars, not laypeople'], correct: 1 },
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
        { q: 'According to Ibn Taymiyyah, what is true courage actually rooted in?', choices: ['Physical size and strength alone', 'Never feeling any fear whatsoever', 'Acting quickly without deliberation', 'Strength and steadfastness of the heart, guided by knowledge'], correct: 3 },
        { q: 'Of the four categories of people Ibn Taymiyyah describes, who are "the believers who deserve the reward of Paradise"?', choices: ['Those who strive for other than Allah with courage', 'Those who work for Allah without courage or forbearance', 'Those with no courage and no work for Allah', 'Those who strive for the sake of Allah with courage and forbearance'], correct: 3 },
        { q: 'What does the Prophet ﷺ and Abū Bakr say about the seriousness of miserliness, per this section?', choices: ['That it is a minor and largely harmless character flaw', '"Which defect is more serious than miserliness!?" — treating it as one of the most serious moral defects', 'That it only matters for the wealthy', 'That it is not addressed in the Qur\'an or Sunnah at all'], correct: 1 },
        { q: 'What does al-Ḥasan al-Baṣrī say is more effective than any physical blow?', choices: ['Wisdom and forbearance in anger, and patience in the face of calamity', 'Wealth used to buy influence', 'Political alliances', 'Silence in every circumstance'], correct: 0 },
        { q: 'How does this section describe someone who works for Allah but lacks courage and forbearance?', choices: ['As a perfect believer with no deficiency', 'As entirely outside the fold of Islam', 'As having an element of hypocrisy in their practice', 'As superior to those with both courage and sincerity'], correct: 2 },
        { q: 'What is said about someone who neither works for Allah nor has courage, in the fourth category described?', choices: ['They still retain a share in the Hereafter', 'They have no share in either this life or the next', 'They are considered the best of the four categories', 'They are exempted from all religious obligation'], correct: 1 },
      ]
    },
    {
      id: 'grief-joy-voices', icon: '🎭', label: 'The Two "Obscene Voices"', subtitle: 'Transgressing the Bounds in Joy and in Grief', color: 'var(--grey-accent)',
      intro: "Ibn Taymiyyah identifies a matched pair of excesses Shaytan pushes people toward at the two emotional extremes — uncontrolled celebration in times of ease, and uncontrolled wailing in times of loss — both of which the Prophet ﷺ named together in a single hadith and forbade as a pair.",
      bullets: [
        { label: 'The Hadith Naming Both', text: 'Asked why he wept at his son Ibrāhīm\'s funeral despite having forbidden weeping over the dead, the Prophet ﷺ said: "That which I have forbidden is none other than two idiotic, obscene voices: one voice in times of plenty and ease — frivolity, playing of games, and the pipes of Shayṭān (music); and another voice in times of calamity — beating of one\'s own cheeks, tearing of clothes, and invoking the invocations of the jāhiliyyah."' },
        { label: 'The Difference: A Tear vs. a Wail', text: 'The Prophet ﷺ clarified: "Allah does not hold anyone to account for the tear of an eye, nor the grief of the heart — rather, He punishes or has mercy based on this," pointing to his tongue — meaning the vocal outburst (wailing, cursing, cheek-slapping), not the natural tear or inward sorrow itself, is what is forbidden' },
        { label: 'A Severe Warning for the Wailing Woman', text: '"Verily, the woman who weeps over the dead, if she does not repent before her death, will be dressed on the day of Qiyāmah in a vest of sores, and a dress of molten tar" — one of the conditions of the first Bayʿat ar-Riḍwān given by women was never to wail over the dead' },
        { label: 'What Is Permitted as Exceptions', text: 'Battle cries and poetry composed for jihād (never with musical instruments), and the beating of the daff (a bangle-less tambourine) at wedding celebrations and for women and young children\'s festivities, were exempted by the Sunnah from the general prohibition' },
        { label: 'The Deeper Pattern', text: 'One "idiotic, obscene voice" makes a person "joyous and arrogant" (fariḥun fakhūr) in ease; the other makes him "discontent and impatient" (halūʿan jazūʿan) in grief — both are Shayṭān pulling a person past the moderate, grounded emotional response the Sunnah asks for' },
      ],
      qanda: [
        { q: 'What exactly did the Prophet ﷺ forbid, given that he himself wept when his son Ibrāhīm died?', a: "He forbade the vocal, performative outburst of grief or joy — wailing, cheek-slapping, tearing clothes, and jāhiliyyah-style curses on one side, and frivolous music and games on the other — not the natural tear of an eye or the grief felt in the heart, which he explicitly said Allah does not hold anyone to account for. The distinction is between an involuntary emotional response and a deliberately performed, excessive vocal expression of it." },
        { q: 'What two exceptions does this section note to the general prohibition on musical or celebratory "voices"?', a: 'Battle cries and jihād poetry (provided they are never accompanied by musical instruments), and the beating of the daff specifically at wedding celebrations and for women and young children\'s festivities — both were explicitly permitted by the Sunnah as carve-outs from the wider prohibition on frivolous "voices" of celebration.' },
      ],
      quiz: [
        { q: 'What did the Prophet ﷺ say when asked why he wept at his son Ibrāhīm\'s funeral, having forbidden weeping over the dead?', choices: ['That he made an exception for himself alone', 'That what he actually forbade was the two "obscene voices" of frivolous celebration and wailing/cheek-slapping, not the tear itself', 'That the prohibition on weeping had been abrogated', 'That his own tears were symbolic rather than real'], correct: 1 },
        { q: 'According to the Prophet ﷺ, what does Allah actually hold a person to account for regarding grief?', choices: ['The tear of the eye', 'The grief felt privately in the heart', 'The vocal outburst — pointing to his tongue as the source of accountability', 'Nothing related to grief at all'], correct: 2 },
        { q: 'What warning is given to the woman who wails over the dead and does not repent before her death?', choices: ['A minor and easily forgiven lapse', 'Being dressed on the Day of Qiyāmah in a vest of sores and a dress of molten tar', 'No specific warning is mentioned', 'Losing her inheritance rights'], correct: 1 },
        { q: 'What condition did women agree to at the first Bayʿat ar-Riḍwān, regarding grief, according to this section?', choices: ['Never to wail over the dead', 'Never to attend funerals', 'Never to grieve at all, even internally', 'Never to mention the deceased\'s name again'], correct: 0 },
        { q: 'Which of the following is explicitly exempted from the general prohibition on "voices" of celebration?', choices: ['Musical instruments played at any gathering', 'Battle cries and jihād poetry without musical instruments, and the daff at weddings', 'Frivolous games at any time', 'Wailing at funerals for close relatives only'], correct: 1 },
        { q: 'What two Arabic terms describe the extremes Shayṭān pulls a person toward in joy and in grief, per this section?', choices: ['Fariḥun fakhūr (joyous and arrogant) in ease, and halūʿan jazūʿan (discontent and impatient) in grief', 'Ṣābir and shākir, both praiseworthy states', 'Muʾmin and kāfir, unrelated to emotion', 'Ṭāhir and najis, terms about ritual purity'], correct: 0 },
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
        { q: 'What two conditions must a deed meet to be accepted, according to al-Fuḍayl ibn ʿIyāḍ as quoted in this treatise?', choices: ['Wealth and public recognition', 'Speed and physical strength', 'Being witnessed by many people', 'Sincerity to Allah and correctness according to the Sunnah'], correct: 3 },
        { q: 'What position does the formula "statement, action, and sincere intention, all in accordance with the Sunnah" refute?', choices: ['The obligation of the five daily prayers', 'The existence of Hellfire as a reality', 'The concept of the Hereafter itself', "The Murji'ah view that mere verbal profession of faith is sufficient"], correct: 3 },
        { q: 'Who are the first three people described as having their deeds used to kindle the Fire, according to the warning ḥadīth cited?', choices: ['A scholar, a fighter, and a giver of charity, each acting for praise rather than Allah', 'A thief, a liar, and a murderer', 'A poor man, an orphan, and a widow', 'A king, a soldier, and a merchant'], correct: 0 },
        { q: 'What does Saʿīd ibn Jubayr\'s formula say about a statement made without any accompanying action?', choices: ['It is accepted regardless of action', 'It is not accepted without action', 'It is only accepted from scholars', 'It automatically becomes an act of shirk'], correct: 1 },
        { q: 'What happens to a deed done with complete sincerity but performed incorrectly, according to al-Fuḍayl ibn ʿIyāḍ?', choices: ['It is still fully accepted since intention matters most', 'It is rejected, since correctness according to the Sunnah is also required', 'It is accepted but with reduced reward', 'It becomes obligatory to repeat indefinitely'], correct: 1 },
        { q: 'How does this section apply the sincerity-and-correctness principle specifically to enjoining right and forbidding wrong?', choices: ['It has no special relevance to this particular obligation', 'It warns against enjoining right for reputation rather than for Allah\'s sake', 'It exempts this obligation from needing sincerity', 'It applies only to scholars, not ordinary Muslims'], correct: 1 },
      ]
    },
  ]
});
