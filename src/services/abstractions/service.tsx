import { AxiosInstance } from 'axios'

export abstract class Service {
  protected readonly axiosClient: AxiosInstance

  constructor({ axiosClient }: { axiosClient: AxiosInstance }) {
    this.axiosClient = axiosClient
  }
}
