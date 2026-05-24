import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-8">
        <h1 className="my-20 text-center text-4xl">About 
            <span className="text-neutral-500"> Me</span></h1>
        <div className="flex justify-center">
            <motion.div className="w-full max-w-4xl p-4"
             whileInView={{y:0,opacity:1}}
             initial={{y:50,opacity:0}}
             transition={{duration:0.5}}>
            <div className="glass-panel p-8 lg:p-12 text-center lg:text-left">
                <p className="my-2 text-neutral-300 leading-relaxed text-lg">{ABOUT_TEXT}</p>
            </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About
