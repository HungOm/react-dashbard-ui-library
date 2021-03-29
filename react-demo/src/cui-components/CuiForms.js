import React, { Component } from 'react'
import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap'

class CuiForms extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Forms</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example">
          <Form>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="w-100">File input</Form.Label>
              <input type="file" />
              <Form.Text className="text-muted">Example block-level help text here.</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Check custom type="checkbox" id="forms-checkbox-example-1"
                label="Check this custom checkbox" />
            </Form.Group>
            <Form.Group>
              <Form.Check defaultChecked type="checkbox" id="forms-checkbox-example-2"
                label="Check me out" />
            </Form.Group>
            <Button variant="default">Submit</Button>
          </Form>
        </div>

        <h4 className="ui-block-heading">Form row</h4>

        <div className="cui-example">
          <Form>
            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group as={Col} md={6}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
            <Form.Row>
              <Form.Group as={Col} md={6}>
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="City" />
              </Form.Group>
              <Form.Group as={Col} md={4}>
                <Form.Label>State</Form.Label>
                <select className="custom-select">
                  <option>Select state</option>
                  <option>California</option>
                  <option>Hawaii</option>
                  <option>Florida</option>
                  <option>Texas</option>
                  <option>Massachusetts</option>
                  <option>Alabama</option>
                </select>
              </Form.Group>
              <Form.Group as={Col} md={2}>
                <Form.Label>Zip</Form.Label>
                <Form.Control placeholder="Zip" />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check custom type="checkbox" id="form-row-checkbox-example-1" className="m-0"
                label="Check this custom checkbox" />
            </Form.Group>
            <Button variant="primary">Sign In</Button>
          </Form>
        </div>

        <h4 className="ui-block-heading">Horizontal</h4>

        <div className="cui-example">
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={2} className="text-sm-right">Email</Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2} className="text-sm-right">Password</Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2} className="text-sm-right">Textarea</Form.Label>
              <Col sm={10}>
                <Form.Control as="textarea" placeholder="Password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2} className="text-sm-right pt-0">Radios</Form.Label>
              <Col sm={10}>
                <Form.Check defaultChecked custom type="radio" name="form-horizontal-radios-example" id="form-horizontal-radios-example-1"
                  label="Option one is this and that&mdash;be sure to include why it's great" />
                <Form.Check custom type="radio" name="form-horizontal-radios-example" id="form-horizontal-radios-example-2"
                  label="Option two can be something else and selecting it will deselect option one" />
                <Form.Check custom disabled type="radio" name="form-horizontal-radios-example" id="form-horizontal-radios-example-3"
                  label="Option three is disabled" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2} className="text-sm-right pt-0">Checkbox</Form.Label>
              <Col sm={10}>
                <Form.Check custom type="checkbox" name="form-horizontal-radios-example" id="form-horizontal-checkbox-example-1"
                  label="Check me out" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" variant="primary">Sign In</Button>
              </Col>
            </Form.Group>
          </Form>
        </div>

        <h4 className="ui-block-heading">Inline</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <Form className="form-inline">
            <label className="sr-only">Name</label>
            <Form.Control className="mr-sm-2 mb-2 mb-sm-0" placeholder="Jane Doe" />
            <label className="sr-only">Username</label>
            <InputGroup className="mr-sm-2 mb-2 mb-sm-0">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control placeholder="Username" />
            </InputGroup>
            <Form.Check type="checkbox" id="form-inline-checkbox-example-1" className="mr-sm-2 mb-2 mb-sm-0"
              label="Remember me" />
            <Button variant="primary">Submit</Button>
          </Form>

          <Form className="form-inline">
            <Form.Label className="mr-sm-2">Preference</Form.Label>
            <select className="custom-select mr-sm-2 mb-2 mb-sm-0">
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <Form.Check custom type="checkbox" id="form-inline-checkbox-example-2" className="mr-sm-2 mb-2 mb-sm-0"
              label="Remember my preference" />
            <Button variant="primary">Submit</Button>
          </Form>
        </div>

        <h4 className="ui-block-heading">Help text</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <Form>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
              <Form.Text className="text-muted">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
              </Form.Text>
            </Form.Group>
          </Form>

          <Form className="form-inline">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" className="mx-sm-3" />
            <Form.Text className="text-muted">
              Must be 8-20 characters long.
            </Form.Text>
          </Form>
        </div>

        <h4 className="ui-block-heading">Static controls</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm={2} className="text-sm-right">Email</Form.Label>
              <Col sm={10}>
                <Form.Control plaintext readOnly defaultValue="example.email.com" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2} className="text-sm-right">Password</Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button variant="default">Confirm identity</Button>
              </Col>
            </Form.Group>
          </Form>

          {/* Inline form */}
          <Form className="form-inline">
            <Form.Control plaintext readOnly defaultValue="example.email.com" className="mr-sm-2 mb-2 mb-sm-0" />
            <Form.Control type="password" placeholder="Password" className="mr-sm-2 mb-2 mb-sm-0" />
            <Button variant="default">Confirm identity</Button>
          </Form>
        </div>

        <h4 className="ui-block-heading">States</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          {/* Valid */}
          <Form.Group>
            <Form.Label>Valid</Form.Label>
            <Form.Control isValid={true} />
            <Form.Control.Feedback>
              A block of help text that breaks onto a new line and may extend beyond one line.
            </Form.Control.Feedback>
          </Form.Group>

          {/* Invalid */}
          <Form.Group>
            <Form.Label>Invalid</Form.Label>
            <Form.Control isInvalid={true} />
            <Form.Control.Feedback type="invalid">
              A block of help text that breaks onto a new line and may extend beyond one line.
            </Form.Control.Feedback>
          </Form.Group>

          {/* With tooltip */}
          <Form.Group className="position-relative">
            <Form.Label>Invalid with tooltip</Form.Label>
            <Form.Control isInvalid={true} />
            <div className="invalid-tooltip">Please provide a valid state.</div>
          </Form.Group>
        </div>

        <h4 className="ui-block-heading">Sizes</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <Form>
            {/* Large */}
            <Form.Group>
              <Form.Label className="col-form-label-lg">Large label</Form.Label>
              <Form.Control size="lg" placeholder="Large input" />
            </Form.Group>


            {/* Small */}
            <Form.Group>
              <Form.Label className="col-form-label-sm">Small label</Form.Label>
              <Form.Control size="sm" placeholder="Small input" />
            </Form.Group>
          </Form>

          <Form>
            {/* Large */}
            <Form.Group as={Row}>
              <Form.Label column sm="2" className="col-form-label-lg text-sm-right">Large label</Form.Label>
              <Col sm={10}>
                <Form.Control size="lg" placeholder="Large input" />
              </Col>
            </Form.Group>


            {/* Small */}
            <Form.Group as={Row}>
              <Form.Label column sm="2" className="col-form-label-sm text-sm-right">Small label</Form.Label>
              <Col sm={10}>
                <Form.Control size="sm" placeholder="Small input" />
              </Col>
            </Form.Group>
          </Form>
        </div>

      </div>
    )
  }
}

export default CuiForms
