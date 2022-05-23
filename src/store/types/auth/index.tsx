import { AuthSession } from '../../../types'
import { Action } from '../common'
import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP,
  SIGNUP_SUCCESS,
} from '../../actionTypes'
import { LoginPayload } from '../../../services/types/auth'
import { User } from '../../../types/User'

export type AuthState = {
  session?: AuthSession
  loading: boolean
}

export type Login = Action<typeof LOGIN, LoginPayload>

export type LoginSuccess = Action<typeof LOGIN_SUCCESS, AuthSession>
export type Logout = Action<typeof LOGOUT>
export type SignUp = Action<typeof SIGNUP, User>
export type SignUpSuccess = Action<typeof SIGNUP_SUCCESS>
export type LoginFailure = Action<typeof LOGIN_FAILURE>

export type AuthActions = ReturnType<
  Login | Logout | SignUp | LoginSuccess | SignUpSuccess | LoginFailure
>
