import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF ,faInstagram } from '@fortawesome/free-brands-svg-icons'

import "../../style/global.css"


const footer = {
    bottom: "0",
    height: "2.5rem",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "75vw",
    alignItems: "center",
    marginTop: "2em",
}

const footerNav = {
    display: "flex",
    justifyContent: "space-between",
    float: "left",
}


export default function Footer() {
    return (
        <div className="footer" style={footer}>
          <ul style={footerNav}>
            <li style={{marginLeft: "-2em"}}>
              <Link to="/impressum">IMPRESSUM</Link>
            </li>
            <li>
              <Link to="/datenschutz">DATENSCHUTZ</Link>
            </li>
            <li><a href="#!"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://www.facebook.com/BirgitMatthiasKunst/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
          </ul>
        </div>
    )
}
