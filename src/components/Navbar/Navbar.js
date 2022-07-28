import React, {useState} from 'react';
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
            <Link to="/about" className='link-logo'>
              <img src={logoImage} alt='logo' width="40"/>
            </Link>
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
  )
}

export default Navbar;