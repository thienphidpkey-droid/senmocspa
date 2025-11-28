import React, { useState } from 'react';
import { ServiceItem } from '../types';
import { Phone, Calendar, X, CheckCircle2, Clock, Leaf, Sparkles } from 'lucide-react';
import { useNavigation } from '../contexts/NavigationContext';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Massage Body Đá Nóng',
    description: 'Liệu pháp kết hợp sức nóng của đá bazan và tinh dầu thảo mộc, giúp đả thông kinh lạc.',
    fullDescription: 'Massage đá nóng là liệu pháp sử dụng những viên đá bazan được hấp nóng, đặt lên các huyệt đạo quan trọng trên cơ thể. Sức nóng lan tỏa giúp giãn nở các cơ, giảm đau nhức tức thì và thải độc tố qua tuyến mồ hôi.',
    ingredients: ['Đá Bazan tự nhiên giữ nhiệt', 'Tinh dầu gừng', 'Tinh dầu sả chanh', 'Dầu dừa nguyên chất'],
    steps: ['Khởi động ấn huyệt khô', 'Massage tinh dầu toàn thân', 'Chườm đá nóng lên huyệt đạo', 'Massage đầu cổ vai gáy'],
    benefits: 'Cảm giác cơ thể nhẹ nhõm như trút bỏ gánh nặng, giấc ngủ sâu hơn và tinh thần sảng khoái.',
    price: '450.000 VNĐ',
    duration: '90 phút',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Gội Đầu Dưỡng Sinh',
    description: 'Làm sạch da đầu bằng thảo dược, kết hợp massage đầu cổ vai gáy giảm stress.',
    fullDescription: 'Không chỉ là làm sạch tóc, gội đầu dưỡng sinh tại Sen Mộc tập trung vào việc massage, bấm huyệt vùng đầu, cổ, vai gáy giúp lưu thông khí huyết, giảm các triệu chứng đau đầu, mất ngủ.',
    ingredients: ['Bồ kết', 'Hương nhu', 'Mần trầu', 'Sả chanh', 'Vỏ bưởi', 'Gừng tươi'],
    steps: ['Khai huyệt vùng đầu', 'Gội lần 1 làm sạch', 'Gội lần 2 với nước thảo dược', 'Massage cổ vai gáy', 'Xả dưỡng và sấy khô'],
    benefits: 'Tóc mềm mượt hương thảo mộc, đầu óc minh mẫn, giảm hẳn đau đầu và căng thẳng.',
    price: '150.000 VNĐ',
    duration: '45 phút',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Trị Liệu Cổ Vai Gáy',
    description: 'Chuyên sâu cho dân văn phòng. Giải quyết tình trạng đau mỏi, co cứng cơ.',
    fullDescription: 'Liệu trình sử dụng kỹ thuật day ấn huyệt chuyên sâu kết hợp với chiếu đèn hồng ngoại và đắp thuốc thảo dược, tập trung xử lý các bó cơ bị co cứng vùng cổ vai gáy.',
    ingredients: ['Tinh dầu ngải cứu', 'Cao thảo dược đắp nóng', 'Rượu gừng hạ thổ'],
    steps: ['Xoa bóp làm mềm cơ', 'Ấn huyệt phong trì, kiên tỉnh', 'Đả thông kinh lạc bằng lược chải', 'Đắp thuốc thảo dược'],
    benefits: 'Vùng cổ vai gáy linh hoạt, hết đau mỏi, máu lên não tốt hơn giúp tăng khả năng tập trung.',
    price: '350.000 VNĐ',
    duration: '60 phút',
    imageUrl: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Chăm Sóc Da Organic',
    description: 'Quy trình chuẩn y khoa với mặt nạ ngũ hoa, cấp ẩm và trẻ hóa làn da.',
    fullDescription: 'Sử dụng hoàn toàn các sản phẩm organic lành tính. Liệu trình giúp làm sạch sâu lỗ chân lông, cung cấp độ ẩm cần thiết và Vitamin giúp da sáng khỏe tự nhiên.',
    ingredients: ['Sữa rửa mặt mầm gạo', 'Tẩy da chết yến mạch', 'Mặt nạ hạt ngũ hoa', 'Toner hoa hồng'],
    steps: ['Tẩy trang & Rửa mặt', 'Xông hơi hút dầu', 'Massage nâng cơ mặt', 'Đắp mặt nạ ngũ hoa', 'Chiếu ánh sáng sinh học'],
    benefits: 'Làn da căng mọng, mịn màng, lỗ chân lông se khít và da sáng bật tông ngay lần đầu.',
    price: '500.000 VNĐ',
    duration: '75 phút',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Ngâm Chân Thảo Dược',
    description: 'Bài thuốc cổ truyền giúp lưu thông khí huyết, giảm tê bì và ngủ ngon.',
    fullDescription: 'Đôi chân là trái tim thứ hai của cơ thể. Ngâm chân với nước thuốc sắc đặc biệt giúp kích thích các huyệt đạo dưới lòng bàn chân, hỗ trợ điều trị đau nhức xương khớp và mất ngủ.',
    ingredients: ['Muối khoáng Himalaya', 'Quế chi', 'Gừng già', 'Ngải cứu', 'Lá lốt'],
    steps: ['Rửa sạch chân', 'Ngâm chân trong bồn gỗ pơ mu', 'Massage bấm huyệt lòng bàn chân', 'Lau khô và ủ ấm'],
    benefits: 'Giảm tê bì chân tay, cơ thể ấm áp, dễ dàng đi vào giấc ngủ sâu.',
    price: '100.000 VNĐ',
    duration: '30 phút',
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac927ac4ac?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Tắm Trắng Phi Thuyền',
    description: 'Công nghệ ánh sáng sinh học kết hợp dưỡng chất thiên nhiên giúp da sáng hồng.',
    fullDescription: 'Sự kết hợp giữa công nghệ nhiệt quang đa điểm của phi thuyền tắm trắng và các tinh chất dưỡng trắng tự nhiên, giúp phá vỡ sắc tố melanin, mang lại làn da trắng hồng rạng rỡ.',
    ingredients: ['Tinh chất ngọc trai', 'Sữa non cô đặc', 'Cám gạo', 'Vitamin C tươi'],
    steps: ['Tẩy tế bào chết toàn thân', 'Ủ dưỡng chất trắng da', 'Nằm phi thuyền hồng ngoại', 'Bôi kem dưỡng khóa trắng'],
    benefits: 'Da bật 2-3 tông, đều màu, mịn màng và không bắt nắng.',
    price: '800.000 VNĐ',
    duration: '90 phút',
    imageUrl: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'Massage Thái Cổ Truyền',
    description: 'Bẻ cơ và kéo giãn chuyên sâu, giúp cơ thể dẻo dai linh hoạt.',
    fullDescription: 'Massage Thái tập trung vào các động tác ép, ấn, duỗi, kéo giãn giống như Yoga. Liệu pháp này tác động sâu vào các khớp và cơ, giúp giải phóng năng lượng tắc nghẽn.',
    ingredients: ['Dầu cù là Thái Lan', 'Khăn nóng', 'Trang phục cotton rộng rãi'],
    steps: ['Khai thông huyệt đạo', 'Ép cơ chân và lưng', 'Các động tác kéo giãn kiểu Yoga', 'Massage đầu kết thúc'],
    benefits: 'Cơ thể dẻo dai, hết cảm giác ê ẩm, năng lượng được tái tạo mạnh mẽ.',
    price: '500.000 VNĐ',
    duration: '90 phút',
    imageUrl: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '8',
    title: 'Xông Hơi Thảo Dược',
    description: 'Đào thải độc tố qua tuyến mồ hôi, thanh lọc cơ thể hiệu quả.',
    fullDescription: 'Sử dụng hơi nóng từ nồi nước xông thảo dược đậm đặc để làm giãn nở lỗ chân lông, đẩy bụi bẩn và độc tố tích tụ lâu ngày ra ngoài, đồng thời giúp giải cảm hiệu quả.',
    ingredients: ['Lá bưởi', 'Sả', 'Hương nhu', 'Bạc hà', 'Tía tô'],
    steps: ['Tắm tráng', 'Xông hơi ướt với thảo dược', 'Nghỉ ngơi uống trà gừng', 'Lau khô và thay đồ'],
    benefits: 'Cơ thể nhẹ nhõm, da dẻ hồng hào, tinh thần thư thái.',
    price: '120.000 VNĐ',
    duration: '30 phút',
    imageUrl: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '9',
    title: 'Massage Chân Reflexology',
    description: 'Kích thích các huyệt đạo phản xạ vùng chân, tốt cho nội tạng.',
    fullDescription: 'Phương pháp bấm huyệt phản xạ vùng chân dựa trên nguyên lý mỗi điểm ở chân tương ứng với một cơ quan trong cơ thể. Giúp điều hòa chức năng nội tạng và giảm đau nhức.',
    ingredients: ['Kem massage chân chuyên dụng', 'Tinh dầu bạc hà'],
    steps: ['Ngâm chân thảo dược', 'Massage bắp chân', 'Bấm huyệt lòng bàn chân', 'Lau khăn nóng'],
    benefits: 'Giảm đau chân do đi lại nhiều, cải thiện tiêu hóa và giấc ngủ.',
    price: '300.000 VNĐ',
    duration: '60 phút',
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac927ac4ac?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '10',
    title: 'Tẩy Tế Bào Chết Body',
    description: 'Loại bỏ lớp sừng già cỗi, mang lại làn da mịn màng tươi sáng.',
    fullDescription: 'Sử dụng các nguyên liệu tự nhiên có độ nhám nhẹ để massage toàn thân, lấy đi lớp da chết sần sùi, giúp da hấp thụ dưỡng chất tốt hơn.',
    ingredients: ['Cà phê Đắk Lắk', 'Muối hồng Himalaya', 'Dầu Olive', 'Mật ong'],
    steps: ['Xông hơi nhẹ', 'Massage tẩy da chết toàn thân', 'Tắm sạch', 'Thoa kem dưỡng ẩm'],
    benefits: 'Da mướt mịn ngay lập tức, đều màu và sáng khỏe hơn.',
    price: '250.000 VNĐ',
    duration: '45 phút',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '11',
    title: 'Massage Bầu Thư Giãn',
    description: 'Liệu pháp nhẹ nhàng giúp mẹ bầu giảm đau lưng, phù nề chân.',
    fullDescription: 'Thiết kế riêng cho phụ nữ mang thai (từ tháng thứ 4). Sử dụng kỹ thuật massage nhẹ nhàng, nằm nghiêng gối ôm, giúp giảm đau lưng hông và giảm sưng phù chân tay.',
    ingredients: ['Dầu dừa hữu cơ ép lạnh (an toàn cho bé)', 'Gối ôm chuyên dụng'],
    steps: ['Ngâm chân giảm phù nề', 'Massage lưng hông tư thế nằm nghiêng', 'Massage tay chân', 'Massage đầu nhẹ nhàng'],
    benefits: 'Mẹ bầu thư giãn, giảm đau nhức, ngủ ngon hơn và giảm stress thai kỳ.',
    price: '400.000 VNĐ',
    duration: '75 phút',
    imageUrl: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '12',
    title: 'Combo Dưỡng Sinh Toàn Diện',
    description: 'Kết hợp Gội đầu & Massage Body - Trải nghiệm thư giãn đỉnh cao.',
    fullDescription: 'Sự kết hợp hoàn hảo giữa 2 dịch vụ best-seller của Sen Mộc. Vừa chăm sóc mái tóc, vừa thư giãn cơ thể, mang lại hiệu quả phục hồi sức khỏe toàn diện nhất.',
    ingredients: ['Thảo dược gội đầu', 'Tinh dầu massage', 'Đá nóng', 'Túi thảo dược đắp mắt'],
    steps: ['Xông hơi', 'Massage Body 60p', 'Gội đầu dưỡng sinh 45p', 'Ăn nhẹ cháo thực dưỡng'],
    benefits: 'Cơ thể được F5 hoàn toàn, tràn đầy năng lượng tích cực.',
    price: '550.000 VNĐ',
    duration: '120 phút',
    imageUrl: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800&auto=format&fit=crop',
  }
];

