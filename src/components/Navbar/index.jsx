import React from 'react'
import { useHistory } from 'react-router-dom'
import {FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { Navbar, Nav } from 'react-bootstrap'
import './index.css'

export default () => {
  const history = useHistory()
  return (
   <>
    <Navbar className="navbar-custom">
      <Navbar.Brand className="navbar-brand" href="#"> <FontAwesomeIcon className="icon" icon="unlock-alt"/> </Navbar.Brand>
      <Nav className="ml-auto mr-1">
        <Nav.Link className="link" onClick={() => history.push('/auth')}>Signin</Nav.Link>
      </Nav>
    </Navbar>
   </>
 )
}
