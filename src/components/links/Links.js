import React from "react";
import './Links.scss';
import { useContext } from "react";
import { ThemeContext } from "../../themeContext";

function Links(props){
  const { theme } = useContext(ThemeContext);
  const list = props.list;

  return(
    <div className="links">
      <p2 className="links__subtitle">{props.subtitle}</p2>
      <ul className={`links__list ${theme === "light" ? "" : "links__list_dark"}`}>
        {
          list.map((item) => {
            return Link(item)
          })
        }
      </ul>
    </div>
  )
}

function Link(item){
  const { theme } = useContext(ThemeContext);
  
  return(
    <li className="links__item" key={item.id}>
      <a className={`links__link ${theme === "light" ? "" : "links__link_dark"}`} href={item.link}>{item.name}</a>
    </li>
  )
}

export default Links;