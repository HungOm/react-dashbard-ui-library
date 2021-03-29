import React, { Component } from 'react'
import { Button, Spinner } from 'react-bootstrap'

class CuiSpinners extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Spinners</h3>

        <h4 className="ui-block-heading">Border</h4>

        <div className="cui-example cui-example-inline-spacing">
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

        <h4 className="ui-block-heading">Growing</h4>

        <div className="cui-example cui-example-inline-spacing">
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

        <h4 className="ui-block-heading">Small</h4>

        <div className="cui-example">
          <div className="cui-example-inline-spacing mb-4">
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

          <div className="cui-example-inline-spacing">
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
        </div>

        <h4 className="ui-block-heading">Within buttons</h4>

        <div className="cui-example">
          <div className="cui-example-inline-spacing mb-4">
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

          <div className="cui-example-inline-spacing">
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
        </div>
      </div>
    )
  }
}

export default CuiSpinners
