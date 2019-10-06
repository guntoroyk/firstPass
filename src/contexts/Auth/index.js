import React, { useReducer } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SIGNUP':
      return {
        ...state,
        signup: action.payload
      }
    default:
      return { ...state }
  }
}

const initialState = {
  signup: false,
}

export const AuthContext = React.createContext(initialState)

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }} >
      { children }
    </AuthContext.Provider>
  )
}
