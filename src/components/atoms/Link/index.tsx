import { Link as RouterLink, LinkProps } from 'react-router-dom'
import { Link as MuiLink, LinkBaseProps } from '@mui/material'
import React, { FC } from 'react'

export const Link: FC<LinkBaseProps & LinkProps> = ({ children, ...props }) => {
  return (
    <MuiLink component={RouterLink} {...props}>
      {children}
    </MuiLink>
  )
}
