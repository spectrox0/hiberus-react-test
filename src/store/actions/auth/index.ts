import {
  Login,
  LoginFailure,
  LoginSuccess,
  Logout,
  LogoutSuccess,
  SetCurrentUser,
  SignUp,
  SignUpFailure,
  SignUpSuccess,
} from '../../types/auth'
import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGOUT_SUCCESS,
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from '../../actionTypes'
import { LoginPayload } from '../../../services/types/auth'
import { SET_CURRENT_USER } from '../../actionTypes/auth'

export const login: Login = (payload: LoginPayload) => ({
  type: LOGIN,
  payload,
})

export const signUpFailure: SignUpFailure = () => ({
  type: SIGNUP_FAILURE,
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

export const logoutSuccess: LogoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
})

export const setCurrentUser: SetCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
})
