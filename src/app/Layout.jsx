import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { useCart } from "../hooks/useCart";

function Layout() {
  const { getTotalQuantity } = useCart();
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (location.pathname === "/cart") {
      Window.scrollTo({ top: 0 });
    } else {
      navigate("/products");
    }
  };

  return (
    <>
      <Navbar cartCount={getTotalQuantity()} onCartClick={handleCartClick} />

      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
