import CountActions from '../redux/Counter/actions'
import TodoActions from '../redux/Todo/action'

const actions = Object.assign(
  CountActions,
  TodoActions,
)

export default actions;