import {AuthActions, AuthState} from "../types/auth";
import {LOGIN, LOGOUT} from "../actionTypes";
import {LOGIN_FAILURE, LOGIN_SUCCESS} from "../actionTypes";


const initialState: AuthState = {
    session: undefined

}
export default (state = initialState, actions: AuthActions) => {
  switch (actions.type) {
      case LOGIN: {
          return {
              ...state
          }
      }

      case LOGIN_SUCCESS: {
          return {
              ...state
          }
      }
      case LOGIN_FAILURE: {
          return {
              ...state
          }
      }
      case LOGOUT: {
          return {
              ...initialState
          }
      }
  }
}