/* The 28 letters of the Arabic alphabet (ḥurūf al-hijāʾ), in the standard
 * dictionary order (right-to-left reading order: alif first). Each entry
 * gives the isolated form, the letter's name, a simple transliteration,
 * one common "letter word" association (the same convention used in
 * virtually every beginner Arabic alphabet chart), and — the actual point
 * of the "2 Letters" / "3 Letters" decks — a curated set of REAL words
 * that genuinely start with that letter, so the words shown on a letter's
 * own page are always related to that specific letter, not a generic
 * unrelated list. Harakāt (vowel-mark) forms are generated
 * programmatically in app.js from the base letter — see huroofSingleForms().
 *
 * Target is six words per deck per letter. Most letters reach that; a
 * handful (وWāw especially, plus ظ/ذ/ز/ط/غ/ي for the 2-letter deck) fall
 * short on purpose — true two-consonant Arabic words are a genuinely
 * small, closed set (mostly weak-verb imperatives, geminate nouns, and
 * short particles), and every word here is real, comprehensible
 * vocabulary rather than something stretched or invented to hit a count.
 *
 * Note: Alif is given as أ (hamza above alif) rather than bare ا — a bare
 * alif cannot itself carry a consonant sound or take short vowels; the
 * hamza is what makes it a true "letter" a word can start with (exactly
 * as in the very word used for its own letter-association, أَسَد). */
