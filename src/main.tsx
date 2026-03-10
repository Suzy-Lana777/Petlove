import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.scss'; // Імпорт ваших глобальних стилів

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
