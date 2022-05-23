import * as React from 'react'
import { useAppSelector } from '../../../store/selector'
import { MainLayout } from '../Main'
import { AuthLayout } from '../Auth'
import { ScreenLoading } from '../../molecules'
import { Notification } from '../../atoms'
export const Layout = () => {
  const { session, loading } = useAppSelector((state) => ({ ...state.auth, ...state.users }))
  return (
    <>
      {' '}
      {session ? <MainLayout /> : <AuthLayout />} <ScreenLoading loading={loading} />
      <Notification />
    </>
  )
}
