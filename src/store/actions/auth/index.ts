import { Login, LoginFailure, LoginSuccess, Logout, SignUp, SignUpSuccess } from '../../types/auth'
import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP,
  SIGNUP_SUCCESS,
} from '../../actionTypes'
import { LoginPayload } from '../../../services/types/auth'

export const login: Login = (payload: LoginPayload) => ({
  type: LOGIN,
  payload,
})

export const loginSuccess: LoginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
})

export const loginFailure: LoginFailure = () => ({
  type: LOGIN_FAILURE,
})

export const signUp: SignUp = (payload) => ({
  type: SIGNUP,
  payload,
})

export const signUpSuccess: SignUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
})

export const logout: Logout = () => ({
  type: LOGOUT,
})
