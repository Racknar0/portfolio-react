import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSearch, FiClock, FiCalendar, FiCheck, FiExternalLink, FiAward } from "react-icons/fi";

const StandardModal = ({ isOpen, onClose, activePlatform, activePlatformData, lang, content, onViewCredential }) => {
  const [activePathId, setActivePathId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Set default path ID when data loads or modal opens
  useEffect(() => {
    if (activePlatformData && activePlatformData.paths.length > 0) {
      setActivePathId(activePlatformData.paths[0].id);
    }
    setSearchTerm("");
  }, [activePlatform, activePlatformData]);

  const paths = activePlatformData?.paths || [];
  const showTabs = paths.length > 1;

  // Filter courses based on active path and search term
  const filteredCourses = useMemo(() => {
    if (!activePlatformData) return [];
    
    let coursesToSearch = [];
    if (searchTerm.trim() !== "") {
      // Search across all paths
      paths.forEach(path => {
        coursesToSearch.push(...path.courses);
      });
    } else {
      // Search in selected path
      const currentPath = paths.find(p => p.id === activePathId);
      if (currentPath) {
        coursesToSearch = currentPath.courses;
      }
    }

    return coursesToSearch.filter(course => {
      const search = searchTerm.toLowerCase();
      const titleVal = course.title || "";
      const matchesTitle = titleVal.toLowerCase().includes(search);
      const matchesSkills = (course.skills || []).some(skill =>
        skill.toLowerCase().includes(search)
      );
      const dateVal = course.date || "";
      const matchesDate = dateVal.toLowerCase().includes(search);
      return matchesTitle || matchesSkills || matchesDate;
    });
  }, [activePlatformData, activePathId, searchTerm, paths]);

  // Separate highlighted courses (for MinTIC and LinkedIn, we pull it out to the top)
  const { highlightedCourses, regularCourses } = useMemo(() => {
    if (activePlatform === "mintic" || activePlatform === "linkedin") {
      return {
        highlightedCourses: filteredCourses.filter(c => c.highlight),
        regularCourses: filteredCourses.filter(c => !c.highlight)
      };
    }
    return {
      highlightedCourses: [],
      regularCourses: filteredCourses
    };
  }, [filteredCourses, activePlatform]);

  if (!isOpen || !activePlatformData) return null;

  // Stagger animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
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
        <div className="p-6 border-b border-white/5 bg-black/40 relative z-10 shrink-0">
          <div className="flex items-center justify-between gap-4 mb-5">
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
                {lang === "es" ? "Cursos y Especialidades" : "Courses & Specializations"}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              <FiX className="text-lg" />
            </button>
          </div>

          {/* SEARCH BAR */}
          <div className="relative w-full sm:max-w-md">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 text-base" />
            <input
              type="text"
              placeholder={content.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-950/60 border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white/20 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                <FiX />
              </button>
            )}
          </div>
        </div>

        {/* PATH SELECTION TABS (Horizontal pills above content, only if paths > 1) */}
        {showTabs && searchTerm.trim() === "" && (
          <div className="px-6 py-3 border-b border-white/5 bg-black/20 flex gap-2 overflow-x-auto scrollbar-none relative z-10 shrink-0">
            {paths.map((path) => {
              const isActive = activePathId === path.id;
              const count = path.courses.length;

              return (
                <button
                  key={path.id}
                  onClick={() => setActivePathId(path.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                    isActive
                      ? "bg-white/5 text-white border-white/10 shadow-sm"
                      : "bg-transparent border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-white/5"
                  }`}
                >
                  <span>{path.title[lang] || path.title}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-bold ${
                    isActive ? "bg-white/10 text-white" : "bg-white/5 text-neutral-500"
                  }`}>{count}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* COURSES GRID */}
        <div className="flex-grow overflow-y-auto p-6 scrollbar-thin relative z-10 bg-black/10 flex flex-col gap-6">
          
          {/* Highlighted Program (e.g. for MinTIC) */}
          {highlightedCourses.length > 0 && (
            <div className="relative z-10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-4 flex items-center gap-2">
                <FiAward style={{ color: activePlatformData.color }} className="text-lg animate-pulse" />
                {lang === "es" ? "Programa Completo Aprobado" : "Approved Full Program"}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {highlightedCourses.map((course, idx) => (
                  <div 
                    key={idx} 
                    className="glass-panel p-6 border rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group transition-all duration-300"
                    style={{
                      borderColor: `${activePlatformData.color}40`,
                      backgroundColor: `${activePlatformData.color}05`,
                      boxShadow: `0 4px 20px -5px ${activePlatformData.glowColor}`
                    }}
                  >
                    <div className="space-y-2 grow">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-red-400 transition-colors duration-200" style={{ color: activePlatformData.color }}>
                          {course.title}
                        </h4>
                        <span 
                          className="text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase shrink-0"
                          style={{
                            backgroundColor: `${activePlatformData.color}15`,
                            color: activePlatformData.color,
                            borderColor: `${activePlatformData.color}30`
                          }}
                        >
                          {course.score || (lang === "es" ? "Graduado" : "Graduated")}
                        </span>
                      </div>
                      
                      {/* Metadata */}
                      <div className="flex flex-wrap gap-4 text-[10px] sm:text-xs text-neutral-400 font-light">
                        <span className="flex items-center gap-1">
                          <FiCalendar className="text-[9px]" />
                          {course.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock className="text-[9px]" />
                          {typeof course.duration === "object"
                            ? course.duration[lang || "es"]
                            : course.duration}
                        </span>
                        <span className="flex items-center gap-1 text-emerald-400 font-medium">
                          <FiCheck className="text-[9px]" />
                          {content.completed}
                        </span>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {course.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[9px] px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-neutral-300 font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {course.credentialUrl && (
                      <button
                        onClick={() => onViewCredential(course.credentialUrl)}
                        className="w-full sm:w-auto py-2.5 px-5 rounded-xl bg-neutral-900 hover:bg-neutral-950 border border-white/5 hover:border-red-500/30 text-xs text-neutral-300 hover:text-white transition-all flex items-center justify-center gap-1.5 font-bold cursor-pointer shrink-0"
                      >
                        {content.viewCredential}
                        <FiExternalLink className="text-[10px] text-neutral-500 group-hover:text-neutral-300" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Courses Grid */}
          <div>
            {regularCourses.length > 0 ? (
              <motion.div
                key={`${activePlatform}-${activePathId}`}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {regularCourses.map((course, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="glass-panel p-5 flex flex-col justify-between hover:border-white/15 transition-all duration-300 relative group overflow-hidden border border-white/5 bg-neutral-950/20"
                    style={{
                      boxShadow: course.highlight
                        ? `0 4px 20px -5px ${activePlatformData.glowColor}`
                        : "none",
                      borderColor: course.highlight
                        ? `${activePlatformData.color}25`
                        : "rgba(255,255,255,0.05)"
                    }}
                  >
                    <div>
                      {/* Top Row */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex gap-2.5">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: `${activePlatformData.color}15` }}
                          >
                            <FiAward style={{ color: activePlatformData.color }} className="text-base" />
                          </div>
                          <h4 className="font-bold text-neutral-100 text-xs sm:text-sm leading-snug group-hover:text-white transition-colors duration-200">
                            {course.title}
                          </h4>
                        </div>

                        {/* Score */}
                        {course.score && (
                          <span
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded border uppercase shrink-0"
                            style={{
                              backgroundColor: `${activePlatformData.color}10`,
                              color: activePlatformData.color,
                              borderColor: `${activePlatformData.color}25`
                            }}
                          >
                            {course.score}
                          </span>
                        )}
                      </div>

                      {/* Metadata */}
                      <div className="flex flex-wrap gap-3 text-[10px] text-neutral-400 mb-4 font-light">
                        <span className="flex items-center gap-1">
                          <FiCalendar className="text-[9px]" />
                          {course.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiClock className="text-[9px]" />
                          {typeof course.duration === "object"
                            ? course.duration[lang || "es"]
                            : course.duration}
                        </span>
                        <span className="flex items-center gap-1 text-emerald-400 font-medium">
                          <FiCheck className="text-[9px]" />
                          {content.completed}
                        </span>
                      </div>

                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {course.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-900 border border-white/5 text-neutral-300 font-medium"
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
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-center p-6 border border-white/5 rounded-xl bg-neutral-950/20">
                <FiSearch className="text-4xl text-neutral-600 mb-3" />
                <p className="text-sm text-neutral-400 max-w-sm">{content.noResults}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default StandardModal;
