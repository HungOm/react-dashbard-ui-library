import React, { Component } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'


import { ToastContainer, toast } from 'react-toastify'
import '../vendor/libs/react-toastify/react-toastify.scss'

const CloseButton = ({ closeToast }) => (
  <button className="Toastify__close-button" type="button" aria-label="close"
    onClick={closeToast}>&times;</button>
)

class CuiReactToastify extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'Some notification',
      type: 'default',
      position: 'top-right',
      delay: '5000',
      disableAutoClose: false,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      pauseOnHover: true,
      allowDragAndClose: true
    }
  }

  show() {
    toast(this.state.text, {
      type: this.state.type,
      position: this.state.position,
      hideProgressBar: this.state.hideProgressBar,
      closeOnClick: this.state.closeOnClick,
      pauseOnHover: this.state.pauseOnHover,
      draggable: this.state.allowDragAndClose,
    })
  }

  clear() {
    toast.dismiss()
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-toastify</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/fkhadra/react-toastify" className="ui-block-description">https://github.com/fkhadra/react-toastify</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example">
          <Row>
            <Col sm={6}>
              <Form.Group>
                <Form.Label>Text</Form.Label>
                <Form.Control placeholder="Toast text..." value={this.state.text} onChange={e => this.setState({ text: e.target.value })} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                  <select className="custom-select" value={this.state.type} onChange={e => this.setState({ type: e.target.value })}>
                    {Object.values(toast.TYPE).map(type => (
                      <option
                        key={`react-toastify-type-${type}`}
                        value={type}>{type}</option>
                    ))}
                  </select>
              </Form.Group>
              <Form.Group>
                <Form.Label>Delay</Form.Label>
                <Form.Control placeholder="Toast delay..." value={this.state.delay} onChange={e => this.setState({ delay: e.target.value })} />
              </Form.Group>

              <Form.Group className="custom-controls-stacked">
                <Form.Check custom type="checkbox" id="react-toastify-disableAutoclose"
                  checked={this.state.disableAutoClose}
                  onChange={e => this.setState({ disableAutoClose: e.target.checked })}
                  label="Disable auto-close" />
                <Form.Check custom type="checkbox" id="react-toastify-hideProgressBar"
                  checked={this.state.hideProgressBar}
                  onChange={e => this.setState({ hideProgressBar: e.target.checked })}
                  label="Hide progress bar" />
                <Form.Check custom type="checkbox" id="react-toastify-newestOnTop"
                  checked={this.state.newestOnTop}
                  onChange={e => this.setState({ newestOnTop: e.target.checked })}
                  label="Newest on top" />
                <Form.Check custom type="checkbox" id="react-toastify-closeOnClick"
                  checked={this.state.closeOnClick}
                  onChange={e => this.setState({ closeOnClick: e.target.checked })}
                  label="Close on click" />
                <Form.Check custom type="checkbox" id="react-toastify-pauseOnHover"
                  checked={this.state.pauseOnHover}
                  onChange={e => this.setState({ pauseOnHover: e.target.checked })}
                  label="Pause delay on hover" />
                <Form.Check custom type="checkbox" id="react-toastify-allowDragAndClose"
                  checked={this.state.allowDragAndClose}
                  onChange={e => this.setState({ allowDragAndClose: e.target.checked })}
                  label="Allow to drag and close the toast" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Label className="mb-2">Position</Form.Label>
              <Form.Group className="custom-controls-stacked">
                {['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center'].map(pos => (
                  <Form.Check custom type="radio"
                    key={`react-toastify-pos-${pos}`}
                    name="react-toastify-pos"
                    id={`react-toastify-pos-${pos}`}
                    defaultChecked={pos === this.state.position}
                    value={pos}
                    label={pos}
                    onChange={e => this.setState({ position: e.target.value })} />
                ))}
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" className="mr-2" onClick={() => this.show()}>Show toast</Button>
          <Button variant="default" onClick={() => this.clear()}>Clear toasts</Button>

          <ToastContainer
            autoClose={this.state.disableAutoClose ? false : +this.state.delay}
            newestOnTop={this.state.newestOnTop}
            closeButton={<CloseButton />}
            rtl={isRTL}
           />
        </div>
      </div>
    )
  }
}

export default CuiReactToastify
