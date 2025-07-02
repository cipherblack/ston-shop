import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Phone, Share2 } from 'lucide-react';

const products = {
  'travertin-takab': {
    name: 'تراورتن تکاب',
    images: [
      'https://images.unsplash.com/photo-1535557597501-0fee0a500c57?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1534957753291-64d667ce2927?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'تراورتن تکاب یکی از بهترین و با کیفیت‌ترین سنگ‌های ساختمانی ایران است که در معادن شهرستان تکاب استخراج می‌شود.',
    specs: {
      dimensions: ['30x60', '40x40', '60x60'],
      colors: ['کرم', 'عسلی'],
      applications: ['نما', 'کف', 'دیوار داخلی'],
      price: 'از متری ۴۵۰ هزار تومان'
    },
    features: [
      'مقاومت بالا در برابر شرایط جوی',
      'جذب آب پایین',
      'مقاومت در برابر سایش',
      'تنوع رنگی مناسب'
    ]
  },
  // Add other products similarly
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id as keyof typeof products];
  const [selectedImage, setSelectedImage] = React.useState(0);

  if (!product) {
    return <div>محصول یافت نشد</div>;
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-blue-600' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">مشخصات فنی</h2>
                <dl className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-gray-600">ابعاد موجود</dt>
                    <dd className="font-semibold">{product.specs.dimensions.join(' - ')}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">رنگ‌بندی</dt>
                    <dd className="font-semibold">{product.specs.colors.join(' - ')}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">موارد کاربرد</dt>
                    <dd className="font-semibold">{product.specs.applications.join(' - ')}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">قیمت</dt>
                    <dd className="font-semibold text-blue-600">{product.specs.price}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">ویژگی‌های محصول</h2>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href="/catalog.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                >
                  <Download className="w-5 h-5" />
                  <span>دانلود کاتالوگ</span>
                </a>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition">
                  <Share2 className="w-5 h-5" />
                  <span>اشتراک‌گذاری</span>
                </button>
              </div>

              <div className="border-t pt-6">
                <p className="text-gray-600 mb-4">
                  برای سفارش و مشاوره رایگان با ما تماس بگیرید
                </p>
                <a
                  href="tel:02112345678"
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-semibold">۰۲۱-۱۲۳۴۵۶۷۸</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;