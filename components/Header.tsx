import React, { useState, useEffect } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#' },
    { name: 'Về chúng tôi', href: '#about' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Đặt lịch', href: '#booking' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-spa-milk border-b border-spa-brown/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 text-spa-brown group" aria-label="Trang chủ Sen Mộc Spa">
          <Flower2 className={`w-10 h-10 transition-colors duration-300 ${isScrolled ? 'text-spa-brown' : 'text-spa-brown group-hover:text-spa-white'}`} />
          <span className={`text-3xl font-serif font-bold tracking-wide transition-colors duration-300 ${isScrolled ? 'text-spa-brown' : 'text-spa-brown group-hover:text-spa-white'}`}>
            Sen Mộc
          </span>
        </a>

        {/* Desktop Nav - Larger Font */}
        <nav className="hidden md:flex space-x-10" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-base uppercase tracking-widest hover:text-spa-white transition-colors font-bold ${
                isScrolled ? 'text-spa-brown' : 'text-spa-brown hover:text-spa-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-spa-brown p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-spa-milk border-t border-spa-brown/20 py-8 flex flex-col items-center space-y-8 animate-fade-in-down shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-spa-brown font-serif text-2xl font-bold hover:text-spa-green"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};