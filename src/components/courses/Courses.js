import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './Courses.scss';
import ArrowIcon from '../../images/icons/arrow.svg';
import { ThemeContext } from "../../themeContext";


import HTMLIcon from '../../images/icons/techs/html.png';
import CSSIcon from '../../images/icons/techs/css.png';
import JSIcon from '../../images/icons/techs/javascript.png';
import ReactIcon from '../../images/icons/techs/react.png';
import GITIcon from '../../images/icons/techs/git.png';
import darkGITIcom from '../../images/icons/techs/dark-git.png';
import NodeIcon from '../../images/icons/techs/nodejs.png';
import ExpressIcon from '../../images/icons/techs/express.png';
import darkExpressIcon from '../../images/icons/techs/dark-express.png';
import mongoDBIcon from '../../images/icons/techs/mongodb.png';
import VSCodeIcon from '../../images/icons/techs/vscode.png';
import WebpackIcon from '../../images/icons/techs/webpack.png';
import lightWebpackIcon from '../../images/icons/techs/light-webpack.png';
import GithubIcon from '../../images/icons/techs/github.svg';
import darkGithubIcon from '../../images/icons/techs/dark-github.svg';
import SassIcon from '../../images/icons/techs/sass.png';



function Courses(props){

  const { theme } = useContext(ThemeContext);
  
  const techsList = [
    {
      key: 1,
      alt: "HTML",
      src: HTMLIcon
    },
    {
      key: 2,
      alt: "CSS",
      src: CSSIcon
    },
    {
      key: 3,
      alt: "JavaScript",
      src: JSIcon
    },
    {
      key: 4,
      alt: "React",
      src: ReactIcon
    },
    {
      key: 5,
      alt: "GIT",
      src: (theme === "light" ? GITIcon : darkGITIcom)
    },
    {
      key: 6, 
      alt: "Node.js",
      src: NodeIcon
    },
    {
      key: 7,
      alt: "Express.js",
      src: (theme === "light" ? ExpressIcon : darkExpressIcon)
    },
    {
      key: 8, 
      alt: "mongoDB",
      src: mongoDBIcon
    },
    {
      key: 9,
      alt: "VSCode",
      src: VSCodeIcon
    },
    {
      key: 10, 
      alt: "Webpack",
      src: (theme === "light" ? lightWebpackIcon : WebpackIcon)
    },
    {
      key: 11, 
      alt: "GitHub",
      src: (theme === "light" ? GithubIcon : darkGithubIcon)
    },
    {
      key: 12,
      alt: "Sass",
      src: SassIcon
    }
  ];


  return(
    <section className={`courses ${props.className}__courses ${theme === "light" ? "" : "courses_dark"}`}>
      <div className="courses__container">
      <h3 
        className={`title courses__title ${theme === "light" ? "" : "title_dark"}`}>
        Освоенные технологии и инструменты</h3>
      <ul className="courses__list">
        {
        techsList.map((i) => {
          return CoursesItem({key: i.key, src: i.src, alt: i.alt});
        })
       }
      </ul>
      <Link exact="true" to="/projects" className={`courses__link ${theme === "light" ? "" : "courses__link_dark"}`} alt="Перейти к проектам">
        Учебные проекты
        <img src={ArrowIcon} alt="Стрелка перехода" className="courses__icon"/>
      </Link>
      </div>
    </section>
  )
}

function CoursesItem({key, src, alt}){

  const { theme } = useContext(ThemeContext);

  return(
    <li key={key} className={`courses__item ${theme === "light" ? "" : "courses__item_dark"}`}>
      <img className="courses__img" src={src} alt={alt} />
    </li>
  )
}

export default Courses;