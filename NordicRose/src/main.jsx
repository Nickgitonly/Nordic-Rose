import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BlogPage from '@/components/BlogPage.jsx'
import './main.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogPage/>
  </StrictMode>,
)
