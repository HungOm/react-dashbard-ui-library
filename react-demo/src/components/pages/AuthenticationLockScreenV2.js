import React, { Component } from 'react'
import { Form, Button, InputGroup, Media, Card } from 'react-bootstrap'
import '../../vendor/styles/pages/authentication.scss'

class AuthenticationLockScreenV2 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Lock screen v2 - Pages')

    this.state = {
      user: {
        avatar: '1.png',
        name: 'Mike Greene'
      },
      credentials: {
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
            <Card.Body className="p-sm-5">
              <Media className="align-items-center">
              <img src={`${process.env.PUBLIC_URL}/img/avatars/${this.state.user.avatar}`} alt="" className="d-block ui-w-60 rounded-circle" />
              <Media.Body className="ml-3">
                <div className="text-light small font-weight-semibold line-height-1 mb-1">LOGGED IN AS</div>
                <div className="text-large font-weight-bolder line-height-1">{this.state.user.name}</div>
              </Media.Body>
            </Media>

            <hr className="my-4" />

            {/* Form */}
            <form>
              <p className="text-muted small">Your session is timed out. Please enter your password to proceed.</p>
                <InputGroup>
                  <Form.Control type="password" placeholder="Enter your password" value={this.state.credentials.password} onChange={e => this.onValueChange('password', e)} />
                  <InputGroup.Append>
                    <Button variant="primary icon-btn"><i className="ion ion-md-arrow-forward"></i></Button>
                  </InputGroup.Append>
                </InputGroup>
              </form>
              {/* / Form */}
            </Card.Body>
            <Card.Footer className="px-sm-5 text-center text-muted small">
              Not you? <a href="#d" onClick={this.prevent}>Login as a different user</a>
            </Card.Footer>
          </Card>

        </div>
      </div>
    )
  }
}

export default AuthenticationLockScreenV2
