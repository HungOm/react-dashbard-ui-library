import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import '../../vendor/styles/pages/authentication.scss'

class AuthenticationEmailConfirm extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Email confirm - Pages')
  }

  render() {
    return (
      <div className="authentication-wrapper authentication-2 px-4">
        <div className="authentication-inner py-5">

          <Card>
            <div className="p-4 p-sm-5">

              <div className="display-1 lnr lnr-checkmark-circle text-center text-success mb-4"></div>

              <p className="text-center text-big mb-4">Your email address has been successfully confirmed.</p>

              <Button variant="primary" block>Proceed to your account</Button>

            </div>
          </Card>

        </div>
      </div>
    )
  }
}

export default AuthenticationEmailConfirm
