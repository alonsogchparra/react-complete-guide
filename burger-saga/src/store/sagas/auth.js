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

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(actions.logout());
}

export function* authUserSaga(action) {
  yield put(actions.authStart());
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true
  };
    
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDlG-iXANw8rBdnp5DZkD_wc0aqkVxlhnE';

    if (!action.isSignup) {
      url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDlG-iXANw8rBdnp5DZkD_wc0aqkVxlhnE';
    }
    try {
      const response = axios.post(url, authData)
      
      const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
      yield localStorage.setItem('token', response.data.idToken);
      yield localStorage.setItem('expirationDate', expirationDate);
      yield localStorage.setItem('userId', response.data.localId);
      yield put(actions.authSuccess(response.data.idToken, response.data.localId));
      yield put(actions.checkAuthTimeout(response.data.expiresIn));

    } catch (error) {
      yield put(actions.authFail(error.response.data.error));
    }
    
}