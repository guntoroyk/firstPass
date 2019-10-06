import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './index.css'

import Navbar from '../../Navbar'
import PasswordCard from './PasswordCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FormModal from '../FormModal'
import GridLoader from '../../Loaders/GridLoader'

import { fetchPasswords } from '../../../redux/actions'

export default () => {
  const [modalShow, setModalShow] = useState(false)
  const [dataPasswords, setDataPasswords] = useState(null)
  const [search, setSearch] = useState(null)
  const { user } = useSelector(state => state.auth)
  const { passwords, loading } = useSelector(state => state.passwordLists)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPasswords(user.uid))
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if(!search) {
      setDataPasswords(passwords)
    } else {
      let siteName = new RegExp(search, 'i')
      let filtered = passwords.filter(el => {return siteName.test(el.name)})
      setDataPasswords(filtered)
    }
    // eslint-disable-next-line
  }, [passwords, search])

  return (
    <>
      <div className="main-page">
        <Navbar />
        <div className="header-list">
          <div className="left">
            <h4>All Items</h4>
            <input 
              type="text" 
              placeholder="search by site name" 
              value={ search } 
              onChange={ e => setSearch(e.target.value) }
            />
          </div>
          <div className="right">
            <button 
              className="btnAdd" 
              onClick={() => setModalShow(true)}
            > 
              <FontAwesomeIcon icon="plus" />
            </button>
          </div>
        </div>
        <div className="card-list">
          { loading || !dataPasswords ? <GridLoader /> : dataPasswords.map(password => (
            <PasswordCard password={ password } key={ password.id } />
          )) }
        </div>

        <FormModal 
          show={ modalShow } 
          onHide={() => setModalShow(false)}
          modalTitle="Add Password"
          modalType="add"
          dataPassword={null}
        />
      </div>
    </>
  )
}
