import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3C5B45] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">سنگ آوش</h3>
          <p className="text-gray-400">
            تولید کننده تخصصی سنگ‌های ساختمانی با کیفیت در ایران
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">دسترسی سریع</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-white transition">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-gray-400 hover:text-white transition">
                محصولات
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white transition">
                درباره ما
              </Link>
            </li>
            <li>
              <Link to="/how-to-buy" className="text-gray-400 hover:text-white transition">
                نحوه خرید
              </Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">تماس با ما</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-400">
              <Phone className="w-5 h-5 ml-2" />
              <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
            </li>
            <li className="flex items-center text-gray-400">
              <Mail className="w-5 h-5 ml-2" />
              <span>info@avash-stone.com</span>
            </li>
            <li className="flex items-center text-gray-400">
              <MapPin className="w-5 h-5 ml-2" />
              <span> اصفهان، شهرک صنعتی محمود آباد، فرعی26، سنگ آوش (یکتانو) </span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} حقوق این سایت متعلق به صنایع سنگ آوش می باشد
        </p>
      </div>
    </footer>
  );
};

export default Footer;