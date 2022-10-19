import React, { Link, useEffect, useState } from "react"
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
            <li href="#">HOME</li>
            <li href="#">GALERIE</li>
            <li href="#">AKTUELLES</li>
            <li href="#">KONTAKT</li>
            <li href="#">PRESSE</li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default function NavBar() {
    return (
        <div style={navStyle}>
          <div><img src={logo}/></div>
            <NavModal/>
        </div>
    )
}
