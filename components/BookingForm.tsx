import React, { useState } from 'react';
import { BookingData } from '../types';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Cảm ơn ${formData.name}! Chúng tôi đã nhận được yêu cầu đặt lịch của bạn vào lúc ${formData.time} ngày ${formData.date}.`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="pt-32 pb-24 bg-spa-brown text-spa-milk min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Information */}
          <div className="w-full lg:w-1/3 pt-8">
            <h3 className="font-sans uppercase tracking-widest text-base mb-4 text-spa-milk/80 font-bold">Đặt Lịch Ngay</h3>
            <h2 className="text-5xl md:text-6xl font-serif mb-8 text-white leading-tight">Bạn Cần <br/> Thư Giãn?</h2>
            <p className="text-spa-milk/80 text-xl font-light leading-relaxed mb-8">
              Điền thông tin vào biểu mẫu bên cạnh, chúng tôi sẽ liên hệ xác nhận trong vòng 15 phút.
            </p>
            <div className="border-t border-spa-milk/20 pt-8">
               <p className="text-2xl font-serif font-bold">Hotline: 0912 345 678</p>
               <p className="text-lg mt-2 opacity-80">123 Đường Thảo Điền, Quận 2, TP.HCM</p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 bg-spa-milk text-spa-brown p-8 md:p-12 rounded-none shadow-none">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-base font-bold mb-3 uppercase tracking-wider">Họ tên</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-4 bg-white border-b-2 border-spa-brown/20 focus:border-spa-brown outline-none transition-colors text-lg"
                    placeholder="Nhập họ tên"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-base font-bold mb-3 uppercase tracking-wider">Số điện thoại</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-4 bg-white border-b-2 border-spa-brown/20 focus:border-spa-brown outline-none transition-colors text-lg"
                    placeholder="Nhập số điện thoại"
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-base font-bold mb-3 uppercase tracking-wider">Dịch vụ</label>
                <select
                  name="service"
                  className="w-full px-4 py-4 bg-white border-b-2 border-spa-brown/20 focus:border-spa-brown outline-none transition-colors text-lg"
                  onChange={handleChange}
                >
                  <option value="">Chọn dịch vụ...</option>
                  <option value="body">Massage Body Đá Nóng</option>
                  <option value="hair">Gội Đầu Dưỡng Sinh</option>
                  <option value="neck">Trị Liệu Cổ Vai Gáy</option>
                  <option value="face">Chăm Sóc Da Mặt</option>
                  <option value="bath">Tắm Trắng Phi Thuyền</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-base font-bold mb-3 uppercase tracking-wider">Ngày</label>
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full px-4 py-4 bg-white border-b-2 border-spa-brown/20 focus:border-spa-brown outline-none transition-colors text-lg"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-base font-bold mb-3 uppercase tracking-wider">Giờ</label>
                  <input
                    type="time"
                    name="time"
                    required
                    className="w-full px-4 py-4 bg-white border-b-2 border-spa-brown/20 focus:border-spa-brown outline-none transition-colors text-lg"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-spa-brown hover:bg-spa-brown/90 text-white font-bold py-5 text-xl uppercase tracking-widest transition-all duration-300 mt-6"
              >
                Gửi Yêu Cầu
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
