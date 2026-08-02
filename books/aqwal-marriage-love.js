/* XENOS NOTES — book module
 * Curated sayings (aqwal) of the scholars on love, marriage, and family —
 * extracted from a Discord post and organized by theme. Only attributed
 * sayings with a named source were kept; personal commentary was dropped. */
XenosBooks.register({
  slug: 'aqwal-marriage-love',
  title: 'Aqwāl on Love, Marriage & Family',
  subtitle: 'Sayings of the Scholars — Choosing a Spouse, Rights, the Heart, and Raising Children',
  icon: '🌷',
  category: 'Aqwāl',
  arabicBg: 'أقوال',
  tags: ['Marriage', 'Aqwāl', 'Family', 'Ibn Taymiyyah', 'Ibn al-Qayyim', "Ibn 'Uthaymīn"],
  footer: 'A curated collection of scholarly sayings (aqwāl) on love, marriage, and family — sourced and organized by theme.',

  sections: [
    {
      id: 'spouse', icon: '🔍', label: 'Choosing a Spouse', subtitle: 'Religion Before Wealth, Beauty, or Lineage', color: 'var(--burgundy)',
      intro: 'The scholars consistently return to one principle when discussing marriage: dīn (religious commitment) is the deciding factor, and beauty, wealth, and lineage are only bonuses on top of it — never a substitute for it.',
      bullets: [
        { label: 'Shaykh al-Albānī — Silsilat al-Hudā wan-Nūr, p.594', text: 'A woman should make sure to marry a religious man with good character and not go for beauty, wealth, or lineage.' },
        { label: "Ibn 'Uthaymīn — Sharḥ Ṣaḥīḥ al-Bukhārī, Kitāb al-Nikāḥ 2", text: 'Marry a religious woman. She will neither abuse your right nor reveal your secret, and she will take care of your property and your child in the best way.' },
        { label: "The Prophet ﷺ — Jāmiʿ at-Tirmidhī: 1084", text: 'If someone proposes marriage to you whose religion and character satisfies you, then you should accept it. If you do not do so, there will be trials on the earth and the spread of corruption.' },
        { label: 'Fuḍayl ibn ʿIyāḍ — Sharḥ as-Sunnah, 9/161', text: 'If a man marries a woman for her religion, Allah will give him what he desires from her. But if he marries her for her beauty or wealth, Allah will leave him to that.' },
        { label: "Al-Ḥasan al-Baṣrī — Bahjat al-Majālis li Ibn 'Abd al-Barr, p.181", text: "When a man proposed to a woman during Jāhiliyyah, they would ask: 'What is his lineage, and what is her lineage?' When Islam came, they began to ask: 'What is his religion, and what is her religion?' But today you say: 'What is his wealth, and what is her wealth?!'" },
        { label: 'Shaykh Ṣāliḥ al-Fawzān', text: "The matter is not merely about a person getting married — it is about who he marries. He must pick a woman who is righteous in her religion; if with her religion she also has good lineage, beauty, and wealth, then this is goodness upon goodness. But focusing solely on wealth, beauty, or lineage while neglecting religion is a loss and a waste of the future." },
        { label: 'Ibn Taymiyyah — Jāmiʿ al-Masāʾil', text: 'If people object to a man marrying a thief, an adulteress, or a woman who drinks wine, then their objection to marrying a woman who does not pray should be far greater — this is by the agreement of the scholars, for a woman who abandons prayer is worse than an adulteress, a thief, or a wine-drinker.' },
        { label: 'Ibn al-Jawzī — Ṣayd al-Khāṭir, p.466', text: 'It is advisable for the wise person to choose a righteous woman, from a righteous household afflicted primarily by poverty — she will greatly appreciate what he provides for her. He should also marry someone close to his own age.' },
        { label: 'Shaykh al-Fawzān — Muḥāḍarāt fī al-ʿAqīdah wa ad-Daʿwah, p.162', text: 'If the woman is lost, the home is lost. If the home is lost, the children are lost. If the homes are lost, society is lost.' },
      ],
    },
    {
      id: 'rights', icon: '🤝', label: 'Rights & Conduct Between Spouses', subtitle: 'Kindness, Patience, and Honouring Her Rights', color: 'var(--emerald)',
      intro: 'Marriage in these sayings is framed as a relationship of mutual rights and gentle conduct — not authority for its own sake. The husband is repeatedly reminded that his wife is a trust (amānah) he will be asked about.',
      bullets: [
        { label: 'Ibn ʿAqīl al-Ḥanbalī — al-Funūn, quoted by Ibn Mufliḥ in Ādāb ash-Sharʿiyyah, 3/239', text: 'When a wise man is alone with his wife, instead of pretending to be a respected elder, he leaves his wisdom in some corner and enjoys playful joking and laughter with her, thereby giving both himself and his wife their due rights. When he is with his children, he becomes a child himself.' },
        { label: "Shaykh Ibn 'Uthaymīn — al-Liqāʾ ash-Shahrī 40", text: 'The wife will be the coolness of the eye for her husband, and the husband will be the coolness of the eye for his wife — only if they do what is required of them from the dīn of Allah.' },
        { label: 'The Prophet ﷺ — Mukhtaṣar Ṣaḥīḥ al-Jāmiʿ aṣ-Ṣaghīr, no.3298, authenticated by al-Albānī', text: 'The best of women is the one who pleases her husband when he looks at her, obeys him when he commands her, and does not oppose him with regards to herself and her wealth in a way which he dislikes.' },
        { label: "Abul-Aswad's advice to his daughter — Muʿjam al-Udabāʾ, vol.4, p.1467", text: 'Honour his eyes — always look good. Honour his nose — always smell good. Honour his ears — always speak good.' },
        { label: 'Ibn al-Qayyim — Zād al-Maʿād, 5/188', text: 'Among the rights of the wife is that the husband\'s heart be inclined toward her, that he be kind and gentle with her, and that he take care of her feelings.' },
        { label: 'Ibn Bāz — Fatāwā Ibn Bāz', text: 'A husband should patiently bear the shortcomings of his wife, fear Allah, treat her with kindness, recognize her rights, and fulfill his duties to her.' },
        { label: "Shaykh Ibn 'Uthaymīn — The Book of Marriage, Sharḥ Bulūgh al-Marām, part 2, p.124", text: 'Do not scold your wife — what you say will have a negative impact on her psychological well-being, even in the long term, and Shayṭān will always whisper your hurtful words in her ears.' },
        { label: 'Ibn Taymiyyah — Majmūʿ al-Fatāwā, 32/275', text: "After fulfilling the right of Allah and His Messenger, there is no right more obligatory upon a woman to fulfill than that of her husband." },
        { label: "Shaykh Ibn 'Uthaymīn — al-Liqāʾ ash-Shahrī, no.80", text: 'Women are not a garment that you wear and take off whenever you wish. They are honoured, and they have rights.' },
        { label: 'Ibn Taymiyyah — Majmūʿ al-Fatāwā, 32/263', text: 'A man should fear Allah in the way he treats his wife, for she is a trust. He must give her rights with kindness and avoid oppression, for Allah will ask him about it.' },
        { label: 'Ibn al-Qayyim — Zād al-Maʿād fī Hadyi Khayr al-ʿIbād, vol.4, p.308', text: "It is from the good companionship of a husband that he knows the state of his wife, attends to her needs, and considers her conditions of weakness, menstruation, pregnancy, and childbirth." },
        { label: 'Ibn Taymiyyah — Majmūʿ al-Fatāwā, 34/129', text: 'A woman needs protection and preservation more than a little boy. The more she is shielded and protected, the better it is for her.' },
        { label: 'Ibn al-Jawzī — al-Mudhish, 661', text: 'Women are the trust of honourable men. None but an honourable man will honour them, and none but a dishonourable man will humiliate them.' },
        { label: "Shaykh Ibn 'Uthaymīn — Fatāwā Nūr ʿalā ad-Darb, 10/13", text: 'A happy marriage is not achieved through authoritarianism and dominance — this is wrong. Rather, the husband must look at his wife as a partner, the mother of his children, and the guardian of his home, treating her with the same respect he desires from her.' },
      ],
    },
    {
      id: 'love', icon: '❤️', label: 'Love, Intimacy & the Heart', subtitle: 'What Real Love Looks Like Between Spouses', color: 'var(--burgundy-light)',
      intro: 'None of these scholars treat love as something to be embarrassed by — marriage is described as the highest form of companionship, on the condition that love for a spouse never eclipses love of Allah.',
      bullets: [
        { label: 'Shaykh al-Albānī — Ṣaḥīḥ al-Jāmiʿ aṣ-Ṣaghīr wa Ziyādatuhu', text: "If hearts were to be given, I would have offered you my heart, but this belongs to Allah alone. Is it not enough for you to know that I love you for the sake of Allah?" },
        { label: 'Ibn Taymiyyah — Majmūʿ al-Fatāwā, 10/133', text: 'If a man is tested with falling in love, yet he maintains his chastity and bears it with patience, he will be rewarded for fearing Allah.' },
        { label: "Ibn al-Qayyim — ad-Dā' wa-d-Dawā'", text: 'There is no love like marriage — being married to your beloved is the cure for desire which Allah has made lawful and destined.' },
        { label: 'Ibn al-Qayyim — Rawḍat al-Muḥibbīn, p.217', text: "Women are the cause of happiness of the heart — that's why they're also called the reason for the happiness of the soul." },
        { label: 'Ibn Kathīr — Ibn Kathīr, 3/528', text: 'There is no greater friendship between two souls than a married couple.' },
        { label: 'Ibn al-Qayyim — Rawḍat al-Muḥibbīn', text: 'The truest love is when your love for someone makes you fear for their Ākhirah more than your own desires.' },
        { label: 'Ibn al-Qayyim — Ighāthat al-Lahfān, 2/140', text: "There is no blame on a man in his love for his wife and his passionate loving for her, except if it distracts him from the love which is more beneficial for him — that is, the love of Allah and His Messenger ﷺ." },
        { label: 'Ibn Taymiyyah — Majmūʿ al-Fatāwā, 38/28', text: "If love isn't for the sake of Allah, then it will inevitably come to an end." },
        { label: 'ʿUmar ibn al-Khaṭṭāb — Tārīkh al-Ṭabarī, 4/409', text: 'I wish you knew what I have in my heart for you, but there is no way for you to know except by my actions.' },
      ],
    },
    {
      id: 'chastity', icon: '🛡️', label: 'Guarding the Heart & Chastity', subtitle: 'Fitnah, Ḥayāʾ, and Protecting the Soul', color: 'var(--grey-accent)',
      intro: 'A recurring warning runs through these sayings: attraction between men and women is one of the greatest tests a person will face, and guarding against it protects both the heart and one\'s religion.',
      bullets: [
        { label: 'The Prophet ﷺ — al-Bukhārī 5096; Muslim 2740', text: 'I have not left behind me any fitnah more harmful to men than women.' },
        { label: 'Ibn Taymiyyah — Majmūʿ al-Fatāwā, 10/132', text: 'Obsessive love for someone impermissible contains corruption that only the Lord of servants fully knows and enumerates. It is one of the diseases that corrupt a person\'s religion, and then it may corrupt the mind and eventually the body.' },
        { label: 'Imam Aḥmad ibn Ḥanbal — Ibn Qudāmah, al-Mughnī, vol.7, p.378', text: 'Whoever protects his soul from what is forbidden and waits for what is lawful, Allah prepares for him the best provision and the best companion.' },
        { label: 'The Prophet ﷺ — Ṣaḥīḥ al-Jāmiʿ, 5045', text: 'For one of you to be stabbed in the head with an iron needle is better for him than to touch a woman who is not permissible for him.' },
        { label: 'Ibn al-Qayyim — Rawḍat al-Muḥibbīn', text: 'Zinā brings darkness to the face, tightness in the chest, curses on the tongue, restlessness in the soul, and brokenness in provision. It is the enemy of light, clarity, and honour.' },
        { label: 'Ibn al-Qayyim — Rawḍat al-Muḥibbīn wa Nuzhat al-Mushtāqīn, p.457', text: 'Likewise the fornicator: if he were to give up unlawful intimacy for the sake of Allah, Allah would reward him with lawful intimacy, or with something better than it, in a lawful manner.' },
      ],
    },
    {
      id: 'urgency', icon: '⏳', label: 'Marriage as Protection, and Its Urgency', subtitle: 'Why the Scholars Urge Against Delay', color: 'var(--gold)',
      intro: 'Several scholars speak directly to young people weighing marriage against study, career, or simply waiting — the consistent advice is not to delay it for reasons that don\'t actually require delay.',
      bullets: [
        { label: 'Ibn Taymiyyah — Majmūʿ al-Fatāwā, 32/109', text: 'When a man has the means and fears falling into sin, marriage becomes obligatory upon him. And if by marrying he can protect a woman who needs protection, then it is among the best of deeds.' },
        { label: 'Shaykh Aḥmad ibn Yaḥyā an-Najmī — Taʾsīs al-Aḥkām, 4/172', text: 'The man\'s condition is not perfected, and he does not enjoy life fully, except by marrying a righteous wife. And a woman is not tranquil, and she does not enjoy life fully, except by marrying a righteous husband.' },
        { label: "Shaykh Ibn 'Uthaymīn — Fatāwā Nūr ʿalā ad-Darb", text: 'I advise the youth to hasten to get married, especially in these times when the causes of corruption and temptation are many.' },
        { label: 'Shaykh Ibn Bāz — Majmūʿ al-Fatāwā', text: 'No young man or young woman should delay marriage for the sake of studies, because marriage does not prevent any such thing.' },
        { label: 'Shaykh Ibn Bāz — Majmūʿ al-Fatāwā wa Maqālāt Mutanawwiʿah, 4/20-408', text: 'Remaining unmarried is extremely dangerous. It is not appropriate at all for a young man to delay marriage if he has the means, nor is it right for a young woman to delay marriage when a suitable proposal comes her way.' },
        { label: 'Shaykh al-Fawzān — al-Ittiḥāf, p.857', text: 'A man who comes to an empty home and doesn\'t have a wife lives a difficult life, even if the home is full of money and enjoyments.' },
      ],
    },
    {
      id: 'patience', icon: '🌊', label: 'Patience & Contentment', subtitle: 'Living Realistically With a Spouse\'s Nature', color: 'var(--burgundy-deep)',
      intro: 'Marriage is not romanticized as effortless. These sayings speak to bearing with a spouse\'s changing moods and imperfections, and to Paradise as the ultimate reward for those who never married in this life.',
      bullets: [
        { label: 'Shaykh ʿUthaymīn — Majmūʿ al-Fatāwā wa Rasāʾil', text: 'If a woman does not marry in this life, Allah will marry her off in Paradise to the one whom she finds delight in. Bliss in Paradise is equally for both men and women, and it certainly includes marriage.' },
        { label: 'Ibn al-Jawzī — Ṣayd al-Khāṭir', text: 'A woman is a delicate vessel; her moods and states change with time. Whoever is patient with her has true intellect.' },
        { label: "Imam Shurayḥ, on his wife Zainab — Siyar Aʿlām an-Nubalāʾ, 5/52", text: 'I have seen men beating their women. May my right hand be paralyzed if I beat Zainab. Zainab is like a sun, and other women are like stars — when the sun rises, other stars do not shine.' },
        { label: 'ʿUmar ibn al-Khaṭṭāb — al-Adab al-Mufrad li-l-Imām al-Bukhārī, no.1322', text: 'When you love, do not love with blind attachment like a child. And when you hate, do not hate to the point of wishing for another\'s destruction.' },
      ],
    },
    {
      id: 'wealth', icon: '🌾', label: 'Trusting Allah With Provision', subtitle: 'Not Fearing Poverty When It Comes to Marriage', color: 'var(--emerald-light)',
      intro: 'Fear of poverty is named directly as a reason people delay or avoid marriage — and answered directly, both from the Qur\'an and from the example of the earliest generations.',
      bullets: [
        { label: "Qur'an — An-Nūr (24:32)", text: 'And marry those among you who are single... If they be poor, Allah will enrich them out of His Bounty. And Allah is All-Sufficient for His creatures\' needs, All-Knowing.' },
        { label: 'Al-Qurṭubī — Tafsīr al-Qurṭubī, 12/218', text: 'Do not refrain from getting married because the man or the woman is poor. If they are poor, Allah will make them independent of means by His bounty. This is a promise of independence to those who get married seeking the pleasure of Allah and seeking to protect themselves from sin.' },
        { label: 'Ibn Qudāmah — Mukhtaṣar Minhāj al-Qāṣidīn, p.85', text: 'There were women among the salaf — when a man would leave his home, his wife would say to him: "Beware of ḥarām earnings, for we can be patient upon hunger, but we cannot be patient upon the Hellfire."' },
      ],
    },
    {
      id: 'children', icon: '👨‍👩‍👧', label: 'Parents & Children', subtitle: 'Raising the Next Generation, Honouring Your Own Parents', color: 'var(--gold)',
      intro: 'The smallest but no less important thread in this collection: raising children upon obedience to Allah, and the enormous weight a parent\'s du\'a carries — for or against their own child.',
      bullets: [
        { label: 'Shaykh Ṣāliḥ al-Fawzān — at-Taʿlīq ʿalā Risālah: Wujūb al-Amr bil-Maʿrūf, p.62', text: 'Amongst the women there are believers and callers to Islam — those who command the good and forbid the evil. This is not specific to men. Let the women be aware of this: each should start in her own home, with her daughters and her sons, cultivating them upon obedience to Allah.' },
        { label: 'Shaykh Aḥmad an-Najmī — Fatḥ ar-Rabb al-Wadūd, 2/372', text: 'Be good to your mother and be patient with her. Do not let her see from you any sign of annoyance. Be certain that Allah will surely compensate you for the expenses you spend on her and the service you give her.' },
        { label: 'Shaykh Muqbil — ar-Riḥlah al-Akhīrah, p.240', text: 'It is possible that a supplication from the parents may destroy a man and ruin his Dunyā and also his Ākhirah, due to a duʿāʾ made against him by his mother or his father.' },
        { label: 'The Prophet ﷺ — Sunan Abī Dāwūd, 1308, authenticated by al-Albānī', text: 'May Allah have mercy on a man who gets up at night and prays, and wakes up his wife — and if she refuses, he sprinkles water in her face. And may Allah have mercy on a woman who gets up at night and prays, and wakes up her husband — and if he refuses, she sprinkles water in his face.' },
      ],
    },
  ]
});
