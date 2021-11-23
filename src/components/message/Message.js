import React, { useContext } from "react";
import './Message.scss';
import { ThemeContext } from "../../themeContext";


function Message(props){

  const { theme } = useContext(ThemeContext);

  return(
    <div className={`message ${props.className}__message`}>
      <h2 className={`message__subtitle ${ theme === "light" ? "" : "message__subtitle_dark"}`}>{props.text}</h2>
    </div>
  )
}

export default Message;