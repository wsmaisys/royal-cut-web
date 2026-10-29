/**
 * ROYAL CUTS PHALTAN — Cinema Scroll-Scrubbed Sequence Engine, Bilingual Controller & Live Stock Board
 * Architecture: HTML5 <canvas> 2D (No WebGL / Three.js)
 * Features:
 *  - Progressive Preloader: Loads first 10 frames immediately, hides branded loader, then lazy-loads remaining frames
 *  - Adaptive Variant Selection: 1920x1080 (150 frames) on Desktop vs 960x540 (75 frames) on Mobile / Save-Data / 2G-3G
 *  - Lerp Smoothing (~0.10): Draws index = scrollProgress * (totalFrames - 1) with sub-frame alpha blending
 *  - GSAP ScrollTrigger Integration (if loaded) or built-in lightweight pinned scroll-progress controller
 *  - Respects `prefers-reduced-motion: reduce` with static poster frame + normal scroll layout
 *  - Offscreen Canvas Loop Pausing via IntersectionObserver / contentvisibilityautostatechange
 *  - Bilingual Toggle (English / मराठी) persisted across all 5 pages
 */

(function () {
  'use strict';

  const CONFIG = window.ROYAL_CUTS_CONFIG;
  if (!CONFIG) return;

  const ROOT_PREFIX = document.documentElement.dataset.rootPrefix || '';

  function resolvePath(relPath) {
    if (!relPath) return '';
    if (/^(https?:|data:|blob:|\/)/i.test(relPath)) return relPath;
    return ROOT_PREFIX + relPath;
  }

  function formatFrameNumber(num) {
    return String(num).padStart(3, '0');
  }

  /* ==========================================================================
     1. BILINGUAL CONTROLLER (English / मराठी)
     ========================================================================== */
  let currentLang = 'en';
  try {
    const saved = localStorage.getItem('rc_phaltan_lang');
    if (saved === 'en' || saved === 'mr') currentLang = saved;
  } catch (_) {}

  function applyLanguage(lang) {
    currentLang = lang === 'mr' ? 'mr' : 'en';
    document.documentElement.lang = currentLang;
    try {
      localStorage.setItem('rc_phaltan_lang', currentLang);
    } catch (_) {}

    // Update all declarative [data-en] / [data-mr] elements
    document.querySelectorAll('[data-en]').forEach((el) => {
      const text = currentLang === 'mr' ? el.getAttribute('data-mr') || el.getAttribute('data-en') : el.getAttribute('data-en');
      if (text !== null) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // Update language toggle pills
    document.querySelectorAll('.lang-toggle').forEach((btn) => {
      const pillEn = btn.querySelector('[data-lang-pill="en"]');
      const pillMr = btn.querySelector('[data-lang-pill="mr"]');
      if (pillEn) pillEn.classList.toggle('active', currentLang === 'en');
      if (pillMr) pillMr.classList.toggle('active', currentLang === 'mr');
      btn.setAttribute(
        'aria-label',
        currentLang === 'en' ? 'Switch language to Marathi (मराठी)' : 'Switch language to English'
      );
    });

    // Re-render dynamic components
    renderDynamicScenesText();
    renderLiveStockBoard(cachedStockData);
    renderProductCatalog();
    updateWhatsAppStickyButton();
  }

  /* ==========================================================================
     2. WHATSAPP ORDER & CART STATE
     ========================================================================== */
  const cart = new Map();

  function getAllProducts() {
    return [...(CONFIG.products.chicken || []), ...(CONFIG.products.fish || [])];
  }

  function buildWhatsAppUrl(customMessage) {
    const phone = CONFIG.brand.whatsappNumber;
    if (customMessage) {
      return `https://wa.me/${phone}?text=${encodeURIComponent(customMessage)}`;
    }

    const lines = [
      currentLang === 'mr'
        ? '*नमस्कार रॉयल कट्स फलटण! मला ताजे चिकन / मासे ऑर्डर करायचे आहेत:*'
        : '*Hello Royal Cuts Phaltan! I would like to place a fresh order:*'
    ];

    let totalKg = 0;
    let totalRs = 0;
    let hasCallForRateItem = false;

    cart.forEach((qty, id) => {
      const item = getAllProducts().find((p) => p.id === id);
      if (item && qty > 0) {
        totalKg += qty;
        const name = currentLang === 'mr' ? item.nameMr : item.nameEn;
        if (typeof item.price === 'number' && item.price > 0) {
          const sub = qty * item.price;
          totalRs += sub;
          lines.push(`• ${name}: ${qty} kg (₹${sub})`);
        } else {
          hasCallForRateItem = true;
          lines.push(
            `• ${name}: ${qty} kg (${currentLang === 'mr' ? CONFIG.ui.callForRateMr : CONFIG.ui.callForRateEn})`
          );
        }
      }
    });

    if (totalKg === 0) {
      const pageType = document.body.dataset.page || 'home';
      if (pageType === 'chicken') {
        lines.push(
          currentLang === 'mr'
            ? 'कृपया आजचे ताजे ब्रॉयलर व गावरान चिकन दर आणि डिलिव्हरी वेळ सांगा.'
            : 'Please share today’s fresh Broiler & Phaltan Gavran chicken rates and delivery slot.'
        );
      } else if (pageType === 'fish') {
        lines.push(
          currentLang === 'mr'
            ? 'कृपया आजचे ताजे सुरमई, पापलेट आणि वीर डॅम माशांचे दर सांगा.'
            : 'Please share today’s fresh Surmai, Pomfret & Veer Dam fish catch rates.'
        );
      } else {
        lines.push(
          currentLang === 'mr'
            ? 'कृपया आजचे ताजे चिकन आणि माशांचे दर पाठवा (फलटण होम डिलिव्हरी).'
            : 'Please share today’s fresh Chicken & Fish stock rates for Phaltan delivery.'
        );
      }
    } else {
      if (totalRs > 0) {
        lines.push(
          currentLang === 'mr'
            ? `*एकूण अंदाजे रक्कम: ₹${totalRs}${hasCallForRateItem ? ' + आजचे बाजारभाव' : ''}*`
            : `*Estimated Total: ₹${totalRs}${hasCallForRateItem ? " + today's market rate items" : ''}*`
        );
      }
      lines.push(currentLang === 'mr' ? 'डिलिव्हरी परिसर: फलटण' : 'Delivery Location: Phaltan');
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  function updateWhatsAppStickyButton() {
    const btn = document.getElementById('sticky-whatsapp-btn');
    const labelEl = document.getElementById('sticky-whatsapp-label');
    if (!btn || !labelEl) return;

    let totalKg = 0;
    let totalRs = 0;
    cart.forEach((qty, id) => {
      const item = getAllProducts().find((p) => p.id === id);
      if (item && qty > 0) {
        totalKg += qty;
        if (typeof item.price === 'number' && item.price > 0) {
          totalRs += qty * item.price;
        }
      }
    });

    if (totalKg === 0) {
      labelEl.textContent = currentLang === 'mr' ? CONFIG.ui.orderNowMr : CONFIG.ui.orderNowEn;
    } else {
      labelEl.textContent =
        currentLang === 'mr'
          ? `व्हॉट्सॲप ऑर्डर (${totalKg} किलो${totalRs > 0 ? ' • ₹' + totalRs : ''})`
          : `Order Now (${totalKg} kg${totalRs > 0 ? ' • ₹' + totalRs : ''})`;
    }

    btn.href = buildWhatsAppUrl();
  }

  /* ==========================================================================
     3. SCROLL-SCRUBBED IMAGE SEQUENCE ENGINE (<canvas>)
     ========================================================================== */
  let activeSequenceController = null;

  class CanvasScrollSequence {
    constructor(seqConfig) {
      this.config = seqConfig;
      this.canvas = document.getElementById('sequence-canvas');
      this.runway = document.getElementById('scroll-runway');
      this.loaderEl = document.getElementById('cinema-loader');
      this.loaderFillEl = document.getElementById('loader-bar-fill');
      this.loaderTextEl = document.getElementById('loader-status-text');
      this.overlaysContainer = document.getElementById('scene-overlays-layer');
      this.sprocketContainer = document.getElementById('film-sprocket-list');
      this.readoutEl = document.getElementById('film-strip-readout');
      this.liveAltEl = document.getElementById('canvas-live-alt');

      if (!this.canvas || !this.runway) return;

      this.ctx = this.canvas.getContext('2d', { alpha: false });
      this.reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.isReducedMotion = this.reducedMotionQuery.matches;

      // Choose desktop (1920x1080, 150 frames) vs mobile/saveData (960x540, 75 frames)
      this.variant = this.selectVariant();
      this.totalFrames = this.variant.totalFrames;
      this.lerpFactor = seqConfig.lerpFactor || 0.1;
      this.initialPreloadCount = Math.min(seqConfig.initialPreloadCount || 10, this.totalFrames);

      this.frames = new Array(this.totalFrames).fill(null);
      this.loadedCount = 0;
      this.initialBatchReady = false;
      this.lazyLoadStarted = false;

      this.scrollProgress = 0;
      this.targetFrame = 0;
      this.currentFrame = 0;
      this.lastDrawnFrameKey = -1;
      this.isVisibleInViewport = true;
      this.rafId = null;

      this.buildSceneDOM();
      this.resizeCanvas();
      this.bindEvents();
      this.startProgressivePreload();

      if (this.isReducedMotion) {
        this.enableReducedMotionMode();
      } else {
        this.updateScrollProgress();
        this.startRenderLoop();
      }
    }

    selectVariant() {
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const isSlowConn =
        conn && (conn.saveData === true || ['slow-2g', '2g', '3g'].includes(conn.effectiveType));
      return isSmallScreen || isSlowConn ? this.config.mobile : this.config.desktop;
    }

    getFrameUrl(oneBasedIndex) {
      const padded = formatFrameNumber(oneBasedIndex);
      const rel = this.variant.pathTemplate.replace('{000}', padded);
      return resolvePath(rel);
    }

    buildSceneDOM() {
      if (this.overlaysContainer) {
        this.overlaysContainer.innerHTML = this.config.scenes
          .map((sc) => {
            const badge = currentLang === 'mr' ? sc.badgeMr : sc.badgeEn;
            const title = currentLang === 'mr' ? sc.titleMr : sc.titleEn;
            const caption = currentLang === 'mr' ? sc.captionMr : sc.captionEn;
            const ctaText = currentLang === 'mr' ? sc.ctaMr : sc.ctaEn;
            const ctaHtml = sc.ctaHref
              ? `<a href="${sc.ctaHref}" class="btn-primary-sm" data-scene-cta="${sc.id}">${ctaText}</a>`
              : '';
            return `
              <article
                class="scene-caption-card align-${sc.align || 'bottom-left'}"
                id="card-${sc.id}"
                data-scene-id="${sc.id}"
                aria-hidden="true"
              >
                <span class="scene-badge" data-scene-badge="${sc.id}">${badge}</span>
                <h2 class="scene-title" data-scene-title="${sc.id}">${title}</h2>
                <p class="scene-body" data-scene-caption="${sc.id}">${caption}</p>
                ${ctaHtml}
              </article>
            `;
          })
          .join('');
      }

      if (this.sprocketContainer) {
        this.sprocketContainer.innerHTML = this.config.scenes
          .map(
            (sc, idx) => `
              <button
                type="button"
                class="film-sprocket-btn ${idx === 0 ? 'active' : ''}"
                data-jump-progress="${(sc.start + sc.end) * 0.5}"
                aria-label="Scene ${sc.index}: ${sc.titleEn}"
                title="${sc.titleEn}"
              >
                0${sc.index}
              </button>
            `
          )
          .join('');

        this.sprocketContainer.querySelectorAll('[data-jump-progress]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const targetP = parseFloat(btn.getAttribute('data-jump-progress') || '0');
            const rect = this.runway.getBoundingClientRect();
            const runwayTop = window.scrollY + rect.top;
            const maxScroll = Math.max(1, this.runway.offsetHeight - window.innerHeight);
            window.scrollTo({
              top: runwayTop + targetP * maxScroll,
              behavior: this.isReducedMotion ? 'auto' : 'smooth'
            });
          });
        });
      }
    }

    resizeCanvas() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.max(1, Math.floor(window.innerWidth * dpr));
      const h = Math.max(1, Math.floor(window.innerHeight * dpr));
      if (this.canvas.width !== w || this.canvas.height !== h) {
        this.canvas.width = w;
        this.canvas.height = h;
        this.lastDrawnFrameKey = -1;
      }
    }

    bindEvents() {
      window.addEventListener(
        'resize',
        () => {
          this.resizeCanvas();
          this.drawCurrentFrame(true);
        },
        { passive: true }
      );

      // Use GSAP ScrollTrigger if externally provided, or lightweight native passive scroll listener
      if (window.gsap && window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
        window.ScrollTrigger.create({
          trigger: this.runway,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          onUpdate: (self) => {
            this.setScrollProgress(self.progress);
          }
        });
      } else {
        window.addEventListener(
          'scroll',
          () => {
            this.updateScrollProgress();
          },
          { passive: true }
        );
      }

      // Pause canvas loop when scrolled completely off-screen (Modern Web Guidance best practice)
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              this.isVisibleInViewport = entry.isIntersecting;
              if (this.isVisibleInViewport && !this.rafId && !this.isReducedMotion) {
                this.startRenderLoop();
              }
            });
          },
          { rootMargin: '200px' }
        );
        observer.observe(this.runway);
      }

      if (this.reducedMotionQuery.addEventListener) {
        this.reducedMotionQuery.addEventListener('change', (e) => {
          this.isReducedMotion = e.matches;
          if (this.isReducedMotion) {
            this.enableReducedMotionMode();
          } else {
            this.startRenderLoop();
          }
        });
      }
    }

    updateScrollProgress() {
      const rect = this.runway.getBoundingClientRect();
      const maxScroll = this.runway.offsetHeight - window.innerHeight;
      const raw = maxScroll > 0 ? -rect.top / maxScroll : 0;
      this.setScrollProgress(Math.max(0, Math.min(1, raw)));
    }

    setScrollProgress(p) {
      this.scrollProgress = Math.max(0, Math.min(1, p));
      this.targetFrame = this.scrollProgress * (this.totalFrames - 1);
      this.updateOverlaysAndTimeline(this.scrollProgress);
    }

    startProgressivePreload() {
      // Step 1: Immediately preload the first 10 frames (0 .. initialPreloadCount - 1)
      let firstBatchLoaded = 0;
      for (let i = 0; i < this.initialPreloadCount; i++) {
        this.loadSingleFrame(i, () => {
          firstBatchLoaded++;
          const pct = Math.round((firstBatchLoaded / this.initialPreloadCount) * 100);
          if (this.loaderFillEl) this.loaderFillEl.style.width = `${pct}%`;
          if (i === 0) {
            this.lastDrawnFrameKey = -1;
            this.drawCurrentFrame(true);
          }
          if (firstBatchLoaded >= this.initialPreloadCount && !this.initialBatchReady) {
            this.initialBatchReady = true;
            if (this.loaderEl) this.loaderEl.classList.add('loaded');
            this.lazyLoadRemainingFrames();
          }
        });
      }
    }

    lazyLoadRemainingFrames() {
      if (this.lazyLoadStarted) return;
      this.lazyLoadStarted = true;

      let nextIndex = this.initialPreloadCount;
      const concurrency = 4;

      const loadNext = () => {
        if (nextIndex >= this.totalFrames) return;
        const idx = nextIndex++;
        this.loadSingleFrame(idx, () => {
          if (Math.abs(idx - Math.round(this.currentFrame)) <= 1) {
            this.lastDrawnFrameKey = -1;
          }
          loadNext();
        });
      };

      const startWorkers = () => {
        for (let w = 0; w < concurrency; w++) {
          loadNext();
        }
      };

      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(startWorkers, { timeout: 600 });
      } else {
        setTimeout(startWorkers, 120);
      }
    }

    loadSingleFrame(zeroBasedIndex, onDone) {
      const img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        this.frames[zeroBasedIndex] = img;
        this.loadedCount++;
        if (onDone) onDone(img);
      };
      img.onerror = () => {
        // Fallback: generate procedural canvas frame if custom path is missing
        this.frames[zeroBasedIndex] = this.createProceduralFallbackFrame(zeroBasedIndex);
        this.loadedCount++;
        if (onDone) onDone(this.frames[zeroBasedIndex]);
      };
      img.src = this.getFrameUrl(zeroBasedIndex + 1);
    }

    createProceduralFallbackFrame(idx) {
      const off = document.createElement('canvas');
      off.width = 960;
      off.height = 540;
      const c = off.getContext('2d');
      const p = idx / Math.max(1, this.totalFrames - 1);
      const grad = c.createRadialGradient(480, 240, 40, 480, 270, 520);
      grad.addColorStop(0, this.config.accentColor || '#f59e0b');
      grad.addColorStop(1, '#090a0d');
      c.fillStyle = grad;
      c.fillRect(0, 0, 960, 540);
      c.fillStyle = 'rgba(255,255,255,0.18)';
      c.beginPath();
      c.arc(280 + p * 400, 270, 70, 0, Math.PI * 2);
      c.fill();
      return off;
    }

    findNearestLoadedFrame(targetIdx) {
      if (this.frames[targetIdx]) return this.frames[targetIdx];
      for (let offset = 1; offset < this.totalFrames; offset++) {
        if (targetIdx - offset >= 0 && this.frames[targetIdx - offset]) {
          return this.frames[targetIdx - offset];
        }
        if (targetIdx + offset < this.totalFrames && this.frames[targetIdx + offset]) {
          return this.frames[targetIdx + offset];
        }
      }
      return null;
    }

    drawCoverImage(source, alpha = 1) {
      if (!source) return;
      const cw = this.canvas.width;
      const ch = this.canvas.height;
      const sw = source.naturalWidth || source.width || 1920;
      const sh = source.naturalHeight || source.height || 1080;

      const scale = Math.max(cw / sw, ch / sh);
      const dw = sw * scale;
      const dh = sh * scale;
      const dx = (cw - dw) * 0.5;
      const dy = (ch - dh) * 0.5;

      this.ctx.globalAlpha = alpha;
      this.ctx.drawImage(source, dx, dy, dw, dh);
    }

    drawCurrentFrame(force = false) {
      const quantized = Math.round(this.currentFrame * 25) / 25;
      if (!force && quantized === this.lastDrawnFrameKey) return;

      const baseIdx = Math.max(0, Math.min(this.totalFrames - 1, Math.floor(this.currentFrame)));
      const nextIdx = Math.max(0, Math.min(this.totalFrames - 1, baseIdx + 1));
      const frac = this.currentFrame - baseIdx;

      const baseImg = this.findNearestLoadedFrame(baseIdx);
      const nextImg = this.frames[nextIdx] || baseImg;

      if (!baseImg) return;

      this.drawCoverImage(baseImg, 1);
      if (frac > 0.02 && nextImg && nextImg !== baseImg) {
        this.drawCoverImage(nextImg, frac);
        this.ctx.globalAlpha = 1;
      }

      this.lastDrawnFrameKey = quantized;

      if (this.readoutEl) {
        const displayFrame = formatFrameNumber(Math.round(this.currentFrame) + 1);
        const displayTotal = formatFrameNumber(this.totalFrames);
        this.readoutEl.textContent = `${displayFrame}/${displayTotal}`;
      }
    }

    updateOverlaysAndTimeline(progress) {
      let activeScene = this.config.scenes[0];

      this.config.scenes.forEach((sc) => {
        const card = document.getElementById(`card-${sc.id}`);
        if (!card) return;

        const inRange = progress >= sc.start && progress <= sc.end;
        if (inRange) activeScene = sc;

        // Smooth fade-in and fade-out at configured progress ranges + vertical parallax
        let alpha = 0;
        if (this.isReducedMotion) {
          alpha = sc.index === 1 ? 1 : 0;
        } else if (progress >= sc.start && progress <= sc.end) {
          const fadeInSpan = Math.max(0.02, (sc.fadeStart || sc.start + 0.02) - sc.start);
          const fadeOutSpan = Math.max(0.02, sc.end - (sc.fadeEnd || sc.end - 0.02));
          if (progress < sc.start + fadeInSpan) {
            alpha = (progress - sc.start) / fadeInSpan;
          } else if (progress > sc.end - fadeOutSpan) {
            alpha = (sc.end - progress) / fadeOutSpan;
          } else {
            alpha = 1;
          }
          alpha = Math.max(0, Math.min(1, alpha));
        }

        const mid = (sc.start + sc.end) * 0.5;
        const normalizedOffset = (progress - mid) / Math.max(0.05, sc.end - sc.start);
        const yShift = this.isReducedMotion ? 0 : -normalizedOffset * (sc.parallaxPx || 20);

        card.style.opacity = alpha.toFixed(3);
        card.style.transform = `translateY(${yShift.toFixed(1)}px)`;
        card.classList.toggle('is-interactive', alpha > 0.35);
        card.setAttribute('aria-hidden', alpha > 0.25 ? 'false' : 'true');
      });

      // Update film-strip edge sprockets
      if (this.sprocketContainer && activeScene) {
        const btns = this.sprocketContainer.querySelectorAll('.film-sprocket-btn');
        btns.forEach((btn, idx) => {
          btn.classList.toggle('active', idx + 1 === activeScene.index);
        });
      }

      // Update accessible keyframe alt description
      if (activeScene) {
        const altText = currentLang === 'mr' ? activeScene.altMr : activeScene.altEn;
        this.canvas.setAttribute('aria-label', altText);
        if (this.liveAltEl && this.liveAltEl.textContent !== altText) {
          this.liveAltEl.textContent = altText;
        }
      }
    }

    enableReducedMotionMode() {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
      this.currentFrame = 0;
      this.drawCurrentFrame(true);
      this.updateOverlaysAndTimeline(0.05);

      // Populate static storyboard cards below hero for reduced-motion users
      const sbContainer = document.getElementById('reduced-motion-storyboard');
      if (sbContainer && this.config.scenes.length > 1) {
        sbContainer.style.display = 'grid';
        sbContainer.innerHTML = this.config.scenes
          .map((sc) => {
            const badge = currentLang === 'mr' ? sc.badgeMr : sc.badgeEn;
            const title = currentLang === 'mr' ? sc.titleMr : sc.titleEn;
            const caption = currentLang === 'mr' ? sc.captionMr : sc.captionEn;
            return `
              <article class="info-card">
                <span class="scene-badge">${badge}</span>
                <h3>${title}</h3>
                <p style="color: var(--text-secondary);">${caption}</p>
              </article>
            `;
          })
          .join('');
      }
    }

    startRenderLoop() {
      if (this.rafId || this.isReducedMotion) return;

      const tick = () => {
        if (!this.isVisibleInViewport || this.isReducedMotion) {
          this.rafId = null;
          return;
        }

        // Lerp smoothing (~0.10): currentFrame += (targetFrame - currentFrame) * lerpFactor
        const diff = this.targetFrame - this.currentFrame;
        if (Math.abs(diff) > 0.001) {
          this.currentFrame += diff * this.lerpFactor;
        } else {
          this.currentFrame = this.targetFrame;
        }

        this.drawCurrentFrame(false);
        this.rafId = requestAnimationFrame(tick);
      };

      this.rafId = requestAnimationFrame(tick);
    }
  }

  function renderDynamicScenesText() {
    if (!activeSequenceController) return;
    const seq = activeSequenceController.config;
    seq.scenes.forEach((sc) => {
      const badgeEl = document.querySelector(`[data-scene-badge="${sc.id}"]`);
      const titleEl = document.querySelector(`[data-scene-title="${sc.id}"]`);
      const capEl = document.querySelector(`[data-scene-caption="${sc.id}"]`);
      const ctaEl = document.querySelector(`[data-scene-cta="${sc.id}"]`);
      if (badgeEl) badgeEl.textContent = currentLang === 'mr' ? sc.badgeMr : sc.badgeEn;
      if (titleEl) titleEl.textContent = currentLang === 'mr' ? sc.titleMr : sc.titleEn;
      if (capEl) capEl.textContent = currentLang === 'mr' ? sc.captionMr : sc.captionEn;
      if (ctaEl) ctaEl.textContent = currentLang === 'mr' ? sc.ctaMr : sc.ctaEn;
    });
    activeSequenceController.updateOverlaysAndTimeline(activeSequenceController.scrollProgress);
  }

  /* ==========================================================================
     4. LIVE "TODAY'S CATCH / TODAY'S FRESH STOCK" BOARD (JSON-DRIVEN)
     ========================================================================== */
  let cachedStockData = CONFIG.fallbackStock;

  async function loadAndRenderStockBoard() {
    const tableBody = document.getElementById('live-stock-tbody');
    if (!tableBody) return;

    try {
      const response = await fetch(resolvePath(CONFIG.brand.stockJsonPath), { cache: 'no-store' });
      if (response.ok) {
        cachedStockData = await response.json();
      }
    } catch (_) {
      // Fallback to CONFIG.fallbackStock when opened directly via file://
    }

    renderLiveStockBoard(cachedStockData);
  }

  function formatPriceOrCallLink(rate, itemName) {
    if (typeof rate === 'number' && rate > 0) {
      return `<span class="price-val">₹${rate} <small style="font-size:0.74rem; color:var(--text-muted);">/ kg</small></span>`;
    }
    const callText = currentLang === 'mr' ? CONFIG.ui.callForRateMr : CONFIG.ui.callForRateEn;
    const msg =
      currentLang === 'mr'
        ? `नमस्कार रॉयल कट्स फलटण! कृपया "${itemName}" चा आजचा ताजा दर सांगा.`
        : `Hello Royal Cuts Phaltan! Please share today's rate for "${itemName}".`;
    return `<a href="${buildWhatsAppUrl(msg)}" target="_blank" rel="noopener" class="call-rate-link">${callText}</a>`;
  }

  function renderLiveStockBoard(stockData) {
    const tableBody = document.getElementById('live-stock-tbody');
    if (!tableBody || !stockData || !Array.isArray(stockData.items)) return;

    const filterCat = tableBody.dataset.stockCategory || 'all';
    const items =
      filterCat === 'all'
        ? stockData.items
        : stockData.items.filter((item) => item.category === filterCat);

    const updatedEl = document.getElementById('stock-last-updated');
    if (updatedEl) {
      updatedEl.textContent =
        currentLang === 'mr' ? stockData.lastUpdatedMr : stockData.lastUpdatedEn;
    }

    tableBody.innerHTML = items
      .map((item) => {
        const name = currentLang === 'mr' ? item.nameMr : item.nameEn;
        const origin = currentLang === 'mr' ? item.originMr : item.originEn;
        const statusText = currentLang === 'mr' ? item.statusLabelMr : item.statusLabelEn;
        const catColor = item.category === 'fish' ? 'var(--fish-primary)' : 'var(--chicken-primary)';

        return `
          <tr>
            <td>
              <div style="font-weight: 700; color: var(--text-primary);">${name}</div>
              <div style="font-size: 0.78rem; color: ${catColor};">${origin}</div>
            </td>
            <td>
              <span class="status-pill ${item.status || 'available'}">${statusText}</span>
            </td>
            <td>${formatPriceOrCallLink(item.ratePerKg, name)}</td>
            <td>${formatPriceOrCallLink(item.wholesaleRatePerKg, name + ' (Wholesale 10kg+)')}</td>
          </tr>
        `;
      })
      .join('');
  }

  /* ==========================================================================
     5. PRODUCT CATALOG RENDERER (/chicken & /fish)
     ========================================================================== */
  function renderProductCatalog() {
    const grid = document.getElementById('product-catalog-grid');
    if (!grid) return;

    const category = grid.dataset.catalogCategory || 'chicken';
    const list = CONFIG.products[category] || [];

    grid.innerHTML = list
      .map((item) => {
        const name = currentLang === 'mr' ? item.nameMr : item.nameEn;
        const tag = currentLang === 'mr' ? item.tagMr : item.tagEn;
        const desc = currentLang === 'mr' ? item.descMr : item.descEn;
        const alt = currentLang === 'mr' ? item.altMr : item.altEn;
        const unit = currentLang === 'mr' ? item.unitMr : item.unitEn;
        const qty = cart.get(item.id) || 0;

        const hasRate = typeof item.price === 'number' && item.price > 0;
        const priceMarkup = hasRate
          ? `<span class="price-val">₹${item.price} <small style="font-size:0.72rem; font-weight:500; color:var(--text-muted);">${unit}</small></span>`
          : `<a href="${buildWhatsAppUrl(
              currentLang === 'mr'
                ? `नमस्कार! मला "${name}" चा आजचा दर हवा आहे.`
                : `Hello! Please share today's rate for "${name}".`
            )}" target="_blank" rel="noopener" class="call-rate-link">${
              currentLang === 'mr' ? CONFIG.ui.callForRateMr : CONFIG.ui.callForRateEn
            }</a>`;

        const wholesaleSub =
          typeof item.wholesalePrice === 'number' && item.wholesalePrice > 0
            ? `${currentLang === 'mr' ? CONFIG.ui.wholesaleLabelMr : CONFIG.ui.wholesaleLabelEn}: ₹${item.wholesalePrice}/kg`
            : currentLang === 'mr'
              ? CONFIG.ui.callForRateMr
              : CONFIG.ui.callForRateEn;

        const addLabel =
          qty > 0
            ? `${currentLang === 'mr' ? CONFIG.ui.addedKgMr : CONFIG.ui.addedKgEn} (${qty} kg) +`
            : currentLang === 'mr'
              ? CONFIG.ui.addOneKgMr
              : CONFIG.ui.addOneKgEn;

        return `
          <article class="product-card">
            <div class="product-thumb">
              <img src="${resolvePath(item.image)}" alt="${alt}" loading="lazy" width="640" height="420" />
              <span class="product-tag">${tag}</span>
            </div>
            <div class="product-body">
              <h3 class="product-title">${name}</h3>
              <p class="product-meta">${desc}</p>
              <div class="product-footer">
                <div class="price-block">
                  ${priceMarkup}
                  <span class="price-unit">${wholesaleSub}</span>
                </div>
                <button type="button" class="btn-add-order" data-add-product="${item.id}">
                  ${addLabel}
                </button>
              </div>
            </div>
          </article>
        `;
      })
      .join('');

    grid.querySelectorAll('[data-add-product]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-add-product');
        cart.set(id, (cart.get(id) || 0) + 1);
        renderProductCatalog();
        updateWhatsAppStickyButton();
      });
    });
  }

  /* ==========================================================================
     6. CONTACT & ENQUIRY FORM HANDLER (/contact)
     ========================================================================== */
  function initEnquiryForm() {
    const form = document.getElementById('phaltan-enquiry-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('enq-name')?.value.trim() || 'Customer';
      const phone = document.getElementById('enq-phone')?.value.trim() || '';
      const category = document.getElementById('enq-category')?.value || 'Chicken & Fish';
      const qty = document.getElementById('enq-qty')?.value.trim() || '1–5 kg';
      const notes = document.getElementById('enq-notes')?.value.trim() || '';

      const lines = [
        '*New Order / Rate Enquiry — Royal Cuts Phaltan*',
        `Name: ${name}`,
        phone ? `Phone: ${phone}` : null,
        `Category: ${category}`,
        `Quantity / Requirement: ${qty}`,
        notes ? `Special Instructions: ${notes}` : null,
        'Location: Phaltan, Maharashtra'
      ].filter(Boolean);

      window.open(buildWhatsAppUrl(lines.join('\n')), '_blank', 'noopener');
    });
  }

  /* ==========================================================================
     7. BOOTSTRAP ON DOM READY
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    // Bind language toggle buttons
    document.querySelectorAll('.lang-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        applyLanguage(currentLang === 'en' ? 'mr' : 'en');
      });
    });

    // Initialize Scroll Sequence if present on current page
    const seqId = document.body.dataset.sequence;
    if (seqId && CONFIG.sequences[seqId]) {
      activeSequenceController = new CanvasScrollSequence(CONFIG.sequences[seqId]);
    }

    applyLanguage(currentLang);
    loadAndRenderStockBoard();
    initEnquiryForm();
  });
})();
