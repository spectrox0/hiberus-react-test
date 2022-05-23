import React, { FC } from 'react'
import { Routes as ReactRoutes } from 'react-router-dom'
import { useAppSelector } from '../store/selector'
import { MainLayout } from '../components/layouts/Main'
import { AuthLayout } from '../components/layouts/Auth'

const routesWithAuth = []

const routesWithoudAuth = []
export const Routes: FC = () => {
  const { session } = useAppSelector((state) => state.auth)
  return (
    <ReactRoutes>{session ? <MainLayout></MainLayout> : <AuthLayout></AuthLayout>}</ReactRoutes>
  )
}
