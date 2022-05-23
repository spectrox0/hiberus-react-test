import * as React from 'react'
import { FCWithChildren } from '../../../types'
import { Navbar } from '../../organism'
import { Route, Routes } from 'react-router-dom'
import { Logout, Users } from '../../../views'
import { LayoutStyled } from './styles'

export const MainLayout: FCWithChildren = () => {
  return (
    <LayoutStyled>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Users />} />
        <Route path={'/'} element={<Logout />} />
      </Routes>
    </LayoutStyled>
  )
}
