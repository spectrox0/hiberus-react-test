import React, { FC } from 'react'
import { Form as FormikForm, FormikProps } from 'formik'
import { SignUpFormValues } from './index'
import { Btn, Input } from '../../../atoms'
import { useAppSelector } from '../../../../store/selector'
import { PasswordInput } from '../../../atoms/PasswordInput'

export const Form: FC<FormikProps<SignUpFormValues>> = ({
  values: { email, password, confirmPassword, surname, name },
  handleChange,
  touched,
  errors,
  handleBlur,
  isValid,
}) => {
  const { loading } = useAppSelector((state) => state.auth)

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
        error={(touched.name && errors.name) || ''}
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
      <Btn sx={{ mt: 3 }} fullWidth type={'submit'} disabled={!isValid || loading}>
        Submit
      </Btn>
    </FormikForm>
  )
}
