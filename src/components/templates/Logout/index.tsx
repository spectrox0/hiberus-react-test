import React, { FC } from 'react'
import { Btn, Text } from '../../atoms'
import { Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { logout } from '../../../store/actions'

export const LogoutTemplate: FC = () => {
  const dispatch = useDispatch()
  return (
    <Box
      my={2}
      flex={1}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Text my={2}>Are you sure you want log out?</Text>
      <Btn sx={{ my: 2 }} onClick={() => dispatch(logout())}>
        Log out
      </Btn>
    </Box>
  )
}
