import { compose, createStore, applyMiddleware } from 'redux'
import middleware from '../middleware/middleware'
import rootReducer from '../reducers/combined'
import { enableBatching } from 'redux-batched-actions'

const configureStore = () => {
  const store = createStore(rootReducer, compose(
  // const store = createStore(enableBatching(rootReducer), compose(
    applyMiddleware(...middleware),
    // window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return store
}

export default configureStore

