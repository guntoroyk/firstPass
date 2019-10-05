import React from 'react'
import Signin from './Signin'
import Signup from './Signup'

export default () => {
  return (
    <>
      <div className="auth" style={{backgroundColor: '#F5F7F8'}}>
        {/* <Signup /> */}
        <Signin />
      </div>
    </>
  )
}
