import React from "react";
import { Link } from "react-router-dom";

const categorias = [
  {
    nombre: "Teclados",
    ruta: "/about/teclados",
    icono: "⌨️",
    color: "from-pink-500 to-yellow-400",
    dia: "Viernes",
  },
  {
    nombre: "Monitores",
    ruta: "/about/monitores",
    icono: "🖥️",
    color: "from-blue-500 to-indigo-400",
    dia: "Sábados",
  },
  {
    nombre: "CPU",
    ruta: "/about/cpus",
    icono: "🧠",
    color: "from-purple-600 to-pink-400",
    dia: "Domingos",
  },
  {
    nombre: "Accesorios",
    ruta: "/about/accesorios",
    icono: "🎧",
    color: "from-green-400 to-emerald-600",
    dia: "Lunes",
  },
];

const Ofertas = () => {
  return (
    <div
      className="bg-cover bg-center px-4 py-16 pt-28 min-h-screen"
      style={{ backgroundImage: "url('/techOfertas.jpg')" }}
    >
      <div className="max-w-4xl mx-auto text-center mb-12 bg-white bg-opacity-70 rounded-xl py-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 animate-pulse">
          🎉 Ofertas Especiales por Día 🎉
        </h1>
        <p className="text-gray-700 text-base sm:text-lg mt-4">
          Aprovecha un{" "}
          <span className="text-green-600 font-bold">10% de descuento</span> en
          cada categoría según el día:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto pb-10">
        {categorias.map((cat, i) => (
          <Link to={cat.ruta} key={i}>
            <div
              className={`bg-gradient-to-br ${cat.color} text-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition duration-300`}
            >
              <div className="text-5xl mb-4">{cat.icono}</div>
              <h3 className="text-xl font-semibold">{cat.nombre}</h3>
              <p className="text-sm mt-1">Oferta válida los {cat.dia}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Ofertas;
