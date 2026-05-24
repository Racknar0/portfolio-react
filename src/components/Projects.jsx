import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { translations } from "../constants/translations";

// Componente para manejar sliders de imágenes en proyectos de forma interactiva y animada
const ProjectImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex, images]);

  if (!images || images.length === 0) return null;

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt={title}
        className="w-full max-w-[320px] aspect-[16/10] rounded-xl border border-neutral-800 shadow-[0_4px_25px_rgba(0,0,0,0.5)] object-cover hover:scale-[1.03] transition-all duration-300 hover:border-purple-500/20"
      />
    );
  }

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    },
    exit: (dir) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    })
  };

  return (
    <div className="relative w-full max-w-[320px] aspect-[16/10] rounded-xl border border-neutral-800 shadow-[0_4px_25px_rgba(0,0,0,0.5)] overflow-hidden group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - screenshot ${currentIndex + 1}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
      </AnimatePresence>

      {/* Flechas de navegación (visibles en hover) */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 z-20 cursor-pointer text-sm"
        aria-label="Previous image"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 z-20 cursor-pointer text-sm"
        aria-label="Next image"
      >
        &#10095;
      </button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => handleDotClick(e, index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? "bg-purple-500 w-3 shadow-[0_0_5px_#a855f7]" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Projects = ({ lang }) => {
  const t = translations[lang].projects;

  return (
    <div className="pb-8">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1 }} 
        className="my-20 text-center text-4xl"
      >
        {t.title}
      </motion.h1>
      <div className="space-y-8">
        {t.list.map((project, index) => (
          <div key={index} className="p-6 lg:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 glass-panel">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-4/12 shrink-0 flex justify-center"
            >
              <ProjectImageSlider 
                images={project.images || (project.image ? [project.image] : [])} 
                title={project.title} 
              />
            </motion.div>
            <motion.div 
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-8/12 flex flex-col text-center md:text-left"
            >
              <h6 className="mb-2 font-bold text-xl">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 text-purple-300 transition-colors duration-300 inline-flex items-center gap-2">
                    {project.title}
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                ) : (
                  project.title
                )}
              </h6>
              <p className="mb-4 text-neutral-300 leading-relaxed text-sm font-light">{project.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="rounded bg-neutral-900/60 text-purple-400 px-2 py-1 text-xs font-semibold border border-purple-500/10">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
