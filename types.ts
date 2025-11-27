export type Category = 'kids' | 'adults' | 'professional' | 'accessories' | 'protection';

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  image: string; // Keep for backward compatibility (main image)
  images?: string[]; // New: Array of all images (Main + Thumbnails)
  colors?: string[]; // New: Available colors
  sizes?: string[]; // New: Available sizes
  description: string;
  longDescription?: string; // Content Depth
  specs?: Specification[]; // Expertise
  reviews?: Review[]; // Trustworthiness
  faqs?: FAQ[]; // Helpful Content
  isFeatured?: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Article {
  id: number;
  title: string;
  summary: string;
  content?: string; // Added for content depth
  category: 'News' | 'Guide' | 'Location';
  date: string;
  author: string; // EEAT
  image: string;
}

export interface Location {
  id: number;
  name: string;
  address: string;
  type: 'Indoor' | 'Outdoor' | 'Park';
  image: string;
  mapLink?: string; // Outbound Link Quality
}

export type Page = 'home' | 'shop' | 'news' | 'contact' | 'admin';

export type PaymentMethod = 'cod' | 'momo' | 'bank';