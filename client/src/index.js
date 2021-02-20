import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import "./scss/style.scss";
import { App } from './App';
import { store } from "./redux/reduser";

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);

