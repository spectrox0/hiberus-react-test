import { all, takeLatest } from 'redux-saga/effects'
import { LOGIN, SIGNUP } from '../../actionTypes'
import { loginSaga } from './login'
import { signUpSaga } from './signUp'

export function* authSaga() {
  yield all([takeLatest(SIGNUP, signUpSaga)])
}
