import React from 'react';
import './MyInfo.scss';
import Avatar from '../../images/avatar.jpg';
import { useContext } from 'react';
import { ThemeContext } from '../../themeContext';

function MyInfo(){
  const { theme } = useContext(ThemeContext);

  return(
    <section className={"my-info about__my-info" + " " + (theme === "light" ? "" : "my-info_dark")}>
      <div className="my-info__hi-container">
        <h2 className={"my-info__hi" + " " + (theme === "light" ? "" : "my-info__hi_dark")}>Привет, я начинающий фронтенд-разработчик!</h2>
      </div>
      <div className="my-info__user">
        <p className="my-info__name">Захаров Игорь</p>
        <p className="my-info__subtitle">Люблю CSS и JavaScript, осваиваю React, изучаю TypeScript.</p>
        <img className={"my-info__avatar" + " " + (theme === "light" ? "" : "my-info__avatar_dark")} src={Avatar} alt="Аватар"/>
      </div>
    </section>
  )
}

export default MyInfo;