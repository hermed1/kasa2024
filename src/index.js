import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
// Définition des routes avec createBrowserRouter

// Rendu de l'application avec RouterProvider
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
