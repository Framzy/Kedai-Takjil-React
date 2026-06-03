import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import PopupCart from "../components/cart/PopupCart";
import HeroSection from "../sections/HeroSection";
import ProductSection from "../sections/ProductSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";

const Home = () => {
  const { showPopup, setShowPopup } = useCart();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);
  return (
    <div className="home">
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <ContactSection />

      <PopupCart show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default Home;
