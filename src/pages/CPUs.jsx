import React from "react";
import { useCart } from "../context/CartContext"; // ✅ Importamos el contexto

const products = [
  {
    id: 25,
    name: "cpu gamer",
    price: 19.01,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSb140BpAFsxT3vR0YytJ0JMkNXmUvmoFUbg&s"
  },
  {
    id: 26,
    name: "cpu racer",
    price: 12.01,
    image: "https://digisoftsoluciones.com/wp-content/uploads/2020/04/cpu-janus.jpg"
  },
  {
    id: 27,
    name: "CPU HP",
    price: 15.90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjaVqH7bMaA_y27zFDMlP3AEJMSt9v_5p-AA&s"
  },
  {
    id: 28,
    name: "Cpu DELL",
    price: 7.90,
    image: "https://megacomputadoras.com.gt/wp-content/uploads/2024/11/delloptiplex3010-768x768.jpg"
  },
  {
    id: 29,
    name: "Cpu Tecno Gamer",
    price: 17.90,
    image: "https://http2.mlstatic.com/D_NQ_NP_612414-MLA74850678973_032024-O.webp"
  },
  {
    id: 30,
    name: "Cpu Corsair",
    price: 14.90,
    image: "https://www.hd-tecnologia.com/imagenes/articulos/2021/06/CORSAIR-lanza-los-nuevos-gabinetes-7000-Series-y-un-refrigerador-para-CPU-de-420mm.jpg"
  },
  {
    id: 31,
    name: "Cpu compact",
    price: 20.90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjdYo5z-OsAMJ6Lpp8e2Gmpuvw7Lkiv4dXSw&s"
  },
  {
    id: 32,
    name: "Moni Pc Monitoreador",
    price: 15.90,
    image: "https://topesdegama.com/app/uploads-topesdegama.com/2022/07/ggabyte-brix-mini-pc-1.jpg"
  },
  {
    id: 33,
    name: "Mini Pc Hp",
    price: 30.90,
    image: "https://www.bigbaydata.com/wp-content/uploads/2023/12/MINIS-FORUM-Neptune-HX99G-Mini-PC.jpg"
  },
  {
    id: 34,
    name: "Raspberry Pi 5 16GB",
    price: 300.90,
    image: "https://cdn1.botland.de/131635/raspberry-pi-5-16gb.jpg"
  }
];

const PaymentCard = () => {
  const { addToCart } = useCart(); // ✅ Usamos el hook del contexto

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
                className="w-full h-[300px] object-cover"
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
