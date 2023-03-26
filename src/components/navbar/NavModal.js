import React, { useState } from 'react'
import { Link } from 'gatsby'

import '../../style/global.css'
import {
  buttonStyle,
  modalStyle,
  modalContentStyle,
  navLink
} from './navModal.module.css'

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
      <Button className={buttonStyle} onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
      </Button>

      <Modal className={modalStyle} show={show} onHide={handleClose}>
        <Modal.Body className={modalContentStyle}>
          {siteMenu.map((item) => {
            return (
              <ul className={navLink} key={item.label}>
                <li>
                  <Link to={item.URL}>{item.Label}</Link>
                </li>
              </ul>
            )
          })}
        </Modal.Body>
      </Modal>
    </>
  )
}
