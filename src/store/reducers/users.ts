import {UserActions, UsersState} from "../types/users";
import {GET_USER} from "../actionTypes";


const initialState: UsersState = {
    users: undefined,
    getUsersLoading: false
}


export default (state = initialState, actions: UserActions) => {

    switch (actions.type) {
        case GET_USER: {
            return {
                ...state
            }
        }
        default: {
            return {...state}
        }
    }
}