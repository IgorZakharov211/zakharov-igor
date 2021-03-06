import React, { useContext } from "react";
import './Card.scss';
import { ThemeContext } from "../../themeContext";
import gitHubIcon from '../../images/icons/LightGithub.svg'

function Card(props){
  const { theme } = useContext(ThemeContext);
  const arrOfTechs = props.techs;

  function chooseCardColor(index){
    let className = "";
    if(theme === "dark"){
      if(props.background){
        className = "card_background_dark";
      } else{
        className = "card_dark";
      }
    } else {
      if(props.background){
        className = "card_background"
      } else {
        className = "";
      }
    }
    return className;
  }

  return(
    <li className={`card ${chooseCardColor()}`}>
      <a className="card__link" href={props.link}>
        <img className="card__img" src={props.img} alt={props.name} />
      </a>
      <div className={`card__container ${theme === "light" ? "" : "card__container_dark"}`}>
        <div className="card-name">
          <p className="card-name__title">{props.name}</p>
          <a className={`card-name__github ${theme === "light" ? "" : "card-name__github_dark"}`} href={props.gitHub}>
            <img className="card-name__icon" src={gitHubIcon} alt="github" />
          </a>
        </div>
        <Languages languages={props.languages}/>
        <p className="card__subtitle">{props.description}</p>
        <ul className="card__techs">
          {
            arrOfTechs.map((item) => {
              return(
                <Tech name={item.name} key={item.index}/>
              )
            })
          }
        </ul>
      </div>
    </li>
  )
}

function Languages(props){
  const languagesList = props.languages;
  const { theme } = useContext(ThemeContext);

  return(
    <div className={`languages card__languages ${theme === "light" ? "" : "languages_dark"}`}>
      <div className="languages__bar">
        {
          languagesList.map((item) => {
            return(
              <LanguagesBarFullness key={item.index} name={item.name} percent={item.percent}/>
            )
          })  
        }
      </div>
      <ul className="languages__list">
        {
          languagesList.map((item) => {
            return(
              <LanguageBarItem key={item.index} name={item.name} percent={item.percent} />
            )
          })
        }
      </ul>
    </div>
  )
}

function LanguageBarItem(props){
  const curcleColor = props.name.toLowerCase();

  return(
    <li className="languages__item">
      <div className={`languages__curcle languages__curcle_${curcleColor}`}></div>
      <p className="languages__name">{props.name}</p>
      <p className="languages__percent">{props.percent}</p>
    </li>
  )
}

function LanguagesBarFullness(props){
  const fullnessColor = props.name.toLowerCase();
  const percent = `${props.percent}%`;
  
  return(
    <div className={`languages__fullness languages__fullness_${fullnessColor}`} style={{width: percent}}></div>
  )
}

function Tech(props){
  const { theme } = useContext(ThemeContext);
  return(
    <li className={`card__tech ${theme === "light" ? "" : "card__tech_dark"}`} >
      {props.name}
    </li>
  )
}

export default Card;