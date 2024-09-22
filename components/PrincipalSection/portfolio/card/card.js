import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import styles from '@/styles/components/card.module.scss';

const Card = ({ proyecto }) => {

    const { title, subtitle, image, linkDemo, linkGithub, descripcion } = proyecto;

    const JSXContent = () => (
        <Tippy className={`${styles.tippy}`} content={<span>{descripcion}</span>}>
          <img src={image} alt="validatorImg" />
        </Tippy>
      );

    return (
        <div className={`col-md-6 col-lg-4 d-flex justify-content-center align-items-center mb-5 ${styles.card_container}`}>
            <div className={`card ${styles.card}`}>
                <div className={`${styles.image}`}>
                    <JSXContent />
                </div>
                <div className={styles.content}>
                    <h2>{title}</h2>
                    <p>{subtitle}</p>

                    {linkDemo !== '' ? (
                        <>
                            <a href={linkDemo} target="_blank" rel="noreferrer" ><p className={`${styles.link_demo}`}>{'-> DEMO <-'}</p></a>
                            {
                                linkGithub !== 'privado' ?
                                (<a href={linkGithub} target="_blank" rel="noreferrer" ><p className="git">Código</p></a>) 
                                : 
                                (<p className="git">{'-> Código PRIVADO <-'}</p>)
                            }
                        </>
                        
                    ) : (
                        <>
                            <p>{'-> No Demo <-'}</p>
                            <a href={linkGithub} target="_blank" rel="noreferrer" ><p className="git">Github</p></a>
                        </>
                    )}


                </div>
            </div>
        </div>
    );
};

export default Card;


Card.propTypes = {
    proyecto: PropTypes.object.isRequired
};