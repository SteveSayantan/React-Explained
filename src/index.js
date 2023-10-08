import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SetUp from './tutorials/3-conditional-rendering/show-hide'

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <div className="container">
      <SetUp/>
    </div>
  </React.StrictMode>  
);