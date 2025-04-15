import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Design from './components/parent/parent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Design/>
  </StrictMode>,
)
