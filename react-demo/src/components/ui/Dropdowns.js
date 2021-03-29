import React, { Component } from 'react'
import { DropdownButton, SplitButton, Dropdown, Badge, Card, Row, Col } from 'react-bootstrap'
import HoverDropdown from '../../vendor/libs/hover-dropdown'
import { ContextMenu, MenuItem, ContextMenuTrigger, SubMenu } from 'react-contextmenu'
import '../../vendor/libs/react-contextmenu/react-contextmenu.scss'

class Dropdowns extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Dropdowns - UI elements')

    this.handleMenuClick = this.handleMenuClick.bind(this)
  }

  handleMenuClick(e, data) {
    alert(`Clicked on item "${data.itemNo}"`)
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
    const isIE10Mode = document['documentMode'] === 10

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Dropdowns
        </h4>

        <div className="bg-lighter rounded p-4 mb-4 clearfix">
          <div className="dropdown-menu float-left" style={{display: 'block', position: 'static'}}>
            <Dropdown.Item><Badge variant="success" className="float-right">34</Badge>Action</Dropdown.Item>
            <Dropdown.Item><Badge pill variant="primary" className="float-right">16</Badge>Another action</Dropdown.Item>
            <Dropdown.Item disabled>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Dropdown header</Dropdown.Header>
            <Dropdown.Item active="true"><i className="ion ion-md-cloud"></i> &nbsp;With icon</Dropdown.Item>
            <Dropdown.Item>Last action</Dropdown.Item>
          </div>
        </div>

        <Row>
          <Col md={6}>

            <Card className="mb-4">
              <Card.Header as="h6">Nested</Card.Header>
              <Card.Body>
                <DropdownButton variant="default" title="Nested dropdowns" alignRight={isRTL}>
                  <Dropdown.Item>First action</Dropdown.Item>

                  <div className="dropdown-toggle">
                    <Dropdown.Item>First menu</Dropdown.Item>
                    <div className="dropdown-menu">
                      <Dropdown.Item>First action</Dropdown.Item>
                      <Dropdown.Item>Second action</Dropdown.Item>

                      <div className="dropdown-toggle">
                        <Dropdown.Item>First menu</Dropdown.Item>
                        <div className="dropdown-menu">
                          <Dropdown.Item>First action</Dropdown.Item>
                          <Dropdown.Item>Second action</Dropdown.Item>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Dropdown.Item>Second action</Dropdown.Item>

                  <div className="dropdown-toggle">
                    <Dropdown.Item>Second menu</Dropdown.Item>
                    <div className="dropdown-menu">
                      <Dropdown.Item>First action</Dropdown.Item>
                      <Dropdown.Item>Second action</Dropdown.Item>
                    </div>
                  </div>
                </DropdownButton>
              </Card.Body>
            </Card>

          </Col>
          <Col md={6}>

            <Card className="mb-4">
              <Card.Header as="h6">Hover</Card.Header>
              <Card.Body>
                <HoverDropdown as={DropdownButton} variant="primary" title="Hover" alignRight={isRTL}>
                  <Dropdown.Item>Action</Dropdown.Item>
                  <Dropdown.Item>Another action</Dropdown.Item>
                  <Dropdown.Item>Something else here</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Separated link</Dropdown.Item>
                </HoverDropdown>
              </Card.Body>
            </Card>

          </Col>
        </Row>

        <Card className="mb-4">
          <Card.Header as="h6">Button dropdowns</Card.Header>
          <Card.Body>
            <small className="text-light font-weight-semibold">Variations</small>
            <div className="demo-inline-spacing mt-3">
              <DropdownButton variant="default" title="Default" className="d-inline-block" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton variant="primary" title="Primary" className="d-inline-block" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton variant="secondary" title="Secondary" className="d-inline-block" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton variant="success" title="Success" className="d-inline-block" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton variant="info" title="Info" className="d-inline-block" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton variant="warning" title="Warning" className="d-inline-block" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton variant="danger" title="Danger" className="d-inline-block" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton variant="dark" title="Dark" className="d-inline-block" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton> 
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <small className="text-light font-weight-semibold">Hidden arrow</small>
            <div className="demo-inline-spacing mt-3">
              <DropdownButton variant="primary" title="Primary" className="dropdown-toggle-hide-arrow" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton> 

              <DropdownButton variant="secondary" title="Secondary" className="dropdown-toggle-hide-arrow" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton> 
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <small className="text-light font-weight-semibold">Split</small>
            <div className="demo-inline-spacing mt-3">
              <SplitButton variant="default" title="Default" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </SplitButton>

              <SplitButton variant="primary" title="Primary" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </SplitButton>

              <SplitButton variant="secondary" title="Secondary" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </SplitButton>

              <SplitButton variant="success" title="Success" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </SplitButton>

              <SplitButton variant="info" title="Info" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </SplitButton>

              <SplitButton variant="warning" title="Warning" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </SplitButton>

              <SplitButton variant="danger" title="Danger" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </SplitButton>

              <SplitButton variant="dark" title="Dark" alignRight={isRTL}>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </SplitButton>
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <small className="text-light font-weight-semibold">Sizes</small>
            <div className="demo-vertical-spacing-sm mt-3">
              <DropdownButton variant="default" title="Extra large button" alignRight={isRTL} size="xl">
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton variant="default" title="Large button" alignRight={isRTL} size="lg">
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton variant="default" title="Small button" alignRight={isRTL} size="sm">
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton>

              <DropdownButton variant="default" title="Extra small button" alignRight={isRTL} size="xs">
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Item>Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Separated link</Dropdown.Item>
              </DropdownButton> 
            </div>
          </Card.Body>
        </Card>

        {isIE10Mode && <div className="alert alert-danger">
          <strong>react-contextmenu</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode && <React.Fragment>
          <Card className="mb-4">
            <Card.Header as="h6">react-contextmenu</Card.Header>
            <Card.Body>
              <ContextMenuTrigger id="some_unique_identifier_2">
                <div className="border border-light bg-white d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
                  <div>Right click to see the menu</div>
                </div>
              </ContextMenuTrigger>

              <ContextMenu id="some_unique_identifier_2">
                <MenuItem data={{ itemNo: '1' }} onClick={this.handleMenuClick}>
                  Menu Item 1
                </MenuItem>
                <SubMenu title='Submenu'>
                  <MenuItem data={{ itemNo: '2.1' }} onClick={this.handleMenuClick}>
                      Menu Item 2.1
                  </MenuItem>
                  <MenuItem disabled data={{ itemNo: '2.2' }} onClick={this.handleMenuClick}>
                    Menu Item 2.2
                  </MenuItem>
                  <MenuItem data={{ itemNo: '2.3' }} onClick={this.handleMenuClick}>
                    Menu Item 2.3
                  </MenuItem>
                </SubMenu>
                <MenuItem divider />
                <MenuItem data={{ itemNo: '3' }} onClick={this.handleMenuClick}>
                  Menu Item 3
                </MenuItem>
              </ContextMenu>
            </Card.Body>
          </Card>
        </React.Fragment>}

      </div>
    )
  }
}

export default Dropdowns
