import React from 'react';
import { Flower2, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2a1d19] text-spa-milk pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="flex items-center space-x-3 text-spa-milk group">
              <Flower2 className="w-10 h-10" />
              <span className="text-3xl font-serif font-bold tracking-wide">Sen Mộc</span>
            </a>
            <p className="text-spa-milk/80 text-lg leading-relaxed font-light max-w-sm">
              Nơi nuôi dưỡng vẻ đẹp tự nhiên và mang lại sự cân bằng cho tâm hồn. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-2xl mb-8 text-white">Liên Kết</h4>
            <nav>
              <ul className="space-y-4 text-spa-milk/80 text-lg">
                <li><a href="#" className="hover:text-white transition-colors">Trang chủ</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Dịch vụ</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Đặt lịch</a></li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif font-bold text-2xl mb-8 text-white">Liên Hệ</h4>
            <address className="not-italic">
              <ul className="space-y-6 text-spa-milk/80 text-lg">
                <li className="flex items-start gap-4">
                  <MapPin size={24} className="mt-1 flex-shrink-0" />
                  <span>123 Đường Thảo Điền, Quận 2, TP.HCM</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={24} />
                  <a href="tel:0912345678" className="hover:text-white transition-colors">0912 345 678</a>
                </li>
                <li className="flex items-center gap-4">
                  <Mail size={24} />
                  <a href="mailto:contact@senmocspa.vn" className="hover:text-white transition-colors">contact@senmocspa.vn</a>
                </li>
              </ul>
            </address>
            
             <div className="flex space-x-6 mt-8">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-spa-milk hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={28} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-spa-milk hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={28} />
                </a>
              </div>
          </div>
        </div>

        <div className="border-t border-spa-milk/10 pt-8 text-center text-spa-milk/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Sen Mộc Spa & Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};