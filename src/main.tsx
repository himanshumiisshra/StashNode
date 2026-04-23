import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx'; // Looks for 'export default'
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);