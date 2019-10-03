import React, { useContext } from 'react'
import './index.css'
import { AuthContext } from '../../contexts'
import Signin from './Signin'
import Signup from './Signup'
import Overlay from './Overlay'

export default () => {
  const { state } = useContext(AuthContext)
  console.log(state, 'dari auth')

  return (
    <div className={`container ${state.rightPanelActive ? 'right-panel-active' : ''}` } id="container">
      <div className="form-container sign-up-container">
        <Signup />
      </div>
      <div className="form-container sign-in-container">
        <Signin />        
      </div>
      <div className="overlay-container">
        <Overlay />
      </div>
    </div>
  )
}
