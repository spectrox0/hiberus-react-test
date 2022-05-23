import * as React from 'react'
import { useAppSelector } from '../../../store/selector'
import { MainLayout } from '../Main'
import { AuthLayout } from '../Auth'

export const Layout = () => {
  const { session } = useAppSelector((state) => state.auth)
  return session ? <MainLayout /> : <AuthLayout />
}
