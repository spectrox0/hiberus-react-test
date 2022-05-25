import React, { FC } from 'react'
import { NavbarStyles } from './styles'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../../assets/images/logo.svg'
import { Link } from '../../atoms/Link'
import { Container } from '@mui/material'
import { LogoutOutlined, PersonOutline } from '@mui/icons-material'

export const Navbar: FC = () => {
  return (
    <NavbarStyles>
      <Container
        maxWidth={'xl'}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Link to={'/'} hrefLang={'/'}>
          <img src={logo} alt='hiberus' />
        </Link>
        <ul>
          <li>
            <Link display={'flex'} alignItems={'center'} p={1} to={'/'}>
              <PersonOutline /> Users
            </Link>
          </li>
          <li>
            <Link display={'flex'} alignItems={'center'} p={1} to={'/logout'}>
              <LogoutOutlined /> Logout
            </Link>
          </li>
        </ul>
      </Container>
    </NavbarStyles>
  )
}
