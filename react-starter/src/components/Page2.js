import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Page2 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Page 2')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">Page 2</h4>
        <p>This page is an example of basic layout. For more options use <strong>React starter template generator</strong> in the docs.</p>
        <p><Button variant="primary" size="lg">Button</Button></p>
      </div>
    )
  }
}

export default Page2
