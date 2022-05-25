import { AuthSession } from '../../../types'
import { Action } from '../common'
import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  SIGNUP,
  SIGNUP_SUCCESS,
} from '../../actionTypes'
import { LoginPayload } from '../../../services/types/auth'
import { User } from '../../../types/User'
import { SET_CURRENT_USER } from '../../actionTypes/auth'

export type AuthState = {
  currentUser?: User
  session?: AuthSession
  authLoading: boolean
}

export type Login = Action<typeof LOGIN, LoginPayload>

export type LoginSuccess = Action<typeof LOGIN_SUCCESS, AuthSession>
export type Logout = Action<typeof LOGOUT>
export type LogoutSuccess = Action<typeof LOGOUT_SUCCESS>
export type SignUp = Action<typeof SIGNUP, Omit<User, 'id'>>
export type SignUpSuccess = Action<typeof SIGNUP_SUCCESS>
export type LoginFailure = Action<typeof LOGIN_FAILURE>

export type SetCurrentUser = Action<typeof SET_CURRENT_USER, User>
export type AuthActions = ReturnType<
  Login | Logout | SignUp | LoginSuccess | SignUpSuccess | LoginFailure | SetCurrentUser
>
