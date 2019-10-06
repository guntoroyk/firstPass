import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'

import './index.css'

export default () => {
  const history = useHistory()
  const { user } = useSelector(state => state.auth)
  return (
    <>
      <div className="home">
        <Navbar />
        <div style={{width: '30vw', position: "relative", top: '15vh', left: '20vw', color: 'white'}}>
          <p style={{fontSize: '3rem', fontWeight: '600', marginBottom: 0}}>FirstPass!</p>
          <p style={{fontSize: '3rem', fontWeight: '600', marginTop: 0,
          marginBottom: '1.5vh'}}>Simply your life..</p>
          <p style={{fontSize: '1.2rem', lineHeight: '1.5'}}>FirstPass remembers all your paswords, so you don't have to.</p>
          <button 
            className="btnSignin" 
            style={{border: 'none', padding: '10px 25px', borderRadius: '30px'}}
            onClick={ user ? () => history.push('/dashboard') : () => history.push('/auth') }
          >
            Get started
          </button>
        </div>
      </div>
    </>
  )
}
