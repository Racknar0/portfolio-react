import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaYoutube, FaTiktok, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { translations } from "../constants/translations";

const Footer = ({ lang }) => {
  const t = translations[lang].footer;

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="glass-panel p-8 lg:p-12 w-full mt-20 mb-10 text-neutral-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              JT
            </span>
            <span className="text-sm font-semibold tracking-wider text-neutral-200 uppercase">
              Jonathan Torres
            </span>
          </div>
          <p className="text-sm font-light leading-relaxed text-neutral-400">
            {t.description}
          </p>
        </div>

        {/* Navigation / Links Column */}
        <div className="flex flex-col gap-4 md:items-center">
          <div className="text-left md:text-center">
            <h4 className="text-sm font-semibold tracking-wider text-neutral-100 uppercase mb-4">
              {t.navigation}
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a 
                  href="#hero" 
                  className="text-sm font-light text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t.navLinks.home}
                </a>
              </li>
              <li>
                <a 
                  href="#technologies" 
                  className="text-sm font-light text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t.navLinks.technologies}
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-sm font-light text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t.navLinks.experience}
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-sm font-light text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t.navLinks.projects}
                </a>
              </li>
              <li>
                <a 
                  href="#certifications" 
                  className="text-sm font-light text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                >
                  {t.navLinks.certifications}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact & Socials Column */}
        <div className="flex flex-col gap-4 md:items-end">
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-neutral-100 uppercase mb-4 text-left md:text-right">
              {t.contactTitle}
            </h4>
            <div className="flex flex-col gap-3 mb-6">
              <a 
                href="mailto:Racknarow1@gmail.com" 
                className="flex items-center gap-2 text-sm font-light text-neutral-400 hover:text-pink-400 transition-colors duration-300"
              >
                <FaEnvelope className="text-pink-400" />
                <span>Racknarow1@gmail.com</span>
              </a>
              <div className="flex items-center gap-2 text-sm font-light text-neutral-400 justify-start md:justify-end">
                <FaMapMarkerAlt className="text-purple-400" />
                <span>Duitama, Colombia</span>
              </div>
            </div>
            
            {/* Social Media Row */}
            <div className="flex gap-3 justify-start md:justify-end">
              <a
                href="https://www.linkedin.com/in/camilotorresz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] transition-all duration-300"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://github.com/camilotorresz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-white hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.youtube.com/@camilotorresz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-[#FF0000] hover:border-[#FF0000]/40 hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] transition-all duration-300"
              >
                <FaYoutube className="text-lg" />
              </a>
              <a
                href="https://www.tiktok.com/@camilotorresz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-neutral-400 hover:text-[#00f2fe] hover:border-[#00f2fe]/40 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all duration-300"
              >
                <FaTiktok className="text-lg" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright divider line */}
      <div className="border-t border-neutral-800/60 mt-8 pt-8 text-center text-xs font-light text-neutral-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>{t.copyright}</p>
        <p>{t.builtWith}</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
