import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import './Courses.scss';
import ArrowIcon from '../../images/icons/arrow.svg';
import { ThemeContext } from "../../themeContext";

function Courses(props){

  const { theme } = useContext(ThemeContext);
  const coursesList = ["HTML", "CSS", "JavaScript", "React", "GIT", "Express.js", "mongoDB"]

  return(
    <section className={`courses ${props.className}__courses`}>
      <h3 
        className={`title courses__title ${theme === "light" ? "" : "title_dark"}`}>
        Технологии освоенные на курсах</h3>
      <ul className="courses__list">
        {
        coursesList.map((i) => {
          return CoursesItem(i);
        })
       }
      </ul>
      <Link exact to="/projects" className={`courses__link ${theme === "light" ? "" : "courses__link_dark"}`} alt="Перейти к проектам">
        Учебные проекты
        <img src={ArrowIcon} alt="Стрелка перехода" className="courses__icon"/>
      </Link>
    </section>
  )
}

function CoursesItem(name){

  const { theme } = useContext(ThemeContext);

  return(
    <li className={`courses__item ${theme === "light" ? "" : "courses__item_dark"}`}>{name}</li>
  )
}

export default Courses;