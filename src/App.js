import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faKey, faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css'
import Auth from './containers/Auth'
import Home from './containers/Home';
// import Dashboard from './containers/Dashboard'

import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fab, faKey, faUnlockAlt)

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(checkLoggedUser())
    // eslint-disable-next-line
  }, [])
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  )
}

export default App
