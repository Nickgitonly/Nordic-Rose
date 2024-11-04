import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/index.jsx';
import Header from './components/Header/index.jsx';
import BlogPage from '@/components/BlogPage.jsx';
import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);