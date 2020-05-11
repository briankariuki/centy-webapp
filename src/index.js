import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css";
import "./App.css";
import App from './App';
import store from "./store";

ReactDOM.render(<App store={store} />, document.getElementById("root"));

