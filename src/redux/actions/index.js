import { firebaseAuth } from '../../apis/firebase'
export const signUpWithEmail = (payload) => dispatch => {
  dispatch({
    type: 'SET_LOADING',
    payload: true
  })
  firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
  .then(user => {
    dispatch({
      type: 'SET_USER',
      payload: user.user
    })
    dispatch({
      type: 'SET_LOADING',
      payload: false
    })
  })
  .catch(error => {
    dispatch({
      type: 'SET_ERROR',
      payload: error
    })
    dispatch({
      type: 'SET_LOADING',
      payload: false
    })
  })
}

export const signInWithEmail = (payload) => dispatch => {
  dispatch({
    type: 'SET_LOADING',
    payload: true
  })
  firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
  .then(user => {
    dispatch({
      type: 'SET_USER',
      payload: user.user
    })
    dispatch({
      type: 'SET_LOADING',
      payload: false
    })
  })
  .catch(error => {
    console.log(error)
    dispatch({
      type: 'SET_ERROR',
      payload: error
    })
    dispatch({
      type: 'SET_LOADING',
      payload: false
    })
  })
}

export const checkLoggedUser = () => dispatch => {
  dispatch({
    type: 'SET_LOADING',
    payload: true
  })
  firebaseAuth.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: 'SET_USER',
        payload: user
      })
      dispatch({
        type: 'SET_LOADING',
        payload: true
      })
    } else {
      dispatch({
        type: 'SET_USER',
        payload: null
      })
      dispatch({
        type: 'SET_LOADING',
        payload: true
      })
    }
  })
}
