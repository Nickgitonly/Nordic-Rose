import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.css';
import StartPage from './components/StartPage';
import SecondPage from './components/SecondPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} /> 
        <Route path="/second" element={<SecondPage />} /> 
      </Routes>
    </Router>
  </StrictMode>
);   

