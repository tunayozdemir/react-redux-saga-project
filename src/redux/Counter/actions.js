import ActionsTypes from './actionTypes'

const increaseCount = (val)=> {
  return {type: ActionsTypes.INCREASE_COUNTER, payload:val}
}
const decreasCount = (val)=> {
  return {type: ActionsTypes.DECREASE_COUNTER, payload:val}
}
const resetCount = (val)=> {
  return {type: ActionsTypes.RESET_COUNTER, payload:val}
}


const counterActions = {
  increaseCount,
  decreasCount,
  resetCount
}

export default counterActions;