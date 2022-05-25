import { showError } from './message'
import { AxiosError } from 'axios'

export const error = (error: AxiosError<{ message: string }>) => {
  showError(error?.response?.data?.message)
}
