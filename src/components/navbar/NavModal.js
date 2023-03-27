import React, { useState } from 'react'
import { Link } from 'gatsby'

import {
  buttonStyle,
  modalStyle,
  modalcontentStyle,
  navLink,
  modalContentContainer
} from './navModal.module.css'
import '../../style/global.css'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// TODO
// do we need all those IDs?
export default function NavModal({ siteMenu }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="outline" className={buttonStyle} onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
      </Button>

      <Modal className={modalStyle} show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header> */}

        {/* from react-bootstrap -> modal-dialog */}
        {/* from react-bootstrap -> modal-content */}
        <div className={modalContentContainer}>
          <Modal.Body className={modalcontentStyle}>
            {/* <button onClick={handleClose}>X</button> */}
            <ul className={navLink}>
              {siteMenu.map((item) => {
                return (
                  <li key={item.label}>
                    <Link to={item.URL}>{item.Label.toUpperCase()}</Link>
                  </li>
                )
              })}
            </ul>
          </Modal.Body>
        </div>
      </Modal>
    </>
  )
}
