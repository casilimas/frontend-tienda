import React, { useRef } from "react";
import { useCart } from "../context/CartContext"; // ✅ Importa el contexto

const products = [
  {
    id: 5,
    name: "Level 20 RGB Titanium Gaming Keyboard",
    price: 19.01,
    image: "https://es.thermaltake.com/pub/media/wysiwyg/key3/img/l20keyboard/titanium/03b.png"
  },
  {
    id: 6,
    name: "Razer Huntsman Mini 60%",
    price: 12.01,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVyp8T7WetIzH7ZJDMa1cfyfigu3e3Nu3GfA&s"
  },
  {
    id: 7,
    name: "Corsair K70 RGB MK.2",
    price: 15.90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__morqiorKg8YMfZy0i12ieie8vZ8c5g2UQ&s"
  },
  {
    id: 8,
    name: "Teclado inalámbrico",
    price: 7.90,
    image: "https://resource.logitech.com/w_386,ar_1.0,c_limit,f_auto,q_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/pebble-keys-2-k380s/gallery/pebble-keys-2-k380s-top-tonal-rose-gallery-esp.png?v=1"
  },
  {
    id: 9,
    name: "Teclado RGB Cable",
    price: 17.90,
    image: "https://m.media-amazon.com/images/I/71zPs9UgSbL._AC_SL1500_.jpg"
  },
  {
    id: 10,
    name: "Teclado gamer DELUX",
    price: 14.90,
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_955102-MLV70955452179_082023-N.webp"
  },
  {
    id: 11,
    name: "Teclado semi mecánico",
    price: 20.90,
    image: "https://oficinatuya.com/cdn/shop/files/D_NQ_NP_2X_966265-MLV74622523455_022024-F.webp?v=1709063997"
  },
  {
    id: 12,
    name: "Teclado GAMER Punto Fino",
    price: 15.90,
    image: "https://tiposdeteclado.com/wp-content/uploads/2018/02/teclado-gamer-e1531619543144.jpg"
  },
  {
    id: 13,
    name: "Teclado GAMER ultima generacion",
    price: 30.90,
    image: "https://www.dmi.es/photo/194/86563/57614506/bg/teclado-gaming-krom-kasic-tkl-rainbow.jpg"
  },
  {
    id: 14,
    name: "Teclado GAMER completo",
    price: 300.90,
    image: "https://st5.depositphotos.com/8752776/66306/i/450/depositphotos_663067418-stock-photo-top-view-gamer-gears-mouse.jpg"
  }
];

const PaymentCard = () => {
  const { addToCart } = useCart(); // ✅ Contexto del carrito

  const handleMouseMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 25;
    const rotateY = ((x - centerX) / centerX) * 25;

    ref.current.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
    ref.current.style.transition = `transform 0.1s ease-out`;
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(0.7)`;
    ref.current.style.transition = `transform 0.2s ease-in-out`;

    setTimeout(() => {
      if (ref.current) {
        ref.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
        ref.current.style.transition = `transform 0.2s ease-in-out`;
      }
    }, 150);
  };

  return (
    <div className="min-h-screen overflow-auto bg-gray-100 mt-40 py-6 px-4">
      <h3 className="text-center text-2xl font-semibold mb-6">Teclados disponibles</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => {
          const imgRef = useRef();
          return (
            <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden text-center">
                <div
                  className="overflow-hidden"
                  onMouseMove={(e) => handleMouseMove(e, imgRef)}
                  onMouseLeave={() => handleMouseLeave(imgRef)}
                >
                  <img
                    ref={imgRef}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[200px] object-cover"
                  />
                </div>
                <div className="p-4">
                  <h6 className="text-lg font-medium">{product.name}</h6>
                  <p className="text-gray-500 mb-3">${product.price}</p>
                  <button
                    onClick={() => addToCart(product)} // ✅ Acción
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentCard;
