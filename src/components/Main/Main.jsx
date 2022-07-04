import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PrincipalSection from '../PrincipalSection/PrincipalSection'

import './Main.css'

const Main = () => {
  return (
    <div className='Main_Container'>
      <a href="#header" class="simplescrollup__button text-decoration-none"><i class="bi bi-arrow-up-circle"></i></a>
      <Header />
      <PrincipalSection />
      <Footer />
    </div>
  )
}

export default Main
