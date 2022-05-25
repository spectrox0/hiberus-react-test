import { Typography, TypographyProps } from '@mui/material'
import React, { FC, PropsWithChildren } from 'react'

export const Title: FC<PropsWithChildren<TypographyProps>> = ({
  variant = 'h1',
  children,
  ...props
}) => {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  )
}
