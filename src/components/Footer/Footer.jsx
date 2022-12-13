import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalContext';
import './Footer.css'

const Footer = () => {

  const { lang } = useContext(GlobalContext);

  return (
    <footer className="footer">
        <h3 className="footer_text text-center mb-0 pb-2"> Copyright © 2022. @racknarow1 </h3>
        <h3 className="footer_text text-center mb-0 pb-5">{lang.rights}</h3>
    </footer>
  )
}

export default Footer
