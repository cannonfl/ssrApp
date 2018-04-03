'use strict';
import * as type from './types';

export const currentUserRequest = () => {
  return {
    type: type.CURRENT_USER
  }
}
export const currentUserSuccess = (user) => {
  return {
    type: type.CURRENT_USER_SUCCEEDED,
    user
  }
}
export const currentUserError = (errors) => {
  return {
    type: type.CURRENT_USER_FAILED,
    errors
  }
}

export const loginGoogle = () => {
  return {
    type: type.LOGIN_GOOGLE
  }
}
export const logInGoogleSuccess = () => {
  return {
    type: type.LOGIN_GOOGLE_SUCCEEDED
  }
}
export const logInGoogleError = () => {
  return {
    type: type.LOGIN_GOOGLE_FAILED
  }
}

export const logoutGoogle = () => {
  return {
    type: type.LOGOUT_GOOGLE
  }
}
export const logOutGoogleSuccess = () => {
  return {
    type: type.LOGOUT_GOOGLE_SUCCEEDED
  }
}
export const logOutGoogleError = () => {
  return {
    type: type.LOGOUT_GOOGLE_FAILED
  }
}
