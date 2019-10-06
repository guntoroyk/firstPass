import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navbar from './index'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {Provider} from 'react-redux'
import store from '../../store'

test('Render navbar without crashing', ()=>{
  const history = createMemoryHistory()
  const {getByTestId} = render(
    <Provider store={store}>
      <Router history={history}>
          <Navbar/>
      </Router>
    </Provider>
  )
    const navbar = getByTestId('navin')
    expect(navbar).toBeInTheDocument()
    expect(navbar).toBeVisible()
})