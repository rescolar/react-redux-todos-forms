import 'object-assign'
import 'es6-promise'
import 'whatwg-fetch'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../containers/App'
import configureStore from '../store/configure-store'
import reducer from '../reducers/reducers';

const store = configureStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

