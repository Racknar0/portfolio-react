import { useSelector } from 'react-redux';
import styles from '@/styles/components/services.module.scss';

const Services = () => {
    
    const { lang } = useSelector(state => state.lang);

  return (

      <div id="services" className={`${styles.contenedor_services} d-flex justify-content-center align-items-center`} /* data-aos="fade-up"
            data-aos-duration="1000" */>
            <div className="container-xl">
                <h2 className={`text-white text-center ${styles.tittle_services}`}>
                    <span>{lang.services}</span>
                </h2>
                <p className={`fs-1 text-center mt-5 pt-5 ${styles.services_text_1}`}>
                    {lang.services1}
                </p>

                <div className={`row ${styles.grid_services}`}>
                    <div className="col-md-6 col-lg-4">
                        <div className={`mb-3 bg-dark text-center ${styles.container_services}`}>
                            <i className="fa-solid fa-mobile-screen-button"></i>
                            <p className="fs-1 text-center">{lang.responsive}</p>
                            <p className="text-center px-5">{lang.responsive1}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                    <div className={`mb-3 bg-dark text-center ${styles.container_services}`}>
                            <i className="fa-solid fa-pen-to-square icono"></i>
                            <p className="fs-1 text-center">{lang.creative}</p>
                            <p className="text-center px-5">{lang.creative1}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`mb-3 bg-dark text-center ${styles.container_services}`}>
                            <i className="fa-solid fa-code"></i>
                            <p className="fs-1 text-center">{lang.modern}</p>
                            <p className="text-center px-5">{lang.modern1}lang</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`mb-3 bg-dark text-center ${styles.container_services}`}>
                            <i className="fa-solid fa-thumbs-up"></i>
                            <p className="fs-1 text-center">{lang.social_networks_integration}</p>
                            <p className="text-center px-5">{lang.social_networks_integration1}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`mb-3 bg-dark text-center ${styles.container_services}`}>
                            <i className="fa-solid fa-bolt"></i>
                            <p className="icono_texto fs-1 text-center">{lang.performance}</p>
                            <p className="icono_texto2 text-center px-5">{lang.performance1}</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className={`mb-3 bg-dark text-center ${styles.container_services}`}>
                            <i className="fa-solid fa-chart-line icono"></i>
                            <p className="icono_texto fs-1 text-center">{lang.seo}</p>
                            <p className="icono_texto2 text-center px-5">{lang.seo1}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  );
};

export default Services;
