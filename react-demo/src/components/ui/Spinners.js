import React, { Component } from 'react'
import { Button, Spinner, Card } from 'react-bootstrap'

class Spinners extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Spinners - UI elements')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Spinners
        </h4>

        <Card>
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Border</div>

            <div className="demo-inline-spacing">
              <Spinner animation="border" />
              <Spinner animation="border" variant="primary" />
              <Spinner animation="border" variant="secondary" />
              <Spinner animation="border" variant="success" />
              <Spinner animation="border" variant="danger" />
              <Spinner animation="border" variant="warning" />
              <Spinner animation="border" variant="info" />
              <Spinner animation="border" variant="light" />
              <Spinner animation="border" variant="dark" />
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Growing</div>

            <div className="demo-inline-spacing">
              <Spinner animation="grow" />
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="light" />
              <Spinner animation="grow" variant="dark" />
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Small</div>

            <div className="demo-inline-spacing">
              <Spinner animation="border" size="sm" />
              <Spinner animation="border" size="sm" variant="primary" />
              <Spinner animation="border" size="sm" variant="secondary" />
              <Spinner animation="border" size="sm" variant="success" />
              <Spinner animation="border" size="sm" variant="danger" />
              <Spinner animation="border" size="sm" variant="warning" />
              <Spinner animation="border" size="sm" variant="info" />
              <Spinner animation="border" size="sm" variant="light" />
              <Spinner animation="border" size="sm" variant="dark" />
            </div>

            <div className="demo-inline-spacing">
              <Spinner animation="grow" size="sm" />
              <Spinner animation="grow" size="sm" variant="primary" />
              <Spinner animation="grow" size="sm" variant="secondary" />
              <Spinner animation="grow" size="sm" variant="success" />
              <Spinner animation="grow" size="sm" variant="danger" />
              <Spinner animation="grow" size="sm" variant="warning" />
              <Spinner animation="grow" size="sm" variant="info" />
              <Spinner animation="grow" size="sm" variant="light" />
              <Spinner animation="grow" size="sm" variant="dark" />
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Within buttons</div>

            <div className="demo-inline-spacing">
              {/* Extra small */}
              <Button variant="primary" size="xs" disabled>
                <Spinner as="span" animation="border" role="status" aria-hidden="true" />
                <span className="sr-only">Loading...</span>
              </Button>
              <Button variant="primary" size="xs" disabled>
                <Spinner as="span" animation="border" role="status" aria-hidden="true" /> Loading...
              </Button>

              {/* Small */}
              <Button variant="primary" size="sm" disabled>
                <Spinner as="span" animation="border" role="status" aria-hidden="true" />
                <span className="sr-only">Loading...</span>
              </Button>
              <Button variant="primary" size="sm" disabled>
                <Spinner as="span" animation="border" role="status" aria-hidden="true" /> Loading...
              </Button>

              {/* Default */}
              <Button variant="primary" disabled>
                <Spinner as="span" animation="border" role="status" aria-hidden="true" />
                <span className="sr-only">Loading...</span>
              </Button>
              <Button variant="primary" disabled>
                <Spinner as="span" animation="border" role="status" aria-hidden="true" /> Loading...
              </Button>

              {/* Large */}
              <Button variant="primary" size="ls" disabled>
                <Spinner as="span" animation="border" role="status" aria-hidden="true" />
                <span className="sr-only">Loading...</span>
              </Button>
              <Button variant="primary" size="ls" disabled>
                <Spinner as="span" animation="border" role="status" aria-hidden="true" /> Loading...
              </Button>

              {/* Extra large */}
              <Button variant="primary" size="xl" disabled>
                <Spinner as="span" animation="border" role="status" aria-hidden="true" />
                <span className="sr-only">Loading...</span>
              </Button>
              <Button variant="primary" size="xl" disabled>
                <Spinner as="span" animation="border" role="status" aria-hidden="true" /> Loading...
              </Button>
            </div>

            <div className="demo-inline-spacing">
              {/* Extra small */}
              <Button variant="primary" size="xs" disabled>
                <Spinner as="span" animation="grow" role="status" aria-hidden="true" />
                <span className="sr-only">Loading...</span>
              </Button>
              <Button variant="primary" size="xs" disabled>
                <Spinner as="span" animation="grow" role="status" aria-hidden="true" /> Loading...
              </Button>

              {/* Small */}
              <Button variant="primary" size="sm" disabled>
                <Spinner as="span" animation="grow" role="status" aria-hidden="true" />
                <span className="sr-only">Loading...</span>
              </Button>
              <Button variant="primary" size="sm" disabled>
                <Spinner as="span" animation="grow" role="status" aria-hidden="true" /> Loading...
              </Button>

              {/* Default */}
              <Button variant="primary" disabled>
                <Spinner as="span" animation="grow" role="status" aria-hidden="true" />
                <span className="sr-only">Loading...</span>
              </Button>
              <Button variant="primary" disabled>
                <Spinner as="span" animation="grow" role="status" aria-hidden="true" /> Loading...
              </Button>

              {/* Large */}
              <Button variant="primary" size="ls" disabled>
                <Spinner as="span" animation="grow" role="status" aria-hidden="true" />
                <span className="sr-only">Loading...</span>
              </Button>
              <Button variant="primary" size="ls" disabled>
                <Spinner as="span" animation="grow" role="status" aria-hidden="true" /> Loading...
              </Button>

              {/* Extra large */}
              <Button variant="primary" size="xl" disabled>
                <Spinner as="span" animation="grow" role="status" aria-hidden="true" />
                <span className="sr-only">Loading...</span>
              </Button>
              <Button variant="primary" size="xl" disabled>
                <Spinner as="span" animation="grow" role="status" aria-hidden="true" /> Loading...
              </Button>
            </div>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default Spinners
