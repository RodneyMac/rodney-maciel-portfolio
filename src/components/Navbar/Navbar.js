import React from 'react';
import "../Navbar/Navbar.css";
import {Link} from "react-router-dom";
import logoImage from "../../assets/logo/rod.png";

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='navbar-content'>
        <div className='div-logo'>
          <img src={logoImage} alt="Logo" className='logo'/>
        </div>
        <ul className='nav-links'>
          <Link to="/" className='link-router'><li className='nav-link'>About</li></Link>
          <Link to="/skills" className='link-router'><li className='nav-link'>Skills</li></Link>
          <Link to="/works" className='link-router'><li className='nav-link'>Works</li></Link>
          <Link to="/contact" className='link-router'><li className='nav-link'>Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;