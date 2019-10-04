import React, { useReducer } from 'react'

let reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RIGHT_PANEL_ACTIVE':
      return {
        ...state,
        rightPanelActive: action.value
      }
    default:
      return { ...state }
  }
}

const initialState = {
  rightPanelActive: false,
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
