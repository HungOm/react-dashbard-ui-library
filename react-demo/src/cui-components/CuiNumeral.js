import React, { Component } from 'react'

import * as numeral from 'numeral'

class CuiNumeral extends Component {
  constructor(props) {
    super(props)

    this.example1 = numeral(1000.1234).format('0,0')
    this.example2 = numeral(1000.1234).format('0,0.00')
    this.example3 = numeral(1000.1234).format('+0,0')
    this.example4 = numeral(1000.1234).format('.00')
    this.example5 = numeral(1000.1234).format('$0,0.00')
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Numeral.js</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/adamwdraper/Numeral-js" className="ui-block-description">https://github.com/adamwdraper/Numeral-js</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <p>{ this.example1 }</p>
          <p>{ this.example2 }</p>
          <p>{ this.example3 }</p>
          <p>{ this.example4 }</p>
          <p>{ this.example5 }</p>
        </div>
      </div>
    )
  }
}

export default CuiNumeral
