import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <div className="logo">
          <Link to="/">
            <img src="/images/icons/logo.png" alt="logo aplikasi" />
          </Link>
        </div>

        <nav style={{ flex: 1, textAlign: "right" }}>
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className={`nav-link ${isActive("/products") ? "active" : ""}`}
                onClick={closeMenu}
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${isActive("/about") ? "active" : ""}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div style={{ position: "relative" }}>
          <img
            src="/images/icons/cart-icon.png"
            alt="icon cart"
            id="cart-icon"
            onClick={onCartClick}
            style={{ cursor: "pointer" }}
          />
          {cartCount > 0 && (
            <div className="circle">
              <span>{cartCount}</span>
            </div>
          )}
        </div>

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
