import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'خانه' },
    { path: '/products', label: 'محصولات' },
    { path: '/about', label: 'درباره ما' },
    { path: '/blog', label: 'بلاگ' },
    { path: '/how-to-buy', label: 'نحوه خرید' },
    { path: '/contact', label: 'ارتباط با ما' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 font-vazir ${
        scrolled
          ? 'bg-white shadow-lg'
          : 'bg-[#4A4A4A] backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`p-2 rounded-full ${
                  scrolled ? 'bg-marble' : 'bg-white/20'
                }`}
              >
                <Building2
                  className={`h-8 w-8 ${
                    scrolled ? 'text-accent-gold' : 'text-accent-gold'
                  }`}
                />
              </motion.div>
              <span
                className={`mr-3 text-2xl font-bold ${
                  scrolled ? 'text-stone' : 'text-marble'
                } transition-colors duration-300`}
              >
                سنگ آوش
              </span>
            </Link>
          </div>

            <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse mr-auto">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 4px 15px rgba(201, 161, 74, 0.08)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-3 py-1.5 text-lg font-medium transition-all duration-300 rounded-full border-2 ${
                    scrolled
                      ? 'text-stone hover:text-accent-gold border-transparent '
                      : 'text-marble hover:text-accent-gold border-transparent bg-[#020202]'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-gold"
                      initial={false}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="tel:02112345678"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 15px rgba(201, 161, 74, 0.15)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center px-6 py-2 rounded-full shadow-md transition-all duration-300 font-bold ${
                scrolled
                  ? 'bg-accent-gold text-stone hover:bg-marble hover:text-accent-gold border-2 border-accent-gold'  
                  : 'bg-[#020202] text-stone hover:bg-accent-gold hover:text-marble border-2 border-transparent'
              }`}
            >
              <Phone className={`w-5 h-5 ml-2 ${scrolled ? 'text-stone' : 'text-accent-gold'}`} />
              <span>تماس</span>
            </motion.a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? 'text-stone hover:bg-marble'
                  : 'text-marble hover:bg-white/20'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#080708] border-t border-accent-gold/10"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-base font-medium text-marble hover:text-stone hover:bg-accent-gold rounded-lg transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                <a
                  href="tel:02112345678"
                  className="flex items-center px-3 py-2 text-base font-medium text-marble bg-accent-gold hover:bg-[#020202] hover:text-accent-gold border-2 border-accent-gold rounded-lg transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="w-5 h-5 ml-2 text-stone" />
                  <span>تماس با ما</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;