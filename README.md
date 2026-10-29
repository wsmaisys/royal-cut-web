# Royal Cuts Phaltan — Cinema-Grade Multi-Page Scroll Sequence Website

> **Phaltan’s Premier Fresh Chicken & Fish Trader (`रॉयल कट्स फलटण`)**  
> A bilingual (`English / मराठी`), cinema-grade retail and HoReCa wholesale web platform for **Royal Cuts Phaltan (Dist. Satara, Maharashtra)**, engineered around a lightweight, zero-dependency HTML5 `<canvas>` 2D scroll-scrubbed image-sequence engine (no WebGL or Three.js).

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Key Features & Highlights](#2-key-features--highlights)
3. [Multi-Page Site Architecture](#3-multi-page-site-architecture)
4. [Scroll-Scrubbed `<canvas>` 2D Engine](#4-scroll-scrubbed-canvas-2d-engine)
5. [Storyboards & Visual Direction](#5-storyboards--visual-direction)
6. [Directory & Repository Structure](#6-directory--repository-structure)
7. [Live Stock Board & Configuration Guide](#7-live-stock-board--configuration-guide)
8. [Local Development & Testing](#8-local-development--testing)
9. [Deployment Guide](#9-deployment-guide)
10. [Accessibility, Performance & SEO](#10-accessibility-performance--seo)

---

## 1. Project Overview

**Royal Cuts Phaltan** serves households, hotels, restaurants, and caterers (HoReCa) across **Phaltan, Baramati, Lonand, and Satara district** with:
- **5:00 AM Farm-Fresh Poultry**: Bio-secure broiler cuts and authentic free-range Phaltan *Gavran* (Desi) chicken.
- **Same-Morning Coastal & Reservoir Catch**: Insulated ice-chain deliveries from **Ratnagiri / Konkan ports** (Surmai, Silver Pomfret, Prawns, Bangda) and fresh morning catch from **Veer Dam & Nira River** (Rohu, Katla).
- **2°C Chilled Stainless-Steel Studio**: FSSAI-licensed retail and wholesale cold-chain facility using RO-purified wash water and food-grade vacuum/tray packaging.

Instead of static product banners or heavy 3D WebGL bundles, the website tells two Pixar-inspired 3D animated craft stories—**Film I: *"Farm to Table"*** (`/chicken`) and **Film II: *"Water to Table"*** (`/fish`)—using tasteful lighting and shape **match-cuts** that transition seamlessly from sunlit farms and underwater rays to a spotless 2°C culinary studio and steaming Maharashtrian plates.

---

## 2. Key Features & Highlights

- **Pure HTML5 `<canvas>` 2D Scroll-Sequence Engine**:
  - Smooth `0.10` linear interpolation (`lerp`) with sub-frame alpha cross-blending between adjacent WebP frames.
  - Works with GSAP `ScrollTrigger` (when present) or falls back automatically to its built-in zero-dependency pinned scroll-progress controller.
- **Adaptive Network & Viewport Delivery**:
  - **Desktop Variant**: `150` frames per story (`36` on Home) at `1920×1080` WebP.
  - **Mobile / Data-Saver Variant**: `75` frames per story (`36` on Home) at `960×540` WebP, automatically selected when `max-width: 768px`, `navigator.connection.saveData === true`, or on `2g`/`3g` connections.
- **Progressive Preloading & Offscreen Pausing**:
  - Preloads the first `10` frames upfront to dismiss the branded cinema loader rapidly, then streams remaining frames in the background.
  - Pauses the `requestAnimationFrame` render loop via `IntersectionObserver` whenever the canvas leaves the viewport.
- **Full Bilingual Experience (`English / मराठी`)**:
  - Instant one-click toggle between **English** and **Marathi (`मराठी`)** persisted in `localStorage` (`rc_phaltan_lang`).
  - Translates navigation, cinema scene badges/titles/captions, live stock tables, product cards, cart summaries, and pre-filled WhatsApp order messages.
- **JSON-Driven Live Stock & Daily Rate Board**:
  - Fetches [`data/stock.json`](data/stock.json) with automatic fallback data so the board works both on static hosts and local `file://` previews.
  - Supports retail (`ratePerKg`) and wholesale (`wholesaleRatePerKg`) pricing, stock badges (`available`, `limited`, `soldout`), and automatic `"Call for today's rate"` (`आजच्या दरासाठी कॉल करा`) display when `ratePerKg: null`.
- **Interactive WhatsApp Cart & HoReCa Enquiry Builder**:
  - Customers can add specific cuts (in kg) across Chicken and Fish catalogs and launch a pre-formatted, itemized WhatsApp order (`wa.me`) in either English or Marathi.

---

## 3. Multi-Page Site Architecture

Both clean directory URLs (`/chicken/`) and direct `.html` file routes (`/chicken.html`) are provided out of the box for universal compatibility across GitHub Pages, Netlify, Vercel, Nginx, and local static servers:

| Route | Files | Theme Palette | Description |
| :--- | :--- | :--- | :--- |
| **`/` (Home)** | [`index.html`](index.html) | Split Saffron (`#f59e0b`) & Teal (`#2dd4bf`) | **Hero Cinema Teaser Reel** (`36` WebP frames, 2.39:1 letterbox, 35mm film grain, edge film-strip progress bar), **Split Feature Portals** to `/chicken` and `/fish`, **Live Stock & Catch Board**, and **3-Point Cold-Chain Trust Strip**. |
| **`/chicken`** | [`chicken/index.html`](chicken/index.html)<br>[`chicken.html`](chicken.html) | Warm Amber (`#f59e0b`) & Saffron Gold (`#d97706`) | **Film I: *"Farm to Table"*** (`150` desktop / `75` mobile frames across 6 scenes), interactive Chicken cut catalog (Broiler Curry Cut, Phaltan Gavran, Boneless Tikka, Drumsticks), and live Chicken stock board. |
| **`/fish`** | [`fish/index.html`](fish/index.html)<br>[`fish.html`](fish.html) | Deep Teal (`#0d9488`), Aqua (`#2dd4bf`) & Silver (`#cbd5e1`) | **Film II: *"Water to Table"*** (`150` desktop / `75` mobile frames across 6 scenes), Coastal & Veer Dam Fish catalog (Surmai Steaks, Silver Pomfret, Veer Dam Rohu/Katla, Peeled Prawns), and live Fish catch board. |
| **`/quality`** | [`quality/index.html`](quality/index.html)<br>[`quality.html`](quality.html) | Brushed Steel & Emerald Cold-Chain | **Quality, Cold Chain & Licences**: FSSAI retail & wholesale licence details, ISO 22000:2018 (HACCP) protocols, 0°C–2°C chilled counter workflow, RO water wash standards, and farm/port traceability timelines. |
| **`/contact`** | [`contact/index.html`](contact/index.html)<br>[`contact.html`](contact.html) | Warm Gold & Charcoal Studio | **Contact, Map & HoReCa Enquiry**: Phaltan Ring Road / Main Market Yard location details, morning & evening batch timings, direct WhatsApp order launcher, and interactive retail/wholesale enquiry form. |

---

## 4. Scroll-Scrubbed `<canvas>` 2D Engine

Implemented in [`scroll-sequence.js`](scroll-sequence.js) and configured via [`sequence-config.js`](sequence-config.js):

1. **Frame Indexing & Sub-Frame Blending**:
   $$\text{targetFrame} = \text{scrollProgress} \times (\text{totalFrames} - 1)$$
   The engine interpolates `currentFrame` toward `targetFrame` each tick using `lerpFactor = 0.10` and blends the floor frame with the ceiling frame by the fractional remainder (`alpha = currentFrame - Math.floor(currentFrame)`), eliminating step-jank even during slow scrolling.
2. **2.39:1 Anamorphic Cover Fit**:
   Frames are drawn onto a high-DPI `<canvas>` (`devicePixelRatio` capped at `2.0` for mobile GPU efficiency) with cinema letterbox bars, subtle 35mm film grain overlay, and a vertical film-strip progress indicator along the right edge.
3. **Scene Story Cards & Parallax**:
   As scroll progress passes each scene’s `[start, end]` window, bilingual story cards fade in/out smoothly using `[fadeStart, fadeEnd]` thresholds and vertical parallax translation (`parallaxPx`).
4. **Reduced Motion Accessibility**:
   When the user’s OS has `prefers-reduced-motion: reduce` enabled, the scroll-jacking sequence automatically converts into a static high-resolution hero poster frame with standard vertical scrolling for all story scenes.

---

## 5. Storyboards & Visual Direction

Full scene-by-scene specs, frame ranges, captions, alt text, and image-generation prompts are documented in [`docs/storyboard.md`](docs/storyboard.md).

### Film I: `/chicken` — *"Farm to Table"* (`फार्म ते ताट`)
| Scene | Desktop Frames | Mobile Frames | Progress | Match-Cut & Visual Beat |
| :--- | :---: | :---: | :---: | :--- |
| **01. Dawn Over Golden Fields** | `001–025` | `001–013` | `0.00–0.16` | Rising saffron sun disk over misty Phaltan farms dissolves into the crest of our strutting rooster. |
| **02. Free-Range Royalty** | `026–050` | `014–025` | `0.17–0.33` | Low-angle tracking shot as the plump country bird struts down the farm path trailed by three fluffy chicks. |
| **03. The Selfie Photobomb** | `051–075` | `026–038` | `0.34–0.50` | Comedic wide-angle double-take into the farmer’s phone lens; golden sunlight flares across the frame. |
| **04. 2°C Stainless Precision** | `076–100` | `039–050` | `0.51–0.66` | Golden sun flare match-cuts into a warm brass pendant lamp over a spotless 2°C stainless-steel counter with RO-washed trays. |
| **05. The Sunday Feast** | `101–125` | `051–063` | `0.67–0.83` | Counter reflection morphs into a hammered copper *lagan* bowl of steaming Phaltan *Tambda-Pandhra Rassa* & golden roast. |
| **06. Fresh from Phaltan** | `126–150` | `064–075` | `0.84–1.00` | Swirling aromatic steam parts to reveal the charcoal-and-saffron title card and WhatsApp order CTA. |

### Film II: `/fish` — *"Water to Table"* (`पाण्यापासून ताटापर्यंत`)
| Scene | Desktop Frames | Mobile Frames | Progress | Match-Cut & Visual Beat |
| :--- | :---: | :---: | :---: | :--- |
| **01. Beneath Emerald Waters** | `001–025` | `001–013` | `0.00–0.16` | Volumetric sunbeams pierce deep teal water as a silver school parts to reveal our hero fish. |
| **02. Silver Glide & Pearls** | `026–050` | `014–025` | `0.17–0.33` | Hero fish spirals gracefully toward the lens leaving pearl-like bubble trails. |
| **03. The Cheeky Wink** | `051–075` | `026–038` | `0.34–0.50` | Playful wink and tail-flick unleashes a curtain of silver bubbles that fills the lens. |
| **04. Surface Splash to Flake Ice** | `076–100` | `039–050` | `0.51–0.66` | Airborne water droplets freeze mid-air and match-cut into crystal flake ice inside a food-grade insulated crate. |
| **05. Dawn Cold-Chain Dispatch** | `101–125` | `051–063` | `0.67–0.83` | Insulated crates are loaded into the refrigerated Royal Cuts van at dawn, heading straight to Phaltan Market Yard. |
| **06. Ocean & Dam to Plate** | `126–150` | `064–075` | `0.84–1.00` | Shimmering teal caustics and silver mist frame the final title card and coastal/reservoir order CTA. |

---

## 6. Directory & Repository Structure

```text
royal-cut-web/
├── index.html                     # Home page (Cinema teaser reel, Story portals, Live stock board)
├── chicken.html                   # Direct route for Film I: "Farm to Table"
├── fish.html                      # Direct route for Film II: "Water to Table"
├── quality.html                   # Direct route for Quality, Cold-Chain & FSSAI Licences
├── contact.html                   # Direct route for Contact, Map & HoReCa Enquiry
├── chicken/
│   └── index.html                 # Clean directory route (/chicken/)
├── fish/
│   └── index.html                 # Clean directory route (/fish/)
├── quality/
│   └── index.html                 # Clean directory route (/quality/)
├── contact/
│   └── index.html                 # Clean directory route (/contact/)
├── styles.css                     # Master cinema dark-mode stylesheet, responsive grid & letterbox UI
├── sequence-config.js             # Single source of truth: brand info, sequence paths, scenes & catalog
├── scroll-sequence.js             # <canvas> 2D sequence engine, bilingual controller, stock & WhatsApp cart
├── data/
│   └── stock.json                 # Live editable daily stock & retail/wholesale rate feed
├── docs/
│   ├── storyboard.md              # Full 12-scene storyboard, match-cut specs & AI generation prompts
│   └── PENDING_AI_KEYFRAMES.md    # Keyframe rendering log & asset pipeline notes
└── assets/
    ├── keyframes/                 # 12 master Pixar-style 3D keyframes (chicken_scene_01..06, fish_scene_01..06)
    ├── sequences/
    │   ├── home/
    │   │   ├── desktop/           # 36 WebP frames (frame_001.webp – frame_036.webp @ 1920×1080)
    │   │   └── mobile/            # 36 WebP frames (frame_001.webp – frame_036.webp @ 960×540)
    │   ├── chicken/
    │   │   ├── desktop/           # 150 WebP frames (frame_001.webp – frame_150.webp @ 1920×1080)
    │   │   └── mobile/            # 75 WebP frames (frame_001.webp – frame_075.webp @ 960×540)
    │   └── fish/
    │       ├── desktop/           # 150 WebP frames (frame_001.webp – frame_150.webp @ 1920×1080)
    │       └── mobile/            # 75 WebP frames (frame_001.webp – frame_075.webp @ 960×540)
    ├── chicken-cuts.jpg           # Product & culinary photography fallbacks
    ├── fish-cuts.jpg
    ├── hero-chicken.jpg
    ├── hero-seafood.jpg
    ├── phaltan-hero.jpg
    └── wholesale-supply.jpg
```

---

## 7. Live Stock Board & Configuration Guide

### Updating Daily Rates & Stock Availability ([`data/stock.json`](data/stock.json))

Edit [`data/stock.json`](data/stock.json) to update the morning or evening batch rates without touching any HTML or JavaScript:

```json
{
  "id": "chk-broiler-curry",
  "category": "chicken",
  "nameEn": "Farm-Fresh Broiler Chicken (Skinless Curry Cut)",
  "nameMr": "फार्म-फ्रेश ब्रॉयलर चिकन (स्किनलेस करी कट)",
  "originEn": "Phaltan & Baramati Bio-Secure Farms",
  "originMr": "फलटण व बारामती बायो-सिक्युअर फार्म",
  "status": "available",
  "statusLabelEn": "In Stock • 5:30 AM Batch",
  "statusLabelMr": "उपलब्ध • पहाटे ५:३० बॅच",
  "ratePerKg": 220,
  "wholesaleRatePerKg": 180,
  "unit": "kg"
}
```

- **Status Options**: `"available"` (green badge), `"limited"` (amber badge), or `"soldout"` (muted red badge).
- **Market-Linked / Dynamic Rates**: Set `"ratePerKg": null` (e.g., for export-grade Silver Pomfret) to automatically display **"Call for today's rate" (`आजच्या दरासाठी कॉल करा`)** with a direct click-to-call / WhatsApp link.

### Updating Brand Details, Phone Numbers & Licences ([`sequence-config.js`](sequence-config.js))

Open [`sequence-config.js`](sequence-config.js) and update the `window.ROYAL_CUTS_CONFIG.brand` object at the top of the file:

- `phoneDisplay` & `whatsappNumber`: Updates all click-to-call links, sticky WhatsApp buttons, and cart checkout targets across every page.
- `addressEn` & `addressMr`: Updates the footer and `/contact` location cards in both languages.
- `fssaiRetail`, `fssaiWholesale`, `shopActLicence`, `isoCert`: Updates the licence badges on `/quality` and the site footer.

---

## 8. Local Development & Testing

Because this project is built with vanilla HTML5, CSS3, and ES6 JavaScript with zero build-step dependencies, you can run it immediately with any static file server:

### Option 1: Using Python (Built-in)
```bash
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

### Option 2: Using Node.js (`npx serve`)
```bash
npx serve . -l 8080
```

### Option 3: Direct File Preview
All pages include embedded fallback stock data and relative path resolution (`data-root-prefix`), so double-clicking [`index.html`](index.html) directly from your filesystem also works cleanly.

---

## 9. Deployment Guide

The repository is pre-configured for zero-config static hosting:

- **GitHub Pages**:
  1. Go to **Settings → Pages** in your GitHub repository (`https://github.com/wsmaisys/royal-cut-web`).
  2. Under **Build and deployment**, select **Deploy from a branch**.
  3. Select the `main` branch and `/ (root)` folder, then click **Save**.
- **Netlify / Vercel / Cloudflare Pages**:
  - **Build Command**: *(leave empty — no build step required)*
  - **Output / Publish Directory**: `.` (root directory)

---

## 10. Accessibility, Performance & SEO

- **Semantic Landmarks & ARIA**: Accessible `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` landmarks, live-region announcements for cart updates, and descriptive bilingual alt text for every sequence scene.
- **Reduced Motion Support**: Honours `prefers-reduced-motion: reduce` by disabling scroll-scrubbed canvas pinning and presenting a clean static keyframe layout.
- **Adaptive Bandwidth Management**: Automatically serves 50% fewer frames at quarter-resolution (`960×540` WebP) on mobile screens or when `Save-Data` / slow cellular connections (`2G`/`3G`) are detected.
- **Zero External JS Frameworks Required**: Instant initial paint with no heavy framework hydration or WebGL shader compilation blocks.
