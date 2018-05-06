import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// Ignore 'index.css' until other styles are deemed necessary to insert

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();