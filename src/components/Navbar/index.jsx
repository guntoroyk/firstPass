import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../../redux/actions'

import {FontAwesomeIcon }from '@fortawesome/react-fontawesome'
import { Navbar, Nav } from 'react-bootstrap'
import Swal from 'sweetalert2'
import './index.css'

export default () => {
  const history = useHistory()
  const user = useSelector(state => state.auth.user)
  const disptach = useDispatch()
  const handleSignOut = e => {
    e.preventDefault()
    Swal.fire({
      title: 'Are you sure to logout?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#71c9ce',
      cancelButtonColor: 'rgb(184, 183, 183)',
      confirmButtonText: 'Yes, logout!'
    }).then((result) => {
      if (result.value) {
        disptach(signOut())
      }
    })
  }

  const goToHome = e => {
    e.preventDefault()
    history.push('/')
  }
  return (
   <>
    <Navbar data-testid="navin" className="navbar-custom">
      <Navbar.Brand className="navbar-brand" href="" onClick={ goToHome }> <FontAwesomeIcon className="icon" icon="unlock-alt" style={{cursor: 'pointer'}}/> </Navbar.Brand>
      <Nav className="ml-auto mr-1">

        { user ?  
          <Nav.Link className="link" onClick={ handleSignOut }>Signout</Nav.Link>
          :
          <Nav.Link className="link" onClick={() => history.push('/auth')}>Signin</Nav.Link>
        }
        
      </Nav>
    </Navbar>
   </>
 )
}
