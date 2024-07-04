import React from 'react'
import './navbar.scss'
import logo from '../../styles/src/images/logo.png'

const Navbar = () => {
  return (
     <div className='nav'>
      <div className='nav-logo'>
      <img src={logo} alt="main" />
      Sunollo
      </div>
      <div className='navmenu'>
        <p>Home<sup>  </sup></p>
        <p>About<sup>  </sup></p>
        <p>GreenStores<sup>Tm</sup></p>
        <p>Blog<sup>  </sup></p>
        <button className='navbut' >Get Started</button>
      </div>
    </div>
  )
}

export default Navbar