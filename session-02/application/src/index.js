import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NetflixIndexComponent from './components/NetflixIndexComponent';
import { NetflixHeaderComponent } from './components/NetflixHeaderComponent';
import { NetflixFooterComponent } from './components/NetflixFooterComponent';
import { NetflixMainComponent } from './components/NetflixMainComponent';
import { NetflixRegisterComponent } from './components/NetflixRegisterComponent';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css' 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NetflixIndexComponent />
    {/* <NetflixRegisterComponent /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
