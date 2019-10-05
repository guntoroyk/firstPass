import React from 'react'
import './index.css'

export default () => {
  return (
    <>
      <div id='form-container'>
        <form id="form-input">
          <h3 style={{fontSize: '1.5rem'}}>Signin with your account.</h3>
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <button type="">Submit</button>
        </form>
        <span>Don't have an account? <a href="">Signup</a> </span>
      </div>
    </>
  )
}
