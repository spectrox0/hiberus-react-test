import {Login, LoginSuccess, Logout, SignUp, SignUpSuccess} from "../../types/auth";
import {LOGIN, LOGIN_SUCCESS, LOGOUT, SIGNUP, SIGNUP_SUCCESS} from "../../actionTypes";


export const login: Login = (payload) => ({
    type: LOGIN,
    payload
})

export const loginSuccess: LoginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})


export const signUp: SignUp = (payload) => ({
    type: SIGNUP,
    payload
})


export const signUpSuccess: SignUpSuccess = () => ({
    type: SIGNUP_SUCCESS,
})

export const logout: Logout = () => ({
    type: LOGOUT
})