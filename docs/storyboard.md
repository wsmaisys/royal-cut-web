# Royal Cuts Phaltan — Storyboard & Keyframe Image Generation Spec

> **AI Keyframe Generation Status (2026-10-29):**
> - **Completed (12/12 Direct AI Pixar 3D Renders):** All 12 keyframes (`chicken_scene_01.png`–`06.png` and `fish_scene_01.png`–`06.png`) have been rendered with `gemini-3.1-flash-image`, saved to `assets/keyframes/`, and compiled into all 522 desktop (`1920×1080` WebP) and mobile (`960×540` WebP) sequence frames.

**Project:** Royal Cuts Phaltan (Chicken & Fish Trader — Phaltan, Dist. Satara, Maharashtra)  
**Visual Style:** Stylised 3D-cartoon cinema (Pixar-inspired volumetric lighting, tactile surface shaders, shallow depth of field, 35mm film grain, 2.39:1 anamorphic bokeh).  
**Editorial Rule:** Warm, witty, appetising, and strictly tasteful. Zero slaughter, zero blood, zero animal distress—all transitions from live animal to culinary preparation happen via elegant lighting/shape **match-cuts**.  
**Technical Spec:**  
- **Desktop Sequence:** 150 frames per story (`frame_001.webp` – `frame_150.webp`), `1920×1080` WebP, 2.39:1 letterboxed viewport.  
- **Mobile Sequence:** 75 frames per story (`frame_001.webp` – `frame_075.webp`), `960×540` WebP, selected automatically via `window.matchMedia('(max-width: 768px)')` or `navigator.connection.effectiveType` (`slow-2g`, `2g`, `3g`, `saveData`).  
- **Home Teaser Loop:** 36 frames (`frame_001.webp` – `frame_036.webp`), split diopter warm saffron sunrise & cool Konkan/Veer Dam water ripples.

---

## Film I: `/chicken` — *"Farm to Table"* (फार्म ते ताट)

**Palette:** Warm Amber (`#F59E0B`), Saffron Gold (`#D97706`), Sunlit Wheat, Brushed Stainless Steel, Charcoal (`#090A0D`).  
**Total Frames:** 150 (Desktop) / 75 (Mobile)  
**Lerp Smoothing:** `0.10`

| Scene | Frame Range (Desktop) | Frame Range (Mobile) | Scroll Progress | Overlay Fade Range | Match-Cut Transition |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Scene 1: Golden Phaltan Dawn** | `001 – 025` | `001 – 013` | `0.00 – 0.16` | `0.01 – 0.14` | Rising golden sun disk at upper-center dissolves into the round crest of the strutting chicken. |
| **Scene 2: The Boss of the Field** | `026 – 050` | `014 – 025` | `0.17 – 0.33` | `0.18 – 0.31` | Camera tracks low at ground level; chicken steps toward the lens, filling the left third. |
| **Scene 3: The Photobomb Double-Take** | `051 – 075` | `026 – 038` | `0.34 – 0.50` | `0.36 – 0.48` | Golden lens flare from the farmer's phone camera blooms across the entire frame into warm kitchen pendant light. |
| **Scene 4: Golden Light Match-Cut to Chilled Counter** | `076 – 100` | `039 – 050` | `0.51 – 0.66` | `0.52 – 0.64` | Circular golden light reflection on the stainless counter morphs into the rim of a brass-trimmed serving platter. |
| **Scene 5: Chef's Hands & Rising Steam** | `101 – 125` | `051 – 063` | `0.67 – 0.83` | `0.68 – 0.81` | Swirling aromatic steam rises to fill the frame, parting to reveal the final charcoal-and-gold title card. |
| **Scene 6: Title Card & CTA** | `126 – 150` | `064 – 075` | `0.84 – 1.00` | `0.85 – 1.00` | Holds on warm bokeh embers for the final CTA. |

### Scene-by-Scene Captions, Alt Text & Image Prompts (`/chicken`)

