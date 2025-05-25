import AppRoutes from "./routers/routes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;



