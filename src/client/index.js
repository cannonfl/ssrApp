'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reducers from './reducers';
import Routes from './routes';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.hydrate(
  <Provider store={store}>
      <Router>
        <Routes />
      </Router>
  </Provider>, 
  document.getElementById('app')
);
