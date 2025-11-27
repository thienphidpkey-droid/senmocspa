import React from 'react';
import { Leaf, Droplets, Heart, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-spa-milk">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Grid - Simplified shapes */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop"
              alt="Tinh dầu thảo mộc tự nhiên dùng trong massage tại Sen Mộc"
              className="rounded-none shadow-none w-full h-80 object-cover"
              loading="lazy"
            />
            <img
              src="https://images.unsplash.com/photo-1519823551278-64ac927ac4ac?q=80&w=800&auto=format&fit=crop"
              alt="Khăn spa sạch sẽ và không gian thư giãn"
              className="rounded-none shadow-none w-full h-80 object-cover mt-12"
              loading="lazy"
            />
          </div>

          {/* Text Content - Larger Fonts */}
          <div className="w-full md:w-1/2">
            <h2 className="text-spa-brown font-sans uppercase tracking-widest text-base mb-4 font-bold border-l-4 border-spa-brown pl-4">Về Sen Mộc Spa</h2>
            <h3 className="text-5xl font-serif text-spa-brown mb-8 font-bold leading-tight">Tinh Hoa Thảo Mộc <br/> Chuyên Gia Trị Liệu</h3>
            
            <div className="space-y-6 text-xl text-gray-700">
              <p className="leading-relaxed">
                Với hơn <strong className="text-spa-brown">5 năm kinh nghiệm</strong>, Sen Mộc Spa mang đến sự kết hợp hoàn hảo giữa y học cổ truyền và không gian thiền tịnh.
              </p>
              <p className="leading-relaxed">
                Đội ngũ kỹ thuật viên được <strong className="text-spa-brown">đào tạo bài bản</strong>, sử dụng 100% thảo dược tự nhiên lành tính.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              <div className="flex items-center gap-4">
                <Leaf size={32} className="text-spa-brown" />
                <span className="font-serif font-bold text-spa-brown text-xl">100% Thảo Dược</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Award size={32} className="text-spa-brown" />
                <span className="font-serif font-bold text-spa-brown text-xl">KTV Chuyên Nghiệp</span>
              </div>

              <div className="flex items-center gap-4">
                <Droplets size={32} className="text-spa-brown" />
                <span className="font-serif font-bold text-spa-brown text-xl">Tinh Dầu Cao Cấp</span>
              </div>

              <div className="flex items-center gap-4">
                <Heart size={32} className="text-spa-brown" />
                <span className="font-serif font-bold text-spa-brown text-xl">Phục Vụ Tận Tâm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};