import { Link as RouterLink, LinkProps } from 'react-router-dom'
import { Link as MuiLink, LinkBaseProps } from '@mui/material'
import React, { FC } from 'react'

export const Link: FC<LinkBaseProps & LinkProps> = ({ children, ...props }) => {
  return (
    <MuiLink
      sx={{ textDecoration: 'none', '&:hover': { opacity: 0.8 } }}
      component={RouterLink}
      {...props}
    >
      {children}
    </MuiLink>
  )
}
