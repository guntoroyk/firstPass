import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import FormModal from '../FormModal'

export default () => {
  const [modalShow, setModalShow] = useState(false)
 
  const handleAdd = e => {
    e.preventDefault()
    setModalShow(true)
  }
  return (
    <>
      <ul className="sidebar">
        <li className="nav-collapse">
          <span href="#"> FirstPass! </span>
        </li>
        <li className="active">
          <a href="#"> <FontAwesomeIcon icon="home" style={{ fontSize: '1.2rem', marginRight: '5px' }} /> All Items</a>
        </li>
        <li>
          <a href="" onClick={ handleAdd } > <FontAwesomeIcon icon="plus" style={{ fontSize: '1.2rem', marginRight: '5px' }} /> Add Password</a>
        </li>
      </ul>

      <FormModal 
          show={ modalShow } 
          onHide={() => setModalShow(false)}
          modalTitle="Add Password"
          modalType="add"
          dataPassword={null}
      />
    </>
  )
}
