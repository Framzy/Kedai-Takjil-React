import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cartIcon from "../../assets/nav/cart_icon.webp";
import useDebounce from "../../hooks/useDebounce";

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

  const handleResize = useDebounce(() => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

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
        fixed w-full top-0 left-0 z-50 px-5
        bg-[#010101]
        transition-all duration-300 ease-in-out
        ${isScrolled ? "shadow-lg shadow-black/50 " : "shadow-none"}
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
          className={`
            fixed -left-150 top-16 
            bg-(--color-primary)/95 w-3/4 h-screen gap-15 pb-20
            flex flex-col items-center justify-center 
            text-white text-center transition-all duration-300 ease-in-out
            
            ${isMenuOpen ? "left-0 " : ""}

            md:h-fit
            md:static md:bg-transparent md:flex-row md:gap-5 md:border-none
            md:items-center md:justify-center md:py-0
            `}
        >
          <li className="">
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
            src={cartIcon}
            alt="icon cart"
            id="cart-icon"
            onClick={onCartClick}
            className="w-6 h-6 cursor-pointer"
          />
          {cartCount <= 0 && (
            <div className="circle absolute -top-2 right-2 md:-right-2.5 w-5 h-5 rounded-full bg-red-700 text-white text-xs flex items-center justify-center">
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
