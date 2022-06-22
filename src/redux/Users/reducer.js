import ActionsTypes from './actionTypes'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.SET_USERS:
      return action.payload
    default:
      return state
  }
}

export default reducer