import React, { Link} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from "@fortawesome/free-solid-svg-icons"
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
    padding: "0 2em"
}

export default function Footer() {
    return (
        <div>
          <ul className="footer" style={footer}>
              <li href="#">IMPRESSUM</li>
              <li href="#">DATENSCHUTZ</li>
              <li href="#">insta</li>
              <li href="#">fb</li>
          </ul>
        </div>
    )
}
