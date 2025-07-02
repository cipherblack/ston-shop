import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const founders = [
  {
    name: 'مسعود نقدعلی',
    role: 'مدیرعامل',
    phone: '۰۹۱۲۱۲۳۴۵۶۷',
    image: '/image/masood-naghdali.jpg'
  },
  {
    name: 'علی نقدعلی',
    role: 'مدیر عامل',
    phone: '۰۹۱۲۳۴۵۶۷۸۹',
    image: '/image/manoochehre-naghdali.jpg'
  },
  {
    name: 'علی نقدعلی',
    role: 'مدیر عامل ',
    phone: '۰۹۱۲۸۷۶۵۴۳۲',
    image: '/image/ali-naghdali.jpg'
  }
];

const Contact = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">تماس با ما</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            برای ارتباط با ما و دریافت مشاوره رایگان با ما در تماس باشید
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="aspect-square">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-gray-600 mb-4">{founder.role}</p>
                  <a
                    href={`tel:${founder.phone}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{founder.phone}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">راه‌های ارتباطی</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">تلفن تماس</p>
                    <a href="tel:02112345678" className="text-lg font-semibold hover:text-blue-600 transition">
                      ۰۲۱-۱۲۳۴۵۶۷۸
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">ایمیل</p>
                    <a href="mailto:info@iranstone.com" className="text-lg font-semibold hover:text-blue-600 transition">
                      info@iranstone.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-600">آدرس</p>
                    <p className="text-lg font-semibold">
                      تهران، خیابان ولیعصر، پلاک ۱۲۳
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">ساعات کاری</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">شنبه تا چهارشنبه</span>
                  <span className="font-semibold">۸:۰۰ - ۱۷:۰۰</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">پنج‌شنبه</span>
                  <span className="font-semibold">۸:۰۰ - ۱۳:۰۰</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">جمعه</span>
                  <span className="font-semibold text-red-600">تعطیل</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">فرم تماس</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">شماره تماس</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">ایمیل</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">پیام شما</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  <Send className="w-5 h-5" />
                  <span>ارسال پیام</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12"
        >
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207371.97277245683!2d51.21671975!3d35.69939955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C+Tehran+Province%2C+Iran!5e0!3m2!1sen!2s!4v1453988745269"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;