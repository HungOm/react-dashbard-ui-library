import React, { Component } from 'react'
import Router from './shared/Router'

import { connect } from 'react-redux'
import { updateThemeSettings } from './store/actions/themeActions'
import themeSettings from './vendor/libs/theme-settings'

import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    // Update store on theme settings change
    themeSettings._themeSettings.settings.onSettingsChange = () =>
      this.props.updateThemeSettings()
  }

  render() {
    return <Router />
  }
}

export default connect(null, { updateThemeSettings })(App)
