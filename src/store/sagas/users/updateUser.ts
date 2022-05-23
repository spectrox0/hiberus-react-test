import { call, put, select } from 'redux-saga/effects'
import { getUsers, updateUser } from '../../actions'
import { RootState } from '../../reducers'
import { UsersServiceV1 } from '../../../services'
import { User } from '../../../types/User'

export function* updateUserSaga({
  payload: { password, email, id, name, surname },
}: ReturnType<typeof updateUser>) {
  try {
    const {
      auth: { loading },
    }: RootState = yield select()
    const user: User = yield call(UsersServiceV1.updateUser, { email, id, name, surname, password })
    yield put(getUsers())
  } catch (err) {
    console.log(err)
  }
}
