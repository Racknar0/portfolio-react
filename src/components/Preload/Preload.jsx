import React from 'react'
import './Preload.css'

const Preload = () => {
  return (
    <div className='preloadContainer  d-flex justify-content-center align-items-center'>
      <div className="bg_reload">  
      <svg xmlns="http://www.w3.org/2000/svg" width="670" height="236" viewBox="0 0 670 236">
        
        <path className="path" stroke="#cbec13" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray="300" strokeDashoffset="300" fill="none" d="M343.6 75.9v20.3l23.1 21.8-23.1 21.8v20.3l44.6-42.1zM326.4 139.8l-23.1-21.8 23.1-21.8v-20.3l-44.6 42.1 44.6 42.1z"/>
        
        <path className="path" stroke="#cbec13" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" strokeMiterlimit="10" strokeDasharray="500" strokeDashoffset="500" fill="none" d="M335 38.9c-43.7 0-79.1 35.4-79.1 79.1s35.4 79.1 79.1 79.1 79.1-35.4 79.1-79.1-35.4-79.1-79.1-79.1zM335 182.9c-35.8 0-64.9-29.1-64.9-64.9s29.1-64.9 64.9-64.9 64.9 29.1 64.9 64.9-29.1 64.9-64.9 64.9z"/>
        
        </svg>
      </div>
    </div>
  )
}

export default Preload
