import './App.scss';
import Header from '../header/Header';
import About from '../about/About';
import Projects from '../projects/Projects';
import Techs from '../techs/Techs';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<About />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/techs" element={<Techs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
