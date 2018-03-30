'use strict';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import Routes from '../client/routes'
import path from 'path';
import fs from 'fs';

const filePath = path.normalize('./src/server/index.html');
const index = fs.readFileSync(filePath, 'utf8');

export default ({path}) => {
  const content = renderToString(
    <Router location={path} context={{}}>
      <Routes />
    </Router>
  );
  return index.replace('<!-- ::APP:: -->',content);
}
