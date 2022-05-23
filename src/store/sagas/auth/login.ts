import { call, put, select } from 'redux-saga/effects'
import { login, loginSuccess } from '../../actions'
import { RootState } from '../../reducers'
import { AuthServiceV1 } from '../../../services'
import { AuthSession } from '../../../types'

export function* loginSaga({ payload: { password, email } }: ReturnType<typeof login>) {
  try {
    const {
      auth: { loading },
    }: RootState = yield select()
    const session: AuthSession = yield call(AuthServiceV1.login, { email, password })
    yield put(loginSuccess(session))
  } catch (err) {
    console.log(err)
  }
}