#### Scene 1 — Dawn Over a Golden Farm (Frames `001–025`, Progress `0.00–0.16`)
- **Caption (EN):** *5:00 AM, Phaltan Taluka.* Mist rolls across golden jowar fields as a proud rooster silhouette heralds the morning.
- **Caption (MR):** *पहाटे ५:००, फलटण तालुका.* सोनेरी ज्वारीच्या शेतावर धुक्याची दुलई आणि पहाटेची बांग.
- **Keyframe Alt Text:** Stylised 3D animation of a golden sunrise over misty Phaltan farm fields with a rooster silhouette on a wooden fence post.
- **Image Generation Prompt:**
  > `Pixar-style 3D animated cinema frame, 2.39:1 widescreen composition, golden hour dawn over rural Phaltan Maharashtra farmland, soft volumetric morning mist rolling over golden wheat and sugarcane fields, proud stylised rooster silhouette perched on a weathered teak fence post against a glowing saffron sun disk, warm amber rim lighting, shallow depth of field, anamorphic oval bokeh, subtle 35mm film grain --ar 16:9 --stylize 300`

#### Scene 2 — Attitude in the Field (Frames `026–050`, Progress `0.17–0.33`)
- **Caption (EN):** *Free-Range Royalty.* Our plump country bird struts down the path like he owns the district—trailed by three fluffy chicks trying to keep up.
- **Caption (MR):** *रुबाबदार गावरान चाल.* शेताच्या बांधावरून ऐटीत चालणारा कोंबडा आणि त्याच्या मागे धावणारी छोटी पिल्ले.
- **Keyframe Alt Text:** Plump 3D cartoon chicken strutting confidently through a sunlit field with three tiny yellow chicks marching behind.
- **Image Generation Prompt:**
  > `Pixar-style 3D character animation, low-angle tracking shot, a plump healthy stylised cartoon chicken with glossy warm-amber feathers strutting with chest puffed out and comedic confidence along a sunlit earthen farm path, three tiny round fluffy yellow chicks waddling fast in single file behind it, warm golden subsurface scattering on feathers, swaying wildflowers in foreground blur, anamorphic lens bokeh, cinema colour grade --ar 16:9`

#### Scene 3 — The Selfie Photobomb (Frames `051–075`, Progress `0.34–0.50`)
- **Caption (EN):** *Wait—is that my good side?* Right as the farmer lines up a morning selfie, our star leans straight into the lens with a wide-eyed double-take.
- **Caption (MR):** *थांबा, माझा फोटो काढताय?* शेतकऱ्याच्या सेल्फीमध्ये अचानक डोकावून पाहणारा खोडकर चेहरा!
- **Keyframe Alt Text:** Humorous 3D cartoon chicken doing a wide-eyed comedic double-take right in front of the camera lens while a smiling farmer holds a phone in the soft-focus background.
- **Image Generation Prompt:**
  > `Pixar-style 3D animated comedy beat, extreme close-up wide-angle 24mm lens effect, a charismatic cartoon chicken leaning right into the camera lens doing a hilarious wide-eyed double-take with one eyebrow raised, in the soft bokeh background a cheerful Maharashtrian farmer in a white cap holds up a smartphone for a selfie, warm golden sunlight flaring into the lens at the end of the shot to prepare a luminous gold match-cut, shallow DOF --ar 16:9`

