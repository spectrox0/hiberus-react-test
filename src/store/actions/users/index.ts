import { CreateUser, DeleteUser, GetUsers, UpdateUser } from '../../types/users'
import { CREATE_USER, DELETE_USER, GET_USERS, UPDATE_USER } from '../../actionTypes'

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

export const updateUser: UpdateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
})
