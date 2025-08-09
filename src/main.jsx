import React from 'react';
import { createRoot } from 'react-dom/client';
import PersonalPortfolio from './PersonalPortfolio.jsx';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element with id "root" not found in index.html');
}

createRoot(rootElement).render(
  <React.StrictMode>
    <PersonalPortfolio />
  </React.StrictMode>
);


