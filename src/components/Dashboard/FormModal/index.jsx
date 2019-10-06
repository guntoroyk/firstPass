import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Modal,  Form } from 'react-bootstrap'
import './index.css'

import { addPassword, updatePassword } from '../../../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Swal from 'sweetalert2'

export default (props) => { 
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [uc, setUc] = useState(false)
  const [lc, setLc] = useState(false)
  const [sc, setSc] = useState(false)
  const [hn, setHn] = useState(false)
  const [ml, setMl] = useState(false)

  const [percentage, setPercentage] = useState(0)
  const [error, setError] = useState(null)
  
  const uid = useSelector(state => state.auth.user.uid)
  // const { error } = useSelector( state => state.passwordLists)

  const { modalType, modalTitle, dataPassword, modalReadOnly } = props
  const dispatch = useDispatch()

  const hasLowerCase = (str) => {
    return (/[a-z]/.test(str));
  }

  const hasUpperCase = (str) => {
      return (/[A-Z]/.test(str));
  }

  const hasNumber = (str) => {
      return (/[0-9]/.test(str))
  }

  const hasSpecialChar = (str) => {
      return(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(str))
  }

  const moreThan6 = (str) => {
      if(str.length > 6){
          return true
      } else {
          return false
      }
  }

  const handlePassword = (password) => {
    // let password = e.target.value
    let poin = 0
    if (hasUpperCase(password)) {
      setUc(true)
      poin++
    } else {
      setUc(false)
    }
    if (hasLowerCase(password)) {
      setLc(true)
      poin++
    } else {
      setLc(false)
    }
    if (hasNumber(password)) {
      setHn(true)
      poin++
    } else {
      setHn(false)
    }
    if (hasSpecialChar(password)) {
      setSc(true)
      poin++
    } else {
      setSc(false)
    }
    if (moreThan6(password)) {
      setMl(true)
      poin++
    } else {
      setMl(false)
    }
    setPercentage(poin/5 * 100)
    setPassword(password)
  }

  const handleSave = () => {
    const payload = {
      name, url, username, password, uid
    }
    if (!error) {
      dispatch(addPassword(payload))
      props.onHide()
    } else {
      Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      }).fire({
        type: 'warning',
        title: error
      })
    }
  }

  const handleUpdate = () => {
    const payload = {
      id: dataPassword.id,
      name, 
      url,
      username, 
      password
    }
    if (!error) {
      dispatch(updatePassword(payload))
      props.onHide()
    } else {
      Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000
      }).fire({
        type: 'warning',
        title: error
      })
    }
  }

  useEffect(() => {
    if (dataPassword) {
      setName(dataPassword.name)
      setUrl(dataPassword.url)
      setUsername(dataPassword.username)
      handlePassword(dataPassword.password)
    }
    // eslint-disable-next-line
  }, [dataPassword])

  useEffect(() => {
    if (name === '') {
      setError('Name field is required!')
    }
    else if (url === '') {
      setError('URL field is required!')
    }
    else if (username === '') {
      setError('Username/email field is required!')
    }
    else if (password === '') {
      setError('Password field is required!')      
    }
    else if (percentage !== 100) {
      setError('Your password is less secure!')
    } 
    else {
      setError(null)
    }
    // eslint-disable-next-line
  }, [name, url, username, password, percentage])

  return (
    <Modal
      {...props}
      size="lg"
      dialogClassName="modal-50w"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          { modalTitle }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="d-flex justify-content-around">
            <Form.Group controlId="formBasicUsername" style={{ width: '100%', marginRight: '10px'}}>
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Name of site" 
                value={ name }
                onChange={ e => setName(e.target.value) }
                readOnly={ modalReadOnly }
              />
            </Form.Group>
            
            <Form.Group controlId="formBasicUsername" style={{ width: '100%'}}>
              <Form.Label>URL</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Url to site" 
                value={ url }
                onChange={ e => setUrl(e.target.value) }
                readOnly={ modalReadOnly }
              />
            </Form.Group>
          </div>
          
          <div className="d-flex">
            <Form.Group controlId="formBasicUsername" style={{ width: '100%',marginRight: '10px'}}>
              <Form.Label>Username/email</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Username or email on site" 
                value={ username }
                onChange={ e => setUsername(e.target.value) }
                readOnly={ modalReadOnly }
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword"style={{ width: '100%'}}>
              <Form.Label>Site Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={ password }
                onChange={ e => handlePassword(e.target.value) }
                readOnly={ modalReadOnly }
              />
            </Form.Group>
          </div>
          <div className="align-self-end">
            <p style={{ margin: 0 }}>Password Strength: { percentage } %</p>
            <ul style={{listStyleType: 'none', margin: 0}}>
              <li>[ { uc ? <FontAwesomeIcon icon="check" /> : <FontAwesomeIcon icon="times" /> } ] Uppercase</li>
              <li>[ { lc ? <FontAwesomeIcon icon="check" /> : <FontAwesomeIcon icon="times" /> } ] Lowercase</li>
              <li>[ { sc ? <FontAwesomeIcon icon="check" /> : <FontAwesomeIcon icon="times" /> } ] Special character</li>
              <li>[ { hn ? <FontAwesomeIcon icon="check" /> : <FontAwesomeIcon icon="times" /> } ] Has number</li>
              <li>[ { ml ? <FontAwesomeIcon icon="check" /> : <FontAwesomeIcon icon="times" /> } ] Length > 6</li>
            </ul>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <button className="btnCancel" onClick={ props.onHide }>
          { modalType === 'detail' ? 'Close' : 'Cancel' }
        </button>
        
        { modalType !== 'detail' 
          && 
          <button 
            className="btnSave" 
            onClick={ modalType === 'add' ? handleSave : handleUpdate }
          > { modalType === 'add' ? 'Save' : 'Update' } 
          </button> 
        }

      </Modal.Footer>
    </Modal>
  )
}
