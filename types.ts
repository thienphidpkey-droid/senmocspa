export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  imageUrl: string;
  // Detailed fields for popup
  fullDescription?: string;
  ingredients?: string[];
  steps?: string[];
  benefits?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface BookingData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}