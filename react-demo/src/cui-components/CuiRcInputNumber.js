import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import InputNumber from 'rc-input-number'
import '../vendor/libs/rc-input-number/rc-input-number.scss'

class CuiRcInputNumber extends Component {
  constructor(props) {
    super(props)

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
      <div className="ui-block">
        <h3 className="ui-block-heading">rc-input-number</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/react-component/input-number" className="ui-block-description">https://github.com/react-component/input-number</a>

        <h4 className="ui-block-heading">Default</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <InputNumber className="form-control" defaultValue={this.state.value} onChange={e => this.onChange(e)} disabled={this.state.disabled} />
          
          <pre>{this.state.value}</pre>
          
          <Button variant="default" onClick={e =>
            this.setState({ disabled: !this.state.disabled })
          }>Toggle disabled</Button>
        </div>

        <h4 className="ui-block-heading">Decimal</h4>

        <div className="cui-example">
          <InputNumber className="form-control"
            defaultValue={5.5}
            min={-8}
            max={10}
            step={0.1}
          />
        </div>

        <h4 className="ui-block-heading">Sizes</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <InputNumber className="form-control form-control-sm" defaultValue={5} />
          <InputNumber className="form-control form-control-lg" defaultValue={5} />
        </div>
      </div>
    )
  }
}

export default CuiRcInputNumber
