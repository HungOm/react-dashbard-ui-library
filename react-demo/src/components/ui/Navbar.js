import React, { Component } from 'react'
import { Navbar, NavDropdown, Nav, Form, Button, InputGroup, Row, Col, Alert } from 'react-bootstrap'
import { NavLink as RouterLink } from "react-router-dom"
import HoverDropdown from '../../vendor/libs/hover-dropdown'
import MegaDropdown from '../../vendor/libs/mega-dropdown'

class NavbarComponent extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Navbar - UI elements')

    this.state = {
      navbarSearchExpanded: false
    }
  }

  prevent(e) {
    e.preventDefault()
  }

  onNavbarSearchExpand() {
    this.setState({
      navbarSearchExpanded: true
    })
  }

  onNavbarSearchClear(e) {
    e.preventDefault()
    this.setState({
      navbarSearchExpanded: false
    })
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Navbar
        </h4>

        <Navbar bg="light" expand="lg" style={{ zIndex: 20 }}>
          <Navbar.Brand href="#brand-1" onClick={this.prevent}>Navbar</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mr-auto">
              <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
              <Nav.Link href="#features-1" onClick={this.prevent}>Features</Nav.Link>
              <Nav.Link href="#pricing-1" onClick={this.prevent}>Pricing</Nav.Link>
              <NavDropdown title="Dropdown link" alignRight={isRTL}>
                <NavDropdown.Item href="#action-1.1" onClick={this.prevent}>Action</NavDropdown.Item>
                <NavDropdown.Item href="#action-1.2" onClick={this.prevent}>Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action-1.3" onClick={this.prevent}>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action-1.4" onClick={this.prevent}>Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#disabled-1" onClick={this.prevent} disabled>Disabled</Nav.Link>
            </Nav>
            <Form inline className="my-2 my-lg-0">
              <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success" className="my-2 my-sm-0">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <h6 className="pb-1 mt-5 mb-4">Elements</h6>

        <div className="demo-vertical-spacing-sm">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#brand-2" onClick={this.prevent}>Navbar</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
                <Nav.Link href="#features-2" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#pricing-2" onClick={this.prevent}>Pricing</Nav.Link>
              </Nav>
              <span className="navbar-text">
                Navbar text with an inline element
              </span>
            </Navbar.Collapse>
          </Navbar>

          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#brand-3" onClick={this.prevent}>Navbar</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
                <Nav.Link href="#features-3" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#pricing-3" onClick={this.prevent}>Pricing</Nav.Link>
              </Nav>
              <Form inline>
                <Button variant="outline-success mr-3">Main button</Button>
                <Button variant="outline-secondary align-middle" size="sm">Main button</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>

          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#brand-4" onClick={this.prevent}>Navbar</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
                <Nav.Link href="#features-4" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#pricing-4" onClick={this.prevent}>Pricing</Nav.Link>
              </Nav>
              <Form inline>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control placeholder="Username" />
                </InputGroup>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <h6 className="pb-1 mt-5 mb-4">Styling</h6>

        <div className="demo-vertical-spacing-sm bg-light p-3">
          {/* Theme navbar */}
          <Navbar bg="navbar-theme" expand="lg">
            <Navbar.Brand href="#brand-5" onClick={this.prevent}>.bg-navbar-theme</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
                <Nav.Link href="#features-5" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#pricing-5" onClick={this.prevent}>Pricing</Nav.Link>
                <Nav.Link href="#disabled-5" onClick={this.prevent} disabled>Disabled</Nav.Link>
              </Nav>
              <span className="navbar-text">
                Navbar text with an inline element
                </span>
            </Navbar.Collapse>
          </Navbar>

          {/* White navbar */}
          <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#brand-6" onClick={this.prevent}>.bg-white</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
                <Nav.Link href="#features-6" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#pricing-6" onClick={this.prevent}>Pricing</Nav.Link>
                <Nav.Link href="#disabled-6" onClick={this.prevent} disabled>Disabled</Nav.Link>
              </Nav>
              <span className="navbar-text">
                Navbar text with an inline element
                </span>
            </Navbar.Collapse>
          </Navbar>

          {/* Primary navbar */}
          <Navbar bg="primary" expand="lg">
            <Navbar.Brand href="#brand-7" onClick={this.prevent}>.bg-primary</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
                <Nav.Link href="#features-7" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#pricing-7" onClick={this.prevent}>Pricing</Nav.Link>
                <Nav.Link href="#disabled-7" onClick={this.prevent} disabled>Disabled</Nav.Link>
              </Nav>
              <span className="navbar-text">
                Navbar text with an inline element
                </span>
            </Navbar.Collapse>
          </Navbar>

          {/* Secondary navbar */}
          <Navbar bg="secondary" expand="lg">
            <Navbar.Brand href="#brand-8" onClick={this.prevent}>.bg-secondary</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
                <Nav.Link href="#features-8" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#pricing-8" onClick={this.prevent}>Pricing</Nav.Link>
                <Nav.Link href="#disabled-8" onClick={this.prevent} disabled>Disabled</Nav.Link>
              </Nav>
              <span className="navbar-text">
                Navbar text with an inline element
                </span>
            </Navbar.Collapse>
          </Navbar>

          {/* Success navbar */}
          <Navbar bg="success" expand="lg">
            <Navbar.Brand href="#brand-9" onClick={this.prevent}>.bg-success</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
                <Nav.Link href="#features-9" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#pricing-9" onClick={this.prevent}>Pricing</Nav.Link>
                <Nav.Link href="#disabled-9" onClick={this.prevent} disabled>Disabled</Nav.Link>
              </Nav>
              <span className="navbar-text">
                Navbar text with an inline element
                </span>
            </Navbar.Collapse>
          </Navbar>

          {/* Info navbar */}
          <Navbar bg="info" expand="lg">
            <Navbar.Brand href="#brand-10" onClick={this.prevent}>.bg-info</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
                <Nav.Link href="#features-10" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#pricing-10" onClick={this.prevent}>Pricing</Nav.Link>
                <Nav.Link href="#disabled-10" onClick={this.prevent} disabled>Disabled</Nav.Link>
              </Nav>
              <span className="navbar-text">
                Navbar text with an inline element
                </span>
            </Navbar.Collapse>
          </Navbar>

          {/* Warning navbar */}
          <Navbar bg="warning" expand="lg">
            <Navbar.Brand href="#brand-11" onClick={this.prevent}>.bg-warning</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
                <Nav.Link href="#features-11" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#pricing-11" onClick={this.prevent}>Pricing</Nav.Link>
                <Nav.Link href="#disabled-11" onClick={this.prevent} disabled>Disabled</Nav.Link>
              </Nav>
              <span className="navbar-text">
                Navbar text with an inline element
                </span>
            </Navbar.Collapse>
          </Navbar>

          {/* Danger navbar */}
          <Navbar bg="danger" expand="lg">
            <Navbar.Brand href="#brand-12" onClick={this.prevent}>.bg-danger</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
                <Nav.Link href="#features-12" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#pricing-12" onClick={this.prevent}>Pricing</Nav.Link>
                <Nav.Link href="#disabled-12" onClick={this.prevent} disabled>Disabled</Nav.Link>
              </Nav>
              <span className="navbar-text">
                Navbar text with an inline element
                </span>
            </Navbar.Collapse>
          </Navbar>

          {/* Dark navbar */}
          <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#brand-13" onClick={this.prevent}>.bg-dark</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
                <Nav.Link href="#features-13" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#pricing-13" onClick={this.prevent}>Pricing</Nav.Link>
                <Nav.Link href="#disabled-13" onClick={this.prevent} disabled>Disabled</Nav.Link>
              </Nav>
              <span className="navbar-text">
                Navbar text with an inline element
                </span>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <h6 className="pb-1 mt-5 mb-4">Mega dropdown</h6>

        <div className="demo-vertical-spacing-sm">
          <Navbar bg="light" expand="lg" style={{ zIndex: 21 }}>
            <Navbar.Brand href="#brand-19" onClick={this.prevent}>Navbar</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <NavDropdown title="Dropdown" alignRight={isRTL}>
                  <NavDropdown.Item href="#action-19.1" onClick={this.prevent}>Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action-19.2" onClick={this.prevent}>Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action-19.3" onClick={this.prevent}>Something</NavDropdown.Item>
                </NavDropdown>
                <MegaDropdown as={NavDropdown} title="Mega (click)">
                  <div className="p-4">
                    <Alert variant="info">
                      Add <code>.mega-link</code> class to the element to close menu on click
                    </Alert>
                    <Row className="row-bordered ui-bordered">
                      <Col sm={6} lg className="p-3"><a href="#d" onClick={this.prevent}>Column</a></Col>
                      <Col sm={6} lg className="p-3"><a href="#d" onClick={this.prevent} className="mega-link">.mega-link</a></Col>
                      <Col sm={6} lg className="p-3"><Button variant="primary">Button</Button></Col>
                      <Col sm={6} lg className="p-3"><Form.Control placeholder="Input" /></Col>
                    </Row>
                  </div>
                </MegaDropdown>
                <MegaDropdown as={NavDropdown} openOnHover={true} title="Mega (hover)">
                  <div className="p-4">
                    <Alert variant="info">
                      Add <code>.mega-link</code> class to the element to close menu on click
                    </Alert>
                    <Row className="row-bordered ui-bordered">
                      <Col sm={6} lg className="p-3"><a href="#d" onClick={this.prevent}>Column</a></Col>
                      <Col sm={6} lg className="p-3"><a href="#d" onClick={this.prevent} className="mega-link">.mega-link</a></Col>
                      <Col sm={6} lg className="p-3"><Button variant="primary">Button</Button></Col>
                      <Col sm={6} lg className="p-3"><Form.Control placeholder="Input" /></Col>
                    </Row>
                  </div>
                </MegaDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/*
          /// Within container
          /// Note: Do not forget to add `.position-relative` to `.container`
          */}

          <Navbar bg="light" expand="lg" style={{ zIndex: 20 }}>
            <div className="container position-relative">
              <Navbar.Brand href="#brand-20" onClick={this.prevent}>Navbar</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse>
                <Nav className="mr-auto">
                  <HoverDropdown as={NavDropdown} openOnHover={true} title="Dropdown (hover)" alignRight={isRTL}>
                    <NavDropdown.Item href="#action-20.1" onClick={this.prevent}>Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action-20.2" onClick={this.prevent}>Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action-20.3" onClick={this.prevent}>Something</NavDropdown.Item>
                  </HoverDropdown>
                  <MegaDropdown as={NavDropdown} title="Mega (click)">
                    <div className="p-4">
                      <Alert variant="info">
                        Add <code>.mega-link</code> class to the element to close menu on click
                      </Alert>
                      <Row className="row-bordered ui-bordered">
                        <Col sm={6} lg className="p-3"><a href="#d" onClick={this.prevent}>Column</a></Col>
                        <Col sm={6} lg className="p-3"><a href="#d" onClick={this.prevent} className="mega-link">.mega-link</a></Col>
                        <Col sm={6} lg className="p-3"><Button variant="primary">Button</Button></Col>
                        <Col sm={6} lg className="p-3"><Form.Control placeholder="Input" /></Col>
                      </Row>
                    </div>
                  </MegaDropdown>
                  <MegaDropdown as={NavDropdown} openOnHover={true} title="Mega (hover)">
                    <div className="p-4">
                      <Alert variant="info">
                        Add <code>.mega-link</code> class to the element to close menu on click
                      </Alert>
                      <Row className="row-bordered ui-bordered">
                        <Col sm={6} lg className="p-3"><a href="#d" onClick={this.prevent}>Column</a></Col>
                        <Col sm={6} lg className="p-3"><a href="#d" onClick={this.prevent} className="mega-link">.mega-link</a></Col>
                        <Col sm={6} lg className="p-3"><Button variant="primary">Button</Button></Col>
                        <Col sm={6} lg className="p-3"><Form.Control placeholder="Input" /></Col>
                      </Row>
                    </div>
                  </MegaDropdown>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Navbar>
        </div>

        <h6 className="pb-1 mt-5 mb-4">Search</h6>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#brand-21" onClick={this.prevent}>Navbar</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="align-items-lg-center mr-auto">
              <Nav.Link as={RouterLink} to="/" exact={true}>Home</Nav.Link>
              <Nav.Link href="#features-21" onClick={this.prevent}>Features</Nav.Link>
              <Nav.Link href="#pricing-21" onClick={this.prevent}>Pricing</Nav.Link>
              <div className="nav-item">
                <label className={`nav-link navbar-search-box ${this.state.navbarSearchExpanded ? 'active' : ''}`}>
                  <i className="ion ion-ios-search navbar-icon align-middle"></i>
                  <span className="navbar-search-input">
                    <Form.Control className="mx-2" placeholder="Search..." style={{ width: '140px' }} onFocus={this.onNavbarSearchExpand.bind(this)} />
                    <a href="#d" className="navbar-search-cancel" onClick={this.onNavbarSearchClear.bind(this)}>&times;</a>
                  </span>
                </label>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    )
  }
}

export default NavbarComponent
