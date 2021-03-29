import React, { Component } from 'react'
import { Form, Card } from 'react-bootstrap'

class CustomControls extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Custom controls - Forms')
  }

  componentDidMount() {
    this.indeterminateCheckbox.indeterminate = true
    this.disabledIndeterminateCheckbox.indeterminate = true
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> Custom controls
        </h4>

        <Card className="mb-4">
          <Card.Header as="h6">Checkboxes and radios</Card.Header>
          <Card.Body className="demo-vertical-spacing-sm">
            {/* Custom checkbox */}
            <Form.Check custom type="checkbox" id="custom-checkboxes-example-1"
              label="Check this custom checkbox" />

            {/* Custom indeterminate checkbox */}
            <Form.Check custom type="checkbox" id="custom-checkboxes-example-2"
              label="Check this custom checkbox" ref={el => this.indeterminateCheckbox = el} />

            {/* Custom radios */}
            <div>
              <Form.Check custom inline type="radio" name="custom-radios-example" id="custom-radios-example-1"
                label="Toggle this custom radio" />

              <Form.Check custom inline type="radio" name="custom-radios-example" id="custom-radios-example-2"
                label="Or toggle this other custom radio" />
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Disabled</div>

            <div className="demo-vertical-spacing-sm">
              {/* Custom checkboxes */}
              <div>
                <Form.Check disabled custom type="checkbox" id="disabled-custom-checkboxes-example-1"
                  label="Check this custom checkbox" />

                <Form.Check disabled custom type="checkbox" id="disabled-custom-checkboxes-example-2"
                  label="Check this custom checkbox" ref={el => this.disabledIndeterminateCheckbox = el} />

                <Form.Check disabled checked custom type="checkbox" id="disabled-custom-checkboxes-example-3"
                  label="Check this custom checkbox" />
              </div>

              {/* Custom radios */}
              <div>
                <Form.Check disabled custom type="radio" name="disabled-custom-radios-example" id="disabled-custom-radios-example-1"
                  label="Toggle this custom radio" />
                  
                <Form.Check disabled custom type="radio" name="disabled-custom-radios-example" id="disabled-custom-radios-example-2"
                  label="Or toggle this other custom radio" />
              </div>
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Validation states</div>

            <div className="demo-vertical-spacing-sm">
              <Form.Check isValid={true} custom type="checkbox" id="valid-custom-control-example"
                label = "Valid state" />

              <Form.Check isInvalid={true} custom type="checkbox" id="invalid-custom-control-example"
                label = "Invalid state" />
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Stacked</div>

            <div className="custom-controls-stacked">
              <Form.Check defaultChecked custom type="radio" name="stacked-custom-controls-example" id="stacked-custom-controls-example-1"
                label="Toggle this custom radio" />
                
              <Form.Check custom type="radio" name="stacked-custom-controls-example" id="stacked-custom-controls-example-2"
                label="Or toggle this other custom radio" />
          
              <Form.Check custom type="radio" name="stacked-custom-controls-example" id="stacked-custom-controls-example-3"
                label="Or toggle this other custom radio" />
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Selects</Card.Header>
          <Card.Body>
            <div className="demo-vertical-spacing-sm">
              <select className="custom-select">
                <option defaultValue>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
              <select className="custom-select" multiple>
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Sizes</div>

            <div className="demo-vertical-spacing-sm">
              <select className="custom-select custom-select-lg">
                <option defaultValue>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
              <select className="custom-select custom-select-lg" multiple>
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>

              <select className="custom-select custom-select-sm">
                <option defaultValue>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
              <select className="custom-select custom-select-sm" multiple>
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body className="bg-dark">
            <div className="text-white small font-weight-semibold mb-3">Inverted</div>

            <select className="custom-select custom-select-inverted">
              <option defaultValue>Open this select menu</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Disabled</div>

            <select className="custom-select" disabled>
              <option defaultValue>Open this select menu</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body className="bg-dark">
            <select className="custom-select custom-select-inverted" disabled>
              <option defaultValue>Open this select menu</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Validation states</div>

            <div className="demo-vertical-spacing-sm">
              <select className="custom-select is-valid">
                <option defaultValue>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>

              <select className="custom-select is-invalid">
                <option defaultValue>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">File browser</Card.Header>
          <Card.Body>
            <label className="custom-file">
              <input type="file" className="custom-file-input" />
              <span className="custom-file-label"></span>
            </label>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Disabled</div>

            <label className="custom-file">
              <input type="file" className="custom-file-input" disabled />
              <span className="custom-file-label"></span>
            </label>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Validation states</div>

            <div className="demo-vertical-spacing-sm">
              <label className="custom-file">
                <input type="file" className="custom-file-input is-valid" />
                <span className="custom-file-label"></span>
              </label>

              <label className="custom-file">
                <input type="file" className="custom-file-input is-invalid" />
                <span className="custom-file-label"></span>
              </label>
            </div>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default CustomControls
