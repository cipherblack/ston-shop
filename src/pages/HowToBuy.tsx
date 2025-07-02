import { PhoneCall, Truck, CreditCard, CheckCircle, ArrowRight, ShieldCheck, Clock, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HowToBuy = () => {
  return (
    <div className="rtl bg-marble">
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-marble via-white to-accent-gold">
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
          >
        <h1 className="text-5xl font-bold mb-6 text-stone">راهنمای خرید و سفارش</h1>
        <p className="text-xl text-accent-blue max-w-2xl mx-auto">
          در چند گام ساده، سنگ مورد نظر خود را سفارش دهید
        </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-marble-gold/30">
                  <div className="w-16 h-16 bg-marble-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4 text-stone">{step.title}</h3>
                  <p className="text-marble-gold text-center">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-full w-full">
                    <ArrowRight className="w-8 h-8 text-accent-gold mx-auto" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">مزایای خرید از سنگ ایران</h2>
            <p className="text-xl text-gray-600">چرا مشتریان ما را انتخاب می‌کنند؟</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">سوالات متداول</h2>
            <p className="text-xl text-gray-600">پاسخ به سوالات رایج شما</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold mb-8">آماده سفارش هستید؟</h2>
            <p className="text-xl mb-12 opacity-90">
              کارشناسان ما آماده پاسخگویی به سوالات شما هستند
            </p>
            <a
              href="tel:02112345678"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition transform hover:scale-105"
            >
              <PhoneCall className="ml-2" />
              تماس با ما
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const steps = [
  {
    icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
    title: 'تماس و مشاوره',
    description: 'با کارشناسان ما تماس بگیرید و مشاوره رایگان دریافت کنید'
  },
  {
    icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    title: 'پیش پرداخت',
    description: 'پرداخت ۳۰٪ از مبلغ کل به عنوان پیش پرداخت'
  },
  {
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: 'ارسال سفارش',
    description: 'ارسال سفارش به آدرس شما در کوتاه‌ترین زمان ممکن'
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    title: 'تحویل و تسویه',
    description: '  تحویل سفارشات و پرداخت مابقی مبلغ در زمان کوتاه '
  }
];

const benefits = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    title: 'تضمین کیفیت',
    description: '۵ سال گارانتی برای تمامی محصولات و خدمات پس از فروش'
  },
  {
    icon: <Truck className="w-6 h-6 text-blue-600" />,
    title: 'ارسال سریع',
    description: 'ارسال سفارش در کمترین زمان ممکن به سراسر کشور'
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: 'پشتیبانی ۲۴/۷',
    description: 'پاسخگویی به سوالات شما در تمام ساعات شبانه‌روز'
  }
];

const faqs = [
  {
    question: 'حداقل میزان سفارش چقدر است؟',
    answer: 'حداقل میزان سفارش ۱۰۰ متر مربع می‌باشد. برای سفارش‌های کمتر، لطفا با ما تماس بگیرید.'
  },
  {
    question: 'هزینه حمل و نقل چگونه محاسبه می‌شود؟',
    answer: 'هزینه حمل و نقل بر اساس فاصله و حجم سفارش محاسبه می‌شود. برای اطلاع از هزینه دقیق با ما تماس بگیرید.'
  },
  {
    question: 'آیا امکان بازدید از نمونه‌ها وجود دارد؟',
    answer: 'بله، شما می‌توانید با هماهنگی قبلی از نمایشگاه ما بازدید کنید و نمونه‌های واقعی را مشاهده نمایید.'
  },
  {
    question: 'گارانتی محصولات چگونه است؟',
    answer: 'تمامی محصولات ما دارای ۵ سال گارانتی کیفیت هستند و در صورت وجود هرگونه مشکل، تعویض می‌گردند.'
  }
];

export default HowToBuy;