import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone to-stone/50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center"
        >
          {/* انیمیشن آیکون */}
          <motion.div
            className="mb-8 inline-block"
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Building2 className="w-24 h-24 text-orange-500 mx-auto" />
          </motion.div>

          {/* متن 404 با افکت */}
          <motion.h1
            className="text-8xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 10 }}
          >
            404
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-black mb-4">
              صفحه مورد نظر پیدا نشد!
            </h2>
            <p className="text-black/80 text-lg mb-8">
              متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا به آدرس دیگری منتقل شده است.
            </p>

            <motion.button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-orange-500 text-white rounded-full font-medium 
                       hover:bg-white hover:text-orange-500 transition-all duration-300
                       border-2 border-transparent hover:border-white
                       shadow-lg hover:shadow-orange-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              بازگشت به خانه
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;