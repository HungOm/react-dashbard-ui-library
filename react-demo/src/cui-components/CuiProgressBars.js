import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'

class CuiProgressBars extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Progress bars</h3>

        <h4 className="ui-block-heading">Basic</h4>

        <div className="cui-example">
          <ProgressBar now={60} />
        </div>

        <h4 className="ui-block-heading">Height</h4>

        <div className="cui-example">
          <ProgressBar now={60} style={{height: '0.25rem'}} />
        </div>

        <h4 className="ui-block-heading">With label</h4>

        <div className="cui-example">
          <ProgressBar now={30} label={`${30}%`} />
        </div>

        <h4 className="ui-block-heading">Variations</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <ProgressBar variant="secondary" now={30} />
          <ProgressBar variant="success" now={40} />
          <ProgressBar variant="info" now={20} />
          <ProgressBar variant="warning" now={60} />
          <ProgressBar variant="danger" now={80} />
          <ProgressBar variant="dark" now={50} />
        </div>

        <h4 className="ui-block-heading">Striped</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <ProgressBar striped now={45} />
          <ProgressBar variant="secondary" striped now={30} />
          <ProgressBar variant="success" striped now={40} />
          <ProgressBar variant="info" striped now={20} />
          <ProgressBar variant="warning" striped now={60} />
          <ProgressBar variant="danger" striped now={80} />
          <ProgressBar variant="dark" striped now={50} />
        </div>

        <h4 className="ui-block-heading">Animated</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <ProgressBar animated now={45} />
          <ProgressBar variant="secondary" animated now={30} />
          <ProgressBar variant="success" animated now={40} />
          <ProgressBar variant="info" animated now={20} />
          <ProgressBar variant="warning" animated now={60} />
          <ProgressBar variant="danger" animated now={80} />
          <ProgressBar variant="dark" animated now={50} />
        </div>
      </div>
    )
  }
}

export default CuiProgressBars
