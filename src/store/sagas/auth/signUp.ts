import { call, put, select } from 'redux-saga/effects'
import { login, signUp } from '../../actions'
import { RootState } from '../../reducers'
import { AuthServiceV1 } from '../../../services'

export function* signUpSaga({
  payload: { password, email, name, surname },
}: ReturnType<typeof signUp>) {
  try {
    yield call(AuthServiceV1.signUp, { email, password, surname, name })
    console.log('asas')
    yield put(login({ email, password }))
  } catch (err) {
    console.log(err)
  }
}
