'use strict';
import * as types from '../actions/types';

const intialState = {
  user: null,
  errors: {}
}

export default (state = intialState, action = {}) => {
  switch(action.type) {
    case types.CURRENT_USER_SUCCEEDED:
      return {...{}, ...{user: action.user}};
    case types.CURRENT_USER_FAILED: 
      return {...{}, ...{errors: action.errors}}
    case types.LOGOUT_GOOGLE_SUCCEEDED: 
      return intialState;
    default:
      return state;
  }
}
