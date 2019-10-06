import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { checkLoggedUser } from './redux/actions'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faKey, 
  faUnlockAlt, 
  faTimes, 
  faHome, 
  faLock, 
  faAddressBook, 
  faStickyNote, 
  faPlus,
  faInfoCircle,
  faPen,
  faTrash,
  faCheck,
  faChevronCircleLeft,
  faEye,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Auth from './containers/Auth'
import Home from './containers/Home'
import RiseLoader from './components/Loaders/RiseLoader'
import Dashboard from './containers/Dashboard'

library.add(
  fab,
  faKey, 
  faUnlockAlt, 
  faTimes, 
  faHome, 
  faLock, 
  faAddressBook, 
  faStickyNote, 
  faPlus,
  faInfoCircle,
  faPen,
  faTrash,
  faCheck,
  faChevronCircleLeft,
  faEye,
  faEyeSlash
)

function App() {
  const dispatch = useDispatch()
  const { user, loading } = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(checkLoggedUser())
    // eslint-disable-next-line
  }, [])
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/dashboard">
              { loading ? <RiseLoader loading={loading} /> : user ? <Dashboard /> : <Redirect to="/"/> }
            </Route>
            <Route path="/auth">
              { loading ? <RiseLoader loading={loading} /> : <Auth /> }
            </Route>
            <Route path="/">
              { loading ? <RiseLoader loading={loading} /> : <Home /> }
            </Route>
          </Switch>
        </Router>
    </div>
  )
}

export default App
