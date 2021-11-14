import React from 'react';
import { useContext } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import Logo from '../logo/Logo';
import DarkIcon from '../../images/icons/dark.png';
import LightIcon from '../../images/icons/light.png';
import { ThemeContext } from '../../themeContext';

function Header(){
  const { theme, toggleTheme } = useContext(ThemeContext)

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
        <button className={"header__theme-button" + " " + (theme === "light" ? "" : "header__theme-button_dark")} onClick={toggleTheme}>
          <img className="header__theme-img" src={theme === "light" ? DarkIcon : LightIcon } alt="Темный режимы"/>
        </button>
      </div>
    </header>
  )
}

export default Header;