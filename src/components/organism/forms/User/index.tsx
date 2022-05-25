import React, { FC } from 'react'
import { User } from '../../../../types/User'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import { createUser, updateUser } from '../../../../store/actions'
import * as yup from 'yup'
import { Form } from './Form'
import { v4 as uuid } from 'uuid'
import { userValidations } from '../../../../utils/validations'
import { RegPassword } from '../../../../utils'

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
  callback?: () => void
}
export const UserForm: FC<Props> = ({ user, callback }) => {
  const dispatch = useDispatch()
  return (
    <Formik
      validateOnMount
      onSubmit={async ({ surname, name, password, email }, { resetForm }) => {
        const payload = password ? { password } : {}
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
                ...payload,
                email,
                name,
              }),
        )
        callback?.()
        resetForm()
      }}
      initialValues={{ ...initialValues, ...user }}
      validationSchema={yup.object().shape({
        ...userValidations,
        password: !user
          ? yup
              .string()
              .trim()
              .matches(
                RegPassword,
                'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
              )
              .required('is required')
          : yup
              .string()
              .matches(
                RegPassword,
                'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
              ),
        confirmPassword: !user
          ? yup
              .string()
              .required('is required')
              .oneOf([yup.ref('password'), null], 'password must match')
          : yup
              .string()
              .when('password', {
                is: (password: string) => !!password,
                then: yup.string().required('is required'),
              })
              .oneOf([yup.ref('password'), null], 'password must match'),
      })}
    >
      {(props) => <Form {...props} />}
    </Formik>
  )
}
