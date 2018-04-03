'use strict';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { currentUserRequest, logoutGoogle } from "../actions/auth";

class Header extends Component {
  componentDidMount() {
    this.props.currentUserRequest();
  }
  handleLogout(e) {
    e.preventDefault();
    this.props.logoutGoogle();
  }
  renderContent() {
    switch (this.props.auth.user) {
      case null:
        return;
      case false:
        return <a href="/login" className="waves-effect waves-light btn">Log In</a>
      default:
        return <a onClick={(e) => this.handleLogout(e)} className="waves-effect waves-light btn">Log Out</a>
    } 
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">Cannon Inc</a>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  };
};

Header.propTypes = {
  currentUserRequest: PropTypes.func.isRequired,
  logoutGoogle:  PropTypes.func.isRequired
}

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = dispatch => ({
  currentUserRequest: () => dispatch(currentUserRequest()),
  logoutGoogle: () => dispatch(logoutGoogle())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
