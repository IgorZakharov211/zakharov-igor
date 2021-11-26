import React from "react";
import { useContext } from "react";
import './Logo.scss';
import { Link } from 'react-router-dom';
import LogoImg from '../../images/logo.svg';
import DarkLogoImg from '../../images/logo-dark.svg';
import mobileLogoImg from '../../images/mobileLogo.svg';
import darkMobileLogoImg from '../../images/mobileLogo-dark.svg';
import { ThemeContext } from '../../themeContext';


function Logo(){
  const { theme } = useContext(ThemeContext);
  return(
    <div className="logo">
      <Link to="/" className="logo__link">
        <img src={theme === "light" ? LogoImg : DarkLogoImg } alt="Захаров Игорь(логотип)" className="logo__img"/>
        <div className={`logo__container ${theme === "light" ? "" : "logo__container_dark"}`}>
        <img src={theme === "light" ? mobileLogoImg : darkMobileLogoImg} alt="Захаров Игорь(логотип)" className="logo__mobile-img" />
        </div>
      </Link> 
    </div>
  )
}

export default Logo;