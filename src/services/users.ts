import {axiosClient} from "../utils/axios";
import {Service} from "./abstractions/service";
import {endpoints} from "./constants/endpoints";
import {User} from "../types/User";
import {error} from "../utils/handlingErrors";
import {showSuccess} from "../utils/message";


class Users extends Service {
    getUser = async (id: string): Promise<User> => {
        const {data, status} = this.axiosClient.get(endpoints.user(id))

        return data;
    }
    getUsers = async () => {
        const {data, status} = this.axiosClient.get(endpoints.users)
    }
    createUser = async (payload: User): Promise<User> => {
        const {data, status} = this.axiosClient.post(endpoints.users, payload)
        return data;
    }
    deleteUser = async (id: string): Promise<void> => {
        const {data, status} = this.axiosClient.delete(endpoints.user(id))
        if (status >= 200 && status < 300) {
            showSuccess("User deleted")
            return Promise.resolve()
        } else {
            error(status)
            return Promise.reject(status)
        }
    }
    updateUser = async (payload: User): Promise<User> => {
        const {data, status} = this.axiosClient.put(endpoints.user(payload.id), payload)
        if (!data) return Promise.reject(status)
        return data;
    }
}


export const UsersServiceV1 = Object.freeze(new Users({axiosClient}))