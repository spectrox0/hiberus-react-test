import { axiosClient, showSuccess } from '../utils'
import { Service } from './abstractions/service'
import { endpoints } from './constants/endpoints'
import { User } from '../types/User'

class Users extends Service {
  getUser = async (id: string): Promise<User> => {
    return (await this.axiosClient().get(endpoints.user(id))).data
  }
  getUsers = async (): Promise<{ count: number; items: User[] }> => {
    const { data } = await this.axiosClient().get(endpoints.users)
    return data
  }
  createUser = async (payload: User): Promise<User> => {
    const { data } = await this.axiosClient().post(endpoints.users, payload)
    showSuccess('User created')
    return data
  }
  deleteUser = async (id: string): Promise<void> => {
    const { status } = await this.axiosClient().delete(endpoints.user(id))
    if (status >= 200 && status < 300) {
      showSuccess('User deleted')
      return Promise.resolve()
    } else {
      return Promise.reject(status)
    }
  }
  updateUser = async (payload: Omit<User, 'password'> & { password?: string }): Promise<User> => {
    const { data, status } = await this.axiosClient().put(endpoints.user(payload.id), payload)
    if (!data) return Promise.reject(status)
    showSuccess('User updated')
    return data
  }
}

export const UsersServiceV1 = Object.freeze(new Users({ axiosClient }))
