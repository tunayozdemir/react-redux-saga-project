import { combineReducers } from 'redux';

import CountReducers from './Counter/reducers'
import TodoReducer from './Todo/reducer'

export default combineReducers({
  Count: CountReducers,
  Todos: TodoReducer,
})