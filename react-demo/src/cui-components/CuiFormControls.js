import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class CuiFormControls extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Form controls</h3>

        <h4 className="ui-block-heading">Inputs</h4>

        <div className="cui-example">
          <Form.Control placeholder="Text input" />
        </div>

        <h4 className="ui-block-heading">Textarea</h4>

        <div className="cui-example">
          <Form.Control as="textarea" rows="3" />
        </div>

        <h4 className="ui-block-heading">Checkboxes and radios</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          {/* Checkboxes */}
          <div>
            <Form.Check type="checkbox" id="checkboxes-example-1"
              label="Option one is this and that&mdash;be sure to include why it's great" />

            <Form.Check disabled type="checkbox" id="checkboxes-example-2"
              label="Option two is disabled" />
          </div>

          <div>
            {/* Radios */}
            <Form.Check type="radio" name="radios-example" id="radios-example-1"
              label="Option one is this and that&mdash;be sure to include why it's great" />

            <Form.Check type="radio" name="radios-example" id="radios-example-2"
              label="Option two can be something else and selecting it will deselect option one" />

            <Form.Check disabled type="radio" name="radios-example" id="radios-example-3"
              label="Option three is disabled" />
          </div>
        </div>

       <h4 className="ui-block-heading">Inline checkboxes and radios</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          {/* Checkboxes */}
          <div>
            <Form.Check inline type="checkbox" id="inline-checkboxes-example-1" label="1" />
            <Form.Check inline type="checkbox" id="inline-checkboxes-example-2" label="2" />
            <Form.Check inline disabled type="checkbox" id="inline-checkboxes-example-3" label="3" />
          </div>

          {/* Radios */}
          <div>
            <Form.Check inline type="radio" name="inline-radios-example" id="inline-radios-example-1" label="1" />
            <Form.Check inline type="radio" name="inline-radios-example" id="inline-radios-example-2" label="2" />
            <Form.Check inline disabled type="radio" name="inline-radios-example" id="inline-radios-example-3" label="3" />
          </div>
        </div>

        <h4 className="ui-block-heading">Checkboxes and radios without label text</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <Form.Check type="checkbox" id="checkbox-wo-label-example" />

          <Form.Check type="radio" id="radio-wo-label-example" />
        </div>

        <h4 className="ui-block-heading">Selects</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">

          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>

          {/* Multiple */}
          <Form.Control multiple as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </div>

        <h4 className="ui-block-heading">Inverted</h4>

        <div className="cui-example">
          <div className="cui-example-vertical-spacing-sm bg-dark p-4">
            <Form.Control className="form-control-inverted" placeholder="Text input" rows="3" />

            <Form.Control className="form-control-inverted" as="textarea" />

            <Form.Control className="form-control-inverted" multiple as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </div>
        </div>

        <h4 className="ui-block-heading">Disabled</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <div className="cui-example-vertical-spacing-sm">
            <Form.Control disabled placeholder="Disabled input" />

            <Form.Control disabled as="textarea" rows="3" />

            <Form.Control disabled as="select">
              <option>Disabled select</option>
            </Form.Control>

            <Form.Check disabled type="checkbox" id="disabled-checkbox-example" label="Can't check this" />
          </div>

          <div className="cui-example-vertical-spacing-sm bg-dark p-4">
            <Form.Control disabled className="form-control-inverted" placeholder="Text input" />

            <Form.Control disabled className="form-control-inverted" as="textarea" rows="3" />

            <Form.Control disabled className="form-control-inverted" multiple as="select">
              <option>Disabled select</option>
            </Form.Control>
          </div>
        </div>


        <h4 className="ui-block-heading">Read only</h4>

        <div className="cui-example">
          <Form.Control readOnly placeholder="Readonly input here…" />
        </div>

        <h4 className="ui-block-heading">Sizes</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <Form.Control size="sm" placeholder=".form-control-lg" />
          <Form.Control placeholder="Default input" />
          <Form.Control size="lg" placeholder=".form-control-sm" />
          <Form.Control as="select" size="sm"><option>.form-control-lg</option></Form.Control>
          <Form.Control as="select"><option>Default select</option></Form.Control>
          <Form.Control as="select" size="lg"><option>.form-control-sm</option></Form.Control>
        </div>
      </div>
    )
  }
}

export default CuiFormControls
