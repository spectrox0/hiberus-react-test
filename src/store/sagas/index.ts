import { all, fork } from 'redux-saga/effects'
import { authSaga } from './auth'
import { usersSaga } from './users'

export function* rootSaga() {
  yield all([fork(authSaga), fork(usersSaga)])
}
