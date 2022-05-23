import { call, put, select } from 'redux-saga/effects'
import { login, signUp } from '../../actions'
import { RootState } from '../../reducers'
import { AuthServiceV1 } from '../../../services'

export function* signUpSaga({
  payload: { password, email, name, id, surname },
}: ReturnType<typeof signUp>) {
  try {
    const {
      auth: { loading },
    }: RootState = yield select()
    yield call(AuthServiceV1.signUp, { email, password, id, surname, name })
    yield put(login({ email, password }))
  } catch (err) {
    console.log(err)
  }
}
