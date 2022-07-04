import { useEffect } from "react";
import { createContext, useState } from "react";

export const GlobalContext = createContext([]) 

export const GlobalContextProvider = ({children}) => {
    // Estados y funciones
    const [preload, setPreload] = useState(true)

    const proyectos = [

        {

            title: "MERN Full Stack NodeJS",
            subtitle: "Proyecto Full Stack NodeJS para la empresa APV",
            image: "./img/projects/FullStack-APV.jpg",
            linkDemo: "https://mern-apv.netlify.app/",
            linkGithub: "https://github.com/Racknar0/APV-Full-Stack-NodeJS"
        },
        {

            title: "React Citas Veterinarias", 
            subtitle: "Proyecto Para agendar Citas Veterinarias",
            image: "./img/projects/react-citas.jpg",
            linkDemo: "https://react-citas-veterinaria-2.netlify.app/",
            linkGithub: "https://github.com/Racknar0/REACT-Citas-Veterinaria"
        },
        {

            title: "React Cotizar Cryptos", 
            subtitle: "Cotizar tus cryptos favoritos",
            image: "./img/projects/cotizarCryptos.jpg",
            linkDemo: "https://react-api-cryptos.netlify.app/",
            linkGithub: "https://github.com/Racknar0/React-API-Cryptos"
        },
        {

            title: "Planificador de Gastos", 
            subtitle: "React Planificador de Gastos Semanal",
            image: "./img/projects/planificadorgastos.jpg",
            linkDemo: "https://react-control-gastos-1.netlify.app/",
            linkGithub: "https://github.com/Racknar0/react-control-gastos"
        },
        {

            title: "Buscador Personaje Dragon Ball",
            subtitle: "Buscador React Dragon Ball",
            image: "./img/projects/dragonBall.jpg",
            linkDemo: "https://db-app1.netlify.app/",
            linkGithub: "https://github.com/Racknar0/React-DragonBall"
        },
        {

            title: "Virtual Reality Website",
            subtitle: "Desarrollado para la empresa Virtua State",
            image: "./img/projects/virtual.jpg",
            linkDemo: "https://virtuasite.netlify.app/",
            linkGithub: "https://github.com/Racknar0/virtua-state-web"
        },
        {

            title: "CRM CoderHouse",
            subtitle: "CRM Realizado en JavaScript",
            image: "./img/projects/crm-coder.jpg",
            linkDemo: "https://crm-coder.netlify.app/",
            linkGithub: "https://github.com/Racknar0/crm_js_coderhouse/tree/master"
        },
        {

            title: "Landing TakeOff",
            subtitle: "React Landig Simple TakeOff",
            image: "./img/projects/takeOff.jpg",
            linkDemo: "https://takeoff-media-prueba.netlify.app/",
            linkGithub: "https://github.com/Racknar0/pruebaTakeOff/tree/master"
        },
        {

            title: "React Ecommerce - Celulares - Firebase",
            subtitle: "Proyecto react conectado a Firebase",
            image: "./img/projects/react-ecommerce.jpg",
            linkDemo: "https://ecommerce-cels.netlify.app/",
            linkGithub: "https://github.com/Racknar0/react-ecomerce-celulares"
        },
        {

            title: "Landing E-Partner",
            subtitle: "Landig E-Partner CSS3 - SASS - HTML5 - JS",
            image: "./img/projects/e-partner.jpg",
            linkDemo: "https://epartner.netlify.app/",
            linkGithub: "https://github.com/Racknar0/ePartner-test-landing"
        },
        {

            title: "Viajes, MongoDB",
            subtitle: "Projecto para agregar reseñas hacia MongoDB",
            image: "./img/projects/node_viajes.jpg",
            linkDemo: "https://agile-river-91298.herokuapp.com/",
            linkGithub: "https://github.com/Racknar0/Node-Express-Viajes"
        },
        {

            title: "React PWA ImgFinder",
            subtitle: "Proyecto desarrollado en react PWA",
            image: "./img/projects/pwa-imgfinder.jpg",
            linkDemo: "https://react-img-finder.netlify.app/",
            linkGithub: "https://github.com/Racknar0/ReactAPI-Gallery-App"
        },
        {

            title: "Firefox Progressive Web App Citas",
            subtitle: "Open with Firefox!",
            image: "./img/projects/pwa-citas.jpg",
            linkDemo: "https://pwa-citas.netlify.app/",
            linkGithub: "https://github.com/Racknar0/PWA-Citas"
        },
        {

            title: "Guitarras Website",
            subtitle: "Html, CSS3, Bootstrap, Sass, Gulp",
            image: "./img/projects/guitarraweb.jpg",
            linkDemo: "https://guitarla1.netlify.app/",
            linkGithub: "https://github.com/Racknar0/guitaLA"
        },
        {

            title: "CRM - CRUD REST API",
            subtitle: "JavaScript, CSS3, Bootstrap",
            image: "./img/projects/crm.jpg",
            linkDemo: "",
            linkGithub: "https://github.com/Racknar0/CRM-PROYECTO-CRUD-REST"
        },
        {

            title: "Udemy Website",
            subtitle: "Html, CSS3, Bootstrap, Sass, Gulp",
            image: "./img/projects/udemy.jpg",
            linkDemo: "https://udemy.netlify.app/",
            linkGithub: "https://github.com/Racknar0/udemy"
        },
        {

            title: "API BuscarIMG Pixabay",
            subtitle: "JavaScript, Html, CSS3, Tailwind",
            image: "./img/projects/pixabay.jpg",
            linkDemo: "https://api-pixabayy.netlify.app/",
            linkGithub: "https://github.com/Racknar0/PixabayAPI"
        },
        {

            title: "PodcastFM Website",
            subtitle: "CSS3, Bootstrap, Sass",
            image: "./img/projects/podcastfm.jpg",
            linkDemo: "https://podcastfm01.netlify.app/",
            linkGithub: "https://github.com/Racknar0/podcastfm"
        },
        {

            title: "Landing Coder",
            subtitle: "Html, CSS3, Bootstrap",
            image: "./img/projects/landcoder.jpg",
            linkDemo: "https://landing-coder.netlify.app/",
            linkGithub: "https://github.com/Racknar0/landing_01"
        },
        {

            title: "REST API Restaurant",
            subtitle: "JavaScript, Html, CSS3, Bootstrap",
            image: "./img/projects/restaurante.jpg",
            linkDemo: "https://rest-api-restaurante.netlify.app/",
            linkGithub: "https://github.com/Racknar0/API-JSON_Restaurante"
        },
        {

            title: "Meeti Website",
            subtitle: "Html, CSS3, Bootstrap, Sass",
            image: "./img/projects/meeti.jpg",
            linkDemo: "https://meeti11.netlify.app/",
            linkGithub: "https://github.com/Racknar0/meeti"
        },
        {

            title: "Tienda Muebles Website",
            subtitle: "Html, CSS3, Bootstrap, Sass",
            image: "./img/projects/tiendamuebles.jpg",
            linkDemo: "https://tienda-muebles1.netlify.app/",
            linkGithub: "https://github.com/Racknar0/tiendamuebles"
        },
        {

            title: "Carrito JavaScript Vanilla",
            subtitle: "JavaScript, Html, CSS3, skeleton",
            image: "./img/projects/carritojs.jpg",
            linkDemo: "https://carritojs11.netlify.app/",
            linkGithub: "https://github.com/Racknar0/carritoJS"
        },
        {

            title: "API Buscar Canciones",
            subtitle: "JavaScript, Html, CSS3, Bootstrap",
            image: "./img/projects/letras.jpg",
            linkDemo: "https://api-buscar-cancion.netlify.app/",
            linkGithub: "https://github.com/Racknar0/FetchAPI-Buscar_Cancion"
        },
        {

            title: "API Clima",
            subtitle: "JavaScript, Html, CSS3, Bootstrap",
            image: "./img/projects/clima.jpg",
            linkDemo: "https://api-clima1.netlify.app/",
            linkGithub: "https://github.com/Racknar0/FetchAPI-Clima"
        },
        {

            title: "APP Filtro Carros",
            subtitle: "JavaScript, Html, CSS3, Skeleton",
            image: "./img/projects/buscador carros.jpg",
            linkDemo: "https://buscardor-carros.netlify.app/",
            linkGithub: "https://github.com/Racknar0/buscadorCarrosJS"
        },
        {

            title: "APP Filtro Carros",
            subtitle: "JavaScript, Html, CSS3, Skeleton",
            image: "./img/projects/cotizadorseguros.jpg",
            linkDemo: "https://prototypesjs.netlify.app/",
            linkGithub: "https://github.com/Racknar0/PrototypeJS_Cotizador"
        },
        {

            title: "POO Gasto Semanal",
            subtitle: "JavaScript, Html, CSS3, Bootstrap",
            image: "./img/projects/gastosemanal.jpg",
            linkDemo: "https://poo-js.netlify.app/",
            linkGithub: "https://github.com/Racknar0/AdminPresupuestoJS"
        },
        {

            title: "Form Validator",
            subtitle: "JavaScript, Html, CSS3, Tailwind",
            image: "./img/projects/validatorJs.jpg",
            linkDemo: "https://jsvalidator.netlify.app/",
            linkGithub: "https://github.com/Racknar0/JSsimuladorEnvioEmail"
        },
        {

            title: "Tweet Local Storage JS",
            subtitle: "JavaScript, Html, CSS3, Skeleton",
            image: "./img/projects/localstorage.jpg",
            linkDemo: "https://js-tweet-localstorage.netlify.app/",
            linkGithub: "https://github.com/Racknar0/TweetLocalStorage"
        },



    ]




    return (
        <GlobalContext.Provider
        value={{
            preload,
            setPreload,
            proyectos
        }}
        >
            
            {children}
        </GlobalContext.Provider>
    )
}

    