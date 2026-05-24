import platziLogo from "../assets/logos/platzi.png";
import coderhouseLogo from "../assets/logos/coderhouse.svg";
import linkedinLearningLogo from "../assets/logos/linkedin_learning.png";
import freecodecampLogo from "../assets/logos/freecodecamp.svg";
import minticLogo from "../assets/logos/mintic.svg";
import udemyLogo from "../assets/logos/udemy.svg";

// Platzi Badge Imports
import badge_01 from "../assets/logos/platzi/badge_01.png";
import badge_04 from "../assets/logos/platzi/badge_04.png";
import badge_05 from "../assets/logos/platzi/badge_05.png";
import badge_06 from "../assets/logos/platzi/badge_06.png";
import badge_07 from "../assets/logos/platzi/badge_07.png";
import badge_08 from "../assets/logos/platzi/badge_08.png";
import badge_09 from "../assets/logos/platzi/badge_09.png";
import badge_10 from "../assets/logos/platzi/badge_10.png";
import badge_11 from "../assets/logos/platzi/badge_11.png";
import badge_12 from "../assets/logos/platzi/badge_12.png";
import badge_13 from "../assets/logos/platzi/badge_13.png";
import badge_14 from "../assets/logos/platzi/badge_14.png";
import badge_15 from "../assets/logos/platzi/badge_15.png";
import badge_16 from "../assets/logos/platzi/badge_16.png";
import badge_17 from "../assets/logos/platzi/badge_17.png";
import badge_18 from "../assets/logos/platzi/badge_18.png";
import badge_19 from "../assets/logos/platzi/badge_19.png";
import badge_20 from "../assets/logos/platzi/badge_20.png";
import badge_21 from "../assets/logos/platzi/badge_21.png";
import badge_22 from "../assets/logos/platzi/badge_22.png";
import badge_23 from "../assets/logos/platzi/badge_23.png";
import badge_24 from "../assets/logos/platzi/badge_24.png";
import badge_25 from "../assets/logos/platzi/badge_25.png";
import badge_26 from "../assets/logos/platzi/badge_26.png";
import badge_27 from "../assets/logos/platzi/badge_27.png";
import badge_28 from "../assets/logos/platzi/badge_28.png";
import badge_29 from "../assets/logos/platzi/badge_29.png";
import badge_30 from "../assets/logos/platzi/badge_30.png";
import badge_31 from "../assets/logos/platzi/badge_31.png";
import badge_32 from "../assets/logos/platzi/badge_32.png";
import badge_33 from "../assets/logos/platzi/badge_33.png";
import badge_35 from "../assets/logos/platzi/badge_35.png";
import badge_36 from "../assets/logos/platzi/badge_36.png";
import badge_37 from "../assets/logos/platzi/badge_37.png";
import badge_38 from "../assets/logos/platzi/badge_38.png";
import badge_39 from "../assets/logos/platzi/badge_39.png";
import badge_40 from "../assets/logos/platzi/badge_40.png";
import badge_41 from "../assets/logos/platzi/badge_41.png";
import badge_42 from "../assets/logos/platzi/badge_42.png";
import badge_44 from "../assets/logos/platzi/badge_44.png";
import badge_45 from "../assets/logos/platzi/badge_45.png";
import badge_46 from "../assets/logos/platzi/badge_46.png";
import badge_47 from "../assets/logos/platzi/badge_47.png";
import badge_48 from "../assets/logos/platzi/badge_48.png";
import badge_49 from "../assets/logos/platzi/badge_49.png";
import badge_50 from "../assets/logos/platzi/badge_50.png";
import badge_51 from "../assets/logos/platzi/badge_51.png";
import badge_52 from "../assets/logos/platzi/badge_52.png";
import badge_53 from "../assets/logos/platzi/badge_53.png";
import badge_54 from "../assets/logos/platzi/badge_54.png";
import badge_55 from "../assets/logos/platzi/badge_55.png";
import badge_56 from "../assets/logos/platzi/badge_56.png";
import badge_57 from "../assets/logos/platzi/badge_57.png";

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
      es: "Carrera de Desarrollo JavaScript y especializaciones en tecnologías frontend y backend en Platzi.",
      en: "JavaScript Development Career and specializations in frontend and backend technologies at Platzi."
    },
    stats: {
      coursesCount: 58,
      completedPercentage: "100%",
      hoursCount: {
        es: "650 horas",
        en: "650 hours"
      }
    },
    paths: [
      {
        id: "javascript-road",
        title: {
          es: "Ruta de Desarrollo con JavaScript",
          en: "JavaScript Development Road"
        },
        courses: [
          {
            title: "Curso Básico de Computadores e Informática",
            date: "Apr 2022",
            duration: "12h",
            skills: ["Computer Basics", "Hardware", "Operating Systems", "Fundamentals"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_01_computacion basica.png",
            badge: badge_01,
            score: "Aprobado",
            stepNumber: 1
          },
          {
            title: "Curso de Algoritmos y Diagramas de Flujo",
            date: "Apr 2022",
            duration: "12h",
            skills: ["Algorithms", "Logic", "Problem Solving", "Flowcharts", "System Design"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_02_Algoritmos y Diagramas de flujo.png",
            badge: platziLogo,
            score: "Aprobado",
            stepNumber: 2
          },
          {
            title: "Curso de Manejo de Datos, Estructuras y Funciones en JavaScript",
            date: "Apr 2022",
            duration: "12h",
            skills: ["Data Structures", "Data Management", "Arrays", "Functions", "JavaScript"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_03_Manejo de Datos, Estructuras y Funciones.png",
            badge: platziLogo,
            score: "Aprobado",
            stepNumber: 3
          },
          {
            title: "Curso de Pensamiento Lógico: Lenguajes de Programación",
            date: "May 2022",
            duration: "12h",
            skills: ["Logic", "Programming Fundamentals"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_04_Pensamiento_Logico Lenguajes _de_Programación.png",
            badge: badge_04,
            score: "Aprobado",
            stepNumber: 4
          },
          {
            title: "Curso Gratis de Programación Básica",
            date: "May 2022",
            duration: "12h",
            skills: ["Fundamentals"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_05_Programacion_Basica.png",
            badge: badge_05,
            score: "Aprobado",
            stepNumber: 5
          },
          {
            title: "Curso de Introducción a la Web: Historia y Funcionamiento de Internet",
            date: "Jun 2022",
            duration: "12h",
            skills: ["Web Development", "HTTP/HTTPS", "DNS", "Web History"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_06_Historia_y_Funcionamiento_de_Internet.png",
            badge: badge_06,
            score: "Aprobado",
            stepNumber: 6
          },
          {
            title: "Curso de Fundamentos de Ingeniería de Software",
            date: "Jun 2022",
            duration: "12h",
            skills: ["Software Engineering", "System Architecture"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_07_Fundamentos_de_Ingenieria_de_Software.png",
            badge: badge_07,
            score: "Aprobado",
            stepNumber: 7
          },
          {
            title: "Curso de Prework: Configuración de Entorno de Desarrollo en Windows",
            date: "Jun 2022",
            duration: "12h",
            skills: ["Environment Setup", "Terminal"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_08_Curso_de_Prework.png",
            badge: badge_08,
            score: "Aprobado",
            stepNumber: 8
          },
          {
            title: "Curso de Configuración de Entorno en Linux",
            date: "Jul 2022",
            duration: "12h",
            skills: ["Linux OS", "Shell Scripting"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_09_Curso de Prework en Linux.png",
            badge: badge_09,
            score: "Aprobado",
            stepNumber: 9
          },
          {
            title: "Curso de Configuración de Entorno de Desarrollo en macOS",
            date: "Jul 2022",
            duration: "12h",
            skills: ["macOS", "CLI Tools"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_10_Curso de Prework en macOS.png",
            badge: badge_10,
            score: "Aprobado",
            stepNumber: 10
          },
          {
            title: "Curso de Introducción a la Web: Historia y Funcionamiento de Internet",
            date: "Aug 2022",
            duration: "12h",
            skills: ["Web Development", "HTTP/HTTPS", "DNS", "Web History"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_11_Introduccion a la terminal y linea de comandos.png",
            badge: badge_11,
            score: "Aprobado",
            stepNumber: 11
          },
          {
            title: "Curso Profesional de Git y GitHub",
            date: "Aug 2022",
            duration: "12h",
            skills: ["Git", "GitHub", "Version Control"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_12_Curso Profesional de Git y GitHub.png",
            badge: badge_12,
            score: "Aprobado",
            stepNumber: 12
          },
          {
            title: "Curso de Flujo de Desarrollo Moderno CodeStream",
            date: "Aug 2022",
            duration: "12h",
            skills: ["Flowcharts", "System Design", "Collaboration Tools"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_13_Flujo_de_Desarrollo_Moderno_CodeStream.png",
            badge: badge_13,
            score: "Aprobado",
            stepNumber: 13
          },
          {
            title: "Curso de Frontend Developer",
            date: "Sep 2022",
            duration: "12h",
            skills: ["Frontend Dev"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_14_Front_end_dev.png",
            badge: badge_14,
            score: "Aprobado",
            stepNumber: 14
          },
          {
            title: "Curso Práctico de Frontend Developer",
            date: "Sep 2022",
            duration: "12h",
            skills: ["Frontend Dev"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_15_Practico-Front_end_dev.png",
            badge: badge_15,
            score: "Aprobado",
            stepNumber: 15
          },
          {
            title: "Curso Práctico de HTML y CSS",
            date: "Oct 2022",
            duration: "12h",
            skills: ["HTML5", "CSS3"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_16_Curso Definitivo de HTML y CSS.png",
            badge: badge_16,
            score: "Aprobado",
            stepNumber: 16
          },
          {
            title: "Curso Práctico de HTML y CSS",
            date: "Oct 2022",
            duration: "12h",
            skills: ["HTML5", "CSS3"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_17_Curso Práctico de HTML y CSS.png",
            badge: badge_17,
            score: "Aprobado",
            stepNumber: 17
          },
          {
            title: "Curso de Responsive Design: Maquetación Mobile First",
            date: "Oct 2022",
            duration: "12h",
            skills: ["Responsive Design", "Mobile First"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_18_Responsive Design Maquetación Mobile First.png",
            badge: badge_18,
            score: "Aprobado",
            stepNumber: 18
          },
          {
            title: "Curso de Diseño para Developers",
            date: "Nov 2022",
            duration: "12h",
            skills: ["UI/UX Design"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_19_Diseño-programadores.png",
            badge: badge_19,
            score: "Aprobado",
            stepNumber: 19
          },
          {
            title: "Curso de Diseño para Developers",
            date: "Nov 2022",
            duration: "12h",
            skills: ["UI/UX Design"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_20_Sistemas de diseño.png",
            badge: badge_20,
            score: "Aprobado",
            stepNumber: 20
          },
          {
            title: "Curso de CSS Grid Básico",
            date: "Dec 2022",
            duration: "12h",
            skills: ["Fundamentals", "CSS3", "CSS Grid"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_21_CSS Grid Básico.png",
            badge: badge_21,
            score: "Aprobado",
            stepNumber: 21
          },
          {
            title: "Curso Práctico de Maquetación en CSS",
            date: "Dec 2022",
            duration: "12h",
            skills: ["CSS3"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_22_Curso Practico Maquetacion en CSS.png",
            badge: badge_22,
            score: "Aprobado",
            stepNumber: 22
          },
          {
            title: "Curso Profesional de CSS Grid Layout",
            date: "Dec 2022",
            duration: "12h",
            skills: ["CSS3", "CSS Grid"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_23_Curso Profesional de CSS Grid Layout.png",
            badge: badge_23,
            score: "Aprobado",
            stepNumber: 23
          },
          {
            title: "Curso de Diseño Web con CSS Grid y Flexbox",
            date: "Jan 2023",
            duration: "12h",
            skills: ["Web Development", "CSS3", "UI/UX Design", "CSS Grid", "CSS Flexbox"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_24_Diseño Web con CSS Grid y Flexbox.png",
            badge: badge_24,
            score: "Aprobado",
            stepNumber: 24
          },
          {
            title: "Curso de Transformaciones y Transiciones en CSS",
            date: "Jan 2023",
            duration: "12h",
            skills: ["CSS3"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_25_Transformaciones y Transiciones en CSS.png",
            badge: badge_25,
            score: "Aprobado",
            stepNumber: 25
          },
          {
            title: "Curso de Animaciones con CSS",
            date: "Feb 2023",
            duration: "12h",
            skills: ["CSS3", "CSS Animations"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_26_Curso de Animaciones con CSS.png",
            badge: badge_26,
            score: "Aprobado",
            stepNumber: 26
          },
          {
            title: "Curso Básico de JavaScript",
            date: "Feb 2023",
            duration: "12h",
            skills: ["Fundamentals", "JavaScript"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_27_Curso basico de javascript.png",
            badge: badge_27,
            score: "Aprobado",
            stepNumber: 27
          },
          {
            title: "Curso Práctico de JavaScript",
            date: "Feb 2023",
            duration: "12h",
            skills: ["JavaScript"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_28_Curso practico de javascript.png",
            badge: badge_28,
            score: "Aprobado",
            stepNumber: 28
          },
          {
            title: "Taller Práctico de JavaScript: Matemáticas y Estadística Básica",
            date: "Mar 2023",
            duration: "12h",
            skills: ["Fundamentals", "JavaScript", "Math", "Statistics"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_29_Javascript Matematicas y estadistica.png",
            badge: badge_29,
            score: "Aprobado",
            stepNumber: 29
          },
          {
            title: "Curso de Closures y Scope en JavaScript",
            date: "Mar 2023",
            duration: "12h",
            skills: ["JavaScript", "Scope", "Closures", "JS Engine"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_30_Curso de Closures y Scope en JavaScript.png",
            badge: badge_30,
            score: "Aprobado",
            stepNumber: 30
          },
          {
            title: "Curso de Closures y Scope en JavaScript",
            date: "Apr 2023",
            duration: "12h",
            skills: ["JavaScript", "Scope", "Closures", "JS Engine"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_31_Curso de Closures y Scope en JavaScript.png",
            badge: badge_31,
            score: "Aprobado",
            stepNumber: 31
          },
          {
            title: "Curso de Programación Orientada a Objetos: POO",
            date: "Apr 2023",
            duration: "12h",
            skills: ["OOP (Object Oriented)"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_32_Programación Orientada a Objetos - POO.png",
            badge: badge_32,
            score: "Aprobado",
            stepNumber: 32
          },
          {
            title: "Curso de Programación Orientada a Objetos con JavaScript",
            date: "Apr 2023",
            duration: "12h",
            skills: ["JavaScript", "OOP (Object Oriented)"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_33_Programación Orientada a Objetos con JavaScript.png",
            badge: badge_33,
            score: "Aprobado",
            stepNumber: 33
          },
          {
            title: "Curso de ECMAScript: Historia y Versiones de JavaScript",
            date: "May 2023",
            duration: "12h",
            skills: ["JavaScript", "ES6+"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_35_Historia y Versiones de JavaScript.png",
            badge: badge_35,
            score: "Aprobado",
            stepNumber: 34
          },
          {
            title: "Curso de Manipulación de Arrays en JavaScript",
            date: "May 2023",
            duration: "12h",
            skills: ["JavaScript", "Array Methods"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_36_Curso de Manipulación de Arrays en JavaScript.png",
            badge: badge_36,
            score: "Aprobado",
            stepNumber: 35
          },
          {
            title: "Curso de JavaScript Engine (V8) y el Navegador",
            date: "Jun 2023",
            duration: "12h",
            skills: ["JavaScript", "V8 Engine"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_37_Curso de JavaScript Engine (V8) y el Navegador.png",
            badge: badge_37,
            score: "Aprobado",
            stepNumber: 36
          },
          {
            title: "Curso de Frameworks y Librerías de JavaScript",
            date: "Jun 2023",
            duration: "12h",
            skills: ["JavaScript"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_38_Curso de Asincronismo con JavaScript.png",
            badge: badge_38,
            score: "Aprobado",
            stepNumber: 37
          },
          {
            title: "Curso de API REST con Javascript: Fundamentos",
            date: "Jun 2023",
            duration: "12h",
            skills: ["JavaScript", "APIs", "REST APIs", "Fetch API"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_39_Consumo de API REST con JavaScript.png",
            badge: badge_39,
            score: "Aprobado",
            stepNumber: 38
          },
          {
            title: "Curso de API REST con Javascript: Fundamentos",
            date: "Jul 2023",
            duration: "12h",
            skills: ["JavaScript", "APIs", "REST APIs", "Fetch API"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_40_Curso Práctico de Consumo de API REST con JavaScript.png",
            badge: badge_40,
            score: "Aprobado",
            stepNumber: 39
          },
          {
            title: "Curso de API REST con Javascript: Fundamentos",
            date: "Jul 2023",
            duration: "12h",
            skills: ["JavaScript", "APIs", "REST APIs", "Fetch API"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_41_Curso Profesional de Consumo de API REST con JavaScript.png",
            badge: badge_41,
            score: "Aprobado",
            stepNumber: 40
          },
          {
            title: "Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript",
            date: "Aug 2023",
            duration: "12h",
            skills: ["JavaScript", "NPM", "Package Managers"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_42_Curso de NPM_Gestión de Paquetes y Dependencias en JavaScript.png",
            badge: badge_42,
            score: "Aprobado",
            stepNumber: 41
          },
          {
            title: "Curso de Fundamentos de TypeScript",
            date: "Aug 2023",
            duration: "12h",
            skills: ["TypeScript"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_43_Curso de Fundamentos de TypeScript.png",
            badge: platziLogo,
            score: "Aprobado",
            stepNumber: 42
          },
          {
            title: "Curso de TypeScript: Tipos Avanzados y Funciones",
            date: "Aug 2023",
            duration: "12h",
            skills: ["Functions", "TypeScript"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_44_TypeScript  Tipos Avanzados y Funciones.png",
            badge: badge_44,
            score: "Aprobado",
            stepNumber: 43
          },
          {
            title: "Curso de TypeScript: Programación Orientada a Objetos y Asincronismo",
            date: "Sep 2023",
            duration: "12h",
            skills: ["OOP (Object Oriented)", "Asynchronous JS", "Promises", "TypeScript"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_45_Typescript Programacion Orientada a Objetos y Asincronismo.png",
            badge: badge_45,
            score: "Aprobado",
            stepNumber: 44
          },
          {
            title: "Curso de Introducción a Empaquetadores Web",
            date: "Sep 2023",
            duration: "12h",
            skills: ["Web Development", "Web Bundlers"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_46_Introducción a Empaquetadores Web.png",
            badge: badge_46,
            score: "Aprobado",
            stepNumber: 45
          },
          {
            title: "Curso de Webpack",
            date: "Oct 2023",
            duration: "12h",
            skills: ["Web Development", "Webpack"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_47_Webpack.png",
            badge: badge_47,
            score: "Aprobado",
            stepNumber: 46
          },
          {
            title: "Curso de Vite.js",
            date: "Oct 2023",
            duration: "12h",
            skills: ["JavaScript", "ViteJS"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_48_ViteJS.png",
            badge: badge_48,
            score: "Aprobado",
            stepNumber: 47
          },
          {
            title: "Curso de Single Page Application con JavaScript Vanilla",
            date: "Oct 2023",
            duration: "12h",
            skills: ["JavaScript", "SPA Architecture"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_49_Curso de Single Page Application con JavaScript Vanilla.png",
            badge: badge_49,
            score: "Aprobado",
            stepNumber: 48
          },
          {
            title: "Curso Práctico de Maquetación y Animaciones con CSS",
            date: "Nov 2023",
            duration: "12h",
            skills: ["CSS3", "CSS Animations"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_50_Curso Práctico de Maquetación y Animaciones con CSS.png",
            badge: badge_50,
            score: "Aprobado",
            stepNumber: 49
          },
          {
            title: "Curso de Debugging con Chrome DevTools",
            date: "Nov 2023",
            duration: "12h",
            skills: ["Debugging", "Chrome DevTools"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_51_Curso de Debugging con Chrome DevTools.png",
            badge: badge_51,
            score: "Aprobado",
            stepNumber: 50
          },
          {
            title: "Curso de Manipulación del DOM",
            date: "Dec 2023",
            duration: "12h",
            skills: ["DOM Manipulation"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_52_Curso de Manipulación del DOM.png",
            badge: badge_52,
            score: "Aprobado",
            stepNumber: 51
          },
          {
            title: "Curso de Optimización Web",
            date: "Dec 2023",
            duration: "12h",
            skills: ["Web Development", "Web Performance"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_53_Curso de Optimización Web.png",
            badge: badge_53,
            score: "Aprobado",
            stepNumber: 52
          },
          {
            title: "Audiocurso de Accesibilidad Web: Casos de Estudio",
            date: "Dec 2023",
            duration: "6h",
            skills: ["Web Development", "Web Accessibility", "WCAG"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_54_Audiocurso de Accesibilidad Web.png",
            badge: badge_54,
            score: "Aprobado",
            stepNumber: 53
          },
          {
            title: "Curso de Accesibilidad Web",
            date: "Jan 2024",
            duration: "12h",
            skills: ["Web Development", "Web Accessibility", "WCAG"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_55_Curso de Accesibilidad Web.png",
            badge: badge_55,
            score: "Aprobado",
            stepNumber: 54
          },
          {
            title: "Curso de JavaScript: Web Components",
            date: "Jan 2024",
            duration: "12h",
            skills: ["Web Development", "JavaScript", "Web Components"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_56_Curso Básico de Web Components con JavaScript.png",
            badge: badge_56,
            score: "Aprobado",
            stepNumber: 55
          },
          {
            title: "Curso de Estructuras de Datos con JavaScript",
            date: "Feb 2024",
            duration: "12h",
            skills: ["Data Structures", "Data Management", "Arrays", "JavaScript"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZPLATZI_57_Eestructuras-de-datos.png",
            badge: badge_57,
            score: "Aprobado",
            stepNumber: 56
          },
          {
            title: "Curso de Introducción a C#",
            date: "Feb 2024",
            duration: "12h",
            skills: ["C# .NET"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZXPLATZI_01_Introduccion a C#.png",
            badge: platziLogo,
            score: "Aprobado",
            stepNumber: 57
          },
          {
            title: "Curso de Fundamentos de C#",
            date: "Mar 2024",
            duration: "12h",
            skills: ["C# .NET"],
            credentialUrl: "/CURSOS/PLATZI/PLATZI/ZXPLATZI_02_Fundamientos Variables y operadores C#.png",
            badge: platziLogo,
            score: "Aprobado",
            stepNumber: 58
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
      coursesCount: 15,
      completedPercentage: "100%",
      hoursCount: "220h"
    },
    paths: [
      {
        id: "webdev",
        title: {
          es: "Desarrollo Web",
          en: "Web Development"
        },
        courses: [
          {
            title: "React - La Guía Completa: Hooks, Redux y Next.js",
            date: "Oct 2023",
            duration: "45h",
            skills: ["ReactJS", "Hooks", "Redux Toolkit", "Next.js App Router", "Tailwind CSS"],
            credentialUrl: "https://www.udemy.com/",
            score: "100%",
            highlight: true
          },
          {
            title: "Node: De Cero a Experto (Express, Sockets, MongoDB)",
            date: "Nov 2023",
            duration: "32h",
            skills: ["Node.js", "Express.js", "MongoDB", "Websockets (Socket.io)", "JWT Authentication"],
            credentialUrl: "https://www.udemy.com/",
            score: "100%",
            highlight: true
          },
          {
            title: "JavaScript Moderno: Guía para Dominar el Lenguaje",
            date: "Aug 2023",
            duration: "28h",
            skills: ["ES6+", "Async-Await", "Callbacks", "Webpack", "Prototypes & OOP"],
            credentialUrl: "https://www.udemy.com/",
            score: "100%",
            highlight: false
          },
          {
            title: "CSS y Maquetación Web: Flexbox, Grid y Animaciones",
            date: "Jul 2023",
            duration: "20h",
            skills: ["CSS Grid", "Flexbox", "Keyframes", "Responsive layouts", "Sass"],
            credentialUrl: "https://www.udemy.com/",
            score: "100%",
            highlight: false
          },
          {
            title: "Git y GitHub: Control de Versiones desde Cero",
            date: "Jun 2023",
            duration: "12h",
            skills: ["Git Branches", "Merges & Rebase", "Pull Requests", "GitHub Workflows"],
            credentialUrl: "https://www.udemy.com/",
            score: "100%",
            highlight: false
          }
        ]
      },
      {
        id: "frameworks",
        title: {
          es: "Frameworks & Devops",
          en: "Frameworks & Devops"
        },
        courses: [
          {
            title: "Angular: De Cero a Experto (Angular 17+)",
            date: "Dec 2023",
            duration: "38h",
            skills: ["Angular", "RxJS", "State Management", "Signals", "Directives & Pipes"],
            credentialUrl: "https://www.udemy.com/",
            score: "100%",
            highlight: true
          },
          {
            title: "C# y .NET Core: Creación de Web APIs Empresariales",
            date: "Jan 2024",
            duration: "30h",
            skills: ["C#", ".NET Core API", "Entity Framework", "SQL Server", "Clean Architecture"],
            credentialUrl: "https://www.udemy.com/",
            score: "100%",
            highlight: true
          },
          {
            title: "Python y Django: Desarrollo Web Profesional",
            date: "Feb 2024",
            duration: "25h",
            skills: ["Python OOP", "Django Admin", "Django Rest Framework", "SQLite/Postgres"],
            credentialUrl: "https://www.udemy.com/",
            score: "100%",
            highlight: false
          },
          {
            title: "Docker y Kubernetes: Contenedores y Orquestación",
            date: "Mar 2024",
            duration: "18h",
            skills: ["Docker", "Images & Volumes", "Docker Compose", "Kubernetes Pods", "Deployments"],
            credentialUrl: "https://www.udemy.com/",
            score: "100%",
            highlight: true
          },
          {
            title: "Estructuras de Datos y Algoritmos en JavaScript",
            date: "Apr 2024",
            duration: "15h",
            skills: ["Big O Notation", "Sorting Algorithms", "Binary Trees", "Graphs", "Recursion"],
            credentialUrl: "https://www.udemy.com/",
            score: "100%",
            highlight: false
          }
        ]
      }
    ]
  }
};