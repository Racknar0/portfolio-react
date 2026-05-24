import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { translations } from "../constants/translations";

// Componente para la tarjeta de experiencia con efecto de inclinación 3D y reflejo
const TimelineCard = ({ experience }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mapear la rotación sutil en 3D
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  // Posición del cursor para el efecto de brillo (glare)
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calcular coordenadas relativas entre -0.5 y 0.5
    x.set((event.clientX - rect.left) / width - 0.5);
    y.set((event.clientY - rect.top) / height - 0.5);

    // Calcular posición absoluta en píxeles para el brillo
    glareX.set(event.clientX - rect.left);
    glareY.set(event.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    glareX.set(0);
    glareY.set(0);
  };

  const glareBg = useTransform(
    [glareX, glareY],
    ([gx, gy]) => `radial-gradient(250px circle at ${gx}px ${gy}px, rgba(255, 255, 255, 0.08), transparent 80%)`
  );

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      className="glass-panel p-6 rounded-2xl relative overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(168,85,247,0.25)] border border-white/10 group cursor-pointer w-full text-left"
    >
      {/* Brillo dinámico de spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
        style={{ background: glareBg }}
      />
      {/* Resplandor ambiental de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
      
      {/* Contenido flotante 3D */}
      <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors duration-300">
          {experience.role}
        </h3>
        
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-purple-200 bg-purple-900/50 border border-purple-500/30 px-2.5 py-0.5 rounded-full">
            {experience.company}
          </span>
          <span className="md:hidden text-xs font-medium text-pink-300">
            {experience.year}
          </span>
        </div>
        
        <p className="text-neutral-300 text-sm leading-relaxed">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
};

const Experience = ({ lang }) => {
  const t = translations[lang].experience;

  return (
    <div className="pb-8">
      <motion.h1 
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent"
      >
        {t.title}
      </motion.h1>

      <div className="relative w-full mx-auto">
        {/* Línea central brillante de la línea de tiempo */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ originY: 0 }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-pink-500 to-transparent -translate-x-1/2 z-0"
        />

        <div className="space-y-12">
          {t.list.map((experience, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className="relative flex flex-col md:flex-row items-start md:justify-between w-full pl-10 md:pl-0"
              >
                {/* Columna Izquierda (Solo Desktop) */}
                <div className={`hidden md:flex md:w-[47%] items-start ${isEven ? 'justify-end' : 'justify-start pt-6'}`}>
                  {isEven ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 30 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full"
                    >
                      <TimelineCard experience={experience} />
                    </motion.div>
                  ) : (
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 w-full text-right block">
                      {experience.year}
                    </span>
                  )}
                </div>

                {/* Nodo Central (Hito brillante) */}
                <div className="absolute left-4 md:left-1/2 top-9 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 border border-white/40 shadow-[0_0_15px_rgba(236,72,153,0.7)] flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_5px_#fff]"></span>
                    <span className="absolute w-5 h-5 rounded-full bg-pink-500/30 animate-ping pointer-events-none"></span>
                  </div>
                </div>

                {/* Columna Derecha */}
                <div className="w-full md:w-[47%] flex flex-col justify-center">
                  {isEven ? (
                    <>
                      {/* Año móvil */}
                      <span className="md:hidden text-sm font-semibold text-pink-400 mb-2">
                        {experience.year}
                      </span>
                      {/* Tarjeta móvil */}
                      <div className="md:hidden w-full">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95, y: 30 }}
                          whileInView={{ opacity: 1, scale: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="w-full"
                        >
                          <TimelineCard experience={experience} />
                        </motion.div>
                      </div>
                      {/* Año Desktop */}
                      <span className="hidden md:inline text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 pt-6 text-left w-full block">
                        {experience.year}
                      </span>
                    </>
                  ) : (
                    <>
                      {/* Año móvil */}
                      <span className="md:hidden text-sm font-semibold text-pink-400 mb-2">
                        {experience.year}
                      </span>
                      {/* Tarjeta Desktop & Móvil */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                      >
                        <TimelineCard experience={experience} />
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
