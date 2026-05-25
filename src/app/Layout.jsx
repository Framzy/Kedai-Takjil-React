import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { useCart } from "../hooks/useCart";
import { useEffect } from "react";

function Layout() {
  const { getTotalQuantity } = useCart();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const handleCartClick = () => {
    if (location.pathname === "/cart") {
      window.scrollTo({ top: 0, behavior: "instant" });
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
