import React, { useState, useEffect, createContext, useContext, useMemo, useLayoutEffect } from 'react';
import { HashRouter, Routes, Route, Outlet, Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ShoppingCart, Menu, X, ArrowRight, Star, Settings, Trash2, Zap, Box, Activity, MapPin, Phone, Mail, Facebook, Instagram, Search, Filter, Hexagon, Plus, Sparkles, AlertTriangle, Check, User, QrCode, CreditCard, Banknote, LayoutDashboard, FileText, Edit, Image as ImageIcon, Save, PlusCircle, ArrowLeft } from 'lucide-react';
import { MOCK_PRODUCTS, MOCK_ARTICLES } from './constants';
import { Product, CartItem, Category, Article } from './types';

// --- Utilities ---

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Context & State Management ---

// 1. Data Context (Products & Articles)
interface DataContextType {
  products: Product[];
  articles: Article[];
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (id: number) => void;
  addArticle: (article: Article) => void;
  updateArticle: (article: Article) => void;
  deleteArticle: (id: number) => void;
}

const DataContext = createContext<DataContextType | null>(null);

const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};

const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize with Mocks, but allow state changes
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [articles, setArticles] = useState<Article[]>(MOCK_ARTICLES);

  const addProduct = (product: Product) => {
    const newProduct = { ...product, id: Date.now() }; // Simple ID generation
    setProducts(prev => [newProduct, ...prev]);
  };

  const updateProduct = (product: Product) => {
    setProducts(prev => prev.map(p => p.id === product.id ? product : p));
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const addArticle = (article: Article) => {
    const newArticle = { ...article, id: Date.now() };
    setArticles(prev => [newArticle, ...prev]);
  };

  const updateArticle = (article: Article) => {
    setArticles(prev => prev.map(a => a.id === article.id ? article : a));
  };

  const deleteArticle = (id: number) => {
    setArticles(prev => prev.filter(a => a.id !== id));
  };

  const value = useMemo(() => ({
    products, articles, addProduct, updateProduct, deleteProduct, addArticle, updateArticle, deleteArticle
  }), [products, articles]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

// 2. Shop Context (Cart)
interface ShopContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  toggleCart: () => void;
  buyNow: (product: Product) => void;
}

const ShopContext = createContext<ShopContextType | null>(null);

const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within ShopProvider");
  return context;
};

const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === product.id);
      if (existing) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const buyNow = (product: Product) => {
    addToCart(product);
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => setCart(prev => prev.filter(p => p.id !== id));

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, quantity: Math.max(1, p.quantity + delta) };
      }
      return p;
    }));
  };

  const clearCart = () => setCart([]);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const value = useMemo(() => ({
    cart, addToCart, removeFromCart, updateQuantity, clearCart, isCartOpen, toggleCart, buyNow
  }), [cart, isCartOpen]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// --- Atomic Components ---

const Button: React.FC<{ 
  children: React.ReactNode; 
  onClick?: (e: React.MouseEvent) => void; 
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}> = ({ children, onClick, variant = 'primary', className = '', disabled = false, type = 'button' }) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30',
    secondary: 'bg-secondary text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30',
    danger: 'bg-red-500 text-white hover:bg-red-600',
    success: 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/30',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary-light'
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={`relative px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Badge: React.FC<{ children: React.ReactNode; color?: 'blue' | 'orange' | 'green' | 'gray' }> = ({ children, color = 'blue' }) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-700',
    orange: 'bg-orange-100 text-orange-700',
    green: 'bg-green-100 text-green-700',
    gray: 'bg-gray-100 text-gray-700',
  };
  return (
    <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${colors[color]}`}>
      {children}
    </span>
  );
};

// --- Layout Components ---

