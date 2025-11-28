import React, { useState, useEffect } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentPage, navigateTo } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', page: 'home' },
    { name: 'Về chúng tôi', page: 'about' },
    { name: 'Dịch vụ', page: 'services' },
    { name: 'Đặt lịch', page: 'booking' },
  ] as const;

  const handleNavClick = (page: any) => {
    navigateTo(page);
    setIsMobileMenuOpen(false);
  };

  // Header trong suốt khi: Ở trang chủ + Chưa cuộn + Chưa mở menu mobile
  const isTransparent = currentPage === 'home' && !isScrolled && !isMobileMenuOpen;

  // Logic màu sắc: Nền trong suốt thì chữ Trắng, Nền đặc thì chữ Nâu
  const textColorClass = isTransparent ? 'text-spa-white' : 'text-spa-brown';
  const hoverColorClass = isTransparent ? 'hover:text-spa-milk' : 'hover:text-spa-green';
  const borderColorClass = isTransparent ? 'border-spa-white' : 'border-spa-brown';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        !isTransparent ? 'bg-spa-milk border-b border-spa-brown/10 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={() => navigateTo('home')} 
          className={`flex items-center space-x-3 group hover:opacity-80 transition-opacity ${textColorClass}`} 
          aria-label="Trang chủ Sen Mộc Spa"
        >
          <Flower2 className={`w-10 h-10 transition-colors duration-300 ${textColorClass}`} />
          <span className={`text-3xl font-serif font-bold tracking-wide transition-colors duration-300 ${textColorClass}`}>
            Sen Mộc
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.page)}
              className={`font-sans text-base uppercase tracking-widest transition-colors font-bold border-b-2 ${
                currentPage === link.page
                  ? `${borderColorClass} ${textColorClass}`
                  : `border-transparent ${hoverColorClass} ${textColorClass}`
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${textColorClass}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-spa-milk border-t border-spa-brown/20 py-8 flex flex-col items-center space-y-8 animate-fade-in-down shadow-xl h-screen">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.page)}
              className={`text-spa-brown font-serif text-3xl font-bold hover:text-spa-green ${currentPage === link.page ? 'underline decoration-2 underline-offset-8' : ''}`}
            >
              {link.name}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};