window.XENOS_HUROOF = [
  { ar: 'أ', name: 'Alif', tr: 'A', word: 'أَسَد', wordTr: 'Asad', wordEn: 'Lion',
    pairs: [{ ar: 'أَب', tr: 'ab', en: 'father' }, { ar: 'أُمّ', tr: 'umm', en: 'mother' }, { ar: 'أَخ', tr: 'akh', en: 'brother' }, { ar: 'أَيّ', tr: 'ayy', en: 'which / what' }, { ar: 'أَوْ', tr: 'aw', en: 'or' }, { ar: 'أَنْ', tr: 'an', en: 'that (particle)' }],
    triples: [{ ar: 'أَمَل', tr: 'amal', en: 'hope' }, { ar: 'أَرْض', tr: 'arḍ', en: 'earth / land' }, { ar: 'أَنَا', tr: 'anā', en: 'I' }, { ar: 'أَخِي', tr: 'akhī', en: 'my brother' }, { ar: 'أُخْت', tr: 'ukht', en: 'sister' }, { ar: 'أَجْر', tr: 'ajr', en: 'reward' }] },
  { ar: 'ب', name: 'Bāʾ', tr: 'B', word: 'بَطَّة', wordTr: 'Baṭṭah', wordEn: 'Duck',
    pairs: [{ ar: 'بِكَ', tr: 'bika', en: 'with you' }, { ar: 'بِي', tr: 'bī', en: 'in me / with me' }, { ar: 'بَلْ', tr: 'bal', en: 'rather' }, { ar: 'بِهِ', tr: 'bihi', en: 'with him / it' }, { ar: 'بِعْ', tr: 'biʿ', en: 'sell! (command)' }, { ar: 'بِمَ', tr: 'bima', en: 'with what' }],
    triples: [{ ar: 'بَيْت', tr: 'bayt', en: 'house' }, { ar: 'بَحْر', tr: 'baḥr', en: 'sea' }, { ar: 'بَيْن', tr: 'bayn', en: 'between' }, { ar: 'بَعْد', tr: 'baʿd', en: 'after' }, { ar: 'بَرْد', tr: 'bard', en: 'cold' }, { ar: 'بِنْت', tr: 'bint', en: 'girl / daughter' }] },
  { ar: 'ت', name: 'Tāʾ', tr: 'T', word: 'تُفَّاح', wordTr: 'Tuffāḥ', wordEn: 'Apple',
    pairs: [{ ar: 'تَمّ', tr: 'tamma', en: 'it is done' }, { ar: 'تُبْ', tr: 'tub', en: 'repent! (command)' }, { ar: 'تَبّ', tr: 'tabb', en: 'perish! (Qurʾānic)' }, { ar: 'تَلّ', tr: 'tall', en: 'hill / mound' }],
    triples: [{ ar: 'تَمْر', tr: 'tamr', en: 'dates' }, { ar: 'تَاج', tr: 'tāj', en: 'crown' }, { ar: 'تِسْع', tr: 'tisʿ', en: 'nine' }, { ar: 'تَعَب', tr: 'taʿab', en: 'fatigue' }, { ar: 'تَرْك', tr: 'tark', en: 'leaving / abandoning' }, { ar: 'تَحْت', tr: 'taḥt', en: 'under' }] },
  { ar: 'ث', name: 'Thāʾ', tr: 'Th', word: 'ثَعْلَب', wordTr: 'Thaʿlab', wordEn: 'Fox',
    pairs: [{ ar: 'ثِقْ', tr: 'thiq', en: 'trust! (command)' }, { ar: 'ثَمّ', tr: 'thamma', en: 'there (that place)' }, { ar: 'ثُمَّ', tr: 'thumma', en: 'then / thereafter' }],
    triples: [{ ar: 'ثَوْب', tr: 'thawb', en: 'garment' }, { ar: 'ثَمَن', tr: 'thaman', en: 'price' }, { ar: 'ثَقْب', tr: 'thaqb', en: 'hole' }, { ar: 'ثَلْج', tr: 'thalj', en: 'snow / ice' }, { ar: 'ثِقَة', tr: 'thiqah', en: 'trust / confidence' }, { ar: 'ثَمَر', tr: 'thamar', en: 'fruit' }] },
  { ar: 'ج', name: 'Jīm', tr: 'J', word: 'جَمَل', wordTr: 'Jamal', wordEn: 'Camel',
    pairs: [{ ar: 'جِئْ', tr: 'jiʾ', en: 'come! (command)' }, { ar: 'جِدّ', tr: 'jidd', en: 'seriousness / effort' }, { ar: 'جَرّ', tr: 'jarr', en: 'pulling / dragging' }, { ar: 'جَفّ', tr: 'jaff', en: 'dry up!' }, { ar: 'جَوّ', tr: 'jaww', en: 'atmosphere / weather' }, { ar: 'جَدّ', tr: 'jadd', en: 'grandfather' }],
    triples: [{ ar: 'جَبَل', tr: 'jabal', en: 'mountain' }, { ar: 'جَمْع', tr: 'jamʿ', en: 'gathering / plural' }, { ar: 'جِلْد', tr: 'jild', en: 'skin' }, { ar: 'جُوع', tr: 'jūʿ', en: 'hunger' }, { ar: 'جَيْش', tr: 'jaysh', en: 'army' }, { ar: 'جَنَّة', tr: 'jannah', en: 'Paradise / garden' }] },
  { ar: 'ح', name: 'Ḥāʾ', tr: 'Ḥ', word: 'حِصَان', wordTr: 'Ḥiṣān', wordEn: 'Horse',
    pairs: [{ ar: 'حَجّ', tr: 'ḥajj', en: 'pilgrimage' }, { ar: 'حَقّ', tr: 'ḥaqq', en: 'truth / right' }, { ar: 'حَدّ', tr: 'ḥadd', en: 'limit / boundary' }, { ar: 'حَظّ', tr: 'ḥaẓẓ', en: 'luck / fortune' }, { ar: 'حَبّ', tr: 'ḥabb', en: 'love / seed' }, { ar: 'حِسّ', tr: 'ḥiss', en: 'sense / feeling' }],
    triples: [{ ar: 'حُلْم', tr: 'ḥulm', en: 'dream' }, { ar: 'حَرْف', tr: 'ḥarf', en: 'letter' }, { ar: 'حَجَر', tr: 'ḥajar', en: 'stone' }, { ar: 'حَرْب', tr: 'ḥarb', en: 'war' }, { ar: 'حَقْل', tr: 'ḥaql', en: 'field' }, { ar: 'حِزْب', tr: 'ḥizb', en: 'party / group' }] },
  { ar: 'خ', name: 'Khāʾ', tr: 'Kh', word: 'خَرُوف', wordTr: 'Kharūf', wordEn: 'Sheep',
    pairs: [{ ar: 'خَفْ', tr: 'khaf', en: 'fear! (command)' }, { ar: 'خُذْ', tr: 'khudh', en: 'take! (command)' }, { ar: 'خَطّ', tr: 'khaṭṭ', en: 'line' }, { ar: 'خُفّ', tr: 'khuff', en: 'leather sock / shoe' }, { ar: 'خَلّ', tr: 'khall', en: 'vinegar' }, { ar: 'خَصّ', tr: 'khaṣṣa', en: 'pertain to / specify' }],
    triples: [{ ar: 'خُبْز', tr: 'khubz', en: 'bread' }, { ar: 'خَيْر', tr: 'khayr', en: 'good / goodness' }, { ar: 'خَبَر', tr: 'khabar', en: 'news' }, { ar: 'خَتْم', tr: 'khatm', en: 'seal / completion' }, { ar: 'خَوْف', tr: 'khawf', en: 'fear' }, { ar: 'خَشَب', tr: 'khashab', en: 'wood' }] },
  { ar: 'د', name: 'Dāl', tr: 'D', word: 'دُبّ', wordTr: 'Dubb', wordEn: 'Bear',
    pairs: [{ ar: 'دَمْ', tr: 'dam', en: 'blood' }, { ar: 'دَعْ', tr: 'daʿ', en: 'leave it! (command)' }, { ar: 'دُرّ', tr: 'durr', en: 'pearls' }, { ar: 'دَقّ', tr: 'daqq', en: 'knock! (command)' }, { ar: 'دَلّ', tr: 'dall', en: 'indicate / point to' }],
    triples: [{ ar: 'دَرْس', tr: 'dars', en: 'lesson' }, { ar: 'دِين', tr: 'dīn', en: 'religion' }, { ar: 'دِيك', tr: 'dīk', en: 'rooster' }, { ar: 'دَرْب', tr: 'darb', en: 'path / way' }, { ar: 'دَمْع', tr: 'damʿ', en: 'tear(s)' }, { ar: 'دَوْر', tr: 'dawr', en: 'role / turn' }] },
  { ar: 'ذ', name: 'Dhāl', tr: 'Dh', word: 'ذِئْب', wordTr: 'Dhiʾb', wordEn: 'Wolf',
    pairs: [{ ar: 'ذُقْ', tr: 'dhuq', en: 'taste! (command)' }, { ar: 'ذُو', tr: 'dhū', en: 'possessor / owner of' }, { ar: 'ذَبّ', tr: 'dhabb', en: 'defend / repel' }, { ar: 'ذُلّ', tr: 'dhull', en: 'humiliation' }],
    triples: [{ ar: 'ذَهَب', tr: 'dhahab', en: 'gold' }, { ar: 'ذِكْر', tr: 'dhikr', en: 'remembrance' }, { ar: 'ذَنْب', tr: 'dhanb', en: 'sin' }, { ar: 'ذَيْل', tr: 'dhayl', en: 'tail' }, { ar: 'ذُرَة', tr: 'dhurah', en: 'corn / maize' }, { ar: 'ذَوْق', tr: 'dhawq', en: 'taste (sense)' }] },
  { ar: 'ر', name: 'Rāʾ', tr: 'R', word: 'رُمَّان', wordTr: 'Rummān', wordEn: 'Pomegranate',
    pairs: [{ ar: 'رَبّ', tr: 'rabb', en: 'lord' }, { ar: 'رَدّ', tr: 'radd', en: 'reply / response' }, { ar: 'رَشّ', tr: 'rashsh', en: 'sprinkle' }, { ar: 'رَنّ', tr: 'ranna', en: 'ring / resonate' }],
    triples: [{ ar: 'رَأْس', tr: 'raʾs', en: 'head' }, { ar: 'رِزْق', tr: 'rizq', en: 'provision' }, { ar: 'رَجُل', tr: 'rajul', en: 'man' }, { ar: 'رِيح', tr: 'rīḥ', en: 'wind' }, { ar: 'رَمْل', tr: 'raml', en: 'sand' }, { ar: 'رِبْح', tr: 'ribḥ', en: 'profit' }] },
  { ar: 'ز', name: 'Zāy', tr: 'Z', word: 'زَرَافَة', wordTr: 'Zarāfah', wordEn: 'Giraffe',
    pairs: [{ ar: 'زُرْ', tr: 'zur', en: 'visit! (command)' }, { ar: 'زِدْ', tr: 'zid', en: 'increase! (command)' }, { ar: 'زَلّ', tr: 'zalla', en: 'slip / err' }],
    triples: [{ ar: 'زَوْج', tr: 'zawj', en: 'spouse / pair' }, { ar: 'زَهْر', tr: 'zahr', en: 'flowers / blossoms' }, { ar: 'زَيْت', tr: 'zayt', en: 'oil' }, { ar: 'زَمَن', tr: 'zaman', en: 'time / era' }, { ar: 'زَرْع', tr: 'zarʿ', en: 'crops / planting' }, { ar: 'زُهْد', tr: 'zuhd', en: 'asceticism' }] },
  { ar: 'س', name: 'Sīn', tr: 'S', word: 'سَمَكَة', wordTr: 'Samakah', wordEn: 'Fish',
    pairs: [{ ar: 'سِرّ', tr: 'sirr', en: 'secret' }, { ar: 'سُقْ', tr: 'suq', en: 'drive! (command)' }, { ar: 'سَدّ', tr: 'sadd', en: 'dam / barrier' }, { ar: 'سَنّ', tr: 'sanna', en: 'legislate / sharpen' }, { ar: 'سَمّ', tr: 'samm', en: 'poison' }, { ar: 'سَبّ', tr: 'sabb', en: 'insult (a wrong to avoid)' }],
    triples: [{ ar: 'سَمَك', tr: 'samak', en: 'fish' }, { ar: 'سَهْل', tr: 'sahl', en: 'easy' }, { ar: 'سُوق', tr: 'sūq', en: 'market' }, { ar: 'سَفَر', tr: 'safar', en: 'travel / journey' }, { ar: 'سَطْح', tr: 'saṭḥ', en: 'surface / roof' }, { ar: 'سَمْع', tr: 'samʿ', en: 'hearing' }] },
  { ar: 'ش', name: 'Shīn', tr: 'Sh', word: 'شَمْس', wordTr: 'Shams', wordEn: 'Sun',
    pairs: [{ ar: 'شَكّ', tr: 'shakk', en: 'doubt' }, { ar: 'شَمّ', tr: 'shamm', en: 'smell! (command)' }, { ar: 'شَدّ', tr: 'shadd', en: 'pulling / tightening' }, { ar: 'شَرّ', tr: 'sharr', en: 'evil' }, { ar: 'شَقّ', tr: 'shaqq', en: 'split / crack' }, { ar: 'شَطّ', tr: 'shaṭṭ', en: 'riverbank / shore' }],
    triples: [{ ar: 'شَمْس', tr: 'shams', en: 'sun' }, { ar: 'شَهْر', tr: 'shahr', en: 'month' }, { ar: 'شَجَر', tr: 'shajar', en: 'trees' }, { ar: 'شَعْر', tr: 'shaʿr', en: 'hair / poetry' }, { ar: 'شُكْر', tr: 'shukr', en: 'gratitude' }, { ar: 'شَرْق', tr: 'sharq', en: 'east' }] },
  { ar: 'ص', name: 'Ṣād', tr: 'Ṣ', word: 'صَقْر', wordTr: 'Ṣaqr', wordEn: 'Falcon',
    pairs: [{ ar: 'صُمْ', tr: 'ṣum', en: 'fast! (command)' }, { ar: 'صَفّ', tr: 'ṣaff', en: 'row / line' }, { ar: 'صَدّ', tr: 'ṣadd', en: 'block / repel' }, { ar: 'صَحّ', tr: 'ṣaḥḥ', en: 'be correct / authentic' }, { ar: 'صَبّ', tr: 'ṣabb', en: 'pour' }],
    triples: [{ ar: 'صَقْر', tr: 'ṣaqr', en: 'falcon' }, { ar: 'صَبْر', tr: 'ṣabr', en: 'patience' }, { ar: 'صَوْت', tr: 'ṣawt', en: 'voice / sound' }, { ar: 'صَدْر', tr: 'ṣadr', en: 'chest' }, { ar: 'صَيْف', tr: 'ṣayf', en: 'summer' }, { ar: 'صِدْق', tr: 'ṣidq', en: 'truthfulness' }] },
  { ar: 'ض', name: 'Ḍād', tr: 'Ḍ', word: 'ضِفْدَع', wordTr: 'Ḍifdaʿ', wordEn: 'Frog',
    pairs: [{ ar: 'ضِدّ', tr: 'ḍidd', en: 'opposite' }, { ar: 'ضَعْ', tr: 'ḍaʿ', en: 'put it! (command)' }, { ar: 'ضَمّ', tr: 'ḍamm', en: 'combine / embrace' }, { ar: 'ضَرّ', tr: 'ḍarr', en: 'harm' }, { ar: 'ضَلّ', tr: 'ḍalla', en: 'go astray' }],
    triples: [{ ar: 'ضَوْء', tr: 'ḍawʾ', en: 'light' }, { ar: 'ضَيْف', tr: 'ḍayf', en: 'guest' }, { ar: 'ضَعْف', tr: 'ḍaʿf', en: 'weakness' }, { ar: 'ضَرْب', tr: 'ḍarb', en: 'hitting / multiplying' }, { ar: 'ضِمْن', tr: 'ḍimn', en: 'within / among' }, { ar: 'ضَرَر', tr: 'ḍarar', en: 'harm / damage' }] },
  { ar: 'ط', name: 'Ṭāʾ', tr: 'Ṭ', word: 'طَائِر', wordTr: 'Ṭāʾir', wordEn: 'Bird',
    pairs: [{ ar: 'طِرْ', tr: 'ṭir', en: 'fly! (command)' }, { ar: 'طِبّ', tr: 'ṭibb', en: 'medicine' }, { ar: 'طَلّ', tr: 'ṭall', en: 'light rain / dew' }],
    triples: [{ ar: 'طِفْل', tr: 'ṭifl', en: 'child' }, { ar: 'طَعْم', tr: 'ṭaʿm', en: 'taste / flavor' }, { ar: 'طَبْع', tr: 'ṭabʿ', en: 'nature / character' }, { ar: 'طُول', tr: 'ṭūl', en: 'length' }, { ar: 'طَيْر', tr: 'ṭayr', en: 'bird(s)' }, { ar: 'طَبْل', tr: 'ṭabl', en: 'drum' }] },
  { ar: 'ظ', name: 'Ẓāʾ', tr: 'Ẓ', word: 'ظَبْي', wordTr: 'Ẓaby', wordEn: 'Gazelle',
    pairs: [{ ar: 'ظَنّ', tr: 'ẓann', en: 'assumption / thought' }, { ar: 'ظِلّ', tr: 'ẓill', en: 'shade / shadow' }, { ar: 'ظَلّ', tr: 'ẓalla', en: 'remain / keep on' }],
    triples: [{ ar: 'ظَبْي', tr: 'ẓaby', en: 'gazelle' }, { ar: 'ظُهْر', tr: 'ẓuhr', en: 'noon (Ẓuhr prayer)' }, { ar: 'ظُفْر', tr: 'ẓufr', en: 'fingernail' }, { ar: 'ظَرْف', tr: 'ẓarf', en: 'envelope / circumstance' }, { ar: 'ظُلْم', tr: 'ẓulm', en: 'injustice' }, { ar: 'ظَفَر', tr: 'ẓafar', en: 'triumph / victory' }] },
  { ar: 'ع', name: 'ʿAyn', tr: 'ʿ', word: 'عَيْن', wordTr: 'ʿAyn', wordEn: 'Eye',
    pairs: [{ ar: 'عَنْ', tr: 'ʿan', en: 'about' }, { ar: 'عَمّ', tr: 'ʿamm', en: 'paternal uncle' }, { ar: 'عَدّ', tr: 'ʿadd', en: 'count' }, { ar: 'عَزّ', tr: 'ʿazz', en: 'be mighty / dear' }, { ar: 'عَشّ', tr: 'ʿushsh', en: 'nest' }, { ar: 'عَقّ', tr: 'ʿaqq', en: 'disobey [parents] (a wrong to avoid)' }],
    triples: [{ ar: 'عَسَل', tr: 'ʿasal', en: 'honey' }, { ar: 'عِلْم', tr: 'ʿilm', en: 'knowledge' }, { ar: 'عَمَل', tr: 'ʿamal', en: 'work / deed' }, { ar: 'عَيْن', tr: 'ʿayn', en: 'eye / spring' }, { ar: 'عَدْل', tr: 'ʿadl', en: 'justice' }, { ar: 'عَقْل', tr: 'ʿaql', en: 'mind / reason' }] },
  { ar: 'غ', name: 'Ghayn', tr: 'Gh', word: 'غَزَال', wordTr: 'Ghazāl', wordEn: 'Deer',
    pairs: [{ ar: 'غُضَّ', tr: 'ghudda', en: 'lower [your gaze]! (command)' }, { ar: 'غَطّ', tr: 'ghaṭṭ', en: 'cover / dip' }, { ar: 'غَمّ', tr: 'ghamm', en: 'grief / distress' }],
    triples: [{ ar: 'غَيْم', tr: 'ghaym', en: 'cloud' }, { ar: 'غَضَب', tr: 'ghaḍab', en: 'anger' }, { ar: 'غَنِيّ', tr: 'ghaniyy', en: 'rich / wealthy' }, { ar: 'غَرْب', tr: 'gharb', en: 'west' }, { ar: 'غَيْر', tr: 'ghayr', en: 'other than' }, { ar: 'غُصْن', tr: 'ghuṣn', en: 'branch (of a tree)' }] },
  { ar: 'ف', name: 'Fāʾ', tr: 'F', word: 'فِيل', wordTr: 'Fīl', wordEn: 'Elephant',
    pairs: [{ ar: 'فِي', tr: 'fī', en: 'in' }, { ar: 'فَمْ', tr: 'fam', en: 'mouth' }, { ar: 'فَكّ', tr: 'fakk', en: 'undo / release' }, { ar: 'فَنّ', tr: 'fann', en: 'art' }, { ar: 'فَرّ', tr: 'farra', en: 'flee' }, { ar: 'فَظّ', tr: 'faẓẓ', en: 'harsh (Qurʾānic)' }],
    triples: [{ ar: 'فَجْر', tr: 'fajr', en: 'dawn' }, { ar: 'فِعْل', tr: 'fiʿl', en: 'action / verb' }, { ar: 'فَصْل', tr: 'faṣl', en: 'chapter / season' }, { ar: 'فَرْق', tr: 'farq', en: 'difference' }, { ar: 'فَقْر', tr: 'faqr', en: 'poverty' }, { ar: 'فَضْل', tr: 'faḍl', en: 'favor / virtue' }] },
  { ar: 'ق', name: 'Qāf', tr: 'Q', word: 'قَمَر', wordTr: 'Qamar', wordEn: 'Moon',
    pairs: [{ ar: 'قُمْ', tr: 'qum', en: 'stand up! (command)' }, { ar: 'قُلْ', tr: 'qul', en: 'say! (command)' }, { ar: 'قَصّ', tr: 'qaṣṣ', en: 'narrate / tell a story' }, { ar: 'قَلّ', tr: 'qalla', en: 'become few' }, { ar: 'قَرّ', tr: 'qarra', en: 'settle / be still' }, { ar: 'قِفْ', tr: 'qif', en: 'stop! (command)' }],
    triples: [{ ar: 'قَمَر', tr: 'qamar', en: 'moon' }, { ar: 'قَلْب', tr: 'qalb', en: 'heart' }, { ar: 'قَلَم', tr: 'qalam', en: 'pen' }, { ar: 'قَوْم', tr: 'qawm', en: 'people / nation' }, { ar: 'قُرْب', tr: 'qurb', en: 'closeness' }, { ar: 'قَدَر', tr: 'qadar', en: 'divine decree' }] },
  { ar: 'ك', name: 'Kāf', tr: 'K', word: 'كَلْب', wordTr: 'Kalb', wordEn: 'Dog',
    pairs: [{ ar: 'كُلْ', tr: 'kul', en: 'eat! (command)' }, { ar: 'كَمْ', tr: 'kam', en: 'how many' }, { ar: 'كَفّ', tr: 'kaff', en: 'palm of the hand' }, { ar: 'كَيْ', tr: 'kay', en: 'in order to' }],
    triples: [{ ar: 'كَلْب', tr: 'kalb', en: 'dog' }, { ar: 'كَرَم', tr: 'karam', en: 'generosity' }, { ar: 'كَذِب', tr: 'kadhib', en: 'lying' }, { ar: 'كَسْب', tr: 'kasb', en: 'earning' }, { ar: 'كَمَا', tr: 'kamā', en: 'just as' }, { ar: 'كَوْن', tr: 'kawn', en: 'being / universe' }] },
  { ar: 'ل', name: 'Lām', tr: 'L', word: 'لَيْمُون', wordTr: 'Laymūn', wordEn: 'Lemon',
    pairs: [{ ar: 'لَا', tr: 'lā', en: 'no / not' }, { ar: 'لِي', tr: 'lī', en: 'for me / mine' }, { ar: 'لَكَ', tr: 'laka', en: 'for you' }, { ar: 'لَهُ', tr: 'lahu', en: 'for him' }, { ar: 'لَمْ', tr: 'lam', en: 'did not' }, { ar: 'لَنْ', tr: 'lan', en: 'will not' }],
    triples: [{ ar: 'لَحْم', tr: 'laḥm', en: 'meat' }, { ar: 'لَيْل', tr: 'layl', en: 'night' }, { ar: 'لَوْن', tr: 'lawn', en: 'color' }, { ar: 'لُغَة', tr: 'lughah', en: 'language' }, { ar: 'لُطْف', tr: 'luṭf', en: 'kindness' }, { ar: 'لَذَّة', tr: 'ladhdhah', en: 'pleasure' }] },
  { ar: 'م', name: 'Mīm', tr: 'M', word: 'مَوْز', wordTr: 'Mawz', wordEn: 'Banana',
    pairs: [{ ar: 'مَا', tr: 'mā', en: 'what' }, { ar: 'مَعْ', tr: 'maʿ', en: 'with' }, { ar: 'مَنْ', tr: 'man', en: 'who' }, { ar: 'مَدّ', tr: 'madd', en: 'extend / elongate' }, { ar: 'مَسّ', tr: 'mass', en: 'touch' }, { ar: 'مَرّ', tr: 'marra', en: 'pass by / once' }],
    triples: [{ ar: 'مَاء', tr: 'māʾ', en: 'water' }, { ar: 'مَلِك', tr: 'malik', en: 'king' }, { ar: 'مَطَر', tr: 'maṭar', en: 'rain' }, { ar: 'مَوْت', tr: 'mawt', en: 'death' }, { ar: 'مَيْل', tr: 'mayl', en: 'inclination' }, { ar: 'مَرَض', tr: 'maraḍ', en: 'sickness' }] },
  { ar: 'ن', name: 'Nūn', tr: 'N', word: 'نَجْمَة', wordTr: 'Najmah', wordEn: 'Star',
    pairs: [{ ar: 'نَمْ', tr: 'nam', en: 'sleep! (command)' }, { ar: 'نَصّ', tr: 'naṣṣ', en: 'text' }, { ar: 'نَلْ', tr: 'nal', en: 'attain! (command)' }, { ar: 'نَمّ', tr: 'namma', en: 'gossip (a wrong to avoid)' }],
    triples: [{ ar: 'نَهَر', tr: 'nahar', en: 'river' }, { ar: 'نَجْم', tr: 'najm', en: 'star' }, { ar: 'نُور', tr: 'nūr', en: 'light' }, { ar: 'نَعَمْ', tr: 'naʿam', en: 'yes' }, { ar: 'نَفْس', tr: 'nafs', en: 'soul / self' }, { ar: 'نَظَر', tr: 'naẓar', en: 'looking / view' }] },
  { ar: 'ه', name: 'Hāʾ', tr: 'H', word: 'هِلَال', wordTr: 'Hilāl', wordEn: 'Crescent Moon',
    pairs: [{ ar: 'هَلْ', tr: 'hal', en: 'is / does (question word)' }, { ar: 'هُوَ', tr: 'huwa', en: 'he' }, { ar: 'هِيَ', tr: 'hiya', en: 'she' }, { ar: 'هَمّ', tr: 'hamm', en: 'worry / concern' }, { ar: 'هَزّ', tr: 'hazza', en: 'shake' }, { ar: 'هَدّ', tr: 'hadda', en: 'demolish' }],
    triples: [{ ar: 'هَدَف', tr: 'hadaf', en: 'goal / target' }, { ar: 'هَدْي', tr: 'hady', en: 'guidance' }, { ar: 'هَرَم', tr: 'haram', en: 'pyramid / old age' }, { ar: 'هِمَّة', tr: 'himmah', en: 'ambition' }, { ar: 'هَجْر', tr: 'hajr', en: 'abandonment' }, { ar: 'هَزْل', tr: 'hazl', en: 'joking / frivolity' }] },
  { ar: 'و', name: 'Wāw', tr: 'W', word: 'وَرْدَة', wordTr: 'Wardah', wordEn: 'Rose',
    pairs: [{ ar: 'وُدّ', tr: 'wudd', en: 'love / affection' }],
    triples: [{ ar: 'وَلَد', tr: 'walad', en: 'boy' }, { ar: 'وَرَق', tr: 'waraq', en: 'paper / leaf' }, { ar: 'وَجْه', tr: 'wajh', en: 'face' }, { ar: 'وَقْت', tr: 'waqt', en: 'time' }, { ar: 'وَعْد', tr: 'waʿd', en: 'promise' }, { ar: 'وَطَن', tr: 'waṭan', en: 'homeland' }] },
  { ar: 'ي', name: 'Yāʾ', tr: 'Y', word: 'يَد', wordTr: 'Yad', wordEn: 'Hand',
    pairs: [{ ar: 'يَدْ', tr: 'yad', en: 'hand' }, { ar: 'يَا', tr: 'yā', en: 'O! (vocative)' }, { ar: 'يَمّ', tr: 'yamm', en: 'sea (Qurʾānic)' }],
    triples: [{ ar: 'يَوْم', tr: 'yawm', en: 'day' }, { ar: 'يُسْر', tr: 'yusr', en: 'ease' }, { ar: 'يَبَس', tr: 'yabas', en: 'dryness' }, { ar: 'يُتْم', tr: 'yutm', en: 'orphanhood' }, { ar: 'يُمْن', tr: 'yumn', en: 'blessing / good fortune' }] },
];
