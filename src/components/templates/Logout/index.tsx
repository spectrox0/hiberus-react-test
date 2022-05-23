import React, { FC } from 'react'
import { Btn, Title } from '../../atoms'
import { Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/actions'

export const LogoutTemplate: FC = () => {
  const dispatch = useDispatch()
  return (
    <Box>
      <Title>Logout</Title>
      <Btn onClick={() => dispatch(logout())}>Logout</Btn>
    </Box>
  )
}
