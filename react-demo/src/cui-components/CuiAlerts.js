import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'

class CiuAlerts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      alerts: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'dark'
      ],
      darkAlerts: [
        'dark-primary',
        'dark-secondary',
        'dark-success',
        'dark-danger',
        'dark-warning',
        'dark-info',
        'dark-dark'
      ]
    }
  }

  dismiss(variant) {
    this.setState({
      alerts: this.state.alerts.filter(_variant => _variant !== variant)
    })
  }

  dismissDark(variant) {
    this.setState({
      darkAlerts: this.state.darkAlerts.filter(_variant => _variant !== variant)
    })
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Alerts</h3>

        <h4 className="ui-block-heading">Light alerts</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          {this.state.alerts.map(variant =>
            <Alert dismissible variant={variant} key={variant} onClose={() => this.dismiss(variant)}>
              This is a {variant} alert — check it out!
            </Alert>
          )}
        </div>

        <h4 className="ui-block-heading">Dark alerts</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          {this.state.darkAlerts.map(variant =>
            <Alert dismissible variant={variant} key={variant} onClose={() => this.dismissDark(variant)}>
              This is a {variant} alert — check it out!
            </Alert>
          )}
        </div>
      </div>
    )
  }
}

export default CiuAlerts
