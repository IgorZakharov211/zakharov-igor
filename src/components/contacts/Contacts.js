import React, { useContext } from "react";
import './Contacts.scss';
import { ThemeContext } from "../../themeContext";
import GithubIcon from '../../images/icons/github.svg';
import GmailIcon from '../../images/icons/gmail.svg';
import InstIcon from '../../images/icons/inst.svg';
import TelIcon from '../../images/icons/tel.svg';
import LGithubIcon from '../../images/icons/LightGithub.svg';
import LGmailIcon from '../../images/icons/LightGmail.svg';
import LInstIcon from '../../images/icons/LightInst.svg';
import LTelIcon from '../../images/icons/LightTel.svg';


function Contacts(props){
  const { theme } = useContext(ThemeContext);

  return(
    <section className={`contacts ${props.className}__contacts`}>
      <h3 className={`title contacts__title ${theme === "light" ? "" : "title_dark"}`}>Контакты</h3>
      <ul className="contacts__list">
        <li className="contacts__item">
          <a className={`contacts__link ${theme === "light" ? "" : "contacts__link_dark"}`} href="https://github.com/IgorZakharov211">
            <img className="contacts__img" src={theme === "light" ? GithubIcon : LGithubIcon} alt="GitHub"/>
            @IgorZakharov211    
          </a>
        </li>
        <li className="contacts__item">
          <a className={`contacts__link ${theme === "light" ? "" : "contacts__link_dark"}`} href="mailto:igor1998298@gmail.com">
            <img className="contacts__img" src={theme === "light" ? GmailIcon : LGmailIcon} alt="Gmail"/>
            Igor1998298@gmail.com    
          </a>
        </li>
        <li className="contacts__item">
          <a className={`contacts__link ${theme === "light" ? "" : "contacts__link_dark"}`} href="https://www.instagram.com/igorzakharov211/">
            <img className="contacts__img" src={theme === "light" ? InstIcon : LInstIcon} alt="Instagram"/>
            @igorzakharov211
          </a>
        </li>
        <li className="contacts__item">
          <a className={`contacts__link ${theme === "light" ? "" : "contacts__link_dark"}`} href="https://t.me/ZakharovIgor211">
            <img className="contacts__img" src={theme === "light" ? TelIcon : LTelIcon} alt="Telegram"/>
            @ZakharovIgor211   
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contacts;