import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { configureStore } from '@reduxjs/toolkit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Provider store={ store }>
    <App />
    </Provider>
  </React.StrictMode>
);


