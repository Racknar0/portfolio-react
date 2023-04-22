import { useSelector } from 'react-redux';
import SkillImage from './skillImage';
import styles from '@/styles/components/about.module.scss';


const About = () => {
    
    const { lang } = useSelector(state => state.lang);


  return (
    <div id="about" className={styles.contenedorAbout}
    /* data-aos="fade-up" data-aos-duration="1000" */>
    <div className="container-xl">
        <h2 className="text-white text-center"><span>{lang.aboutMe}</span></h2>

        <div className="row pt-5 justify-content-around align-items-start">
            <div className="col-md-6">
                <div>
                    <p className={`${styles.about_text_1} fs-1 mb-5 text-center text-md-start`}>{lang.whoAmI}</p>
                </div>
                <div>
                    <p className="text-white fw-bold fs-1">{lang.whoAmI2}</p>
                </div>
                <div>
                    <p className={`${styles.about_text_2} mb-5`}>{lang.describe}</p>
                </div>
                <div className="mb-5">
                    <p className={`${styles.about_text_2} fs-3`}>
                        <span>{lang.name}</span> Jonathan Camilo Torres
                    </p>
                    <p className={`${styles.about_text_2} fs-3`}>
                        <span>{lang.bachelor}</span> {lang.systems_engineering}
                    </p>
                    <p className={`${styles.about_text_2} fs-3`}>
                        <span>{lang.course1}</span> {lang.full_stack_web_development}
                    </p>
                    <p className={`${styles.about_text_2} fs-3`}>
                        <span>{lang.course2}</span> Tecnólogo en electronica
                    </p>
                    <p className={`${styles.about_text_2} fs-3`}>
                        <span>{lang.email}</span>Racknarow1@gmail.com
                    </p>
                </div>
                <div>
                    <a className={`btn btn-success fw-bold text-uppercase fs-4 py-3 px-5 ${styles.btn_success}`}
                        href="https://drive.google.com/drive/folders/12D-1WjynkJlOfeCI728nnwe9u_tROXrG?usp=sharing"
                        target="_blank" 
                        rel="noreferrer">{lang.dowunload_cv}</a>
                </div>
            </div>
            <div className="col-md-6 mt-5 pt-5 mt-md-0 pt-md-0">
                <div>
                    <p className={`${styles.about_text_1} fs-1 mb-5 text-center text-md-start`}>Skills:</p>
                </div>
                <div className={`${styles.grid_skills} row justify-content-center`}>
                    <SkillImage title="REACT" classe={'skill'} classe2={'skill1'} link="https://es.reactjs.org/" />
                    <SkillImage title="REDUX" classe={'skill'} classe2={'skill1a'} link="https://es.redux.js.org/" />
                    <SkillImage title="JAVASCRIPT" classe={'skill'} classe2={'skill5'} link="https://developer.mozilla.org/es/docs/Web/JavaScript" />
                    <SkillImage title="TYPESCRIPT" classe={'skill'} classe2={'skill17'} link="https://www.typescriptlang.org/" />
                    <SkillImage title="NEXTJS" classe={'skill'} classe2={'skill18'} link="https://nextjs.org/" />
                    <SkillImage title="NODEJS" classe={'skill'} classe2={'skill13'} link="https://nodejs.org/es/" />
                    <SkillImage title="MONGODB" classe={'skill'} classe2={'skill11'} link="https://www.mongodb.com/es" />
                    <SkillImage title="MYSQL" classe={'skill'} classe2={'skill9'} link="https://www.mysql.com/" />
                    <SkillImage title="SASS" classe={'skill'} classe2={'skill4'} link="https://sass-lang.com/" />
                    <SkillImage title="SCC3" classe={'skill'} classe2={'skill2'} link="https://css3.info/" />
                    <SkillImage title="BOOTSTRAP" classe={'skill'} classe2={'skill3'} link="https://getbootstrap.com/" />
                    <SkillImage title="GIT" classe={'skill'} classe2={'skill6'} link="https://git-scm.com/" />
                    <SkillImage title="GITHUB" classe={'skill'} classe2={'skill7'} link="https://github.com/" />
                    <SkillImage title="WORPRESS" classe={'skill'} classe2={'skill8'} link="https://wordpress.com/" />
                    <SkillImage title="PHOTOSHOP" classe={'skill'} classe2={'skill10'} link="https://www.adobe.com/es/products/photoshop.html" />
                    <SkillImage title="HTML" classe={'skill'} classe2={'skill12'} link="https://developer.mozilla.org/es/docs/Web/HTML" />
                    <SkillImage title="VISUAL STUDIO" classe={'skill'} classe2={'skill14'} link="https://visualstudio.microsoft.com/es/" />
                    <SkillImage title="WINDOWS SERVER" classe={'skill'} classe2={'skill15'} link="https://www.microsoft.com/es-es/windows-server" />
                    <SkillImage title="LINUX" classe={'skill'} classe2={'skill16'} link="https://www.linux.org/" />
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default About;

