import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import allReducers from "./reducers/indexIn";
import WebPage from "./components/Cars/WebPage/WebPage";
import CounterButton, {Lesson,Counter, Button} from "./components/WebDev/Counter/Leason/Leason";

const store = createStore (allReducers);

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
