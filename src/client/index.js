import React, { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./routes";

ReactDOM.hydrate(
  <Router>
    <Routes />
  </Router>, 
  document.getElementById("app")
);
