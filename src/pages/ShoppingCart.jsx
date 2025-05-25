import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { calculateTotalWithDiscount } from "../utilities/discounts/calculateDiscount";

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const { total, discount, finalTotal } = calculateTotalWithDiscount(cartItems);

  const handleCheckout = async () => {
    console.log("🧪 Procediendo al pago con los siguientes productos:", cartItems);

    try {
      const response = await fetch('https://backend-tienda-h0yw.onrender.com/api/create-checkout-session', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error del servidor: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log("🎯 Respuesta del backend Stripe:", data);

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Error al iniciar el pago");
      }
    } catch (err) {
      console.error("❌ Error en el checkout:", err);
      alert("No se pudo procesar el pago");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto mt-28">
      <h2 className="text-2xl font-bold mb-6">🛒 Tu carrito</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map((product) => (
            <CartItem key={product.id} product={product} onRemove={removeFromCart} />
          ))}

          <div className="text-right mt-6 space-y-2">
            <p className="text-gray-600">Subtotal: ${total}</p>
            <p className="text-green-600">Descuento: -${discount}</p>
            <p className="text-xl font-bold">Total a pagar: ${finalTotal}</p>

            <button
              onClick={handleCheckout}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded"
            >
              Proceder al pago
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
