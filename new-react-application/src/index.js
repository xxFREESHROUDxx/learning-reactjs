import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test';
import Person from './Person';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test name='Baibhav' age='24'>
      This is a new data
    </Test>
    <Test name='Bipin' age='23' />
    <Test name='Surya' age='25' />
    <Person />
  </React.StrictMode>
);
