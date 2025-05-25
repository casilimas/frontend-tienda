// src/pages/CartPage.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem"; // asegúrate que la ruta sea correcta

const CartPage = () => {
  const { cartItems, getTotal, removeFromCart } = useCart();

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} product={item} onRemove={removeFromCart} />
            ))}
          </div>

          <div className="mt-6 text-right text-2xl font-bold">
            Total: ${getTotal()}
          </div>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Ir a pagar
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;




