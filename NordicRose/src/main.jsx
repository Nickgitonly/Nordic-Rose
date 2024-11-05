import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeaderNews from './HeaderNews/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderNews />
  </StrictMode>,
)
