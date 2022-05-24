import { User } from '../../../../types/User'
import { Formik } from 'formik'
import { signUp } from '../../../../store/actions'
import * as yup from 'yup'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Form } from './Form'
import { userValidations } from '../../../../utils/validations'

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
            name,
            surname,
            password,
            email,
          }),
        )
        resetForm()
      }}
      initialValues={initialValues}
      validationSchema={yup.object().shape(userValidations)}
    >
      {(props) => <Form {...props} />}
    </Formik>
  )
}
