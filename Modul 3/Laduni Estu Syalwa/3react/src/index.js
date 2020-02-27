import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StatefullComponent from './component/StatefullComponent';
import LoginPage from './component/LoginPage';

ReactDOM.render(<LoginPage />, document.getElementById('root'));

serviceWorker.unregister();
