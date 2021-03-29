import React, { Component } from 'react'
import { InputGroup, Form, Button, DropdownButton, Dropdown, Row, Col, SplitButton } from 'react-bootstrap'

class CuiInputGroups extends Component {
  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Input groups</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
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

        <h4 className="ui-block-heading">Sizing</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
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
        </div>

        <h4 className="ui-block-heading">Checkbox and radio addons</h4>

        <div className="cui-example">
          <Row>
            <Col md>
          
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
            <Col md>
          
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
            <Col md>
          
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
            <Col md>
          
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
        </div>

        <h4 className="ui-block-heading">Custom select</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
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
        </div>

        <h4 className="ui-block-heading">Multiple addons</h4>

        <div className="cui-example">
          <Row>
            <Col md>

              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <input type="checkbox" />
                    </InputGroup.Text>
                    <InputGroup.Text>$</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control />
                </InputGroup>
              </Form.Group>

            </Col>
            <Col md>

              <Form.Group>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control />
                </InputGroup>
              </Form.Group>

            </Col>
          </Row>
        </div>

        <h4 className="ui-block-heading">Button addons</h4>

        <div className="cui-example">
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
        </div>

        <h4 className="ui-block-heading">Buttons with dropdowns</h4>

        <div className="cui-example" id="button-dropdown-input-group-demo">
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
        </div>

        <h4 className="ui-block-heading">Segmented buttons</h4>

        <div className="cui-example" id="segmented-button-dropdown-input-group-demo">
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
        </div>
      </div>
    )
  }
}

export default CuiInputGroups
