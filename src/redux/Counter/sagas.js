import { delay, put, takeLatest } from "@redux-saga/core/effects";
import Action from "./actions";
import ActionsTypes from "./actionTypes";

function* handleIncremant(action) {
  yield delay(2000)
  yield put(Action.increaseCount(action.payload))
}

function* handleDecremant(action) {
  yield delay(2000)
  yield put(Action.decreasCount(action.payload))
}

export function* watchIncremetn() {
  yield takeLatest(ActionsTypes.ASYNC_INCREMENT, handleIncremant)
}

export function* watchDecremetn() {
  yield takeLatest(ActionsTypes.ASYNC_DECEMENT, handleDecremant)
}
