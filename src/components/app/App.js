import React from 'react';
import { useState } from 'react';
import './App.scss';
import Header from '../header/Header';
import About from '../about/About';
import Projects from '../projects/Projects';
import Techs from '../techs/Techs';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from '../../themeContext';

function App() {
  const [ theme, setTheme ] = useState("light");

  const toggleTheme = () => {
    setTheme( theme => ( theme === "light" ? "dark" : "light" ));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/" element={<About />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/techs" element={<Techs />}></Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
