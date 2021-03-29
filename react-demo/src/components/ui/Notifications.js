import React, { Component } from 'react'
import { Alert, Button, Form, Row, Col, Card } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import '../../vendor/libs/react-toastify/react-toastify.scss'

const CloseButton = ({ closeToast }) => (
  <button className="Toastify__close-button" type="button" aria-label="close"
    onClick={closeToast}>&times;</button>
)

class Notifications extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Notifications - UI elements')

    this.state = {
      // Alerts
      //

      alerts: [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'dark'
      ],
      darkAlerts: [
        'dark-primary',
        'dark-secondary',
        'dark-success',
        'dark-danger',
        'dark-warning',
        'dark-info',
        'dark-dark'
      ],

      // BS4 Toasts
      //

      bs4Toasts: [{
        variant: null,
        avatar: 'img/avatars/1.png',
        title: 'Default',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-primary',
        avatar: 'img/avatars/1.png',
        title: 'Primary',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-secondary',
        avatar: 'img/avatars/1.png',
        title: 'Secondary',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-success',
        avatar: 'img/avatars/1.png',
        title: 'Success',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-warning',
        avatar: 'img/avatars/1.png',
        title: 'Warning',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-info',
        avatar: 'img/avatars/1.png',
        title: 'Info',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-danger',
        avatar: 'img/avatars/1.png',
        title: 'Danger',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-dark',
        avatar: 'img/avatars/1.png',
        title: 'Dark',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }],
      translucentBs4Toasts: [{
        variant: null,
        avatar: 'img/avatars/1.png',
        title: 'Default',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-primary',
        avatar: 'img/avatars/1.png',
        title: 'Primary',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-secondary',
        avatar: 'img/avatars/1.png',
        title: 'Secondary',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-success',
        avatar: 'img/avatars/1.png',
        title: 'Success',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-warning',
        avatar: 'img/avatars/1.png',
        title: 'Warning',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-info',
        avatar: 'img/avatars/1.png',
        title: 'Info',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-danger',
        avatar: 'img/avatars/1.png',
        title: 'Danger',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }, {
        variant: 'bg-dark',
        avatar: 'img/avatars/1.png',
        title: 'Dark',
        time: '11 mins ago',
        message: 'Hello, world! This is a toast message.'
      }],

      // Toastify
      //

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

  dismiss(variant) {
    this.setState({
      alerts: this.state.alerts.filter(_variant => _variant !== variant)
    })
  }

  dismissDark(variant) {
    this.setState({
      darkAlerts: this.state.darkAlerts.filter(_variant => _variant !== variant)
    })
  }

  closeBs4Toast(toast) {
    this.setState({
      bs4Toasts: this.state.bs4Toasts.filter(_toast => _toast !== toast)
    })
  }

  closeTranslucentBs4Toast(toast) {
    this.setState({
      translucentBs4Toasts: this.state.translucentBs4Toasts.filter(_toast => _toast !== toast)
    })
  }

  showToastify() {
    toast(this.state.text, {
      type: this.state.type,
      position: this.state.position,
      hideProgressBar: this.state.hideProgressBar,
      closeOnClick: this.state.closeOnClick,
      pauseOnHover: this.state.pauseOnHover,
      draggable: this.state.allowDragAndClose,
    })
  }

  clearToastify() {
    toast.dismiss()
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Notifications
        </h4>

        <Card className="mb-4">
          <Card.Header as="h6">Alerts</Card.Header>
          <Row noGutters className="row-bordered">
            <Col sm={6} className="demo-vertical-spacing-sm p-4">
              <div className="text-light small font-weight-semibold mb-3">Default</div>

              {this.state.alerts.map(variant =>
                <Alert dismissible variant={variant} key={variant} onClose={() => this.dismiss(variant)}>
                  This is a {variant} alert — check it out!
                </Alert>
              )}
            </Col>

            <Col sm={6} className="demo-vertical-spacing-sm p-4">
              <div className="text-light small font-weight-semibold mb-3">Dark</div>

              {this.state.darkAlerts.map(variant =>
                <Alert dismissible variant={variant} key={variant} onClose={() => this.dismissDark(variant)}>
                  This is a {variant} alert — check it out!
                </Alert>
              )}
            </Col>
          </Row>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Bootstrap 4 toasts</Card.Header>
          <Row noGutters>
            <Col md={6} className="p-4">
              <div className="text-light small font-weight-semibold mb-3">Default</div>

              {this.state.bs4Toasts.map(toast =>
                <div className={'bs4-toast toast show ' + (toast.variant ? toast.variant : '')} key={toast.variant}>
                  <div className="toast-header">
                    <img src={process.env.PUBLIC_URL + '/' + toast.avatar} className="d-block ui-w-20 rounded mr-2" alt="Avatar" />
                    <div className="mr-auto font-weight-bold">{toast.title}</div>
                    <div className="d-block small">{toast.time}</div>
                    <button type="button" className="d-block close mb-1 ml-2" onClick={() => this.closeBs4Toast(toast)}>&times;</button>
                  </div>
                  <div className="toast-body">
                    {toast.message}
                  </div>
                </div>
              )}

            </Col>
            <Col md={6} className="ui-bg-cover ui-bg-overlay-container p-4" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/1.jpg')`}}>
              <div className="ui-bg-overlay bg-dark opacity-50"></div>
              <div className="text-white small font-weight-semibold mb-3">Translucent</div>

              {this.state.translucentBs4Toasts.map(toast =>
                <div className={'bs4-toast toast show ' + (toast.variant ? toast.variant : '')} key={toast.variant}>
                  <div className="toast-header">
                    <img src={process.env.PUBLIC_URL + '/' + toast.avatar} className="d-block ui-w-20 rounded mr-2" alt="Avatar" />
                    <div className="mr-auto font-weight-bold">{toast.title}</div>
                    <div className="d-block small">{toast.time}</div>
                    <button type="button" className="d-block close mb-1 ml-2" onClick={() => this.closeTranslucentBs4Toast(toast)}>&times;</button>
                  </div>
                  <div className="toast-body">
                    {toast.message}
                  </div>
                </div>
              )}

            </Col>
          </Row>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">react-toastify</Card.Header>
          <Card.Body>
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
            <Button variant="primary" className="mr-2" onClick={() => this.showToastify()}>Show toast</Button>
            <Button variant="default" onClick={() => this.clearToastify()}>Clear toasts</Button>

            <ToastContainer
              autoClose={this.state.disableAutoClose ? false : +this.state.delay}
              newestOnTop={this.state.newestOnTop}
              closeButton={<CloseButton />}
              rtl={isRTL}
            />
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default Notifications
