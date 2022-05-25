import { AuthActions, AuthState } from '../types/auth'
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT, SIGNUP } from '../actionTypes'
import { getCache } from '../../utils'
import { AuthSession } from '../../types'
import { SET_CURRENT_USER } from '../actionTypes/auth'

const initialState: AuthState = {
  currentUser: undefined,
  session: getCache<AuthSession | undefined>('session'),
  authLoading: false,
}
export default (state = initialState, actions: AuthActions) => {
  switch (actions.type) {
    case LOGIN: {
      return {
        ...state,
        loading: true,
      }
    }

    case SIGNUP: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        session: actions.payload,
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        loading: false,
      }
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: actions.payload,
      }
    }
    case LOGOUT: {
      return {
        ...initialState,
      }
    }
    default: {
      return { ...state }
    }
  }
}
