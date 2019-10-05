import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpWithEmail } from '../../../redux/actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const handleSignUp = e => {
    e.preventDefault()
    const payload = {
      name, email, password
    }
    dispatch(signUpWithEmail(payload))
  }

  return (
    <form onSubmit={ handleSignUp }>
      <h1>Create Account</h1>
      <div className="social-container">
        <a href="facebook.com" className="social"> <FontAwesomeIcon icon={['fab', 'facebook']}/> </a>
        <a href="google.com" className="social"> <FontAwesomeIcon icon={['fab', 'google']}/> </a>
        <a href="microsof.com" className="social"> <FontAwesomeIcon icon={['fab', 'microsoft']}/> </a>
      </div>
      <span>or use your email for registration</span>
      <input 
        type="text" 
        placeholder="Name"
        value={ name }
        onChange={ e => setName(e.target.value) }
      />
      <input 
        type="email" 
        placeholder="Email"
        value={ email }
        onChange={ e => setEmail(e.target.value) }
      />
      <input 
        type="password"
        placeholder="Password"
        value={ password }
        onChange={ e => setPassword(e.target.value) }
      />
      <button type="submit">Sign Up</button>
    </form>
  )
}
