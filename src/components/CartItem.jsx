import React from "react";

const CartItem = ({ product, onRemove }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:pl-6 p-4 border-b bg-white shadow-sm rounded-lg max-w-4xl mx-auto sm:ml-6">
      {/* Imagen + Info */}
      <div className="flex items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-md"
        />
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800">{product.name}</h4>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-sm text-gray-500">Cantidad: {product.quantity}</p>
        </div>
      </div>

      {/* Botón eliminar */}
      <div className="mt-4 sm:mt-0">
        <button
          onClick={() => onRemove(product.id)}
          className="text-red-600 hover:text-red-800 font-semibold text-sm border border-red-500 px-3 py-1 rounded transition duration-200"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
