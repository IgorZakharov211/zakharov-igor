import React, { useState } from "react";
import { useContext } from "react";
import './Info.scss';
import { ThemeContext } from '../../themeContext';

function Info(props){

  const [noteIndex, setNoteIndex] = useState(1);
  
  const { theme } = useContext(ThemeContext);

  const NotesList = [
    {
      index: 1, 
      subtitle: "Позволила по новому взглянуть на проблемы оптимального выбора алгоритмов и оценкой их сложности под конкретную задачу."
    },
    {
      index: 2, 
      subtitle: "Возвращаюсь к ней, когда сталкиваюсь с непониманием в тех или иных областях."
    },
    {
      index: 3,
      subtitle: "Книга очень объемная, невозможно проглотить ее быстро, изучаю постепенно."
    }
  ];

  function buttonClickHandler(e){
    if(e.target.id){
      setNoteIndex(Number(e.target.id))
    } else{
      setNoteIndex(Number(e.target.parentElement.id))
    }
  }

  return(
    <section className={`info ${props.className}__info ${theme === "light" ? "" : "info_dark"}`}>
      <h3 className={`title info__title ${theme === "light" ? "" : "title_dark"}`}>Источники вдохновения и информации</h3>
      <div className="info__books">
        <p className="info__subtitle info__subtitle_books">По мимо курсов изучал специализированную литературу:</p>
        <ul className="info__list">
          <li className="info__item">
            <button 
              className={
                `info__button ${
                  (theme === "light" && noteIndex === 1) ? "info__button_active" : 
                  (theme === "dark" && noteIndex === 1) ? "info__button_active_dark" : 
                  (theme === "dark" && noteIndex !== 1) ? "info__button_dark": 
                  ""
                }`} 
              id="1" 
              onClick={buttonClickHandler}>
              <span className="info__span">Грокаем алгоритмы</span><br/>
              Адитья Бхаргава
            </button>
          </li>
          <li className="info__item">
            <button 
              className={
                `info__button ${
                  (theme === "light" && noteIndex === 2) ? "info__button_active" : 
                  (theme === "dark" && noteIndex === 2) ? "info__button_active_dark" : 
                  (theme === "dark" && noteIndex !== 2) ? "info__button_dark": 
                  ""
                }`} 
              id="2" 
              onClick={buttonClickHandler}>
              <span className="info__span">Выразительный JavaScript</span><br />
              Марейн Хавербеке
            </button>
          </li>
          <li className="info__item">
            <button 
              className={
                `info__button ${
                  (theme === "light" && noteIndex === 3) ? "info__button_active" : 
                  (theme === "dark" && noteIndex === 3) ? "info__button_active_dark" : 
                  (theme === "dark" && noteIndex !== 3) ? "info__button_dark": 
                  ""
                }`}  
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