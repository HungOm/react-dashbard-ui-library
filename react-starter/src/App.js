import React, { Component } from 'react'
import Router from './shared/Router'

import './vendor/styles/bootstrap.scss'
import './vendor/styles/appwork.scss'
import './vendor/styles/theme-corporate.scss'
import './vendor/styles/colors.scss'
import './vendor/styles/uikit.scss'
import './App.scss'

class App extends Component {
  render() {
    return <Router />
  }
}

export default App
