// ============================================================
//  firebase-loader.js  —  MobileExpressHN
//  Carga los productos de Firestore ANTES de que script.js
//  renderice nada. Funciona interceptando DOMContentLoaded.
//  No toca ninguna función existente de script.js.
// ============================================================

(function () {
  'use strict';

  // ── 1. Bloquea el DOMContentLoaded original de script.js ──
  // Guardamos los listeners que se registren y los ejecutamos
  // nosotros DESPUÉS de cargar Firebase.
  const _listeners = [];
  const _origAdd = EventTarget.prototype.addEventListener;

  EventTarget.prototype.addEventListener = function (type, fn, opts) {
    if (type === 'DOMContentLoaded' && this === document) {
      _listeners.push(fn);
      return; // No lo registra todavía
    }
    return _origAdd.call(this, type, fn, opts);
  };

  // ── 2. Espera Firebase (cargado por firebase-config.js) ──
  function waitDB(cb) {
    if (typeof db !== 'undefined') { cb(); return; }
    let t = 0;
    const iv = setInterval(() => {
      if (typeof db !== 'undefined') { clearInterval(iv); cb(); }
      if (++t > 80) { clearInterval(iv); runOriginalListeners(); } // fallback
    }, 50);
  }

  // ── 3. Descarga productos de Firestore ──
  async function loadProducts() {
    try {
      const snap = await db.collection('productos').get();
      if (!snap.empty) {
        window.products = snap.docs.map(doc => {
          const d = doc.data();
          return {
            id:            doc.id,
            name:          d.name          || '',
            brand:         d.brand         || '',
            category:      d.category      || 'smartphones',
            price:         Number(d.price) || 0,
            originalPrice: d.originalPrice ? Number(d.originalPrice) : null,
            rating:        Number(d.rating)  || 0,
            reviews:       Number(d.reviews) || 0,
            images:        Array.isArray(d.images) ? d.images : (d.images ? [d.images] : []),
            description:   d.description   || '',
            badge:         d.badge         || '',
            isBestseller:  !!d.isBestseller,
            isOnOffer:     !!d.isOnOffer,
            specs:         d.specs         || {},
            features:      d.features      || [],
            gb_options:    d.gb_options     || [],
            colors:        d.colors         || [],
          };
        });
        console.log(`[Firebase Loader] ${window.products.length} productos listos ✓`);
      } else {
        console.warn('[Firebase Loader] Firestore vacío — usando productos del código');
      }
    } catch (e) {
      console.error('[Firebase Loader] Error cargando productos:', e);
    }
    runOriginalListeners();
  }

  // ── 4. Ejecuta los listeners originales con productos ya listos ──
  function runOriginalListeners() {
    // Restaura addEventListener normal
    EventTarget.prototype.addEventListener = _origAdd;

    // Dispara cada listener que script.js había registrado
    _listeners.forEach(fn => {
      try { fn(); } catch(e) { console.error(e); }
    });

    // También registra un listener para Firestore en tiempo real
    // (actualiza si el admin cambia algo mientras el usuario está en la página)
    if (typeof db !== 'undefined') {
      db.collection('productos').onSnapshot(snap => {
        if (snap.empty) return;
        window.products = snap.docs.map(doc => {
          const d = doc.data();
          return {
            id:            doc.id,
            name:          d.name          || '',
            brand:         d.brand         || '',
            category:      d.category      || 'smartphones',
            price:         Number(d.price) || 0,
            originalPrice: d.originalPrice ? Number(d.originalPrice) : null,
            rating:        Number(d.rating)  || 0,
            reviews:       Number(d.reviews) || 0,
            images:        Array.isArray(d.images) ? d.images : (d.images ? [d.images] : []),
            description:   d.description   || '',
            badge:         d.badge         || '',
            isBestseller:  !!d.isBestseller,
            isOnOffer:     !!d.isOnOffer,
            specs:         d.specs         || {},
            features:      d.features      || [],
            gb_options:    d.gb_options     || [],
            colors:        d.colors         || [],
          };
        });
        // Re-renderiza si la función ya existe
        if (typeof renderProducts === 'function') {
          try { renderProducts(); } catch(e) {}
        }
        if (typeof generateNewProductsCarousel === 'function') {
          try { generateNewProductsCarousel(); } catch(e) {}
        }
        console.log(`[Firebase Loader] Actualización en tiempo real: ${window.products.length} productos`);
      }, err => console.error('[Firebase Loader] onSnapshot error:', err));
    }
  }

  // ── 5. Arranque ──
  // Espera a que el DOM esté listo para interceptar, luego carga Firebase
  if (document.readyState === 'loading') {
    _origAdd.call(document, 'DOMContentLoaded', () => {
      waitDB(loadProducts);
    });
  } else {
    waitDB(loadProducts);
  }

})();
