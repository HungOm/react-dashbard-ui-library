import React, { Component } from 'react'
import { Form, Card } from 'react-bootstrap'

class Controls extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Controls - Forms')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> Controls
        </h4>

        <Card className="mb-4">
          <Card.Header as="h6">Input</Card.Header>
          <Card.Body>
            <Form.Control placeholder="Text input" />
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Textarea</Card.Header>
          <Card.Body>
            <Form.Control as="textarea" rows="3" />
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Checkboxes and radios</Card.Header>
          <Card.Body>
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
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Inline</div>

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
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Selects</Card.Header>
          <Card.Body className="demo-vertical-spacing-sm">
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
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Disabled</Card.Header>
          <Card.Body className="demo-vertical-spacing-sm">
            <Form.Control disabled placeholder="Disabled input" />

            <Form.Control disabled as="textarea" rows="3" />

            <Form.Control disabled as="select">
              <option>Disabled select</option>
            </Form.Control>

            <Form.Check disabled type="checkbox" id="disabled-checkbox-example" label="Can't check this" />
          </Card.Body>
        </Card>

        <Card bg="dark" text="white" className="mb-4">
          <Card.Header as="h6">Inverted</Card.Header>
          <Card.Body className="demo-vertical-spacing-sm">
            <Form.Control className="form-control-inverted" placeholder="Text input" rows="3" />

            <Form.Control className="form-control-inverted" as="textarea" />

            <Form.Control className="form-control-inverted" multiple as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body className="demo-vertical-spacing-sm">
            <Form.Control disabled className="form-control-inverted" placeholder="Text input" />

            <Form.Control disabled className="form-control-inverted" as="textarea" rows="3" />

            <Form.Control disabled className="form-control-inverted" multiple as="select">
              <option>Disabled select</option>
            </Form.Control>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Read only</Card.Header>
          <Card.Body>
            <Form.Control readOnly placeholder="Readonly input here…" />
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Sizes</Card.Header>
          <Card.Body className="demo-vertical-spacing-sm">
            <Form.Control size="sm" placeholder=".form-control-lg" />
            <Form.Control placeholder="Default input" />
            <Form.Control size="lg" placeholder=".form-control-sm" />
            <Form.Control as="select" size="sm"><option>.form-control-lg</option></Form.Control>
            <Form.Control as="select"><option>Default select</option></Form.Control>
            <Form.Control as="select" size="lg"><option>.form-control-sm</option></Form.Control>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default Controls
