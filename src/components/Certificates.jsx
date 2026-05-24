import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBookOpen, FiX, FiExternalLink } from "react-icons/fi";
import { CERTIFICATES_DATA } from "../constants/certificates";

import PlatziModal from "./PlatziModal";
import CoderhouseModal from "./CoderhouseModal";
import StandardModal from "./StandardModal";

const Certificates = ({ lang }) => {
  const [activePlatform, setActivePlatform] = useState(null); // null | 'platzi' | 'coderhouse' | 'mintic' | etc.
  const platziRoutes = CERTIFICATES_DATA.platzi?.routes || [];
  const [activePlatziRouteId, setActivePlatziRouteId] = useState("frontend-backend-js");
  const [platziCourses, setPlatziCourses] = useState([]);
  const [previewUrl, setPreviewUrl] = useState(null);

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
      noResults: "No se encontraron cursos para tu búsqueda.",
      filterAll: "Todos",
      filterCompleted: "Completados",
      filterPending: "Pendientes",
      pathProgress: "Progreso de la Ruta:",
      locked: "Bloqueado"
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
      noResults: "No courses found matching your search.",
      filterAll: "All",
      filterCompleted: "Completed",
      filterPending: "Pending",
      pathProgress: "Path Progress:",
      locked: "Locked"
    }
  }[lang || "es"];

  // Fetch dynamic platzi courses mapping when selected route changes
  useEffect(() => {
    const activeRoute = platziRoutes.find(r => r.id === activePlatziRouteId);
    if (!activeRoute) return;

    fetch(activeRoute.jsonPath)
      .then((res) => res.json())
      .then((data) => {
        setPlatziCourses(data);
      })
      .catch((err) => {
        console.error("Error fetching platzi route mapping:", err);
      });
  }, [activePlatziRouteId]);

  // Prevent body scroll when any modal is open
  useEffect(() => {
    if (activePlatform) {
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
  };

  const activePlatformData = activePlatform ? CERTIFICATES_DATA[activePlatform] : null;

  const getPlatformCoursesCount = (platform) => {
    if (platform.id === "platzi") {
      return platziCourses.length > 0 ? platziCourses.length : platform.stats.coursesCount;
    }
    let count = 0;
    if (platform.careers) {
      count += platform.careers.length;
    }
    if (platform.paths) {
      platform.paths.forEach(p => {
        count += p.courses.length;
      });
    }
    return count || platform.stats.coursesCount;
  };

  const getPlatformCompletedPercentage = (platform) => {
    if (platform.id === "platzi") {
      if (platziCourses.length > 0) {
        const completed = platziCourses.filter(c => c.completed).length;
        return `${Math.round((completed / platziCourses.length) * 100)}%`;
      }
      return platform.stats.completedPercentage;
    }
    
    let total = 0;
    let completed = 0;
    if (platform.careers) {
      total += platform.careers.length;
      completed += platform.careers.length;
    }
    if (platform.paths) {
      platform.paths.forEach(p => {
        total += p.courses.length;
        p.courses.forEach(c => {
          if (c.completed !== false && (c.credentialUrl || (c.score && c.score !== "Por iniciar" && c.score !== "En progreso"))) {
            completed++;
          }
        });
      });
    }
    if (total === 0) return platform.stats.completedPercentage;
    return `${Math.round((completed / total) * 100)}%`;
  };

  const getPlatformStudyTime = (platform) => {
    if (platform.id === "platzi") {
      if (platziCourses.length > 0) {
        const totalHours = platziCourses.reduce((acc, c) => acc + parseInt(c.duration || 0), 0);
        return `${totalHours} ${lang === "es" ? "horas" : "hours"}`;
      }
      return typeof platform.stats.hoursCount === "object"
        ? platform.stats.hoursCount[lang || "es"]
        : platform.stats.hoursCount;
    }
    
    return typeof platform.stats.hoursCount === "object"
      ? platform.stats.hoursCount[lang || "es"]
      : platform.stats.hoursCount;
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
                  <div className="text-neutral-400 mb-0.5">{lang === "es" ? "Certificaciones" : "Certifications"}</div>
                  <div className="font-bold text-white text-base">
                    {getPlatformCoursesCount(platform)}
                  </div>
                </div>
                <div className="border-x border-white/5">
                  <div className="text-neutral-400 mb-0.5">{lang === "es" ? "Completado" : "Completed"}</div>
                  <div className="font-bold text-base" style={{ color: platform.color }}>
                    {getPlatformCompletedPercentage(platform)}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-400 mb-0.5">{lang === "es" ? "Estudio" : "Study"}</div>
                  <div className="font-bold text-white text-base">
                    {getPlatformStudyTime(platform)}
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

      {/* Modals Overlay */}
      <AnimatePresence>
        {activePlatform === "platzi" && (
          <PlatziModal
            isOpen={!!activePlatform}
            onClose={handleClose}
            platziCourses={platziCourses}
            activePlatformData={activePlatformData}
            lang={lang || "es"}
            content={content}
            activeRouteId={activePlatziRouteId}
            setActiveRouteId={setActivePlatziRouteId}
            routes={platziRoutes}
            onViewCredential={setPreviewUrl}
          />
        )}
        {activePlatform === "coderhouse" && (
          <CoderhouseModal
            isOpen={!!activePlatform}
            onClose={handleClose}
            activePlatformData={activePlatformData}
            lang={lang || "es"}
            content={content}
            onViewCredential={setPreviewUrl}
          />
        )}
        {activePlatform && activePlatform !== "platzi" && activePlatform !== "coderhouse" && (
          <StandardModal
            isOpen={!!activePlatform}
            onClose={handleClose}
            activePlatform={activePlatform}
            activePlatformData={activePlatformData}
            lang={lang || "es"}
            content={content}
            onViewCredential={setPreviewUrl}
          />
        )}
      </AnimatePresence>

      {/* Credential Preview Modal Overlay (Third Modal) */}
      <AnimatePresence>
        {previewUrl && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreviewUrl(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />

            {/* Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full max-w-5xl h-[85vh] flex flex-col bg-[#07030e] border border-white/10 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-10"
            >
              {/* Header */}
              <div className="p-4 border-b border-white/5 bg-black/45 flex items-center justify-between shrink-0">
                <span className="text-xs sm:text-sm font-semibold text-neutral-300">
                  {lang === "es" ? "Vista Previa de Credencial" : "Credential Preview"}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1 font-bold"
                  >
                    <span>{lang === "es" ? "Abrir en pestaña" : "Open in tab"}</span>
                    <FiExternalLink className="text-[10px]" />
                  </a>
                  <button
                    onClick={() => setPreviewUrl(null)}
                    className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white border border-white/10 transition-all cursor-pointer"
                  >
                    <FiX className="text-base" />
                  </button>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-grow p-4 bg-black/20 flex items-center justify-center overflow-auto">
                {previewUrl.toLowerCase().endsWith(".pdf") ? (
                  <iframe
                    src={`${previewUrl}#toolbar=0`}
                    title="Credential PDF"
                    className="w-full h-full border-none rounded-lg bg-white"
                  />
                ) : (
                  <img
                    src={previewUrl}
                    alt="Credential Preview"
                    className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
