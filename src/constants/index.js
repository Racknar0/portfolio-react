// src/constants/index.js
import project1 from "../assets/projects/tienda_naranja.jpg";
import project2 from "../assets/projects/biozonos.jpg";
import project3 from "../assets/projects/mirocertificaciones.jpg";
import project4 from "../assets/projects/ariadna.jpg";
import project5 from "../assets/projects/tari.jpg";
import project6 from "../assets/projects/aforo_metro.jpg";
import project7 from "../assets/projects/tpimprove.jpg";
import project8 from "../assets/projects/virtual.jpg";
import project9 from "../assets/projects/halconerp.jpg";

export const HERO_CONTENT = 'Desarrollador Full Stack Senior con más de 6 años de experiencia especializándome en arquitecturas de alto rendimiento bajo ecosistemas modernos de JavaScript (React, Next.js, Angular, React Native) y entornos robustos en C# y Python/Django. Cuento con una trayectoria de más de 20 proyectos a nivel laboral liderados y co-desarrollados junto a equipos de alto rendimiento para organizaciones de primer nivel como Banco Itaú (Tienda Naranja), American British Tobacco, Banco Confianza Perú, Uniminuto, la Aeronáutica Civil de Colombia, Teleperformance y el Metro de Medellín. Apasionado por la optimización de rendimiento, despliegues cloud (VPS/Linux), la integración de Inteligencia Artificial y la construcción de software escalable bajo buenas prácticas de Clean Code. Además, comparto mi conocimiento y pasión por la tecnología creando contenido educativo sobre desarrollo de software en mis canales de YouTube y TikTok.';

export const ABOUT_TEXT = 'Mi nombre es Jonathan Camilo Torres. Soy un desarrollador de software Full Stack enfocado en construir productos digitales interactivos, dinámicos y eficientes. A lo largo de mi carrera, he tenido la oportunidad de desempeñarme en diversos entornos de alto nivel tecnológico, colaborando con equipos de desarrollo para resolver problemas complejos y optimizar procesos comerciales. Mi stack principal incluye tecnologías modernas como React, Next.js, Node.js, Express, C#, Django, y bases de datos como MySQL y MongoDB. Me apasiona el aprendizaje constante, el trabajo colaborativo y la entrega de interfaces visualmente atractivas con un excelente rendimiento bajo el capó.';

export const EXPERIENCES = [
  {
    year: "2023 - Presente",
    role: "Senior Frontend Developer",
    company: "Ariadna Communications Group",
    description: "Lideré y co-desarrollé soluciones digitales y plataformas corporativas de alta escala para clientes multinacionales líderes en e-commerce, fintech, educación y consumo masivo. Entre los proyectos clave de alto impacto destacan: el desarrollo completo del e-commerce 'Tienda Naranja' de Banco Itaú, el portal financiero principal de Banco Confianza Perú, el portal de microcertificaciones de la Universidad Minuto de Dios (Uniminuto), la aplicación móvil interactiva para Brewerie Adventure Tour (USA), la plataforma de control de aforo y publicidad de Icomedios para el Metro de Medellín, portales comerciales de Vuse para British American Tobacco y catálogos interactivos para Alicorp. Implementé arquitecturas modulares y eficientes utilizando React, Next.js, Django, Drupal, JavaScript, Webpack y Sass, brindando mentoría técnica y garantizando estándares de calidad en cada entrega.",
  },
  {
    year: "2022 - 2023",
    role: "Desarrollador Full Stack",
    company: "DB-System",
    description: "Diseñé y desarrollé soluciones Full Stack de alto impacto para corporaciones multinacionales líderes en tecnología, turismo y operaciones globales. Lideré la implementación de plataformas web interactivas y dinámicas utilizando Next.js, optimizando la experiencia de usuario y el rendimiento para proyectos de Uber y Teleperformance. Adicionalmente, diseñé y desarrollé una extensión de Chrome de nivel empresarial para Despegar, automatizando la captura de datos y optimizando los flujos internos de reservas de los usuarios. Integré flujos backend robustos y consumo de servicios REST, garantizando máxima estabilidad y escalabilidad en sistemas de alto tráfico.",
  },
  {
    year: "2022",
    role: "Desarrollador Frontend",
    company: "Aeronáutica Civil de Colombia",
    description: "Participé en el desarrollo y modernización del sistema ERP modular 'HALCON ERP' y de la plataforma académica del CEA (Centro de Estudios Aeronáuticos) de la Aeronáutica Civil. Implementé interfaces web robustas y escalables utilizando React y Redux para una óptima gestión del estado global de las aplicaciones. Lideré el diseño lógico y visual del frontend, asegurando una comunicación eficiente y segura a través del consumo de APIs REST y bases de datos relacionales, optimizando flujos internos y reduciendo tiempos de respuesta.",
  },
  {
    year: "2022",
    role: "Frontend Developer",
    company: "Fundación Sari",
    description: "Lideré el diseño e implementación de la interfaz de usuario (UI) para la plataforma digital de la fundación. Desarrollé aplicativos dinámicos mediante la integración de APIs REST externas, y coordiné el desarrollo web de módulos autogestionables de comercio electrónico utilizando WordPress. Adicionalmente, apliqué habilidades de diseño gráfico y maquetación web con HTML5, CSS3, Bootstrap y React JS, asegurando una experiencia de usuario (UX) accesible, fluida y visualmente atractiva.",
  },
  {
    year: "2020 - 2022",
    role: "Web Developer",
    company: "Biozonos Colombia",
    description: "Diseñé y maqueté la plataforma comercial para la comercialización de purificadores de agua. Lideré la migración completa del sitio web heredado hacia Next.js, mejorando sustancialmente el posicionamiento SEO, rendimiento móvil e indexación. Adicionalmente, implementé y configuré su despliegue y alojamiento en un servidor virtual privado (VPS) Linux, administrando bases de datos para clientes y asegurando el soporte continuo de la infraestructura web.",
  }
];

