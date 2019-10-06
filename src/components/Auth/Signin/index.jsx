import React, { useContext, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../../../contexts'
import { signInWithEmail } from '../../../redux/actions'
import './index.css'

import Swal from 'sweetalert2'
import firebase, { auth } from '../../../apis/firebase'
import SocialButton from 'react-firebaseui/StyledFirebaseAuth'

export default () => {
  const { dispatch } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const reduxDisptach = useDispatch()
  const error = useSelector(state => state.auth.error)

  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    } 
  };

  const handleClick = e => {
    e.preventDefault()
    dispatch({type: 'SET_SIGNUP', payload: true})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const payload = {
      email, password
    }
    reduxDisptach(signInWithEmail(payload))
  }

  useEffect(() => {
    if (error) {
      Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 4000
      }).fire({
        type: 'warning',
        title: error.message
      })
      reduxDisptach({type: 'SET_ERROR', payload: null})
    }
    // eslint-disable-next-line
  }, [error])

  return (
    <>
      <div id='form-container'>
        <form id="form-input" onSubmit={ handleSubmit }>
          <h3 style={{fontSize: '1.5rem'}}>Signin with your account.</h3>
          <label>Email</label>
          <input 
            data-testid="login-email"
            type="email"
            value={ email }
            onChange={ e => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input 
            type="password" 
            value={ password }
            onChange={ e => setPassword(e.target.value)}
          />
          <button data-testid="login-btn" type="submit">Sign In</button>
        </form>
        <span>Don't have an account? <a href="" onClick={ handleClick }>Signup</a> </span>
        <span style={{ fontSize: '0.9rem' }}>or signin with</span>
        <SocialButton 
          uiConfig={ uiConfig }
          firebaseAuth={ auth }
        />
      </div>
    </>
  )
}
