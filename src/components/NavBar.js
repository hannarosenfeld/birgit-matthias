import React, { Link, useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import "../style/main.css"

const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline"
}

const buttonStyle = {
    background: "none",
    border: "none",
    color: "black",
}

const modalStyle = {

}

const modalContentStyle = {
    background: "#FDA1C9",
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

      <Modal style={modalStyle} show={show} onHide={handleClose}>
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
          <div>brand</div>
            <NavModal/>
        </div>
    )
}
