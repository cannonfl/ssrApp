'use strict';
import { takeLatest, call, put } from 'redux-saga/effects';
import * as api from '../api/user';
import * as types from '../actions/types';
import * as actions from "../actions/auth";

function* fetchCurrentUser(action) {
  try {
     const user = yield call(api.fetchCurrentUser);
     yield put(actions.currentUserSuccess(user));
  } catch (err) {  
    yield put(actions.currentUserError(err));
  }
}

function* doLoginGoogle(action) {
  try {
     const user = yield call(api.doLoginGoogle);
     yield put(actions.currentUserRequest());
  } catch (err) {  
     yield put(actions.loginGooglError(err));
  }
}

function* doLogoutGoogle(action) {
  try {
     const user = yield call(api.doLogoutGoogle);
     yield put(actions.currentUserRequest());
  } catch (err) {  
     yield put(actions.logoutGooglError(err));
  }
}

export function* getCurrentUser() {
  yield takeLatest(types.CURRENT_USER, fetchCurrentUser);
}
export function* loginGoogleUser() {
  yield takeLatest(types.LOGIN_GOOGLE, doLoginGoogle);
}
export function* logoutGoogleUser() {
  yield takeLatest(types.LOGOUT_GOOGLE, doLogoutGoogle);
}