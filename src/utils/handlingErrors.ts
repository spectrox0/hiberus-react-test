import { showError } from './message'

const errors: { [key: string]: string } = {
  '404': 'User email not found or password invalid',
  '601': 'User is not validated',
}

export const error = (statusCode: string) => {
  showError(errors[statusCode])
}
