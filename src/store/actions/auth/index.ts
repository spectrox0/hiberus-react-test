import { Login, LoginSuccess, Logout, SignUp, SignUpSuccess } from '../../types/auth'
import { LOGIN, LOGIN_SUCCESS, LOGOUT, SIGNUP, SIGNUP_SUCCESS } from '../../actionTypes'
import { User } from '../../../types/User'
import { AuthSession } from '../../../types'
import { LoginPayload } from '../../../services/types/auth'

export const login: Login = (payload: LoginPayload) => ({
  type: LOGIN,
  payload,
})

export const loginSuccess: LoginSuccess = (payload: AuthSession) => ({
  type: LOGIN_SUCCESS,
  payload,
})

export const signUp: SignUp = (payload: User) => ({
  type: SIGNUP,
  payload,
})

export const signUpSuccess: SignUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
})

export const logout: Logout = () => ({
  type: LOGOUT,
})
