import { call, put } from 'redux-saga/effects'
import axios from "axios";
import ActionsTypes from '../Users/action'

async function fetchUsers() {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    return data;
  } catch (err) {
    console.log(err)
  }
}

export function* handleGetUser() {
  const users = yield call(fetchUsers);
  yield put(ActionsTypes.setUsers(users))
}