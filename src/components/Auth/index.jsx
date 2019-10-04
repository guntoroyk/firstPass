import React, { useContext } from 'react'
import './index.css'
import { useMySelector } from '../../contexts/Auth'
import Signin from './Signin'
import Signup from './Signup'
import Overlay from './Overlay'

export default () => {
  // const { state } = useContext('')
  const rightPanelActive = useMySelector(state => state.rightPanelActive)
  console.log(rightPanelActive, 'right panel active')

  return (
    <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}` } id="container">
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
