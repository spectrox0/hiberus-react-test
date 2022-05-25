import { call, put } from 'redux-saga/effects'
import { getUsers, updateUser } from '../../actions'
import { UsersServiceV1 } from '../../../services'

export function* updateUserSaga({ payload }: ReturnType<typeof updateUser>) {
  try {
    yield call(UsersServiceV1.updateUser, payload)
    yield put(getUsers())
  } catch (err) {
    console.log(err)
  }
}
