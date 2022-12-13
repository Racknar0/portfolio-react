import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PrincipalSection from '../PrincipalSection/PrincipalSection'
import Particles from "react-tsparticles";
import './Main.css'
import ParticlesBackground from '../Particles/ParticlesBackground'
import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { useEffect } from 'react';

const Main = () => {

  const [selectorLanguage, setSelectorLanguage] = useState(false);

  const { lang, setLangSelector } = useContext(GlobalContext);

  useEffect(() => {

    if (!selectorLanguage) {
      setLangSelector('en');
    } else {
      setLangSelector('es');
    }

  }, [selectorLanguage, setLangSelector])
  

  

  return (
    <div className='Main_Container'> 
      <a href="#header" className="simplescrollup__button2 text-decoration-none"><i className="bi bi-arrow-up-circle"></i></a>

      <div className="startContainer simplescrollup__button">
        <a href="https://drive.google.com/drive/folders/12D-1WjynkJlOfeCI728nnwe9u_tROXrG?usp=sharing" target="_blank" rel='noreferrer'><button className="button pulseBox">{lang.dowunload_cv}</button></a>
     </div>


     <div className='language_button'>
        <label className="buttonn pulseBox" for="toggle">
          <input id="toggle" type="checkbox" onChange={(e) => setSelectorLanguage(e.target.checked)} value={selectorLanguage} />
          <span className="slider"></span>
        </label>
      </div>

      <Header />
      <PrincipalSection />
      <Footer />

    </div>
  )
}

export default Main
