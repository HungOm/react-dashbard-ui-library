import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import * as numeral from 'numeral'

class Numeral extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Numeral.js - Miscellaneous')

    this.example1 = numeral(1000.1234).format('0,0')
    this.example2 = numeral(1000.1234).format('0,0.00')
    this.example3 = numeral(1000.1234).format('+0,0')
    this.example4 = numeral(1000.1234).format('.00')
    this.example5 = numeral(1000.1234).format('$0,0.00')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Miscellaneous /</span> Numeral.js
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-4" />

        <Card>
          <Card.Body className="demo-vertical-spacing">
            <p>{this.example1}</p>
            <p>{this.example2}</p>
            <p>{this.example3}</p>
            <p>{this.example4}</p>
            <p>{this.example5}</p>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Numeral
