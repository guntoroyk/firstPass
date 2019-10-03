import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'

export default () => {
  return (
    <form action="#">
      <h1>Create Account</h1>
      <div className="social-container">
        <a href="#" className="social"> <FontAwesomeIcon icon={['fab', 'facebook']}/> </a>
        <a href="#" className="social"> <FontAwesomeIcon icon={['fab', 'google']}/> </a>
        <a href="#" className="social"> <FontAwesomeIcon icon={['fab', 'microsoft']}/> </a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name"/>
      <input type="email" placeholder="Email"/>
      <input type="password" placeholder="Password"/>
      <button>Sign Up</button>
    </form>
  )
}
