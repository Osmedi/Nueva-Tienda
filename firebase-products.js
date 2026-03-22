// ============================================================
//  firebase-products.js
//  Reemplaza el array hardcodeado de productos por una
//  escucha en tiempo real de Firestore.
//
//  Cómo funciona:
//    1. Al cargar la página, lee los productos de Firebase
//    2. Reemplaza el array global `products`
//    3. Re-renderiza toda la tienda automáticamente
//    4. Cada vez que el admin guarda/edita/elimina un producto
//       la tienda del cliente se actualiza EN TIEMPO REAL
//       sin que el usuario tenga que recargar.
// ============================================================

(function () {
  'use strict';

  // ── Spinner de carga inicial ──────────────────────────────
  function showStoreLoader() {
    const grids = ['productsGrid', 'offersGrid', 'bestsellersGrid'];
    grids.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.innerHTML = `
          <div style="
            grid-column: 1 / -1;
            display: flex; align-items: center; justify-content: center;
            gap: 12px; padding: 60px 20px;
            color: var(--text-secondary, #888); font-size: 0.9rem;
          ">
            <div style="
              width: 22px; height: 22px;
              border: 2px solid rgba(194,71,10,0.2);
              border-top-color: #c2470a;
              border-radius: 50%;
              animation: fb-spin 0.7s linear infinite;
            "></div>
            Cargando productos...
          </div>`;
      }
    });

    // Inyecta la animación del spinner si no existe
    if (!document.getElementById('fb-spin-style')) {
      const s = document.createElement('style');
      s.id = 'fb-spin-style';
      s.textContent = '@keyframes fb-spin { to { transform: rotate(360deg); } }';
      document.head.appendChild(s);
    }
  }

  // ── Espera a que Firebase esté listo ─────────────────────
  function waitForFirebase(cb) {
    if (typeof db !== 'undefined' && typeof firebase !== 'undefined') { cb(); return; }
    let tries = 0;
    const iv = setInterval(() => {
      if (typeof db !== 'undefined' && typeof firebase !== 'undefined') {
        clearInterval(iv); cb();
      }
      if (++tries > 60) {
        clearInterval(iv);
        console.warn('[Firebase Products] Firebase no disponible. Usando productos del código.');
      }
    }, 100);
  }

  // ── Normaliza un doc de Firestore al formato esperado ────
  function normalize(doc) {
    const d = doc.data();
    return {
      // ID como número para compatibilidad con addToCart(id)
      id:            doc.id,
      firestoreId:   doc.id,
      name:          d.name          || '',
      brand:         d.brand         || '',
      category:      d.category      || 'smartphones',
      price:         Number(d.price) || 0,
      originalPrice: d.originalPrice  ? Number(d.originalPrice) : null,
      rating:        Number(d.rating) || 0,
      reviews:       Number(d.reviews)|| 0,
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
  }

  // ── Actualiza todo lo visible en la tienda ───────────────
  function refreshStore(newProducts) {
    window.products = newProducts;

    // Si renderProducts no existe todavía, reintenta en 500ms
    if (typeof renderProducts !== 'function') {
      console.warn('[Firebase Products] renderProducts no disponible, reintentando...');
      setTimeout(() => refreshStore(newProducts), 500);
      return;
    }

    try { renderProducts(); } catch(e) { console.error('[FB Products] renderProducts:', e); }
    if (typeof generateNewProductsCarousel === 'function') {
      try { generateNewProductsCarousel(); } catch(e) {}
    }
    if (typeof generateBrandsCarousel === 'function') {
      try { generateBrandsCarousel(); } catch(e) {}
    }
    if (typeof initializeCarousels === 'function') {
      try { setTimeout(() => initializeCarousels(), 100); } catch(e) {}
    }

    console.log(`[Firebase Products] ${newProducts.length} productos cargados ✓`);
  }

  // ── Listener en tiempo real ──────────────────────────────
  let unsubscribe = null;

  function startProductListener() {
    // Detener listener anterior si existe
    if (unsubscribe) unsubscribe();

    unsubscribe = db
      .collection('productos')
      .onSnapshot(
        snapshot => {
          const newProducts = snapshot.docs.map(normalize);

          // Si Firestore está vacío, mantener los productos del código
          if (newProducts.length === 0) {
            console.warn('[Firebase Products] Firestore vacío — usando productos hardcodeados.');
            // Sube los productos del código a Firestore automáticamente
            uploadDefaultProducts();
            return;
          }

          refreshStore(newProducts);
        },
        error => {
          console.error('[Firebase Products] Error en listener:', error);
          // Fallback: mantiene los productos del array original
        }
      );
  }

  // ── Sube los productos del array original a Firestore ────
  // (Solo la primera vez, cuando Firestore está vacío)
  async function uploadDefaultProducts() {
    // Usa el array original que ya estaba en script.js
    const original = window.__originalProducts;
    if (!original || original.length === 0) {
      console.warn('[Firebase Products] No hay productos originales para subir.');
      return;
    }

    console.log(`[Firebase Products] Subiendo ${original.length} productos a Firestore...`);

    const batch = db.batch();
    original.forEach(p => {
      const ref = db.collection('productos').doc(String(p.id));
      batch.set(ref, {
        name:          p.name          || '',
        brand:         p.brand         || '',
        category:      p.category      || 'smartphones',
        price:         Number(p.price) || 0,
        originalPrice: p.originalPrice  ? Number(p.originalPrice) : null,
        rating:        Number(p.rating) || 0,
        reviews:       Number(p.reviews)|| 0,
        images:        p.images        || [],
        description:   p.description   || '',
        badge:         p.badge         || '',
        isBestseller:  !!p.isBestseller,
        isOnOffer:     !!p.isOnOffer,
        specs:         p.specs         || {},
        features:      p.features      || [],
        gb_options:    p.gb_options     || [],
        colors:        p.colors         || [],
        createdAt:     firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt:     firebase.firestore.FieldValue.serverTimestamp(),
        source:        'import-automatico',
      });
    });

    try {
      await batch.commit();
      console.log('[Firebase Products] ¡Productos subidos a Firestore exitosamente!');
      showToastStore('Catálogo sincronizado con Firebase ✓');
    } catch (e) {
      console.error('[Firebase Products] Error al subir productos:', e);
    }
  }

  // ── Toast ligero para la tienda (no depende del admin) ───
  function showToastStore(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = `
      position:fixed; bottom:20px; left:50%; transform:translateX(-50%);
      background:#c2470a; color:#fff; padding:10px 20px; border-radius:8px;
      font-size:0.82rem; font-family:sans-serif; z-index:9999;
      box-shadow:0 4px 16px rgba(0,0,0,0.3);
      animation: fbToastIn 0.3s ease;
    `;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.3s'; setTimeout(() => t.remove(), 300); }, 3500);
  }

  // ── Arranque ─────────────────────────────────────────────
  function init() {
    // Guarda una copia del array original antes de que Firebase lo sobreescriba
    if (typeof products !== 'undefined' && products.length > 0) {
      window.__originalProducts = [...products];
    }
    showStoreLoader();
    waitForFirebase(startProductListener);
  }

  // Espera a que script.js termine de ejecutarse completamente
  // usando el evento 'load' que dispara DESPUÉS de que todo cargó
  window.addEventListener('load', () => {
    setTimeout(init, 300);
  });

})();

// ── Parche: intercepta renderProducts para forzar uso de window.products ──
window.addEventListener('load', () => {
  const originalRender = window.renderProducts;
  if (typeof originalRender === 'function') {
    window.renderProducts = function() {
      // Si Firebase ya cargó productos, usa esos
      if (window.products && window.products.length > 0) {
        // Asegura que el array global tenga los datos de Firebase
        return originalRender.call(this);
      }
      return originalRender.call(this);
    };
  }

  // Fuerza una re-renderización 1 segundo después de que todo cargó
  // Esto asegura que Firebase ya respondió y window.products está actualizado
  setTimeout(() => {
    if (window.products && window.products.length > 0) {
      if (typeof renderProducts === 'function') renderProducts();
      if (typeof generateNewProductsCarousel === 'function') generateNewProductsCarousel();
      if (typeof generateBrandsCarousel === 'function') generateBrandsCarousel();
      console.log('[Firebase Products] Re-render forzado ✓', window.products.length, 'productos');
    }
  }, 1000);
});
