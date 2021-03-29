import React, { Component } from 'react'
import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'

class CuiButtons extends Component {
  constructor(props) {
    super(props)

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
      <div className="ui-block">
        <h3 className="ui-block-heading">Buttons</h3>

        <h4 className="ui-block-heading">Variations</h4>

        <div className="cui-example cui-example-inline-spacing">
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

        <h4 className="ui-block-heading">Outline</h4>

        <div className="cui-example cui-example-inline-spacing">
          <Button variant="outline-primary">Primary</Button>
          <Button variant="outline-secondary">Secondary</Button>
          <Button variant="outline-default">Default</Button>
          <Button variant="outline-success">Success</Button>
          <Button variant="outline-warning">Warning</Button>
          <Button variant="outline-info">Info</Button>
          <Button variant="outline-danger">Danger</Button>
          <Button variant="outline-dark">Dark</Button>
        </div>

        <h4 className="ui-block-heading material-style-only">Flat (Material only)</h4>

        <div className="cui-example cui-example-inline-spacing material-style-only">
          <Button variant="primary md-btn-flat">Primary</Button>
          <Button variant="secondary md-btn-flat">Secondary</Button>
          <Button variant="default md-btn-flat">Default</Button>
          <Button variant="success md-btn-flat">Success</Button>
          <Button variant="warning md-btn-flat">Warning</Button>
          <Button variant="info md-btn-flat">Info</Button>
          <Button variant="danger md-btn-flat">Danger</Button>
          <Button variant="dark md-btn-flat">Dark</Button>
        </div>

        <h4 className="ui-block-heading">Round</h4>

        <div className="cui-example cui-example-paragraph-spacing">
          <p>
            <Button variant="primary rounded-pill">Primary</Button>
            <Button variant="secondary rounded-pill">Secondary</Button>
            <Button variant="default rounded-pill">Default</Button>
            <Button variant="success rounded-pill">Success</Button>
            <Button variant="warning rounded-pill">Warning</Button>
            <Button variant="info rounded-pill">Info</Button>
            <Button variant="danger rounded-pill">Danger</Button>
            <Button variant="dark rounded-pill">Dark</Button>
          </p>

          {/* Outline */}
          <p>
            <Button variant="outline-primary rounded-pill">Primary</Button>
            <Button variant="outline-secondary rounded-pill">Secondary</Button>
            <Button variant="outline-default rounded-pill">Default</Button>
            <Button variant="outline-success rounded-pill">Success</Button>
            <Button variant="outline-warning rounded-pill">Warning</Button>
            <Button variant="outline-info rounded-pill">Info</Button>
            <Button variant="outline-danger rounded-pill">Danger</Button>
            <Button variant="outline-dark rounded-pill">Dark</Button>
          </p>
        </div>

        <h4 className="ui-block-heading">Extra-large</h4>

        <div className="cui-example cui-example-paragraph-spacing">
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

        <h4 className="ui-block-heading">Large</h4>

        <div className="cui-example cui-example-paragraph-spacing">
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

        <h4 className="ui-block-heading">Small</h4>

        <div className="cui-example cui-example-paragraph-spacing">
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

        <h4 className="ui-block-heading">Extra-small</h4>

        <div className="cui-example cui-example-paragraph-spacing">
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

        <h4 className="ui-block-heading">With icon</h4>

        <div className="cui-example cui-example-inline-spacing">
          <Button size="lg" variant="primary"><span className="far fa-paper-plane"></span>&nbsp;&nbsp;Primary</Button>
          <Button size="lg" variant="secondary"><span className="oi oi-cloud-download"></span>&nbsp;&nbsp;Secondary</Button>
          <Button size="lg" variant="default"><span className="pe-7s-users"></span>&nbsp;&nbsp;Default</Button>
          <Button size="lg" variant="success"><span className="ion ion-md-bulb"></span>&nbsp;&nbsp;Success</Button>
          <Button size="lg" variant="warning"><span className="lnr lnr-map"></span>&nbsp;&nbsp;Warning</Button>
          <Button size="lg" variant="info"><span className="far fa-paper-plane"></span>&nbsp;&nbsp;Info</Button>
          <Button size="lg" variant="danger"><span className="oi oi-cloud-download"></span>&nbsp;&nbsp;Danger</Button>
          <Button size="lg" variant="dark"><span className="pe-7s-users"></span>&nbsp;&nbsp;Dark</Button>
        </div>

        <h4 className="ui-block-heading">Icon-buttons</h4>

        <div className="cui-example cui-example-paragraph-spacing">
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
        </div>

        <h4 className="ui-block-heading">Borderless icon-buttons</h4>

        <div className="cui-example cui-example-inline-spacing">
          <Button size="xl" variant="outline-primary icon-btn borderless"><span className="far fa-paper-plane"></span></Button>
          <Button size="lg" variant="outline-secondary icon-btn borderless"><span className="oi oi-cloud-download"></span></Button>
          <Button variant="outline-success icon-btn borderless"><span className="pe-7s-users"></span></Button>
          <Button size="sm" variant="outline-info icon-btn borderless"><span className="lnr lnr-map"></span></Button>
          <Button size="xs" variant="outline-warning icon-btn borderless"><span className="ion ion-md-bulb"></span></Button>
        </div>

        <h4 className="ui-block-heading">Disabled</h4>

        <div className="cui-example cui-example-paragraph-spacing">
          <p>
            <Button variant="primary" disabled>Primary</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="default" disabled>Default</Button>
            <Button variant="success" disabled>Success</Button>
            <Button variant="warning" disabled>Warning</Button>
            <Button variant="info" disabled>Info</Button>
            <Button variant="danger" disabled>Danger</Button>
            <Button variant="dark" disabled>Dark</Button>
          </p>

          {/* Outline */}
          <p>
            <Button variant="outline-primary" disabled>Primary</Button>
            <Button variant="outline-secondary" disabled>Secondary</Button>
            <Button variant="outline-default" disabled>Default</Button>
            <Button variant="outline-success" disabled>Success</Button>
            <Button variant="outline-warning" disabled>Warning</Button>
            <Button variant="outline-info" disabled>Info</Button>
            <Button variant="outline-danger" disabled>Danger</Button>
            <Button variant="outline-dark" disabled>Dark</Button>
          </p>

          {/* MATERIAL_ONLY */}
          {/* Flat (Material only) */}
          <p className="material-style-only">
            <Button variant="primary md-btn-flat" disabled>Primary</Button>
            <Button variant="secondary md-btn-flat" disabled>Secondary</Button>
            <Button variant="default md-btn-flat" disabled>Default</Button>
            <Button variant="success md-btn-flat" disabled>Success</Button>
            <Button variant="warning md-btn-flat" disabled>Warning</Button>
            <Button variant="info md-btn-flat" disabled>Info</Button>
            <Button variant="danger md-btn-flat" disabled>Danger</Button>
            <Button variant="dark md-btn-flat" disabled>Dark</Button>
          </p>
          {/* /MATERIAL_ONLY */}
        </div>

        <h4 className="ui-block-heading">Checkbox / Radio</h4>

        <div className="cui-example cui-example-vertical-spacing">
          {/* Checkbox */}
          <ToggleButtonGroup
            type="checkbox"
            value={this.state.checkboxGroup}
            onChange={this.handleCheckboxGroupChange}
          >
            <ToggleButton value={1}>Option 1</ToggleButton>
            <ToggleButton value={2}>Option 2</ToggleButton>
            <ToggleButton value={3}>Option 3</ToggleButton>
          </ToggleButtonGroup>

          <pre>{ this.state.checkboxGroup.join(',') || 'None selected' }</pre>

          {/* Radio */}
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

          <pre>{ this.state.radioGroup }</pre>
        </div>
      </div>
    )
  }
}

export default CuiButtons
