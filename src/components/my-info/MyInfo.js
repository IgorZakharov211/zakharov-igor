import React from 'react';
import './MyInfo.scss';
import Avatar from '../../images/avatar.jpg';
import { useContext } from 'react';
import { ThemeContext } from '../../themeContext';
import Message from '../message/Message';

function MyInfo(props){
  const { theme } = useContext(ThemeContext);

  return(
    <section className={`my-info ${props.className}__my-info ${(theme === "light" ? "" : "my-info_dark")}`}>
      <Message className="my-info" text="Привет, я начинающий фронтенд-разработчик!" />
      <div className="my-info__user">
        <p className="my-info__name">Захаров Игорь</p>
        <p className="my-info__subtitle">Люблю CSS и JavaScript, осваиваю React, изучаю TypeScript.</p>
        <img className={`my-info__avatar ${(theme === "light" ? "" : "my-info__avatar_dark")}`} src={Avatar} alt="Аватар"/>
      </div>
    </section>
  )
}

export default MyInfo;