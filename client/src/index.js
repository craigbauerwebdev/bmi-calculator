import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* 
"postbuild": "mv build ../../../wp-sites/gfd/wp-content/themes/gfd_theme/build/",

*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);