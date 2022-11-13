import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from "../images/logo.png"

import "../style/main.css"

const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    margin: "0.5em auto"
}
const buttonStyle = {
    background: "none",
    border: "none",
    color: "black",
    fontSize: "1.8em"
}
const modalStyle = {
    margin: "0.5em auto"
}
const modalContentStyle = {
    background: "#FDA1C9",
    padding: "1em 2.5em",
    width: "10em",
    height: "10em",
    fontSize: "1.5em"
}
const navLink = {
    color: "#f9f7f7",
    listStyle: "none",
}


function NavModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={buttonStyle} onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
      </Button>

      <Modal style={modalStyle}show={show} onHide={handleClose}>
        <Modal.Body style={modalContentStyle}>
          <ul style={navLink} id="modal-menu">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/galerie">GALERIE</Link></li>
            <li><Link to="/aktuelles">AKTUELLES</Link></li>
            <li><Link to="/kontakt">KONTAKT</Link></li>
            <li><Link to="/presse">PRESSE</Link></li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default function NavBar() {
    return (
        <div id="navbar" style={navStyle}>
          <Link to="/"><img src={logo}/></Link>
            <NavModal/>
        </div>
    )
}
