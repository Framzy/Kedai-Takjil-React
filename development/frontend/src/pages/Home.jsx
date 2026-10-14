import { useEffect } from "react";
import HeroSection from "../sections/HeroSection";
import ProductSection from "../sections/ProductSection";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";

const Home = () => {
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
    </div>
  );
};

export default Home;
