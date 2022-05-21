import {combineReducers} from "redux";

import AuthReducer from './auth'
import UsersReducer from './users'

export const rootReducer = combineReducers({
    auth: AuthReducer,
    users: UsersReducer
});