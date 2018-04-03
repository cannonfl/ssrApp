'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import reducers from './reducers';
import Routes from './routes';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, {}, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.hydrate(
  <Provider store={store}>
      <Router>
        <Routes />
      </Router>
  </Provider>, 
  document.getElementById('app')
);
