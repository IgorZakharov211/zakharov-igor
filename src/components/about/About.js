import React from 'react';
import './About.scss';
import MyInfo from '../my-info/MyInfo';
import Biography from '../biography/Biography';
import Courses from '../courses/Courses';
import Info from '../info/Info';

function About(){
  return(
    <main className="about">
      <MyInfo className="about"/>
      <Biography className={"about"}/>
      <Courses className={"about"} />
      <Info className={"about"} />
    </main>
  )
}

export default About;