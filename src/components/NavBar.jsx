import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

const grayTones = [
  "bg-white/90",
  "bg-gray-100/80",
  "bg-gray-200/70",
  "bg-gray-300/60",
  "bg-gray-400/50"
];

const NavBar = () => {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [toneIndex, setToneIndex] = useState(0);
  const [ascending, setAscending] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToneIndex((prev) => {
        if (ascending) {
          if (prev < grayTones.length - 1) return prev + 1;
          setAscending(false);
          return prev - 1;
        } else {
          if (prev > 0) return prev - 1;
          setAscending(true);
          return prev + 1;
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [ascending]);

  const bgClass = grayTones[toneIndex];

  return (
    <nav className={`fixed top-0 mt-4 w-full ${bgClass} text-black transition-colors duration-500 z-50 shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <img
              src="/logoUno.png"
              alt="LogoUno"
              className="h-10 animate-spin-slow hover:animate-spin-fast transition-all duration-300"
            />
          </Link>

          {/* Botón hamburguesa */}
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Menú Desktop */}
          <ul className="hidden sm:flex space-x-6 items-center">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/ofertas">Ofertas</Link></li>
            <li className="relative group">
              <button className="focus:outline-none">Productos</button>
              <ul className={`absolute left-0 mt-0.5 w-48 ${bgClass} text-black rounded-xl shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300`}>
                <li className="px-4 py-2 hover:bg-gray-200/60 rounded-md"><Link to="/about/teclados">Teclados</Link></li>
                <li className="px-4 py-2 hover:bg-gray-200/60 rounded-md"><Link to="/about/monitores">Monitores</Link></li>
                <li className="px-4 py-2 hover:bg-gray-200/60 rounded-md"><Link to="/about/cpus">CPU</Link></li>
                <li className="px-4 py-2 hover:bg-gray-200/60 rounded-md"><Link to="/about/accesorios">Accesorios</Link></li>
              </ul>
            </li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li>
              <input type="text" placeholder="Buscar..." className="px-2 py-1 border rounded-md text-sm focus:outline-none" />
            </li>
            <li className="relative">
              <Link to="/cart">
                <img src="/carrito.png" alt="Carrito" className="w-8 h-8" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {itemCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>

        {/* Menú Móvil */}
        {menuOpen && (
          <ul className="sm:hidden mt-4 space-y-3 pb-4">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/ofertas" onClick={() => setMenuOpen(false)}>Ofertas</Link></li>
            <li><Link to="/about/teclados" onClick={() => setMenuOpen(false)}>Teclados</Link></li>
            <li><Link to="/about/monitores" onClick={() => setMenuOpen(false)}>Monitores</Link></li>
            <li><Link to="/about/cpus" onClick={() => setMenuOpen(false)}>CPU</Link></li>
            <li><Link to="/about/accesorios" onClick={() => setMenuOpen(false)}>Accesorios</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            <li>
              <div className="relative flex items-center gap-2 pl-4">
                <Link
                  to="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2"
                >
                  <img src="/carrito.png" alt="Carrito" className="w-6 h-6" />
                  <span className="text-sm">Carrito</span>
                </Link>
                {itemCount > 0 && (
                  <span className="absolute -top-2 right-0 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {itemCount}
                  </span>
                )}
              </div>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
