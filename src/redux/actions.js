import * as CountActions from '../redux/Counter/actions'
import * as TodoActions from '../redux/Todo/action'
import * as UserAction from '../redux/Users/action'

const actions = Object.assign(
  CountActions,
  TodoActions,
  UserAction,
)

export default actions;