import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class Switchers extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Switchers - Forms')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> Switchers
        </h4>

        <Card className="mb-4">
          <Card.Body>
            <label className="switcher">
              <input type="checkbox" className="switcher-input" />
              <span className="switcher-indicator">
                <span className="switcher-yes"></span>
                <span className="switcher-no"></span>
              </span>
              <span className="switcher-label">Default</span>
            </label>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">With icon</div>

            <label className="switcher">
              <input type="checkbox" className="switcher-input" />
              <span className="switcher-indicator">
                <span className="switcher-yes"><span className="ion ion-md-checkmark"></span></span>
                <span className="switcher-no"><span className="ion ion-md-close"></span></span>
              </span>
              <span className="switcher-label">With icon</span>
            </label>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Square</div>

            <label className="switcher switcher-square">
              <input type="checkbox" className="switcher-input" />
              <span className="switcher-indicator">
                <span className="switcher-yes"></span>
                <span className="switcher-no"></span>
              </span>
              <span className="switcher-label">Square</span>
            </label>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Sizes</div>

            <div className="demo-vertical-spacing-sm">
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
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Variations</div>

            <div className="demo-inline-spacing">
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
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Disabled</div>

            <div className="demo-vertical-spacing-sm">
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
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Validation states</div>

            <div className="demo-vertical-spacing-sm">
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
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Stacked</div>

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
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default Switchers
