import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="header-container">
        <p className="header-text">𝗣𝗘𝗟𝗜𝗣𝗟𝗨𝗦</p>
        <img 
          className="menu-icon" 
          src="https://img.icons8.com/?size=100&id=ZmsyfshyA9PA&format=png&color=000000" 
          alt="Menu Icon" 
          onClick={toggleMenu} 
        />
        {isMenuOpen && (
          <div className="dropdown-menu">
            <ul>
            
              <li> <Link to={'./home'}>Home</Link></li>
              <li> <Link to={'/pageAnimada'}>Animada</Link></li>
              <li><a href="#comedia">Comedia</a></li>
              <li><a href="#cienciaF">Ciencia Ficción</a></li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
