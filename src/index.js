import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {browserRouter} from 'react-router-dom'

ReactDOM.render(
  <browserRouter>
    <App />
  </browserRouter>,
  document.getElementById('root')
);

reportWebVitals();
