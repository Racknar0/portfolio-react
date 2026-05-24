import { FaLinkedin, FaGithub, FaYoutube, FaTiktok, FaDownload } from "react-icons/fa"
import { translations } from "../constants/translations";

const Navbar = ({ lang, setLang }) => {
  return (
    <nav className="mb-20 flex flex-col sm:flex-row items-center justify-between py-6 gap-4 sm:gap-0">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-2 w-10" src={logo} alt="logo" />*/}
         <h5 className="mx-2 w-10 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-500">JT</h5>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {/* Language Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-neutral-900/60 border border-neutral-800/80 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">
          <button 
            onClick={() => setLang("es")}
            className={`p-1.5 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${lang === "es" ? "bg-purple-500/20 border border-purple-500/35 shadow-[0_0_10px_rgba(168,85,247,0.25)]" : "border border-transparent opacity-50 hover:opacity-100"}`}
            title="Español"
            aria-label="Cambiar a Español"
          >
            <img src="https://flagcdn.com/w40/co.png" alt="ES" className="w-5 h-3.5 object-cover rounded-sm" />
          </button>
          <button 
            onClick={() => setLang("en")}
            className={`p-1.5 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer ${lang === "en" ? "bg-purple-500/20 border border-purple-500/35 shadow-[0_0_10px_rgba(168,85,247,0.25)]" : "border border-transparent opacity-50 hover:opacity-100"}`}
            title="English"
            aria-label="Change to English"
          >
            <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-5 h-3.5 object-cover rounded-sm" />
          </button>
        </div>

        <a 
          href="https://drive.google.com/drive/folders/12D-1WjynkJlOfeCI728nnwe9u_tROXrG?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.4)] flex items-center gap-2 cursor-pointer border border-purple-500/20"
          title={translations[lang].navbar.downloadCv}
        >
          <FaDownload className="text-xs" />
          <span className="hidden sm:inline">{translations[lang].navbar.downloadCv}</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/camilotorresz/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2.5 rounded-xl bg-neutral-950/40 border border-neutral-800/80 hover:border-[#0A66C2] text-neutral-400 hover:text-[#0A66C2] hover:bg-[#0A66C2]/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] flex items-center justify-center text-xl cursor-pointer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/Racknar0" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2.5 rounded-xl bg-neutral-950/40 border border-neutral-800/80 hover:border-white text-neutral-400 hover:text-white hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] flex items-center justify-center text-xl cursor-pointer"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.youtube.com/@rackDev_" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2.5 rounded-xl bg-neutral-950/40 border border-neutral-800/80 hover:border-[#FF0000] text-neutral-400 hover:text-[#FF0000] hover:bg-[#FF0000]/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,0,0.4)] flex items-center justify-center text-xl cursor-pointer"
          title="YouTube"
        >
          <FaYoutube />
        </a>
        <a 
          href="https://www.tiktok.com/@rackdev" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-2.5 rounded-xl bg-neutral-950/40 border border-neutral-800/80 hover:border-[#00f2fe] text-neutral-400 hover:text-[#fe0979] hover:bg-[#00f2fe]/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,242,254,0.4)] flex items-center justify-center text-xl cursor-pointer"
          title="TikTok"
        >
          <FaTiktok />
        </a>
      </div> 
    </nav>
  )
}

export default Navbar

