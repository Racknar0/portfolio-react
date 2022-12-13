import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext';

const Contact = () => {

    const { lang } = useContext(GlobalContext);

  return (
    <div id="contact" className="contenedorAbout d-flex justify-content-center align-items-center" /* data-aos="fade-up"
    data-aos-duration="1000" */>
    <div className="container-xl">
        <h2 className="text-white titleAbout text-center"><span className="borderx">{lang.contact}</span></h2>
        <p className="about__text1 fs-1 text-center mt-5 pt-5">{lang.contact1}</p>

        <div className="row gridServices">
            <div className="col-md-6 col-lg-4 containerContact01">
                <a className="linkContact" href="mailto:racknarow1@gmail.com" target="_blank" rel='noreferrer'>
                    <div className="containerContact mb-3 bg-dark text-center">
                        <i className="iconoContact fa-solid fa-envelope"></i>
                        <p className="iconoContact_texto fs-1 text-center">Email</p>
                        <p className="iconoContact_texto2 fs-3 text-center px-5">Racknarow1@gmail.com</p>
                    </div>
                </a>
            </div>
            <div className="col-md-6 col-lg-4 containerContact01">
                <a className="linkContact" href="https://www.linkedin.com/in/camilotorresz/" target="_blank" rel='noreferrer'>
                    <div className="containerContact mb-3 bg-dark text-center">
                        <i className="iconoContact fa-brands fa-linkedin"></i>
                        <p className="iconoContact_texto fs-1 text-center">Linkedin</p>
                        <p className="iconoContact_texto2 fs-3 text-center px-5">@camilotorresz</p>
                    </div>
                </a>
            </div>
            <div className="col-md-6 col-lg-4 containerContact01">
                <a className="linkContact" href="https://github.com/Racknar0" target="_blank" rel='noreferrer'>
                    <div className="containerContact mb-3 bg-dark text-center">
                        <i className="iconoContact fa-brands fa-github"></i>
                        <p className="iconoContact_texto fs-1 text-center">GitHub</p>
                        <p className="iconoContact_texto2 fs-3 text-center px-5">@Racknar0</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Contact
