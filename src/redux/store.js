import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
// import thunk from 'redux-thunk'

import createSagaMiddleware from '@redux-saga/core'
import { rootSaga } from './Sagas/rootSaga';

const sagaMiddleware =createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  // composeEnhancers(applyMiddleware(thunk))
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export default store;