import React, { Component } from 'react'
import { ProgressBar, Card } from 'react-bootstrap'

class ProgressBars extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Progress bars - UI elements')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Progress bars
        </h4>

        <Card className="mb-4">
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Default</div>

            <ProgressBar now={60} />
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Height</div>

            <ProgressBar now={60} style={{height: '0.25rem'}} />
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">With label</div>

            <ProgressBar now={30} label={`${30}%`} />
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Variations</div>

            <div className="demo-vertical-spacing-sm">
              <ProgressBar variant="secondary" now={30} />
              <ProgressBar variant="success" now={40} />
              <ProgressBar variant="info" now={20} />
              <ProgressBar variant="warning" now={60} />
              <ProgressBar variant="danger" now={80} />
              <ProgressBar variant="dark" now={50} />
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Striped</div>

            <div className="demo-vertical-spacing-sm">
              <ProgressBar striped now={45} />
              <ProgressBar variant="secondary" striped now={30} />
              <ProgressBar variant="success" striped now={40} />
              <ProgressBar variant="info" striped now={20} />
              <ProgressBar variant="warning" striped now={60} />
              <ProgressBar variant="danger" striped now={80} />
              <ProgressBar variant="dark" striped now={50} />
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Animated</div>

            <div className="demo-vertical-spacing-sm">
              <ProgressBar animated now={45} />
              <ProgressBar variant="secondary" animated now={30} />
              <ProgressBar variant="success" animated now={40} />
              <ProgressBar variant="info" animated now={20} />
              <ProgressBar variant="warning" animated now={60} />
              <ProgressBar variant="danger" animated now={80} />
              <ProgressBar variant="dark" animated now={50} />
            </div>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default ProgressBars
