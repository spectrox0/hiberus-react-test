import { all, takeLatest } from 'redux-saga/effects'
import { updateUserSaga } from './updateUser'
import { createUserSaga } from './createUsers'
import { deleteUserSaga } from './deleteUser'
import { getUsersSaga } from './getUsers'
import { CREATE_USER, DELETE_USER, GET_USERS, UPDATE_USER } from '../../actionTypes'

export function* usersSaga() {
  yield all([
    takeLatest(UPDATE_USER, updateUserSaga),
    takeLatest(CREATE_USER, createUserSaga),
    takeLatest(DELETE_USER, deleteUserSaga),
    takeLatest(GET_USERS, getUsersSaga),
  ])
}
