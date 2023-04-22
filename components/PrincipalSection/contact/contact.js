import styles from '@/styles/components/contact.module.scss';
import { useSelector } from 'react-redux';
//import { GlobalContext } from '../../../context/GlobalContext';

const Contact = () => {

    const { lang } = useSelector(state => state.lang);

  return (
    <div id="contact" className={`${styles.main_container_contact} contenedorAbout d-flex justify-content-center align-items-center`} /* data-aos="fade-up"
        data-aos-duration="1000" */>
        <div className="container-xl">
            <h2 className={`text-white text-center ${styles.title_contact}`}>
                <span>{lang.contact}</span>
            </h2>
            <p className={`${styles.contact_subtitle} fs-1 text-center mt-5 pt-5`}>{lang.contact1}</p>

            <div className={`row ${styles.grid_contact}`}>
                <div className={`col-md-6 col-lg-4 ${styles.container_contact_01}`}>
                    <a className={`${styles.link_contact}`} href="mailto:racknarow1@gmail.com" target="_blank" rel="noreferrer">
                    <div className={`${styles.container_contact} mb-3 bg-dark text-center`}>
                            <i className={`${styles.icono_contact} fa-solid fa-envelope`}></i>
                            <p className={`${styles.icono_contact_texto} fs-1 text-center`}>Email</p>
                            <p className={`${styles.icono_contact_texto_2} fs-3 text-center px-5`}>Racknarow1@gmail.com</p>
                        </div>
                    </a>
                </div>
                <div className={`col-md-6 col-lg-4 ${styles.container_contact_01}`}>
                    <a className={`${styles.link_contact}`} href="https://www.linkedin.com/in/camilotorresz/" target="_blank" rel="noreferrer">
                        <div className={`${styles.container_contact} mb-3 bg-dark text-center`}>
                            <i className={`${styles.icono_contact} fa-brands fa-linkedin`}></i>
                            <p className={`${styles.icono_contact_texto} fs-1 text-center`}>Linkedin</p>
                            <p className={`${styles.icono_contact_texto_2} fs-3 text-center px-5`}>@camilotorresz</p>
                        </div>
                    </a>
                </div>
                <div className={`col-md-6 col-lg-4 ${styles.container_contact_01}`}>
                    <a className={`${styles.link_contact}`} href="https://github.com/Racknar0" target="_blank" rel="noreferrer">
                        <div className={`${styles.container_contact} mb-3 bg-dark text-center`}>
                            <i className={`${styles.icono_contact} fa-brands fa-github`}></i>
                            <p className={`${styles.icono_contact_texto} fs-1 text-center`}>GitHub</p>
                            <p className={`${styles.icono_contact_texto_2} fs-3 text-center px-5`}>@Racknar0</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;
