import ActionsTypes from './actionTypes'
import axios from 'axios'

const addTodo = (todo)=> {
  return {type: ActionsTypes.ADD_TODO, payload:todo}
}

const setTodos = ()=> {
  return async function(dispatch){
    try{
      const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/')
      dispatch({type:ActionsTypes.SET_TODOS, payload:data})
    }
    catch(err){
      dispatch({type:ActionsTypes.ERROR, payload:err})
    }
  }
}



const todoActions = {
  addTodo,
  setTodos
}

export default todoActions;