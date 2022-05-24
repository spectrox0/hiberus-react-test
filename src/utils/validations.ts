import * as yup from 'yup'
import { RegPassword } from './password'

export const userValidations = {
  name: yup.string().required('name is required'),
  surname: yup.string().required('surname is required'),
  password: yup
    .string()
    .matches(
      RegPassword,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
    )
    .required('is required'),
  confirmPassword: yup
    .string()
    .required('is required')
    .oneOf([yup.ref('password'), null], 'password must match'),

  email: yup.string().email().required('is required'),
}
