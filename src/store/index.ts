import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { rootSaga } from './sagas'
import { rootReducer } from './reducers'

export type { RootState } from './reducers'
// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))

// Run the saga
sagaMiddleware.run(rootSaga)

export default store
