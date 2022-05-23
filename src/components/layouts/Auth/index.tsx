import React from 'react'
import { FCWithChildren } from '../../../types'
import { CustomBox } from '../../atoms/Box'
import { Layout } from './styles'
import { Route, Routes, useRoutes, useLocation, Navigate } from 'react-router-dom'
import { Login, SignUp } from '../../../views'
import { Box, Container, styled } from '@mui/material'
import { Link } from '../../atoms/Link'

const LinkStyles = styled(Link)<{ active: boolean }>(({ theme, active }) => ({
  textDecoration: 'none',
  padding: theme.spacing(1),
  textTransform: 'uppercase',
  letterSpacing: '0.09em',
  fontWeight: '700',
  color: active ? theme.palette.primary.main : '#fff',
  transition: 'color .3s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))
export const AuthLayout: FCWithChildren = () => {
  const { pathname } = useLocation()

  return (
    <Layout>
      <Container maxWidth={'sm'}>
        <CustomBox>
          <Box display={'flex'} justifyContent={'center'} mx={'auto'}>
            <LinkStyles active={'/' === pathname} to={'/'}>
              login
            </LinkStyles>
            <LinkStyles active={'/sign-up' === pathname} to={'/sign-up'}>
              sign up
            </LinkStyles>
          </Box>
          <Routes>
            <Route index element={<Login />} />
            <Route path='login' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path={'*'} element={<Navigate to={'/'} />} />
          </Routes>
        </CustomBox>
      </Container>
    </Layout>
  )
}
