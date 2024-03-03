import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SetUp from './tutorials/6-useReducer'

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className="container">
      <h2>render</h2>
      <SetUp/>
    </div>
  </React.StrictMode>  
);