import Pic from "../assets/profile1.png";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaMicrochip } from "react-icons/fa";
import { translations } from "../constants/translations";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const Hero = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <div className="border-b border-neutral-900 pb-16 lg:mb-20">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="glass-panel p-8 lg:p-12 w-full mt-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1 
              variants={itemVariants}
              className="pb-4 text-4xl font-thin tracking-tight lg:text-6xl text-neutral-100 uppercase"
            >
              JONATHAN TORRES
            </motion.h1>
            <motion.span 
              variants={itemVariants}
              className="bg-gradient-to-r from-pink-300 via-slate-400 to-purple-400 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent font-medium"
            >
              {t.developerTitle}
            </motion.span>
            <motion.p 
              variants={itemVariants}
              className="my-4 max-w-2xl lg:max-w-3xl font-light tracking-wide text-neutral-300 leading-relaxed text-sm lg:text-base"
            >
              {t.content}
            </motion.p>

            {/* Perfiles Académicos */}
            <motion.div 
              variants={itemVariants}
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
            >
              <div className="flex items-center gap-3 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-100 hover:bg-purple-500/20 transition-all duration-300 hover:scale-[1.02] cursor-default">
                <FaGraduationCap className="text-3xl text-purple-400 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] font-semibold text-purple-300 uppercase tracking-wider">{t.profiles.formation}</p>
                  <p className="text-xs font-semibold text-white leading-tight">{t.profiles.career1}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-100 hover:bg-pink-500/20 transition-all duration-300 hover:scale-[1.02] cursor-default">
                <FaCode className="text-2xl text-pink-400 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] font-semibold text-pink-300 uppercase tracking-wider">{t.profiles.specialty}</p>
                  <p className="text-xs font-semibold text-white leading-tight">{t.profiles.career2}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-100 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-[1.02] cursor-default">
                <FaMicrochip className="text-2xl text-cyan-400 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] font-semibold text-cyan-300 uppercase tracking-wider">{t.profiles.technology}</p>
                  <p className="text-xs font-semibold text-white leading-tight">{t.profiles.career3}</p>
                </div>
              </div>
            </motion.div>


          </div>

          {/* Profile Picture */}
          <div className="w-full lg:w-5/12 flex justify-center items-center">
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative group"
            >
              {/* Animated soft halo behind avatar */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 opacity-25 blur-lg group-hover:opacity-50 transition duration-500"></div>
              
              <img 
                className="relative rounded-full w-60 h-60 lg:w-80 lg:h-80 object-contain filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                src={Pic} 
                alt="Jonathan Torres" 
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

