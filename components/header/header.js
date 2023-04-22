import styles from '@/styles/components/header.module.scss';
import { useSelector } from 'react-redux';

const Header = () => {
    const { lang } = useSelector(state => state.lang);

    return (
        <div>
            <div id="header" className={styles.header}>
                <div className={styles.gridHead}>
                    <div className="pt-5">
                        <div className={`border-top border-bottom py-4 ${styles.animacion}`} >
                            <div className={`navbar navbar-expand-md container navbar-dark ${styles.navbar}`}>
                                <a className="text-decoration-none" href="/">
                                    <p className={`${styles['text-brand']} navbar-brand fw-bold m-0`}>
                                        <span className={styles.logoverde}> {'< '} </span> jTorresDev <span className={styles.logoverde}> {'>'} </span>
                                    </p>
                                </a>
                                <button
                                    className={`navbar-toggler ${styles['navbar-toggler']}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navegacion"
                                >
                                    <span className={`${styles['navbar-toggler-icon']} navbar-toggler-icon`}></span>
                                </button>

                                <div id="navegacion" className="collapse navbar-collapse" >
                                    <nav className="navbar-nav container d-flex flex-md-row text-center justify-content-md-end gap-2 gap-lg-5">
                                        <a className={styles.nav_link} href="#header" > <span className={ styles.separator_navLink } > | </span> {lang.home} </a>
                                        <a className={styles.nav_link} href="#about" > <span className={ styles.separator_navLink } > | </span> {lang.about} </a>
                                        <a className={styles.nav_link} href="#services" > <span className={ styles.separator_navLink } > | </span> {lang.services} </a>
                                        <a className={styles.nav_link} href="#portfolio" > <span className={ styles.separator_navLink } > | </span> {lang.portfolio} </a>
                                        <a className={styles.nav_link} href="#contact" > <span className={ styles.separator_navLink } > | </span> {lang.contact} </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`container ${styles.containerGridSup}`}>
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img className={`${styles.imagen} mb-5 mb-md-0`} src="img/camilotorres_new1.png" alt="camilo torres" />
                                    </div>
                                    <div className="col-md-8 d-flex flex-column justify-content-center">
                                        <div>
                                            <h2 className={`text-center text-white ${styles.txt1}`}> {lang.hi} </h2>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <h1 className={`text-center ${styles.txt2}`}>
                                                <span>
                                                    I/&apos;m Jonathan Torres
                                                </span>
                                            </h1>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <h2 className={`text-center text-white ${styles.txt3}`}> - Software{' '} <i className="fa-solid fa-up"></i> Developer - </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
