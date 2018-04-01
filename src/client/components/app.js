'use strict';
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <p>I'm the App Component</p>
        <a href="http://localhost:5150/auth/google">Sign In With Google</a>
      </div>
    );
  };
};

export default Home;
