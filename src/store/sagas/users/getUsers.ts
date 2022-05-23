import { call, put, select } from 'redux-saga/effects'
import { getUsers } from '../../actions'
import { RootState } from '../../reducers'
import { UsersServiceV1 } from '../../../services'
import { User } from '../../../types/User'

export function* getUsersSaga() {
  try {
    const {
      auth: { loading },
    }: RootState = yield select()
    const user: User = yield call(UsersServiceV1.getUsers)
    yield put(getUsers())
  } catch (err) {
    console.log(err)
  }
}
