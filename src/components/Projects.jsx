import { motion } from "framer-motion"
import { translations } from "../constants/translations";

const Projects = ({ lang }) => {
  const t = translations[lang].projects;

  return (
    <div className="pb-8">
      <motion.h1
       whileInView={{y:0,opacity:1}}
       initial={{y:-100,opacity:0}}
      transition={{duration:1}} 
      className="my-20 text-center text-4xl">{t.title}</motion.h1>
      <div>
        {t.list.map((project, index) => (
          <div key={index} className="mb-8 p-6 lg:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 glass-panel">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-4/12 shrink-0 flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-w-[320px] aspect-[16/10] rounded-xl border border-neutral-800 shadow-[0_4px_25px_rgba(0,0,0,0.5)] object-cover hover:scale-[1.03] transition-all duration-300 hover:border-purple-500/20"
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
