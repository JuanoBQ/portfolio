import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Projects from './components/Projects';
import Background from './components/Background';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background/>
    <BrowserRouter>
    <About/>
    <Projects/>
  </BrowserRouter>,
  </React.StrictMode>
);
reportWebVitals();
