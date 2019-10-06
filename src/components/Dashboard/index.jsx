import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import './index.css'

export default () => {
  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <Main />
      </div>
    </>
  )
}
