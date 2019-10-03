import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts'
import '../index.css'

export default () => {
  const { state, dispatch } = useContext(AuthContext)
  console.log(state, 'dari overlay') 
  return (
    <div className="overlay">
      <div className="overlay-panel overlay-left">
        <h1>Welcome Back!</h1>
        <p>
          To keep connected with use please login with your personal info
        </p>
        <button className="ghost" id="signIn" onClick={() => dispatch({type: 'SET_RIGHT_PANEL_ACTIVE', value: false})} >Sign In</button>
      </div>
      <div className="overlay-panel overlay-right">
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <button className="ghost" id="signUp" onClick={() => dispatch({type: 'SET_RIGHT_PANEL_ACTIVE', value: true})} >Sign Up</button>
      </div>
    </div>
  )
}
