import { call, put } from 'redux-saga/effects'
import { login, loginSuccess } from '../../actions'
import { AuthServiceV1 } from '../../../services'
import { AuthSession } from '../../../types'
import { loginFailure } from '../../actions/auth'
import { error, saveCache } from '../../../utils'
import axios from 'axios'

export function* loginSaga({ payload: { password, email } }: ReturnType<typeof login>) {
  try {
    const session: AuthSession = yield call(AuthServiceV1.login, { email, password })
    saveCache('session', session)
    yield put(loginSuccess(session))
  } catch (err) {
    if (axios.isAxiosError(err)) {
      error(err?.response?.status?.toString?.() as string)
    }
    yield put(loginFailure())
  }
}
