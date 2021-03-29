import './polyfills'
import React from 'react'
import ReactDOM from 'react-dom'
import Popper from 'popper.js'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import store from './store'

// Required to enable animations on dropdowns/tooltips/popovers
Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
