import React, { useState } from 'react';
import CloseIcon from '../images/close';
import MenuIcon from '../images/menu';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return(
    <div className="nav">
      <button className="nav-toggle" onClick={toggleDropdown}>
        {isOpen  ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <a href="#intro">Intro</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Nav;