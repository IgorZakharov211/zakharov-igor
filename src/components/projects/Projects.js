import React, { useContext } from 'react';
import './Projects.scss';
import Message from '../message/Message';
import { ThemeContext } from '../../themeContext';
import howToLearnImg from '../../images/projects/howToLearn.jpg';
import russianTravelImg from '../../images/projects/russianTravel.jpg';
import Card from '../card/Card';


function Projects(){
  const projectsList = [
    {
      index: 1,
      name: "Научиться учиться",
      description: "Проект представляет собой типовой одностраничный сайт, на котором рассказывается о современных и эффективных подходах к обучению.",
      techs: [
        {
          index: 1,
          name: "HTML",
        },
        {
          index: 2,
          name: "CSS",
        },
        {
          index: 3,
          name: "VSCode"
        },
        {
          index: 4,
          name: "БЭМ"
        }
      ],
      img: howToLearnImg,
      languages: [
        {
          index: 1,
          name: "HTML",
          percent: 55.5
        },
        {
          index: 2,
          name: "CSS",
          percent: 44.5
        }
      ],
      link: "https://igorzakharov211.github.io/how-to-learn/",
      gitHub: "https://github.com/IgorZakharov211/how-to-learn"
    },
    {
      index: 2,
      name: "Путешествия по России",
      description: "Проект представляет собой адаптивный одностраничный сайт, на котором рассказывается о путешествиях по России.",
      techs: [
        {
          index: 1,
          name: "HTML"
        },
        {
          index: 2,
          name: "CSS"
        },
        {
          index: 3,
          name: "VSCode"
        },
        {
          index: 4,
          name: "БЭМ"
        }
      ],
      img: russianTravelImg,
      languages: [
        {
          index: 1,
          name: "CSS",
          percent: 56.4
        },
        {
          index: 2,
          name: "HTML",
          percent: 43.6
        }
      ],
      link: "https://igorzakharov211.github.io/russian-travel/",
      gitHub: "https://github.com/IgorZakharov211/russian-travel"
    }
  ]
  

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
                />
                )
              })
            }
          </ul>
        </div>
      </div>
    </main>
  )
}


export default Projects;