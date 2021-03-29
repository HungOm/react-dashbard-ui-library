import React, { Component } from 'react'

class CuiCustomRangeSelect extends Component {
  constructor(params) {
    super(params)

    this.onRangeChange = this.onRangeChange.bind(this)

    this.state = {
      rangeValue: 40
    }
  }

  onRangeChange(e) {
    this.setState({
      rangeValue: e.target.value
    })
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Custom range input</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example">
          <input type="range" className="custom-range" value={this.state.rangeValue} onChange={this.onRangeChange} />
        </div>

        <pre>{this.state.rangeValue}</pre>

        <h4 className="ui-block-heading">Disabled</h4>

        <div className="cui-example">
          <input type="range" className="custom-range" value={this.state.rangeValue} onChange={this.onRangeChange} disabled />
        </div>
      </div>
    )
  }
}

export default CuiCustomRangeSelect
