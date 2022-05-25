import { CreateUser, DeleteUser, GetUsers, GetUsersSuccess, UpdateUser } from '../../types/users'
import {
  CREATE_USER,
  DELETE_USER,
  GET_USERS,
  GET_USERS_SUCCESS,
  UPDATE_USER,
} from '../../actionTypes'

export const createUser: CreateUser = (payload) => ({
  type: CREATE_USER,
  payload,
})

export const deleteUser: DeleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
})

export const getUsers: GetUsers = () => ({
  type: GET_USERS,
})

export const getUsersSuccess: GetUsersSuccess = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
})

export const updateUser: UpdateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
})
