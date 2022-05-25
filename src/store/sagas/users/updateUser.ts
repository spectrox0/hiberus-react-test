import { call, put } from 'redux-saga/effects'
import { getUsers, updateUser } from '../../actions'
import { UsersServiceV1 } from '../../../services'
import axios, { AxiosError } from 'axios'
import { error } from '../../../utils'

export function* updateUserSaga({ payload }: ReturnType<typeof updateUser>) {
  try {
    yield call(UsersServiceV1.updateUser, payload)
    yield put(getUsers())
  } catch (err) {
    if (axios.isAxiosError(err)) {
      error(err as AxiosError<{ message: string }>)
    }
  }
}
