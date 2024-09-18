import { useEffect, useState } from 'react';
import PrincipalSection from '../PrincipalSection/principalSection';
import Footer from '../footer/footer';
import Header from '../header/header';

import styles from '@/styles/components/main.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setLangEn, setLangEs } from '@/actions/functionalitiesActions';

const Main = () => {

    const [selectorLanguage, setSelectorLanguage] = useState(false);
    const dispatch = useDispatch();
    const { lang } = useSelector(state => state.lang);

    useEffect(() => {
        if (selectorLanguage) {
            dispatch(setLangEn());
        } else {
            
            dispatch(setLangEs());
        }
    }, [selectorLanguage]);


    console.log(lang);

    return (
        <div className={`${styles.main_container}`}>
            <a href="#header" className={`${styles.simplescrollup__button1} text-decoration-none`} >
                <i className="bi bi-arrow-up-circle"></i>
            </a>

            <div className={`${styles.startContainer} ${styles.simplescrollup__button2}`}>
                <a
                    href="https://drive.google.com/drive/folders/12D-1WjynkJlOfeCI728nnwe9u_tROXrG?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className={`${styles.button} ${styles.pulseBox} fw-bold`}>
                        {lang.dowunload_cv}
                    </button>
                </a>
            </div>

            <div className={`${styles.language_button}`}>
                <label className={`${styles.buttonn} `} htmlFor="toggle"> {/* ${styles.pulseBox} */}
                    <input
                        id="toggle"
                        className={`${styles.toggle}`}
                        type="checkbox"
                        onChange={(e) => setSelectorLanguage(e.target.checked)}
                        value={selectorLanguage}
                    />
                    <span className={`${styles.slider}`}></span>
                </label>
            </div>


            <Header />
            <PrincipalSection />
            <Footer />
        </div>
    );
};

export default Main;
