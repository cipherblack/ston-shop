import React from 'react';
import { ArrowRight, Star, ChevronDown, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BuildingPreview from '../components/BuildingPreview';

const stoneOptions = [
  {
    texture: '/image/sang-komsheche.jpg',
    name: 'تراورتن کمشچه'
  },
  {
    texture: '/image/marmar-pet-black.jpg',
    name: 'مرمر مشکی'
  },
  {
    texture: '/image/marmar-pet-black2.jpg',
    name: 'تراورتن کرم'
  },
  {
    texture: '/image/sang-takab.jpg',
    name: 'گرانیت مشکی'
  }
];

const features = [
  {
    icon: <Building2 className="w-12 h-12" />,
    title: 'کیفیت برتر',
    description: 'استفاده از بهترین سنگ‌های معدنی و فرآیند تولید پیشرفته'
  },
  {
    icon: <Star className="w-12 h-12" />,
    title: 'تنوع محصولات',
    description: 'بیش از ۱۰۰ نوع سنگ با رنگ‌بندی و طرح‌های متنوع'
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    title: 'خدمات حرفه‌ای',
    description: 'مشاوره تخصصی و پشتیبانی ۲۴ ساعته'
  }
];

const projects = [
  {
    id: 1,
    title: 'برج مسکونی آسمان',
    image: '/image/project-1.jpg',
    location: 'تهران',
    stone: 'تراورتن تکاب'
  },
  {
    id: 2,
    title: 'مجتمع تجاری نور',
    image: '/image/project-2.jpg',
    location: 'مشهد',
    stone: 'مرمریت لاشتر'
  },
  {
    id: 3,
    title: 'هتل پنج ستاره پارس',
    image: '/image/project-3.jpg',
    location: 'شیراز',
    stone: 'تراورتن دهشیر'
  }
];

const Home = () => {
  const [selectedStone, setSelectedStone] = React.useState(stoneOptions[0]);
  const [currentProject, setCurrentProject] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="rtl bg-marble"
    >
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src='/image/Home.jpg'
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone/80 to-stone/60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-marble max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-7xl font-bold mb-6 text-accent-gold drop-shadow-lg"
            >
             صنایع سنگ آوش
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl mb-8 text-marble/80"
            >
             تولید کننده تخصصی سنگ تراورتن تکاب
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/products"
                className="group inline-flex items-center bg-accent-gold text-stone px-8 py-4 rounded-lg hover:bg-accent-gold/80 transition-all duration-300 transform hover:scale-105 font-bold shadow-lg"
              >
                <span className="text-lg">محصولات تراورتن تکاب</span>
                <ArrowRight className="mr-2 group-hover:translate-x-1 transition-transform text-stone" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent-gold"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-marble">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-stone">پیش‌نمایش سه‌بعدی نمای ساختمان</h2>
            <p className="text-accent-blue text-lg mb-16">نمای ساختمان خود را با سنگ‌های مختلف مشاهده کنید</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* BuildingPreview only loads on lg and up */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <BuildingPreview selectedStone={selectedStone} />
            </motion.div>
            
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mb-8 text-stone"
              >
                انتخاب سنگ نما
              </motion.h3>
              <div className="grid grid-cols-2 gap-6">
                {stoneOptions.map((stone, index) => (
                  <motion.button
                    key={stone.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setSelectedStone(stone)}
                    className={`group p-6 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      selectedStone.name === stone.name
                        ? 'bg-accent-gold/10 ring-2 ring-accent-gold'
                        : 'bg-marble hover:bg-accent-gold/10'
                    }`}
                  >
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                      <img
                        src={stone.texture}
                        alt={stone.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <p className="font-semibold text-stone group-hover:text-accent-gold transition-colors">
                      {stone.name}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-stone">چرا سنگ آوش ؟</h2>
            <p className="text-accent-blue text-lg">ویژگی‌های منحصر به فرد ما</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-accent-gold/20"
              >
                <div className="mb-6 text-accent-gold">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-stone">{feature.title}</h3>
                <p className="text-accent-blue">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-marble">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-stone">مشتریان صنایع سنگ آوش</h2>
            <p className="text-accent-blue text-lg">نمونه پروژه‌های اجرا شده</p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="w-full overflow-hidden">
              <motion.div
                animate={{ x: `-${currentProject * 100}%` }}
                transition={{ duration: 0.5 }}
                className="flex w-full"
                style={{ width: `${projects.length * 100}%` }}
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="w-full flex-shrink-0 px-4"
                    style={{ width: `${100 / projects.length}%` }}
                  >
                    <div className="bg-stone/5 rounded-2xl overflow-hidden shadow-lg border border-accent-gold/10">
                      <div className="aspect-video">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2 text-stone">{project.title}</h3>
                        <p className="text-accent-blue">موقعیت: {project.location}</p>
                        <p className="text-accent-gold">سنگ استفاده شده: {project.stone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="flex justify-center mt-8 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentProject === index ? 'bg-accent-gold w-6' : 'bg-stone/20'
                  }`}
                  aria-label={`نمایش پروژه ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;