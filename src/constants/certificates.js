import platziLogo from "../assets/logos/platzi.svg";
import coderhouseLogo from "../assets/logos/coderhouse.svg";

export const CERTIFICATES_DATA = {
  platzi: {
    id: "platzi",
    title: "Platzi",
    logo: platziLogo,
    color: "#00BFB2", // Platzi Modern Teal/Green
    glowColor: "rgba(0, 191, 178, 0.25)",
    borderColor: "rgba(0, 191, 178, 0.2)",
    description: {
      es: "Especialización y aprendizaje continuo a través de rutas profesionales estructuradas en frontend, backend y arquitectura de software.",
      en: "Specialization and continuous learning through structured professional paths in frontend, backend, and software architecture."
    },
    stats: {
      coursesCount: 113,
      completedPercentage: "29%",
      hoursCount: "320h"
    },
    paths: [
      {
        id: "frontend",
        title: {
          es: "Desarrollo Frontend",
          en: "Frontend Development"
        },
        courses: [
          {
            title: "Curso Profesional de React.js",
            date: "Feb 2024",
            duration: "28h",
            skills: ["React Hooks", "Custom Hooks", "Context API", "React Router"],
            credentialUrl: "https://platzi.com/p/camilotorres/",
            score: "100%",
            highlight: true
          },
          {
            title: "Curso de Next.js: Rendimiento y SEO",
            date: "Mar 2024",
            duration: "22h",
            skills: ["SSR (Server-Side Rendering)", "SSG", "App Router", "Core Web Vitals"],
            credentialUrl: "https://platzi.com/p/camilotorres/",
            score: "100%",
            highlight: true
          },
          {
            title: "Curso de React Native: Aplicaciones Móviles",
            date: "May 2024",
            duration: "30h",
            skills: ["React Native", "Expo Router", "Native Elements", "Mobile Performance"],
            credentialUrl: "https://platzi.com/p/camilotorres/",
            score: "100%",
            highlight: false
          },
          {
            title: "Curso Avanzado de TypeScript",
            date: "Jan 2024",
            duration: "18h",
            skills: ["Generics", "Utility Types", "Decorators", "Strict Typing"],
            credentialUrl: "https://platzi.com/p/camilotorres/",
            score: "100%",
            highlight: false
          },
          {
            title: "Curso de Animaciones con Framer Motion",
            date: "Apr 2024",
            duration: "15h",
            skills: ["Framer Motion", "Page Transitions", "Gesture Animations", "Layout Transitions"],
            credentialUrl: "https://platzi.com/p/camilotorres/",
            score: "100%",
            highlight: false
          }
        ]
      },
      {
        id: "backend",
        title: {
          es: "Backend & Arquitectura",
          en: "Backend & Architecture"
        },
        courses: [
          {
            title: "Curso de NestJS: Programación Modular y Arquitectura",
            date: "Jun 2024",
            duration: "26h",
            skills: ["NestJS", "TypeScript", "Dependency Injection", "Modules & Services"],
            credentialUrl: "https://platzi.com/p/camilotorres/",
            score: "100%",
            highlight: true
          },
          {
            title: "Curso de Node.js: APIs REST con Express",
            date: "May 2024",
            duration: "24h",
            skills: ["Node.js", "Express.js", "REST APIs", "Middlewares", "JWT Auth"],
            credentialUrl: "https://platzi.com/p/camilotorres/",
            score: "100%",
            highlight: true
          },
          {
            title: "Curso de PostgreSQL: Modelado y Optimización",
            date: "Jul 2024",
            duration: "20h",
            skills: ["PostgreSQL", "Database Normalization", "Query Optimization", "Indexing"],
            credentialUrl: "https://platzi.com/p/camilotorres/",
            score: "100%",
            highlight: false
          },
          {
            title: "Curso de Django y Python: Backend Enterprise",
            date: "Aug 2024",
            duration: "32h",
            skills: ["Django Framework", "Python OOP", "ORM Django", "MTV Architecture"],
            credentialUrl: "https://platzi.com/p/camilotorres/",
            score: "100%",
            highlight: false
          },
          {
            title: "Curso de Inteligencia Artificial para Desarrolladores",
            date: "Oct 2024",
            duration: "16h",
            skills: ["OpenAI API", "Prompt Engineering", "Vector DBs", "LLM Integration"],
            credentialUrl: "https://platzi.com/p/camilotorres/",
            score: "100%",
            highlight: true
          }
        ]
      }
    ]
  },
  coderhouse: {
    id: "coderhouse",
    title: "Coderhouse",
    logo: coderhouseLogo,
    color: "#35FF69", // Coderhouse Green
    glowColor: "rgba(53, 255, 105, 0.25)",
    borderColor: "rgba(53, 255, 105, 0.2)",
    description: {
      es: "Carreras y bootcamps en vivo enfocados en proyectos prácticos, trabajo en equipo simulado y mentoría personalizada.",
      en: "Live courses and bootcamps focused on hands-on projects, simulated teamwork, and personalized mentoring."
    },
    stats: {
      coursesCount: 4,
      completedPercentage: "100%",
      hoursCount: "180h"
    },
    paths: [
      {
        id: "fullstack",
        title: {
          es: "Carrera Desarrollo Full Stack",
          en: "Full Stack Development Career"
        },
        courses: [
          {
            title: "Desarrollo Web Integrado",
            date: "Mar 2023",
            duration: "40h",
            skills: ["HTML5", "CSS3", "Sass (SCSS)", "Bootstrap", "Git/GitHub"],
            credentialUrl: "https://coderhouse.com/",
            score: "Top 10%",
            highlight: true
          },
          {
            title: "JavaScript Avanzado y Lógica Asíncrona",
            date: "Jun 2023",
            duration: "36h",
            skills: ["ES6+", "Promises/Async-Await", "DOM Manipulation", "Fetch APIs", "AJAX"],
            credentialUrl: "https://coderhouse.com/",
            score: "Top 10%",
            highlight: true
          },
          {
            title: "React JS: Arquitectura de SPA",
            date: "Sep 2023",
            duration: "38h",
            skills: ["React JS", "State Managers", "Routing", "Firebase Integration"],
            credentialUrl: "https://coderhouse.com/",
            score: "Top 10%",
            highlight: true
          },
          {
            title: "Programación Backend & NoSQL",
            date: "Dec 2023",
            duration: "42h",
            skills: ["Node.js", "Express.js", "MongoDB", "Mongoose ORM", "Websockets (Socket.io)"],
            credentialUrl: "https://coderhouse.com/",
            score: "Top 10%",
            highlight: true
          },
          {
            title: "Proyecto Final Full Stack: E-Commerce Corporativo",
            date: "Jan 2024",
            duration: "24h",
            skills: ["Full Stack Architecture", "Deployment (Vercel/Heroku)", "Secure APIs", "SQL & NoSQL Integration"],
            credentialUrl: "https://coderhouse.com/",
            score: "Top 10%",
            highlight: true
          }
        ]
      },
      {
        id: "design",
        title: {
          es: "Diseño & Herramientas",
          en: "Design & Tools"
        },
        courses: [
          {
            title: "Diseño UX/UI Inicial",
            date: "Apr 2023",
            duration: "24h",
            skills: ["Figma", "User Personas", "Wireframing", "UI Prototyping"],
            credentialUrl: "https://coderhouse.com/",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Diseño UX/UI Avanzado",
            date: "Jul 2023",
            duration: "28h",
            skills: ["Design Systems", "Usability Testing", "High-Fi Mockups", "Interactive Prototypes"],
            credentialUrl: "https://coderhouse.com/",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Product Management y Metodologías Ágiles",
            date: "Nov 2023",
            duration: "30h",
            skills: ["Scrum/Kanban", "Product Roadmap", "KPIs & Analytics", "User Stories"],
            credentialUrl: "https://coderhouse.com/",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Marketing Digital & SEO",
            date: "Aug 2023",
            duration: "22h",
            skills: ["SEO Audits", "Google Search Console", "Google Analytics 4", "Semrush"],
            credentialUrl: "https://coderhouse.com/",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Optimización de Conversión (CRO)",
            date: "Sep 2023",
            duration: "18h",
            skills: ["A/B Testing", "Heatmaps (Hotjar)", "User Journeys", "Landing Optimization"],
            credentialUrl: "https://coderhouse.com/",
            score: "Aprobado",
            highlight: false
          }
        ]
      }
    ]
  }
};
