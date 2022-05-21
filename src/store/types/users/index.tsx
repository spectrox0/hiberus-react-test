import {User} from "../../../types/User";
import {CREATE_USER, GET_USER} from "../../actionTypes";
import {Action} from "../common";

export type UsersState = {
    users?: User[]
    getUsersLoading?: boolean

}

export type CreateUser = Action<typeof CREATE_USER, User>
export type GetUsers = Action<typeof GET_USER, User[]>


export type UserActions = ReturnType<CreateUser | GetUsers>