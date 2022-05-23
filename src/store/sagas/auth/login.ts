import { call, put, select } from 'redux-saga/effects'
import { login, loginSuccess } from '../../actions'
import { RootState } from '../../reducers'
import { AuthServiceV1 } from '../../../services'
import { AuthSession } from '../../../types'
import { loginFailure } from '../../actions/auth'
import { error } from '../../../utils'
import { AxiosError } from 'axios'

export function* loginSaga({ payload: { password, email } }: ReturnType<typeof login>) {
  try {
    const {
      auth: { loading },
    }: RootState = yield select()
    const session: AuthSession = yield call(AuthServiceV1.login, { email, password })
    yield put(loginSuccess(session))
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } catch (err: AxiosError<any>) {
    error(err.response.status.toString())
    yield put(loginFailure())
  }
}
