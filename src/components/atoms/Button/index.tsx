import React, { FC, PropsWithChildren } from 'react'
import { Button, ButtonProps } from '@mui/material'

export const Btn: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  variant = 'outlined',
  ...rest
}) => {
  return (
    <Button variant={variant} {...rest}>
      {children}
    </Button>
  )
}
