'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginGoogle } from "../actions/auth";

class Login extends Component {
  handleGoogleLogin(e) {
    e.preventDefault();
    this.props.loginGoogle();

  }
  render() {
    if (this.props.auth.user) {
      return (<Redirect to="/" />);
    }
    return (
      <div className="container">
        <a onClick={(e) => this.handleGoogleLogin(e)} className="waves-effect waves-light btn">Login Using Google</a>
      </div>
    )
  }
}

Login.proptTypes = {
  loginGoogle: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  loginGoogle: () => dispatch(loginGoogle())
})

const mapStateToProps = ({ auth }) => ({
  auth
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
