import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { footer, footerNav } from './footer.module.css'
import '../../style/global.css'

export default function Footer() {
  return (
    <div className={footer}>
      <ul className={footerNav}>
        <li>
          <Link to="/impressum">IMPRESSUM</Link>
        </li>
        <li>
          <Link to="/datenschutz">DATENSCHUTZ</Link>
        </li>
        <li>
          <a href="#!">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/BirgitMatthiasKunst/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
      </ul>
    </div>
  )
}
