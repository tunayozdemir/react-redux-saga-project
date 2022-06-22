import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ActionsTypes from '../../redux/Users/action'

const UserList = () => {
  const users = useSelector((state) => state.Users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ActionsTypes.getUsers())
  }, [dispatch])

  return (
    <div>
      <ul>
        {users && users.map((items, index) => {
          return (
            <li key={index}>{items.name}</li>
          )
        })}
      </ul>
    </div>
  )
}
export default UserList;