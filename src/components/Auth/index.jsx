import React, { useContext } from 'react'
import { AuthContext } from '../../contexts'
import Signin from './Signin'
import Signup from './Signup'

export default () => {
  const { state } = useContext(AuthContext)
  console.log(state.signup, 'state.signup dari component auth index')
  return (
    <>
      <div className="auth" style={{backgroundColor: '#F9FBFD'}}>
        { state.signup ? <Signup /> : <Signin />}
      </div>
    </>
  )
}
