import { useState, useEffect, useContext, useReducer, createContext } from 'react'
import { myThunk } from './middlewares';


const createStore = (reducer, enhancer) => {
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer);
  }

  let currentState = null;
  let listeners = []

  const getState = () => currentState
  const dispatch = action => {
    currentState = reducer(currentState, action)
    listeners.forEach(listener => listener())
  }
  const subscribe = listener => {
    listeners.push(listener)
    const unsubscribe = () => {
      listeners.splice(listeners.indexOf(listener), 1)
    }
    return unsubscribe
  }

  dispatch({ type: 'INIT' })

  return { getState, dispatch, subscribe }
}

const applyMiddleware = middleware => createStore => reducer => {
  const store = createStore(reducer)

  const dispatch = action => {
    middleware(store)(store.dispatch)(action)
  }

  return {
    ...store,
    dispatch
  }
}

const initialState = {
  rightPanelActive: false,
  user: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_RIGHT_PANEL_ACTIVE':
      return {
        ...state,
        rightPanelActive: action.value
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'INIT':
      return initialState
    default:
      return state
  }
}

// STORE
export const store = createStore(reducer, applyMiddleware(myThunk))

// CONTEXT
export const AuthContext = createContext(null)

// SELECTOR
export const useMySelector = selector => {
  const store = useContext(AuthContext)
  const [data, setData] = useState(store.getState())
  useEffect(() => {
    return store.subscribe(() => {
      setData(Object.assign({}, store.getState()))
    })
  }, [store])
  return selector(data)
}

// DISPATCH
export const useMyDispatch = () => {
  const store = useContext(AuthContext)
  return store.dispatch
}
// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState)
  
//   return (
//     <AuthContext.Provider value={{ state, dispatch }} >
//       { children }
//     </AuthContext.Provider>
//     )
// }
  
window.store = store
