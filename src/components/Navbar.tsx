import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
   
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : ''
      } bg-blue-600`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          {/* Replace with your logo image if needed */}
          <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-cyan-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">PL</span>
          </div>
          <span className="text-white text-lg font-bold">Pixelab</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`uppercase text-white font-semibold hover:text-sky-300 transition ${
                location.pathname === item.path ? 'border-b-2 border-sky-300' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Hamburger */}
          <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
        style={{ backgroundColor: '#2196f3' }}
      >
        <div className="flex flex-col px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`uppercase text-white font-semibold py-2 ${
                location.pathname === item.path ? 'border-b-2 border-white' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
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
