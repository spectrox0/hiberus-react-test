import {User} from "../../../types/User";
import {CREATE_USER, DELETE_USER, GET_USER, GET_USERS, UPDATE_USER} from "../../actionTypes";
import {Action} from "../common";

export type UsersState = {
    users?: User[]
    getUsersLoading?: boolean

}

export type CreateUser = Action<typeof CREATE_USER, User>
export type GetUsers = Action<typeof GET_USERS, User[]>
export type DeleteUser = Action<typeof DELETE_USER, {id: string}>

export type UpdateUser = Action<typeof UPDATE_USER>
export type GetUser = Action<typeof GET_USER, {id: string}>


export type UserActions = ReturnType<CreateUser | GetUsers | UpdateUser | DeleteUser>