import React from 'react'
import { AuthContext, store } from '../../contexts/Auth'
import Auth from '../../components/Auth'

import './index.css'

export default () => {
  return (
    <div className="auth">
      <AuthContext.Provider value={ store } >
        <Auth />
      </AuthContext.Provider>
    </div>
  )
}
