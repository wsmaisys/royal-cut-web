/**
 * ROYAL CUTS PHALTAN — Master Sequence, Story Timeline, Catalog & Bilingual Config
 * Swap frame paths or adjust scene progress ranges here without touching engine code.
 * All client details Marked with [PLACEHOLDER] are ready for final client copy swap.
 */

window.ROYAL_CUTS_CONFIG = {
  brand: {
    nameEn: 'ROYAL CUTS PHALTAN',
    nameMr: 'रॉयल कट्स फलटण',
    taglineEn: 'Phaltan’s Premier Fresh Chicken & Fish Trader',
    taglineMr: 'फलटणचा विश्वासू ताजे चिकन आणि मासे ट्रेडर',
    phoneDisplay: '+91 98765 43210', // [PLACEHOLDER: Client Phone Number]
    whatsappNumber: '919876543210',  // [PLACEHOLDER: Client WhatsApp Number]
    email: 'orders@royalcutsphaltan.in', // [PLACEHOLDER: Client Email]
    addressEn: 'Shop No. 4 & 5, Cold-Chain Market Hub, Ring Road Corner, Near Main Market Yard, Phaltan, Dist. Satara, Maharashtra – 415523', // [PLACEHOLDER: Exact Shop Address]
    addressMr: 'शॉप क्र. ४ व ५, कोल्ड-चेन मार्केट हब, रिंग रोड कॉर्नर, मेन मार्केट यार्ड जवळ, फलटण, जि. सातारा, महाराष्ट्र – ४१५५२३',
    fssaiRetail: '21524189000412',     // [PLACEHOLDER: FSSAI Retail Licence Number]
    fssaiWholesale: '11524036000198',  // [PLACEHOLDER: FSSAI Wholesale & Cold-Storage Licence Number]
    shopActLicence: 'STR/PHL/SEA/2021/0894', // [PLACEHOLDER: Maharashtra Shop & Establishment Reg]
    isoCert: 'ISO 22000:2018 (HACCP Cold-Chain)', // [PLACEHOLDER: Food Safety Management Cert]
    stockJsonPath: 'data/stock.json'
  },

  /**
   * Scroll-Scrubbed Image Sequence Definitions
   * Desktop: 150 frames @ 1920x1080 WebP
   * Mobile / Save-Data / Slow Connection: 75 frames @ 960x540 WebP
   * Home Teaser: 36 frames @ 1920x1080 / 960x540 WebP
   */
  sequences: {
    home: {
      id: 'home',
      filmTitleEn: 'Phaltan Cinema Reel • Two Worlds of Freshness',
      filmTitleMr: 'फलटण सिनेमा रील • ताजेपणाची दोन रूपे',
      accentColor: '#f59e0b',
      secondaryColor: '#2dd4bf',
      lerpFactor: 0.1,
      initialPreloadCount: 10,
      desktop: {
        totalFrames: 36,
        width: 1920,
        height: 1080,
        pathTemplate: 'assets/sequences/home/desktop/frame_{000}.webp'
      },
      mobile: {
        totalFrames: 36,
        width: 960,
        height: 540,
        pathTemplate: 'assets/sequences/home/mobile/frame_{000}.webp'
      },
      posterAltEn: 'Split-screen 3D animated cinema frame showing golden sunrise over Phaltan poultry farms on the left and deep teal underwater silver fish on the right.',
      posterAltMr: 'डाव्या बाजूला फलटणच्या सोनेरी शेतातील पहाट आणि उजव्या बाजूला निळ्याशार पाण्यातील चंदेरी मासे दाखवणारे ३डी चित्र.',
      scenes: [
        {
          id: 'home-scene-1',
          index: 1,
          start: 0.0,
          end: 1.0,
          fadeStart: 0.0,
          fadeEnd: 0.98,
          parallaxPx: 18,
          align: 'bottom-left',
          badgeEn: 'PHALTAN • COLD-CHAIN TRADER',
          badgeMr: 'फलटण • कोल्ड-चेन ट्रेडर',
          titleEn: 'Two Craft Stories. One Cold Chain.',
          titleMr: 'दोन अस्सल गोष्टी. एकच ताजेपणाची हमी.',
          captionEn: '5:00 AM Phaltan farm poultry & daily Konkan–Veer Dam fish.',
          captionMr: 'पहाटे ५:०० चे ताजे चिकन आणि कोकण–वीर धरणातील मासे.',
          altEn: 'Cinematic split view of golden Phaltan farm dawn and cool teal underwater light rays.',
          altMr: 'सोनेरी शेत आणि निळ्या पाण्यातील किरणांचे सिनेमॅटिक दृश्य.',
          ctaEn: 'Choose Story ↓',
          ctaMr: 'विभाग निवडा ↓',
          ctaHref: '#story-portals'
        }
      ]
    },

    chicken: {
      id: 'chicken',
      filmTitleEn: 'FILM I — FARM TO TABLE',
      filmTitleMr: 'चित्रपट १ — फार्म ते ताट',
      accentColor: '#f59e0b',
      secondaryColor: '#d97706',
      lerpFactor: 0.1,
      initialPreloadCount: 10,
      desktop: {
        totalFrames: 150,
        width: 1920,
        height: 1080,
        pathTemplate: 'assets/sequences/chicken/desktop/frame_{000}.webp'
      },
      mobile: {
        totalFrames: 75,
        width: 960,
        height: 540,
        pathTemplate: 'assets/sequences/chicken/mobile/frame_{000}.webp'
      },
      posterAltEn: '3D animated golden sunrise over a misty Phaltan farm with a proud country chicken.',
      posterAltMr: 'फलटणच्या सोनेरी शेतातील पहाट आणि रुबाबदार गावरान कोंबडा.',
      scenes: [
        {
          id: 'chk-scene-1',
          index: 1,
          frameRangeDesktop: [1, 25],
          frameRangeMobile: [1, 13],
          start: 0.00,
          end: 0.16,
          fadeStart: 0.01,
          fadeEnd: 0.14,
          parallaxPx: 20,
          align: 'bottom-left',
          badgeEn: '01 / 06 • 05:00 AM PHALTAN',
          badgeMr: '०१ / ०६ • पहाटे ५:०० फलटण',
          titleEn: 'Dawn Over Golden Fields.',
          titleMr: 'सोनेरी शेतावरची पहाट.',
          captionEn: 'Morning mist rolls over Phaltan farms as the first saffron rays break.',
          captionMr: 'फलटणच्या मळ्यांवर धुक्याची चादर आणि सोनेरी सूर्योदय.',
          altEn: 'Stylised 3D animation of a golden sunrise over misty Phaltan farm fields with a rooster silhouette on a wooden fence post.',
          altMr: 'धुक्याने वेढलेल्या फलटणच्या शेतावर उगवणारा सोनेरी सूर्य आणि कुंपणावर बसलेला कोंबडा.'
        },
        {
          id: 'chk-scene-2',
          index: 2,
          frameRangeDesktop: [26, 50],
          frameRangeMobile: [14, 25],
          start: 0.17,
          end: 0.33,
          fadeStart: 0.18,
          fadeEnd: 0.31,
          parallaxPx: 20,
          align: 'bottom-right',
          badgeEn: '02 / 06 • FREE-RANGE',
          badgeMr: '०२ / ०६ • रुबाबदार चाल',
          titleEn: 'Boss of the Taluka.',
          titleMr: 'शेतातला रुबाबदार राजा!',
          captionEn: 'Strutting through sunlit fields with attitude, trailed by three chicks.',
          captionMr: 'ऐटीत चालणारा कोंबडा आणि मागे धावणारी तीन छोटी पिल्ले.',
          altEn: 'Plump 3D cartoon chicken strutting confidently through a sunlit field with three tiny yellow chicks marching behind.',
          altMr: 'शेतातून ऐटीत चालणारा ३डी कार्टून कोंबडा आणि त्याच्या मागे चालणारी तीन पिवळी पिल्ले.'
        },
        {
          id: 'chk-scene-3',
          index: 3,
          frameRangeDesktop: [51, 75],
          frameRangeMobile: [26, 38],
          start: 0.34,
          end: 0.50,
          fadeStart: 0.36,
          fadeEnd: 0.48,
          parallaxPx: 22,
          align: 'bottom-left',
          badgeEn: '03 / 06 • THE PHOTOBOMB',
          badgeMr: '०३ / ०६ • सेल्फी सरप्राईज!',
          titleEn: '“Is That My Good Side?”',
          titleMr: '“माझा फोटो नीट येतोय ना?”',
          captionEn: 'A wide-eyed double-take right into the farmer’s morning selfie.',
          captionMr: 'शेतकऱ्याच्या सेल्फी कॅमेऱ्यात अचानक डोकावणारा खोडकर चेहरा!',
          altEn: 'Humorous 3D cartoon chicken doing a wide-eyed comedic double-take right in front of the camera lens while a smiling farmer holds a phone in the soft-focus background.',
          altMr: 'शेतकऱ्याच्या सेल्फी कॅमेऱ्यात डोकावून पाहणारा खोडकर ३डी कोंबडा.'
        },
        {
          id: 'chk-scene-4',
          index: 4,
          frameRangeDesktop: [76, 100],
          frameRangeMobile: [39, 50],
          start: 0.51,
          end: 0.66,
          fadeStart: 0.52,
          fadeEnd: 0.64,
          parallaxPx: 20,
          align: 'bottom-right',
          badgeEn: '04 / 06 • 2°C STUDIO',
          badgeMr: '०४ / ०६ • २°C स्वच्छ किचन',
          titleEn: 'Sunlight to Steel Precision.',
          titleMr: 'शेतातून थेट २°C स्टुडिओत.',
          captionEn: 'RO-washed, freshly dressed cuts resting on crystal ice.',
          captionMr: 'RO पाण्याने धुवून बर्फावर ठेवलेले ताजे, स्वच्छ चिकन ट्रे.',
          altEn: 'Match-cut from golden sunlight to warm pendant lighting in a spotless stainless-steel commercial kitchen with neatly packed fresh chicken trays on a chilled counter.',
          altMr: 'स्वच्छ स्टेनलेस स्टील काउंटरवर बर्फावर ठेवलेले नीटनेटके पॅक केलेले ताजे चिकन.'
        },
        {
          id: 'chk-scene-5',
          index: 5,
          frameRangeDesktop: [101, 125],
          frameRangeMobile: [51, 63],
          start: 0.67,
          end: 0.83,
          fadeStart: 0.68,
          fadeEnd: 0.81,
          parallaxPx: 20,
          align: 'bottom-left',
          badgeEn: '05 / 06 • THE PAYOFF',
          badgeMr: '०५ / ०६ • गरमागरम आस्वाद',
          titleEn: 'Plated Warm. Steam Rising.',
          titleMr: 'वाफाळलेला सुगंध व परिपूर्ण चव.',
          captionEn: 'A chef garnishes fragrant Phaltan chicken curry in a copper lagan.',
          captionMr: 'तांब्याच्या लगानमध्ये सजवलेला झणझणीत फलटण चिकन रस्सा.',
          altEn: 'Stylised 3D close-up of chef hands plating a steaming golden chicken curry and roasted dish in a copper bowl with fresh coriander.',
          altMr: 'शेफच्या हातांनी सजवलेली गरमागरम चिकन डिश आणि त्यातून उठणाऱ्या सुगंधी वाफा.'
        },
        {
          id: 'chk-scene-6',
          index: 6,
          frameRangeDesktop: [126, 150],
          frameRangeMobile: [64, 75],
          start: 0.84,
          end: 1.00,
          fadeStart: 0.85,
          fadeEnd: 1.00,
          parallaxPx: 16,
          align: 'bottom-left',
          badgeEn: '06 / 06 • ROYAL CUTS PHALTAN',
          badgeMr: '०६ / ०६ • रॉयल कट्स फलटण',
          titleEn: 'Fresh from Phaltan. Straight to your table.',
          titleMr: 'फलटणहून थेट तुमच्या ताटात.',
          captionEn: '5:30 AM morning harvest. Chilled 45-min delivery.',
          captionMr: 'पहाटे ५:३० चा ताजा बॅच. ४५ मिनिटांत घरपोच.',
          altEn: 'Cinematic dark charcoal and saffron gold title frame with rising warm steam and glowing bokeh embers reading Fresh from Phaltan, Straight to your table.',
          altMr: 'फलटणहून थेट तुमच्या ताटात असे लिहिलेले सिनेमॅटिक टायटल कार्ड.',
          ctaEn: 'Order Chicken ↓',
          ctaMr: 'चिकन ऑर्डर करा ↓',
          ctaHref: '#chicken-catalog'
        }
      ]
    },

    fish: {
      id: 'fish',
      filmTitleEn: 'FILM II — WATER TO TABLE',
      filmTitleMr: 'चित्रपट २ — पाण्यापासून ताटापर्यंत',
      accentColor: '#2dd4bf',
      secondaryColor: '#0d9488',
      lerpFactor: 0.1,
      initialPreloadCount: 10,
      desktop: {
        totalFrames: 150,
        width: 1920,
        height: 1080,
        pathTemplate: 'assets/sequences/fish/desktop/frame_{000}.webp'
      },
      mobile: {
        totalFrames: 75,
        width: 960,
        height: 540,
        pathTemplate: 'assets/sequences/fish/mobile/frame_{000}.webp'
      },
      posterAltEn: '3D animated underwater scene with sunbeams piercing deep teal water and silver fish schooling.',
      posterAltMr: 'निळ्याशार पाण्यात उतरणारी सूर्यकिरणे आणि चंदेरी माशांचा प्रवास.',
      scenes: [
        {
          id: 'fsh-scene-1',
          index: 1,
          frameRangeDesktop: [1, 25],
          frameRangeMobile: [1, 13],
          start: 0.00,
          end: 0.16,
          fadeStart: 0.01,
          fadeEnd: 0.14,
          parallaxPx: 20,
          align: 'bottom-left',
          badgeEn: '01 / 06 • DEEP WATERS',
          badgeMr: '०१ / ०६ • शांत पाण्याच्या अंतरंगात',
          titleEn: 'Cathedral Rays Below.',
          titleMr: 'पाण्याखालील सूर्यकिरणे.',
          captionEn: 'Morning light pierces cool teal depths as silver fish school.',
          captionMr: 'हिरव्या-निळ्या पाण्यातून उतरणारी किरणे आणि चंदेरी माशांचा थवा.',
          altEn: 'Stylised 3D underwater scene with dramatic sunbeams piercing deep teal water and a school of silver fish swimming in slow motion.',
          altMr: 'खोल निळ्या पाण्यात सूर्यकिरणांखाली संथ पोहणारे चंदेरी मासे.'
        },
        {
          id: 'fsh-scene-2',
          index: 2,
          frameRangeDesktop: [26, 50],
          frameRangeMobile: [14, 25],
          start: 0.17,
          end: 0.33,
          fadeStart: 0.18,
          fadeEnd: 0.31,
          parallaxPx: 20,
          align: 'bottom-right',
          badgeEn: '02 / 06 • QUICK SILVER',
          badgeMr: '०२ / ०६ • चंदेरी वेग',
          titleEn: 'Gliding on Pearl Bubbles.',
          titleMr: 'बुडबुड्यांची चंदेरी माळ.',
          captionEn: 'A bright-eyed silver fish glides forward with a trail of bubbles.',
          captionMr: 'प्रवाहातून पुढे झेपावणारा चमकदार मासा आणि बुडबुड्यांची रांग.',
          altEn: 'Expressive 3D cartoon silver fish gliding gracefully toward the camera with a trail of shimmering bubbles in teal water.',
          altMr: 'बुडबुड्यांची माळ सोडत कॅमेऱ्याकडे आनंदात पोहणारा चंदेरी ३डी मासा.'
        },
        {
          id: 'fsh-scene-3',
          index: 3,
          frameRangeDesktop: [51, 75],
          frameRangeMobile: [26, 38],
          start: 0.34,
          end: 0.50,
          fadeStart: 0.36,
          fadeEnd: 0.48,
          parallaxPx: 22,
          align: 'bottom-left',
          badgeEn: '03 / 06 • THE WINK',
          badgeMr: '०३ / ०६ • मिश्कील इशारा!',
          titleEn: 'A Cheeky Wink & Dodge.',
          titleMr: 'एक डोळा आणि जाळ्यातून सुटका!',
          captionEn: 'Sidestepping the net in a dazzling curtain of silver bubbles.',
          captionMr: 'कॅमेऱ्याला डोळा मारून बुडबुड्यांचा पडदा उडवत चपळ सुटका!',
          altEn: 'Witty 3D cartoon fish winking at the camera while comedically dodging a rope net in a burst of silver bubbles.',
          altMr: 'कॅमेऱ्याला डोळा मारून जाळ्यातून निसटणारा खोडकर ३डी मासा.'
        },
        {
          id: 'fsh-scene-4',
          index: 4,
          frameRangeDesktop: [76, 100],
          frameRangeMobile: [39, 50],
          start: 0.51,
          end: 0.66,
          fadeStart: 0.52,
          fadeEnd: 0.64,
          parallaxPx: 20,
          align: 'bottom-right',
          badgeEn: '04 / 06 • SURFACE BREAK',
          badgeMr: '०४ / ०६ • पहाटेची ताजी जाळी',
          titleEn: 'Caught by Hand at Dawn.',
          titleMr: 'पाण्याच्या तुषारांतून ताजी पकड.',
          captionEn: 'Bubbles become diamond spray as hands lift the morning catch.',
          captionMr: 'अनुभवी हातांनी पहाटेच्या प्रकाशात उचललेला ताजा साठा.',
          altEn: 'Match-cut from underwater bubbles to slow-motion water droplets in golden-teal dawn light as weathered hands lift a basket of glistening silver fish.',
          altMr: 'पहाटेच्या प्रकाशात पाण्याच्या तुषारांमधून वर उचललेली ताज्या माशांची टोपली.'
        },
        {
          id: 'fsh-scene-5',
          index: 5,
          frameRangeDesktop: [101, 125],
          frameRangeMobile: [51, 63],
          start: 0.67,
          end: 0.83,
          fadeStart: 0.68,
          fadeEnd: 0.81,
          parallaxPx: 20,
          align: 'bottom-left',
          badgeEn: '05 / 06 • 0°C ICE-CHAIN',
          badgeMr: '०५ / ०६ • ०°C क्रिस्टल आईस',
          titleEn: 'Iced, Packed & Dispatched.',
          titleMr: 'बर्फात पॅक होऊन पहाटेच रवाना.',
          captionEn: 'Layered in chemical-free crystal ice inside insulated crates.',
          captionMr: 'शुद्ध बर्फाच्या इन्सुलेटेड क्रेटमधून डिलिव्हरी व्हॅनने रवाना.',
          altEn: 'Stylised 3D scene of fresh silver fish packed in crushed crystal ice inside a teal insulated crate being loaded into a clean delivery van at dawn.',
          altMr: 'बर्फाने भरलेल्या इन्सुलेटेड क्रेटमध्ये पॅक केलेले ताजे मासे पहाटे डिलिव्हरी व्हॅनमध्ये ठेवतानाचे दृश्य.'
        },
        {
          id: 'fsh-scene-6',
          index: 6,
          frameRangeDesktop: [126, 150],
          frameRangeMobile: [64, 75],
          start: 0.84,
          end: 1.00,
          fadeStart: 0.85,
          fadeEnd: 1.00,
          parallaxPx: 16,
          align: 'bottom-left',
          badgeEn: '06 / 06 • ROYAL CUTS PHALTAN',
          badgeMr: '०६ / ०६ • रॉयल कट्स फलटण',
          titleEn: 'Caught fresh. Packed cold. Delivered fast.',
          titleMr: 'ताजी पकड. थंड पॅकिंग. जलद डिलिव्हरी.',
          captionEn: 'Ratnagiri coastal Surmai & Pomfret + Veer Dam fresh catch.',
          captionMr: 'रत्नागिरीची सुरमई व पापलेट आणि वीर धरणातील ताजे मासे.',
          altEn: 'Cinematic deep charcoal and teal title frame with underwater caustic light reflections reading Caught fresh, Packed cold, Delivered fast.',
          altMr: 'ताजी पकड, थंड पॅकिंग, जलद डिलिव्हरी असे लिहिलेले सिनेमॅटिक टायटल कार्ड.',
          ctaEn: 'Order Fish ↓',
          ctaMr: 'मासे ऑर्डर करा ↓',
          ctaHref: '#fish-catalog'
        }
      ]
    }
  },

  /**
   * Product Catalog (Strictly Chicken & Fish — Placeholders Preserved)
   * Note: When `price` is null or omitted, UI automatically displays "Call for today's rate" / "आजच्या दरासाठी कॉल करा".
   */
  products: {
    chicken: [
      {
        id: 'chk-broiler-curry',
        category: 'chicken',
        nameEn: 'Farm-Fresh Broiler Curry Cut (Skinless)',
        nameMr: 'फार्म-फ्रेश ब्रॉयलर चिकन करी कट (स्किनलेस)',
        tagEn: 'Best Seller • 16–18 Pieces/Kg',
        tagMr: 'सर्वाधिक पसंती • १६–१८ पीस/किलो',
        descEn: 'Dressed at 5:30 AM in our 2°C chilled room and washed with purified RO water. Tender bone-in medium cuts ideal for home curries and hotel gravies.',
        descMr: 'पहाटे ५:३० वाजता २°C चिल्ड रूममध्ये तयार केलेले आणि शुद्ध RO पाण्याने धुतलेले. घरगुती रस्सा आणि हॉटेल ग्रेव्हीसाठी उत्तम.',
        price: 220, // [PLACEHOLDER]
        wholesalePrice: 180, // [PLACEHOLDER]
        unitEn: 'per kg',
        unitMr: 'प्रति किलो',
        image: 'assets/hero-chicken.jpg',
        altEn: 'Fresh skinless chicken curry cuts arranged on a chilled dark slate board with rosemary and spices.',
        altMr: 'थंड स्लेटवर ठेवलेले ताजे स्किनलेस चिकन करी कट्स.'
      },
      {
        id: 'chk-gavran',
        category: 'chicken',
        nameEn: 'Pure Phaltan Gavran (Desi Country Chicken)',
        nameMr: 'अस्सल फलटण गावरान (देशी चिकन — रस्सा स्पेशल)',
        tagEn: 'Phaltan Village Specialty',
        tagMr: 'फलटण गावरान खासियत',
        descEn: 'Authentic free-range country chicken sourced from Phaltan taluka farms. Rich, traditional flavour crafted for Maharashtrian Tambada-Pandhara Rassa.',
        descMr: 'फलटण तालुक्यातील निवडक शेतकऱ्यांकडून आणलेले अस्सल गावरान चिकन. पारंपारिक तांबडा-पांढरा रस्सा आणि काळ्या मसाल्यासाठी सर्वोत्तम.',
        price: 480, // [PLACEHOLDER]
        wholesalePrice: 410, // [PLACEHOLDER]
        unitEn: 'per kg',
        unitMr: 'प्रति किलो',
        image: 'assets/chicken-cuts.jpg',
        altEn: 'Authentic Phaltan Gavran country chicken cuts prepared for traditional Maharashtrian rassa.',
        altMr: 'पारंपारिक महाराष्ट्रीयन रश्श्यासाठी तयार केलेले अस्सल गावरान चिकन.'
      },
      {
        id: 'chk-boneless-breast',
        category: 'chicken',
        nameEn: 'Chef-Grade Breast Fillet & Tandoori Tikka Boneless',
        nameMr: 'शेफ-ग्रेड चिकन बोनलेस ब्रेस्ट व तंदुरी टिक्का कट',
        tagEn: '100% Zero Bone • High Protein',
        tagMr: '१००% बोनलेस • हाय प्रोटीन',
        descEn: 'Hand-trimmed zero-bone breast fillets and juicy thigh tikka cubes. Drained net-weight billing with zero water retention.',
        descMr: 'हाताने नीट ट्रिम केलेले बोनलेस फिलेट्स आणि टिक्का क्यूब्स. तंदुरी स्टार्टर्स, शवरमा आणि फिटनेस आहारासाठी उत्तम.',
        price: 330, // [PLACEHOLDER]
        wholesalePrice: 280, // [PLACEHOLDER]
        unitEn: 'per kg',
        unitMr: 'प्रति किलो',
        image: 'assets/hero-chicken.jpg',
        altEn: 'Hand-trimmed boneless chicken breast fillets and tikka cubes on stainless steel tray.',
        altMr: 'स्टेनलेस स्टील ट्रेमध्ये ठेवलेले ताजे बोनलेस चिकन ब्रेस्ट फिलेट्स.'
      },
      {
        id: 'chk-drumstick-lollipop',
        category: 'chicken',
        nameEn: 'Party Drumsticks, Tangdi & Frenched Lollipops',
        nameMr: 'चिकन ड्रमस्टिक्स, तंगडी व फ्रेंच लॉलीपॉप',
        tagEn: 'Tandoor & Starter Spec',
        tagMr: 'तंदूर व स्टार्टर स्पेशल',
        descEn: 'Cleanly frenched wing lollipops and plump whole drumsticks prepared to restaurant specification for crispy starters and barbecue.',
        descMr: 'रेस्टॉरंट दर्जाचे स्वच्छ फ्रेंच केलेले चिकन लॉलीपॉप आणि संपूर्ण लेग पीस (तंगडी).',
        price: 290, // [PLACEHOLDER]
        wholesalePrice: 245, // [PLACEHOLDER]
        unitEn: 'per kg',
        unitMr: 'प्रति किलो',
        image: 'assets/chicken-cuts.jpg',
        altEn: 'Freshly frenched chicken lollipops and whole drumsticks ready for marination.',
        altMr: 'मॅरिनेशनसाठी तयार असलेले ताजे चिकन लॉलीपॉप आणि ड्रमस्टिक्स.'
      },
      {
        id: 'chk-horeca-crate',
        category: 'chicken',
        nameEn: 'HoReCa Hotel & Caterer Bulk Chilled Crate (15 kg+)',
        nameMr: 'हॉटेल व केटरर्स होलसेल चिल्ड क्रेट (१५ किलो+)',
        tagEn: '5:30 AM Kitchen Slot Delivery',
        tagMr: 'पहाटे ५:३० हॉटेल डिलिव्हरी',
        descEn: 'Custom-portioned bulk poultry crates for hotels, highway dhabas, and marriage halls across Phaltan, Baramati, and Lonand.',
        descMr: 'फलटण, बारामती आणि लोणंदमधील हॉटेल्स, धाबे आणि मंगल कार्यालयांसाठी पहाटेचा विशेष होलसेल पुरवठा.',
        price: null, // Demonstrates "Call for today's rate"
        wholesalePrice: null,
        unitEn: 'custom contract',
        unitMr: 'होलसेल करार',
        image: 'assets/wholesale-supply.jpg',
        altEn: 'Insulated wholesale delivery crates packed with chilled poultry for hotel kitchens.',
        altMr: 'हॉटेल किचनसाठी इन्सुलेटेड क्रेटमध्ये पॅक केलेला होलसेल चिकन साठा.'
      }
    ],

    fish: [
      {
        id: 'fsh-surmai-steaks',
        category: 'fish',
        nameEn: 'Ratnagiri Kingfish (Surmai) Center Fry Steaks',
        nameMr: 'रत्नागिरी सुरमई गोल काप (तवा फ्राय स्पेशल)',
        tagEn: 'Daily Coastal Ice-Chain',
        tagMr: 'कोकण किनारा ताजी आवक',
        descEn: 'Precision-sliced center-cut Surmai steaks rushed overnight in chemical-free crushed crystal ice from Ratnagiri port. Firm, single-bone perfection for Rava Fry.',
        descMr: 'रत्नागिरी बंदरातून शुद्ध क्रिस्टल बर्फातून आलेली ताजी सुरमई. रवा तवा फ्राय आणि मालवणी करीसाठी एकच मधला काटा असलेले एकसारखे काप.',
        price: 740, // [PLACEHOLDER]
        wholesalePrice: 640, // [PLACEHOLDER]
        unitEn: 'per kg',
        unitMr: 'प्रति किलो',
        image: 'assets/hero-seafood.jpg',
        altEn: 'Fresh Ratnagiri Surmai kingfish center steaks resting on crushed crystal ice.',
        altMr: 'क्रिस्टल बर्फावर ठेवलेले रत्नागिरी सुरमईचे ताजे गोल काप.'
      },
      {
        id: 'fsh-silver-pomfret',
        category: 'fish',
        nameEn: 'Export-Grade Silver Pomfret (Cleaned with Masala Slits)',
        nameMr: 'एक्सपोर्ट ग्रेड सिल्व्हर पापलेट (मसाला खाचा पाडून साफ)',
        tagEn: 'Konkan Premium Catch',
        tagMr: 'प्रीमियम कोकण पापलेट',
        descEn: 'Glistening whole Silver Pomfret, gutted, descaled, washed in RO water, and scored with deep masala slits for pan-frying or tandoor.',
        descMr: 'चमकदार सिल्व्हर पापलेट, RO पाण्याने स्वच्छ धुवून आणि मसाला भरण्यासाठी खाचा पाडून तयार केलेले.',
        price: null, // Demonstrates "Call for today's rate"
        wholesalePrice: null,
        unitEn: 'per kg',
        unitMr: 'प्रति किलो',
        image: 'assets/fish-cuts.jpg',
        altEn: 'Whole silver pomfret fish cleaned and scored on crushed ice.',
        altMr: 'बर्फावर ठेवलेले स्वच्छ साफ केलेले सिल्व्हर पापलेट.'
      },
      {
        id: 'fsh-tiger-prawns',
        category: 'fish',
        nameEn: 'Peeled & Deveined Sea Tiger Prawns (Kolambi)',
        nameMr: 'सोलेली व साफ केलेली समुद्र टायगर कोळंबी',
        tagEn: 'Zero Shell Waste • Ready to Cook',
        tagMr: 'पूर्णपणे साफ • शिजवण्यास तयार',
        descEn: 'Sweet, firm coastal prawns completely peeled, deveined, and washed in chilled RO water. Pay only for clean net weight.',
        descMr: 'साल आणि काळा दोरा काढून पूर्णपणे साफ केलेली समुद्री कोळंबी. कोळंबी मसाला, भात आणि फ्रायसाठी उत्तम.',
        price: 680, // [PLACEHOLDER]
        wholesalePrice: 590, // [PLACEHOLDER]
        unitEn: 'per kg',
        unitMr: 'प्रति किलो',
        image: 'assets/hero-seafood.jpg',
        altEn: 'Cleaned and deveined coastal tiger prawns on ice.',
        altMr: 'बर्फावर ठेवलेली साफ केलेली ताजी कोळंबी.'
      },
      {
        id: 'fsh-veer-dam-katla',
        category: 'fish',
        nameEn: 'Veer Dam & Nira Belt Fresh Rohu / Katla Steaks',
        nameMr: 'वीर डॅम व निरा पट्टा ताजे रोहू / कातला काप',
        tagEn: 'Same-Morning Dam Catch',
        tagMr: 'वीर धरण आजची ताजी पकड',
        descEn: 'Landed every morning from the nearby Veer Dam and Nira river waters. Thoroughly descaled, gutted, and cut into curry steaks.',
        descMr: 'जवळच्याच वीर धरण आणि निरा नदीच्या पात्रातून दररोज सकाळी आणलेले गोड्या पाण्यातील ताजे रोहू व कातला मासे.',
        price: 240, // [PLACEHOLDER]
        wholesalePrice: 185, // [PLACEHOLDER]
        unitEn: 'per kg',
        unitMr: 'प्रति किलो',
        image: 'assets/fish-cuts.jpg',
        altEn: 'Freshwater Rohu and Katla fish curry cuts from Veer Dam.',
        altMr: 'वीर धरणातील ताजे रोहू आणि कातला माशांचे काप.'
      },
      {
        id: 'fsh-bangda-mackerel',
        category: 'fish',
        nameEn: 'Ratnagiri Indian Mackerel (Bangda — Cleaned Whole)',
        nameMr: 'रत्नागिरी बांगडा (साफ केलेला अख्खा मासा)',
        tagEn: 'Malvani Fry Favorite',
        tagMr: 'मालवणी फ्राय स्पेशल',
        descEn: 'Firm, omega-rich coastal Bangda arrived in insulated ice boxes, cleaned and slit for authentic Malvani tirphal & kokum curry.',
        descMr: 'मालवणी तिरफळ आमटी आणि कुरकुरीत रवा फ्रायसाठी बर्फातून आलेला ताजा रत्नागिरी बांगडा.',
        price: 320, // [PLACEHOLDER]
        wholesalePrice: 260, // [PLACEHOLDER]
        unitEn: 'per kg',
        unitMr: 'प्रति किलो',
        image: 'assets/fish-cuts.jpg',
        altEn: 'Cleaned coastal Indian Mackerel Bangda fish on ice.',
        altMr: 'बर्फावर ठेवलेला ताजा साफ केलेला रत्नागिरी बांगडा.'
      }
    ]
  },

  /**
   * Fallback Stock Data (mirrors data/stock.json when opened directly via file://)
   */
  fallbackStock: {
    lastUpdatedEn: 'Updated Today • 5:30 AM Morning Dispatch Batch [PLACEHOLDER]',
    lastUpdatedMr: 'आजचे ताजे दर • पहाटे ५:३० चा मॉर्निंग बॅच',
    marketLocationEn: 'Main Market Yard & Ring Road Cold-Chain Hub, Phaltan',
    marketLocationMr: 'मेन मार्केट यार्ड आणि रिंग रोड कोल्ड-चेन हब, फलटण',
    items: [
      {
        id: 'chk-broiler-curry',
        category: 'chicken',
        nameEn: 'Farm-Fresh Broiler Chicken (Skinless Curry Cut)',
        nameMr: 'फार्म-फ्रेश ब्रॉयलर चिकन (स्किनलेस करी कट)',
        originEn: 'Phaltan & Baramati Bio-Secure Farms',
        originMr: 'फलटण व बारामती बायो-सिक्युअर फार्म',
        status: 'available',
        statusLabelEn: 'In Stock • 5:30 AM Batch',
        statusLabelMr: 'उपलब्ध • पहाटे ५:३० बॅच',
        ratePerKg: 220,
        wholesaleRatePerKg: 180,
        unit: 'kg'
      },
      {
        id: 'chk-gavran',
        category: 'chicken',
        nameEn: 'Authentic Phaltan Gavran (Desi Country Chicken)',
        nameMr: 'अस्सल फलटण गावरान (देशी चिकन — रस्सा स्पेशल)',
        originEn: 'Phaltan Taluka Free-Range',
        originMr: 'फलटण तालुका मुक्त संचार गावरान',
        status: 'limited',
        statusLabelEn: 'Limited Morning Stock',
        statusLabelMr: 'मर्यादित सकाळचा साठा',
        ratePerKg: 480,
        wholesaleRatePerKg: 410,
        unit: 'kg'
      },
      {
        id: 'chk-boneless-breast',
        category: 'chicken',
        nameEn: 'Chef-Grade Chicken Breast & Tandoori Tikka Boneless',
        nameMr: 'शेफ-ग्रेड चिकन बोनलेस ब्रेस्ट व तंदुरी टिक्का कट',
        originEn: '2°C Chilled Studio Trim',
        originMr: '२°C चिल्ड स्टुडिओ कट',
        status: 'available',
        statusLabelEn: 'In Stock • Freshly Trimmed',
        statusLabelMr: 'उपलब्ध • ताजे बोनलेस',
        ratePerKg: 330,
        wholesaleRatePerKg: 280,
        unit: 'kg'
      },
      {
        id: 'fsh-surmai-steaks',
        category: 'fish',
        nameEn: 'Ratnagiri Kingfish (Surmai) Center Fry Steaks',
        nameMr: 'रत्नागिरी सुरमई गोल काप (तवा फ्राय स्पेशल)',
        originEn: 'Ratnagiri Port Insulated Ice-Chain',
        originMr: 'रत्नागिरी बंदर थेट आईस-चेन',
        status: 'available',
        statusLabelEn: 'Fresh Coastal Arrival',
        statusLabelMr: 'कोकण किनारा ताजी आवक',
        ratePerKg: 740,
        wholesaleRatePerKg: 640,
        unit: 'kg'
      },
      {
        id: 'fsh-silver-pomfret',
        category: 'fish',
        nameEn: 'Export-Grade Silver Pomfret (Cleaned with Masala Slits)',
        nameMr: 'एक्सपोर्ट ग्रेड सिल्व्हर पापलेट (साफ केलेले)',
        originEn: 'Konkan Coastal Express',
        originMr: 'कोकण कोस्टल एक्सप्रेस',
        status: 'limited',
        statusLabelEn: 'Limited Coastal Catch',
        statusLabelMr: 'मर्यादित सागरी साठा',
        ratePerKg: null,
        wholesaleRatePerKg: null,
        unit: 'kg'
      },
      {
        id: 'fsh-veer-dam-katla',
        category: 'fish',
        nameEn: 'Veer Dam & Nira River Fresh Rohu / Katla Curry Cut',
        nameMr: 'वीर डॅम व निरा नदी ताजे रोहू / कातला करी कट',
        originEn: 'Veer Dam Same-Morning Catch',
        originMr: 'वीर धरण आजची ताजी पकड',
        status: 'available',
        statusLabelEn: 'In Stock • Descaled & Cleaned',
        statusLabelMr: 'उपलब्ध • खवले काढून साफ',
        ratePerKg: 240,
        wholesaleRatePerKg: 185,
        unit: 'kg'
      }
    ]
  },

  /**
   * UI Dictionary for Global English / मराठी Toggle
   */
  ui: {
    callForRateEn: "Call for today's rate",
    callForRateMr: 'आजच्या दरासाठी कॉल करा',
    orderNowEn: 'Order Now on WhatsApp',
    orderNowMr: 'व्हॉट्सॲपवर ऑर्डर करा',
    addOneKgEn: '+ Add 1 kg',
    addOneKgMr: '+ १ किलो जोडा',
    addedKgEn: 'Added',
    addedKgMr: 'जोडले',
    wholesaleLabelEn: 'Wholesale (10kg+)',
    wholesaleLabelMr: 'होलसेल (१० किलो+)',
    loadingReelEn: 'Loading 35mm Cinema Reel…',
    loadingReelMr: 'सिनेमा रील लोड होत आहे…',
    reducedMotionNoteEn: 'Reduced motion enabled — showing static keyframe story layout.',
    reducedMotionNoteMr: 'स्थिर दृश्य मोड सक्रिय आहे.'
  }
};
