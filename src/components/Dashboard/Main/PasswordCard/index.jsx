import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormModal from '../../FormModal'
import Swal from 'sweetalert2'
import { deletePassword } from '../../../../redux/actions'

export default (props) => {
  const password = props.password
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = useState(false)
  const [modalType, setModalType] = useState('')
  const [modalTitle, setmodalTitle] = useState('')
  const [modalReadOnly, setModalReadOnly] = useState(false)
  const [modalDataPassword, setModalDataPassword] = useState('')

  const handleDetail = () => {
    setModalType('detail')
    setmodalTitle('Data Details')
    setModalDataPassword(password)
    setModalReadOnly(true)
    setModalShow(true)
  }

  const handleEdit = () => {
    setModalType('edit')
    setmodalTitle('Edit Password')
    setModalDataPassword(password)
    setModalReadOnly(false)
    setModalShow(true)
  }

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure to delete this password?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#71c9ce',
      cancelButtonColor: 'rgb(184, 183, 183)',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        dispatch(deletePassword(password.id))
        Swal.mixin({
          toast: true,
          position: 'top',
          showConfirmButton: false,
          timer: 3000
        }).fire({
          type: 'success',
          title: 'Password record deleted!'
        })
      }
    })
  }

  return (
    <>
      <Card className="password-card" style={{ width: '18rem' }}>
        <Card.Body>
          <h4>{password.name}</h4>
          <div className="d-flex flex-column">
            <a 
              href={`http://${password.url}`} 
              target="_blank"
              style={{ color: '#70C9CE' }}
            >
              {password.url}
            </a>
            <span
              style={{ fontSize: '0.9rem' }} 
            >
              {password.username}
            </span>
            <div className="align-self-end" id="button-control">
              <button title="Detail" onClick={ handleDetail }> <FontAwesomeIcon icon="info-circle" /> </button> 
              <button title="Edit" onClick={ handleEdit }> <FontAwesomeIcon icon="pen" /> </button> 
              <button title="Delete" onClick={ handleDelete }> <FontAwesomeIcon icon="trash" /> </button> 
            </div>
          </div>
        </Card.Body>
      </Card>
      <FormModal 
          show={ modalShow }
          onHide={() => setModalShow(false)}
          modalType={ modalType }
          modalTitle={ modalTitle }
          dataPassword= { password }
          modalReadOnly= { modalReadOnly }
        />
    </>
  )
}
