import React, { Component } from 'react'
import { Card, Button, Row, Col, ToggleButtonGroup, ToggleButton } from 'react-bootstrap'

class Buttons extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Buttons - UI elements')


    this.handleCheckboxGroupChange = this.handleCheckboxGroupChange.bind(this)
    this.handleRadioGroupChange = this.handleRadioGroupChange.bind(this)

    this.state = {
      checkboxGroup: [3],
      radioGroup: 1
    }
  }

  handleCheckboxGroupChange(checkboxGroup) {
    this.setState({ checkboxGroup })
  }

  handleRadioGroupChange(radioGroup) {
    this.setState({ radioGroup })
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Buttons
        </h4>

        <Row>
          <Col lg={12}>

            <Card className="mb-4">
              <Row noGutters className="row-bordered">
                <Col xl={6} className="p-4">

                  <small className="text-light font-weight-semibold">Default</small>
                  <div className="demo-inline-spacing mt-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="default">Default</Button>
                    <Button variant="success">Success</Button>
                    <Button variant="warning">Warning</Button>
                    <Button variant="info">Info</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="dark">Dark</Button>
                    <Button variant="link">Link</Button>
                  </div>

                </Col>
                <Col xl={6} className="p-4">

                  <small className="text-light font-weight-semibold">Rounded</small>
                  <div className="demo-inline-spacing mt-3">
                    <Button variant="primary" className="rounded-pill">Primary</Button>
                    <Button variant="secondary" className="rounded-pill">Secondary</Button>
                    <Button variant="default" className="rounded-pill">Default</Button>
                    <Button variant="success" className="rounded-pill">Success</Button>
                    <Button variant="warning" className="rounded-pill">Warning</Button>
                    <Button variant="info" className="rounded-pill">Info</Button>
                    <Button variant="danger" className="rounded-pill">Danger</Button>
                    <Button variant="dark" className="rounded-pill">Dark</Button>
                  </div>

                </Col>
                <Col xl={6} className="p-4">

                  <small className="text-light font-weight-semibold">Outline</small>
                  <div className="demo-inline-spacing mt-3">
                    <Button variant="outline-primary">Primary</Button>
                    <Button variant="outline-secondary">Secondary</Button>
                    <Button variant="outline-default">Default</Button>
                    <Button variant="outline-success">Success</Button>
                    <Button variant="outline-warning">Warning</Button>
                    <Button variant="outline-info">Info</Button>
                    <Button variant="outline-danger">Danger</Button>
                    <Button variant="outline-dark">Dark</Button>
                  </div>

                </Col>
                <Col xl={6} className="p-4">

                  <small className="text-light font-weight-semibold">Rounded outline</small>
                  <div className="demo-inline-spacing mt-3">
                    <Button variant="outline-primary" className="rounded-pill">Primary</Button>
                    <Button variant="outline-secondary" className="rounded-pill">Secondary</Button>
                    <Button variant="outline-default" className="rounded-pill">Default</Button>
                    <Button variant="outline-success" className="rounded-pill">Success</Button>
                    <Button variant="outline-warning" className="rounded-pill">Warning</Button>
                    <Button variant="outline-info" className="rounded-pill">Info</Button>
                    <Button variant="outline-danger" className="rounded-pill">Danger</Button>
                    <Button variant="outline-dark" className="rounded-pill">Dark</Button>
                  </div>

                </Col>
              </Row>
            </Card>

          </Col>
          <Col xs={12} className="material-style-only">

            <Card className="mb-4">
              <Card.Header as="h6">Flat (Material only)</Card.Header>
              <Card.Body className="demo-inline-spacing">
                <Button variant="primary" className="md-btn-flat">Primary</Button>
                <Button variant="secondary" className="md-btn-flat">Secondary</Button>
                <Button variant="default" className="md-btn-flat">Default</Button>
                <Button variant="success" className="md-btn-flat">Success</Button>
                <Button variant="warning" className="md-btn-flat">Warning</Button>
                <Button variant="info" className="md-btn-flat">Info</Button>
                <Button variant="danger" className="md-btn-flat">Danger</Button>
                <Button variant="dark" className="md-btn-flat">Dark</Button>
              </Card.Body>
            </Card>

          </Col>
          <Col xs={12}>

            <Card className="mb-4">
              <Card.Header as="h6">Sizes</Card.Header>
              <Card.Body>
                <small className="text-light font-weight-semibold">Extra large</small>
                <div className="demo-paragraph-spacing mt-3">
                  <p>
                    <Button size="xl" variant="primary">Primary</Button>
                    <Button size="xl" variant="secondary">Secondary</Button>
                    <Button size="xl" variant="default">Default</Button>
                    <Button size="xl" variant="success">Success</Button>
                    <Button size="xl" variant="warning">Warning</Button>
                    <Button size="xl" variant="info">Info</Button>
                    <Button size="xl" variant="danger">Danger</Button>
                    <Button size="xl" variant="dark">Dark</Button>
                  </p>

                  {/* Outline */}
                  <p>
                    <Button size="xl" variant="outline-primary">Primary</Button>
                    <Button size="xl" variant="outline-secondary">Secondary</Button>
                    <Button size="xl" variant="outline-default">Default</Button>
                    <Button size="xl" variant="outline-success">Success</Button>
                    <Button size="xl" variant="outline-warning">Warning</Button>
                    <Button size="xl" variant="outline-info">Info</Button>
                    <Button size="xl" variant="outline-danger">Danger</Button>
                    <Button size="xl" variant="outline-dark">Dark</Button>
                  </p>
                </div>
              </Card.Body>
              <hr className="m-0" />
              <Card.Body>
                <small className="text-light font-weight-semibold">Large</small>
                <div className="demo-paragraph-spacing mt-3">
                  <p>
                    <Button size="lg" variant="primary">Primary</Button>
                    <Button size="lg" variant="secondary">Secondary</Button>
                    <Button size="lg" variant="default">Default</Button>
                    <Button size="lg" variant="success">Success</Button>
                    <Button size="lg" variant="warning">Warning</Button>
                    <Button size="lg" variant="info">Info</Button>
                    <Button size="lg" variant="danger">Danger</Button>
                    <Button size="lg" variant="dark">Dark</Button>
                  </p>

                  {/* Outline */}
                  <p>
                    <Button size="lg" variant="outline-primary">Primary</Button>
                    <Button size="lg" variant="outline-secondary">Secondary</Button>
                    <Button size="lg" variant="outline-default">Default</Button>
                    <Button size="lg" variant="outline-success">Success</Button>
                    <Button size="lg" variant="outline-warning">Warning</Button>
                    <Button size="lg" variant="outline-info">Info</Button>
                    <Button size="lg" variant="outline-danger">Danger</Button>
                    <Button size="lg" variant="outline-dark">Dark</Button>
                  </p>
                </div>
              </Card.Body>
              <hr className="m-0" />
              <Card.Body>
                <small className="text-light font-weight-semibold">Small</small>
                <div className="demo-paragraph-spacing mt-3">
                  <p>
                    <Button size="sm" variant="primary">Primary</Button>
                    <Button size="sm" variant="secondary">Secondary</Button>
                    <Button size="sm" variant="default">Default</Button>
                    <Button size="sm" variant="success">Success</Button>
                    <Button size="sm" variant="warning">Warning</Button>
                    <Button size="sm" variant="info">Info</Button>
                    <Button size="sm" variant="danger">Danger</Button>
                    <Button size="sm" variant="dark">Dark</Button>
                  </p>

                  {/* Outline */}
                  <p>
                    <Button size="sm" variant="outline-primary">Primary</Button>
                    <Button size="sm" variant="outline-secondary">Secondary</Button>
                    <Button size="sm" variant="outline-default">Default</Button>
                    <Button size="sm" variant="outline-success">Success</Button>
                    <Button size="sm" variant="outline-warning">Warning</Button>
                    <Button size="sm" variant="outline-info">Info</Button>
                    <Button size="sm" variant="outline-danger">Danger</Button>
                    <Button size="sm" variant="outline-dark">Dark</Button>
                  </p>
                </div>
              </Card.Body>
              <hr className="m-0" />
              <Card.Body>
                <small className="text-light font-weight-semibold">Extra small</small>
                <div className="demo-paragraph-spacing mt-3">
                  <p>
                    <Button size="xs" variant="primary">Primary</Button>
                    <Button size="xs" variant="secondary">Secondary</Button>
                    <Button size="xs" variant="default">Default</Button>
                    <Button size="xs" variant="success">Success</Button>
                    <Button size="xs" variant="warning">Warning</Button>
                    <Button size="xs" variant="info">Info</Button>
                    <Button size="xs" variant="danger">Danger</Button>
                    <Button size="xs" variant="dark">Dark</Button>
                  </p>

                  {/* Outline */}
                  <p>
                    <Button size="xs" variant="outline-primary">Primary</Button>
                    <Button size="xs" variant="outline-secondary">Secondary</Button>
                    <Button size="xs" variant="outline-default">Default</Button>
                    <Button size="xs" variant="outline-success">Success</Button>
                    <Button size="xs" variant="outline-warning">Warning</Button>
                    <Button size="xs" variant="outline-info">Info</Button>
                    <Button size="xs" variant="outline-danger">Danger</Button>
                    <Button size="xs" variant="outline-dark">Dark</Button>
                  </p>
                </div>
              </Card.Body>
            </Card>

          </Col>
          <Col xs={12}>

            <Card className="mb-4">
              <Card.Header as="h6">With icon</Card.Header>
              <Card.Body className="demo-inline-spacing">
                <Button size="lg" variant="primary"><span className="far fa-paper-plane"></span>&nbsp;&nbsp;Primary</Button>
                <Button size="lg" variant="secondary"><span className="oi oi-cloud-download"></span>&nbsp;&nbsp;Secondary</Button>
                <Button size="lg" variant="default"><span className="pe-7s-users"></span>&nbsp;&nbsp;Default</Button>
                <Button size="lg" variant="success"><span className="ion ion-md-bulb"></span>&nbsp;&nbsp;Success</Button>
                <Button size="lg" variant="warning"><span className="lnr lnr-map"></span>&nbsp;&nbsp;Warning</Button>
                <Button size="lg" variant="info"><span className="far fa-paper-plane"></span>&nbsp;&nbsp;Info</Button>
                <Button size="lg" variant="danger"><span className="oi oi-cloud-download"></span>&nbsp;&nbsp;Danger</Button>
                <Button size="lg" variant="dark"><span className="pe-7s-users"></span>&nbsp;&nbsp;Dark</Button>
              </Card.Body>
            </Card>

          </Col>
          <Col xs={12}>

            <Card className="mb-4">
              <Card.Header as="h6">Icon-buttons</Card.Header>
              <Card.Body className="demo-paragraph-spacing">
                {/* Extra-large */}
                <p>
                  <Button size="xl" variant="outline-primary icon-btn"><span className="far fa-paper-plane"></span></Button>
                  <Button size="xl" variant="outline-secondary icon-btn"><span className="oi oi-cloud-download"></span></Button>
                  <Button size="xl" variant="outline-default icon-btn"><span className="pe-7s-users"></span></Button>
                  <Button size="xl" variant="outline-success icon-btn"><span className="ion ion-md-bulb"></span></Button>
                  <Button size="xl" variant="outline-warning icon-btn"><span className="lnr lnr-map"></span></Button>
                  <Button size="xl" variant="outline-info icon-btn"><span className="far fa-paper-plane"></span></Button>
                  <Button size="xl" variant="outline-danger icon-btn"><span className="oi oi-cloud-download"></span></Button>
                  <Button size="xl" variant="outline-dark icon-btn"><span className="pe-7s-users"></span></Button>
                </p>

                {/* Large */}
                <p>
                  <Button size="lg" variant="outline-primary icon-btn"><span className="far fa-paper-plane"></span></Button>
                  <Button size="lg" variant="outline-secondary icon-btn"><span className="oi oi-cloud-download"></span></Button>
                  <Button size="lg" variant="outline-default icon-btn"><span className="pe-7s-users"></span></Button>
                  <Button size="lg" variant="outline-success icon-btn"><span className="ion ion-md-bulb"></span></Button>
                  <Button size="lg" variant="outline-warning icon-btn"><span className="lnr lnr-map"></span></Button>
                  <Button size="lg" variant="outline-info icon-btn"><span className="far fa-paper-plane"></span></Button>
                  <Button size="lg" variant="outline-danger icon-btn"><span className="oi oi-cloud-download"></span></Button>
                  <Button size="lg" variant="outline-dark icon-btn"><span className="pe-7s-users"></span></Button>
                </p>

                {/* Default */}
                <p>
                  <Button variant="outline-primary icon-btn"><span className="far fa-paper-plane"></span></Button>
                  <Button variant="outline-secondary icon-btn"><span className="oi oi-cloud-download"></span></Button>
                  <Button variant="outline-default icon-btn"><span className="pe-7s-users"></span></Button>
                  <Button variant="outline-success icon-btn"><span className="ion ion-md-bulb"></span></Button>
                  <Button variant="outline-warning icon-btn"><span className="lnr lnr-map"></span></Button>
                  <Button variant="outline-info icon-btn"><span className="far fa-paper-plane"></span></Button>
                  <Button variant="outline-danger icon-btn"><span className="oi oi-cloud-download"></span></Button>
                  <Button variant="outline-dark icon-btn"><span className="pe-7s-users"></span></Button>
                </p>

                {/* Small */}
                <p>
                  <Button size="sm" variant="outline-primary icon-btn"><span className="far fa-paper-plane"></span></Button>
                  <Button size="sm" variant="outline-secondary icon-btn"><span className="oi oi-cloud-download"></span></Button>
                  <Button size="sm" variant="outline-default icon-btn"><span className="pe-7s-users"></span></Button>
                  <Button size="sm" variant="outline-success icon-btn"><span className="ion ion-md-bulb"></span></Button>
                  <Button size="sm" variant="outline-warning icon-btn"><span className="lnr lnr-map"></span></Button>
                  <Button size="sm" variant="outline-info icon-btn"><span className="far fa-paper-plane"></span></Button>
                  <Button size="sm" variant="outline-danger icon-btn"><span className="oi oi-cloud-download"></span></Button>
                  <Button size="sm" variant="outline-dark icon-btn"><span className="pe-7s-users"></span></Button>
                </p>

                {/* Extra-small */}
                <p>
                  <Button size="xs" variant="outline-primary icon-btn"><span className="far fa-paper-plane"></span></Button>
                  <Button size="xs" variant="outline-secondary icon-btn"><span className="oi oi-cloud-download"></span></Button>
                  <Button size="xs" variant="outline-default icon-btn"><span className="pe-7s-users"></span></Button>
                  <Button size="xs" variant="outline-success icon-btn"><span className="ion ion-md-bulb"></span></Button>
                  <Button size="xs" variant="outline-warning icon-btn"><span className="lnr lnr-map"></span></Button>
                  <Button size="xs" variant="outline-info icon-btn"><span className="far fa-paper-plane"></span></Button>
                  <Button size="xs" variant="outline-danger icon-btn"><span className="oi oi-cloud-download"></span></Button>
                  <Button size="xs" variant="outline-dark icon-btn"><span className="pe-7s-users"></span></Button>
                </p>
              </Card.Body>
              <hr className="m-0" />
              <Card.Body>
                <small className="text-light font-weight-semibold">Borderless</small>
                <div className="demo-inline-spacing mt-3">
                  <Button size="xl" variant="outline-primary icon-btn borderless"><span className="far fa-paper-plane"></span></Button>
                  <Button size="lg" variant="outline-secondary icon-btn borderless"><span className="oi oi-cloud-download"></span></Button>
                  <Button variant="outline-success icon-btn borderless"><span className="pe-7s-users"></span></Button>
                  <Button size="sm" variant="outline-info icon-btn borderless"><span className="lnr lnr-map"></span></Button>
                  <Button size="xs" variant="outline-warning icon-btn borderless"><span className="ion ion-md-bulb"></span></Button>
                </div>
              </Card.Body>
            </Card>

          </Col>
          <Col xs={12}>

            <Card className="mb-4">
              <Card.Header as="h6">Toggle</Card.Header>
              <Row noGutters className="row-bordered">
                <Col xl={6} className="p-4">
                  <div className="text-light small font-weight-semibold mb-3">Checkboxes</div>

                  <div className="demo-vertical-spacing-sm">
                    <ToggleButtonGroup
                      type="checkbox"
                      value={this.state.checkboxGroup}
                      onChange={this.handleCheckboxGroupChange}
                    >
                      <ToggleButton value={1}>Option 1</ToggleButton>
                      <ToggleButton value={2}>Option 2</ToggleButton>
                      <ToggleButton value={3}>Option 3</ToggleButton>
                    </ToggleButtonGroup>

                    <pre>{this.state.checkboxGroup.join(',') || 'None selected'}</pre>
                  </div>
                </Col>
                <Col xl={6} className="p-4">
                  <div className="text-light small font-weight-semibold mb-3">Radio</div>

                  <div className="demo-vertical-spacing-sm">
                    <ToggleButtonGroup
                      type="radio"
                      name="checkboxGroup"
                      value={this.state.radioGroup}
                      onChange={this.handleRadioGroupChange}
                    >
                      <ToggleButton value={1}>Option 1</ToggleButton>
                      <ToggleButton value={2}>Option 2</ToggleButton>
                      <ToggleButton value={3}>Option 3</ToggleButton>
                    </ToggleButtonGroup>

                    <pre>{this.state.radioGroup}</pre>
                  </div>
                </Col>
              </Row>
            </Card>

          </Col>

        </Row>
      </div>
    )
  }
}

export default Buttons
