import { Service } from './abstractions/service'
import { endpoints } from './constants/endpoints'
import { axiosClient } from '../utils'
import { AuthSession } from '../types'
import { User } from '../types/User'

export class AuthServiceClass extends Service {
  login = async (payload: { email: string; password: string }): Promise<AuthSession> => {
    const { data } = await this.axiosClient().post(endpoints.login, payload)

    return data
  }

  signUp = async (payload: Omit<User, 'id'>): Promise<void> => {
    const { data } = await this.axiosClient().post(endpoints.signUp, payload)
    return data
  }

  me = async (): Promise<User> => {
    const { data } = await this.axiosClient().get(endpoints.me)
    return data
  }
}

export const AuthServiceV1 = Object.freeze(new AuthServiceClass({ axiosClient }))
