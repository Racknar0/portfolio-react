import React from 'react'
import './Header.css'




const Header = () => {
  return (
    <div>
        <header id="header" className="header">
            <div className="gridHead">
                <div className="pt-5">
                    <div className="border-top border-bottom py-4 animacion">
                        <div className="navbar navbar-expand-md container navbar-dark">
                            <a className="text-decoration-none" href="/">
                                <p className="text-brand navbar-brand fw-bold m-0"><span
                                        className="logoverde">{'< '}</span>
                                    jTorresDev <span className="logoverde">{'>'}</span></p>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navegacion">
                                <span className="navbar-toggler-icon"></span>
                            </button>


                            <div id="navegacion" className="collapse navbar-collapse">
                                <nav className="navbar-nav container d-flex flex-md-row text-center justify-content-md-end gap-2 gap-lg-5">
                                    <a className="nav_link"
                                        href="#header"><span className='separator_navLink'>|</span>Inico</a>
                                    <a className="nav_link" href="#about"><span className='separator_navLink'>|</span>Información</a>
                                    <a className="nav_link"
                                        href="#services"><span className='separator_navLink'>|</span>Servicios</a>
                                    <a className="nav_link"
                                        href="#portfolio"><span className='separator_navLink'>|</span>Portafolio</a>
                                    <a className="nav_link" href="#contact"><span className='separator_navLink'>|</span>Contacto</a>
                                </nav>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-4">
                                    <img className="imagen mb-5 mb-md-0" src="img/camilotorres_new.png" alt=""/>
                                </div>
                                <div className="col-md-8 d-flex flex-column justify-content-center">
                                    <div>
                                        <h2 className="text-center text-white txt1">Hola!</h2>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <h1 className="text-center txt2"><span className="textox">I'm Jonathan Torres</span></h1>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <h2 className="text-center text-white txt3">- Front <i className="fa-solid fa-up"></i>End
                                            Developer -</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </header>
    </div>
  )
}

export default Header
