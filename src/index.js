import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './normalize.css';
import './c3.css';
import './skeleton.css';
import './index.css';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer';
import {
  updateAll,
  updateSize
} from './Actions';

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  reducer,
  enhancer
);

var update = function() {
  store.dispatch(updateAll());
  setTimeout(update, 60000);
}

window.addEventListener('resize', () => {
  store.dispatch(updateSize());
})

// store.dispatch(updateAll())
update();

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
