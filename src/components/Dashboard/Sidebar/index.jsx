import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'

export default () => {
  return (
    <>
      <ul className="sidebar">
        <li className="nav-collapse">
          <a href="#"> <FontAwesomeIcon icon="times" style={{ fontSize: '1.3rem', marginRight: '5px' }} /> Collapse</a>
        </li>
        <li className="active">
          <a href="#"> <FontAwesomeIcon icon="home" style={{ fontSize: '1.2rem', marginRight: '5px' }} /> All Items</a>
        </li>
        <li>
          <a href="#"> <FontAwesomeIcon icon="lock" style={{ fontSize: '1.2rem', marginRight: '5px' }} /> Password</a>
        </li>
        <li>
          <a href="#"> <FontAwesomeIcon icon="sticky-note" style={{ fontSize: '1.2rem', marginRight: '5px' }} /> Notes</a>
        </li>
        <li>
          <a href="#"> <FontAwesomeIcon icon="address-book" style={{ fontSize: '1.2rem', marginRight: '5px' }} /> Addresses</a>
        </li>
      </ul>
    </>
  )
}
