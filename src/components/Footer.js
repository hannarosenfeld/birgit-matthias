import React, { Link} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebookF ,faInstagram } from '@fortawesome/free-brands-svg-icons'

import "../style/main.css"


const footer = {
    position: "absolute",
    bottom: "0",
    height: "2.5rem",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "75vw",
    alignItems: "center",
    padding: "0 1em"
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
            <li href="#" style={{marginLeft: "-2em"}}>IMPRESSUM</li>
            <li href="#">DATENSCHUTZ</li>
            <li><a><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="https://www.facebook.com/BirgitMatthiasKunst/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
          </ul>
        </div>
    )
}
