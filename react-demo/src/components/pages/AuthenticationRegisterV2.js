import React, { Component } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import '../../vendor/styles/pages/authentication.scss'

class AuthenticationRegisterV2 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Register v2 - Pages')

    this.state = {
      credentials: {
        name: '',
        email: '',
        password: ''
      }
    }
  }

  onValueChange(field, e) {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [field]: e.target.value
      }
    })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="authentication-wrapper authentication-2 ui-bg-cover ui-bg-overlay-container px-4" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/1.jpg')` }}>
        <div className="ui-bg-overlay bg-dark opacity-25"></div>

        <div className="authentication-inner py-5">

          <Card>
            <div className="p-4 px-sm-5 pt-sm-5">
              {/* Logo */}
              <div className="d-flex justify-content-center align-items-center pb-2 mb-4">
                <div className="ui-w-60">
                  <div className="w-100 position-relative" style={{ paddingBottom: '54%' }}>
                    <svg className="w-100 h-100 position-absolute" viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stopOpacity=".25" offset="0"></stop><stop stopOpacity=".1" offset=".3"></stop><stop stopOpacity="0" offset=".9"></stop></linearGradient><linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlinkHref="#a"></linearGradient><linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlinkHref="#a"></linearGradient></defs><path className="fill-primary" transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>
                  </div>
                </div>
              </div>
              {/* / Logo */}

              <h5 className="text-center text-muted font-weight-normal mb-4">Create an Account</h5>

              {/* Form */}
              <form>
                <Form.Group>
                  <Form.Label>Your name</Form.Label>
                  <Form.Control value={this.state.credentials.name} onChange={e => this.onValueChange('name', e)} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Your email</Form.Label>
                  <Form.Control value={this.state.credentials.email} onChange={e => this.onValueChange('email', e)} />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={this.state.credentials.password} onChange={e => this.onValueChange('password', e)} />
                </Form.Group>
                <Button variant="primary" block className="mt-4">Sign Up</Button>
                <div className="text-light small mt-4">
                  By clicking "Sign Up", you agree to our&nbsp;
                  <a href="#d" onClick={this.prevent}>terms of service and privacy policy</a>.
                  We’ll occasionally send you account related emails.
                </div>
              </form>
              {/* / Form */}

            </div>
            <Card.Footer className="py-3 px-4 px-sm-5">
              <div className="text-center text-muted">
                Already have an account? <a href="#d" onClick={this.prevent}>Sign In</a>
              </div>
            </Card.Footer>
          </Card>

        </div>
      </div>
    )
  }
}

export default AuthenticationRegisterV2
