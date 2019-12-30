import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.post, 'student/login', { id });

    const { token, student } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;
    yield put(signInSuccess(token, student));
  } catch (error) {
    yield put(signFailure());
  }
}

export function signOut() {
  // history.push('/');s
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