export const PROJECTS = [
  {
    title: "Tienda Naranja - Banco Itaú",
    image: project1,
    description:
      "La plataforma 'Tienda Naranja' fue desarrollada para Banco Itaú utilizando Next.js en el frontend, con estilos gestionados mediante SCSS y almacenamiento de estados con Redux. El backend está construido con Node.js y Express, apoyado en MySQL como base de datos, utilizando Prisma como ORM.",
    technologies: ["Next.js", "SCSS", "Redux", "Node.js", "Express", "MySQL", "Prisma"],
    link: "https://youtu.be/3N8l3kD-8-0"
  },
  {
    title: "Biozonos Site - Biozonos",
    image: project2,
    description:
      "Plataforma web creada para Biozonos implementando Next.js en el frontend, estilos con SCSS y Redux. Optimizada para el posicionamiento SEO, rendimiento móvil e integración fluida de recursos.",
    technologies: ["Next.js", "SCSS", "Redux", "SEO", "Responsive"],
    link: "https://youtu.be/28_mjw8b4JM"
  },
  {
    title: "Microcertificaciones - Uniminuto",
    image: project3,
    description:
      "Plataforma para la Universidad Minuto de Dios enfocada en la oferta y compra de programas. Backend en Drupal, y frontend con TWIG, Webpack, SCSS y JS con pasarelas de compra y control de certificados.",
    technologies: ["Drupal", "TWIG", "Webpack", "SCSS", "JavaScript"],
    link: "https://youtu.be/tIVpe4wFxYw"
  },
  {
    title: "Portal Corporativo - Ariadna Communications Group",
    image: project4,
    description:
      "Portal principal desarrollado con Drupal para el backend y TWIG, Webpack, SCSS y JavaScript en el frontend. Enfoque en escalabilidad, rendimiento e interactividad avanzada.",
    technologies: ["Drupal", "TWIG", "Webpack", "SCSS", "JavaScript"],
    link: "https://youtu.be/HcgtHywpZO0"
  },
  {
    title: "Sitio Web 'Tari' - Alicorp Perú",
    image: project5,
    description:
      "Plataforma de catálogo de productos Tari de Alicorp, que redirecciona de forma fluida a Amazon. Desarrollada con Drupal, TWIG, Webpack, SCSS y JavaScript.",
    technologies: ["Drupal", "TWIG", "Webpack", "SCSS", "JavaScript"],
    link: "https://youtu.be/l0UFP2VH3nU"
  },
  {
    title: "Aforo y Gestión Publicitaria - Metro de Medellín",
    image: project6,
    description:
      "Aplicación para la gestión de espacios publicitarios y control de aforo en el Metro de Medellín, con flujos de ventas y asignación inteligente. Backend en Django y frontend en Jinja/JS.",
    technologies: ["Django", "Python", "Webpack", "SCSS", "JavaScript"],
    link: "https://youtu.be/SJdSC0cgwAg"
  },
  {
    title: "TP Improve - Teleperformance",
    image: project7,
    description:
      "Plataforma analítica para el procesamiento de cubos de datos y generación de reportes con gráficos interactivos. Backend en C# / Python, y frontend en React, Next.js y Bootstrap.",
    technologies: ["React", "Next.js", "C#", "Python", "Bootstrap"],
    link: "https://youtu.be/HjFcAX9JCmY"
  },
  {
    title: "Sitio de Realidad Virtual - Virtua State",
    image: project8,
    description:
      "Sitio web responsivo desarrollado con JavaScript puro, Bootstrap y CSS para explorar y adquirir modelos 3D de Virtua State.",
    technologies: ["JavaScript", "Bootstrap", "CSS3"],
    link: "https://virtuasite.netlify.app/"
  },
  {
    title: "HALCON ERP - Aeronáutica Civil",
    image: project9,
    description:
      "Aplicación ERP modular para la gestión de recursos de la Aeronáutica Civil de Colombia, desarrollada bajo React, Redux y Bootstrap, conectada a APIs REST.",
    technologies: ["React", "Redux", "Bootstrap", "REST API"],
    link: "https://halconerp.com"
  }
];

export const CONTACT = {
  address: "Duitama, Colombia",
  phoneNo: "Disponible bajo solicitud",
  email: "Racknarow1@gmail.com",
};
