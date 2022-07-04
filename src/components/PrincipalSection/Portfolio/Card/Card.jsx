import React from 'react';

const Card = ({proyecto}) => {

    const {title, subtitle, image, linkDemo, linkGithub } = proyecto;


    return (
        <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-center mb-5">
            <div className="card">
                <div className="image">
                    <img
                        src={image}
                        alt="validatorImg"
                    />
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
