import firebase from "firebase"

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  apiKey: "AIzaSyDnH4PuTxvh4px09jslZOnRrarAZhdUIhg",
  authDomain: "firstpass-5d751.firebaseapp.com",
  databaseURL: "https://firstpass-5d751.firebaseio.com",
  projectId: "firstpass-5d751",
  storageBucket: "",
  messagingSenderId: "674102700082",
  appId: "1:674102700082:web:1dbba363308ea7f32e742b"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp()
export default firebase
