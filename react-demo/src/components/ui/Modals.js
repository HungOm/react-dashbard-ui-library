import React, { Component } from 'react'
import { Modal, Button, Card, InputGroup, Form, Col } from 'react-bootstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../../vendor/libs/sweetalert2/sweetalert2.scss'

const ReactSwal = withReactContent(Swal.mixin({
  buttonsStyling: false,
  customClass: {
    confirmButton: 'btn btn-primary btn-lg',
    cancelButton: 'btn btn-default btn-lg',
    actions: 'text-center'
  }
}))

class Modals extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Modals - UI elements')

    this.onDefaultModalClose = this.onDefaultModalClose.bind(this)
    this.onTopModalClose = this.onTopModalClose.bind(this)
    this.onSlideModalClose = this.onSlideModalClose.bind(this)
    this.onFillInModalClose = this.onFillInModalClose.bind(this)

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

  prevent(e) {
    e.preventDefault()
  }

  onDefaultModalClose() {
    this.setState({ defaultModalShow: false })
  }

  onTopModalClose() {
    this.setState({ topModalShow: false })
  }

  onSlideModalClose() {
    this.setState({ slideModalShow: false })
  }

  onFillInModalClose() {
    this.setState({ fillInModalShow: false })
  }

  basicSweetAlertExample() {
    ReactSwal.fire({
      title: 'Here\'s a message!',
      text: 'It\'s pretty, isn\'t it?',
      footer: (<a href="#d" onClick={this.prevent}>Why do I have this issue?</a>)
    })
  }

  fullSweetAlertExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel plx!'
    }).then(function (result) {
      if (result.value) {
        ReactSwal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success')
      } else {
        ReactSwal.fire('Cancelled', 'Your imaginary file is safe :)', 'error')
      }
    })
  }

  loaderSweetAlertExample() {
    ReactSwal.fire({
      title: 'Ajax request example',
      text: 'Submit to run ajax request',
      type: 'info',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      allowOutsideClick: function () {
        return !Swal.isLoading()
      },
      preConfirm: function () {
        return new Promise(function (resolve) {
          setTimeout(function () {
            resolve(true)
          }, 2000)
        })
      }
    }).then(function (result) {
      if (result.value) {
        ReactSwal.fire('Ajax request finished!')
      }
    })
  }

  stepsSweetAlertExample() {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3'],
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-primary btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    }).queue([{
      title: 'Question 1',
      text: 'Chaining swal2 modals is easy'
    },
      'Question 2',
      'Question 3'
    ]).then(function (result) {
      if (result.value) {
        ReactSwal.fire({
          title: 'All done!',
          html: (<p>Your answers: <pre><code>{JSON.stringify(result.value)}</code></pre></p>),
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }

  infoSweetAlertExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'info',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-info btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    })
  }

  successSweetAlertExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'success',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-success btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    })
  }

  warningSweetAlertExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-warning btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    })
  }

  dangerSweetAlertExample() {
    ReactSwal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'error',
      showCancelButton: true,
      customClass: {
        confirmButton: 'btn btn-danger btn-lg',
        cancelButton: 'btn btn-default btn-lg',
        actions: 'text-center'
      }
    })
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Modals
        </h4>

        <Card className="mb-4">
          <Card.Header as="h6">Bootstrap modals</Card.Header>
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Default</div>

            <div className="demo-inline-spacing">{this.modalSizes.map(size =>
              <Button variant="default" key={size.value} onClick={() =>
                this.setState({
                  defaultModalShow: true,
                  defaultModalSize: size.value
                })
              }>{size.title}</Button>
            )}</div>
            
            {/* Modal template */}
            <Modal show={this.state.defaultModalShow} size={this.state.defaultModalSize} onHide={this.onDefaultModalClose}>
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
                <Button variant="default" onClick={this.onDefaultModalClose}>Close</Button>
                <Button variant="primary" onClick={this.onDefaultModalClose}>Save</Button>
              </Modal.Footer>
            </Modal>

          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Top</div>

            <div className="demo-inline-spacing">{this.modalSizes.map(size =>
              <Button variant="default" key={size.value} onClick={() =>
                this.setState({
                  topModalShow: true,
                  topModalSize: size.value
                })
              }>{size.title}</Button>
            )}</div>
            
            {/* Modal template */}
            <Modal className="modal-top" show={this.state.topModalShow} size={this.state.topModalSize} onHide={this.onTopModalClose}>
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
                <Button variant="default" onClick={this.onTopModalClose}>Close</Button>
                <Button variant="primary" onClick={this.onTopModalClose}>Save</Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Slide</div>

            <Button variant="default" onClick={() =>
              this.setState({ slideModalShow: true })
            }>Show</Button>
            
            {/* Modal template */}
            <Modal className="modal-slide" show={this.state.slideModalShow} onHide={this.onSlideModalClose}>
              <button type="button" className="close" aria-label="Close" onClick={this.onSlideModalClose}>&times;</button>
              <Modal.Body>
                <p className="text-center text-big mb-4">Before you proceed, you have to login to make the necessary changes</p>
                <Button variant="primary" block onClick={this.onSlideModalClose}>Continue</Button>
                <Button variant="default" block onClick={this.onSlideModalClose}>Cancel</Button>
              </Modal.Body>
            </Modal>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Fill-In</div>

            <div className="demo-inline-spacing">{this.modalSizes.map(size =>
              <Button variant="default" key={size.value} onClick={() =>
                this.setState({
                  fillInModalShow: true,
                  fillInModalSize: size.value
                })
              }>{size.title}</Button>
            )}</div>
            
            {/* Modal template */}
            <Modal className="modal-fill-in" show={this.state.fillInModalShow} size={this.state.fillInModalSize} onHide={this.onFillInModalClose}>
              <button type="button" className="close" aria-label="Close" onClick={this.onFillInModalClose}>&times;</button>
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
          </Card.Body>
        </Card>

        {isIE10Mode && <div className="alert alert-danger">
          <strong>SweetAlert2</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode && <React.Fragment>
          <Card className="mb-4">
            <Card.Header as="h6">SweetAlert2</Card.Header>
            <Card.Body className="demo-inline-spacing clearfix">
              <Button variant="default" size="lg" onClick={() => this.basicSweetAlertExample()}>Basic</Button>
              <Button variant="default" size="lg" onClick={() => this.fullSweetAlertExample()}>Full</Button>
              <Button variant="default" size="lg" onClick={() => this.loaderSweetAlertExample()}>With loader</Button>
              <Button variant="default" size="lg" onClick={() => this.stepsSweetAlertExample()}>Steps</Button>
              <Button variant="info" size="lg" onClick={() => this.infoSweetAlertExample()}>Info</Button>
              <Button variant="success" size="lg" onClick={() => this.successSweetAlertExample()}>Success</Button>
              <Button variant="warning" size="lg" onClick={() => this.warningSweetAlertExample()}>Warning</Button>
              <Button variant="danger" size="lg" onClick={() => this.dangerSweetAlertExample()}>Danger</Button>
            </Card.Body>
          </Card>
        </React.Fragment>}

      </div>
    )
  }
}

export default Modals
