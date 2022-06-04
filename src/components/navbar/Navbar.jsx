import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#projects">Projects</a></p>
  <p><a href="#workingOn">Working On</a></p>
  </>
)

const Navbar = () => {
  return (
    <div className='websiteNavbar'>
      <div className='websiteNavbarLinks'>
        <div className='websiteNavbarLogo'>
          <img src={logo} alt = "logo" />
        </div>
        <div className='websiteNavbarLinksContainer'>
          <Menu />
        </div>
      </div>
      <div className='websiteNavbarMenu'>
        <div className='websiteNavbarMenuContainer'>
          <div className='websiteNavbarMenuContainerLinks'>
            <Menu />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar