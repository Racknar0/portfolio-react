import { RiReactjsLine } from "react-icons/ri"
import { 
  SiMongodb, 
  SiNextdotjs, 
  SiDjango, 
  SiPostgresql, 
  SiCsharp, 
  SiAngular, 
  SiTailwindcss, 
  SiOpenai, 
  SiMysql,
  SiGoogletagmanager,
  SiGoogleanalytics,
  SiAdobephotoshop,
  SiWordpress,
  SiJquery,
  SiPug,
  SiTypescript,
  SiRedux,
  SiPwa,
  SiVite,
  SiWebpack,
  SiNestjs,
  SiPrisma,
  SiDocker,
  SiDrupal,
  SiJest,
  SiGraphql,
  SiReactquery,
  SiMui,
  SiNpm,
  SiYarn,
  SiEslint,
  SiBabel
} from "react-icons/si"
import { FaPython, FaNodeJs, FaLinux, FaGitAlt, FaGithub, FaServer, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaTerminal, FaAws } from "react-icons/fa"
import { DiJavascript } from "react-icons/di"
import { TbBrandReactNative, TbApi, TbSeo } from "react-icons/tb"
import { MdDevices } from "react-icons/md"
import { motion } from "framer-motion"
import { translations } from "../constants/translations";

const frontendSkills = [
  { name: "ReactJS", icon: RiReactjsLine, color: "text-cyan-400", glow: "rgba(34,211,238,0.35)", desc: "Desarrollo SPA & Hooks personalizados" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", glow: "rgba(255,255,255,0.35)", desc: "SSR, SSG & Optimización SEO" },
  { name: "Angular", icon: SiAngular, color: "text-red-500", glow: "rgba(239,68,68,0.35)", desc: "Estructuras modulares empresariales" },
  { name: "React Native", icon: TbBrandReactNative, color: "text-cyan-500", glow: "rgba(6,182,212,0.35)", desc: "Aplicaciones móviles nativas híbridas" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500", glow: "rgba(59,130,246,0.35)", desc: "Tipado estático y robustez de código" },
  { name: "JavaScript", icon: DiJavascript, color: "text-yellow-400", glow: "rgba(250,204,21,0.35)", desc: "ES6+, lógica asíncrona y manipulación DOM" },
  { name: "Redux & Zustand", icon: SiRedux, color: "text-purple-500", glow: "rgba(168,85,247,0.35)", desc: "Gestión de estado global y centralizado" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600", glow: "rgba(219,39,119,0.35)", desc: "Consultas de APIs estructuradas y eficientes" },
  { name: "React Query", icon: SiReactquery, color: "text-red-500", glow: "rgba(239,68,68,0.35)", desc: "Gestión de caché y sincronización de datos" },
  { name: "PWA", icon: SiPwa, color: "text-violet-400", glow: "rgba(139,92,246,0.35)", desc: "Aplicaciones web con experiencia nativa" },
  { name: "Vite", icon: SiVite, color: "text-yellow-300", glow: "rgba(253,224,71,0.35)", desc: "Herramienta de desarrollo y bundling rápido" },
  { name: "Webpack", icon: SiWebpack, color: "text-blue-400", glow: "rgba(96,165,250,0.35)", desc: "Empaquetado de módulos en sistemas legacy" },
  { name: "Jest", icon: SiJest, color: "text-red-700", glow: "rgba(185,28,28,0.35)", desc: "Pruebas unitarias en JS y TypeScript" },
  { name: "Material UI (MUI)", icon: SiMui, color: "text-blue-500", glow: "rgba(59,130,246,0.35)", desc: "Componentes listos bajo Material Design" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400", glow: "rgba(45,212,191,0.35)", desc: "Estilizado rápido con clases utilitarias" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500", glow: "rgba(168,85,247,0.35)", desc: "Prototipado rápido y layouts responsivos" },
  { name: "SASS", icon: FaSass, color: "text-pink-400", glow: "rgba(244,114,182,0.35)", desc: "Hojas de estilo modulares y dinámicas" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", glow: "rgba(59,130,246,0.35)", desc: "Diseños avanzados con Flexbox y CSS Grid" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500", glow: "rgba(249,115,22,0.35)", desc: "Maquetación semántica y accesibilidad" },
  { name: "jQuery", icon: SiJquery, color: "text-blue-400", glow: "rgba(96,165,250,0.35)", desc: "Soporte y mantenimiento de sistemas legacy" },
  { name: "Pug", icon: SiPug, color: "text-amber-600", glow: "rgba(217,119,6,0.35)", desc: "Preprocesamiento y plantillas HTML" },
  { name: "Npm", icon: SiNpm, color: "text-red-500", glow: "rgba(239,68,68,0.35)", desc: "Gestor de paquetes y dependencias Node" },
  { name: "Yarn", icon: SiYarn, color: "text-blue-400", glow: "rgba(96,165,250,0.35)", desc: "Instalación rápida de dependencias y módulos" },
  { name: "ESLint", icon: SiEslint, color: "text-indigo-500", glow: "rgba(99,102,241,0.35)", desc: "Análisis estático de código y buenas prácticas" },
  { name: "Babel", icon: SiBabel, color: "text-yellow-500", glow: "rgba(234,179,8,0.35)", desc: "Compilador y transpilador de JavaScript moderno" },
  { name: "Web Responsive", icon: MdDevices, color: "text-indigo-400", glow: "rgba(129,140,248,0.35)", desc: "Adaptabilidad total en múltiples dispositivos" }
];

const backendSkills = [
  { name: "NodeJS & Express", icon: FaNodeJs, color: "text-green-500", glow: "rgba(34,197,94,0.35)", desc: "Servicios API REST, middlewares y ruteo" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-600", glow: "rgba(224,30,90,0.35)", desc: "Framework backend escalable para Node" },
  { name: "C#", icon: SiCsharp, color: "text-violet-600", glow: "rgba(124,58,237,0.35)", desc: "Backend corporativo y lógica de negocios" },
  { name: "Django", icon: SiDjango, color: "text-emerald-700", glow: "rgba(4,120,87,0.35)", desc: "Framework robusto bajo patrón MTV de Python" },
  { name: "Python", icon: FaPython, color: "text-yellow-400", glow: "rgba(250,204,21,0.35)", desc: "Scripting, automatización e integración" },
  { name: "APIs REST", icon: TbApi, color: "text-rose-500", glow: "rgba(244,63,94,0.35)", desc: "Diseño, consumo e integración de servicios" },
  { name: "Consumo de IAs", icon: SiOpenai, color: "text-emerald-400", glow: "rgba(52,211,153,0.35)", desc: "Integración de LLMs (OpenAI, Groq, Claude)" }
];

const databaseDevOpsSkills = [
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400", glow: "rgba(96,165,250,0.35)", desc: "Bases de datos relacionales complejas" },
  { name: "MySQL", icon: SiMysql, color: "text-sky-500", glow: "rgba(14,165,233,0.35)", desc: "Modelado relacional y esquemas SQL" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400", glow: "rgba(74,222,128,0.35)", desc: "Estructuras de datos NoSQL de alta escala" },
  { name: "Prisma ORM", icon: SiPrisma, color: "text-teal-400", glow: "rgba(20,184,166,0.35)", desc: "ORM moderno para Node.js y TypeScript" },
  { name: "Docker", icon: SiDocker, color: "text-sky-400", glow: "rgba(56,189,248,0.35)", desc: "Contenedores y virtualización de apps" },
  { name: "Linux", icon: FaLinux, color: "text-orange-400", glow: "rgba(251,146,60,0.35)", desc: "Administración de sistemas y scripting Bash" },
  { name: "AWS Services", icon: FaAws, color: "text-amber-500", glow: "rgba(245,158,11,0.35)", desc: "Despliegues e infraestructura cloud (EC2, S3)" },
  { name: "Manejo VPS", icon: FaServer, color: "text-cyan-400", glow: "rgba(34,211,238,0.35)", desc: "Configuración de hosting en servidores VPS" },
  { name: "SSH", icon: FaTerminal, color: "text-slate-400", glow: "rgba(148,163,184,0.35)", desc: "Acceso y administración remota segura" },
  { name: "Git & GitHub", icon: FaGitAlt, color: "text-orange-600", glow: "rgba(234,88,12,0.35)", desc: "Control de versiones y flujos colaborativos" }
];

const seoMarketingToolsSkills = [
  { name: "SEO & Marketing", icon: TbSeo, color: "text-cyan-300", glow: "rgba(103,232,249,0.35)", desc: "Posicionamiento y auditoría web técnica" },
  { name: "Tag Manager", icon: SiGoogletagmanager, color: "text-orange-500", glow: "rgba(249,115,22,0.35)", desc: "Medición y etiquetas personalizadas (GTM)" },
  { name: "Analytics", icon: SiGoogleanalytics, color: "text-yellow-500", glow: "rgba(234,179,8,0.35)", desc: "Análisis de comportamiento e informes" },
  { name: "WordPress", icon: SiWordpress, color: "text-blue-600", glow: "rgba(37,99,235,0.35)", desc: "Desarrollo y mantenimiento CMS" },
  { name: "Drupal", icon: SiDrupal, color: "text-sky-600", glow: "rgba(14,165,233,0.35)", desc: "CMS modular y flexible a nivel empresarial" },
  { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-500", glow: "rgba(59,130,246,0.35)", desc: "Edición gráfica y assets para UI/UX" },
  { name: "Diseño Web UI/UX", icon: MdDevices, color: "text-purple-400", glow: "rgba(192,132,252,0.35)", desc: "Maquetación de interfaces intuitivas" }
];

const SkillCard = ({ title, skills, titleColor, delay, lang }) => {
  return (
    <motion.div 
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true }}
      className="glass-panel p-6 flex flex-col h-full"
    >
      <h2 className={`text-xl font-bold mb-6 ${titleColor} border-b border-neutral-800 pb-3 flex items-center justify-between`}>
        <span>{title}</span>
        <span className="text-xs font-normal text-neutral-500">
          {skills.length} {lang === "es" ? "Tecnologías" : "Technologies"}
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => {
          const IconComponent = skill.icon;
          const localizedDesc = translations[lang].technologies.skills[skill.name] || skill.desc;
          return (
            <motion.div 
              key={index}
              whileHover={{ 
                scale: 1.03, 
                y: -2,
                borderColor: skill.glow,
                boxShadow: `0 4px 20px -2px ${skill.glow}`
              }}
              className="flex items-center gap-3 p-3 rounded-xl bg-neutral-950/45 border border-neutral-900 transition-all duration-300 group cursor-pointer"
            >
              <div className="p-2 rounded-lg bg-neutral-900 group-hover:bg-neutral-950 transition-colors duration-300">
                <IconComponent className={`text-3xl ${skill.color} transition-all duration-300 group-hover:scale-110`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-neutral-100 group-hover:text-white transition-colors duration-300 truncate">{skill.name}</h3>
                <p className="text-[11px] text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 truncate">{localizedDesc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

const Technologies = ({ lang }) => {
  const t = translations[lang].technologies;
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 items-start">
        {/* Left Column - Frontend (Contains more skills, takes the entire left side) */}
        <div className="h-full">
          <SkillCard 
            title={t.categories.frontend} 
            skills={frontendSkills} 
            titleColor="text-pink-300" 
            delay={0.1}
            lang={lang}
          />
        </div>

        {/* Right Column - Stack of Backend, DB & DevOps, SEO & Tools */}
        <div className="flex flex-col gap-8">
          <SkillCard 
            title={t.categories.backend} 
            skills={backendSkills} 
            titleColor="text-purple-300" 
            delay={0.2}
            lang={lang}
          />
          <SkillCard 
            title={t.categories.database} 
            skills={databaseDevOpsSkills} 
            titleColor="text-cyan-300" 
            delay={0.3}
            lang={lang}
          />
          <SkillCard 
            title={t.categories.seo} 
            skills={seoMarketingToolsSkills} 
            titleColor="text-yellow-300" 
            delay={0.4}
            lang={lang}
          />
        </div>
      </div>
    </div>
  )
}

export default Technologies;
