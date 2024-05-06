import React from 'react';
import ReactDOM from 'react-dom';

// Used to show different App on Mobile Devices:
import { BrowserView, MobileView } from 'react-device-detect';

import './index.css';
import App from './App.jsx';
import MobileApp from './MobileApp.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserView>
      <App />
    </BrowserView>
    <MobileView>
      <MobileApp />
    </MobileView>
  </React.StrictMode>,
  document.getElementById('root')
);