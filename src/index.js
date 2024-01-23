// Importing Component from node_modules
import React from 'react';
import ReactDOM from 'react-dom/client';

//  Importing Project-Defined Components
import Router from './components/Router';

// Importing Styles 
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
