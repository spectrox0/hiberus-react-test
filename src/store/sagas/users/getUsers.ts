import { call, put } from 'redux-saga/effects'
import { UsersServiceV1 } from '../../../services'
import { User } from '../../../types/User'
import { getUsersSuccess } from '../../actions/users'

export function* getUsersSaga() {
  try {
    const { items }: { count: number; items: User[] } = yield call(UsersServiceV1.getUsers)
    yield put(getUsersSuccess(items))
  } catch (err) {
    console.log(err)
  }
}
