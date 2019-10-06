import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './index'
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import {Provider} from 'react-redux'
import store from '../../redux/store'
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faUnlockAlt)

test('Render home without crashing', ()=>{
  const history = createMemoryHistory()
  const { getByTestId, getByText, container } = render(
    <Provider store={store}>
      <Router history={history}>
          <Home />
      </Router>
    </Provider>
  )
    const home = getByTestId('landing-page')
    expect(home).toBeInTheDocument()
    expect(home).toBeVisible()
    expect(getByText(/FirstPass!/i)).toBeInTheDocument()
    expect(getByText(/Simply your life../i)).toBeInTheDocument()
    expect(getByText(/FirstPass remembers all your paswords, so you don't have to./i)).toBeInTheDocument()

    expect(container.querySelector('.btnSignin')).toBeInTheDocument()
})