import React, { FC } from 'react'
import { NavbarStyles } from './styles'
import { Link } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../../assets/images/logo.svg'

export const Navbar: FC = () => {
  return (
    <NavbarStyles>
      <Link to={'/'} hrefLang={'/'}>
        <img src={logo} alt='hiberus' />
      </Link>
      <Link to={'/'}>Users</Link>
      <Link to={'/logout'}>logout</Link>
    </NavbarStyles>
  )
}
