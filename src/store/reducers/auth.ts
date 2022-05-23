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
