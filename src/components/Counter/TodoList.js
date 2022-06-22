import React, {useEffect} from 'react'
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import Actions from '../../redux/Todo/action'


const todoData = {
  name:"Hello word"
}

const TodoList = () => {

  const todos = useSelector(value => value.Todos)
  const dispatch = useDispatch()

  console.log("Todo Render")

  useEffect(() => {
    const getTodos = async function(){
     dispatch(Actions.setTodos())
    }
    getTodos()
  }, [dispatch])
  

  return (
    <div>
      {/* Todo */}
      <ul>
        {todos && todos.map((items, index)=> {
          return(
            <li key={index}>{items.title}</li>
          )
        })}
      </ul>
      <Button onClick={()=>dispatch(Actions.addTodo(todoData))}>Add Todo Name</Button>
    </div>
  )
}
export default TodoList;