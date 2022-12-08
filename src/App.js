import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from './About';
import RGB from './RGB'
import Iterative from './Iterative'
import Personas from './Personas'
import Development from './Development'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/rgb" element={<RGB />}/>
        <Route path="/iterative" element={<Iterative />}/>
        <Route path="/personas" element={<Personas />}/>
        <Route path="/development" element={<Development />}/>
      </Routes>
    </Router>
  );
}

export default App;
