import { UserActions, UsersState } from '../types/users'
import { CREATE_USER, DELETE_USER, GET_USERS, GET_USERS_SUCCESS, UPDATE_USER } from '../actionTypes'

const initialState: UsersState = {
  users: undefined,
  getUsersLoading: false,
}

export default (state = initialState, actions: UserActions) => {
  switch (actions.type) {
    case CREATE_USER: {
      return {
        getUsersLoading: true,
      }
    }
    case DELETE_USER: {
      return {
        getUsersLoading: true,
      }
    }
    case UPDATE_USER: {
      return {
        getUsersLoading: true,
      }
    }
    case GET_USERS: {
      return {
        ...state,
        getUsersLoading: true,
      }
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        getUsersLoading: false,
        users: actions.payload,
      }
    }
    default: {
      return { ...state }
    }
  }
}
