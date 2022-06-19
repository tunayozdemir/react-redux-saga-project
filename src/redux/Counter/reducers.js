import ActionsTypes from './actionTypes'

const initialState = 0

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsTypes.INCREASE_COUNTER:
      return state + action.payload;
    case ActionsTypes.DECREASE_COUNTER:
      return state - action.payload;
    case ActionsTypes.RESET_COUNTER:
      return state = action.payload;
    default:
      return state
  }
}

export default reducer