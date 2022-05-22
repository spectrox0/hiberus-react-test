import {combineReducers} from "redux";

import AuthReducer from './auth'
import UsersReducer from './users'
import {AuthState} from "../types/auth";
import {UsersState} from "../types/users";

export interface RootState {
    auth: AuthState;
    users: UsersState
}

export const rootReducer = combineReducers({
    auth: AuthReducer,
    users: UsersReducer
});