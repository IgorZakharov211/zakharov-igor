import React from 'react';
import './About.scss';
import MyInfo from '../my-info/MyInfo';
import Biography from '../biography/Biography';

function About(){
  return(
    <main className="about">
      <MyInfo className="about"/>
      <Biography className={"about"}/>
    </main>
  )
}

export default About;