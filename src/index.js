import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import './App.css';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Projects from './components/Projects';
import Background from './components/Background';
import RightPanel from './components/RightPanel';
import Education from './components/Education';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background />
    <RightPanel />
    <HashRouter>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="education"><Education /></div>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