const Navbar = () => {
  const { cart, toggleCart } = useShop();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { path: '/', label: 'Trang Chủ' },
    { path: '/shop', label: 'Sản Phẩm' },
    { path: '/news', label: 'Tin Tức' },
    { path: '/contact', label: 'Liên Hệ' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg text-white shadow-lg shadow-primary/20">
            <Hexagon className="fill-current" size={24} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-black text-2xl text-primary tracking-tight">NEON<span className="text-dark">GLIDE</span></span>
            <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Vietnam</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                location.pathname === link.path 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-gray-500 hover:text-primary hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Admin link hidden as requested, but route remains accessible via /admin */}
          
          <button onClick={toggleCart} className="relative p-2 text-gray-600 hover:text-primary transition-colors hover:bg-gray-100 rounded-full">
            <ShoppingCart size={24} />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center bg-secondary text-white text-[10px] font-bold rounded-full shadow-md animate-bounce">
                {totalItems}
              </span>
            )}
          </button>
          <button className="md:hidden text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-2 shadow-xl animate-in slide-in-from-top duration-200">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="p-4 text-center font-bold text-gray-700 hover:bg-primary-light hover:text-primary rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const CartDrawer = () => {
  const { isCartOpen, toggleCart, cart, removeFromCart, updateQuantity, clearCart } = useShop();
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'momo' | 'bank'>('cod');
  const [showQR, setShowQR] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (paymentMethod === 'momo' || paymentMethod === 'bank') {
      setShowQR(true);
    } else {
      alert('Đặt hàng thành công! Chúng tôi sẽ liên hệ sớm.');
      clearCart();
      toggleCart();
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={toggleCart} />
      <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h2 className="font-bold text-xl text-dark flex items-center gap-2">
            <ShoppingCart className="text-primary" size={20} /> GIỎ HÀNG
          </h2>
          <button onClick={toggleCart} className="text-gray-400 hover:text-red-500"><X /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-400 space-y-4">
              <ShoppingCart size={64} className="opacity-10" />
              <p>Giỏ hàng của bạn đang trống</p>
              <button onClick={toggleCart} className="text-primary font-bold hover:underline">
                Tiếp tục mua sắm
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-contain p-2 bg-gray-50 rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-bold text-dark text-sm line-clamp-2">{item.name}</h4>
                      <p className="text-primary font-bold text-sm my-1">{item.price.toLocaleString()} ₫</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center bg-gray-100 rounded-lg h-8 px-2 gap-3">
                          <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-primary font-bold w-6">-</button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-primary font-bold w-6">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 p-2"><Trash2 size={16}/></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Methods */}
              <div className="pt-4 border-t border-gray-100">
                <h3 className="font-bold text-dark mb-3">Phương thức thanh toán</h3>
                <div className="grid grid-cols-1 gap-3">
                  <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary/50'}`}>
                    <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-4 h-4 text-primary accent-primary" />
                    <div className="flex items-center gap-2">
                      <Banknote size={20} className="text-green-600"/>
                      <span className="font-medium text-sm">Thanh toán khi nhận hàng (COD)</span>
                    </div>
                  </label>
                  
                  <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'momo' ? 'border-[#D82D8B] bg-[#D82D8B]/5' : 'border-gray-200 hover:border-[#D82D8B]/50'}`}>
                    <input type="radio" name="payment" value="momo" checked={paymentMethod === 'momo'} onChange={() => setPaymentMethod('momo')} className="w-4 h-4 text-[#D82D8B] accent-[#D82D8B]" />
                    <div className="flex items-center gap-2">
                      <QrCode size={20} className="text-[#D82D8B]"/>
                      <span className="font-medium text-sm">Ví MoMo</span>
                    </div>
                  </label>

                  <label className={`flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-all ${paymentMethod === 'bank' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                    <input type="radio" name="payment" value="bank" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} className="w-4 h-4 text-blue-600 accent-blue-600" />
                    <div className="flex items-center gap-2">
                      <CreditCard size={20} className="text-blue-600"/>
                      <span className="font-medium text-sm">Chuyển khoản Ngân hàng (QR)</span>
                    </div>
                  </label>
                </div>
              </div>
            </>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-4">
            <div className="flex justify-between font-bold text-lg text-dark">
              <span>TỔNG CỘNG</span>
              <span className="text-primary">{total.toLocaleString()} ₫</span>
            </div>
            <Button className="w-full" onClick={handleCheckout}>
              THANH TOÁN NGAY
            </Button>
          </div>
        )}

        {/* Fake QR Modal Overlay inside Drawer */}
        {showQR && (
          <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
             <div className="w-full max-w-sm text-center">
                <h3 className="text-xl font-bold text-dark mb-2">Quét mã để thanh toán</h3>
                <p className="text-gray-500 text-sm mb-6">Sử dụng ứng dụng {paymentMethod === 'momo' ? 'MoMo' : 'Ngân hàng'} để quét mã</p>
                
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 inline-block mb-6 relative overflow-hidden">
                   <div className="w-48 h-48 bg-gray-900 flex items-center justify-center text-white">
                      <QrCode size={100} />
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 pointer-events-none"></div>
                </div>

                <div className="font-mono text-lg font-bold text-dark mb-6">{total.toLocaleString()} ₫</div>

                <div className="flex flex-col gap-3">
                   <Button variant="success" onClick={() => { setShowQR(false); clearCart(); alert('Thanh toán thành công!'); toggleCart(); }}>
                      Xác nhận đã thanh toán
                   </Button>
                   <Button variant="outline" onClick={() => setShowQR(false)}>
                      Quay lại
                   </Button>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-white/50 backdrop-blur-sm border-t border-white/50 pt-16 pb-8 text-gray-600">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="space-y-4">
        <h3 className="font-display font-black text-2xl text-primary">NEON<span className="text-dark">GLIDE</span></h3>
        <p className="text-sm leading-relaxed">
          Hệ thống phân phối giày Patin chính hãng hàng đầu Việt Nam. Chất lượng quốc tế, bảo hành uy tín.
        </p>
        <div className="flex gap-4">
          {[Facebook, Instagram, Mail].map((Icon, i) => (
            <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-white shadow-sm rounded-full hover:bg-primary hover:text-white transition-all hover:scale-110">
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-bold text-dark mb-6 uppercase text-sm tracking-wider">Sản Phẩm</h4>
        <ul className="space-y-3 text-sm">
          <li><Link to="/shop?cat=professional" className="hover:text-primary transition-colors">Giày Chuyên Nghiệp</Link></li>
          <li><Link to="/shop?cat=kids" className="hover:text-primary transition-colors">Giày Trẻ Em</Link></li>
          <li><Link to="/shop?cat=adults" className="hover:text-primary transition-colors">Giày Người Lớn</Link></li>
          <li><Link to="/shop?cat=accessories" className="hover:text-primary transition-colors">Phụ Kiện & Bảo Hộ</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-dark mb-6 uppercase text-sm tracking-wider">Hỗ Trợ</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-primary transition-colors">Chính sách bảo hành</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Hướng dẫn chọn size</a></li>
          <li><a href="#" className="hover:text-primary transition-colors">Vận chuyển & Thanh toán</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-dark mb-6 uppercase text-sm tracking-wider">Liên Hệ</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center gap-2"><MapPin size={16} className="text-primary"/> Số 10, Phố Patin, Hà Nội</li>
          <li className="flex items-center gap-2"><Phone size={16} className="text-primary"/> 0900 888 777</li>
          <li className="flex items-center gap-2"><Mail size={16} className="text-primary"/> cskh@neonglide.vn</li>
        </ul>
      </div>
    </div>
    <div className="mt-16 pt-8 border-t border-gray-200 text-center text-xs font-semibold text-gray-400">
      © 2024 NeonGlide Vietnam. All Rights Reserved.
    </div>
  </footer>
);

// --- Pages ---

const HomePage = () => {
  const { products } = useData();
  const featuredProducts = useMemo(() => products.slice(0, 8), [products]);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block mb-6 animate-in slide-in-from-top fade-in duration-700">
            <span className="bg-white/80 backdrop-blur-md border border-white px-4 py-2 rounded-full shadow-sm text-sm font-bold text-primary flex items-center gap-2 mx-auto w-fit">
              <Star size={14} className="fill-primary" /> Thương hiệu Patin số 1 Việt Nam
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-dark mb-6 tracking-tight leading-tight">
            Lướt Cùng <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Đam Mê</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Khám phá bộ sưu tập giày Patin chính hãng với thiết kế hiện đại, 
            an toàn tuyệt đối cho người mới bắt đầu và vận động viên chuyên nghiệp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/shop"><Button className="shadow-xl shadow-primary/20">Xem Sản Phẩm</Button></Link>
            <Link to="/news"><Button variant="outline">Tin Tức & Sự Kiện</Button></Link>
          </div>
        </div>
      </section>

      {/* Categories Grid with Images */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">Danh Mục Sản Phẩm</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {[
              { id: 'kids', label: 'Giày Trẻ Em', img: "https://i.postimg.cc/PJd3R4R4/unnamed_(3).jpg" },
              { id: 'adults', label: 'Giày Người Lớn', img: "https://i.postimg.cc/nhPpvsP8/unnamed_(4).jpg" },
              { id: 'professional', label: 'Giày Chuyên Nghiệp', img: "https://i.postimg.cc/wB5gR9nR/unnamed-(5).jpg" },
              { id: 'accessories', label: 'Phụ Kiện Patin', img: "https://i.postimg.cc/1twS1srH/unnamed-(6).jpg" }
            ].map((cat) => (
              <Link key={cat.id} to={`/shop?cat=${cat.id}`} className="group relative h-48 md:h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                   <h3 className="font-bold text-lg md:text-2xl text-white mb-1">{cat.label}</h3>
                   <span className="text-xs md:text-sm text-gray-300 font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Xem ngay <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Horizontal Swipe */}
      <section className="py-20 bg-white/40 backdrop-blur-sm border-y border-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-dark">Sản Phẩm Nổi Bật</h2>
              <p className="text-gray-500 mt-2">Vuốt để xem thêm nhiều lựa chọn hấp dẫn</p>
            </div>
            <Link to="/shop" className="text-primary font-bold hover:underline flex items-center gap-2">
              Xem tất cả <ArrowRight size={16} />
            </Link>
          </div>
          
          {/* Horizontal Scroll Container */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 scrollbar-hide">
             {featuredProducts.map(p => (
               <Link to={`/product/${p.id}`} key={p.id} className="snap-center shrink-0 w-[280px] group bg-white rounded-2xl p-4 shadow-soft hover:shadow-hover transition-all border border-white/60">
                  <div className="relative aspect-square mb-4 bg-gray-50 rounded-xl overflow-hidden">
                     <img src={p.image} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500" />
                     {p.category === 'kids' && <div className="absolute top-2 left-2"><Badge color="orange">Trẻ Em</Badge></div>}
                  </div>
                  <h3 className="font-bold text-dark text-sm mb-1 truncate group-hover:text-primary">{p.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                     <p className="text-primary font-bold">{p.price.toLocaleString()} ₫</p>
                     <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Plus size={16} />
                     </div>
                  </div>
               </Link>
             ))}
             {/* View More Card */}
             <Link to="/shop" className="snap-center shrink-0 w-[280px] flex flex-col items-center justify-center bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 hover:border-primary hover:bg-blue-50 transition-all cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 group-hover:text-primary mb-4 group-hover:scale-110 transition-transform">
                   <ArrowRight size={32} />
                </div>
                <span className="font-bold text-gray-500 group-hover:text-primary">Xem tất cả sản phẩm</span>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const ShopPage = () => {
  const [filter, setFilter] = useState<Category | 'all'>('all');
  const [search, setSearch] = useState('');
  const location = useLocation();
  const { addToCart } = useShop();
  const { products } = useData();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    if (cat) setFilter(cat as Category);
  }, [location]);

  const filtered = products.filter(p => {
    return (filter === 'all' || p.category === filter) && 
           p.name.toLowerCase().includes(search.toLowerCase());
  });

  const categories = [
    { id: 'all', label: 'Tất Cả' },
    { id: 'kids', label: 'Trẻ Em' },
    { id: 'adults', label: 'Người Lớn' },
    { id: 'professional', label: 'Chuyên Nghiệp' },
    { id: 'accessories', label: 'Phụ Kiện' }
  ];

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-soft mb-8 border border-white">
           <h1 className="text-2xl font-bold text-dark mb-4">Cửa Hàng</h1>
           <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                {categories.map(c => (
                  <button 
                    key={c.id}
                    onClick={() => setFilter(c.id as any)}
                    className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                      filter === c.id 
                        ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
           </div>
        </div>

        {/* Grid */}
        <div className="flex justify-between items-center mb-6">
           <span className="text-sm font-semibold text-gray-500">Tìm thấy {filtered.length} sản phẩm</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {filtered.map(p => (
              <div key={p.id} className="group bg-white rounded-2xl p-4 shadow-soft hover:shadow-hover border border-white transition-all duration-300">
                 <Link to={`/product/${p.id}`} className="block relative aspect-square mb-4 bg-gray-50 rounded-xl overflow-hidden cursor-pointer">
                    <img src={p.image} className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
                    {p.isFeatured && <div className="absolute top-2 left-2"><Badge color="orange">Hot</Badge></div>}
                 </Link>
                 <div>
                    <Link to={`/product/${p.id}`}>
                      <h3 className="font-bold text-dark mb-1 truncate hover:text-primary transition-colors">{p.name}</h3>
                    </Link>
                    <div className="text-xs text-gray-400 mb-3 capitalize">{p.category}</div>
                    <div className="flex justify-between items-center">
                       <span className="text-lg font-bold text-primary">{p.price.toLocaleString()} ₫</span>
                       <button 
                          onClick={(e) => {
                             e.preventDefault();
                             addToCart(p);
                          }} 
                          className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                          title="Thêm vào giỏ"
                       >
                          <Plus size={20} />
                       </button>
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useData();
  const product = useMemo(() => products.find(p => p.id === Number(id)), [products, id]);
  const { addToCart, buyNow } = useShop();
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return <div className="pt-32 text-center text-gray-500">Sản phẩm không tồn tại</div>;

  const displayImages = product.images && product.images.length > 0 ? product.images : [product.image];
  const reviews = product.reviews || [];

  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-8 flex items-center gap-2">
           <Link to="/" className="hover:text-primary">Trang chủ</Link> / 
           <Link to="/shop" className="hover:text-primary">Sản phẩm</Link> / 
           <span className="text-dark font-medium">{product.name}</span>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-soft grid grid-cols-1 md:grid-cols-2 gap-12 border border-white mb-8">
          {/* Gallery */}
          <div className="space-y-4">
             <div className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center p-8 border border-gray-100 relative overflow-hidden group">
                <img src={displayImages[activeImage]} className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
             </div>
             <div className="grid grid-cols-4 gap-4">
                {displayImages.map((img, idx) => (
                   <button 
                      key={idx} 
                      onClick={() => setActiveImage(idx)}
                      className={`aspect-square rounded-xl bg-gray-50 p-2 border-2 transition-all ${
                         activeImage === idx ? 'border-primary' : 'border-transparent hover:border-gray-200'
                      }`}
                   >
                      <img src={img} className="w-full h-full object-contain" />
                   </button>
                ))}
             </div>
          </div>

          {/* Info */}
          <div className="space-y-8">
             <div>
                <Badge color="blue">{product.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-dark mt-4 mb-2">{product.name}</h1>
                <div className="flex items-center gap-2">
                   <div className="flex text-yellow-400">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <span className="text-sm text-gray-400">({reviews.length} đánh giá)</span>
                </div>
             </div>
             
             <div className="text-3xl font-bold text-primary">
                {product.price.toLocaleString()} ₫
             </div>

             <div className="prose prose-sm text-gray-600">
                <p>{product.description}</p>
                {product.longDescription && <p className="mt-2">{product.longDescription}</p>}
             </div>

             {/* Specs - Vertical Column Layout */}
             {product.specs && (
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                   <h3 className="font-bold text-dark mb-4 flex items-center gap-2">
                      <Activity size={18} className="text-primary"/> Thông Số Kỹ Thuật
                   </h3>
                   <div className="grid grid-cols-1 gap-y-3">
                      {product.specs.map((s, i) => (
                         <div key={i} className="flex justify-between text-sm border-b border-gray-200 pb-2 last:border-0">
                            <span className="text-gray-500 font-medium">{s.label}</span>
                            <span className="font-medium text-dark text-right pl-4">{s.value}</span>
                         </div>
                      ))}
                   </div>
                </div>
             )}

             <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="flex-1 py-4 text-lg border-2" onClick={() => addToCart(product)}>
                   THÊM VÀO GIỎ
                </Button>
                <Button variant="primary" className="flex-1 py-4 text-lg shadow-xl shadow-primary/20" onClick={() => buyNow(product)}>
                   MUA NGAY
                </Button>
             </div>

             {/* Policies */}
             <div className="grid grid-cols-2 gap-4 text-xs font-medium text-gray-500">
                <div className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Bảo hành chính hãng 24 tháng</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Đổi trả trong 30 ngày</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Miễn phí vận chuyển toàn quốc</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-green-500"/> Hỗ trợ kỹ thuật trọn đời</div>
             </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-soft border border-white">
            <div className="flex items-center justify-between mb-8">
               <h2 className="text-2xl font-bold text-dark flex items-center gap-2">
                  <Star className="text-yellow-400 fill-current" /> Đánh Giá Sản Phẩm
               </h2>
               {reviews.length > 0 && (
                  <Button variant="outline" className="text-sm py-2 px-4">Viết đánh giá</Button>
               )}
            </div>
            
            {reviews.length > 0 ? (
               <div className="grid grid-cols-1 gap-6">
                  {reviews.map((review) => (
                     <div key={review.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <div className="flex justify-between items-start mb-3">
                           <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                 {review.user.charAt(0)}
                              </div>
                              <div>
                                 <div className="font-bold text-dark">{review.user}</div>
                                 <div className="flex text-yellow-400 text-xs">
                                    {[...Array(5)].map((_, i) => (
                                       <Star key={i} size={12} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-gray-300" : ""} />
                                    ))}
                                 </div>
                              </div>
                           </div>
                           <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded-full border border-gray-100">{review.date}</span>
                        </div>
                        <p className="text-gray-600 pl-13">{review.comment}</p>
                     </div>
                  ))}
               </div>
            ) : (
               <div className="text-center py-12 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                  <div className="flex justify-center mb-4">
                     <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-300 animate-bounce">
                        <FileText size={32} />
                     </div>
                  </div>
                  <h3 className="font-bold text-gray-600 text-lg mb-2">Chưa có đánh giá nào</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                     Sản phẩm này chưa nhận được đánh giá nào. Hãy là người đầu tiên chia sẻ trải nghiệm của bạn!
                  </p>
                  <Button className="shadow-lg shadow-primary/20">Viết Đánh Giá Ngay</Button>
               </div>
            )}
        </div>

      </div>
    </div>
  );
};

const NewsPage = () => {
  const { articles } = useData();

  return (
    <div className="pt-28 pb-20 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="font-bold text-3xl text-dark mb-2">Tin Tức & Sự Kiện</h1>
        <p className="text-gray-500 mb-12">Cập nhật thông tin mới nhất từ cộng đồng Patin Việt Nam.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map(a => (
            <div key={a.id} className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 group border border-white">
              <Link to={`/news/${a.id}`} className="block h-48 overflow-hidden relative cursor-pointer">
                 <div className="absolute top-4 left-4 z-10"><Badge color="blue">{a.category}</Badge></div>
                 <img src={a.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </Link>
              <div className="p-6">
                <div className="text-xs font-bold text-gray-400 mb-2 flex items-center gap-2">
                   <span>{a.date}</span> • <span>{a.author}</span>
                </div>
                <Link to={`/news/${a.id}`}>
                  <h3 className="font-bold text-xl text-dark mb-3 group-hover:text-primary transition-colors cursor-pointer">{a.title}</h3>
                </Link>
                <p className="text-sm text-gray-500 line-clamp-3 mb-4">{a.summary}</p>
                <Link 
                  to={`/news/${a.id}`}
                  className="text-sm font-bold text-primary flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Đọc tiếp <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NewsDetailPage = () => {
  const { id } = useParams();
  const { articles } = useData();
  const article = articles.find(a => a.id === Number(id));

  if (!article) return <div className="pt-32 text-center text-gray-500">Bài viết không tồn tại</div>;

  return (
    <div className="pt-28 pb-20 min-h-screen">
       <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Link 
              to="/news"
              className="flex items-center gap-2 text-gray-500 hover:text-primary font-bold text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} /> Quay lại tin tức
            </Link>
            <Badge color="blue">{article.category}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-dark mt-4 mb-4 leading-tight">{article.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
               <span>{article.date}</span>
               <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
               <span>Tác giả: {article.author}</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden mb-10 shadow-xl">
             <img src={article.image} alt={article.title} className="w-full h-auto object-cover" />
          </div>

          <div className="prose prose-lg prose-blue max-w-none text-gray-700">
             <p className="lead font-medium text-xl text-gray-600 mb-8">{article.summary}</p>
             {article.content ? (
               <div dangerouslySetInnerHTML={{ __html: article.content }} />
             ) : (
               <div>
                 <p>Nội dung chi tiết của bài viết đang được cập nhật. Hãy tưởng tượng đây là một bài viết rất dài và chi tiết về "{article.title}".</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                 <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
             )}
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
             <h3 className="font-bold text-lg mb-4">Chia sẻ bài viết này</h3>
             <div className="flex justify-center gap-4">
                <button className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700"><Facebook size={20}/></button>
                <button className="p-3 rounded-full bg-pink-600 text-white hover:bg-pink-700"><Instagram size={20}/></button>
             </div>
          </div>
       </div>
    </div>
  );
};

const AdminPage = () => {
  const { products, articles, addProduct, updateProduct, deleteProduct, addArticle, updateArticle, deleteArticle } = useData();
  const [activeTab, setActiveTab] = useState<'products' | 'news'>('products');
  const [editingItem, setEditingItem] = useState<any>(null); // Product or Article
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Form State
  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsFormOpen(true);
  };

  const handleCreate = () => {
    setEditingItem(null); // Null means creating new
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa mục này?')) {
      if (activeTab === 'products') deleteProduct(id);
      else deleteArticle(id);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    if (activeTab === 'products') {
      const productData: any = {
        id: editingItem ? editingItem.id : 0, // ID handled by provider if 0
        name: formData.get('name') as string,
        category: formData.get('category') as Category,
        price: Number(formData.get('price')),
        image: formData.get('image') as string,
        description: formData.get('description') as string,
        // Reuse existing complex fields if editing, or defaults
        images: editingItem?.images || [formData.get('image') as string],
        colors: editingItem?.colors || [],
        sizes: editingItem?.sizes || [],
        specs: editingItem?.specs || [],
      };

      if (editingItem) updateProduct(productData);
      else addProduct(productData);

    } else {
      const articleData: any = {
         id: editingItem ? editingItem.id : 0,
         title: formData.get('title') as string,
         category: formData.get('category') as any,
         date: formData.get('date') as string,
         author: formData.get('author') as string,
         image: formData.get('image') as string,
         summary: formData.get('summary') as string,
         content: formData.get('content') as string,
      };

      if (editingItem) updateArticle(articleData);
      else addArticle(articleData);
    }

    setIsFormOpen(false);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gray-50">
       <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 mb-8 flex justify-between items-center shadow-soft border border-gray-100">
             <div>
                <h1 className="font-bold text-2xl text-dark flex items-center gap-2"><LayoutDashboard className="text-primary"/> Bảng Điều Khiển</h1>
                <p className="text-green-600 text-sm mt-1 font-medium flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Hệ thống đang hoạt động tốt
                </p>
             </div>
             <div className="flex gap-2">
                 <button 
                  onClick={() => setActiveTab('products')}
                  className={`px-4 py-2 rounded-lg font-bold transition-all ${activeTab === 'products' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                 >
                   Sản phẩm
                 </button>
                 <button 
                  onClick={() => setActiveTab('news')}
                  className={`px-4 py-2 rounded-lg font-bold transition-all ${activeTab === 'news' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                 >
                   Tin tức
                 </button>
             </div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-gray-100">
             <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                <h3 className="font-bold text-dark">
                  Danh sách {activeTab === 'products' ? 'Sản phẩm' : 'Tin tức'}
                </h3>
                <Button onClick={handleCreate} className="px-4 py-2 text-sm flex items-center gap-2">
                   <PlusCircle size={16} /> Thêm Mới
                </Button>
             </div>

             {/* Dynamic Table */}
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead className="bg-gray-50 text-xs font-bold uppercase text-gray-500">
                     <tr>
                        <th className="p-4">ID</th>
                        <th className="p-4">Hình ảnh</th>
                        <th className="p-4 w-1/3">{activeTab === 'products' ? 'Tên Sản Phẩm' : 'Tiêu Đề'}</th>
                        <th className="p-4">Danh Mục</th>
                        <th className="p-4">{activeTab === 'products' ? 'Giá Bán' : 'Ngày Đăng'}</th>
                        <th className="p-4 text-right">Hành Động</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                     {(activeTab === 'products' ? products : articles).map((item: any) => (
                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                           <td className="p-4 text-gray-500">#{item.id}</td>
                           <td className="p-4">
                              <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden border border-gray-200">
                                 <img src={item.image} className="w-full h-full object-cover" />
                              </div>
                           </td>
                           <td className="p-4 font-medium text-dark line-clamp-1">{item.name || item.title}</td>
                           <td className="p-4"><Badge color="gray">{item.category}</Badge></td>
                           <td className="p-4 font-bold text-gray-600">
                              {activeTab === 'products' ? `${item.price.toLocaleString()} ₫` : item.date}
                           </td>
                           <td className="p-4 text-right">
                              <div className="flex items-center justify-end gap-2">
                                <button onClick={() => handleEdit(item)} className="text-blue-500 hover:bg-blue-50 rounded-full p-2 transition-colors" title="Chỉnh sửa">
                                   <Edit size={16} />
                                </button>
                                <button onClick={() => handleDelete(item.id)} className="text-red-400 hover:bg-red-50 rounded-full p-2 transition-colors" title="Xóa">
                                   <Trash2 size={16} />
                                </button>
                              </div>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
             </div>
          </div>
       </div>

       {/* Edit/Create Modal Overlay */}
       {isFormOpen && (
          <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
             <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in scale-in-95 duration-200">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                   <h2 className="text-xl font-bold text-dark">
                      {editingItem ? 'Chỉnh Sửa' : 'Thêm Mới'} {activeTab === 'products' ? 'Sản Phẩm' : 'Tin Tức'}
                   </h2>
                   <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-red-500"><X /></button>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                   {activeTab === 'products' ? (
                      <>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-1">Tên Sản Phẩm</label>
                          <input name="name" defaultValue={editingItem?.name} required className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Danh Mục</label>
                            <select name="category" defaultValue={editingItem?.category || 'kids'} className="w-full p-3 rounded-xl border border-gray-200 outline-none">
                               <option value="kids">Trẻ Em</option>
                               <option value="adults">Người Lớn</option>
                               <option value="professional">Chuyên Nghiệp</option>
                               <option value="accessories">Phụ Kiện</option>
                            </select>
                          </div>
                          <div>
                             <label className="block text-sm font-bold text-gray-700 mb-1">Giá Bán (VNĐ)</label>
                             <input type="number" name="price" defaultValue={editingItem?.price} required className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none" />
                          </div>
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-1">Link Ảnh (URL)</label>
                           <input name="image" defaultValue={editingItem?.image} placeholder="https://..." required className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none" />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-1">Mô Tả Ngắn</label>
                           <textarea name="description" defaultValue={editingItem?.description} rows={3} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none" />
                        </div>
                      </>
                   ) : (
                      <>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-1">Tiêu Đề Bài Viết</label>
                          <input name="title" defaultValue={editingItem?.title} required className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-sm font-bold text-gray-700 mb-1">Danh Mục</label>
                              <select name="category" defaultValue={editingItem?.category || 'News'} className="w-full p-3 rounded-xl border border-gray-200 outline-none">
                                 <option value="News">Tin Tức</option>
                                 <option value="Guide">Hướng Dẫn</option>
                                 <option value="Location">Địa Điểm</option>
                              </select>
                           </div>
                           <div>
                              <label className="block text-sm font-bold text-gray-700 mb-1">Ngày Đăng</label>
                              <input type="date" name="date" defaultValue={editingItem?.date} required className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none" />
                           </div>
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-1">Tác Giả</label>
                           <input name="author" defaultValue={editingItem?.author} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none" />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-1">Link Ảnh Bìa (URL)</label>
                           <input name="image" defaultValue={editingItem?.image} placeholder="https://..." required className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none" />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-1">Tóm Tắt</label>
                           <textarea name="summary" defaultValue={editingItem?.summary} rows={2} required className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none" />
                        </div>
                        <div>
                           <label className="block text-sm font-bold text-gray-700 mb-1">Nội Dung Chi Tiết (HTML/Text)</label>
                           <textarea name="content" defaultValue={editingItem?.content} rows={8} className="w-full p-3 rounded-xl border border-gray-200 focus:border-primary outline-none font-mono text-sm" placeholder="<p>Nội dung bài viết...</p>" />
                        </div>
                      </>
                   )}

                   <div className="pt-4 flex gap-3">
                      <Button type="submit" className="flex-1">
                         <Save size={18} className="mr-2" /> Lưu Thay Đổi
                      </Button>
                      <Button variant="outline" type="button" onClick={() => setIsFormOpen(false)}>Hủy</Button>
                   </div>
                </form>
             </div>
          </div>
       )}
    </div>
  );
};

// --- App Root & Router Configuration ---

const Layout = () => {
  return (
    // Updated Modern Gradient Background
    <div className="flex flex-col min-h-screen font-sans antialiased text-gray-900 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <DataProvider>
      <ShopProvider>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="shop" element={<ShopPage />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="news/:id" element={<NewsDetailPage />} />
              <Route path="admin" element={<AdminPage />} />
              <Route path="contact" element={<div className="pt-40 text-center text-dark"><h1 className="text-2xl font-bold">LIÊN HỆ CHÚNG TÔI</h1><p className="text-gray-500 mt-4">Hotline: 0900 888 777</p></div>} />
              <Route path="*" element={<div className="pt-40 text-center text-dark font-bold">404 - KHÔNG TÌM THẤY TRANG</div>} />
            </Route>
          </Routes>
        </HashRouter>
      </ShopProvider>
    </DataProvider>
  );
};

export default App;