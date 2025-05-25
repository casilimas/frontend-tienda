

import React from "react";
import { useCart } from "../context/CartContext"; // ✅ Importar el contexto

const products = [
  {
    id: 35,
    name: "camara USB",
    price: 19.01,
    image: "https://m.media-amazon.com/images/I/51Q9sNXCNRL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 36,
    name: "Mouse Gamer",
    price: 12.01,
    image: "https://i.blogs.es/fb2689/vguard/450_1000.webp"
  },
  {
    id: 37,
    name: "Sw de Red",
    price: 15.90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPy7g7U36OkS7xWkwXaaoc9f0DFnAWukrAA&s"
  },
  {
    id: 38,
    name: "Audifonos YOMING",
    price: 7.90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREw6ImZY8BJKaFJ2Bkuxw9ovLAykVQH44p3Q&s"
  },
  {
    id: 39,
    name: "Audifono Gamer",
    price: 17.90,
    image: "https://http2.mlstatic.com/D_NQ_NP_753707-MLV53430866383_012023-O.webp"
  },
  {
    id: 40,
    name: "cargador LENOVO",
    price: 14.90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBnMG9Az7imPYZG1oYbcNPAButb_iVHXRiw&s"
  },
  {
    id: 41,
    name: "adaptador de red tp link",
    price: 20.90,
    image: "https://m.media-amazon.com/images/I/410w-tBYiZS._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 42,
    name: "Pen Drive 64GB",
    price: 15.90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXletaMIi9J8_ULcPjcOM9kuJsXFNUh_mAZg&s"
  },
  {
    id: 43,
    name: "Plc Logo Siemens v8",
    price: 49.99,
    image: "https://blog.liesa.com.ar/wp-content/uploads/2019/01/PLC-LOGO8.jpg"
  },
  {
    id: 44,
    name: "fuente de poder 24 dc",
    price: 333.90,
    image: "https://relepro.com/4942-large_default/fuente-de-alimentacion-logopower-monofasica-24-v-dc25-a.jpg"
  }
];

const PaymentCard = () => {
  const { addToCart } = useCart(); // ✅ Hook del contexto

  return (
    <div className="min-h-screen overflow-auto bg-gray-100 mt-40 py-6 px-4">
      <h3 className="text-center text-2xl font-semibold mb-6">Selecciona un producto</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[370px] object-cover"
              />
              <div className="p-4">
                <h6 className="text-lg font-medium">{product.name}</h6>
                <p className="text-gray-500 mb-3">${product.price}</p>
                <button 
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: parseFloat(product.price),
                      image: product.image
                    })
                  }
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentCard;
