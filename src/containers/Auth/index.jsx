import React from 'react'
import { AuthProvider } from '../../contexts'
import Auth from '../../components/Auth'

import './index.css'

export default () => {
  return (
    <div className="auth">
      <AuthProvider>
        <Auth />
      </AuthProvider>
    </div>
  )
}
