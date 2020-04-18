import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StatefullComponent from './component/StatefullComponent';
import LoginPage from './component/LoginPage';
import BlogPost from './container/BlogPost/BlogPost';

ReactDOM.render(<BlogPost />, document.getElementById('content'));

serviceWorker.unregister();
