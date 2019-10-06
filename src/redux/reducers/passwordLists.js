const initialState = {
  passwords: [],
  loading: false
}

const passwordListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PASSWORDS':
      return {
        ...state,
        passwords: action.payload
      }
    case 'SET_PASS_LOADING':
      return {
        ...state,
        loading: action.payload
      }
    default: 
      return state
  }
}

export default passwordListsReducer
