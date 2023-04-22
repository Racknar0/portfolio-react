import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import styles from '@/styles/components/about.module.scss';

const SkillImage = ({ title, classe, classe2, link }) => (
    <Tippy content={<span>{ title }</span>}>
      <a href={`${link}`} className={`col-2 m-3 m-lg-2 `} target="_blank" rel="noreferrer">
        <div className={`${styles[`${classe}`]} ${styles[`${classe2}`]}`} />
      </a>
    </Tippy>
  );

export default SkillImage;


SkillImage.propTypes = {
    title: PropTypes.string.isRequired,
    classe: PropTypes.string.isRequired,
    classe2: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};