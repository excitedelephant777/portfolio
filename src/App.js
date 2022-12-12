import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from './About';
import RGB from './RGB'
import Iterative from './Iterative'
import Personas from './Personas'
import Development from './Development'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/rgb" element={<RGB />}/>
        <Route exact path="/iterative" element={<Iterative />}/>
        <Route exact path="/personas" element={<Personas />}/>
        <Route exact path="/development" element={<Development />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
