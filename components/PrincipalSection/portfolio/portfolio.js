import { useSelector } from 'react-redux';
import Card from './card/card';
import styles from '@/styles/components/portfolio.module.scss';

import { proyectos } from '@/db/projects';
import { useState } from 'react';


const Portfolio = () => {

    const { lang } = useSelector(state => state.lang);


    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
        console.log('isExpanded: ', isExpanded);
    };

    return (
        <div
            id="portfolio"
            className={`${styles.contenedor_portfolio} d-flex flex-column justify-content-center align-items-center`} /* data-aos="fade-up"
            data-aos-duration="1000" */
        >
            <div className="container-xl">

                <h2 className="text-white text-center">
                    <span>{lang.portfolio}</span>
                </h2>
                <p className={`${styles.portfolio_text_1} fs-1 text-center pt-5`} >
                    {lang.portfolio1}
                </p>

                <button
                    className={`${styles.button_expand}`}
                    onClick={handleExpand}
                >
                    {isExpanded ? 'Ver menos' : 'Ver todo'}
                </button>

                <div className={`${isExpanded ? styles.expanded : styles.collapsed}`} >

                    <div className={`row ${styles.grid_services}`} >
                        {proyectos.map((proyecto, index) => {
                            return <Card proyecto={proyecto} key={index} />;
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;
