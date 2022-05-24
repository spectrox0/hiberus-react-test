import React, { FC } from 'react'
import { User } from '../../../../types/User'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { createUser, updateUser } from '../../../../store/actions'
import * as yup from 'yup'
import { Form } from './Form'
import { v4 as uuid } from 'uuid'
import { userValidations } from '../../../../utils/validations'

const initialValues: Omit<User, 'id'> & { confirmPassword: string } = {
  email: '',
  name: '',
  password: '',
  surname: '',
  confirmPassword: '',
}
export type UserFormValues = typeof initialValues
type Props = {
  user?: User
}
export const UserForm: FC<Props> = ({ user }) => {
  const dispatch = useDispatch()
  return (
    <Formik
      validateOnMount
      onSubmit={async ({ surname, name, password, email }, { resetForm }) => {
        dispatch(
          !user
            ? createUser({
                id: uuid(),
                name,
                surname,
                password,
                email,
              })
            : updateUser({
                id: user.id,
                surname,
                password,
                email,
                name,
              }),
        )
        resetForm()
      }}
      initialValues={{ ...initialValues, ...user }}
      validationSchema={yup.object().shape(userValidations)}
    >
      {(props) => <Form {...props} />}
    </Formik>
  )
}
