import { call, put } from 'redux-saga/effects'
import { createUser, getUsers } from '../../actions'
import { UsersServiceV1 } from '../../../services'
import axios, { AxiosError } from 'axios'
import { error } from '../../../utils'

export function* createUserSaga({
  payload: { password, email, id, name, surname },
}: ReturnType<typeof createUser>) {
  try {
    yield call(UsersServiceV1.createUser, { email, id, name, surname, password })
    yield put(getUsers())
  } catch (err) {
    if (axios.isAxiosError(err)) {
      error(err as AxiosError<{ message: string }>)
    }
  }
}
