import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import AppRedux from './App-redux';
import reducers from './redux/reducers';

/* 
//static page one level up
"postbuild": "rm -rf ../build && mv build ../",
// production
"postbuild": "rm -rf ../../../wp-sites/gfd/wp-content/themes/gfd_theme/build && mv build ../../../wp-sites/gfd/wp-content/themes/gfd_theme/"
*/

const store = createStore(reducers/* , applyMiddleware(thunk) */);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRedux />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);