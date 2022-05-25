import { call, put } from 'redux-saga/effects'
import { login, signUp } from '../../actions'
import { AuthServiceV1 } from '../../../services'
import { signUpFailure } from '../../actions/auth'
import axios, { AxiosError } from 'axios'
import { error, showSuccess } from '../../../utils'

export function* signUpSaga({
  payload: { password, email, name, surname },
}: ReturnType<typeof signUp>) {
  try {
    yield call(AuthServiceV1.signUp, { email, password, surname, name })
    showSuccess('User created')
    yield put(login({ email, password }))
  } catch (err) {
    yield put(signUpFailure())
    if (axios.isAxiosError(err)) {
      error(err as AxiosError<{ message: string }>)
    }
  }
}
