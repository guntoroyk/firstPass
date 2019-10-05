import React from 'react'
import Navbar from '../../components/Navbar'
import { Button } from 'react-bootstrap'
import './index.css'


export default () => {
  return (
    <>
      <div className="home">
        <Navbar />
        <div style={{width: '30vw', position: "relative", top: '15vh', left: '20vw', color: 'white'}}>
          <p style={{fontSize: '3rem', fontWeight: '600', 
          marginBottom: '1.5vh'}}>Simply your life..</p>
          <p style={{fontSize: '1.2rem', lineHeight: '1.5'}}>FirstPass remembers all your paswords, so you don't have to.</p>
          <button class="btnSignin" style={{border: 'none', padding: '10px 25px', borderRadius: '30px'}}>Get started</button>
        </div>
      </div>
    </>
  )
}
