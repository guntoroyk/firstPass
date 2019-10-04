import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'

export default () => {
  // const dispatch = useMyDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = e => {
    // e.preventDefault()
    // const payload = {
    //   email, password
    // }
    // // console.log(payload)
    // dispatch(signInWithEmail(payload))
  }
  return (
    <form onSubmit={handleSignIn}>
      <h1>Sign In</h1>
      <div className="social-container">
        <a href="#" className="social"> <FontAwesomeIcon icon={['fab', 'facebook']}/> </a>
        <a href="#" className="social"> <FontAwesomeIcon icon={['fab', 'google']}/> </a>
        <a href="#" className="social"> <FontAwesomeIcon icon={['fab', 'microsoft']}/> </a>
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
      <a href="#">Forgot your password?</a>
      <button type="submit">Sign In</button>
    </form>
  )
}
