import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpWithEmail } from '../../../redux/actions'
import { AuthContext } from '../../../contexts'
import './index.css'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const reduxDispatch = useDispatch()
  const { state, dispatch } = useContext(AuthContext)

  const handleClick = e => {
    e.preventDefault()
    dispatch({type: 'SET_SIGNUP', payload: false})

  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({type: 'SET_SIGNUP', payload: true})
    console.log(state.signup, 'dari signup')
    const payload = {
      name, email, password
    }
    reduxDispatch(signUpWithEmail(payload))
  }
  return (
    <>
      <div id='form-container'>
        <form id="form-input" onSubmit={ handleSubmit }>
          <h3>Create an account.</h3>
          <label>Name</label>
          <input 
            type="text"
            value={ name }
            onChange={ e => setName(e.target.value) }
          />
          <label>Email</label>
          <input 
            type="email"
            value={ email }
            onChange={ e => setEmail(e.target.value) }
          />
          <label>Master password</label>
          <input 
            type="password" 
            value={ password }
            onChange={ e => setPassword(e.target.value) }
          />
          <button type="">Sign Up</button>
        </form>
        <span>Already have an account? <a href="" onClick={ handleClick } >Signin</a> </span>
      </div>
    </>
  )
}
