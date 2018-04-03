'use strict';
import { all, fork } from 'redux-saga/effects';
import * as userSagas from './userSagas';

export default function* rootSaga() {
  yield all(
    [...Object.values(userSagas)].map(fork)
  );
}
