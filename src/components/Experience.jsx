import { motion } from "framer-motion"
import { translations } from "../constants/translations";

const Experience = ({ lang }) => {
  const t = translations[lang].experience;

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1 
       whileInView={{y:0,opacity:1}}
       initial={{y:-100,opacity:0}}
      transition={{duration:1}}
      className="my-20 text-center text-4xl">{t.title}</motion.h1>
      <div>
        {t.list.map((experience, index) => (
          <div key={index} className="mb-8 p-6 lg:p-8 flex flex-wrap lg:justify-center glass-panel items-start gap-4 lg:gap-0">
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{x:-100,opacity:0}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/4">
              <p className="mb-2 text-sm font-semibold text-purple-300">{experience.year}</p>
            </motion.div>
            <motion.div
            whileInView={{x:0,opacity:1}}
            initial={{x:100,opacity:0}}
           transition={{duration:1}}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-lg">
                {experience.role} -{" "}
                <span className="text-sm text-purple-200 bg-purple-900/40 px-2 py-1 rounded">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-300 leading-relaxed">{experience.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
