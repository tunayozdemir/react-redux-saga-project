import axios from "axios";
import {takeLatest, call, put } from 'redux-saga/effects'
import Actions from './action'
import ActionsTypes from "./actionTypes";

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

function* handleGetUser() {
  try{
    const response = yield call(fetchUsers);
    yield put(Actions.setUsers(response))
  }catch(err){
    console.log(err)
  }
}

export default function* rootSaga(){
  yield takeLatest(ActionsTypes.GET_USERS, handleGetUser)
}

