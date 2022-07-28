import React, {useState} from 'react';
import "../Navbar/Navbar.css";
import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from './Navbar.elements';
import {Link} from "react-router-dom";
import logoImage from "../../assets/logo/rod.png";
import {FaBars, FaTimes} from "react-icons/fa";
import {IconContext} from "react-icons";

const Navbar = () => {

  const [showMobile, setShowMobile] = useState(false);

  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{style: {fontSize: "2em"}}}>
          <LogoContainer>
            <img src={logoImage} alt='logo' width="40"/>
          </LogoContainer>
          <MobileIcon onClick={() => setShowMobile(!showMobile)}>
            {showMobile ? <FaTimes/> : <FaBars/>}
          </MobileIcon>
          <Menu open={showMobile}>
            <MenuItem>
              <Link to="/about" className='link'>
                <MenuItemLink onClick={() => setShowMobile(!showMobile)}>About</MenuItemLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/skills" className='link'>
                <MenuItemLink onClick={() => setShowMobile(!showMobile)}>Skills</MenuItemLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/works" className='link'>
                <MenuItemLink onClick={() => setShowMobile(!showMobile)}>Works</MenuItemLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contact" className='link'>
                <MenuItemLink onClick={() => setShowMobile(!showMobile)}>Contact</MenuItemLink>
              </Link>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>

    // <div className='navbar-container'>
    //   <div className='navbar-content' id="nav">
    //     <div className='div-logo'>
    //       <img src={logoImage} alt="Logo" className='logo'/>
    //     </div>
    //     <ul className="nav-links">
    //       <Link to="/" className='link-router'><li className='nav-link'>About</li></Link>
    //       <Link to="/skills" className='link-router'><li className='nav-link'>Skills</li></Link>
    //       <Link to="/works" className='link-router'><li className='nav-link'>Works</li></Link>
    //       <Link to="/contact" className='link-router'><li className='nav-link'>Contact</li></Link>
    //     </ul>
    //     <a href="#nav" className="nav-hamburger"><FaBars className="nav-icon"/></a>
    //     <a href="#close-nav" className="nav-close"><FaTimes className="nav-icon"/></a>
    //   </div>
    // </div>
  )
}

export default Navbar;