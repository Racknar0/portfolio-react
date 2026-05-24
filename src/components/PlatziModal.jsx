import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiSearch, FiClock, FiCheck, FiExternalLink, FiAward } from "react-icons/fi";

const ROW_HEIGHT = 140; // Height of each row in pixels (adjusted for vertical text spacing below nodes)

const PlatziModal = ({ 
  isOpen, 
  onClose, 
  platziCourses, 
  activePlatformData, 
  lang, 
  content,
  activeRouteId,
  setActiveRouteId,
  routes,
  onViewCredential
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [cols, setCols] = useState(4); // Responsive columns count (2 for mobile, 3 for tablet, 4 for desktop)

  // Listen to screen size changes to dynamically adjust the grid column count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCols(2);
      } else if (window.innerWidth < 1024) {
        setCols(3);
      } else {
        setCols(4);
      }
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Active route details
  const activeRoute = useMemo(() => {
    return (routes || []).find(r => r.id === activeRouteId) || routes?.[0];
  }, [routes, activeRouteId]);

  const routeTitle = activeRoute?.title[lang] || activeRoute?.title || "";

  // Filter courses based on search term
  const filteredCourses = useMemo(() => {
    return platziCourses.filter(course => {
      if (searchTerm.trim() !== "") {
        const search = searchTerm.toLowerCase();
        const matchesTitle = (course.title || "").toLowerCase().includes(search);
        const matchesSkills = (course.skills || []).some(skill => 
          skill.toLowerCase().includes(search)
        );
        return matchesTitle || matchesSkills;
      }
      return true;
    });
  }, [platziCourses, searchTerm]);

  // Overall Stats
  const stats = useMemo(() => {
    const total = platziCourses.length;
    const completed = platziCourses.filter(c => c.completed).length;
    return {
      total,
      completed,
      pct: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  }, [platziCourses]);

  // Render continuous background and progress lines using CSS/HTML divs
  const renderRoadConnections = () => {
    const total = filteredCourses.length;
    if (total === 0) return null;

    const Y_OFFSET = 44; // Vertical center of circle in px within 140px row
    const segments = [];
    for (let i = 0; i < total - 1; i++) {
      const courseA = filteredCourses[i];
      const courseB = filteredCourses[i + 1];
      const isCompleted = courseA.completed && courseB.completed;
      const rowA = Math.floor(i / cols);
      const rowB = Math.floor((i + 1) / cols);
      
      const isEvenRowA = rowA % 2 === 0;
      const colA = isEvenRowA ? (i % cols) : (cols - 1 - (i % cols));
      
      const isEvenRowB = rowB % 2 === 0;
      const colB = isEvenRowB ? ((i + 1) % cols) : (cols - 1 - ((i + 1) % cols));

      const colWidthPercent = 100 / cols;
      const colCenterOffset = colWidthPercent / 2;

      if (rowA === rowB) {
        // Horizontal connection within the same row
        const minCol = Math.min(colA, colB);
        const leftPercent = minCol * colWidthPercent + colCenterOffset;
        segments.push(
          <div
            key={`h-${i}`}
            className="absolute z-0 transition-all duration-300"
            style={{
              left: `${leftPercent}%`,
              width: `${colWidthPercent}%`,
              top: `${rowA * ROW_HEIGHT + Y_OFFSET - 2}px`,
              height: "4px",
              backgroundColor: isCompleted ? "#00BFB2" : "#1e1b29",
              boxShadow: isCompleted ? "0 0 10px rgba(0, 191, 178, 0.8)" : "none",
              borderRadius: "2px"
            }}
          />
        );
      } else {
        // Vertical connection between rowA and rowB (where rowB = rowA + 1)
        const leftPercent = colA * colWidthPercent + colCenterOffset;
        segments.push(
          <div
            key={`v-${i}`}
            className="absolute z-0 transition-all duration-300"
            style={{
              left: `calc(${leftPercent}% - 2px)`,
              width: "4px",
              top: `${rowA * ROW_HEIGHT + Y_OFFSET}px`,
              height: `${ROW_HEIGHT}px`,
              backgroundColor: isCompleted ? "#00BFB2" : "#1e1b29",
              boxShadow: isCompleted ? "0 0 10px rgba(0, 191, 178, 0.8)" : "none",
              borderRadius: "2px"
            }}
          />
        );
      }
    }
    return segments;
  };

  if (!isOpen) return null;

  const totalRows = Math.ceil(filteredCourses.length / cols);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/92 backdrop-blur-lg"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        className="relative w-full max-w-7xl h-[90vh] flex flex-col bg-[#07030e] border rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.95)] z-10"
        style={{ borderColor: `${activePlatformData.color}25` }}
      >
        {/* Glowing background highlights */}
        <div
          className="absolute -top-40 left-1/4 w-[600px] h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundColor: activePlatformData.color }}
        />
        <div
          className="absolute -bottom-40 right-1/4 w-[600px] h-96 rounded-full blur-3xl opacity-5 pointer-events-none"
          style={{ backgroundColor: activePlatformData.color }}
        />

        {/* HEADER */}
        <div className="p-6 border-b border-white/5 bg-black/50 relative z-10 shrink-0 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-auto flex items-center">
              <img
                src={activePlatformData.logo}
                alt={activePlatformData.title}
                className="h-full object-contain max-h-9"
              />
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            
            {/* Route Name Chip */}
            <div 
              className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider text-[#00BFB2] bg-[#00BFB2]/10 border border-[#00BFB2]/20"
            >
              {lang === "es" ? "Mapa de Aventuras" : "Adventure Roadmap"}
            </div>
          </div>

          {/* PROGRESS METER & TINY SEARCH */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto grow max-w-3xl justify-end">
            {/* Progress */}
            <div className="flex items-center gap-3 text-xs w-full sm:w-60 shrink-0">
              <span className="text-neutral-400 font-mono font-bold">
                {stats.completed}/{stats.total} {lang === "es" ? "Completados" : "Completed"}
              </span>
              <div className="relative grow h-2.5 bg-neutral-950 rounded-full overflow-hidden border border-white/5">
                <div
                  className="absolute left-0 top-0 bottom-0 rounded-full bg-[#00BFB2] transition-all duration-500"
                  style={{
                    width: `${stats.pct}%`,
                    boxShadow: "0 0 10px #00BFB2aa"
                  }}
                />
              </div>
              <span className="font-bold text-[#00BFB2] font-mono">{stats.pct}%</span>
            </div>

            {/* Tiny Search Input */}
            <div className="relative w-full sm:w-40 shrink-0">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 text-xs" />
              <input
                type="text"
                placeholder={lang === "es" ? "Buscar..." : "Search..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 pr-7 py-1.5 rounded-lg bg-neutral-950/80 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#00BFB2]/50 transition-colors font-medium"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
                >
                  <FiX className="text-xs" />
                </button>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer shrink-0"
            >
              <FiX className="text-base" />
            </button>
          </div>
        </div>

        {/* ROUTE TABS ROW */}
        {routes && routes.length > 1 && (
          <div className="px-6 py-2 bg-neutral-950/60 border-b border-white/5 flex flex-wrap gap-1.5 items-center relative z-10 shrink-0 select-none">
            <span className="text-[9px] uppercase font-bold text-neutral-500 font-mono tracking-wider mr-1.5">
              {lang === "es" ? "Rutas:" : "Routes:"}
            </span>
            {routes.map((r) => {
              const isActive = r.id === activeRouteId;
              return (
                <button
                  key={r.id}
                  onClick={() => setActiveRouteId(r.id)}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-bold border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#00BFB2] text-[#07030e] border-[#00BFB2] shadow-[0_0_8px_rgba(0,191,178,0.3)]"
                      : "bg-[#07030e]/80 text-neutral-400 border-white/5 hover:border-white/10 hover:bg-neutral-900 hover:text-white"
                  }`}
                >
                  {r.title[lang] || r.title}
                </button>
              );
            })}
          </div>
        )}

        {/* ROAD DISPLAY CONTAINER */}
        <div className="flex-grow overflow-y-auto p-4 sm:p-8 scrollbar-thin relative z-10 bg-[#020005]/20">
          {filteredCourses.length > 0 ? (
            <div
              className="relative mx-auto"
              style={{
                width: "100%",
                maxWidth: "960px",
                height: `${totalRows * ROW_HEIGHT}px`
              }}
            >
              {/* Connection lines rendered behind nodes */}
              {renderRoadConnections()}

              {/* Grid cells containing nodes & text */}
              <div
                className="grid absolute inset-0"
                style={{
                  gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                  gridAutoRows: `${ROW_HEIGHT}px`
                }}
              >
                {filteredCourses.map((course, idx) => {
                  const isCompleted = course.completed;
                  const row = Math.floor(idx / cols);
                  const isEvenRow = row % 2 === 0;
                  const col = isEvenRow ? (idx % cols) : (cols - 1 - (idx % cols));
                  const isHovered = hoveredIdx === idx;

                  // CSS Grid placements
                  const gridColumnStart = col + 1;
                  const gridRowStart = row + 1;

                  return (
                    <div
                      key={course.id || idx}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="relative w-full h-full"
                      style={{
                        gridColumnStart,
                        gridRowStart
                      }}
                    >
                      {/* Node Circle - Positioned exactly centered horizontally */}
                      <button
                        onClick={() => {
                          if (isCompleted && course.credentialUrl) {
                            onViewCredential(course.credentialUrl);
                          }
                        }}
                        className={`absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border flex items-center justify-center bg-[#07030e] z-10 transition-all duration-300 ${
                          isCompleted
                            ? "border-[#00BFB2] shadow-[0_0_12px_rgba(0,191,178,0.3)] hover:scale-110 hover:shadow-[0_0_20px_rgba(0,191,178,0.55)] cursor-pointer"
                            : "border-[#1e1b29] hover:border-neutral-800 cursor-default"
                        }`}
                        style={{
                          top: "20px"
                        }}
                      >
                        <img
                          src={course.iconUrl || activePlatformData.logo}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = activePlatformData.logo;
                          }}
                          alt=""
                          className={`w-6 h-6 object-contain rounded-full transition-all duration-300 ${
                            isCompleted
                              ? "filter brightness-110"
                              : "filter grayscale brightness-[0.22] opacity-30"
                          }`}
                        />
                        {/* Status Check badge */}
                        {isCompleted && (
                          <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#00BFB2] flex items-center justify-center text-[#07030e] border border-[#07030e] shadow-sm">
                            <FiCheck className="text-[8px] stroke-[4]" />
                          </div>
                        )}
                      </button>

                      {/* Course Title Card - Shifted below the circle */}
                      <div
                        className="absolute text-center flex flex-col items-center justify-start pointer-events-none"
                        style={{
                          top: "74px",
                          left: "4px",
                          right: "4px"
                        }}
                      >
                        <span className="font-mono text-[8px] text-[#00BFB2] font-bold tracking-wider mb-0.5">
                          {lang === "es" ? "NIVEL" : "LEVEL"} {course.stepNumber < 10 ? `0${course.stepNumber}` : course.stepNumber}
                        </span>
                        <h5
                          className={`text-[9.5px] sm:text-[10px] leading-tight font-bold transition-colors duration-200 line-clamp-2 px-1 max-w-[190px] ${
                            isCompleted
                              ? "text-neutral-200"
                              : "text-neutral-500 font-medium"
                          }`}
                        >
                          {course.title}
                        </h5>
                      </div>

                      {/* Floating hover detail card */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.92, y: 5 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 5 }}
                            transition={{ duration: 0.15 }}
                            className="absolute z-50 w-60 p-4 bg-[#0a0614]/95 border border-[#00BFB2]/30 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.85)] backdrop-blur-md pointer-events-none text-left"
                            style={{
                              bottom: row === 0 ? "auto" : "95px",
                              top: row === 0 ? "75px" : "auto",
                              left: "50%",
                              transform: "translateX(-50%)"
                            }}
                          >
                            <div className="font-mono text-[9px] text-[#00BFB2] font-bold uppercase tracking-wider mb-1">
                              {lang === "es" ? "Detalles de Nivel" : "Level Details"}
                            </div>
                            <div className="font-bold text-white text-xs leading-snug mb-2.5">{course.title}</div>
                            <div className="text-neutral-400 text-[10px] flex justify-between border-b border-white/5 pb-2 mb-2">
                              <span className="flex items-center gap-1">
                                <FiClock className="text-[9px]" /> {course.duration}
                              </span>
                              {isCompleted ? (
                                <span className="text-[#00BFB2] font-bold">{lang === "es" ? "Completado" : "Completed"}</span>
                              ) : (
                                <span className="text-neutral-500 italic">{lang === "es" ? "No completado" : "Not completed"}</span>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {course.skills.map((s, sIdx) => (
                                <span key={sIdx} className="text-[8.5px] px-2 py-0.5 rounded bg-neutral-950 text-neutral-300 border border-white/5 font-semibold">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center py-24 text-neutral-500 font-light text-sm">
              <FiAward className="text-4xl mx-auto mb-3 opacity-30 text-neutral-400" />
              {content.noResults}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default PlatziModal;
