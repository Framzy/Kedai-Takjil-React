import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import cartIcon from "../../assets/images/nav/cart_icon.webp";
import cartIconActive from "../../assets/images/nav/cart_icon_active.webp";

import useScrollToSection from "../../hooks/useScrollToSection";

const navItems = [
  { label: "Home", section: "hero" },
  { label: "Product", section: "product", route: "/products" },
  { label: "About", section: "about" },
  { label: "Contact", section: "contact" },
];

const Navbar = ({ cartCount, onCartClick }) => {
  const { scrollToSection } = useScrollToSection();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("hero");

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = ["hero", "product", "about", "contact"];

    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 120;

      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (!element) return;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleActiveSection, {
      passive: true,
    });

    handleActiveSection();

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleNavClick = (id) => {
    scrollToSection(id);
    closeMenu();
  };

  const isRouteActive = (path) => {
    return location.pathname === path;
  };

  const getNavClass = (item) => {
    if (item.route && location.pathname === item.route) {
      return activeClass;
    }

    if (location.pathname === "/" && activeSection === item.section) {
      return activeClass;
    }

    return inActiveClass;
  };

  const activeClass = `
    text-[var(--color-secondary)]
    relative
    cursor-pointer

    after:content-['']
    after:absolute
    after:-bottom-5
    after:left-0
    after:w-full
    after:h-[8px]
    after:bg-[var(--color-secondary)]
    after:transition-all
    after:duration-300
  `;

  const inActiveClass = `
    text-[white]    
    md:text-[var(--color-gray)]
    ${!isScrolled && (isRouteActive("/products") || isRouteActive("/cart")) ? "md:text-[var(--color-primary)]" : ""} 
    ${!isScrolled && isRouteActive("/") ? "md:text-[white]" : ""} 

    relative
    cursor-pointer

    after:content-['']
    after:absolute
    after:-bottom-5
    after:left-0
    after:w-full
    after:h-[0]
    after:bg-[var(--color-secondary)]
    after:transition-all
    after:duration-300

    hover:text-[var(--color-secondary)]
    hover:after:h-[8px]
  `;

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50
        w-full px-5 py-3.5
        

        transition-all duration-300 ease-in-out

        ${isScrolled ? "bg-[var(--background-dark)]  shadow-sm shadow-black/50" : "shadow-none bg-black/15"}
      `}
    >
      <div className="w-full flex items-center justify-between">
        <div
          className={`
            hamburger
            ${isMenuOpen ? "active" : ""}

            block md:hidden
            w-6 h-6
            cursor-pointer
          `}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <button
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer"
        >
          <img src="icon/logo.png" alt="logo aplikasi" className="w-18 h-9.5" />
        </button>

        <ul
          className={`
            fixed top-16.5 left-0
            w-3/4 h-screen pb-20

            flex flex-col
            items-center justify-center
            gap-15

            bg-[var(--color-primary)]/95

            text-lg
            font-bold
            text-center

            transition-transform duration-300
            transform

            ${isMenuOpen ? "translate-x-0 " : "-translate-x-full"}

            md:static
            md:w-full
            md:h-fit

            md:flex-row
            md:justify-start
            md:items-center

            md:gap-5
            md:mx-5
            md:py-0

            md:bg-transparent

            md:translate-x-0
            md:transform-none
          `}
        >
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                onClick={() => handleNavClick(item.section)}
                className={getNavClass(item)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="relative">
          <img
            src={isRouteActive("/cart") ? cartIconActive : cartIcon}
            alt="Cart Icon"
            onClick={onCartClick}
            className="w-6 h-6 cursor-pointer"
          />

          {cartCount > 0 && (
            <div
              className="
                absolute
                -top-2
                right-2
                md:-right-2.5

                w-5 h-5
                rounded-full

                bg-red-700
                text-white
                text-xs

                flex items-center justify-center
              "
            >
              <span>{cartCount}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
