import { AuthActions, AuthState } from '../types/auth'
import { LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from '../actionTypes'

const initialState: AuthState = {
  session: undefined,
  loading: false,
}
export default (state = initialState, actions: AuthActions) => {
  switch (actions.type) {
    case LOGIN: {
      return {
        ...state,
      }
    }

    case LOGIN_SUCCESS: {
      return {
        ...state,
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
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
