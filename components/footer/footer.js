import styles from '@/styles/components/footer.module.scss';
import { useSelector } from 'react-redux';

const Footer = () => {

  const { lang } = useSelector(state => state.lang);

  return (
    <footer className={`${styles.footer}`}>
        <h3 className="text-center mb-0 pb-2"> Copyright © 2022. @racknarow1 </h3>
        <h3 className="text-center mb-0 pb-5">{lang.rights}</h3>
    </footer>
  );
};

export default Footer;
