import React, { FC } from 'react'
import { CircularProgress, CircularProgressProps } from '@mui/material'

export const Spinner: FC<CircularProgressProps> = (props) => {
  return <CircularProgress {...props} />
}
