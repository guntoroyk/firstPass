import { firebaseAuth, db } from '../../apis/firebase'
export const signUpWithEmail = (payload) => dispatch => {
  console.log('masuk action signup with email', payload)
  firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
  .then(user => {
    dispatch({
      type: 'SET_USER',
      payload: user
    })
  })
  .catch(error => {
    console.log(error, 'error signup with email')
    dispatch({
      type: 'SET_ERROR',
      payload: error
    })
  })
}

export const signInWithEmail = (payload) => dispatch => {
  console.log('masuk action signin with email', payload)
  // firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
  // .then(user => {
  //   dispatch({
  //     type: 'SET_USER',
  //     payload: user
  //   })
  // })
  // .catch(error => {
  //   console.log(error)
  //   dispatch({
  //     type: 'SET_ERROR',
  //     payload: error
  //   })
  // })
}
