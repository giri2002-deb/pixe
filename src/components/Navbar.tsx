import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg bg-blue-700/95 backdrop-blur-md" : "bg-blue-600"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
        {/* === Logo === */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">PL</span>
          </div>
          <span className="text-white text-lg sm:text-xl font-bold tracking-wide">
            Pixelab
          </span>
        </Link>

        {/* === Desktop Navigation === */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`uppercase text-white font-semibold text-sm hover:text-sky-300 transition ${
                location.pathname === item.path
                  ? "border-b-2 border-sky-300 pb-1"
                  : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* === Mobile Menu Button === */}
        <button
          className="md:hidden text-white focus:outline-none transition-transform duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            // Close icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* === Mobile Navigation === */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-blue-600`}
      >
        <div className="flex flex-col px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`uppercase text-white font-semibold py-2 px-2 rounded-lg hover:bg-blue-700 transition text-sm ${
                location.pathname === item.path ? "bg-blue-800" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
