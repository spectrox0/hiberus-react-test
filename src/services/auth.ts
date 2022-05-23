import { Service } from './abstractions/service'
import { endpoints } from './constants/endpoints'
import { error } from '../utils/handlingErrors'
import { axiosClient } from '../utils/axios'
import { AuthSession } from '../types'
import { User } from '../types/User'

export class AuthServiceClass extends Service {
  login = async (payload: { email: string; password: string }): Promise<AuthSession> => {
    const { data, status } = await this.axiosClient.post(endpoints.login, payload)
    if ((status >= 200 && status < 300) || !data) {
      return Promise.reject(status)
    }
    return data
  }

  signUp = async (payload: User): Promise<void> => {
    const { data, status } = await this.axiosClient.post(endpoints.signUp, payload)
    if (status !== 200) {
      error(status)
    }
    if (!data && status !== 200) return Promise.reject()
    return data
  }

  me = async (): Promise<void> => {
    const { data, status } = await this.axiosClient.get(endpoints.me)
  }
}

export const AuthServiceV1 = Object.freeze(new AuthServiceClass({ axiosClient }))