#### Scene 4 — Match-Cut: Golden Light to Chilled Steel Counter (Frames `076–100`, Progress `0.51–0.66`)
- **Caption (EN):** *From Sunlit Fields to 2°C Precision.* The farm's golden glow becomes the warm pendant light of a spotless kitchen—where chilled, RO-washed cuts rest in food-grade trays.
- **Caption (MR):** *शेतातील सोन्यासारखा प्रकाश ते २°C स्वच्छ किचन.* RO पाण्याने धुतलेले, नीटनेटके पॅक केलेले ताजे चिकन.
- **Keyframe Alt Text:** Match-cut from golden sunlight to warm pendant lighting in a spotless stainless-steel commercial kitchen with neatly packed fresh chicken trays on a chilled counter.
- **Image Generation Prompt:**
  > `Pixar-style 3D stylized culinary cinema, seamless lighting match-cut where golden sun flare resolves into a warm brass pendant lamp hanging over a gleaming brushed stainless-steel commercial kitchen counter, neatly sealed food-grade trays of clean fresh chilled chicken fillets and curry cuts resting on crushed crystal ice at 2 degrees Celsius, zero blood, zero mess, immaculate condensation droplets, warm amber and cool steel contrast, shallow depth of field --ar 16:9`

#### Scene 5 — Chef's Hands & Rising Steam (Frames `101–125`, Progress `0.67–0.83`)
- **Caption (EN):** *The Sunday Payoff.* A chef garnishes golden-roasted chicken and fragrant Phaltan rassa as ribbons of aromatic steam curl toward the ceiling.
- **Caption (MR):** *रविवारची खरी मेजवानी.* गरमागरम तांबडा-पांढरा रस्सा आणि सुगंधी वाफाळलेले चिकन ताट.
- **Keyframe Alt Text:** Stylised 3D close-up of chef hands plating a steaming golden chicken curry and roasted dish in a copper bowl with fresh coriander.
- **Image Generation Prompt:**
  > `Studio Ghibli meets Pixar 3D food cinematography, close-up of a chef's hands garnishing an appetising golden-spiced Maharashtrian chicken curry and roasted drumsticks in a hammered copper lagan bowl with fresh green coriander leaves, rich volumetric ribbons of warm steam rising into golden rim light, mouth-watering glaze, anamorphic bokeh background, film grain --ar 16:9`

#### Scene 6 — Title Card: "Fresh from Phaltan. Straight to your table." (Frames `126–150`, Progress `0.84–1.00`)
- **Caption (EN):** *Fresh from Phaltan. Straight to your table.* Morning farm batches dressed at 5:30 AM.
- **Caption (MR):** *फलटणहून थेट तुमच्या ताटात.* दररोज पहाटे ५:३० चा ताजा बॅच.
- **Keyframe Alt Text:** Cinematic dark charcoal and saffron gold title frame with rising warm steam and glowing bokeh embers reading Fresh from Phaltan, Straight to your table.
- **Image Generation Prompt:**
  > `Cinematic 3D title card background, deep charcoal studio backdrop (#090A0D) with soft swirling golden steam and floating warm saffron bokeh embers, subtle spotlight illuminating a clean minimal brass emblem in center, 2.39:1 film aesthetic, high contrast space for editorial serif typography --ar 16:9`

---

## Film II: `/fish` — *"Water to Table"* (पाण्यापासून ताटापर्यंत)

**Palette:** Deep Teal (`#0D9488`), Bioluminescent Aqua (`#2DD4BF`), Brushed Silver (`#CBD5E1`), Deep Charcoal (`#090A0D`).  
**Total Frames:** 150 (Desktop) / 75 (Mobile)  
**Lerp Smoothing:** `0.10`

