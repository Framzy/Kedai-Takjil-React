import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import AppRouter from "./AppRouter";
import "../index.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
