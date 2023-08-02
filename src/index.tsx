import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ["Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"],
  },
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);