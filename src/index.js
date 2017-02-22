import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer';
import { updateAll } from './Actions';

const enhancer = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  reducer,
  enhancer
);

store.dispatch(updateAll())

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
