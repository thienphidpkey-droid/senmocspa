import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Massage Body Đá Nóng',
    description: 'Giảm đau nhức cơ bắp, thải độc tố và cải thiện tuần hoàn máu nhờ đá bazan nóng.',
    price: '450.000 VNĐ',
    duration: '90 phút',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Gội Đầu Dưỡng Sinh',
    description: 'Gội đầu thảo dược, massage bấm huyệt đầu cổ vai gáy, giúp ngủ ngon hơn.',
    price: '150.000 VNĐ',
    duration: '45 phút',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Trị Liệu Cổ Vai Gáy',
    description: 'Chuyên sâu cho dân văn phòng. Đả thông kinh lạc, giảm co cứng cơ.',
    price: '350.000 VNĐ',
    duration: '60 phút',
    imageUrl: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Chăm Sóc Da Organic',
    description: 'Quy trình 12 bước với mặt nạ ngũ hoa. Cấp ẩm sâu và trẻ hóa da.',
    price: '500.000 VNĐ',
    duration: '75 phút',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-spa-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-spa-brown font-sans uppercase tracking-widest text-base mb-3 font-bold">Dịch Vụ Nổi Bật</h2>
          <h3 className="text-5xl font-serif text-spa-brown font-bold">Thư Giãn & Trị Liệu</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service) => (
            <article key={service.id} className="group flex flex-col h-full bg-spa-milk hover:bg-spa-brown transition-colors duration-500">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={`Dịch vụ ${service.title}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-baseline mb-3">
                   <h4 className="font-serif text-2xl font-bold text-spa-brown group-hover:text-spa-milk transition-colors">{service.title}</h4>
                </div>
                <p className="text-gray-700 text-lg mb-6 line-clamp-4 flex-grow leading-relaxed group-hover:text-spa-milk/90 transition-colors">
                  {service.description}
                </p>
                <div className="flex justify-between items-center border-t border-gray-300 group-hover:border-spa-milk/20 pt-6 mt-auto">
                  <span className="font-sans font-bold text-xl text-spa-brown group-hover:text-white transition-colors">{service.price}</span>
                  <span className="text-base text-gray-500 group-hover:text-spa-milk/70 transition-colors">{service.duration}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};