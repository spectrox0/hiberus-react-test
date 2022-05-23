import { call, put, select } from 'redux-saga/effects'
import { deleteUser, getUsers } from '../../actions'
import { RootState } from '../../reducers'
import { UsersServiceV1 } from '../../../services'

export function* deleteUserSaga({ payload: { id } }: ReturnType<typeof deleteUser>) {
  try {
    const {
      auth: { loading },
    }: RootState = yield select()
    yield call(UsersServiceV1.deleteUser, id)
    yield put(getUsers())
  } catch (err) {
    console.log(err)
  }
}
