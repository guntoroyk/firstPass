import firebase from './firebase'

const db = firebase.firestore()

const passwordManager = db.collection('passwords')

export default passwordManager
