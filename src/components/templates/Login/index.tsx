import React, { FC } from 'react'
import { Title } from '../../atoms/Title'
import { LoginForm } from '../../organism/forms/Login'

export const LoginTemplate: FC = () => {
  return (
    <div>
      <LoginForm />
    </div>
  )
}
