import React, { Component } from 'react'
import { Modal, Button, Form, Col, InputGroup } from 'react-bootstrap'

class CuiModals extends Component {
  constructor(props) {
    super(props)

    this.onDefaultClose = this.onDefaultClose.bind(this)
    this.onTopClose = this.onTopClose.bind(this)
    this.onSlideClose = this.onSlideClose.bind(this)
    this.onFillInClose = this.onFillInClose.bind(this)

    this.state = {
      defaultModalShow: false,
      defaultModalSize: null,
      topModalShow: false,
      topModalSize: null,
      slideModalShow: false,
      fillInModalShow: false,
      fillInModalSize: null
    }

    this.modalSizes = [{
      title: 'Extra large',
      value: 'xl'
    }, {
      title: 'Large',
      value: 'lg'
    }, {
      title: 'Medium',
      value: null
    }, {
      title: 'Small',
      value: 'sm'
    }]
  }

  onDefaultClose() {
    this.setState({ defaultModalShow: false })
  }

  onTopClose() {
    this.setState({ topModalShow: false })
  }

  onSlideClose() {
    this.setState({ slideModalShow: false })
  }

  onFillInClose() {
    this.setState({ fillInModalShow: false })
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Modals</h3>

        <h4 className="ui-block-heading">Default modals</h4>

        <div className="cui-example">
          <div className="cui-example-inline-spacing">{this.modalSizes.map(size =>
            <Button variant="default" key={size.value} onClick={() =>
              this.setState({
                defaultModalShow: true,
                defaultModalSize: size.value
              })
            }>{size.title}</Button>
          )}</div>
          
          {/* Modal template */}
          <Modal show={this.state.defaultModalShow} size={this.state.defaultModalSize} onHide={this.onDefaultClose}>
            <Modal.Header closeButton>
              <Modal.Title as="h5">
                Payment <span className="font-weight-light">Information</span><br />
                <small className="text-muted">We need payment information to process your order.</small>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Card number</Form.Label>
                <Form.Control placeholder="XXXX XXXX XXXX XXXX" />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} className="mb-0">
                  <Form.Label>Expiration date</Form.Label>
                  <Form.Control placeholder="DD / MM" />
                </Form.Group>
                <Form.Group as={Col} className="mb-0">
                  <Form.Label>Card holder</Form.Label>
                  <Form.Control placeholder="Name on card" />
                </Form.Group>
              </Form.Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="default" onClick={this.onDefaultClose}>Close</Button>
              <Button variant="primary" onClick={this.onDefaultClose}>Save</Button>
            </Modal.Footer>
          </Modal>
        </div>

        <h4 className="ui-block-heading">Top modals</h4>

        <div className="cui-example">
          <div className="cui-example-inline-spacing">{this.modalSizes.map(size =>
            <Button variant="default" key={size.value} onClick={() =>
              this.setState({
                topModalShow: true,
                topModalSize: size.value
              })
            }>{size.title}</Button>
          )}</div>
          
          {/* Modal template */}
          <Modal className="modal-top" show={this.state.topModalShow} size={this.state.topModalSize} onHide={this.onTopClose}>
            <Modal.Header closeButton>
              <Modal.Title as="h5">
                Payment <span className="font-weight-light">Information</span><br />
                <small className="text-muted">We need payment information to process your order.</small>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Card number</Form.Label>
                <Form.Control placeholder="XXXX XXXX XXXX XXXX" />
              </Form.Group>
              <Form.Row>
                <Form.Group as={Col} className="mb-0">
                  <Form.Label>Expiration date</Form.Label>
                  <Form.Control placeholder="DD / MM" />
                </Form.Group>
                <Form.Group as={Col} className="mb-0">
                  <Form.Label>Card holder</Form.Label>
                  <Form.Control placeholder="Name on card" />
                </Form.Group>
              </Form.Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="default" onClick={this.onTopClose}>Close</Button>
              <Button variant="primary" onClick={this.onTopClose}>Save</Button>
            </Modal.Footer>
          </Modal>
        </div>

        <h4 className="ui-block-heading">Slide modals</h4>

        <div className="cui-example">
          <Button variant="default" onClick={() =>
            this.setState({ slideModalShow: true })
          }>Show</Button>
          
          {/* Modal template */}
          <Modal className="modal-slide" show={this.state.slideModalShow} onHide={this.onSlideClose}>
            <button type="button" className="close" aria-label="Close" onClick={this.onSlideClose}>&times;</button>
            <Modal.Body>
              <p className="text-center text-big mb-4">Before you proceed, you have to login to make the necessary changes</p>
              <Button variant="primary" block onClick={this.onSlideClose}>Continue</Button>
              <Button variant="default" block onClick={this.onSlideClose}>Cancel</Button>
            </Modal.Body>
          </Modal>
        </div>

        <h4 className="ui-block-heading">Fill-In modals</h4>

        <div className="cui-example">
          <div className="cui-example-inline-spacing">{this.modalSizes.map(size =>
            <Button variant="default" key={size.value} onClick={() =>
              this.setState({
                fillInModalShow: true,
                fillInModalSize: size.value
              })
            }>{size.title}</Button>
          )}</div>
          
          {/* Modal template */}
          <Modal className="modal-fill-in" show={this.state.fillInModalShow} size={this.state.fillInModalSize} onHide={this.onFillInClose}>
            <button type="button" className="close" aria-label="Close" onClick={this.onFillInClose}>&times;</button>
            <Modal.Body>
              <p className="text-white text-large font-weight-light mb-3">Subscribe to our newsletter</p>
              <InputGroup size="lg" className="mb-3">
                <Form.Control placeholder="Your email" className="bg-white border-0" />
                <InputGroup.Append>
                  <Button variant="primary">Subscribe</Button>
                </InputGroup.Append>
              </InputGroup>
              <div className="text-center text-right text-white opacity-50">
                We will not sell/rent your email address
              </div>
            </Modal.Body>
          </Modal>
        </div>

      </div>
    )
  }
}

export default CuiModals
