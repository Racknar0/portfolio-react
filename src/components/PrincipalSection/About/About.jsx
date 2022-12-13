import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext';
import './About.css'


const About = () => {


    
    const { lang } = useContext(GlobalContext);

  return (
    <div id="about" className="contenedorAbout"
    /* data-aos="fade-up" data-aos-duration="1000" */>
    <div className="container-xl">
        <h2 className="text-white titleAbout text-center"><span className="borderx">{lang.aboutMe}</span></h2>

        <div className="row pt-5 justify-content-around align-items-start">
            <div className="col-md-6">
                <div>
                    <p className="about__text1 fs-1 mb-5 text-center text-md-start">{lang.whoAmI}</p>
                </div>
                <div>
                    <p className="text-white fw-bold fs-1">{lang.whoAmI2}
                    </p>
                </div>
                <div>
                    <p className="about__text2 mb-5">{lang.describe}</p>
                </div>
                <div className="mb-5">
                    <p className="about__text2 fs-3"><span className="pedirInfo fw-bold">{lang.name}</span> Jonathan Camilo
                        Torres</p>
                    <p className="about__text2 fs-3"><span className="pedirInfo fw-bold">{lang.bachelor}</span> {lang.systems_engineering}</p>
                    <p className="about__text2 fs-3"><span className="pedirInfo fw-bold">{lang.course1}</span> {lang.full_stack_web_development}</p>
                    <p className="about__text2 fs-3"><span className="pedirInfo fw-bold">{lang.course2}</span> Tecnólogo en electronica</p>
                    <p className="about__text2 fs-3"><span className="pedirInfo fw-bold">{lang.email} </span>
                        Racknarow1@gmail.com</p>
                </div>
                <div><a className="btn btn-success fw-bold text-uppercase fs-4 py-3 px-5"
                        href="https://drive.google.com/drive/folders/12D-1WjynkJlOfeCI728nnwe9u_tROXrG?usp=sharing"
                        target="_blank" rel='noreferrer'>{lang.dowunload_cv}</a>
                </div>
            </div>
            <div className="col-md-6 mt-5 pt-5 mt-md-0 pt-md-0">
                <div>
                    <p className="about__text1 fs-1 mb-5 text-center text-md-start">Skills:</p>
                </div>
                <div className="row gridSkills justify-content-center">
                    <div className="col-2 skill skill1 m-3 m-lg-2" title="HTML5"></div>
                    <div className="col-2 skill skill1a m-3 m-lg-2" title="REACT"></div>
                    <div className="col-2 skill skill2 m-3 m-lg-2" title="SCC3"></div>
                    <div className="col-2 skill skill3 m-3 m-lg-2" title="BOOTSTRAP"></div>
                    <div className="col-2 skill skill4 m-3 m-lg-2" title="SASS"></div>
                    <div className="col-2 skill skill5 m-3 m-lg-2" title="JAVASCRIPT"></div>
                    <div className="col-2 skill skill6 m-3 m-lg-2" title="BOOTSTRAP"></div>
                    <div className="col-2 skill skill7 m-3 m-lg-2" title="GIT"></div>
                    <div className="col-2 skill skill8 m-3 m-lg-2" title="GITHUB"></div>
                    <div className="col-2 skill skill9 m-3 m-lg-2" title="WORDPRESS"></div>
                    <div className="col-2 skill skill10 m-3 m-lg-2" title="MYSQL"></div>
                    <div className="col-2 skill skill11 m-3 m-lg-2" title="PHOTOSHOP"></div>
                    <div className="col-2 skill skill12 m-3 m-lg-2" title="SSH"></div>
                    <div className="col-2 skill skill13 m-3 m-lg-2" title="LUA"></div>
                    <div className="col-2 skill skill14 m-3 m-lg-2" title="VISUAL STUDIO CODE"></div>
                    <div className="col-2 skill skill15 m-3 m-lg-2" title="VISUAL STUDIO"></div>
                    <div className="col-2 skill skill16 m-3 m-lg-2" title="WINDOWS SERVER"></div>
                    <div className="col-2 skill skill17 m-3 m-lg-2" title="LINUX"></div>
                    <div className="col-2 skill skill18 m-3 m-lg-2" title="APACHE"></div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default About
