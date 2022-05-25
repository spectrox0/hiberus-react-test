import React, { FC } from 'react'
import { Form as FormikForm, FormikProps } from 'formik'
import { UserFormValues } from './index'
import { Btn, Input, PasswordInput } from '../../../atoms'

export const Form: FC<FormikProps<UserFormValues>> = ({
  values: { email, password, confirmPassword, surname, name },
  handleChange,
  touched,
  errors,
  handleBlur,
  isValid,
}) => {
  return (
    <FormikForm>
      <Input
        error={(touched.name && errors.name) || ''}
        fullWidth
        value={name}
        label={'name'}
        name={'name'}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        error={(touched.surname && errors.surname) || ''}
        fullWidth
        value={surname}
        label={'surname'}
        name={'surname'}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        error={(touched.email && errors.email) || ''}
        fullWidth
        value={email}
        label={'email'}
        name={'email'}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <PasswordInput
        error={(touched.password && errors.password) || ''}
        fullWidth
        value={password}
        label={'password'}
        name={'password'}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <PasswordInput
        error={(touched.confirmPassword && errors.confirmPassword) || ''}
        fullWidth
        value={confirmPassword}
        label={'confirmPassword'}
        name={'confirmPassword'}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Btn sx={{ my: 3 }} fullWidth type={'submit'} disabled={!isValid}>
        Submit
      </Btn>
    </FormikForm>
  )
}
