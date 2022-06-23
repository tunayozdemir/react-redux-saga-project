import ActionsTypes from './actionTypes'

const increaseCount = (val)=> {
  return {type: ActionsTypes.INCREASE_COUNTER, payload:val}
}

const increaseAsyncCount = (val)=> {
  return {type: ActionsTypes.ASYNC_INCREMENT, payload:val}
}


const decreasCount = (val)=> {
  return {type: ActionsTypes.DECREASE_COUNTER, payload:val}
}

const decreasAsyncCount = (val)=> {
  return {type: ActionsTypes.ASYNC_DECEMENT, payload:val}
}


const resetCount = (val)=> {
  return {type: ActionsTypes.RESET_COUNTER, payload:val}
}


const counterActions = {
  increaseCount,
  decreasCount,
  resetCount,

  increaseAsyncCount,
  decreasAsyncCount
}

export default counterActions;