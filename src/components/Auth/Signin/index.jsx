import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'

export default () => {
  return (
    <form action="#">
      <h1>Sign In</h1>
      <div className="social-container">
        <a href="#" className="social"> <FontAwesomeIcon icon={['fab', 'facebook']}/> </a>
        <a href="#" className="social"> <FontAwesomeIcon icon={['fab', 'google']}/> </a>
        <a href="#" className="social"> <FontAwesomeIcon icon={['fab', 'microsoft']}/> </a>
      </div>
      <span>or use your account</span>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
    </form>
  )
}