export const Services: React.FC = () => {
  const { navigateTo } = useNavigation();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleBookNow = (serviceId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigateTo('booking');
  };

  const handleCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.location.href = 'tel:0912345678';
  };

  return (
    <section className="pt-32 pb-24 bg-spa-white min-h-screen relative overflow-hidden">
      {/* Abstract Wave Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 z-0">
        <svg viewBox="0 0 1440 320" className="absolute top-0 w-full text-spa-milk fill-current">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,122.7C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full text-spa-milk fill-current transform rotate-180">
          <path fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,106.7C672,117,768,171,864,186.7C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-spa-brown font-sans uppercase tracking-widest text-base mb-3 font-bold">Danh Sách Dịch Vụ</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-spa-brown font-bold mb-4">Thư Giãn & Trị Liệu</h3>
          <div className="w-24 h-1 bg-spa-brown mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
            "Mỗi liệu trình là một hành trình đánh thức giác quan, đưa bạn trở về với thiên nhiên thuần khiết."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article 
              key={service.id} 
              className="group flex flex-col h-full bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer border border-spa-milk rounded-sm overflow-hidden"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={`Dịch vụ ${service.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-4 right-4 bg-spa-white/90 text-spa-brown px-3 py-1 font-bold font-sans text-sm rounded shadow-sm">
                  {service.duration}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-serif text-2xl font-bold text-spa-brown mb-3 group-hover:text-spa-green transition-colors">{service.title}</h4>
                <p className="text-gray-600 text-base mb-6 line-clamp-3 flex-grow leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                   <span className="font-sans font-bold text-xl text-spa-brown">{service.price}</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-auto">
                   <button 
                      onClick={(e) => handleCall(e)}
                      className="flex items-center justify-center gap-2 border border-spa-brown text-spa-brown py-2 px-4 text-sm font-bold uppercase tracking-wider hover:bg-spa-brown hover:text-white transition-colors"
                   >
                      <Phone size={16} /> Hotline
                   </button>
                   <button 
                      onClick={(e) => handleBookNow(service.id, e)}
                      className="flex items-center justify-center gap-2 bg-spa-brown text-white py-2 px-4 text-sm font-bold uppercase tracking-wider hover:bg-spa-brown/90 transition-colors shadow-md"
                   >
                      <Calendar size={16} /> Đặt Lịch
                   </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedService && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 animate-fade-in-up">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedService(null)}></div>
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto relative rounded-sm shadow-2xl flex flex-col md:flex-row">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white text-spa-brown transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Image */}
            <div className="w-full md:w-2/5 h-64 md:h-auto sticky top-0">
              <img 
                src={selectedService.imageUrl} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="w-full md:w-3/5 p-8 md:p-10 bg-spa-white">
              <div className="mb-2 flex items-center gap-2 text-spa-green font-bold text-sm uppercase tracking-widest">
                <Sparkles size={16} />
                <span>Best Seller</span>
              </div>
              <h3 className="text-4xl font-serif font-bold text-spa-brown mb-4">{selectedService.title}</h3>
              
              <div className="flex flex-wrap gap-4 mb-6 text-gray-600 border-b border-gray-200 pb-6">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-spa-brown" />
                  <span>{selectedService.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl text-spa-brown">{selectedService.price}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-spa-brown mb-2 flex items-center gap-2">
                    <Leaf size={20} /> Mô tả liệu trình
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {selectedService.fullDescription || selectedService.description}
                  </p>
                </div>

                {selectedService.ingredients && (
                  <div>
                    <h4 className="font-bold text-lg text-spa-brown mb-2">🌿 Nguyên liệu thảo mộc</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {selectedService.ingredients.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                          <CheckCircle2 size={14} className="text-spa-green flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedService.steps && (
                  <div>
                    <h4 className="font-bold text-lg text-spa-brown mb-2">✨ Quy trình thực hiện</h4>
                    <div className="space-y-2">
                       {selectedService.steps.map((step, index) => (
                        <div key={index} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-spa-milk text-spa-brown font-bold text-xs flex items-center justify-center mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-gray-700 text-sm">{step}</p>
                        </div>
                       ))}
                    </div>
                  </div>
                )}
                 
                 {selectedService.benefits && (
                  <div className="bg-spa-milk/30 p-4 rounded border border-spa-milk">
                    <h4 className="font-bold text-lg text-spa-brown mb-1">💖 Cảm nhận sau liệu trình</h4>
                    <p className="text-gray-700 italic text-sm">
                      "{selectedService.benefits}"
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                 <button 
                  onClick={(e) => handleBookNow(selectedService.id, e)}
                  className="flex-1 bg-spa-brown text-white py-4 font-bold text-lg uppercase tracking-wider hover:bg-spa-brown/90 transition-colors shadow-lg"
                 >
                   Đặt Lịch Ngay
                 </button>
                 <button 
                   onClick={handleCall}
                   className="flex-1 border-2 border-spa-brown text-spa-brown py-4 font-bold text-lg uppercase tracking-wider hover:bg-spa-brown hover:text-white transition-colors"
                 >
                   Gọi 0912 345 678
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};