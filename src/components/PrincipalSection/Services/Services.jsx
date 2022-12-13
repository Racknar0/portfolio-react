import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext';
import './Services.css'

const Services = () => {
    
    const { lang } = useContext(GlobalContext);

  return (
    <div>
      <div id="services" className="contenedorServices d-flex justify-content-center align-items-center" /* data-aos="fade-up"
            data-aos-duration="1000" */>
            <div className="container-xl">
                <h2 className="text-white titleAbout text-center"><span className="borderx">{lang.services}</span></h2>
                <p className="about__text1 fs-1 text-center mt-5 pt-5">{lang.services1}</p>

                <div className="row gridServices">
                    <div className="col-md-6 col-lg-4">
                        <div className="containerServices mb-3 bg-dark text-center">
                            <i className="icono fa-solid fa-mobile-screen-button"></i>
                            <p className="icono_texto fs-1 text-center">{lang.responsive}</p>
                            <p className="icono_texto2 text-center px-5">{lang.responsive1}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="containerServices mb-3 bg-dark text-center">
                            <i className="fa-solid fa-pen-to-square icono"></i>
                            <p className="icono_texto fs-1 text-center">{lang.creative}</p>
                            <p className="icono_texto2 text-center px-5">{lang.creative1}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="containerServices mb-3 bg-dark text-center">
                            <i className="fa-solid fa-code icono"></i>
                            <p className="icono_texto fs-1 text-center">{lang.modern}</p>
                            <p className="icono_texto2 text-center px-5">{lang.modern1}lang</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="containerServices mb-3 bg-dark text-center">
                            <i className="fa-solid fa-thumbs-up icono"></i>
                            <p className="icono_texto fs-1 text-center">{lang.social_networks_integration}</p>
                            <p className="icono_texto2 text-center px-5">{lang.social_networks_integration1}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="containerServices mb-3 bg-dark text-center">
                            <i className="fa-solid fa-bolt icono"></i>
                            <p className="icono_texto fs-1 text-center">{lang.performance}</p>
                            <p className="icono_texto2 text-center px-5">{lang.performance1}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className="containerServices mb-3 bg-dark text-center">
                            <i className="fa-solid fa-chart-line icono"></i>
                            <p className="icono_texto fs-1 text-center">{lang.seo}</p>
                            <p className="icono_texto2 text-center px-5">{lang.seo1}</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Services
