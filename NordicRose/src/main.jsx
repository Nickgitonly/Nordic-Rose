import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Nav from './components/Nav/index.jsx';
import BlogPage from '@/components/BlogPage.jsx';
import './main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Nav />
  <BlogPage/>
  </StrictMode>,
)
