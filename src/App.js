import AppRoutes from "./Routes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;