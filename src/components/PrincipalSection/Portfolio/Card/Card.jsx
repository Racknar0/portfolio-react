import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional


const Card = ({proyecto}) => {

    const {title, subtitle, image, linkDemo, linkGithub, descripcion } = proyecto;

    const JSXContent = () => (
        <Tippy className="tippy" content={<span>{descripcion}</span>}>
          <img
                src={image}
                alt="validatorImg"
            />
        </Tippy>
      );

    return (
        <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-center mb-5">
            <div className="card">
                <div className="image">
                    <JSXContent />
                </div>
                <div className="content">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>

                    {linkDemo !== '' ? (
                        <>
                            <a href={linkDemo} target="_blank" rel="noreferrer" ><p className='link_demo'>{'-> DEMO <-'}</p></a>
                            {linkGithub !== 'privado' ? 
                            (<a href={linkGithub} target="_blank" rel="noreferrer" ><p className="git">Github</p></a>) 
                            : 
                            (<p className="git">{'-> Github PRIVADO <-'}</p>)}
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
