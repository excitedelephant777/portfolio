import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import RGB from './RGB'
import Iterative from './Iterative'
import Personas from './Personas'
import Development from './Development'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/rgb" element={<RGB />}/>
      <Route path="/iterative" element={<Iterative />}/>
      <Route path="/personas" element={<Personas />}/>
      <Route path="/development" element={<Development />}/>
    </Routes>
    </Router>
  </React.StrictMode>
);
