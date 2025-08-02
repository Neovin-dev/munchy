import React from 'react'
import './Navbar.css' // Assuming you have a CSS file for styling
import {assets} from '../../assets/assets' // Adjust the path as necessary

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" />
      <ul className="navbar-menu">
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-cart">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar

