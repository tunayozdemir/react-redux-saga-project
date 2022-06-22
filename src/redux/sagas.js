import {all} from 'redux-saga/effects'
import UserSaga from './Users/sagas'


export default function* rootSaga(){
  yield all([
    UserSaga()
  ])
}