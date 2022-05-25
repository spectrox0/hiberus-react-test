import { put } from 'redux-saga/effects'
import { removeCache } from '../../../utils/cache'
import { logoutSuccess } from '../../actions/auth'
import { showSuccess } from '../../../utils'

export function* logoutSaga() {
  removeCache('session')
  yield put(logoutSuccess())
  showSuccess('Logout')
}
