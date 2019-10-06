import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AuthProvider } from '../../contexts'
import Auth from '../../components/Auth'
import RiseLoader from '../../components/Loaders/RiseLoader'

import './index.css'

export default () => {
  const history = useHistory()
  const user = useSelector(state => state.auth.user)
  const loading = useSelector(state => state.auth.loading)
  useEffect(() => {
    if (user) {
      history.push('/dashboard')
    }
    // eslint-disable-next-line
  }, [user])
  return (
    <>
      <div className="auth">
        
        <AuthProvider>
          { loading ? <RiseLoader loading={loading} /> : <Auth /> }
        </AuthProvider>
      </div>
    </>
  )
}
