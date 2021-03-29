import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class CuiCustomCheckboxesAndRadios extends Component {
  componentDidMount() {
    this.indeterminateCheckbox.indeterminate = true
    this.disabledIndeterminateCheckbox.indeterminate = true
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Custom checkboxes and radios</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
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
        </div>

        <h4 className="ui-block-heading">Disabled</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
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

        <h4 className="ui-block-heading">Validations states</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <Form.Group>
            <Form.Check isValid={true} custom type="checkbox" id="valid-custom-control-example"
              label = "Valid state" />
          </Form.Group>

          <Form.Group>
            <Form.Check isInvalid={true} custom type="checkbox" id="invalid-custom-control-example"
              label = "Invalid state" />
          </Form.Group>
        </div>

        <h4 className="ui-block-heading">Stacked</h4>

        <div className="cui-example">
          <div className="custom-controls-stacked">
            <Form.Check defaultChecked custom type="radio" name="stacked-custom-controls-example" id="stacked-custom-controls-example-1"
              label="Toggle this custom radio" />
              
            <Form.Check custom type="radio" name="stacked-custom-controls-example" id="stacked-custom-controls-example-2"
              label="Or toggle this other custom radio" />
        
            <Form.Check custom type="radio" name="stacked-custom-controls-example" id="stacked-custom-controls-example-3"
              label="Or toggle this other custom radio" />
          </div>
        </div>
      </div>
    )
  }
}

export default CuiCustomCheckboxesAndRadios
