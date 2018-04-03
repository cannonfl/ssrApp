'use strict';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter as Router } from 'react-router-dom';
import Routes from '../client/routes'
import path from 'path';
import fs from 'fs';
import reducers from '../client/reducers';

const filePath = path.normalize('./src/server/index.html');
const index = fs.readFileSync(filePath, 'utf8');

const store = createStore(reducers, {})

export default ({path}) => {
  const content = renderToString(
    <Provider store={store}>
      <Router location={path} context={{}}>
        <Routes />
      </Router>
    </Provider>
  );
  return index.replace('<!-- ::APP:: -->',content);
}
