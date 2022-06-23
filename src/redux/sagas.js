import {all} from 'redux-saga/effects'
import User from './Users/sagas'
import * as Counter from './Counter/sagas'


 function* rootSaga(){
  yield all([
    User(),
    ...Object.values(Counter)
  ])
}

export default rootSaga;