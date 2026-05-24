import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSearch, FiAward, FiClock, FiCalendar, FiExternalLink, FiBookOpen, FiCheck } from "react-icons/fi";
import { CERTIFICATES_DATA } from "../constants/certificates";

const Certificates = ({ lang }) => {
  const [activePlatform, setActivePlatform] = useState(null); // null | 'platzi' | 'coderhouse'
  const [activePathId, setActivePathId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const content = {
    es: {
      title: "Certificaciones",
      subtitle: "Mi formación y especialización académica en plataformas digitales líderes.",
      openBtn: "Abrir Dashboard",
      searchPlaceholder: "Buscar curso o habilidad (ej: React, Express)...",
      viewCredential: "Ver Credencial",
      completed: "Completado",
      duration: "Duración",
      skills: "Habilidades",
      stats: {
        completed: "Cursos Completados",
        progress: "Progreso",
        hours: "Horas Estimadas"
      },
      close: "Cerrar",
      noResults: "No se encontraron cursos para tu búsqueda."
    },
    en: {
      title: "Certifications",
      subtitle: "My education and academic specialization on leading digital platforms.",
      openBtn: "Open Dashboard",
      searchPlaceholder: "Search course or skill (e.g. React, Express)...",
      viewCredential: "View Credential",
      completed: "Completed",
      duration: "Duration",
      skills: "Skills",
      stats: {
        completed: "Completed Courses",
        progress: "Progress",
        hours: "Estimated Hours"
      },
      close: "Close",
      noResults: "No courses found matching your search."
    }
  }[lang || "es"];

  // Set the default path ID when a platform modal is opened
  useEffect(() => {
    if (activePlatform) {
      const platformData = CERTIFICATES_DATA[activePlatform];
      if (platformData && platformData.paths.length > 0) {
        setActivePathId(platformData.paths[0].id);
      }
      setSearchTerm("");
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activePlatform]);

  const handleClose = () => {
    setActivePlatform(null);
    setActivePathId("");
    setSearchTerm("");
  };

  const getFilteredCourses = () => {
    if (!activePlatform) return [];
    const platformData = CERTIFICATES_DATA[activePlatform];
    if (!platformData) return [];

    let coursesToSearch = [];

    if (searchTerm.trim() !== "") {
      // Search across ALL paths if there is a search term
      platformData.paths.forEach((path) => {
        coursesToSearch.push(...path.courses);
      });
    } else {
      // Otherwise, only search in the active path
      const currentPath = platformData.paths.find((p) => p.id === activePathId);
      if (currentPath) {
        coursesToSearch = currentPath.courses;
      }
    }

    return coursesToSearch.filter((course) => {
      const search = searchTerm.toLowerCase();
      const matchesTitle = course.title.toLowerCase().includes(search);
      const matchesSkills = course.skills.some((skill) =>
        skill.toLowerCase().includes(search)
      );
      const matchesDate = course.date.toLowerCase().includes(search);
      return matchesTitle || matchesSkills || matchesDate;
    });
  };

  const filteredCourses = getFilteredCourses();
  const activePlatformData = activePlatform ? CERTIFICATES_DATA[activePlatform] : null;

  // Stagger animation variants for courses
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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <div className="pb-12" id="certifications">
      {/* Section Title */}
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 1 }}
        className="my-12 text-center text-4xl font-medium tracking-tight"
      >
        {content.title}
      </motion.h1>

      <motion.p
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center text-neutral-400 max-w-xl mx-auto mb-16 text-sm sm:text-base font-light"
      >
        {content.subtitle}
      </motion.p>

      {/* Platform Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {Object.values(CERTIFICATES_DATA).map((platform, idx) => (
          <motion.div
            key={platform.id}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="glass-panel p-8 relative overflow-hidden flex flex-col justify-between group h-full"
            style={{
              "--glow-color": platform.glowColor,
              "--border-color": platform.borderColor
            }}
          >
            {/* Background platform glow reflection */}
            <div
              className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-500 group-hover:scale-150"
              style={{ backgroundColor: platform.color }}
            />

            <div>
              {/* Platform Logo Row */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="h-12 w-auto max-w-[200px] flex items-center justify-start overflow-hidden">
                  <img
                    src={platform.logo}
                    alt={platform.title}
                    className="h-full object-contain max-h-12 filter brightness-100 group-hover:scale-[1.05] transition-transform duration-300"
                  />
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${platform.color}15`,
                    color: platform.color,
                    border: `1px solid ${platform.color}25`
                  }}
                >
                  {platform.stats.completedPercentage === "100%" ? "Pro" : "Alumnus"}
                </span>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-3 gap-2 bg-neutral-950/40 border border-white/5 rounded-xl p-3.5 mb-6 text-center text-xs relative z-10">
                <div>
                  <div className="text-neutral-400 mb-0.5">{lang === "es" ? "Cursos" : "Courses"}</div>
                  <div className="font-bold text-white text-base">{platform.stats.coursesCount}</div>
                </div>
                <div className="border-x border-white/5">
                  <div className="text-neutral-400 mb-0.5">{lang === "es" ? "Completado" : "Completed"}</div>
                  <div className="font-bold text-base" style={{ color: platform.color }}>
                    {platform.stats.completedPercentage}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-400 mb-0.5">{lang === "es" ? "Estudio" : "Study"}</div>
                  <div className="font-bold text-white text-base">
                    {typeof platform.stats.hoursCount === "object"
                      ? platform.stats.hoursCount[lang || "es"]
                      : platform.stats.hoursCount}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-300 font-light text-sm leading-relaxed mb-8 relative z-10">
                {platform.description[lang || "es"]}
              </p>
            </div>

            {/* Action button */}
            <button
              onClick={() => setActivePlatform(platform.id)}
              className="w-full py-3.5 px-6 rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 text-sm relative z-10 bg-neutral-900 border border-white/10 hover:border-white/20 text-white hover:bg-neutral-950 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
            >
              <FiBookOpen className="text-base" style={{ color: platform.color }} />
              {content.openBtn}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activePlatform && activePlatformData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/85 backdrop-blur-lg"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-5xl h-[85vh] max-h-[800px] flex flex-col md:flex-row bg-[#0b0615]/95 border rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10"
              style={{ borderColor: `${activePlatformData.color}35` }}
            >
              {/* Dynamic Background Glow inside modal */}
              <div
                className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
                style={{ backgroundColor: activePlatformData.color }}
              />

              {/* SIDEBAR: Learning Paths (Responsive: shifts to top horizontal list on mobile) */}
              <div className="w-full md:w-80 border-b md:border-b-0 md:border-r border-white/5 bg-black/30 flex flex-col md:h-full shrink-0">
                {/* Platform Header info */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <div className="h-9 w-auto flex items-center">
                    <img
                      src={activePlatformData.logo}
                      alt={activePlatformData.title}
                      className="h-full object-contain max-h-9"
                    />
                  </div>
                  <button
                    onClick={handleClose}
                    className="md:hidden w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white border border-white/10 cursor-pointer"
                  >
                    <FiX />
                  </button>
                </div>

                {/* Vertical Tabs (Desktop) / Horizontal Tabs (Mobile) */}
                <div className="p-4 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible md:overflow-y-auto scrollbar-none flex-grow">
                  {activePlatformData.paths.map((path) => {
                    const isActive = activePathId === path.id && searchTerm.trim() === "";
                    return (
                      <button
                        key={path.id}
                        onClick={() => {
                          setActivePathId(path.id);
                          setSearchTerm("");
                        }}
                        className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-medium tracking-wide text-left cursor-pointer transition-all duration-300 shrink-0 md:shrink-0 flex items-center justify-between border ${
                          isActive
                            ? "bg-white/5 text-white"
                            : "bg-transparent border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-white/5"
                        }`}
                        style={{
                          borderColor: isActive ? `${activePlatformData.color}45` : "transparent"
                        }}
                      >
                        <span className="truncate max-w-[150px] md:max-w-none">{path.title[lang] || path.title}</span>
                        {isActive && (
                          <div
                            className="hidden md:block w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]"
                            style={{ color: activePlatformData.color, backgroundColor: activePlatformData.color }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Sidebar Stats Footer (Desktop only) */}
                <div className="hidden md:block p-6 border-t border-white/5 bg-black/40">
                  <div className="space-y-3.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">{content.stats.completed}</span>
                      <span className="font-bold text-white">{activePlatformData.stats.coursesCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">{content.stats.progress}</span>
                      <span className="font-bold" style={{ color: activePlatformData.color }}>
                        {activePlatformData.stats.completedPercentage}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">{content.stats.hours}</span>
                      <span className="font-bold text-white">
                        {typeof activePlatformData.stats.hoursCount === "object"
                          ? activePlatformData.stats.hoursCount[lang || "es"]
                          : activePlatformData.stats.hoursCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAIN CONTENT AREA: Courses Grid & Search */}
              <div className="flex-grow flex flex-col h-full overflow-hidden">
                {/* Search Bar & Header */}
                <div className="p-6 border-b border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between bg-black/10 shrink-0">
                  <div className="relative w-full sm:max-w-md">
                    <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 text-base" />
                    <input
                      type="text"
                      placeholder={content.searchPlaceholder}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-950/60 border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/50 transition-colors"
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

                  <button
                    onClick={handleClose}
                    className="hidden md:flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10 px-4.5 py-2.5 rounded-xl border border-white/10 transition-colors cursor-pointer"
                  >
                    <FiX className="text-sm" />
                    {content.close}
                  </button>
                </div>

                {/* Courses Grid Scroll Container */}
                <div className="flex-grow overflow-y-auto p-6 scrollbar-thin">
                  {filteredCourses.length > 0 ? (
                    <motion.div
                      key={`${activePlatform}-${activePathId}`}
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                    >
                      {filteredCourses.map((course, idx) => (
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
                          {/* Top row */}
                          <div>
                            <div className="flex items-start justify-between gap-3 mb-2.5">
                              <div className="flex gap-2">
                                <div
                                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                  style={{ backgroundColor: `${activePlatformData.color}15` }}
                                >
                                  <FiAward style={{ color: activePlatformData.color }} className="text-base" />
                                </div>
                                <h3 className="font-semibold text-white text-sm sm:text-base leading-snug group-hover:text-purple-300 transition-colors duration-300">
                                  {course.title}
                                </h3>
                              </div>

                              {/* Grade/Badge */}
                              {course.score && (
                                <span
                                  className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shrink-0 border"
                                  style={{
                                    backgroundColor: `${activePlatformData.color}15`,
                                    color: activePlatformData.color,
                                    borderColor: `${activePlatformData.color}35`
                                  }}
                                >
                                  {course.score}
                                </span>
                              )}
                            </div>

                            {/* Details meta */}
                            <div className="flex flex-wrap gap-4 text-xs text-neutral-400 mb-4 font-light">
                              <span className="flex items-center gap-1">
                                <FiCalendar className="text-[10px]" />
                                {course.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <FiClock className="text-[10px]" />
                                {typeof course.duration === "object"
                                  ? course.duration[lang || "es"]
                                  : course.duration}
                              </span>
                              <span className="flex items-center gap-1 text-emerald-400">
                                <FiCheck className="text-[10px]" />
                                {content.completed}
                              </span>
                            </div>

                            {/* Skills Tag Cloud */}
                            <div className="flex flex-wrap gap-1.5 mb-5">
                              {course.skills.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="text-[10px] px-2 py-0.5 rounded bg-neutral-900 border border-white/5 text-neutral-300 font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action button */}
                          <a
                            href={course.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-2 px-4 rounded-lg bg-neutral-900 border border-white/5 text-xs text-neutral-300 hover:text-white hover:bg-neutral-950 hover:border-white/20 transition-all flex items-center justify-center gap-1.5 font-medium cursor-pointer"
                          >
                            {content.viewCredential}
                            <FiExternalLink className="text-[10px] text-purple-400 group-hover:text-purple-300 transition-colors" />
                          </a>
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-64 flex flex-col items-center justify-center text-center p-6 border border-white/5 rounded-xl bg-neutral-950/20"
                    >
                      <FiSearch className="text-4xl text-neutral-600 mb-3" />
                      <p className="text-sm text-neutral-400 max-w-sm">{content.noResults}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
