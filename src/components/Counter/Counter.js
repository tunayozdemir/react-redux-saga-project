import React from 'react'
import { Button } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import Actions from '../../redux/Counter/actions'


const Counter = () => {

  const count = useSelector(state => state.Count)
  const dispatch = useDispatch()

  console.log("Counter Render")
  
  return (
    <div>
      <Button onClick={()=>dispatch(Actions.increaseCount(50))}>INCREASE</Button>
      <Button onClick={()=>dispatch(Actions.decreasCount(40))}>DECREAS</Button>
      <Button onClick={()=>dispatch(Actions.resetCount(0))}>Reset</Button>
      {count}
    </div>
  )
}

export default Counter