import React from "react";
import './Biography.scss';
import { useContext } from 'react';
import { ThemeContext } from "../../themeContext";

function Biography(props){

  const { theme } = useContext(ThemeContext);

  return(
    <section className={`biography ${props.className}__biography`}>
      <h3 className={`title biography__title ${theme === "light" ? "" : "title_dark"}`}>О себе</h3>
      <p className={`subtitle ${theme === "light" ? "" : "subtitle_dark"}`}>Увлекся Front-end-ом пока учился в колледже. 
      После простеньких, лэндингов и небольших игр на JS, понял, что хочу больше. 
      Стал погружаться в мир разработки, сначала сам (learn.JavaScript, уроки на YouTube), 
      а потом и с помощью курсов от Яндекса. Во время обучения, по мимо верстки, 
      JavaScript и React’a, также освоил Node.js, Webpack и GIT.
      Во Frontend нравится визуальная часть, возможность круто реализовать дизайна и 
      наглядность проделанной работы.</p>
    </section>
  )
}

export default Biography;