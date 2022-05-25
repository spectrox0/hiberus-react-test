import { all, takeLatest } from 'redux-saga/effects'
import { LOGIN, LOGOUT, SIGNUP } from '../../actionTypes'
import { loginSaga } from './login'
import { signUpSaga } from './signUp'
import { logoutSaga } from './logout'

export function* authSaga() {
  yield all([
    takeLatest(LOGIN, loginSaga),
    takeLatest(LOGOUT, logoutSaga),
    takeLatest(SIGNUP, signUpSaga),
  ])
}
