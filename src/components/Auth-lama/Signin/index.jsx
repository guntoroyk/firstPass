import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signInWithEmail } from '../../../redux/actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'

export default () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  
  const handleSignIn = e => {
    e.preventDefault()
    const payload = {
      email, password
    }
    dispatch(signInWithEmail(payload))
  }
  return (
    <form onSubmit={handleSignIn}>
      <h1>Sign In</h1>
      <div className="social-container">
        <a href="facebook.com" className="social"> <FontAwesomeIcon icon={['fab', 'facebook']}/> </a>
        <a href="google.com" className="social"> <FontAwesomeIcon icon={['fab', 'google']}/> </a>
        <a href="microsof.com" className="social"> <FontAwesomeIcon icon={['fab', 'microsoft']}/> </a>
      </div>
      <span>or use your account</span>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
      />
      <a href="facebook.com">Forgot your password?</a>
      <button type="submit">Sign In</button>
    </form>
  )
}
