import { Service } from './abstractions/service'
import { endpoints } from './constants/endpoints'
import { error } from '../utils/handlingErrors'
import { axiosClient } from '../utils/axios'
import { AuthSession } from '../types'
import { User } from '../types/User'

export class AuthServiceClass extends Service {
  login = async (payload: { email: string; password: string }): Promise<AuthSession> => {
    console.log('example')
    const { data, status } = await this.axiosClient().post(endpoints.login, payload)
    if (!(status >= 200 && status < 300) || !data) {
      return Promise.reject(status)
    }
    return data
  }

  signUp = async (payload: Omit<User, 'id'>): Promise<void> => {
    const { data, status } = await this.axiosClient().post(endpoints.signUp, payload)
    if (!data && status !== 200) return Promise.reject()
    return data
  }

  me = async (): Promise<User> => {
    const { data, status } = await this.axiosClient().get(endpoints.me)
    return data
  }
}

export const AuthServiceV1 = Object.freeze(new AuthServiceClass({ axiosClient }))
