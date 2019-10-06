// import { auth, db, timestamp } from '../../apis/firebase'
// const passwords = db.collection('passwords')

import { auth, timestamp } from '../../apis/firebase'
import passwords from '../../apis/db'

export const signUpWithEmail = (payload) => dispatch => {
  dispatch({
    type: 'SET_LOADING',
    payload: true
  })
  auth.createUserWithEmailAndPassword(payload.email, payload.password)
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

export const signInWithEmail = (payload) => dispatch => {
  dispatch({
    type: 'SET_LOADING',
    payload: true
  })
  auth.signInWithEmailAndPassword(payload.email, payload.password)
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

export const signOut = () => dispatch => {
  dispatch({
    type: 'SET_LOADING',
    payload: false
  })
  auth.signOut().then(function() {
    dispatch({
      type: 'SET_USER',
      payload: null
    })
    dispatch({
      type: 'SET_LOADING',
      payload: false
    })
  }).catch(function(error) {
    dispatch({
      type: 'SET_ERROR',
      payload: error
    })
    dispatch({
      type: 'SET_LOADING',
      payload: false
    })
  });
} 

export const checkLoggedUser = () => dispatch => {
  dispatch({
    type: 'SET_LOADING',
    payload: true
  })
  auth.onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: 'SET_USER',
        payload: user
      })
      dispatch({
        type: 'SET_LOADING',
        payload: false
      })
    } else {
      dispatch({
        type: 'SET_USER',
        payload: null
      })
      dispatch({
        type: 'SET_LOADING',
        payload: false
      })
    }
  })
}

export const addPassword = (payload) => dispatch => {
  passwords.add({
    name: payload.name,
    url: payload.url,
    username: payload.username,
    password: payload.password,
    uid: payload.uid,
    createdAt: timestamp,
    updatedAt: timestamp
  })
  .then(docRef => {
    console.log('berhasil add password', docRef)
  })
  .catch(error => {
    console.log('gagal add password', error)
  })
}

export const updatePassword = (payload) => dispatch => {
  let aPassword = passwords.doc(payload.id)
  console.log(aPassword)

  return aPassword.update({
    name: payload.name,
    url: payload.url,
    username: payload.username,
    password: payload.password,
    updatedAt: timestamp
  })
  .then(() => {
    console.log('document added succesfully')
  })
  .catch(error => {
    console.log('error updating document', error)
  })
}

export const fetchPasswords = (uid) => dispatch => {
  dispatch({
    type: 'SET_PASS_LOADING',
    payload: true
  })
  passwords.orderBy('createdAt', 'desc').where("uid", "==", uid)
    .onSnapshot(querySnapshot => {
      const passwordsList = []
      querySnapshot.docs.forEach(doc => {
        let password = doc.data()
        let id = doc.id
        passwordsList.push({...password, id})
      })
      dispatch({
        type: 'FETCH_PASSWORDS',
        payload: passwordsList 
      })
      dispatch({
        type: 'SET_PASS_LOADING',
        payload: false
      })
    })
}

export const deletePassword = (id) => dispatch => {
  console.log(id)
  passwords.doc(id).delete()
    .then(() => {
      console.log('Document successfully deleted!')
    })
    .catch(error => {
      console.log('error delete password', error)
    })
}