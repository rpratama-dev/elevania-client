import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import ProductStore from './store/ProductStore';
import UserStore from './store/UserStore';
import SyncStore from './store/SyncStore';

const productStore = new ProductStore();
const userStore = new UserStore();
const syncStore = new SyncStore();

const store = { productStore, userStore, syncStore };
ReactDOM.render(
  <BrowserRouter>
    <App {...store} />
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
