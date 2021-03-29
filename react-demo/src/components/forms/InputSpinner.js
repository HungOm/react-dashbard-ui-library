import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import InputNumber from 'rc-input-number'
import '../../vendor/libs/rc-input-number/rc-input-number.scss';


class InputSpinner extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Input spinner - Forms')

    this.onChange = this.onChange.bind(this)

    this.state = {
      disabled: false,
      value: 5
    }
  }

  onChange(e) {
    this.setState({
      value: e
    })
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> Input spinner
        </h4>

        <Card className="mb-4">
          <Card.Header as="h6">rc-input-number</Card.Header>
          <Card.Body className="demo-vertical-spacing-sm">
            <InputNumber className="form-control" defaultValue={this.state.value} onChange={e => this.onChange(e)} disabled={this.state.disabled} />

            <pre>{this.state.value}</pre>

            <Button variant="default" onClick={e =>
              this.setState({ disabled: !this.state.disabled })
            }>Toggle disabled</Button>
          </Card.Body>
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Decimal</div>

            <InputNumber className="form-control"
              defaultValue={5.5}
              min={-8}
              max={10}
              step={0.1}
            />
          </Card.Body>
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Sizes</div>

            <div className="demo-vertical-spacing-sm">
              <InputNumber className="form-control form-control-sm" defaultValue={5} />
              <InputNumber className="form-control form-control-lg" defaultValue={5} />
            </div>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default InputSpinner
