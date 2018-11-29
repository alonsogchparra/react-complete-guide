import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import axios from '../../axios-orders';

import * as actions from '../actions/index';

export function* logoutSaga(action) {
  yield call([localStorage,"removeItem"],"token");
  yield call([localStorage,"removeItem"],"expirationDate");
  yield call([localStorage,"removeItem"],"userId");
  yield put(actions.logoutSucceed());
}