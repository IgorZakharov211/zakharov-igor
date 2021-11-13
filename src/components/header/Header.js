import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/Logo';

function Header(){
  let activeStyle = {
    fontWeight: 600
  };

  return(
    <header className="header">
      <div className="header__container">
        <div className="header__left-column">
          <Logo />
          <nav className="header__navigation">
            <ul className="header__pages">
              <li className="header__page">
                <NavLink exact="true" to="/" className="header__link" style={({ isActive }) => isActive ? activeStyle : undefined}>О себе</NavLink>
              </li>
              <li className="header__page">
                <NavLink to="techs" className="header__link" style={({ isActive }) => isActive ? activeStyle : undefined}>Технологии</NavLink>
              </li>
              <li className="header__page">
                <NavLink to="projects" className="header__link" style={({ isActive }) => isActive ? activeStyle : undefined}>Работы</NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <button className="header__theme-button">Тема</button>
      </div>
    </header>
  )
}

export default Header;