import React from "react"
import { Link } from "gatsby"

import NavModal from "./NavModal"

import logo from "../../assets/images/logo.png"

import "../../style/global.css"
import { navStyle } from "./navbar.module.css"

const siteMenu = [
  {
    URL: "/",
    Label: "Home",
  },
  {
    URL: "/galerie",
    Label: "GALERIE",
  },{
    URL: "/aktuelles",
    Label: "AKTUELLES",
  },
  {
    URL: "/kontakt",
    Label: "KONTAKT",
  },
  {
    URL: "/presse",
    Label: "PRESSE",
  }
]

// TODO: size logo, provisory solution
export default function NavBar() {
    return (
        <div id="navbar" className={navStyle}>
          <Link to="/">
            <img src={logo} alt="logo Birgit" width="150px"/>
          </Link>
          <NavModal siteMenu={siteMenu} />
        </div>
    )
}
