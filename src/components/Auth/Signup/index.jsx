import React from 'react'
import './index.css'

export default () => {
  return (
    <>
      <div id='form-container'>
        <form id="form-input">
          <h3>Create an account.</h3>
          <label>Email</label>
          <input type="email" />
          <label>Master password</label>
          <input type="password" />
          <label>Reminder (optional)</label>
          <input type="text" />
          <button type="">Submit</button>
        </form>
        <span>Don't have an account? <a href="">Signup</a> </span>
      </div>
    </>
  )
}
