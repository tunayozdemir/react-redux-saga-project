import ActionsTypes from './actionTypes'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.ADD_TODO:
      return [...state, action.payload]
    case ActionsTypes.SET_TODOS:
      return action.payload
    case ActionsTypes.ERROR:
      return action.payload
    default:
      return state
  }
}

export default reducer