import platziLogo from "../assets/logos/platzi.png";
import coderhouseLogo from "../assets/logos/coderhouse.svg";
import linkedinLearningLogo from "../assets/logos/linkedin_learning.png";
import freecodecampLogo from "../assets/logos/freecodecamp.svg";
import minticLogo from "../assets/logos/mintic.svg";
import udemyLogo from "../assets/logos/udemy.svg";
import otherLogo from "../assets/logos/other.svg";

// Platzi Badge Imports

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
      coursesCount: 8,
      completedPercentage: "100%",
      hoursCount: {
        es: "22 meses",
        en: "22 months"
      }
    },
    careers: [
      {
        id: "carrera-fullstack",
        title: {
          es: "Carrera Desarrollo Full Stack",
          en: "Full Stack Development Career"
        },
        credentialUrl: "/CURSOS/CODERHOUSE/CODER Carrera Full Stack.png",
        status: {
          es: "Graduado",
          en: "Graduated"
        },
        skills: ["HTML5", "CSS3", "JavaScript", "React JS", "Node.js", "Express.js", "MongoDB"]
      },
      {
        id: "carrera-frontend-react",
        title: {
          es: "Carrera Frontend React",
          en: "Frontend React Career"
        },
        credentialUrl: "/CURSOS/CODERHOUSE/CODER Carrera Desarrollo Front react.png",
        status: {
          es: "Graduado",
          en: "Graduated"
        },
        skills: ["HTML5", "CSS3", "JavaScript", "React JS", "Sass", "Web Performance"]
      },
      {
        id: "carrera-angular",
        title: {
          es: "Carrera Angular",
          en: "Angular Career"
        },
        credentialUrl: "/CURSOS/CODERHOUSE/CODER Carrera Angular.png",
        status: {
          es: "Graduado",
          en: "Graduated"
        },
        skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "RxJS"]
      }
    ],
    paths: [
      {
        id: "fullstack",
        title: {
          es: "Carrera Desarrollo Full Stack",
          en: "Full Stack Development Career"
        },
        courses: [
          {
            title: "Desarrollo Web",
            date: "Mar 2022",
            duration: {
              es: "2.5 meses",
              en: "2.5 months"
            },
            skills: ["HTML5", "CSS3", "Sass (SCSS)", "Bootstrap", "Git/GitHub", "Web Performance"],
            credentialUrl: "/CURSOS/CODERHOUSE/CODER Desarrollo Web.png",
            score: "Top 10%",
            highlight: true
          },
          {
            title: "JavaScript",
            date: "May 2022",
            duration: {
              es: "2.25 meses",
              en: "2.25 months"
            },
            skills: ["ES6+", "Promises/Async-Await", "DOM Manipulation", "Fetch APIs", "AJAX", "Local Storage"],
            credentialUrl: "/CURSOS/CODERHOUSE/CODER JavascriptCoder.png",
            highlight: true
          },
          {
            title: "React Js",
            date: "Jun 2022",
            duration: {
              es: "1.75 meses",
              en: "1.75 months"
            },
            skills: ["React JS", "Context API", "React Hooks", "SPA Architecture", "Conditional Rendering", "Components"],
            credentialUrl: "/CURSOS/CODERHOUSE/CODER ReacrCoder.png",
            highlight: true
          },
          {
            title: "Programación Backend",
            date: "Feb 2023",
            duration: {
              es: "6 meses",
              en: "6 months"
            },
            skills: ["Node.js", "Express.js", "MongoDB", "Mongoose ORM", "MVC Architecture", "Websockets (Socket.io)", "JWT Authentication", "APIs REST"],
            credentialUrl: "/CURSOS/CODERHOUSE/CODER D Backend.png",
            highlight: true
          }
        ]
      },
      {
        id: "specializations",
        title: {
          es: "Especialidades & Lenguajes",
          en: "Specializations & Languages"
        },
        courses: [
          {
            title: "Java Inicial",
            date: "Oct 2022",
            duration: {
              es: "2 meses",
              en: "2 months"
            },
            skills: ["Java OOP", "Control Structures", "Data Types", "Arrays & Collections", "Algorithm Logic"],
            credentialUrl: "/CURSOS/CODERHOUSE/CODER java_inicial.png",
            highlight: false
          },
          {
            title: "SQL",
            date: "Sep 2023",
            duration: {
              es: "3.25 meses",
              en: "3.25 months"
            },
            skills: ["SQL", "Relational Databases", "Joins & Subqueries", "Data Modeling", "DML / DDL Queries", "MySQL / PostgreSQL Basics"],
            credentialUrl: "/CURSOS/CODERHOUSE/CODER SQL.png",
            highlight: false
          },
          {
            title: "C#",
            date: "Oct 2023",
            duration: {
              es: "2.25 meses",
              en: "2.25 months"
            },
            skills: [".NET Basics", "C# OOP", "Data Types", "Collections", "Console Applications"],
            credentialUrl: "/CURSOS/CODERHOUSE/CODER C#.png",
            highlight: false
          },
          {
            title: "Angular",
            date: "Feb 2024",
            duration: {
              es: "2.25 meses",
              en: "2.25 months"
            },
            skills: ["Angular 16/17+", "TypeScript", "Components & Modules", "RxJS Observables", "Pipes & Directives", "Routing"],
            credentialUrl: "/CURSOS/CODERHOUSE/CODER Angular.png",
            highlight: false
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
      es: "Programa académico intensivo Misión TIC 2022 enfocado en programación avanzada, desarrollo de software y desarrollo web full-stack.",
      en: "Intensive academic program Misión TIC 2022 focused on advanced programming, software engineering, and full-stack web development."
    },
    stats: {
      coursesCount: 5,
      completedPercentage: "100%",
      hoursCount: {
        es: "10 meses",
        en: "10 months"
      }
    },
    paths: [
      {
        id: "misiontic",
        title: {
          es: "Misión TIC 2022 (Diplomado Full Stack)",
          en: "Misión TIC 2022 (Full Stack Diploma)"
        },
        courses: [
          {
            title: "Ciclo 1: Diplomado en Fundamentos de Programación en Python",
            date: "Jul 2022",
            duration: {
              es: "2.5 meses",
              en: "2.5 months"
            },
            skills: ["Python", "Programming Logic", "Data Types", "Conditionals & Loops", "Functions & Algorithms"],
            credentialUrl: "/CURSOS/mintic/DiplomadoPython.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Ciclo 2: Diplomado en Programación Básica en Java",
            date: "Sep 2022",
            duration: {
              es: "2.5 meses",
              en: "2.5 months"
            },
            skills: ["Java OOP", "Class Hierarchy", "Interfaces & Inheritance", "GUI Design (Swing)", "Unit Testing"],
            credentialUrl: "/CURSOS/mintic/Diplomado Java.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Ciclo 3: Diplomado en Desarrollo de software",
            date: "Nov 2022",
            duration: {
              es: "2.5 meses",
              en: "2.5 months"
            },
            skills: ["Java Web", "JavaScript", "HTML/CSS", "Relational Databases (SQL)", "MVC Architecture", "APIs REST"],
            credentialUrl: "/CURSOS/mintic/DiplomadoDesarrollo Software.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Ciclo 4: Diplomado en Desarrollo de aplicaciones Web",
            date: "Dec 2022",
            duration: {
              es: "2.5 meses",
              en: "2.5 months"
            },
            skills: ["ReactJS", "Node.js", "Express.js", "NoSQL Databases (MongoDB)", "Git/GitHub", "Web Deployment"],
            credentialUrl: "/CURSOS/mintic/DiplomadoDesarrollo Web.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Programa Completo: Habilidades de Programación con énfasis en Desarrollo Web",
            date: "Dec 2022",
            duration: {
              es: "10 meses",
              en: "10 months"
            },
            skills: ["Full Stack Development", "Python", "Java", "ReactJS", "Node.js", "SQL & NoSQL", "Software Architecture", "Team Project"],
            credentialUrl: "/CURSOS/mintic/C - Programa formacion general Desarrollo Web.png",
            score: "Graduado",
            highlight: true
          }
        ]
      }
    ]
  },
      platzi: {
    id: "platzi",
    title: "Platzi",
    logo: platziLogo,
    color: "#00BFB2",
    glowColor: "rgba(0, 191, 178, 0.25)",
    borderColor: "rgba(0, 191, 178, 0.2)",
    description: {
      es: "Ruta de aprendizaje completa en Desarrollo Frontend y Backend con Javascript, incluyendo certificaciones aprobadas y objetivos pendientes.",
      en: "Complete learning path in Frontend and Backend Development with Javascript, including approved certifications and pending goals."
    },
    stats: {
      coursesCount: 110,
      completedPercentage: "35%",
      hoursCount: {
        es: "1314 horas",
        en: "1314 hours"
      }
    },
    routes: [
      {
        id: "frontend-backend-js",
        title: {
          es: "Ruta Frontend y Backend con Javascript para Desarrollo Web",
          en: "Frontend & Backend Javascript Route for Web Development"
        },
        jsonPath: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/platzi_route_mapping.json"
      },
      {
        id: "backend-csharp-net",
        title: {
          es: "Backend con C# y .NET",
          en: "Backend with C# & .NET"
        },
        jsonPath: "/CURSOS/PLATZI/Backend con C-Sharp y .NET/platzi_route_mapping.json"
      }
    ],
    paths: [
      {
        id: "javascript-road",
        title: {
          es: "Ruta Frontend y Backend con JavaScript",
          en: "Frontend & Backend JavaScript Path"
        },
        courses: [
          {
            title: "Curso de Frameworks y Librerías de JavaScript",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 1
          },
          {
            title: "Curso de React.js: Patrones de Render y Composición",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 2
          },
          {
            title: "Curso de React.js: Manejo Profesional del Estado",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 3
          },
          {
            title: "Curso de React.js: Navegación con React Router",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 4
          },
          {
            title: "Curso Profesional de React.js y Redux",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 5
          },
          {
            title: "Curso de State Machines en React.js",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 6
          },
          {
            title: "Curso de Fundamentos de Angular",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Technologies", "Platzi Course"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 7
          },
          {
            title: "Curso de Angular: Componentes y Servicios",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Technologies", "Platzi Course"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 8
          },
          {
            title: "Curso de Consumo de APIs REST con Angular",
            date: "Pendiente",
            duration: "12h",
            skills: ["APIs", "REST APIs", "Fetch API"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 9
          },
          {
            title: "Curso de Angular Router: Lazy Loading y Programación Modular",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Technologies", "Platzi Course"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 10
          },
          {
            title: "Curso de Angular: Unit Testing para Servicios",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Testing", "QA"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 11
          },
          {
            title: "Curso de Angular: Unit Testing para Componentes",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Testing", "QA"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 12
          },
          {
            title: "Curso de Angular: Unit Testing para Formularios",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Testing", "QA"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 13
          },
          {
            title: "Curso de Angular: Unit Testing para Rutas",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Testing", "QA"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 14
          },
          {
            title: "Curso de Rendimiento en Angular",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Technologies", "Platzi Course"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 15
          },
          {
            title: "Curso de Angular Forms: Creación y Optimización de Formularios Web",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Development", "Web Performance"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 16
          },
          {
            title: "Curso de Vue.js: Introducción y Fundamentos",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Vue.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 17
          },
          {
            title: "Curso de Vue.js: Componentes y Composition API",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "APIs", "REST APIs", "Fetch API"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 18
          },
          {
            title: "Curso Práctico de Vue.js",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Vue.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 19
          },
          {
            title: "Curso de Vue.js: Navegación con Vue Router",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Vue.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 20
          },
          {
            title: "Curso de Vue.js: Manejo del Estado con  Vuex",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Vue.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 21
          },
          {
            title: "Curso de Vue.js: Manejo del Estado con Pinia",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Vue.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 22
          },
          {
            title: "Curso de Reactividad con Vue.js 3",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Vue.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 23
          },
          {
            title: "Curso de Unit Testing en Vue.js 3",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Software Testing", "QA", "Vue.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 24
          },
          {
            title: "Curso Profesional de Vue.js 2",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Vue.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 25
          },
          {
            title: "Curso Avanzado de Vue.js 2",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Vue.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 26
          },
          {
            title: "Curso de Svelte",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Technologies", "Platzi Course"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 27
          },
          {
            title: "Curso de Introducción a Jamstack",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Technologies", "Platzi Course"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 28
          },
          {
            title: "Curso de GitHub Actions",
            date: "Pendiente",
            duration: "12h",
            skills: ["Git", "GitHub", "Version Control"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 29
          },
          {
            title: "Curso para Conseguir Trabajo como Frontend Developer",
            date: "Pendiente",
            duration: "12h",
            skills: ["Frontend Dev"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 30
          },
          {
            title: "Curso para Conseguir Trabajo en Tecnología",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Technologies", "Platzi Course"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 31
          },
          {
            title: "Curso Básico de Computadores e Informática",
            date: "Apr 2022",
            duration: "12h",
            skills: ["Computer Basics", "Hardware", "Operating Systems", "Fundamentals"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso B\u00e1sico de Computadores e Inform\u00e1tica.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 32
          },
          {
            title: "Curso de Pensamiento Lógico",
            date: "Pendiente",
            duration: "12h",
            skills: ["Logic", "Programming Fundamentals"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 33
          },
          {
            title: "Curso Gratis de Programación Básica 2022",
            date: "Apr 2022",
            duration: "12h",
            skills: ["Fundamentals"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso Gratis de Programaci\u00f3n B\u00e1sica 2022.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 34
          },
          {
            title: "Curso de Introducción a la Web: Historia y Funcionamiento de Internet",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Development", "HTTP/HTTPS", "DNS", "Web History"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 35
          },
          {
            title: "Curso de Fundamentos de Ingeniería de Software",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Engineering", "System Architecture"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 36
          },
          {
            title: "Curso de Configuración de Entorno en Linux",
            date: "Pendiente",
            duration: "12h",
            skills: ["Linux OS", "Shell Scripting"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 37
          },
          {
            title: "Curso de Configuración de Entorno de Desarrollo en Windows",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Technologies", "Platzi Course"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 38
          },
          {
            title: "Curso de Configuración de Entorno de Desarrollo en macOS",
            date: "May 2022",
            duration: "12h",
            skills: ["macOS", "CLI Tools"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Configuraci\u00f3n de Entorno de Desarrollo en macOS.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 39
          },
          {
            title: "Curso de Flujo de Desarrollo Moderno CodeStream",
            date: "May 2022",
            duration: "12h",
            skills: ["Flowcharts", "System Design", "Collaboration Tools"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Flujo de Desarrollo Moderno CodeStream.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 40
          },
          {
            title: "Curso de Frontend Developer",
            date: "Jun 2022",
            duration: "12h",
            skills: ["Frontend Dev"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Frontend Developer.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 41
          },
          {
            title: "Curso Práctico de Frontend Developer",
            date: "Pendiente",
            duration: "12h",
            skills: ["Frontend Dev"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 42
          },
          {
            title: "Curso Práctico de HTML y CSS",
            date: "Jun 2022",
            duration: "12h",
            skills: ["HTML5", "CSS3"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso Pr\u00e1ctico de HTML y CSS.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 43
          },
          {
            title: "Curso de Responsive Design: Maquetación Mobile First",
            date: "Jul 2022",
            duration: "12h",
            skills: ["Responsive Design", "Mobile First"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Responsive Design Maquetaci\u00f3n Mobile First.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 44
          },
          {
            title: "Curso de Diseño para Developers",
            date: "Aug 2022",
            duration: "12h",
            skills: ["UI/UX Design"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Dise\u00f1o para Developers.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 45
          },
          {
            title: "Curso de Fundamentos de Design Systems",
            date: "Pendiente",
            duration: "12h",
            skills: ["Design Systems"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 46
          },
          {
            title: "Curso de CSS Grid Básico",
            date: "Aug 2022",
            duration: "12h",
            skills: ["Fundamentals", "CSS3", "CSS Grid"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de CSS Grid B\u00e1sico.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 47
          },
          {
            title: "Curso Práctico de Maquetación en CSS",
            date: "Sep 2022",
            duration: "12h",
            skills: ["CSS3"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso Pr\u00e1ctico de Maquetaci\u00f3n en CSS.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 48
          },
          {
            title: "Curso Profesional de CSS Grid Layout",
            date: "Sep 2022",
            duration: "12h",
            skills: ["CSS3", "CSS Grid"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso Profesional de CSS Grid Layout.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 49
          },
          {
            title: "Curso de Diseño Web con CSS Grid y Flexbox",
            date: "Oct 2022",
            duration: "12h",
            skills: ["Web Development", "CSS3", "UI/UX Design", "CSS Grid"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Dise\u00f1o Web con CSS Grid y Flexbox.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 50
          },
          {
            title: "Curso de Transformaciones y Transiciones en CSS",
            date: "Oct 2022",
            duration: "12h",
            skills: ["CSS3"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Transformaciones y Transiciones en CSS.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 51
          },
          {
            title: "Curso de Animaciones con CSS",
            date: "Nov 2022",
            duration: "12h",
            skills: ["CSS3", "CSS Animations"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Animaciones con CSS.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 52
          },
          {
            title: "Taller Práctico de JavaScript: Matemáticas y Estadística Básica",
            date: "Dec 2022",
            duration: "12h",
            skills: ["Fundamentals", "JavaScript", "Math", "Statistics"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Taller Pr\u00e1ctico de JavaScript Matem\u00e1ticas y Estad\u00edstica B\u00e1sica.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 53
          },
          {
            title: "Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego!",
            date: "Dec 2022",
            duration: "12h",
            skills: ["JavaScript"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Taller Pr\u00e1ctico de JavaScript \u00a1Crea tu Primer Videojuego!.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 54
          },
          {
            title: "Curso de Closures y Scope en JavaScript",
            date: "Jan 2023",
            duration: "12h",
            skills: ["JavaScript", "Scope", "Closures", "JS Engine"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Closures y Scope en JavaScript.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 55
          },
          {
            title: "Curso Básico de Programación Orientada a Objetos con JavaScript",
            date: "Jan 2023",
            duration: "12h",
            skills: ["Fundamentals", "JavaScript", "OOP (Object Oriented)"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso B\u00e1sico de Programaci\u00f3n Orientada a Objetos con JavaScript.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 56
          },
          {
            title: "Curso Intermedio de Programación Orientada a Objetos en JavaScript",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "OOP (Object Oriented)"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 57
          },
          {
            title: "Curso de ECMAScript: Historia y Versiones de JavaScript",
            date: "Feb 2023",
            duration: "12h",
            skills: ["JavaScript", "ES6+"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de ECMAScript Historia y Versiones de JavaScript.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 58
          },
          {
            title: "Curso de Manipulación de Arrays en JavaScript",
            date: "Mar 2023",
            duration: "12h",
            skills: ["JavaScript", "Array Methods"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Manipulaci\u00f3n de Arrays en JavaScript.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 59
          },
          {
            title: "Curso de JavaScript Engine (V8) y el Navegador",
            date: "Mar 2023",
            duration: "12h",
            skills: ["JavaScript", "V8 Engine"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de JavaScript Engine (V8) y el Navegador.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 60
          },
          {
            title: "Curso de API REST con Javascript: Fundamentos",
            date: "Apr 2023",
            duration: "12h",
            skills: ["JavaScript", "APIs", "REST APIs", "Fetch API"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de API REST con Javascript Fundamentos.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 61
          },
          {
            title: "Curso de API REST con Javascript: Ejemplos con APIs reales",
            date: "Apr 2023",
            duration: "12h",
            skills: ["JavaScript", "APIs", "REST APIs", "Fetch API"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de API REST con Javascript Ejemplos con APIs reales.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 62
          },
          {
            title: "Curso de API REST con Javascript: Performance y Usabilidad",
            date: "May 2023",
            duration: "12h",
            skills: ["JavaScript", "APIs", "REST APIs", "Fetch API"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de API REST con Javascript Performance y Usabilidad.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 63
          },
          {
            title: "Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript",
            date: "May 2023",
            duration: "12h",
            skills: ["JavaScript", "NPM", "Package Managers"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de NPM Gesti\u00f3n de Paquetes y Dependencias en JavaScript.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 64
          },
          {
            title: "Curso de TypeScript: Tipos Avanzados y Funciones",
            date: "Jun 2023",
            duration: "12h",
            skills: ["Functions", "TypeScript"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de TypeScript Tipos Avanzados y Funciones.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 65
          },
          {
            title: "Curso de TypeScript: Programación Orientada a Objetos y Asincronismo",
            date: "Jul 2023",
            duration: "12h",
            skills: ["OOP (Object Oriented)", "Asynchronous JS", "Promises", "TypeScript"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de TypeScript Programaci\u00f3n Orientada a Objetos y Asincronismo.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 66
          },
          {
            title: "Curso de Introducción a Empaquetadores Web",
            date: "Jul 2023",
            duration: "12h",
            skills: ["Web Development", "Web Bundlers"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Introducci\u00f3n a Empaquetadores Web.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 67
          },
          {
            title: "Curso de Webpack",
            date: "Aug 2023",
            duration: "12h",
            skills: ["Web Development", "Webpack"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Webpack.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 68
          },
          {
            title: "Curso de Vite.js",
            date: "Aug 2023",
            duration: "12h",
            skills: ["JavaScript", "ViteJS"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Vite.js.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 69
          },
          {
            title: "Curso de Single Page Application con JavaScript Vanilla",
            date: "Sep 2023",
            duration: "12h",
            skills: ["JavaScript", "SPA Architecture"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Single Page Application con JavaScript Vanilla.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 70
          },
          {
            title: "Curso Práctico de Maquetación y Animaciones con CSS",
            date: "Sep 2023",
            duration: "12h",
            skills: ["CSS3", "CSS Animations"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso Pr\u00e1ctico de Maquetaci\u00f3n y Animaciones con CSS.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 71
          },
          {
            title: "Curso de Debugging con Chrome DevTools",
            date: "Oct 2023",
            duration: "12h",
            skills: ["Debugging", "Chrome DevTools"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Debugging con Chrome DevTools.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 72
          },
          {
            title: "Curso de Manipulación del DOM",
            date: "Nov 2023",
            duration: "12h",
            skills: ["DOM Manipulation"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Manipulaci\u00f3n del DOM.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 73
          },
          {
            title: "Curso de Optimización Web",
            date: "Nov 2023",
            duration: "12h",
            skills: ["Web Development", "Web Performance"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Optimizaci\u00f3n Web.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 74
          },
          {
            title: "Audiocurso de Accesibilidad Web: Casos de Estudio",
            date: "Dec 2023",
            duration: "6h",
            skills: ["Web Development", "Web Accessibility", "WCAG"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Audiocurso de Accesibilidad Web Casos de Estudio.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 75
          },
          {
            title: "Curso de Accesibilidad Web",
            date: "Dec 2023",
            duration: "12h",
            skills: ["Web Development", "Web Accessibility", "WCAG"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Accesibilidad Web.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 76
          },
          {
            title: "Curso de JavaScript: Web Components",
            date: "Jan 2024",
            duration: "12h",
            skills: ["Web Development", "JavaScript", "Web Components"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de JavaScript Web Components.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 77
          },
          {
            title: "Curso de Estructuras de Datos con JavaScript",
            date: "Feb 2024",
            duration: "12h",
            skills: ["Data Structures", "Data Management", "Arrays", "JavaScript"],
            credentialUrl: "/CURSOS/PLATZI/Frontend y Backend con Javascript para Desarrollo Web/Curso de Estructuras de Datos con JavaScript.pdf",
            badge: platziLogo,
            score: "Aprobado",
            completed: true,
            stepNumber: 78
          },
          {
            title: "Curso de Complejidad Algorítmica con JavaScript",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 79
          },
          {
            title: "Curso de Fundamentos de Pruebas de Software",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Engineering", "System Architecture", "Software Testing", "QA"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 80
          },
          {
            title: "Curso de Introducción al Testing con JavaScript",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Software Testing", "QA"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 81
          },
          {
            title: "Curso de Introducción a la Automatización de Pruebas",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Testing", "QA"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 82
          },
          {
            title: "Curso de Automatización de Pruebas UI con Cypress",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Testing", "QA", "Cypress"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 83
          },
          {
            title: "Curso de Automatización de Pruebas con Puppeteer",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Testing", "QA", "Puppeteer"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 84
          },
          {
            title: "Curso Avanzado de Automatización de Pruebas con Puppeteer",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Testing", "QA", "Puppeteer"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 85
          },
          {
            title: "Curso de SQL y MySQL 2018",
            date: "Pendiente",
            duration: "12h",
            skills: ["SQL", "Relational Databases"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 86
          },
          {
            title: "Curso Práctico de SQL",
            date: "Pendiente",
            duration: "12h",
            skills: ["SQL", "Relational Databases"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 87
          },
          {
            title: "Curso de Backend con Node.js: Base de Datos con PostgreSQL",
            date: "Pendiente",
            duration: "12h",
            skills: ["Data Structures", "Data Management", "JavaScript", "SQL"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 88
          },
          {
            title: "Curso de Backend con Node.js: Autenticación con Passport.js y JWT",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Authentication", "JWT", "Security"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 89
          },
          {
            title: "Curso de Aplicaciones en Tiempo Real con Socket.io",
            date: "Pendiente",
            duration: "12h",
            skills: ["Socket.io"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 90
          },
          {
            title: "Curso de Webpack con Express.js, React.js y TypeScript",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Development", "JavaScript", "TypeScript", "Webpack"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 91
          },
          {
            title: "Curso Práctico de GraphQL con JavaScript",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "GraphQL"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 92
          },
          {
            title: "Curso de Supabase",
            date: "Pendiente",
            duration: "12h",
            skills: ["Supabase"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 93
          },
          {
            title: "Curso Avanzado de Node.js con GraphQL, Apollo Server y Prisma",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "GraphQL"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 94
          },
          {
            title: "Curso de Automatización de Pruebas de Backend con Cypress",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Testing", "QA", "Cypress"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 95
          },
          {
            title: "Curso de Fundamentos de Arquitectura de Software",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Engineering", "System Architecture"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 96
          },
          {
            title: "Curso Profesional de Arquitectura de Software",
            date: "Pendiente",
            duration: "12h",
            skills: ["Software Engineering", "System Architecture"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 97
          },
          {
            title: "Curso de Backend con NestJS",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "NestJS"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 98
          },
          {
            title: "Curso de NestJS: Programación Modular, Documentación con Swagger y Deploy",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "NestJS"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 99
          },
          {
            title: "Curso de NestJS: Persistencia de Datos con MongoDB",
            date: "Pendiente",
            duration: "12h",
            skills: ["Data Structures", "Data Management", "JavaScript", "NestJS"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 100
          },
          {
            title: "Curso de NestJS: Persistencia de Datos con TypeORM",
            date: "Pendiente",
            duration: "12h",
            skills: ["Data Structures", "Data Management", "JavaScript", "NestJS"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 101
          },
          {
            title: "Curso de NestJS: Autenticación con Passport y JWT",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Authentication", "JWT", "Security"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 102
          },
          {
            title: "Curso de Next.js con GraphQL",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "GraphQL", "Next.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 103
          },
          {
            title: "Curso de Next.js: Sitios Estáticos y Jamstack",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Next.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 104
          },
          {
            title: "Curso de Next.js: Optimización y Deploy a Producción",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Web Performance", "Next.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 105
          },
          {
            title: "Curso de Next.js: Internacionalización de Aplicaciones Web con i18n",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Development", "JavaScript", "Next.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 106
          },
          {
            title: "Curso de Next.js: Optimización y Manejo de Grandes Datasets",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Web Performance", "Next.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 107
          },
          {
            title: "Curso de Next.js: Autenticación",
            date: "Pendiente",
            duration: "12h",
            skills: ["JavaScript", "Authentication", "JWT", "Security"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 108
          },
          {
            title: "Curso de Next.js: Seguridad Web con OWASP",
            date: "Pendiente",
            duration: "12h",
            skills: ["Web Development", "JavaScript", "Next.js"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 109
          },
          {
            title: "Curso Gratis de Programación Básica",
            date: "Pendiente",
            duration: "12h",
            skills: ["Fundamentals"],
            credentialUrl: null,
            badge: platziLogo,
            score: "Por iniciar",
            completed: false,
            stepNumber: 110
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
      es: "Especialización en desarrollo de software frontend (React, Angular, TypeScript) y metodologías ágiles/productivas de LinkedIn Learning.",
      en: "Specialization in frontend software development (React, Angular, TypeScript) and agile/productivity methodologies from LinkedIn Learning."
    },
    stats: {
      coursesCount: 15,
      completedPercentage: "100%",
      hoursCount: {
        es: "46.5 horas",
        en: "46.5 hours"
      }
    },
    paths: [
      {
        id: "frontend-linkedin",
        title: {
          es: "Desarrollo Frontend",
          en: "Frontend Development"
        },
        courses: [
          {
            title: "Conviértete en desarrollador web front-end",
            date: "Feb 2023",
            duration: "40h 41m",
            skills: ["Frontend Development", "HTML5", "CSS3", "JavaScript", "Responsive Design", "Web Performance"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/00 Prograoamc ompletado Daesarrollador web front-end Linkedin.png",
            score: "Graduado",
            highlight: true
          },
          {
            title: "HTML esencial",
            date: "Feb 2023",
            duration: "4h 29m",
            skills: ["HTML5", "Web Semantics", "SEO Basics"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 01 - Linkedin - Html Avanzado.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "HTML avanzado",
            date: "Feb 2023",
            duration: "3h 44m",
            skills: ["HTML5", "Forms", "Media Integration"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 02 Linkedin - Html Avanzado.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Aprende semántica web",
            date: "Feb 2023",
            duration: "56m",
            skills: ["HTML5 Semantics", "Web Accessibility", "SEO"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 03 Linkedin - Semantica HTML.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "CSS esencial",
            date: "Feb 2023",
            duration: "2h 39m",
            skills: ["CSS3", "Selectors", "Layouts", "Flexbox"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 04 Linkedin - CSS Essencial.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "CSS avanzado",
            date: "Feb 2023",
            duration: "2h 3m",
            skills: ["CSS Grid", "CSS Transitions", "Advanced Layouts"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 05 Linkedin - CSS Avanzado.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "JavaScript esencial",
            date: "Feb 2023",
            duration: "5h 27m",
            skills: ["JavaScript ES6+", "DOM Manipulation", "Async Programming"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 06 Linkedin - JavaScript esencial.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "CSS con SASS esencial",
            date: "Feb 2023",
            duration: "2h 11m",
            skills: ["Sass", "CSS Preprocessors", "Nesting", "Variables"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 07 Linkedin - SASS esencial.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Angular esencial",
            date: "Feb 2023",
            duration: "4h 14m",
            skills: ["Angular", "TypeScript", "SPA", "Components"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 08 Linkedin - ANGULAR esencial.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "React esencial",
            date: "Feb 2023",
            duration: "2h 48m",
            skills: ["React JS", "Hooks", "Components", "JSX"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 09 Linkedin - REACT esencial.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "TypeScript esencial",
            date: "Feb 2023",
            duration: "2h 21m",
            skills: ["TypeScript", "Static Typing", "Interfaces", "Classes"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 10 Linkedin - TYPESCRIPT esencial.png",
            score: "Aprobado",
            highlight: false
          }
        ]
      },
      {
        id: "metodologias-linkedin",
        title: {
          es: "Productividad & Ágil",
          en: "Productivity & Agile"
        },
        courses: [
          {
            title: "Aprende SCRUM",
            date: "Feb 2023",
            duration: "1h 32m",
            skills: ["Scrum Framework", "Agile Methodologies", "Sprint Planning"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 11 Linkedin - Aprende Scrum.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "SCRUM: Roles",
            date: "Feb 2023",
            duration: "1h 30m",
            skills: ["Scrum Master", "Product Owner", "Development Team"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 12 Linkedin - Scrum Roles.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Getting Things Done. Organízate con eficacia",
            date: "Feb 2023",
            duration: "1h 32m",
            skills: ["Time Management", "Productivity Systems", "GTD Methodology"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 13 Linkedin - Getting Things Done Organízate con eficacia.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Fundamentos del teletrabajo",
            date: "Feb 2023",
            duration: "1h 21m",
            skills: ["Remote Collaboration", "Communication Tools", "Productivity"],
            credentialUrl: "/CURSOS/LINKEDIN-LEARNING/ZZ 14 Linkedin - Fundamentos del teletrabajo.png",
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
      coursesCount: 2,
      completedPercentage: "100%",
      hoursCount: {
        es: "600 horas",
        en: "600 hours"
      }
    },
    paths: [
      {
        id: "fcc-certificados",
        title: {
          es: "Certificaciones Oficiales",
          en: "Official Certifications"
        },
        courses: [
          {
            title: "Responsive Web Design",
            date: "Jan 2022",
            duration: "300h",
            skills: ["HTML5", "CSS3 Flexbox/Grid", "Responsive Layouts", "Web Accessibility (a11y)"],
            credentialUrl: "/CURSOS/FREE CODECAMP/FreeCodeCamp - Certificado Responsive Web Design.png",
            score: "Certificado",
            highlight: true
          },
          {
            title: "JavaScript Algorithms and Data Structures",
            date: "Mar 2022",
            duration: "300h",
            skills: ["JavaScript ES6", "Algorithms", "Data Structures", "OOP", "Functional Programming"],
            credentialUrl: "/CURSOS/FREE CODECAMP/FreeCodeCamp - JavaScript Algorithms and Data Structures.png",
            score: "Certificado",
            highlight: true
          }
        ]
      }
    ]
  },
  udemy: {
    id: "udemy",
    title: "Udemy",
    logo: udemyLogo,
    color: "#A435F0", // Udemy Purple
    glowColor: "rgba(164, 53, 240, 0.25)",
    borderColor: "rgba(164, 53, 240, 0.2)",
    description: {
      es: "Cursos prácticos enfocados en especializaciones de desarrollo de software, lenguajes de programación, librerías y herramientas específicas.",
      en: "Practical courses focused on software development specializations, programming languages, libraries, and specific tools."
    },
    stats: {
      coursesCount: 18,
      completedPercentage: "100%",
      hoursCount: {
        es: "346.5 horas",
        en: "346.5 hours"
      }
    },
    paths: [
      {
        id: "frontend-web-udemy",
        title: {
          es: "Desarrollo Frontend & Web",
          en: "Frontend & Web Development"
        },
        courses: [
          {
            title: "Universidad Angular - De Cero a Experto en Angular!",
            date: "Mar 2024",
            duration: "43h",
            skills: ["Angular", "TypeScript", "RxJS", "Components", "Directives"],
            credentialUrl: "/CURSOS/UDEMY/Universidad_angular de cero a experto.jpg",
            score: "100%",
            highlight: true
          },
          {
            title: "React - La Guía Completa: Hooks Context Redux MERN +15 Apps",
            date: "Aug 2022",
            duration: "67.5h",
            skills: ["React JS", "Hooks", "Context API", "Redux", "MERN Stack"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - React - La Guía Completa _ Hooks Context Redux MERN.png",
            score: "100%",
            highlight: true
          },
          {
            title: "React Desde Cero",
            date: "Apr 2022",
            duration: "38.5h",
            skills: ["React JS", "Hooks", "Components", "JSX"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - React desde Cero.png",
            score: "100%",
            highlight: false
          },
          {
            title: "JavaScript Moderno Guía Definitiva Construye +15 Proyectos",
            date: "Mar 2022",
            duration: "46.5h",
            skills: ["JavaScript ES6+", "DOM", "Events", "OOP", "Async Programming"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - JavaScript Moderno.png",
            score: "100%",
            highlight: true
          },
          {
            title: "JavaScript for Beginners - The Complete introduction to JS",
            date: "Mar 2022",
            duration: "4h",
            skills: ["JavaScript Basics", "Variables", "Functions", "Logic"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - JavaScript Begginers.png",
            score: "100%",
            highlight: false
          },
          {
            title: "Bootstrap 5 y SASS - La Guía Práctica - Crea 10 Sitios Web",
            date: "Feb 2022",
            duration: "12.5h",
            skills: ["Sass", "Bootstrap 5", "Web Layouts", "Responsive Design"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - Certificado SASS y Boostrap 5 Intensivo.png",
            score: "100%",
            highlight: false
          },
          {
            title: "Bootstrap 4 Ultimate Course",
            date: "Jun 2022",
            duration: "5.5h",
            skills: ["Bootstrap 4", "CSS Frameworks", "Responsive Design"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - Boostrap4 Ultimate Course.png",
            score: "100%",
            highlight: false
          },
          {
            title: "CSS3 and Bootstrap for Absolute Beginners : 4 courses in 1",
            date: "Feb 2022",
            duration: "3h",
            skills: ["CSS3", "Bootstrap", "Web Design Basics"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - Certificado CSS3 - Bootstrap 01.png",
            score: "100%",
            highlight: false
          },
          {
            title: "Aprende CSS Completo 2021",
            date: "Feb 2022",
            duration: "7.5h",
            skills: ["CSS3", "Box Model", "Flexbox", "Selectors"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - Certificado CSS Completo.png",
            score: "100%",
            highlight: false
          },
          {
            title: "HTML with CSS and JavaScript",
            date: "Mar 2022",
            duration: "2.5h",
            skills: ["HTML5", "CSS3", "JavaScript Intro"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - .png",
            score: "100%",
            highlight: false
          },
          {
            title: "Practical HTML5 Mastery Course",
            date: "Feb 2022",
            duration: "2.5h",
            skills: ["HTML5", "Web Layouts", "Tags & Elements"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - Certificado MasteryHTML5 Course.png",
            score: "100%",
            highlight: false
          },
          {
            title: "Learn HTML - For Beginners",
            date: "Mar 2022",
            duration: "2.5h",
            skills: ["HTML Basics", "Web Documents"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - HTML for Begginers.png",
            score: "100%",
            highlight: false
          }
        ]
      },
      {
        id: "backend-data-udemy",
        title: {
          es: "Backend & Bases de Datos",
          en: "Backend & Databases"
        },
        courses: [
          {
            title: "Crea Aplicaciones Java Web. Completísimo y Desde Cero!",
            date: "Aug 2022",
            duration: "51h",
            skills: ["Java Web", "Servlets & JSP", "MVC", "JDBC", "Java EE"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - Crea Aplicaciones Java Web Completísimo y Desde Cero.png",
            score: "100%",
            highlight: true
          },
          {
            title: "Curso Maestro de Python 3: Aprende Desde Cero",
            date: "Jun 2022",
            duration: "27h",
            skills: ["Python 3", "OOP", "File Handling", "Database Integration"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - CursoMaestroDePython.png",
            score: "100%",
            highlight: false
          },
          {
            title: "Programacion con Python",
            date: "Jun 2022",
            duration: "23.5h",
            skills: ["Python Programming", "Algorithms", "Control Flow"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - Programacion con Phyton.png",
            score: "100%",
            highlight: false
          },
          {
            title: "Data Manipulation in Python: Master Python, Numpy & Pandas",
            date: "Jun 2022",
            duration: "4h",
            skills: ["Numpy", "Pandas", "Data Cleaning", "Data Manipulation"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - Data Manupulation in Python.png",
            score: "100%",
            highlight: false
          },
          {
            title: "Python - Básico",
            date: "Jun 2022",
            duration: "3.5h",
            skills: ["Python Basics", "Syntax"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - PythonBasico.png",
            score: "100%",
            highlight: false
          },
          {
            title: "SQL: Creación de Bases de Datos (De cero a profesional)",
            date: "Jul 2022",
            duration: "2h",
            skills: ["SQL", "Relational Databases", "Table Design", "Queries"],
            credentialUrl: "/CURSOS/UDEMY/Udemy - sql_creacion_de_bases_de_datos.jpg",
            score: "100%",
            highlight: false
          }
        ]
      }
    ]
  },
  other: {
    id: "other",
    title: "Otros",
    logo: otherLogo,
    color: "#9CA3AF", // Slate Gray
    glowColor: "rgba(156, 163, 175, 0.25)",
    borderColor: "rgba(156, 163, 175, 0.2)",
    description: {
      es: "Certificaciones complementarias obtenidas de diferentes plataformas como Open Bootcamp y DevCode en Git, GitHub y lógica.",
      en: "Complementary certifications obtained from different platforms like Open Bootcamp and DevCode in Git, GitHub, and logic."
    },
    stats: {
      coursesCount: 2,
      completedPercentage: "100%",
      hoursCount: {
        es: "20 horas",
        en: "20 hours"
      }
    },
    paths: [
      {
        id: "otros-cursos",
        title: {
          es: "Cursos Complementarios",
          en: "Complementary Courses"
        },
        courses: [
          {
            title: "Introducción a la programación",
            date: "Aug 2022",
            duration: "15h",
            skills: ["Logic", "Pseudocode", "Basic Programming Concepts"],
            credentialUrl: "/CURSOS/OTHER/Open Bootcamp - Introduccion a la Programacion.png",
            score: "Aprobado",
            highlight: false
          },
          {
            title: "Curso de Fundamentos de Git y GitHub",
            date: "Feb 2022",
            duration: "5h",
            skills: ["Git", "GitHub", "Version Control", "Collaboration"],
            credentialUrl: "/CURSOS/OTHER/certificado Git y GitHub Fundamentos.png",
            score: "Aprobado",
            highlight: false
          }
        ]
      }
    ]
  }
};