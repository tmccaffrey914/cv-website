import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserView, MobileView } from 'react-device-detect';

import './index.css';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserView>
      <App />
    </BrowserView>
  </React.StrictMode>,
  document.getElementById('root')
);