import React, { useContext } from 'react'
import Card from './Card/Card'
import './Portfolio.css'

import { GlobalContext } from '../../../context/GlobalContext';

const Portfolio = () => {

    const { proyectos } = useContext(GlobalContext);
    
  return (
    <div id="portfolio" className="contenedorAbout d-flex justify-content-center align-items-center" /* data-aos="fade-up"
            data-aos-duration="1000" */>
            <div className="container-xl">
                <h2 className="text-white titleAbout text-center"><span className="borderx">Portfolio</span></h2>
                <p className="about__text1 fs-1 text-center mt-5 pt-5">En esta sección encontrarás algunos proyectos y micro-proyectos desarrollados por mí.</p>
                <div className="row gridServices">
                        {proyectos.map((proyecto, index) => {
                            return (
                                <Card proyecto={proyecto} key={ index } />
                            )
                        })}

                </div>


            </div>
        </div>
  )
}

export default Portfolio
