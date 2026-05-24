import platziLogo from "../assets/logos/platzi.png";
import coderhouseLogo from "../assets/logos/coderhouse.svg";
import linkedinLearningLogo from "../assets/logos/linkedin_learning.png";
import freecodecampLogo from "../assets/logos/freecodecamp.svg";
import minticLogo from "../assets/logos/mintic.svg";

export const CERTIFICATES_DATA = {
  coderhouse: {
    id: "coderhouse",
    title: "Coderhouse",
    logo: coderhouseLogo,
    color: "#35FF69", // Coderhouse Green
    glowColor: "rgba(53, 255, 105, 0.25)",
    borderColor: "rgba(53, 255, 105, 0.2)",
    description: {
      es: "Carreras y bootcamps en vivo enfocados en proyectos prácticos, trabajo en equipo simulado y mentoría personalizada de nivel profesional.",
      en: "Live courses and bootcamps focused on hands-on projects, simulated teamwork, and professional-level personalized mentoring."
    },
    stats: {
      coursesCount: 10,
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
  },
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
  linkedin: {
    id: "linkedin",
    title: "LinkedIn Learning",
    logo: linkedinLearningLogo,
    color: "#0077B5", // LinkedIn Blue
    glowColor: "rgba(0, 119, 181, 0.25)",
    borderColor: "rgba(0, 119, 181, 0.2)",
    description: {
      es: "Cursos enfocados en habilidades de liderazgo, gestión ágil de proyectos, comunicación efectiva y soft skills profesionales.",
      en: "Courses focused on leadership skills, agile project management, effective communication, and professional soft skills."
    },
    stats: {
      coursesCount: 10,
      completedPercentage: "100%",
      hoursCount: "64h"
    },
    paths: [
      {
        id: "liderazgo",
        title: {
          es: "Liderazgo & Gestión",
          en: "Leadership & Management"
        },
        courses: [
          {
            title: "Liderazgo de Equipos de Alto Rendimiento",
            date: "Jun 2024",
            duration: "8h",
            skills: ["Leadership", "Team Motivation", "Conflict Resolution", "KPIs"],
            credentialUrl: "https://linkedin.com/learning",
            score: "Aprobado",
            highlight: true
          },
          {
            title: "Metodologías Ágiles en el Desarrollo de Software",
            date: "Jul 2024",
            duration: "10h",
            skills: ["Agile Development", "Scrum Framework", "Sprint Planning", "Product Backlog"],
            credentialUrl: "https://linkedin.com/learning",
            score: "Aprobado",
            highlight: true
          },
          {
            title: "Negociación y Resolución de Conflictos",
            date: "Aug 2024",
            duration: "6h",
            skills: ["Negotiation", "Problem Solving", "Conflict Mitigation", "Active Listening"],
            credentialUrl: "https://linkedin.com/learning",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Gestión de Proyectos Tecnológicos",
            date: "Sep 2024",
            duration: "12h",
            skills: ["Project Management", "Risk Assessment", "Resource Allocation", "Roadmapping"],
            credentialUrl: "https://linkedin.com/learning",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Comunicación Asertiva en Equipos Remotos",
            date: "May 2024",
            duration: "5h",
            skills: ["Remote Communication", "Empathy", "Asynchronous Tools", "Feedback Loops"],
            credentialUrl: "https://linkedin.com/learning",
            score: "Aprobado",
            highlight: false
          }
        ]
      },
      {
        id: "habilidades",
        title: {
          es: "Habilidades Profesionales",
          en: "Professional Skills"
        },
        courses: [
          {
            title: "Fundamentos de la Gestión del Tiempo",
            date: "Jan 2024",
            duration: "4h",
            skills: ["Time Management", "Productivity", "Prioritization", "Deep Work"],
            credentialUrl: "https://linkedin.com/learning",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Pensamiento Crítico y Toma de Decisiones",
            date: "Feb 2024",
            duration: "6h",
            skills: ["Critical Thinking", "Decision Making", "Analytical Skills", "Cognitive Bias"],
            credentialUrl: "https://linkedin.com/learning",
            score: "Aprobado",
            highlight: true
          },
          {
            title: "Scrum Avanzado: Roles y Ceremonias",
            date: "Apr 2024",
            duration: "8h",
            skills: ["Scrum Master", "Agile Retrospectives", "Metrics & Velocity", "Scale Scrum"],
            credentialUrl: "https://linkedin.com/learning",
            score: "Aprobado",
            highlight: true
          },
          {
            title: "Inteligencia Emocional en el Trabajo",
            date: "Mar 2024",
            duration: "5h",
            skills: ["Emotional Intelligence", "Self-Awareness", "Social Skills", "Stress Management"],
            credentialUrl: "https://linkedin.com/learning",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Innovación y Resolución Creativa de Problemas",
            date: "May 2024",
            duration: "7h",
            skills: ["Creativity", "Design Thinking", "Brainstorming", "Ideation Models"],
            credentialUrl: "https://linkedin.com/learning",
            score: "Aprobado",
            highlight: false
          }
        ]
      }
    ]
  },
  freecodecamp: {
    id: "freecodecamp",
    title: "freeCodeCamp",
    logo: freecodecampLogo,
    color: "#FEAC32", // freeCodeCamp Glowing Gold
    glowColor: "rgba(254, 172, 50, 0.25)",
    borderColor: "rgba(254, 172, 50, 0.2)",
    description: {
      es: "Currículum estructurado e intensivo basado en proyectos y desafíos prácticos de programación con certificación oficial.",
      en: "Structured, project-based intensive curriculum featuring coding challenges and official developer certifications."
    },
    stats: {
      coursesCount: 10,
      completedPercentage: "100%",
      hoursCount: "3000h"
    },
    paths: [
      {
        id: "webdev",
        title: {
          es: "Desarrollo Web & Algoritmos",
          en: "Web Development & Algorithms"
        },
        courses: [
          {
            title: "Responsive Web Design Certification",
            date: "Jul 2022",
            duration: "300h",
            skills: ["HTML5", "CSS3 Flexbox/Grid", "Responsive Layouts", "Web Accessibility (a11y)"],
            credentialUrl: "https://www.freecodecamp.org/certification/fcc-username",
            score: "Certificado",
            highlight: true
          },
          {
            title: "JavaScript Algorithms and Data Structures",
            date: "Nov 2022",
            duration: "300h",
            skills: ["JavaScript ES6", "Algorithms", "Data Structures", "OOP", "Functional Programming"],
            credentialUrl: "https://www.freecodecamp.org/certification/fcc-username",
            score: "Certificado",
            highlight: true
          },
          {
            title: "Front End Development Libraries",
            date: "Feb 2023",
            duration: "300h",
            skills: ["Bootstrap", "jQuery", "Sass", "React", "Redux"],
            credentialUrl: "https://www.freecodecamp.org/certification/fcc-username",
            score: "Certificado",
            highlight: true
          },
          {
            title: "Back End Development and APIs",
            date: "Jun 2023",
            duration: "300h",
            skills: ["Node.js", "Express.js", "MongoDB & Mongoose", "Security & Middlewares", "API Testing"],
            credentialUrl: "https://www.freecodecamp.org/certification/fcc-username",
            score: "Certificado",
            highlight: true
          },
          {
            title: "Relational Database Certification",
            date: "Sep 2023",
            duration: "300h",
            skills: ["PostgreSQL", "SQL Schema Design", "Bash Scripting", "Git", "Command Line"],
            credentialUrl: "https://www.freecodecamp.org/certification/fcc-username",
            score: "Certificado",
            highlight: false
          }
        ]
      },
      {
        id: "data",
        title: {
          es: "Análisis de Datos & Ciencia de Datos",
          en: "Data Analysis & Data Science"
        },
        courses: [
          {
            title: "Data Analysis with Python Certification",
            date: "Nov 2023",
            duration: "300h",
            skills: ["Python", "Numpy & Pandas", "Data Visualization", "Matplotlib & Seaborn"],
            credentialUrl: "https://www.freecodecamp.org/certification/fcc-username",
            score: "Certificado",
            highlight: true
          },
          {
            title: "Scientific Computing with Python",
            date: "Oct 2023",
            duration: "300h",
            skills: ["Python Variables", "Loops & Logic", "Data Analysis", "Mathematical Computation"],
            credentialUrl: "https://www.freecodecamp.org/certification/fcc-username",
            score: "Certificado",
            highlight: false
          },
          {
            title: "Quality Assurance Certification",
            date: "Jan 2024",
            duration: "300h",
            skills: ["Testing with Chai", "Unit & Integration Tests", "Advanced Express", "HelmetJS (Security)"],
            credentialUrl: "https://www.freecodecamp.org/certification/fcc-username",
            score: "Certificado",
            highlight: false
          },
          {
            title: "Information Security Certification",
            date: "Feb 2024",
            duration: "300h",
            skills: ["OWASP Top 10", "SQL Injection Prevention", "BCrypt Hashing", "CORS policies"],
            credentialUrl: "https://www.freecodecamp.org/certification/fcc-username",
            score: "Certificado",
            highlight: false
          },
          {
            title: "Machine Learning with Python",
            date: "Mar 2024",
            duration: "300h",
            skills: ["TensorFlow", "Neural Networks", "Natural Language Processing (NLP)", "Reinforcement Learning"],
            credentialUrl: "https://www.freecodecamp.org/certification/fcc-username",
            score: "Certificado",
            highlight: true
          }
        ]
      }
    ]
  },
  mintic: {
    id: "mintic",
    title: "MinTIC",
    logo: minticLogo,
    color: "#E2001A", // MinTIC Colombian Flag Red/Accent
    glowColor: "rgba(226, 0, 26, 0.25)",
    borderColor: "rgba(226, 0, 26, 0.2)",
    description: {
      es: "Programas de formación especial en desarrollo de software, ciencia de datos y competencias digitales de la Presidencia de la República de Colombia.",
      en: "Special training programs in software development, data science, and digital skills by the Ministry of ICT of Colombia."
    },
    stats: {
      coursesCount: 9,
      completedPercentage: "100%",
      hoursCount: "880h"
    },
    paths: [
      {
        id: "misiontic",
        title: {
          es: "Misión TIC 2022",
          en: "Mision TIC Bootcamp"
        },
        courses: [
          {
            title: "Ciclo 1: Fundamentos de Programación en Python",
            date: "Oct 2021",
            duration: "200h",
            skills: ["Python", "Programming Logic", "Data Types", "Conditionals & Loops"],
            credentialUrl: "https://www.mintic.gov.co/",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Ciclo 2: Programación Básica y OOP en Java",
            date: "Dec 2021",
            duration: "200h",
            skills: ["Java OOP", "Class Hierarchy", "Interfaces & Inheritance", "GUI Design (Swing)"],
            credentialUrl: "https://www.mintic.gov.co/",
            score: "Aprobado",
            highlight: true
          },
          {
            title: "Ciclo 3: Desarrollo de Aplicaciones Web",
            date: "Feb 2022",
            duration: "200h",
            skills: ["JavaScript", "ReactJS", "Node.js", "Express.js", "SQL Databases (MySQL)"],
            credentialUrl: "https://www.mintic.gov.co/",
            score: "Aprobado",
            highlight: true
          },
          {
            title: "Ciclo 4: Desarrollo de Aplicaciones Móviles y Cloud",
            date: "Apr 2022",
            duration: "200h",
            skills: ["React Native", "Expo", "DevOps Fundamentals", "Docker Containers", "API Deployment"],
            credentialUrl: "https://www.mintic.gov.co/",
            score: "Aprobado",
            highlight: true
          },
          {
            title: "Proyecto Integrador Final: Plataforma E-commerce y Microservicios",
            date: "May 2022",
            duration: "80h",
            skills: ["Microservices", "REST APIs", "CI/CD Pipelines", "React Web & Mobile", "Final Graduation Project"],
            credentialUrl: "https://www.mintic.gov.co/",
            score: "Aprobado",
            highlight: true
          }
        ]
      },
      {
        id: "habilidades_digitales",
        title: {
          es: "Habilidades TIC",
          en: "ICT Skills"
        },
        courses: [
          {
            title: "Ciudadanía Digital y Habilidades de Liderazgo",
            date: "Jun 2022",
            duration: "30h",
            skills: ["Digital Communication", "Siglo XXI Skills", "Information Literacy", "Collaboration"],
            credentialUrl: "https://www.mintic.gov.co/",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Ciberseguridad para Desarrolladores",
            date: "Jul 2022",
            duration: "40h",
            skills: ["Network Security", "Encryption", "Vulnerability Auditing", "Secure Coding"],
            credentialUrl: "https://www.mintic.gov.co/",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Análisis y Visualización de Datos con PowerBI",
            date: "Aug 2022",
            duration: "50h",
            skills: ["PowerBI", "DAX", "Data Modeling", "Business Intelligence Dashboards"],
            credentialUrl: "https://www.mintic.gov.co/",
            score: "Aprobado",
            highlight: true
          },
          {
            title: "Fundamentos de Cloud Computing",
            date: "Sep 2022",
            duration: "40h",
            skills: ["AWS Basics", "Microsoft Azure", "Virtual Machines", "Cloud Storage & Security"],
            credentialUrl: "https://www.mintic.gov.co/",
            score: "Aprobado",
            highlight: false
          }
        ]
      }
    ]
  }
};
