import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import cartIcon from "../../assets/nav/cart_icon.webp";
import cartIconActive from "../../assets/nav/cart_icon_active.webp";

import useDebounce from "../../hooks/useDebounce";

const navItems = [
  { label: "Home", section: "hero" },
  { label: "Product", section: "product", route: "/products" },
  { label: "About", section: "about" },
  { label: "Contact", section: "contact" },
];

const Navbar = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Active section hanya untuk landing page
  const [activeSection, setActiveSection] = useState("hero");

  const navigate = useNavigate();
  const location = useLocation();

  // =========================
  // Toggle Mobile Menu
  // =========================
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // =========================
  // Resize Handler
  // =========================
  const handleResize = useDebounce(() => {
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("resize", handleResize, {
      passive: true,
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // =========================
  // Navbar Shadow
  // =========================
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

  // =========================
  // Active Section Scroll Spy
  // =========================
  useEffect(() => {
    // hanya aktif di homepage
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

    // trigger pertama kali
    handleActiveSection();

    return () => {
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, [location.pathname]);

  // =========================
  // Lock Body Scroll
  // =========================
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  // =========================
  // Scroll To Section
  // =========================
  const scrollToSection = (id) => {
    // jika sudah di homepage
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // pindah ke homepage dulu
      navigate("/");

      // tunggu render selesai
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }

    closeMenu();
  };

  // =========================
  // Route Checker
  // =========================
  const isRouteActive = (path) => {
    return location.pathname === path;
  };

  // =========================
  // Active Nav Checker
  // =========================
  const getNavClass = (item) => {
    // Route Active
    if (item.route && location.pathname === item.route) {
      return activeClass;
    }

    // Section Active
    if (location.pathname === "/" && activeSection === item.section) {
      return activeClass;
    }

    return inActiveClass;
  };

  // =========================
  // Tailwind Classes
  // =========================
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
    text-[#ADADAD]
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
        bg-[#010101]

        transition-all duration-300 ease-in-out

        ${isScrolled ? "shadow-sm shadow-black/50" : "shadow-none"}
      `}
    >
      <div className="w-full flex items-center justify-between">
        {/* =========================
            Hamburger
        ========================= */}
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

        {/* =========================
            Logo
        ========================= */}
        <button
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer"
        >
          <img src="icon/logo.png" alt="logo aplikasi" className="w-18 h-9.5" />
        </button>

        {/* =========================
            Navigation
        ========================= */}
        <ul
          className={`
            fixed top-16 left-0
            w-3/4 h-screen pb-20

            flex flex-col
            items-center justify-center
            gap-15

            bg-[var(--color-primary)]/95

            text-[#ADADAD]
            text-lg
            font-bold
            text-center

            transition-transform duration-300
            transform

            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}

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
                onClick={() => scrollToSection(item.section)}
                className={getNavClass(item)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* =========================
            Cart
        ========================= */}
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
