import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView();
    } else {
      navigate(`/#${id}`);
    }

    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
    fixed top-0 left-0 w-full z-50 text-white
    transition-colors duration-300 ease-in-out
    ${isScrolled ? "bg-[#010101] shadow-lg" : "bg-[#010101]/50"}
  `}
    >
      <div className="w-full flex items-center justify-between py-5">
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""} md:hidden
              block w-6 h-6 cursor-pointer
            `}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <button
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer w-12 h-6"
        >
          <img src="icon/logo.png" alt="logo aplikasi" />
        </button>

        <ul
          className={` ${isMenuOpen ? "active" : ""}
            flex flex-row items-center justify-center gap-5
            `}
        >
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="cursor-pointer"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("product")}
              className="cursor-pointer"
            >
              Product
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="cursor-pointer"
            >
              About
            </button>
          </li>

          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>

        <div className="relative">
          <img
            src="/src/assets/nav/cart_icon.webp"
            alt="icon cart"
            id="cart-icon"
            onClick={onCartClick}
            className="w-6 h-6 cursor-pointer"
          />
          {cartCount <= 0 && (
            <div className="circle absolute -top-2 right-1.5 w-5 h-5 rounded-full bg-red-700 text-white text-xs flex items-center justify-center">
              <span>{cartCount}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// akaln pakai delay saat navbar jadi fixed
