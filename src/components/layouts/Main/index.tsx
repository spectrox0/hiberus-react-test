import * as React from 'react'
import { FCWithChildren } from '../../../types'
import { Navbar } from '../../organism'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Logout, Users } from '../../../views'
import { LayoutStyled } from './styles'
import { Container } from '@mui/material'

export const MainLayout: FCWithChildren = () => {
  return (
    <LayoutStyled>
      <Navbar />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 4.5rem)',
          pt: 1,
          pb: 3,
        }}
      >
        <Routes>
          <Route index element={<Users />} />
          <Route path={'/logout'} element={<Logout />} />
          <Route path={'*'} element={<Navigate to={'/'} />} />
        </Routes>
      </Container>
    </LayoutStyled>
  )
}
