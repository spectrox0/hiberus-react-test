import { put } from 'redux-saga/effects'
import { removeCache } from '../../../utils/cache'
import { logoutSuccess } from '../../actions/auth'

export function* logoutSaga() {
  removeCache('session')
  yield put(logoutSuccess())
}
