import { useSelector } from 'react-redux';
import Card from './card/card';
import styles from '@/styles/components/portfolio.module.scss';

import { proyectos } from '@/db/projects';

const Portfolio = () => {

    const { lang } = useSelector(state => state.lang);

    return (
        <div
            id="portfolio"
            className={`${styles.contenedor_portfolio} d-flex justify-content-center align-items-center`} /* data-aos="fade-up"
            data-aos-duration="1000" */
        >
            <div className="container-xl">
                <h2 className="text-white text-center">
                    <span>{lang.portfolio}</span>
                </h2>
                <p
                    className={`${styles.portfolio_text_1} fs-1 text-center mt-5 pt-5`}
                >
                    {lang.portfolio1}
                </p>
                <div className={`row ${styles.grid_services}`}>
                    {proyectos.map((proyecto, index) => {
                            return (
                                <Card proyecto={proyecto} key={ index } />
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
