'use strict';
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from './components/header';
import Login from './components/login';

const Landing = () => <h1>Landing</h1>;
const Dashboard = () => <h1>Dashboard</h1>;
const SurveyNew = () => <h1>Survey New</h1>;

export default () => {
  return (
    <div className='container'>
      <Header />
      <Route exact path='/' component={Landing} />
      <Route path='/login' component={Login} />
      <Route exact path='/surveys' component={Dashboard} />
      <Route path='/surveys/new' component={SurveyNew} />
    </div>
  );
};
