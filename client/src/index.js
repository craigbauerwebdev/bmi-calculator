import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* 
"postbuild": "mv build ../../../wp-sites/gfd/wp-content/themes/gfd_theme/build/",
"postbuild": "rm -rf ../build && mv build ../",
// production
"postbuild": "rm -rf ../../../wp-sites/gfd/wp-content/themes/gfd_theme/build && mv ../../../wp-sites/gfd/wp-content/themes/gfd_theme/"
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);