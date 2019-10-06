import firebase from './firebase'

export const firebaseAuth = firebase.auth()
export const db = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp()
