import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PrincipalSection from '../PrincipalSection/PrincipalSection'

import './Main.css'

const Main = () => {
  return (
    <div className='Main_Container'>
      <a href="#header" className="simplescrollup__button2 text-decoration-none"><i className="bi bi-arrow-up-circle"></i></a>

      <div class="startContainer simplescrollup__button">
        <a href="https://drive.google.com/drive/folders/12D-1WjynkJlOfeCI728nnwe9u_tROXrG?usp=sharing" target="_blank" rel='noreferrer'><button class="button pulseBox">Descargar Curriculum</button></a>
      
     </div>


      <Header />
      <PrincipalSection />
      <Footer />
    </div>
  )
}

export default Main
