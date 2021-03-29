import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../vendor/libs/spinkit/spinkit.scss'

class CuiSpinkit extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">SpinKit</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/tobiasahlin/SpinKit" className="ui-block-description">https://github.com/tobiasahlin/SpinKit</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <Row>
            <Col>
              <div className="sk-rotating-plane sk-primary"></div>
            </Col>
            <Col>
              <div className="sk-double-bounce sk-primary">
                <div className="sk-child sk-double-bounce1"></div>
                <div className="sk-child sk-double-bounce2"></div>
              </div>
            </Col>
            <Col>
              <div className="sk-wave sk-primary">
                <div className="sk-rect sk-rect1"></div>
                <div className="sk-rect sk-rect2"></div>
                <div className="sk-rect sk-rect3"></div>
                <div className="sk-rect sk-rect4"></div>
                <div className="sk-rect sk-rect5"></div>
              </div>
            </Col>
            <Col>
              <div className="sk-wandering-cubes sk-primary">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="sk-spinner sk-spinner-pulse sk-primary"></div>
            </Col>
            <Col>
              <div className="sk-chasing-dots sk-primary">
                <div className="sk-child sk-dot1"></div>
                <div className="sk-child sk-dot2"></div>
              </div>
            </Col>
            <Col>
              <div className="sk-three-bounce sk-primary">
                <div className="sk-child sk-bounce1"></div>
                <div className="sk-child sk-bounce2"></div>
                <div className="sk-child sk-bounce3"></div>
              </div>
            </Col>
            <Col>
              <div className="sk-circle sk-primary">
                <div className="sk-circle1 sk-child"></div>
                <div className="sk-circle2 sk-child"></div>
                <div className="sk-circle3 sk-child"></div>
                <div className="sk-circle4 sk-child"></div>
                <div className="sk-circle5 sk-child"></div>
                <div className="sk-circle6 sk-child"></div>
                <div className="sk-circle7 sk-child"></div>
                <div className="sk-circle8 sk-child"></div>
                <div className="sk-circle9 sk-child"></div>
                <div className="sk-circle10 sk-child"></div>
                <div className="sk-circle11 sk-child"></div>
                <div className="sk-circle12 sk-child"></div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="sk-cube-grid sk-primary">
                <div className="sk-cube sk-cube1"></div>
                <div className="sk-cube sk-cube2"></div>
                <div className="sk-cube sk-cube3"></div>
                <div className="sk-cube sk-cube4"></div>
                <div className="sk-cube sk-cube5"></div>
                <div className="sk-cube sk-cube6"></div>
                <div className="sk-cube sk-cube7"></div>
                <div className="sk-cube sk-cube8"></div>
                <div className="sk-cube sk-cube9"></div>
              </div>
            </Col>
            <Col>
              <div className="sk-fading-circle sk-primary">
                <div className="sk-circle1 sk-circle"></div>
                <div className="sk-circle2 sk-circle"></div>
                <div className="sk-circle3 sk-circle"></div>
                <div className="sk-circle4 sk-circle"></div>
                <div className="sk-circle5 sk-circle"></div>
                <div className="sk-circle6 sk-circle"></div>
                <div className="sk-circle7 sk-circle"></div>
                <div className="sk-circle8 sk-circle"></div>
                <div className="sk-circle9 sk-circle"></div>
                <div className="sk-circle10 sk-circle"></div>
                <div className="sk-circle11 sk-circle"></div>
                <div className="sk-circle12 sk-circle"></div>
              </div>
            </Col>
            <Col>
              <div className="sk-folding-cube sk-primary">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default CuiSpinkit
