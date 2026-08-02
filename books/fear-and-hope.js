/* XENOS NOTES — book module
 * To add a new book: copy this file's shape, fill in the metadata + sections, save
 * it as books/<your-slug>.js, then add one <script> line in index.html. That's it —
 * the shared engine (app.js) handles rendering, navigation, search, and styling. */
XenosBooks.register({
  slug: 'fear-and-hope',
  title: 'Bayn al-Khawf wa-r-Rajāʾ',
  subtitle: "Between Fear and Hope — The Two Wings the Heart Cannot Fly Without",
  icon: '🕊️',
  category: 'Aqeedah',
  arabicBg: 'الخوف والرجاء',
  tags: ['Khawf', 'Rajāʾ', "Tazkiyah", 'Ibn al-Qayyim', 'Qulūb'],
  footer: "Bayn al-Khawf wa-r-Rajāʾ — condensed from Madārij al-Sālikīn, al-Jawāb al-Kāfī, Iḥyāʾ ʿUlūm al-Dīn, and other sources cited within.",

  sections: [
    {
      id: 'intro', icon: '🌾', label: 'The Flying Heart', subtitle: 'Two Wings, and the Space Between the Diseases', color: 'var(--burgundy)',
      intro: "Most people, if they examined themselves honestly, would find their heart tilted too far in one of two directions — toward hope until it becomes carelessness, or toward fear until it becomes paralysis. Very few find what the Salaf called the state of the flying heart: two wings, both open, both working, neither dragging the bird down nor spinning it in circles.",
      bullets: [
        { label: 'The Opening Question', text: 'When you stand before Allah in prayer, what is the dominant state of your heart — and do you even know? Awe? Longing? A hope so settled it has become comfortable? A fear so overwhelming it has quietly become despair?' },
        { label: 'Why the Qurʾan Pairs Them', text: "Verses that mention fear almost never arrive alone, and neither do verses that mention hope — this pairing is not literary style, it is doctrine" },
        { label: 'The Claim of This Study', text: "The architecture of a sound heart requires both wings — a person who holds onto only one, however sincerely, will eventually be broken by it" },
      ],
      qanda: [
        { q: 'Why does the text insist that most people\'s hearts are unbalanced in this specific way?', a: "Because the two failure modes are each comfortable in their own way: hope alone lets a person feel settled without examining their deeds, while fear alone feels like seriousness and piety even as it curdles into paralysis. Both feel, from the inside, like a reasonable relationship with Allah — which is exactly why the imbalance is so easy to miss without deliberate self-examination." },
      ],
      quiz: [
        { q: 'What metaphor does this study use for the balanced heart?', choices: ['A bird flying with two open wings', 'A ship with a single sail', 'A tree with one root', 'A lamp with no oil'], correct: 0 },
        { q: 'According to the introduction, what happens to a heart that holds only one of fear or hope?', choices: ['It will eventually be broken by whichever one it held too tightly', 'Nothing — either one alone is sufficient', 'It becomes stronger than a balanced heart', 'It is no longer accountable to Allah'], correct: 0 },
      ]
    },
    {
      id: 'definitions', icon: '📐', label: 'Defining Our Terms', subtitle: 'Because Confusion Here Is Dangerous', color: 'var(--emerald)',
      intro: "Precision in language is a form of honesty. Before anything else, the four key terms of this study need to be pinned down exactly — because two of them are counterfeits of the other two, and the counterfeits are what actually damage people.",
      bullets: [
        { label: 'الرجاء (Ar-Rajāʾ — Legitimate Hope)', text: 'Active anticipation of something desired from someone capable of granting it, paired with doing what draws one toward it — not passive optimism' },
        { label: "Al-Ḥasan al-Baṣrī's Rebuke", text: '"This thing you call hope — it is not hope. Whoever hopes for a harvest plants seeds. Whoever hopes for Paradise does what leads to it. What you have is not hope (rajāʾ) — it is wishful thinking (umniyyah). And the fool is the one who follows his desires and then hopes in Allah." [Ibn Abī al-Dunyā, Kitāb al-Yaqīn; al-Baghawī]' },
        { label: 'الأمنية (Al-Umniyyah — Wishful Thinking)', text: "Passive expectation of reward without effort — takes an attribute like al-Ghafūr and converts it into a license for negligence, inventing a god who fits one's own desires" },
        { label: 'الخوف (Al-Khawf — Legitimate Fear)', text: "Awareness of Allah's might and justice that produces righteous action — not anxiety without direction, and not paralysis" },
        { label: "Ibn al-Qayyim's Formula", text: '"Fear that is beneficial is what drives you away from the forbidden and toward the commanded. If it drives you only to worry without action, it has become a disease, not a medicine. And if it drives you to despair of Allah\'s mercy, it has crossed into a sin — for qunūṭ (despair) is among the gravest of crimes against divine majesty." [Madārij al-Sālikīn, 1/513]' },
        { label: 'القنوط (Al-Qunūṭ — Paralytic Despair)', text: "Collapse of hope in Allah's mercy — named explicitly in the Qurʾan as a sin, not merely an emotional low point" },
      ],
      qanda: [
        { q: 'What is the practical difference between rajāʾ and umniyyah, using al-Ḥasan al-Baṣrī\'s own analogy?', a: 'Rajāʾ is like hoping for a harvest by actually planting seeds — the hope and the effort are inseparable. Umniyyah is expecting the harvest while the field stays empty. Al-Ḥasan al-Baṣrī\'s point is that calling the second one "hope" at all is a category error — it is wishful thinking wearing the vocabulary of a real Islamic virtue.' },
        { q: "Why does Ibn al-Qayyim treat despair (qunūṭ) as more serious than ordinary sadness or worry?", a: 'Because qunūṭ specifically means giving up on Allah\'s mercy — and the Qurʾan names this directly as a sin, not just an unpleasant emotional state. Ordinary worry about one\'s standing can still coexist with continued effort and hope; qunūṭ is the point where a person concludes effort is now pointless, which Ibn al-Qayyim calls "crossing the line."' },
      ],
      quiz: [
        { q: "According to al-Ḥasan al-Baṣrī, what is the difference between rajāʾ (hope) and umniyyah (wishful thinking)?", choices: ['Rajāʾ pairs anticipation with the actions that lead to it; umniyyah expects the outcome without effort', 'They are simply two words for the same thing', 'Umniyyah is the stronger, more valid form of hope', 'Rajāʾ is only for scholars, umniyyah for laypeople'], correct: 0 },
        { q: 'What does Ibn al-Qayyim say happens when fear drives a person only to despair rather than to righteous action?', choices: ['It crosses into qunūṭ, a sin — not merely a lesser form of piety', 'It becomes the highest form of worship', 'It has no real consequence either way', 'It automatically earns forgiveness'], correct: 0 },
      ]
    },
    {
      id: 'quran-architecture', icon: '📖', label: "The Qur'an's Architecture", subtitle: 'Why Fear and Hope Always Travel Together', color: 'var(--gold)',
      intro: "A careful reader of the Qur'an will notice a pattern: verses describing the righteous almost never mention fear or hope in isolation. This pairing reflects two equally complete truths about Allah — and a heart that has grasped only one of them has only grasped half of its Lord.",
      bullets: [
        { label: 'The Recurring Pairing', text: '"They arise from their beds, supplicating their Lord in fear and in hope." (Q 32:16) · "Call upon Him in fear and in aspiration." (Q 7:56) · "They used to hasten to good deeds and supplicate to Us in hope and in fear." (Q 21:90)' },
        { label: 'The First Truth — Mercy', text: '"Allah\'s mercy has one hundred parts. He kept ninety-nine with Himself and sent one part to the earth — and from that one part, all of creation shows compassion to one another." [Bukhārī and Muslim]' },
        { label: 'The Second Truth — Justice', text: '"Inform My servants that it is I who am the Forgiving, the Merciful — and that it is My punishment which is the painful punishment." (Q 15:49-50) — both halves in the very same verse, deliberately.' },
        { label: 'A Heart With Only Mercy', text: "Becomes comfortable, negotiates with sins, delays tawbah — this comfort is not true peace (ṭumaʾnīnah), it is the anaesthesia of a heart partially asleep" },
        { label: 'A Heart With Only Justice', text: "Becomes crushed — cannot lift itself to worship, suspects its own repentance will be rejected, and forgets the ninety-nine parts of mercy waiting on the other side of the grave" },
      ],
      qanda: [
        { q: 'Why does the Qur\'an place mercy and punishment in the very same verse (Q 15:49-50) rather than in separate places?', a: "Because separating them risks a reader extracting only one half and mistaking it for the whole picture. By placing \"I am the Forgiving, the Merciful\" directly beside \"My punishment is the painful punishment\" in one verse, the Qur'an makes it structurally difficult to walk away with only comfort or only dread — both realities are presented as equally true, at the same moment, about the same Lord." },
        { q: "What is wrong with the comfort felt by a heart that has only absorbed Allah's mercy, without the counterbalance of His justice?", a: 'It is described as not being true peace (ṭumaʾnīnah) at all, but a kind of anaesthesia — a heart that has partially gone to sleep. It shows up as negotiating with sins, delaying repentance because "there is always more time," and smiling at warnings of punishment with a theological confidence that has never actually been tested by genuine self-examination.' },
      ],
      quiz: [
        { q: 'In the Qur\'an\'s descriptions of the righteous, how do fear and hope typically appear?', choices: ['Paired together in the same verse or passage', 'Always in completely separate chapters', 'Fear is mentioned but hope never is', 'Hope is mentioned but fear never is'], correct: 0 },
        { q: 'What two divine truths does the study say a balanced heart must hold simultaneously?', choices: ["Allah's mercy precedes His wrath, and Allah's punishment and justice are equally real", 'Allah only forgives some sins, never all of them', 'Fear is optional, but hope is mandatory', 'Neither mercy nor justice matter, only ritual practice'], correct: 0 },
      ]
    },
    {
      id: 'two-wings', icon: '🕊️', label: "Ibn al-Qayyim's Framework", subtitle: 'Love Is the Head, Fear and Hope Are the Wings', color: 'var(--burgundy-light)',
      intro: 'No scholar mapped this territory more precisely than Ibn al-Qayyim al-Jawziyyah. His central metaphor has survived centuries because it captures something structurally true about how these three things relate to one another.',
      bullets: [
        { label: "Ibn al-Qayyim's Metaphor", text: '"The heart in its journey to Allah is like a bird: love is its head, and fear and hope are its two wings. When the head is sound and the two wings are intact, the bird flies well. When the head is severed, the bird is dead. When one wing is lost, the bird becomes prey for hunters." [Madārij al-Sālikīn, 1/512]' },
        { label: 'المحبة (Al-Maḥabbah — Love) Is the Head', text: "Not fear, not hope — because love is the fuel of all worship. A person who only fears calculates the minimum to avoid punishment; a person who only hopes is essentially a transaction-seeker; a person who loves does not ask what the minimum is, but what the maximum is" },
        { label: "'He Loves Them and They Love Him' (Q 5:54)", text: "The love the Qur'an describes for the Companions is bilateral — and from it followed the migration, the battles, the night prayers, the patience under torture, the forgiveness of enemies. Love was the engine, not an addition to their faith." },
        { label: "Sufyān ath-Thawrī's Weeping", text: '"I have not wept from fear of the Fire. I have wept from fear of being veiled from Allah. The Fire is a creation — I can bear a creation. But to be veiled from the Creator — who can bear that?" [Ḥilyat al-Awliyāʾ, 6/356]' },
        { label: "Al-Fuḍayl ibn ʿIyāḍ's Hope", text: '"By Allah, I hope in Allah\'s mercy more because of my sins than I hope because of my good deeds. Because my good deeds I might ruin with self-admiration (ʿujb). But Allah\'s mercy comes to the broken and the confessing — and that I have."' },
      ],
      qanda: [
        { q: 'Why does Ibn al-Qayyim make love (maḥabbah) the head of the bird rather than fear or hope?', a: 'Because love is what actually fuels worship — a purely fear-driven worshipper calculates the bare minimum required to stay safe, and a purely hope-driven one is essentially transacting for a reward. Someone who genuinely loves Allah does not ask "what is the least I must do," but "what is the most I can offer" — which is why Ibn al-Qayyim treats love as the engine that gives the whole bird its direction and purpose, with fear and hope as the wings that keep that flight stable.' },
        { q: "What does al-Fuḍayl ibn ʿIyāḍ's statement reveal about mature, rather than naive, hope?", a: 'That real hope is not built on confidence in one\'s own good deeds — al-Fuḍayl explicitly says his good deeds could be ruined by self-admiration (ʿujb) before they even reach Allah. Instead, his hope rests on the nature of Allah\'s mercy toward "the broken and the confessing" — meaning mature hope is rooted in who Allah is, not in a person\'s inflated confidence about their own record.' },
      ],
      quiz: [
        { q: "In Ibn al-Qayyim's bird metaphor, what does love (maḥabbah) represent?", choices: ["The head — the source of direction and the fuel for all worship", 'One of the two wings', 'The tail feathers', "Something unrelated to the metaphor"], correct: 0 },
        { q: 'What did Sufyān ath-Thawrī say he actually wept from fear of?', choices: ['Being veiled from Allah, not the Fire itself', 'Losing his wealth', 'Public embarrassment', 'Physical illness'], correct: 0 },
      ]
    },
    {
      id: 'which-wing', icon: '⚖️', label: 'Which Wing Should Be Stronger?', subtitle: 'More Fear in Life, More Hope at Death', color: 'var(--emerald-light)',
      intro: 'The scholars gave a nuanced answer to which of the two should dominate: it depends on where a person stands in their life. Fear protects the living; hope receives the dying — the same door serving different purposes depending on whether you are entering or leaving.',
      bullets: [
        { label: 'During Life and Health — Fear Should Lead', text: "Al-Ḥasan al-Baṣrī: \"We saw a people who feared their good deeds being rejected more than you fear your evil deeds being recorded... if they were told that only one person in the entire world would enter Hell, each one feared it would be him.\" [Ibn Rajab, al-Khushūʿ fī aṣ-Ṣalāh; Ibn Abī al-Dunyā]" },
        { label: 'Why This Is Healthy, Not Morbid', text: 'A person certain their deeds are accepted stops examining them. Holding uncertainty treats every act of worship as something still being offered, not yet confirmed — and that makes a person more careful about its quality, not less devoted' },
        { label: 'At the Approach of Death — Hope Must Take Over', text: 'The Prophet ﷺ said: "None of you should die except while having good expectations (ḥusn aẓ-ẓann) of Allah." [Ṣaḥīḥ Muslim, 2877]' },
        { label: 'The Ḥadīth Qudsī', text: '"I am as My servant thinks of Me (ẓannī). I am with him when he remembers Me." [Bukhārī 7405, Muslim 2675]' },
        { label: "Ibn al-Qayyim on This Calibration", text: '"At the point of death, hope must prevail — because the dying person is about to meet Allah, and it is not befitting to meet Allah while expecting evil from Him... the heart should be washed of fear and filled with hope — as a guest prepares themselves to receive a host whose generosity they are certain of." [al-Jawāb al-Kāfī, p.14]' },
        { label: "The Prophet ﷺ's Own Last Words", text: '"O Allah, in the Highest Companion" — not a plea to be spared punishment, but the words of a man looking forward rather than back at the threshold of death' },
      ],
      qanda: [
        { q: 'Why is it not a contradiction to say fear should dominate during life but hope should dominate at death?', a: 'Because the two states serve entirely different functions. Fear protects someone who still has choices ahead of them — it keeps a living person careful, alert, and unwilling to take their own good deeds for granted. Hope receives someone who no longer has any more choices to make — meeting Allah with dread at that final moment would be, in Ibn al-Qayyim\'s words, an insult to His generosity. The calibration changes because the person\'s situation changes, not because the underlying truths about Allah change.' },
        { q: 'What does al-Ḥasan al-Baṣrī\'s generation\'s fear of their OWN good deeds — not just their sins — reveal about healthy fear?', a: "That mature fear isn't only about avoiding punishment for wrongdoing — it extends to genuine uncertainty about whether one's worship itself was sincere and accepted. This uncertainty is presented as a feature, not a flaw: a person confident their prayers are already accepted has no reason to keep refining them, while a person who isn't certain keeps showing up with more care and more sincerity." },
      ],
      quiz: [
        { q: 'According to the scholars, when should fear be the dominant state of the heart?', choices: ['During the years of life and health', 'Only at the moment of death', 'Never — hope should always dominate', 'Only during the month of Ramadan'], correct: 0 },
        { q: 'What did the Prophet ﷺ instruct regarding one\'s state of mind at the point of death?', choices: ['To have good expectations (ḥusn aẓ-ẓann) of Allah', 'To focus entirely on fear of punishment', 'It does not matter what one thinks at that point', 'To recite only verses of warning'], correct: 0 },
      ]
    },
    {
      id: 'salaf-examples', icon: '🌙', label: 'What Balanced Hearts Actually Looked Like', subtitle: 'Ibrāhīm ibn Adham, Bishr al-Ḥāfī, and al-Ḥasan al-Baṣrī', color: 'var(--gold)',
      intro: 'Theory is one thing; seeing these concepts lived out in people the Salaf themselves revered is another, because reality teaches what explanation alone cannot always reach.',
      bullets: [
        { label: "Ibrāhīm ibn Adham's Answer", text: 'Asked whether he hoped for Paradise and feared the Fire, and which was greater in his heart, he was silent a long while before saying: "I hope in the mercy of a Lord whose mercy I know. I fear the justice of a Lord whose justice I know. And between the two of them, I have no rest except in worship."' },
        { label: "Bishr al-Ḥāfī's Tears at the Mention of Paradise", text: 'Asked why hearing about Paradise made him weep, he said: "Because when I hear about it, I know I have not prepared for it the way it deserves to be prepared for. And a man who has not prepared but expects to arrive is a fool — and weeping at my own foolishness is better than the foolishness itself."' },
        { label: "Al-Ḥasan al-Baṣrī's Description of the Believer's Day", text: '"The believer begins his morning in sorrow and ends it in sorrow. There is no other way for him — because he is between two fears: a past sin he does not know how Allah has treated, and a remaining life he does not know what it will contain. So let him arm himself with hope in the mercy of his Lord — and let him not let go of either."' },
        { label: 'The Sorrow Described Is Not Depression', text: 'It is consciousness — awareness of living between two genuine unknowns (the past and the future), with only faith and effort filling the space, and into that space the believer plants both fear that takes the past seriously and hope that never gives up on the future' },
      ],
      qanda: [
        { q: 'What does Ibrāhīm ibn Adham\'s long silence before answering suggest about the question he was asked?', a: 'That "which is greater, fear or hope" was not a question with a quick, glib answer for someone who actually lived the balance seriously. His eventual answer — grounding hope in Allah\'s known mercy and fear in Allah\'s known justice, with rest only in worship — treats both as equally real and equally deserved, rather than picking a side.' },
        { q: "Why did Bishr al-Ḥāfī weep specifically when hearing about Paradise, something ordinarily associated with comfort and joy?", a: "Because the gap between where he stood and what Paradise actually required of him felt real and immediate to him — hearing about it reminded him how unprepared he still was. He treats his own tears as a sign of self-awareness rather than sadness for its own sake, explicitly saying that weeping at his own shortcoming is better than not noticing the shortcoming at all." },
      ],
      quiz: [
        { q: 'What did Ibrāhīm ibn Adham say gave him rest, between his hope and his fear?', choices: ['Worship', 'Wealth', 'Isolation from people', 'Nothing — he found no rest at all'], correct: 0 },
        { q: 'Why did Bishr al-Ḥāfī weep when he heard about Paradise?', choices: ['Because he knew he had not prepared for it as it deserved', 'Because he did not believe in Paradise', 'Because he was afraid of Hell instead', 'Because the topic bored him'], correct: 0 },
      ]
    },
    {
      id: 'three-diseases', icon: '⚠️', label: 'Three Diseases of the Heart', subtitle: 'Al-Ghurūr, Al-Qunūṭ, and Al-ʿUjb', color: 'var(--burgundy-deep)',
      intro: 'The scholars identified three specific diseases arising from an imbalanced relationship with hope and fear — every one of them still visible in communities today.',
      bullets: [
        { label: 'الغرور (Al-Ghurūr — Delusion Dressed as Hope)', text: "Hope without obedience — citing Allah's mercy to justify not changing. Al-Ghazālī: \"Ghurūr is when the heart settles into a false sense of safety with Allah — not by earning that safety but by convincing itself it has been earned... Their faith is selective, and a selective faith is a constructed faith, not a found one.\" [Iḥyāʾ ʿUlūm ad-Dīn, 4/148]" },
        { label: 'القنوط (Al-Qunūṭ — Despair Dressed as Realism)', text: '"Do not despair of the spirit of Allah. Indeed, no one despairs of the spirit of Allah except the disbelieving people." (Q 12:87) · "Say: O My servants who have transgressed against themselves — do not despair of the mercy of Allah. Indeed, Allah forgives all sins." (Q 39:53)' },
        { label: 'The Word "All" (Jamīʿan) in Q 39:53', text: "Not rhetorical filler — a divine guarantee covering every sin, of every size, for every person who returns, with the sole exception of shirk if died upon unrepentant (Q 4:48)" },
        { label: "Ibn Rajab's Diagnosis of Despair", text: '"The one who despairs of mercy has combined two errors: underestimating the mercy of Allah and overestimating the severity of their own sins. The mercy of Allah is greater than all sins combined." [Jāmiʿ al-ʿUlūm wal-Ḥikam, on ḥadīth 19]' },
        { label: 'العجب (Al-ʿUjb — Self-Satisfaction)', text: "The subtlest disease: quiet conviction that one's deeds are excellent and one's standing confirmed — often the outwardly most devout person, whose deeds have built a wall rather than a bridge to Allah" },
        { label: "'Umar's Balance at the End of His Life", text: '"If I were told at death that every person on earth would enter Paradise except one, I would fear I was that one. And if I were told that every person on earth would enter the Fire except one, I would hope I was that one."' },
      ],
      qanda: [
        { q: 'Why does the study treat al-ghurūr (delusion) and al-qunūṭ (despair) as opposite errors rather than the same mistake?', a: "Al-ghurūr over-weights hope until it excuses inaction — a person cites Allah's mercy to justify staying exactly as they are. Al-qunūṭ over-weights fear until it excuses inaction from the opposite direction — a person concludes their sins are too large for mercy to reach, so trying is pointless. Both end in the same place, no real effort, but they get there by inflating opposite halves of the truth about Allah rather than by making an identical error." },
        { q: 'Why does Ibn Rajab say despair (qunūṭ) actually requires making two separate mistakes at once?', a: "Because it requires simultaneously underestimating how vast Allah's mercy actually is, AND overestimating how large one's own sins are relative to that mercy. Someone who correctly understood the true scale of Allah's mercy — which Q 39:53 describes as covering all sins for anyone who turns back — would find it very difficult to conclude their own specific case was somehow the exception." },
        { q: "What makes al-ʿujb (self-satisfaction) harder to notice than the other two diseases?", a: "Because it doesn't look like negligence (ghurūr) or collapse (qunūṭ) — the person with ʿujb is often outwardly the most visibly devout, praying, fasting, and giving generously. The disease is entirely internal: the deeds have quietly become the object of the person's attention and self-regard, rather than a bridge toward Allah, which is why 'Umar's example specifically shows a man of enormous accomplishment still actively guarding against feeling secure in his own status." },
      ],
      quiz: [
        { q: 'What does al-ghurūr (delusion) look like in practice, according to this section?', choices: ["Citing Allah's mercy to justify not changing one's behavior", 'Excessive weeping over minor sins', 'Refusing to ever mention Allah\'s mercy', 'Complete withdrawal from worship'], correct: 0 },
        { q: 'According to Ibn Rajab, what two errors does a person who despairs of mercy combine?', choices: ["Underestimating Allah's mercy and overestimating their own sins", 'Praying too much and fasting too little', 'Reading too much Qur\'an and too little hadith', 'Loving Allah too much and fearing Him too little'], correct: 0 },
        { q: 'What is distinctive about al-ʿujb (self-satisfaction) compared to the other two diseases?', choices: ['It often afflicts the outwardly most devout, since the deeds themselves become a wall rather than a bridge', 'It only affects people who never pray', 'It is not actually considered a spiritual disease', 'It always looks identical to laziness'], correct: 0 },
      ]
    },
    {
      id: 'divine-names', icon: '✨', label: 'The Divine Names', subtitle: 'Why Verses Close With Paired Names', color: 'var(--gold)',
      intro: "There is something deliberate in how the Qur'an closes so many of its rulings — not with a single divine name, but consistently with a pair, one drawn from mercy and one from majesty or justice.",
      bullets: [
        { label: 'The Recurring Pattern', text: 'الغفور الرحيم (al-Ghafūr al-Raḥīm — the Forgiving, the Merciful) · العزيز الحكيم (al-ʿAzīz al-Ḥakīm — the Mighty, the Wise) · التواب الرحيم (at-Tawwāb ar-Raḥīm — the Ever-Relenting, the Merciful) · العزيز الغفور (al-ʿAzīz al-Ghafūr — the Mighty, the Forgiving)' },
        { label: 'Why the Pairing Matters', text: "If a verse described punishment and closed only with al-Ghafūr, a reader might conclude the punishment isn't real. If a verse described mercy and closed only with al-Qahhār, a reader might conclude the mercy is inaccessible — so the Book consistently gives both." },
        { label: "Ibn al-Qayyim's Observation", text: "The Qur'an never closes a verse of divine warning with a name of mercy alone, and never closes a verse of divine mercy with a name of punishment alone — the pairing is always calibrated to the verse's content, but both realities of Allah remain visible throughout the Book" },
      ],
      qanda: [
        { q: "Why would it be a misreading of the Qur'an to extract only the names ending in mercy, or only the names ending in majesty/punishment?", a: "Because Ibn al-Qayyim's observation is that the Qur'an's own structure resists exactly that kind of selective reading — the closing names are always chosen to match and balance the content of the verse, never isolating one attribute of Allah from the others. A reader who quietly filters out every closing name they find uncomfortable is not reading the Book as it was actually composed; they are constructing a partial god assembled only from the parts that feel comfortable." },
      ],
      quiz: [
        { q: 'According to Ibn al-Qayyim, does the Qur\'an ever close a verse of warning with a name of mercy alone?', choices: ['No — never, not once', 'Yes, always', 'Only in one specific chapter', 'The question is irrelevant to the text'], correct: 0 },
      ]
    },
    {
      id: 'practical-guide', icon: '🧭', label: 'A Practical Guide', subtitle: 'What This Looks Like in a Real Day', color: 'var(--emerald)',
      intro: "Everything covered so far is only useful once it moves from theory to daily practice. The Salaf were practitioners, not theorists — so here is what holding both wings actually looks like across an ordinary day.",
      bullets: [
        { label: 'In the Morning', text: 'Hold hope — the door of deeds is still open. "Allah stretches out His hand during the day for those who sinned at night, and at night for those who sinned during the day, so long as the sun has not yet risen from the west." [Muslim 2759] Every morning is a fresh opening of that hand.' },
        { label: 'When Tempted to Sin', text: 'Hold productive fear, not crushing dread — remember the one you would disappoint sees the deed before it happens. "What I fear most for my Ummah is hidden minor sins" — since a major sin at least leaves a visible mark that can drive a person to repent, while an unexamined minor sin quietly accumulates into a wall.' },
        { label: 'After You Have Sinned', text: 'Return immediately to hope — the door of tawbah opens the moment you recognize the sin, not the next day. Al-Ḥasan al-Baṣrī: "Do not let the remembrance of the sin distract you from the mercy of the One who forgives sins. The mercy is larger than the sin." Return with both real sorrow and real confidence in being received.' },
        { label: 'During Worship', text: "Hold both at once — ask before beginning, \"am I doing this so it is accepted?\" (fear, active); ask while doing it, \"do I expect this will be accepted if sincere?\" (hope, active). The Salaf called this ikhlāṣ with expectation." },
        { label: 'When Death Is Mentioned', text: "Let hope take over, per the Prophetic instruction — meet Allah with good expectations, letting the heart's last thought be: He is merciful, and I am going to Him" },
      ],
      qanda: [
        { q: 'Why does the guide say to return to hope "the moment," not "the day," after recognizing a sin?', a: "Because the door of tawbah is described as opening immediately upon recognition, not after a waiting period of guilt or self-punishment — delaying the return to hope by dwelling excessively in shame risks tipping toward qunūṭ (despair) rather than genuine repentance. The instruction is to feel real sorrow, but to pair it immediately with confidence in being received, rather than treating prolonged self-flagellation as a prerequisite for forgiveness." },
        { q: 'What does "ikhlāṣ with expectation" mean as applied specifically during worship?', a: 'It means holding fear and hope active at the exact same moment rather than sequentially — asking yourself before an act of worship whether you are doing it sincerely enough to be accepted (the fear side, which keeps you careful), while also genuinely expecting Allah to accept it if it is sincere (the hope side, which keeps you from a paralyzing uncertainty). The Salaf treated this simultaneous holding, not picking one or the other, as the harder and more mature spiritual state.' },
      ],
      quiz: [
        { q: 'What should a person do the moment they recognize they have committed a sin, according to this guide?', choices: ['Return immediately to hope, with genuine sorrow paired with confidence in being received', 'Wait several days before feeling any hope again', 'Assume the sin is unforgivable', 'Stop worshipping until they feel fully certain of forgiveness'], correct: 0 },
        { q: 'What does the guide recommend for one\'s state of mind when death or dying is mentioned?', choices: ['Let hope take over, per the Prophetic instruction to meet Allah with good expectations', 'Focus purely on dread of punishment', 'Avoid thinking about it entirely', 'Feel nothing, since emotion is irrelevant'], correct: 0 },
      ]
    },
  ]
});
