import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {ContextApi} from './Components/ContextApi'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextApi>
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </ContextApi>
);

