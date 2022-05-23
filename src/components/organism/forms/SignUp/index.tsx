import { User } from '../../../../types/User'
import { Formik } from 'formik'
import { signUp } from '../../../../store/actions'
import * as yup from 'yup'
import { RegPassword } from '../../../../utils'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from './Form'
import { v4 as uuid } from 'uuid'

const initialValues: Omit<User, 'id'> & { confirmPassword: string } = {
  email: '',
  name: '',
  password: '',
  surname: '',
  confirmPassword: '',
}
export type SignUpFormValues = typeof initialValues
export const SignUpForm: FC = () => {
  const dispatch = useDispatch()
  return (
    <Formik
      validateOnMount
      onSubmit={async ({ surname, name, password, email }, { resetForm }) => {
        dispatch(
          signUp({
            id: uuid(),
            name,
            surname,
            password,
            email,
          }),
        )
        resetForm()
      }}
      initialValues={initialValues}
      validationSchema={yup.object().shape({
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
      })}
    >
      {(props) => <Form {...props} />}
    </Formik>
  )
}
