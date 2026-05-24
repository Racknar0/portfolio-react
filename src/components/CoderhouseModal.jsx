import { motion } from "framer-motion";
import { FiX, FiClock, FiCalendar, FiCheck, FiExternalLink, FiAward } from "react-icons/fi";

const CoderhouseModal = ({ isOpen, onClose, activePlatformData, lang, content, onViewCredential }) => {
  if (!isOpen || !activePlatformData) return null;

  // Extract paths
  const fullstackPath = activePlatformData.paths.find(p => p.id === "fullstack") || activePlatformData.paths[0];
  const specializationsPath = activePlatformData.paths.find(p => p.id === "specializations") || activePlatformData.paths[1];

  const renderPathColumn = (pathData, color) => {
    if (!pathData) return null;

    return (
      <div className="relative flex-1 flex flex-col p-5 bg-neutral-950/20 border border-white/5 rounded-2xl">
        <h3 className="text-sm sm:text-base font-bold text-white mb-6 flex items-center gap-2 relative z-10">
          <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ color, backgroundColor: color }} />
          {pathData.title[lang] || pathData.title}
        </h3>

        {/* Timeline Path Line */}
        <div
          className="absolute left-[38px] top-16 bottom-10 w-[2px] pointer-events-none hidden sm:block"
          style={{
            background: `linear-gradient(to bottom, ${color} 0%, ${color}40 80%, rgba(255,255,255,0.02) 100%)`
          }}
        />

        <div className="space-y-6 relative z-10 flex-grow flex flex-col justify-between">
          {pathData.courses.map((course, idx) => {
            const stepNum = idx + 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="relative flex gap-4 pl-0 sm:pl-10"
              >
                {/* Timeline node */}
                <div
                  className="absolute left-[28px] -translate-x-1/2 w-6 h-6 rounded-full border border-white/10 bg-[#07030e] flex items-center justify-center text-[10px] font-bold font-mono text-neutral-400 group-hover:scale-105 hidden sm:flex"
                  style={{
                    borderColor: `${color}40`,
                    boxShadow: `0 0 6px ${color}10`
                  }}
                >
                  0{stepNum}
                </div>

                {/* Course Card */}
                <div className="grow bg-neutral-950/40 hover:bg-neutral-900/40 border border-white/5 hover:border-white/10 p-4 rounded-xl transition-all duration-300 flex flex-col justify-between min-h-[110px] group">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-neutral-100 group-hover:text-white transition-colors duration-200">
                        {course.title}
                      </h4>
                      {course.score && (
                        <span
                          className="text-[9px] font-bold px-1.5 py-0.5 rounded border uppercase shrink-0"
                          style={{
                            backgroundColor: `${color}10`,
                            color,
                            borderColor: `${color}25`
                          }}
                        >
                          {course.score}
                        </span>
                      )}
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-3 text-[10px] text-neutral-400 mb-3 font-light">
                      <span className="flex items-center gap-1">
                        <FiCalendar className="text-[9px]" />
                        {course.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FiClock className="text-[9px]" />
                        {typeof course.duration === "object" ? course.duration[lang] || course.duration.es : course.duration}
                      </span>
                      <span className="flex items-center gap-1 text-emerald-400 font-medium">
                        <FiCheck className="text-[9px]" />
                        {lang === "es" ? "Completado" : "Completed"}
                      </span>
                    </div>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-1 mb-3.5">
                      {course.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-900 border border-white/5 text-neutral-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Certificate Link */}
                  {course.credentialUrl && (
                    <button
                      onClick={() => onViewCredential(course.credentialUrl)}
                      className="w-full py-1.5 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-950 border border-white/5 text-[10px] text-neutral-300 hover:text-white transition-all flex items-center justify-center gap-1 font-bold cursor-pointer"
                    >
                      {content.viewCredential}
                      <FiExternalLink className="text-[9px] text-neutral-500 group-hover:text-neutral-300 transition-colors" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-lg"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="relative w-full max-w-5xl h-[88vh] max-h-[850px] flex flex-col bg-[#0b0615]/95 border rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-10"
        style={{ borderColor: `${activePlatformData.color}35` }}
      >
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-28 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundColor: activePlatformData.color }}
        />

        {/* HEADER */}
        <div className="p-6 border-b border-white/5 bg-black/40 relative z-10 shrink-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-auto flex items-center">
              <img
                src={activePlatformData.logo}
                alt={activePlatformData.title}
                className="h-full object-contain max-h-9"
              />
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
            <span className="text-xs sm:text-sm font-semibold text-neutral-300 hidden sm:block">
              {lang === "es" ? "Carrera Full Stack & Especialidades" : "Full Stack Career & Specializations"}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
          >
            <FiX className="text-lg" />
          </button>
        </div>

        {/* COLUMNS AREA */}
        <div className="flex-grow overflow-y-auto p-6 scrollbar-thin relative z-10 bg-black/10 flex flex-col gap-6">
          
          {/* Careers Section */}
          {activePlatformData.careers && (
            <div className="relative z-10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-4 flex items-center gap-2">
                <FiAward className="text-[#35FF69] text-lg" />
                {lang === "es" ? "Carreras Aprobadas" : "Approved Careers"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activePlatformData.careers.map((career) => (
                  <div key={career.id} className="glass-panel p-5 border border-[#35FF69]/20 bg-[#35FF69]/5 hover:bg-[#35FF69]/10 rounded-2xl flex flex-col justify-between min-h-[140px] group transition-all duration-300">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#35FF69] transition-colors duration-200">
                          {career.title[lang] || career.title}
                        </h4>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full border bg-[#35FF69]/15 text-[#35FF69] border-[#35FF69]/30 uppercase shrink-0">
                          {career.status[lang] || career.status}
                        </span>
                      </div>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {career.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-900 border border-white/5 text-neutral-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onViewCredential(career.credentialUrl)}
                      className="w-full py-2 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-950 border border-white/5 hover:border-[#35FF69]/30 text-[10px] text-neutral-300 hover:text-white transition-all flex items-center justify-center gap-1.5 font-bold cursor-pointer"
                    >
                      {lang === "es" ? "Ver Diploma" : "View Diploma"}
                      <FiExternalLink className="text-[9px] text-neutral-500 group-hover:text-neutral-300" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Paths Column */}
          <div className="flex flex-col md:flex-row gap-6">
            {renderPathColumn(fullstackPath, activePlatformData.color)}
            {renderPathColumn(specializationsPath, activePlatformData.color)}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoderhouseModal;
