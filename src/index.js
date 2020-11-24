import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';

import 'normalize.css';
import 'animate.css/animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@icon/ionicons/ionicons.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'lightbox2/dist/css/lightbox.min.css';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery.easing/jquery.easing.js';
import 'lightbox2/dist/js/lightbox.min.js';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
