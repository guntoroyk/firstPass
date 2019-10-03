import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './App.css'
import Auth from './containers/Auth'
import Home from './containers/Home';

library.add(fab)

function App() {
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
