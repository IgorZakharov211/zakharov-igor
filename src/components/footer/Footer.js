import React, { useContext } from "react";
import './Footer.scss';
import { ThemeContext } from "../../themeContext";
import GithubIcon from '../../images/icons/LighterGithub.svg';

function Footer(){
  const { theme } = useContext(ThemeContext);
  
  return(
    <footer className={`footer ${theme === "light" ? "" : "footer_dark"}`}>
      <div className="footer__container">
        <p className="footer__copyright">@ 2021 Zakharov Igor. All Rights Reserved.</p>
        <a className={`footer__link ${theme === "light" ? "" : "footer__link_dark"}`} href="https://github.com/IgorZakharov211/zakharov-igor">
          <img className="footer__img" src={GithubIcon} alt="GitHub" />
        </a>
      </div>
    </footer>
  )
}

export default Footer;