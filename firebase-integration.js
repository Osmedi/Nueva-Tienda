// ============================================================
//  firebase-integration.js
//  Capa de Firebase para MobileExpressHN — tienda pública
//
//  Este archivo REEMPLAZA handleCheckout y handleTradeIn
//  para guardar cada pedido/permuta en Firestore Y abrir
//  WhatsApp como antes. No cambia nada más de la tienda.
//
//  Cómo funciona:
//    Cliente llena el carrito → finaliza por WhatsApp
//    → simultáneamente se guarda en Firebase
//    → aparece en el panel admin en tiempo real
// ============================================================

(function () {
  'use strict';

  // ── Espera a que db esté disponible (lo declara firebase-config.js) ──
  function waitForDB(cb) {
    if (typeof db !== 'undefined') { cb(); return; }
    let tries = 0;
    const iv = setInterval(() => {
      if (typeof db !== 'undefined') { clearInterval(iv); cb(); }
      if (++tries > 40) { clearInterval(iv); console.warn('[Firebase] db no disponible después de 4s'); }
    }, 100);
  }

  // ── Genera ID legible tipo #MEX-0001 ──
  async function nextOrderId() {
    try {
      const snap = await db.collection('pedidos').orderBy('fecha', 'desc').limit(1).get();
      if (snap.empty) return 'MEX-0001';
      const last = snap.docs[0].data().orderId || 'MEX-0000';
      const num = parseInt(last.split('-')[1] || '0') + 1;
      return 'MEX-' + String(num).padStart(4, '0');
    } catch { return 'MEX-' + Date.now().toString().slice(-4); }
  }

  // ════════════════════════════════════════════
  //  OVERRIDE: handleCheckout
  //  Guarda el pedido en Firebase + abre WhatsApp
  // ════════════════════════════════════════════
  window.handleCheckout = function (e) {
    e.preventDefault();

    if (!cart || cart.length === 0) {
      showNotification('El carrito está vacío', 'warning');
      return;
    }

    const name    = document.getElementById('customerName').value.trim();
    const phone   = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const notes   = document.getElementById('customerNotes').value.trim();

    const paymentEl = document.querySelector('input[name="paymentMethod"]:checked');
    if (!paymentEl) {
      showNotification('Por favor selecciona un método de pago', 'warning');
      return;
    }
    const paymentMethod = paymentEl.value;

    const subtotal = cart.reduce((t, i) => t + i.price * i.quantity, 0);
    const total    = subtotal;

    // ── Mensaje de WhatsApp (igual que antes) ──
    let message = `🛍️ *FACTURA ELECTRÓNICA - MOBILEEXPRESSHN* 🛍️\n\n`;
    message += `📅 *Fecha:* ${new Date().toLocaleDateString()}\n`;
    message += `⏰ *Hora:* ${new Date().toLocaleTimeString()}\n\n`;
    message += `👤 *INFORMACIÓN DEL CLIENTE*\n`;
    message += `══════════════════════════\n`;
    message += `▸ *Nombre:* ${name}\n`;
    message += `▸ *Teléfono:* ${phone}\n`;
    message += `▸ *Dirección:* ${address}\n`;
    message += `▸ *Método de Pago:* ${paymentMethod}\n`;
    message += `▸ *Notas Adicionales:* ${notes || 'Ninguna'}\n\n`;
    message += `📋 *DETALLE DEL PEDIDO*\n`;
    message += `══════════════════════════\n`;

    cart.forEach((item, index) => {
      let optionsInfo = '';
      if (item.selectedGB || item.selectedColor) {
        optionsInfo = '\n   └── ';
        if (item.selectedGB)    optionsInfo += `💾 ${item.selectedGB}GB`;
        if (item.selectedGB && item.selectedColor) optionsInfo += ' • ';
        if (item.selectedColor) optionsInfo += `🎨 Color: ${item.selectedColor}`;
      }
      message += `➤ *${item.name}*${optionsInfo}\n`;
      message += `   ▸ Cantidad: ${item.quantity} unidad${item.quantity > 1 ? 'es' : ''}\n`;
      message += `   ▸ Precio unitario: L.${item.price.toFixed(2)}\n`;
      message += `   ▸ Subtotal: L.${(item.price * item.quantity).toFixed(2)}\n`;
      if (index < cart.length - 1) message += `   ─────────────────────\n`;
    });

    message += `══════════════════════════\n`;
    message += `💰 *RESUMEN DE PAGOS*\n`;
    message += `══════════════════════════\n`;
    message += `▸ Subtotal: L.${subtotal.toFixed(2)}\n`;
    message += `▸ *TOTAL A PAGAR: L.${total.toFixed(2)}*\n\n`;
    message += `📦 *INFORMACIÓN DE ENVÍO*\n`;
    message += `══════════════════════════\n`;
    message += `▸ *Tiempo estimado:* 24-48 horas\n`;
    message += `▸ *Estado:* Pedido recibido\n`;
    message += `▸ *Zona de entrega:* ${address.toLowerCase().includes('teguc') ? 'Área Metropolitana' : 'Fuera del área metropolitana'}\n\n`;
    message += `🔧 *DETALLES ADICIONALES*\n`;
    message += `══════════════════════════\n`;
    message += `▸ *Garantía:* Todos los productos incluyen hasta un año de garantía\n`;
    message += `▸ *Soporte:* Disponible 24/7\n`;
    message += `▸ *Contacto:* +504 9681-1650\n\n`;
    message += `¡Gracias por tu compra en *MobileExpressHN*! 💜\n\n`;
    message += `📞 *Para seguimiento de tu pedido:*\n`;
    message += `• WhatsApp: +504 9681-1650\n`;
    message += `• Email: mobileexpresshn@gmail.com\n`;
    message += `• Instagram: @mobile.expresshn\n\n`;
    message += `🕒 *Horario de atención:*\nLunes a Sábado: 8:00 AM - 6:00 PM`;

    // ── Abre WhatsApp (comportamiento original, no se bloquea) ──
    const whatsappUrl = `https://wa.me/+50496811650?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    showNotification('¡Pedido realizado con éxito! Se abrirá WhatsApp', 'success');

    // ── Snapshot del carrito antes de vaciarlo ──
    const cartSnapshot = cart.map(i => ({
      id:            i.id,
      name:          i.name,
      brand:         i.brand || '',
      price:         i.price,
      quantity:      i.quantity,
      selectedGB:    i.selectedGB    || null,
      selectedColor: i.selectedColor || null,
      subtotal:      i.price * i.quantity,
    }));

    // ── Vacía carrito ──
    cart = [];
    updateCart();
    toggleCart();

    // ── Guarda en Firebase (en segundo plano, no bloquea al cliente) ──
    waitForDB(async () => {
      try {
        const orderId = await nextOrderId();
        await db.collection('pedidos').add({
          orderId,
          customer:  name,
          phone,
          address,
          notes:     notes || '',
          payment:   paymentMethod,
          items:     cartSnapshot,
          product:   cartSnapshot.map(i => `${i.name}${i.selectedGB ? ' '+i.selectedGB+'GB' : ''}`).join(', '),
          total,
          status:    'pendiente',
          fecha:     firebase.firestore.FieldValue.serverTimestamp(),
          source:    'tienda-web',
        });
        console.log('[Firebase] Pedido guardado:', orderId);
      } catch (err) {
        // No molesta al cliente si falla, solo log
        console.error('[Firebase] Error al guardar pedido:', err);
      }
    });
  };

  // ════════════════════════════════════════════
  //  OVERRIDE: handleTradeIn
  //  Guarda la permuta en Firebase + abre WhatsApp
  // ════════════════════════════════════════════
  window.handleTradeIn = function (e) {
    e.preventDefault();

    const deviceBrand   = document.getElementById('deviceBrand').value.trim();
    const deviceName    = document.getElementById('deviceName').value.trim();
    const deviceStorage = document.getElementById('deviceStorage').value.trim();
    const condition     = document.getElementById('condition').value;
    const notes         = document.getElementById('additionalNotes').value.trim();

    // ── Abre WhatsApp (comportamiento original) ──
    const message = `Solicitud de permuta:\nMarca: ${deviceBrand}\nModelo: ${deviceName}\nAlmacenamiento: ${deviceStorage}GB\nEstado: ${condition}\nNotas: ${notes || 'Ninguna'}`;
    window.open(`https://wa.me/+50496811650?text=${encodeURIComponent(message)}`, '_blank');

    // ── Cierra modal y resetea ──
    if (typeof toggleTradeInModal === 'function') toggleTradeInModal();
    document.getElementById('tradeInForm').reset();

    // ── Guarda en Firebase (en segundo plano) ──
    waitForDB(async () => {
      try {
        await db.collection('permutas').add({
          deviceBrand,
          deviceName,
          deviceStorage: deviceStorage + 'GB',
          condition,
          additionalNotes: notes || '',
          status:  'pendiente',
          fecha:   firebase.firestore.FieldValue.serverTimestamp(),
          source:  'tienda-web',
        });
        console.log('[Firebase] Permuta guardada');
      } catch (err) {
        console.error('[Firebase] Error al guardar permuta:', err);
      }
    });
  };

  console.log('[Firebase Integration] Cargado correctamente ✓');
})();
