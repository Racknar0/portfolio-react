import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'
import './PrincipalSection.css'
import Services from './Services/Services'

const PrincipalSection = () => {
  return (
    <div className='main'>
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default PrincipalSection
