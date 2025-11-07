import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <button 
          className={`burger-menu ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="logo">
          <h1>🍔 BurguerBy</h1>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <Link 
                to="/" 
                className={location.pathname === "/" ? "active" : ""}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/menu" 
                className={location.pathname === "/menu" ? "active" : ""}
                onClick={closeMenu}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === "/about" ? "active" : ""}
                onClick={closeMenu}
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
        <nav className={`mobile-navigation ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link 
                to="/" 
                className={location.pathname === "/" ? "active" : ""}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/menu" 
                className={location.pathname === "/menu" ? "active" : ""}
                onClick={closeMenu}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === "/about" ? "active" : ""}
                onClick={closeMenu}
              >
                Sobre
              </Link>
            </li>
          </ul>
        </nav>
        {isMenuOpen && (
          <div className="menu-overlay" onClick={closeMenu}></div>
        )}
      </div>
    </header>
  );
}

export default Header;
