import { call, put } from 'redux-saga/effects'
import axios from "axios";
import ActionsTypes from '../Users/action'

const fetchUsers = async () => {
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
  try{
    const response = yield call(fetchUsers);
    yield put(ActionsTypes.setUsers(response))
  }catch(err){
    console.log(err)
  }


}