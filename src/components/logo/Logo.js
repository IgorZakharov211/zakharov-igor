import React from "react";
import './Logo.scss';
import { Link } from 'react-router-dom';
import LogoImg from '../../images/logo.svg';

function Logo(){
  return(
    <div className="logo">
      <Link to="/" className="logo__link">
        <img src={LogoImg} alt="Захаров Игорь(логотип)" className="logo__img"/>
      </Link> 
    </div>
  )
}

export default Logo;