
import NavBar from "../components/NavBar";

import { HashRouter as Router } from "react-router-dom";









import Teclados from "../pages/Teclados";
import Monitores from "../pages/Monitores";
import CPUs from "../pages/CPUs";
import Accesorios from "../pages/Accesorios";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SuccessPage from "../mensaje/SuccessPage";
import CancelPage from "../mensaje/CancelPaje";
import ShoppingCart from "../pages/ShoppingCart"; 
import { CartProvider } from "../context/CartContext";
import Login from "../components/Login";
import Ofertas from "../pages/Ofertas";




const AppRouter = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/teclados" element={<Teclados />} />
          <Route path="/about/monitores" element={<Monitores />} />
          <Route path="/about/cpus" element={<CPUs />} />
          <Route path="/about/accesorios" element={<Accesorios />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/cancel" element={<CancelPage />} />
          <Route path="/cart" element={<ShoppingCart />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/ofertas" element={<Ofertas />} />


        </Routes>
      </Router>
    </CartProvider>
  );
};

export default AppRouter;