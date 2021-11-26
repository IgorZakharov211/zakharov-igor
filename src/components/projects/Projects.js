import React, { useContext } from 'react';
import './Projects.scss';
import Message from '../message/Message';
import { ThemeContext } from '../../themeContext';
import Card from '../card/Card';
import { projectsList, petProjectsList } from '../../utils/Lists';

function Projects(){
  
  const { theme } = useContext(ThemeContext);
  return(
    <main className="projects">
      <Message className="projects" text="Примеры моих работ!" />
      <div className={`projects__background ${theme === "light" ? "" : "projects__background_dark"}`}>
        <div className="projects__container">
          <h2 className={`title projects__title ${theme === "light" ? "" : "title_dark"}`}>Учебные проекты</h2>
          <ul className="projects__list">
            {
              projectsList.map((item) => {
                return (
                <Card 
                key= { item.index }
                name = { item.name } 
                description = { item.description }
                techs = { item.techs}
                img = { item.img }
                languages = { item.languages }
                link = { item.link }
                gitHub = { item.gitHub }
                background = { true }
                />
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="projects__container">
        <h2 className={`title projects__title ${theme === "light" ? "" : "title_dark"}`}>Pet проекты</h2>
          <ul className="projects__list">
            {
              petProjectsList.map((item) => {
                return (
                <Card 
                key= { item.index }
                name = { item.name } 
                description = { item.description }
                techs = { item.techs}
                img = { item.img }
                languages = { item.languages }
                link = { item.link }
                gitHub = { item.gitHub }
                background = { false }
                />
                )
              })
            }
          </ul>
      </div>
    </main>
  )
}


export default Projects;