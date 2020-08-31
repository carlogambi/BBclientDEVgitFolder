import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './global-variables-per-device.css'

import './fonts/font-manager.css'

import './styles-components/app.css'

ReactDOM.render(
  
  <App />
  ,
  document.getElementById('root')
  );
  
  serviceWorker.unregister();

