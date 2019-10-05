import { combineReducers } from 'redux'
import authReducer from './auth'
import passwordListsReducers from './passwordLists'

export default combineReducers({
  auth: authReducer,
  passwordLists: passwordListsReducers
})

// const initialState = {
//   user: null
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_USER':
//       return {
//         ...state,
//         user: action.payload
//       }
//     default: 
//       return state
//   }
// }
