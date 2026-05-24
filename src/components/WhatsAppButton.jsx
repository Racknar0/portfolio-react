import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { translations } from "../constants/translations";

const WhatsAppButton = ({ lang }) => {
  const title = translations[lang].whatsapp.title;

  return (
    <motion.a
      href="https://wa.me/573233642951"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-emerald-400/30 hover:scale-110 hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] transition-all duration-300 flex items-center justify-center cursor-pointer"
      aria-label={title}
      title={title}
    >
      <FaWhatsapp className="text-2xl" />
      
      {/* Pulse effect indicator */}
      <span className="absolute -inset-1.5 rounded-full bg-emerald-500/30 animate-ping"></span>
    </motion.a>
  );
};

export default WhatsAppButton;
