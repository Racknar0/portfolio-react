import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { translations } from "../constants/translations";

const ScrollToTop = ({ lang }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const title = translations[lang].scrollToTop.title;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 p-3.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-purple-500/20 hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label={title}
          title={title}
        >
          <FaChevronUp className="text-base" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
