import React, { Component } from 'react'

class CuiSwitchers extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Switchers</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example">
          <label className="switcher">
            <input type="checkbox" className="switcher-input" />
            <span className="switcher-indicator">
              <span className="switcher-yes"></span>
              <span className="switcher-no"></span>
            </span>
            <span className="switcher-label">Default</span>
          </label>
        </div>

        <h4 className="ui-block-heading">With icon</h4>

        <div className="cui-example">
          <label className="switcher">
            <input type="checkbox" className="switcher-input" />
            <span className="switcher-indicator">
              <span className="switcher-yes"><span className="ion ion-md-checkmark"></span></span>
              <span className="switcher-no"><span className="ion ion-md-close"></span></span>
            </span>
            <span className="switcher-label">With icon</span>
          </label>
        </div>

        <h4 className="ui-block-heading">Square</h4>

        <div className="cui-example">
          <label className="switcher switcher-square">
            <input type="checkbox" className="switcher-input" />
            <span className="switcher-indicator">
              <span className="switcher-yes"></span>
              <span className="switcher-no"></span>
            </span>
            <span className="switcher-label">Square</span>
          </label>
        </div>

        <h4 className="ui-block-heading">Sizes</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <label className="switcher switcher-sm">
            <input type="checkbox" className="switcher-input" />
            <span className="switcher-indicator">
              <span className="switcher-yes"><span className="ion ion-md-checkmark"></span></span>
              <span className="switcher-no"><span className="ion ion-md-close"></span></span>
            </span>
            <span className="switcher-label">Small</span>
          </label>

          <br />

          <label className="switcher switcher-lg">
            <input type="checkbox" className="switcher-input" />
            <span className="switcher-indicator">
              <span className="switcher-yes"><span className="ion ion-md-checkmark"></span></span>
              <span className="switcher-no"><span className="ion ion-md-close"></span></span>
            </span>
            <span className="switcher-label">Large</span>
          </label>
        </div>

        <h4 className="ui-block-heading">Variations</h4>

        <div className="cui-example cui-example-inline-spacing">
          <label className="switcher switcher-success">
            <input type="checkbox" className="switcher-input" defaultChecked />
            <span className="switcher-indicator">
              <span className="switcher-yes"><span className="ion ion-md-checkmark"></span></span>
              <span className="switcher-no"><span className="ion ion-md-close"></span></span>
            </span>
            <span className="switcher-label">Success</span>
          </label>

          <label className="switcher switcher-info">
            <input type="checkbox" className="switcher-input" defaultChecked />
            <span className="switcher-indicator">
              <span className="switcher-yes"><span className="ion ion-md-checkmark"></span></span>
              <span className="switcher-no"><span className="ion ion-md-close"></span></span>
            </span>
            <span className="switcher-label">Info</span>
          </label>

          <label className="switcher switcher-warning">
            <input type="checkbox" className="switcher-input" defaultChecked />
            <span className="switcher-indicator">
              <span className="switcher-yes"><span className="ion ion-md-checkmark"></span></span>
              <span className="switcher-no"><span className="ion ion-md-close"></span></span>
            </span>
            <span className="switcher-label">Warning</span>
          </label>

          <label className="switcher switcher-danger">
            <input type="checkbox" className="switcher-input" defaultChecked />
            <span className="switcher-indicator">
              <span className="switcher-yes"><span className="ion ion-md-checkmark"></span></span>
              <span className="switcher-no"><span className="ion ion-md-close"></span></span>
            </span>
            <span className="switcher-label">Danger</span>
          </label>

          <label className="switcher switcher-secondary">
            <input type="checkbox" className="switcher-input" defaultChecked />
            <span className="switcher-indicator">
              <span className="switcher-yes"><span className="ion ion-md-checkmark"></span></span>
              <span className="switcher-no"><span className="ion ion-md-close"></span></span>
            </span>
            <span className="switcher-label">Secondary</span>
          </label>

          <label className="switcher switcher-dark">
            <input type="checkbox" className="switcher-input" defaultChecked />
            <span className="switcher-indicator">
              <span className="switcher-yes"><span className="ion ion-md-checkmark"></span></span>
              <span className="switcher-no"><span className="ion ion-md-close"></span></span>
            </span>
            <span className="switcher-label">Dark</span>
          </label>
        </div>

        <h4 className="ui-block-heading">Disabled</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <div>
            <label className="switcher">
              <input type="checkbox" className="switcher-input" disabled />
              <span className="switcher-indicator">
                <span className="switcher-yes"></span>
                <span className="switcher-no"></span>
              </span>
              <span className="switcher-label">Default - OFF</span>
            </label>

            <label className="switcher">
              <input type="checkbox" className="switcher-input" defaultChecked disabled />
              <span className="switcher-indicator">
                <span className="switcher-yes"></span>
                <span className="switcher-no"></span>
              </span>
              <span className="switcher-label">Default - ON</span>
            </label>
          </div>

          <fieldset disabled>
            <label className="switcher switcher-success">
              <input type="checkbox" className="switcher-input" defaultChecked />
              <span className="switcher-indicator">
                <span className="switcher-yes"></span>
                <span className="switcher-no"></span>
              </span>
              <span className="switcher-label">Success - ON</span>
            </label>
          </fieldset>
        </div>

        <h4 className="ui-block-heading">Validation states</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <div className="form-group">
            <label className="switcher">
              <input type="checkbox" className="switcher-input is-valid" defaultChecked />
              <span className="switcher-indicator">
                <span className="switcher-yes"></span>
                <span className="switcher-no"></span>
              </span>
              <span className="switcher-label">Valid</span>
            </label>
          </div>

          <div className="form-group has-error">
            <label className="switcher">
              <input type="checkbox" className="switcher-input is-invalid" defaultChecked />
              <span className="switcher-indicator">
                <span className="switcher-yes"></span>
                <span className="switcher-no"></span>
              </span>
              <span className="switcher-label">Invalid</span>
            </label>
          </div>
        </div>

        <h4 className="ui-block-heading">Stacked</h4>

        <div className="cui-example">
          <div className="switchers-stacked">
            <label className="switcher">
              <input type="radio" className="switcher-input" name="switchers-stacked-radio" defaultChecked />
              <span className="switcher-indicator">
                <span className="switcher-yes"></span>
                <span className="switcher-no"></span>
              </span>
              <span className="switcher-label">Option 1</span>
            </label>

            <label className="switcher">
              <input type="radio" className="switcher-input" name="switchers-stacked-radio" />
              <span className="switcher-indicator">
                <span className="switcher-yes"></span>
                <span className="switcher-no"></span>
              </span>
              <span className="switcher-label">Option 2</span>
            </label>

            <label className="switcher">
              <input type="radio" className="switcher-input" name="switchers-stacked-radio" />
              <span className="switcher-indicator">
                <span className="switcher-yes"></span>
                <span className="switcher-no"></span>
              </span>
              <span className="switcher-label">Option 3</span>
            </label>
          </div>
        </div>
      </div>
    )
  }
}

export default CuiSwitchers
