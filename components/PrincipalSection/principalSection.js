import styles from '@/styles/components/principalSection.module.scss';
import About from './about/about';
import Services from './services/services';
import Portfolio from './portfolio/portfolio';
import Contact from './contact/contact';

const PrincipalSection = () => {
    return (
        <div className={styles.principalSection}>
            <About />
            <Portfolio />
            <Services />
            <Contact />
        </div>
    );
};

export default PrincipalSection;
