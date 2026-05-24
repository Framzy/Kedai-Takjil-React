import { useEffect } from "react";
import { useCart } from "../hooks/useCart";
import PopupCart from "../components/PopupCart";
import HeroSection from "../sections/HeroSection";
import ProductSection from "../sections/ProductSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";

const Home = () => {
  const { showPopup, setShowPopup } = useCart();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      document.getElementById(id)?.scrollIntoView();
    }
  }, []);

  return (
    <div className="home-body bg-[#f5f5f5]">
      <HeroSection />
      <ProductSection />
      <AboutSection />
      <ContactSection />

      <PopupCart show={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default Home;
