import React, { useState } from "react";
import { useContext } from "react";
import './Info.scss';
import { ThemeContext } from '../../themeContext';
import Links from "../links/Links";
import { NotesList, OtherList, YouTubeList } from '../../utils/Lists';

function Info(props){

  const [noteIndex, setNoteIndex] = useState(1);
  
  const { theme } = useContext(ThemeContext);

  function buttonClickHandler(e){
    if(e.target.id){
      setNoteIndex(Number(e.target.id))
    } else{
      setNoteIndex(Number(e.target.parentElement.id))
    }
  }

  function chooseClassButton(index){
    let className = "";
    if(theme === "dark"){
      if(noteIndex === index){
        className = "info__button_active_dark";
      } else{
        className = "info__button_dark";
      }
    } else {
      if(noteIndex === index){
        className = "info__button_active"
      } else {
        className = "";
      }
    }
    return className;
  }

  return(
    <section className={`info ${props.className}__info ${theme === "light" ? "" : "info_dark"}`}>
      <div className="info__container">
        <h3 className={`title info__title ${theme === "light" ? "" : "title_dark"}`}>Источники вдохновения и информации</h3>
        <div className="info__books">
          <p className="info__subtitle">По мимо курсов изучал специализированную литературу:</p>
          <ul className="info__list">
            <li className="info__item">
              <button 
                className={`info__button ${chooseClassButton(1)}`} 
                id="1" 
                onClick={buttonClickHandler}>
                <span className="info__span">Грокаем алгоритмы</span><br/>
                Адитья Бхаргава
              </button>
            </li>
            <li className="info__item">
              <button 
                className={`info__button ${chooseClassButton(2)}`} 
                id="2" 
                onClick={buttonClickHandler}>
                <span className="info__span">Выразительный JavaScript</span><br />
                Марейн Хавербеке
              </button>
            </li>
            <li className="info__item">
              <button 
                className={`info__button ${chooseClassButton(3)}`} 
                id="3" 
                onClick={buttonClickHandler}>
                <span className="info__span">Совершенный код</span><br />
                С. Макконнелл
              </button>
            </li>
          </ul>
          <div className="info__note-container">
            {
              (NotesList.filter((i) => i.index === noteIndex)) ? NoteItem(NotesList.filter((i) => i.index === noteIndex)[0].subtitle) : NoteItem("Позволила по новому взглянуть на проблемы оптимального выбора алгоритмов и оценкой их сложности под конкретную задачу.")
            }
          </div>
        </div>
        <Links subtitle="Онлайн ресурсы:" list={OtherList} / >
        <Links subtitle="YouTube каналы и подскасты:" list={YouTubeList} / >
      </div>
    </section>
  )
}

function NoteItem(note){

  const { theme } = useContext(ThemeContext);

  return(
    <p className={`info__note ${theme === "light" ? "" : "info__note_dark"}`}>{note}</p>
  )
}

export default Info;