| Scene | Frame Range (Desktop) | Frame Range (Mobile) | Scroll Progress | Overlay Fade Range | Match-Cut Transition |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Scene 1: Underwater Cathedral Rays** | `001 – 025` | `001 – 013` | `0.00 – 0.16` | `0.01 – 0.14` | Diagonal shafts of teal sunlight part as a silver school swirls into a vortex, revealing our hero fish. |
| **Scene 2: Silver Glide & Bubbles** | `026 – 050` | `014 – 025` | `0.17 – 0.33` | `0.18 – 0.31` | Hero fish spirals toward the camera, leaving a trail of pearl-like bubbles. |
| **Scene 3: The Cheeky Wink & Net Dodge** | `051 – 075` | `026 – 038` | `0.34 – 0.50` | `0.36 – 0.48` | Fish winks and kicks up a burst of shimmering silver bubbles that fill the lens and match-cut into airborne water droplets above the surface. |
| **Scene 4: Surface Break — Caught by Hand** | `076 – 100` | `039 – 050` | `0.51 – 0.66` | `0.52 – 0.64` | Sparkling water droplets in slow motion transition seamlessly into crystal-clear crushed ice cubes pouring into an insulated crate. |
| **Scene 5: Iced, Packed & Loaded at Dawn** | `101 – 125` | `051 – 063` | `0.67 – 0.83` | `0.68 – 0.81` | Delivery van doors close at dawn; the brushed-silver emblem on the van matches the silver-teal title card. |
| **Scene 6: Title Card & CTA** | `126 – 150` | `064 – 075` | `0.84 – 1.00` | `0.85 – 1.00` | Holds on shimmering teal caustics and silver mist for the final CTA. |

### Scene-by-Scene Captions, Alt Text & Image Prompts (`/fish`)

#### Scene 1 — Underwater Light Rays (Frames `001–025`, Progress `0.00–0.16`)
- **Caption (EN):** *Beneath the Surface.* Cathedral rays of morning light pierce cool emerald-teal water as silver fish school in hypnotic slow motion.
- **Caption (MR):** *शांत पाण्याच्या अंतरंगात.* हिरव्या-निळ्या पाण्यातून उतरणारी सूर्यकिरणे आणि चंदेरी माशांचा संथ प्रवास.
- **Keyframe Alt Text:** Stylised 3D underwater scene with dramatic sunbeams piercing deep teal water and a school of silver fish swimming in slow motion.
- **Image Generation Prompt:**
  > `Pixar Finding Nemo inspired 3D underwater cinematography, 2.39:1 widescreen, dramatic volumetric god-rays of morning sunlight piercing deep teal-emerald water, a shimmering school of sleek silver pomfret and kingfish moving in graceful slow-motion harmony, floating plankton motes, anamorphic lens flare, shallow depth of field --ar 16:9`

#### Scene 2 — Gliding Through with Bubbles (Frames `026–050`, Progress `0.17–0.33`)
- **Caption (EN):** *Quick Silver.* One sleek cartoon Surmai glides effortlessly out of the pack, trailing a ribbon of pearlescent bubbles.
- **Caption (MR):** *चंदेरी वेग.* पाण्याच्या प्रवाहात आनंदाने पोहणारा आणि बुडबुड्यांची माळ सोडणारा चंदेरी मासा.
- **Keyframe Alt Text:** Expressive 3D cartoon silver fish gliding gracefully toward the camera with a trail of shimmering bubbles in teal water.
- **Image Generation Prompt:**
  > `Pixar-style 3D character animation, medium close-up of a sleek charismatic cartoon silver fish with iridescent teal-and-silver scales gliding effortlessly through crystal-clear water, a spiral ribbon of glowing pearl bubbles trailing from its fins, expressive friendly eyes, volumetric water caustics dancing across its scales --ar 16:9`

#### Scene 3 — The Wink & Comedic Net Dodge (Frames `051–075`, Progress `0.34–0.50`)
- **Caption (EN):** *Missed Me!* With a cheeky wink at the camera, it sidesteps a drifting net like a seasoned action hero and rockets upward in a cloud of bubbles.
- **Caption (MR):** *पकडून तर दाखवा!* कॅमेऱ्याकडे पाहून मिश्कील डोळा मारत जाळ्यातून चतुराईने निसटणारा क्षण!
- **Keyframe Alt Text:** Witty 3D cartoon fish winking at the camera while comedically dodging a rope net in a burst of silver bubbles.
- **Image Generation Prompt:**
  > `Pixar-style 3D animated comedy beat, close-up of a clever cartoon silver fish giving a cheeky wink to the camera while doing an acrobatic matrix-style dodge around a woven fishing net in the background, kicking its tail to launch a dazzling curtain of silver bubbles across the entire frame for a match-cut --ar 16:9`

