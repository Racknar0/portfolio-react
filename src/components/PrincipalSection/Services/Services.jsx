import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div>
      <div id="services" className="contenedorServices d-flex justify-content-center align-items-center" /* data-aos="fade-up"
            data-aos-duration="1000" */>
            <div className="container-xl">
                <h2 className="text-white titleAbout text-center"><span className="borderx">Servicios</span></h2>
                <p className="about__text1 fs-1 text-center mt-5 pt-5">Garantizamos un desarrollo óptimo cumpliendo con lo siguiente:</p>

                <div className="row gridServices">
                    <div className="col-md-6 col-lg-4">
                        <div className="containerServices mb-3 bg-dark text-center">
                            <i className="icono fa-solid fa-mobile-screen-button"></i>
                            <p className="icono_texto fs-1 text-center">Responsive</p>
                            <p className="icono_texto2 text-center px-5">Su aplicacón web se adaptara correctamente en cualquier dispositivo, incluidas computadoras de escritorio, tabletas y teléfonos móviles utilizando tecnologías modernas para su implementación.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="containerServices mb-3 bg-dark text-center">
                            <i className="fa-solid fa-pen-to-square icono"></i>
                            <p className="icono_texto fs-1 text-center">Diseño Creativo</p>
                            <p className="icono_texto2 text-center px-5">Al contar con conocimientos en diseño gráfico y de herramientas como Photoshop sus desarrollos contaran con personalización total para darle originalidad a los productos.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="containerServices mb-3 bg-dark text-center">
                            <i className="fa-solid fa-code icono"></i>
                            <p className="icono_texto fs-1 text-center">Desarrollo Moderno</p>
                            <p className="icono_texto2 text-center px-5">Utilizaremos tecnologías de última generación como los Frameworks de desarrollo más utilizados, garantizando siempre dispone de las últimas actualizaciones para su aplicativo.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="containerServices mb-3 bg-dark text-center">
                            <i className="fa-solid fa-thumbs-up icono"></i>
                            <p className="icono_texto fs-1 text-center">Ingtegracion de redes.</p>
                            <p className="icono_texto2 text-center px-5">Existen muchas plataformas sociales, y debe promover su presencia en ellas en su sitio web.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="containerServices mb-3 bg-dark text-center">
                            <i className="fa-solid fa-bolt icono"></i>
                            <p className="icono_texto fs-1 text-center">Rendimiento</p>
                            <p className="icono_texto2 text-center px-5">Utilización de buenas prácticas de desarrollo y tecnologías prácticas, para garantizar el mayor rendimiento posible en sus aplicativos.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="containerServices mb-3 bg-dark text-center">
                            <i className="fa-solid fa-chart-line icono"></i>
                            <p className="icono_texto fs-1 text-center">SEO</p>
                            <p className="icono_texto2 text-center px-5">Se optimizará su aplicativo con una estrategia inteligente de SEO  para impulsar el indexamiento en motores de búsqueda para generar clientes potenciales.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Services
