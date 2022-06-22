
import {takeLatest} from 'redux-saga/effects'
import ActionsTypes from '../Users/actionTypes'
import { handleGetUser } from './usersSaga'

export function* rootSaga(){
  yield takeLatest(ActionsTypes.GET_USERS, handleGetUser)
}

