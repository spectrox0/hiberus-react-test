import { Typography, TypographyProps } from '@mui/material'
import React, { FC, PropsWithChildren } from 'react'

export const Text: FC<PropsWithChildren<TypographyProps>> = ({ variant = 'body1', children }) => {
  return <Typography variant={variant}>{children}</Typography>
}
