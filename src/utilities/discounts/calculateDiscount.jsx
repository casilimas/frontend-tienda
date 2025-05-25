export function calculateTotalWithDiscount(cartItems) {
  const today = new Date().getDay(); // 0: domingo, ..., 6: sábado

  // 🔁 Nuevo orden comenzando el viernes:
  // Viernes: teclados
  // Sábado: monitores
  // Domingo: cpus
  // Lunes: accesorios
  const dayCategoryMap = {
    5: "teclados",    // Viernes
    6: "monitores",   // Sábado
    0: "cpus",        // Domingo
    1: "accesorios",  // Lunes
  };

  const categoryIds = {
    teclados: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    monitores: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24,2],
    cpus: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34,4],
    accesorios: [35, 36, 37, 38, 39, 40, 41, 42,43,44]
  };

  const todayCategory = dayCategoryMap[today];
  const idsConDescuento = categoryIds[todayCategory] || [];

  let total = 0;
  let descuento = 0;

  cartItems.forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    if (idsConDescuento.includes(item.id)) {
      descuento += subtotal * 0.1;
    }
  });

  const finalTotal = total - descuento;

  return {
    total: total.toFixed(2),
    discount: descuento.toFixed(2),
    finalTotal: finalTotal.toFixed(2)
  };
}
