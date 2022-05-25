import { styled } from '@mui/material'

export const NavbarStyles = styled('nav')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  position: 'sticky',
  top: 0,
  height: '4.5rem',
  zIndex: 1,
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  padding: `${theme.spacing(1)} ${theme.spacing(1.5)} `,
  justifyContent: 'space-between',
  img: {
    width: '3rem',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
  },
}))
