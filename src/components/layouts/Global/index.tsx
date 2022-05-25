import * as React from 'react'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../store/selector'
import { MainLayout } from '../Main'
import { AuthLayout } from '../Auth'
import { ScreenLoading } from '../../molecules'
import { Notification } from '../../atoms'
import { AuthServiceV1 } from '../../../services'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../../store/actions/auth'

export const Layout = () => {
  const { session, authLoading, currentUser, getUsersLoading } = useAppSelector((state) => ({
    ...state.auth,
    ...state.users,
  }))
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useDispatch()
  useEffect(() => {
    ;(async () => {
      try {
        if (!loading) setLoading(true)
        if (!session) await Promise.reject()
        const user = await AuthServiceV1.me()
        if (user) dispatch(setCurrentUser(user))
      } finally {
        setLoading(false)
      }
    })()
  }, [session])
  return (
    <>
      {!loading ? session && currentUser ? <MainLayout /> : <AuthLayout /> : null}
      <ScreenLoading loading={authLoading || loading || getUsersLoading} />
      <Notification />
      <div id={'modal'} />
    </>
  )
}
