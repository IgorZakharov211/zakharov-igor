import React from "react";
import './Hobby.scss';
import { useContext } from "react";
import { ThemeContext } from "../../themeContext";

function Hobby(props){
  const { theme } = useContext(ThemeContext);

  return(
    <section className={`hobby ${props.className}__hobby `}>
      <h3 className={`title hobby__title ${theme === "light" ? "" : "title_dark"}`}>Увлечения</h3>
      <p className={`subtitle ${theme === "light" ? "" : "subtitle_dark"}`}>
        В свободное время занимаюсь спортом: велопрогулки, занятия в зале, спорт площадки.
        Увлекаюсь формулой 1, мечтаю попасть на гран-при, прикоснутся в живую, ближайшие планы Сочи 2022, 
        в дальнейшем надеюсь попасть и на заграничные этапы.
        Когда времени чуть больше - путешествую. 
        Люблю активные путешествия, побольше городов, гор и необычных мест.</p>
    </section>
  )
}

export default Hobby;