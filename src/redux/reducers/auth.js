const initialState = {
  user: null,
  loading: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      }
    default: 
      return state
  }
}

export default authReducer
