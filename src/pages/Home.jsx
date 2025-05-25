import React, { useRef } from 'react';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 0.5).toFixed(2);
    const rotateY = ((x - centerX) / 0.5).toFixed(2);
    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  const destacados = [
    {
      id: 9,
      nombre: 'Teclado Gaming KROM Kasic',
      marca: 'Krom',
      precio: 29.99,
      imagen: 'https://www.dmi.es/photo/194/86563/57614506/bg/teclado-gaming-krom-kasic-tkl-rainbow.jpg',
    },
    {
      id: 2,
      nombre: 'Monitor UltraWide LG 29"',
      marca: 'LG',
      precio: 249.99,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2e37DWYiQiZt8uYen23bi3UMzw-L5z_WELw&s',
    },
    {
      id: 43,
      nombre: 'Accesorios PLC Logo Siemens v8',
      marca: 'Siemens',
      precio: 49.99,
      imagen: 'https://http2.mlstatic.com/D_NQ_NP_971782-MLV72297572801_102023-O.webp',
    },
    {
      id: 4,
      nombre: 'CPU Gamer Ryzen 7',
      marca: 'Armada Custom',
      precio: 999.99,
      imagen: 'https://www.bigbaydata.com/wp-content/uploads/2023/12/MINIS-FORUM-Neptune-HX99G-Mini-PC.jpg',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white text-gray-900 font-sans">

      {/* Hero Section con fondo */}
      <section
        className="relative bg-cover bg-center text-white py-24 px-6 text-center shadow-md"
        style={{ backgroundImage: `url('/fondoTech.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">Tu tienda de tecnología favorita</h1>
          <p className="text-xl md:text-2xl font-light mb-10">Encuentra los mejores productos al mejor precio</p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300">
            Ver productos
          </button>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-20 px-6">
  <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Categorías destacadas</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-center">
    {[
      { image: 'https://cdn.idealo.com/folder/Product/204736/8/204736899/s1_produktbild_gross_6/apple-iphone-16.jpg', label: 'Smartphones' },
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g6ZWExP8t8Xl2bG0E4cM4mxjJYZ525ZrLQ&s', label: 'Laptops' },
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ508VEY5YSxGAWOFZUEV1KxZ8cYE42uKKYw&s', label: 'Accesorios' },
      { image: 'https://imggraficos.gruporeforma.com/2022/05/Laptops-gamer-asus-hot-sale-2022-2.png', label: 'PCs' },
      { image: 'https://nextgames.com.ar/img/public/ds4-black-1ed98e.jpg', label: 'Gaming' },
      { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQ06VW_AC-06lsXhveHCc0SclB59yvuXkqA&s', label: 'Cámaras' },
    ].map((cat) => (
      <div
        key={cat.label}
        className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
      >
        <div className="mb-3">
          <img
  src={cat.image}
  alt={cat.label}
  className="mx-auto w-full max-w-[112px] h-auto object-contain"
/>

        </div>
        <p className="font-semibold text-gray-800">{cat.label}</p>
      </div>
    ))}
  </div>
</section>


      {/* Productos destacados */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-800">Productos destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {destacados.map((producto, i) => (
            <div
              key={producto.id}
              className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div
                className="w-full h-40 mb-4 rounded-xl overflow-hidden"
                style={{ perspective: '1000px' }}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                <div
                  ref={(el) => (cardRefs.current[i] = el)}
                  className="w-full h-full transition-transform duration-300 ease-out"
                >
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-contain bg-white rounded-xl"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{producto.nombre}</h3>
              <p className="text-sm text-gray-500 mb-1">Marca: {producto.marca}</p>
              <p className="text-indigo-600 text-xl font-extrabold">${producto.precio}</p>
              <button
                onClick={() => addToCart({
                  id: producto.id,
                  name: producto.nombre,
                  price: producto.precio,
                  image: producto.imagen
                })}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full font-semibold transition duration-300"
              >
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter con fondo */}
      <section
        className="relative bg-cover bg-center text-white py-20 px-6 text-center"
        style={{ backgroundImage: `url('/fondoTech.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">¿Quieres recibir ofertas exclusivas?</h2>
          <p className="mb-8 text-lg">Suscríbete a nuestro boletín y entérate antes que nadie.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-3 rounded-lg text-gray-900"
            />
            <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} TuTiendaTech. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
