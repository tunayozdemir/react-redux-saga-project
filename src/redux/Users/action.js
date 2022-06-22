import ActionsTypes from './actionTypes'

const setUsers = (users) => ({
  type: ActionsTypes.SET_USERS,
  payload: users
})

const getUsers = () => ({
  type: ActionsTypes.GET_USERS,
})

const usersActions = {
  setUsers,
  getUsers
}

export default usersActions