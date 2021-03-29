import React, { Component } from 'react'

class BlankExample extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Blank layout - Layouts')
  }

  render() {
    return (
      <h4 className="font-weight-bold">
        <span className="text-muted font-weight-light">Layouts /</span> Blank
      </h4>
    )
  }
}

export default BlankExample