#### Scene 4 — Surface Break: Weathered Hands & Slow-Motion Droplets (Frames `076–100`, Progress `0.51–0.66`)
- **Caption (EN):** *The Day's Catch.* Bubbles turn to sunlit spray as weathered fishermen's hands lift the glistening catch above the water at dawn.
- **Caption (MR):** *पहाटेची ताजी जाळी.* पाण्याच्या तुषारांमधून अनुभवी हातांनी उचललेला आजचा ताजा चंदेरी साठा.
- **Keyframe Alt Text:** Match-cut from underwater bubbles to slow-motion water droplets in golden-teal dawn light as weathered hands lift a basket of glistening silver fish.
- **Image Generation Prompt:**
  > `Pixar-style 3D cinema, seamless match-cut from underwater bubbles to thousands of slow-motion diamond water droplets suspended in mid-air at dawn, weathered artisanal fisherman's hands lifting a woven basket of glistening silver fish breaking the water surface, teal water and silver reflections, respectful heroic framing, shallow depth of field --ar 16:9`

#### Scene 5 — Iced, Packed & Loaded at Dawn (Frames `101–125`, Progress `0.67–0.83`)
- **Caption (EN):** *0°C Crystal Ice Chain.* Washed in RO water, layered in chemical-free crushed ice inside insulated Royal Cuts crates, and loaded onto our dawn express van.
- **Caption (MR):** *०°C क्रिस्टल आईस पॅकिंग.* RO पाण्याने स्वच्छ करून थंडगार बर्फाच्या बॉक्समधून फलटणकडे पहाटेच रवाना.
- **Keyframe Alt Text:** Stylised 3D scene of fresh silver fish packed in crushed crystal ice inside a teal insulated crate being loaded into a clean delivery van at dawn.
- **Image Generation Prompt:**
  > `Pixar-style 3D stylized logistics scene at blue-hour dawn, match-cut from falling water droplets to sparkling crushed crystal ice being poured into a clean deep-teal insulated crate neatly packed with fresh silver Surmai and Pomfret, two uniformed staff loading the sealed crate into a clean refrigerated delivery van with warm headlights, frost vapour curling in the cool air --ar 16:9`

#### Scene 6 — Title Card: "Caught fresh. Packed cold. Delivered fast." (Frames `126–150`, Progress `0.84–1.00`)
- **Caption (EN):** *Caught fresh. Packed cold. Delivered fast.* Konkan coastal arrivals & same-day Veer Dam catch.
- **Caption (MR):** *ताजी पकड. थंड पॅकिंग. जलद डिलिव्हरी.* कोकण किनारा आणि वीर धरणातील आजचा ताजा साठा.
- **Keyframe Alt Text:** Cinematic deep charcoal and teal title frame with underwater caustic light reflections reading Caught fresh, Packed cold, Delivered fast.
- **Image Generation Prompt:**
  > `Cinematic 3D title card background, deep charcoal and abyssal teal studio backdrop (#090A0D to #0D9488) with subtle shimmering silver water caustics and floating ice mist, clean negative space for large editorial serif typography, 2.39:1 anamorphic look --ar 16:9`

---

## Film III: `/` (Home Hero Teaser Loop — 36 Frames)
- **Frames:** `001 – 036` (`assets/sequences/home/frame_001.webp` – `frame_036.webp`)
- **Concept:** Split-world cinema teaser—on the left, warm saffron morning mist over Phaltan farms; on the right, cool teal underwater caustics and silver ripples, meeting at a luminous central film-frame divider.
- **Prompt:**
  > `Cinematic split-diopter 3D animation loop, left side glowing warm saffron sunrise mist over Phaltan fields, right side deep teal underwater cathedral light rays and silver water caustics, dark charcoal vignette, 35mm film grain, 2.39:1 widescreen --ar 16:9`

