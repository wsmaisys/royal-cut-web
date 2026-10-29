# Royal Cuts Phaltan — Cinema-Grade Multi-Page Scroll Sequence Website

A multi-page retail and HoReCa wholesale website for **Royal Cuts Phaltan (Chicken & Fish Trader in Phaltan, Maharashtra)** built on a lightweight HTML5 `<canvas>` 2D scroll-scrubbed image-sequence architecture (no WebGL or Three.js).

## 1. Multi-Page Site Structure

- [`/` (`index.html`)](index.html) — **Home (Short & Brief ~3 Screens)**:
  1. **Hero Cinema Teaser Reel** (`36` WebP frames, 2.39:1 letterbox, 35mm film grain, edge film-strip progress indicator).
  2. **Two Split Feature Portals** linking to `/chicken` (*"Film I: Farm to Table"*) and `/fish` (*"Film II: Water to Table"*), plus the JSON-driven **Today's Catch & Fresh Stock Board** ([`data/stock.json`](data/stock.json)).
  3. **Three-Point Trust Strip** (*Fresh Daily / Hygienic Cold Chain / Licensed & Traceable*) with a sticky WhatsApp CTA.
- [`/chicken` (`chicken/index.html` & `chicken.html`)](chicken/index.html) — **Film I: "Farm to Table"**:
  - Warm amber/saffron palette (`#f59e0b` / `#d97706`), 6-scene scroll-scrubbed 3D-cartoon sequence (`150` desktop frames @ `1920×1080` WebP / `75` mobile frames @ `960×540` WebP), Chicken cut catalog, and live Chicken stock board.
- [`/fish` (`fish/index.html` & `fish.html`)](fish/index.html) — **Film II: "Water to Table"**:
  - Deep teal and silver palette (`#2dd4bf` / `#0d9488` / `#cbd5e1`), 6-scene scroll-scrubbed 3D-cartoon sequence (`150` desktop frames @ `1920×1080` WebP / `75` mobile frames @ `960×540` WebP), Coastal & Veer Dam Fish catalog, and live Fish catch board.
- [`/quality` (`quality/index.html` & `quality.html`)](quality/index.html) — **Quality, Cold Chain & Licences**:
  - FSSAI retail & wholesale licence details, 0°C–2°C stainless-steel studio protocol, RO purified water wash, and Phaltan/Ratnagiri/Veer Dam sourcing traceability.
- [`/contact` (`contact/index.html` & `contact.html`)](contact/index.html) — **Contact, Map & Enquiry**:
  - Phaltan Ring Road / Main Market Yard location map, direct WhatsApp order button, and retail/HoReCa enquiry form.

## 2. Key Configuration Files

- [`sequence-config.js`](sequence-config.js) — Single source of truth for frame paths, desktop/mobile frame counts, lerp factor (`0.10`), scene progress & fade ranges, bilingual copy (`English / मराठी`), and product catalog.
- [`data/stock.json`](data/stock.json) — Live editable JSON feed for the "Today's Catch / Today's Fresh Stock" board. Set `ratePerKg: null` on any item to display `"Call for today's rate"` (`आजच्या दरासाठी कॉल करा`).
- [`docs/storyboard.md`](docs/storyboard.md) — Complete scene-by-scene frame ranges, match-cut descriptions, captions, alt text, and image-generation prompts.
