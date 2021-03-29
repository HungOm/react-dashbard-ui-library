import React, { Component } from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import '../../vendor/styles/pages/authentication.scss'

class AuthenticationLoginAndRegister extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Login + register - Pages')

    this.state = {
      loginCredentials: {
        email: '',
        password: '',
        rememberMe: false
      },
      registerCredentials: {
        name: '',
        email: '',
        password: ''
      }
    }
  }

  onLoginValueChange(field, e) {
    this.setState({
      loginCredentials: {
        ...this.state.loginCredentials,
        [field]: field === 'rememberMe' ? e.target.checked : e.target.value
      }
    })
  }

  onRegisterValueChange(field, e) {
    this.setState({
      registerCredentials: {
        ...this.state.registerCredentials,
        [field]: field === 'rememberMe' ? e.target.checked : e.target.value
      }
    })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="authentication-wrapper authentication-4 px-4">
        <div className="authentication-inner py-5">

          {/* Logo */}
          <div className="d-flex justify-content-center align-items-center mb-5">
            <div className="ui-w-60">
              <div className="w-100 position-relative" style={{ paddingBottom: '54%' }}>
                <svg className="w-100 h-100 position-absolute" viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stopOpacity=".25" offset="0"></stop><stop stopOpacity=".1" offset=".3"></stop><stop stopOpacity="0" offset=".9"></stop></linearGradient><linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlinkHref="#a"></linearGradient><linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlinkHref="#a"></linearGradient></defs><path className="fill-primary" transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>
              </div>
            </div>
          </div>
          {/* / Logo */}

          <Card>
            <Row noGutters className="row-bordered">

              {/* Login */}
              <Col md={6}>
                <h5 className="text-center text-muted font-weight-normal py-4 px-4 px-sm-5 m-0">Login to Your Account</h5>
                <hr className="border-light m-0" />

                <div className="px-4 px-sm-5 pt-4 pb-5 pb-sm-5">

                  {/* Login form */}
                  <form>
                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control value={this.state.loginCredentials.email} onChange={e => this.onLoginValueChange('email', e)} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label className="d-flex justify-content-between align-items-end">
                        <div>Password</div>
                        <a href="#d" onClick={this.prevent} className="d-block small">Forgot password?</a>
                      </Form.Label>
                      <Form.Control type="password" value={this.state.loginCredentials.password} onChange={e => this.onLoginValueChange('password', e)} />
                    </Form.Group>

                    <div className="d-flex justify-content-between align-items-center m-0">
                      <Form.Check type="checkbox" custom checked={this.state.loginCredentials.rememberMe} onChange={e => this.onLoginValueChange('rememberMe', e)} label="Remember me" className="m-0" id="login-remember-me" />
                      <Button variant="primary">Sign In</Button>
                    </div>
                  </form>
                  {/* / Login form */}

                </div>
              </Col>
              {/* / Login */}

              {/* Register */}
              <Col md={6}>
                <h5 className="text-center text-muted font-weight-normal py-4 px-4 px-sm-5 m-0">Create an Account</h5>
                <hr className="border-light m-0" />

                <div className="px-4 px-sm-5 pt-4 pb-5 pb-sm-5">

                  {/* Register form */}
                  <form>
                    <Form.Group>
                      <Form.Label>Your name</Form.Label>
                      <Form.Control value={this.state.registerCredentials.name} onChange={e => this.onRegisterValueChange('name', e)} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Your email</Form.Label>
                      <Form.Control value={this.state.registerCredentials.email} onChange={e => this.onRegisterValueChange('email', e)} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" value={this.state.registerCredentials.password} onChange={e => this.onRegisterValueChange('password', e)} />
                    </Form.Group>
                    <Button variant="primary" block className="mt-4">Sign Up</Button>
                    <div className="text-light small mt-4">
                      By clicking "Sign Up", you agree to our&nbsp;
                      <a href="#d" onClick={this.prevent}>terms of service and privacy policy</a>.
                      We’ll occasionally send you account related emails.
                    </div>
                  </form>
                  {/* / Register form */}

                </div>
              </Col>
              {/* / Register */}

            </Row>
          </Card>

        </div>
      </div>
    )
  }
}

export default AuthenticationLoginAndRegister
