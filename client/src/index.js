import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './app.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App className='body' />
  </React.StrictMode>
);

