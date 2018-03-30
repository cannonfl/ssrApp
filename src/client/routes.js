'use strict';
import React, { Component } from "react";
import {Route} from "react-router-dom";
import Home from './components/home';

export default () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/hi' component={() => (<h1>HI</h1>)} />
    </div>
  );
};
