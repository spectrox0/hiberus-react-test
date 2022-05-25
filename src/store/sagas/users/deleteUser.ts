import { call, put } from 'redux-saga/effects'
import { deleteUser, getUsers } from '../../actions'
import { UsersServiceV1 } from '../../../services'
import axios, { AxiosError } from 'axios'
import { error } from '../../../utils'

export function* deleteUserSaga({ payload: { id } }: ReturnType<typeof deleteUser>) {
  try {
    yield call(UsersServiceV1.deleteUser, id)
    yield put(getUsers())
  } catch (err) {
    if (axios.isAxiosError(err)) {
      error(err as AxiosError<{ message: string }>)
    }
  }
}
