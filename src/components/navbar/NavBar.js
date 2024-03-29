import React from 'react'
import { Link } from 'gatsby'

import NavModal from './NavModal'

import logo from '../../assets/images/logo.png'

import '../../style/global.css'
import { navStyle } from './navbar.module.css'

const siteMenu = [
  {
    URL: '/',
    Label: 'Home'
  },
  {
    URL: '/galerie',
    Label: 'Galerie'
  },
  {
    URL: '/aktuelles',
    Label: 'Aktuelles'
  },
  {
    URL: '/kontakt',
    Label: 'Kontakt'
  },
  {
    URL: '/presse',
    Label: 'Presse'
  }
]

export default function NavBar() {
  return (
    <div className={navStyle}>
      <Link to="/">
        <img src={logo} alt="logo Birgit" />
      </Link>
      <NavModal siteMenu={siteMenu} />
    </div>
  )
}
