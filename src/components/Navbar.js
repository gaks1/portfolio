import React, { useState } from 'react';
import Logo from '../img/Logo.png';
import Close from '../img/close.svg';
import Menu from '../img/menu.svg';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" className='logo'/>
      <div className="links">
        <a href="#portfolio" className="nav-list">
          Portfolio
        </a>
        <a href="#about" className="nav-list">
          About
        </a>
        <a href="#contact" className="nav-list">
          Contact
        </a>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <img src={ Menu } alt="menu" className='menu-img' />
        <div className={`nav-ham-menu ${isMenuOpen ? 'open' : ''}`}>
        <img src={ Close } alt="menu" className='close-img' onClick={toggleMenu}/>
        <ul>
            <li>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
