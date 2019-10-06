import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import store from './redux/store'
// import { db } from './apis/firebase'

// const passwords = db.collection('passwords')

jest.mock('./apis/db', () => {
  return {
      where: jest.fn(() => {
          return {
              onSnapshot: jest.fn()
          }
      }),
  }
})

jest.mock("./apis/firebase", () => ({
  auth: {
      onAuthStateChanged: jest.fn()
  }
}))


it('renders without crashing', () => {
  const history = createMemoryHistory()
  const div = document.createElement('div');
  ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
