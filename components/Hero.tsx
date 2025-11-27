import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

export const Hero: React.FC = () => {
  const { navigateTo } = useNavigation();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=60&w=2000&auto=format&fit=crop"
          srcSet="
            https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=60&w=640&auto=format&fit=crop 640w,
            https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=60&w=768&auto=format&fit=crop 768w,
            https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=60&w=1024&auto=format&fit=crop 1024w,
            https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=60&w=1280&auto=format&fit=crop 1280w,
            https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=60&w=1536&auto=format&fit=crop 1536w,
            https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=60&w=2000&auto=format&fit=crop 2000w
          "
          sizes="100vw"
          alt="Không gian nội thất sang trọng, ấm cúng của Sen Mộc Spa tại TP.HCM"
          className="w-full h-full object-cover"
          loading="eager" 
          fetchPriority="high"
        />
        {/* Darker overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-spa-brown/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-spa-milk"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20 animate-fade-in-up">
        <span className="block text-spa-white font-sans text-lg uppercase tracking-[0.3em] mb-6 font-bold drop-shadow-md">
          Chữa lành Thân - Tâm - Trí
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-spa-white mb-8 leading-tight font-bold drop-shadow-lg">
          Sen Mộc Spa <br/> 
          <span className="italic text-spa-milk block mt-4 font-normal">Wellness & Therapy</span>
        </h1>
        
        <p className="text-spa-milk text-xl md:text-2xl font-medium mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Liệu trình massage cổ truyền & thảo dược thiên nhiên TP.HCM
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button
            onClick={() => navigateTo('booking')}
            className="group bg-spa-brown hover:bg-spa-brown/90 text-white px-10 py-4 rounded-none transition-all duration-300 flex items-center justify-center gap-3 text-lg font-bold tracking-wide border border-spa-brown shadow-lg"
            aria-label="Đặt lịch ngay tại Sen Mộc Spa"
          >
            Đặt Lịch Ngay
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => navigateTo('services')}
            className="bg-transparent hover:bg-spa-white hover:text-spa-brown text-spa-white border border-spa-white px-10 py-4 rounded-none transition-all duration-300 text-lg font-bold tracking-wide shadow-sm"
            aria-label="Xem chi tiết các dịch vụ"
          >
            Xem Dịch Vụ
          </button>
        </div>
      </div>
    </section>
  );
};
