import React, { Component } from 'react'
import { InputGroup, Form, Button, DropdownButton, Dropdown, Row, Col, SplitButton, Card } from 'react-bootstrap'

class InputGroups extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Input groups - Forms')
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> Input groups
        </h4>

        <div className="demo-vertical-spacing-sm bg-white rounded p-4 mb-4 clearfix">
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control placeholder="Username" />
          </InputGroup>

          <InputGroup>
            <Form.Control placeholder="Recipient's username" />
            <InputGroup.Append>
              <InputGroup.Text>@example.com</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>https://example.com/users/</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control />
          </InputGroup>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control />
            <InputGroup.Append>
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>

          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>$</InputGroup.Text>
              <InputGroup.Text>0.00</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control />
          </InputGroup>
        </div>

        <Card className="mb-4">
          <Card.Header as="h6">Sizing</Card.Header>
          <Card.Body className="demo-vertical-spacing-sm">
            <InputGroup size="lg">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control placeholder="Username" />
            </InputGroup>

            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control placeholder="Username" />
            </InputGroup>

            <InputGroup size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text>@</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control placeholder="Username" />
            </InputGroup>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Checkbox and radio addons</Card.Header>
          <Card.Body>
            <Row>
              <Col md className="mb-3">

                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <Form.Check type="checkbox" id="input-group-checkbox-example-1" className="m-0" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control />
                  </InputGroup>
                </Form.Group>

              </Col>
              <Col md className="mb-3">

                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <Form.Check type="radio" id="input-group-checkbox-example-2" className="m-0" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control />
                  </InputGroup>
                </Form.Group>

              </Col>
              <div className="w-100"></div>
              <Col md className="mb-3">

                {/* Custom checkbox */}
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <Form.Check custom type="checkbox" id="input-group-checkbox-example-3" label="" className="px-2 m-0" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control />
                  </InputGroup>
                </Form.Group>

              </Col>
              <Col md className="mb-3">

                {/* Custom radio */}
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text>
                        <Form.Check custom type="radio" id="input-group-checkbox-example-4" label="" className="px-2 m-0" />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control />
                  </InputGroup>
                </Form.Group>

              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Custom select</Card.Header>
          <Card.Body className="demo-vertical-spacing-sm">
            <InputGroup>
              <select className="custom-select flex-grow-1">
                <option>Select...</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
              <InputGroup.Append>
                <Button variant="secondary">Go!</Button>
              </InputGroup.Append>
            </InputGroup>

            <InputGroup>
              <Form.Control placeholder="Search for..." />
              <select className="custom-select">
                <option>Select...</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
              <InputGroup.Append>
                <Button variant="secondary">Go!</Button>
              </InputGroup.Append>
            </InputGroup>

            <InputGroup>
              <select className="custom-select">
                <option>Select...</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
              <Form.Control placeholder="Search for..." />
              <InputGroup.Append>
                <Button variant="secondary">Go!</Button>
              </InputGroup.Append>
            </InputGroup>

            <InputGroup>
              <InputGroup.Prepend>
                <Button variant="secondary">Go!</Button>
              </InputGroup.Prepend>
              <Form.Control placeholder="Search for..." />
              <select className="custom-select">
                <option>Select...</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
            </InputGroup>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Button addons</Card.Header>
          <Card.Body>
            <Row className="row">
              <Col md>

                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <Button variant="secondary">Go!</Button>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="Search for..." />
                  </InputGroup>
                </Form.Group>

              </Col>
              <Col md>

                <Form.Group>
                  <InputGroup>
                    <Form.Control placeholder="Search for..." />
                    <InputGroup.Append>
                      <Button variant="secondary">Go!</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>

              </Col>
              <div className="w-100"></div>
              <Col md>

                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <Button variant="secondary">Hate it</Button>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="Product name" />
                    <InputGroup.Append>
                      <Button variant="secondary">Love it</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>

              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Buttons with dropdowns</Card.Header>
          <Card.Body>
            <Row>
              <Col md>

                <InputGroup>
                  <DropdownButton as={InputGroup.Prepend} variant="secondary" title="Action" alignRight={isRTL}>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <Form.Control />
                </InputGroup>

              </Col>
              <Col md>

                <InputGroup>
                  <Form.Control />
                  <DropdownButton as={InputGroup.Append} variant="secondary" title="Action" alignRight={!isRTL}>
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>

              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Segmented buttons</Card.Header>
          <Card.Body>
            <Row>
              <Col md>

                <InputGroup>
                  <InputGroup.Prepend>
                    <SplitButton variant="secondary" title="Action" alignRight={isRTL}>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </SplitButton>
                  </InputGroup.Prepend>
                  <Form.Control />
                </InputGroup>

              </Col>
              <Col md>

                <InputGroup>
                  <Form.Control />
                  <InputGroup.Append>
                    <SplitButton variant="secondary" title="Action" alignRight={!isRTL}>
                      <Dropdown.Item>Action</Dropdown.Item>
                      <Dropdown.Item>Another action</Dropdown.Item>
                      <Dropdown.Item>Something else here</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>Separated link</Dropdown.Item>
                    </SplitButton>
                  </InputGroup.Append>
                </InputGroup>

              </Col>
            </Row>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default InputGroups
