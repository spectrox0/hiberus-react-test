import { all } from 'redux-saga/effects'
import { updateUserSaga } from './updateUser'
import { createUserSaga } from './createUsers'
import { deleteUserSaga } from './deleteUser'
import { getUsersSaga } from './getUsers'

export function* usersSaga() {
  yield all([updateUserSaga, createUserSaga, deleteUserSaga, getUsersSaga])
}
