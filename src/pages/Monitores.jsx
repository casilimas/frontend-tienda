import React from "react";
import { useCart } from "../context/CartContext"; // ✅ Importamos el contexto

const products = [
  {
    id: 15,
    name: "monitor Pixabay",
    price: 19.01,
    image: "https://old.elnuevo.expertido.org/wp-content/uploads/2023/09/imported1693924498033.jpg"
  },
  {
    id: 16,
    name: "monitor 21 Led",
    price: 12.01,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQacORVJiuugTK8ZEIi26TmrwgmPbPe2DhdQ&s"
  },
  {
    id: 17,
    name: "Monitores 4K",
    price: 15.90,
    image: "https://i.blogs.es/72dda8/monitor4kap/1366_2000.jpg"
  },
  {
    id: 18,
    name: "Monitor de 18 pulgadas",
    price: 7.90,
    image: "https://m.media-amazon.com/images/I/51wMz7EpaBL._SL500_.jpg"
  },
  {
    id: 19,
    name: "Monitores curvos",
    price: 17.90,
    image: "https://corporativo.tecnoplaza.com.co/wp-content/uploads/2021/08/Monitor-Curvo-Empresarial-Samsung-49-CJ89-6-600x600.jpg"
  },
  {
    id: 20,
    name: "Monitores de 21 pulgadas",
    price: 14.90,
    image: "https://exitocol.vtexassets.com/arquivos/ids/22922242/monitor-pc-24-pulgadas.jpg?v=638521930798200000"
  },
  {
    id: 21,
    name: "Monitor Gamer",
    price: 200.90,
    image: "https://i.blogs.es/1a9ebd/guiamonitoresap/840_560.jpg"
  },
  {
    id: 22,
    name: "Monitor fino",
    price: 150.90,
    image: "https://basesysoportes.com/images/modelos%20soportes/Soporte-de-brazos-retractiles-para-6-monitores.jpg"
  },
  {
    id: 23,
    name: "Monitor axus",
    price: 300.90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaT9cZ_5xjh8qVd8FrAoYyP5UzxTEGQ2uz8A&s"
  },
  {
    id: 24,
    name: "Monitores baratos",
    price: 300.90,
    image: "https://hardzone.es/app/uploads-hardzone.es/2019/11/Corsair-iCUE-LS120-35.jpg"
  }
];

const PaymentCard = () => {
  const { addToCart } = useCart(); // ✅ Obtenemos del contexto

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
                className="w-full h-[200px] object-cover"
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
