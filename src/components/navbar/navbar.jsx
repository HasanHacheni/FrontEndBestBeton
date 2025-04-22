import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaHome, FaServicestack, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
 

  // Gestion du mode sombre/clair
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleThemeChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleThemeChange);

    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);
  return (
    <header className={`navbar-container ${isDarkMode ? "dark" : "light"}`}>
      <div className="navbar-content">
        {/* Logo Section */}
        <div className="navbar-section logo-section">
          <h1 className="logo">
            <span className="Best">Best</span>
            <span className="Beton">Beton</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="navbar-section nav-links">
          <Link to="/">
            <FaHome /> Home
          </Link>
          <Link to="/services">
            <FaServicestack /> Services
          </Link>
          <Link to="/contact">
            <FaPhone /> Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
