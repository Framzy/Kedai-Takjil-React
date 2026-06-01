import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

import { useCart } from "../hooks/useCart";

function Layout() {
  const { getTotalQuantity } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleCartClick = () => {
    if (location.pathname === "/cart") {
      window.scrollTo(0, 0);
    } else {
      navigate("/cart");
    }
  };

  return (
    <>
      <Navbar cartCount={getTotalQuantity()} onCartClick={handleCartClick} />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;
