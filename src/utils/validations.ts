import * as yup from 'yup'

export const userValidations = {
  name: yup.string().required('name is required'),
  surname: yup.string().required('surname is required'),
  email: yup.string().email().required('is required'),
}
