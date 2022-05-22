import {CreateUser, DeleteUser, GetUsers} from "../../types/users";
import {CREATE_USER, DELETE_USER, GET_USERS} from "../../actionTypes";

export const createUser: CreateUser = (payload) => ({
    type: CREATE_USER,
    payload
})

export const deleteUser: DeleteUser = (payload) => ({
    type: DELETE_USER,
    payload
})

export const getUsers: GetUsers = (payload) => ({
    type: GET_USERS,
    payload
})