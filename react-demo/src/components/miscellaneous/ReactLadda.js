import React, { Component } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import LaddaButton, {
  CONTRACT,
  CONTRACT_OVERLAY,
  EXPAND_LEFT,
  EXPAND_RIGHT,
  EXPAND_UP,
  EXPAND_DOWN,
  SLIDE_LEFT,
  SLIDE_RIGHT,
  SLIDE_UP,
  SLIDE_DOWN,
  ZOOM_IN,
  ZOOM_OUT
} from 'react-ladda'
import '../../vendor/libs/react-ladda/react-ladda.scss'

class ReactLadda extends Component {
  constructor(props) {
    super(props)
    props.setTitle('React Ladda - Miscellaneous')

    this.state = {
      loading: [false, false, false, false, false, false, false, false, false, false, false, false],
      progress: [false, false]
    }
  }

  startLoading(i) {
    if (this.state.loading[i]) return

    this.updateLoadingValue(i, true)
    setTimeout(() => {
      this.updateLoadingValue(i, false)
    }, 2000)
  }

  startProgress(i) {
    if (this.state.progress[i] !== false) return

    this.updateProgressValue(i, 0)
    let interval = setInterval(() => {
      this.updateProgressValue(i, Math.min(this.state.progress[i] + Math.random() * 0.1, 1))

      if (this.state.progress[i] === 1) {
        clearInterval(interval)
        this.updateProgressValue(i, false)
      }
    }, 200)
  }

  updateLoadingValue(index, value) {
    this.setState(({ loading }) => {
      loading[index] = value
      return { loading }
    })
  }

  updateProgressValue(index, value) {
    this.setState(({ progress }) => {
      progress[index] = value
      return { progress }
    })
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Miscellaneous /</span> React Ladda
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-4" />

        <Card>
          <Card.Body className="demo-vertical-spacing">
            <Row className="button-demo">
              <Col>
                <h6 className="text-muted small font-weight-bold">expand-left</h6>
                <LaddaButton
                  loading={this.state.loading[0]}
                  onClick={() => this.startLoading(0)}
                  data-style={EXPAND_LEFT}
                  className="btn btn-primary"
                >Submit</LaddaButton>
              </Col>

              <Col>
                <h6 className="text-muted small font-weight-bold">expand-right</h6>
                <LaddaButton
                  loading={this.state.loading[1]}
                  onClick={() => this.startLoading(1)}
                  data-style={EXPAND_RIGHT}
                  className="btn btn-primary"
                >Submit</LaddaButton>
              </Col>

              <Col>
                <h6 className="text-muted small font-weight-bold">expand-up</h6>
                <LaddaButton
                  loading={this.state.loading[2]}
                  onClick={() => this.startLoading(2)}
                  data-style={EXPAND_UP}
                  className="btn btn-primary"
                >Submit</LaddaButton>
              </Col>

              <Col>
                <h6 className="text-muted small font-weight-bold">expand-down</h6>
                <LaddaButton
                  loading={this.state.loading[3]}
                  onClick={() => this.startLoading(3)}
                  data-style={EXPAND_DOWN}
                  className="btn btn-primary"
                >Submit</LaddaButton>
              </Col>
            </Row>

            <Row className="button-demo">
              <Col>
                  <h6 className="text-muted small font-weight-bold">contract</h6>
                <LaddaButton
                  loading={this.state.loading[4]}
                  onClick={() => this.startLoading(4)}
                  data-style={CONTRACT}
                  className="btn btn-primary"
                >Submit</LaddaButton>
              </Col>

              <Col>
                <h6 className="text-muted small font-weight-bold">contract-overlay</h6>
                <LaddaButton
                  loading={this.state.loading[5]}
                  onClick={() => this.startLoading(5)}
                  data-style={CONTRACT_OVERLAY}
                  className="btn btn-primary"
                  style={{zIndex: 10}}
                >Submit</LaddaButton>
              </Col>

              <Col>
                  <h6 className="text-muted small font-weight-bold">zoom-in</h6>
                <LaddaButton
                  loading={this.state.loading[6]}
                  onClick={() => this.startLoading(6)}
                  data-style={ZOOM_IN}
                  className="btn btn-primary"
                >Submit</LaddaButton>
              </Col>

              <Col>
                  <h6 className="text-muted small font-weight-bold">zoom-out</h6>
                <LaddaButton
                  loading={this.state.loading[7]}
                  onClick={() => this.startLoading(7)}
                  data-style={ZOOM_OUT}
                  className="btn btn-primary"
                >Submit</LaddaButton>
              </Col>
            </Row>

            <Row className="button-demo">
              <Col>
                <h6 className="text-muted small font-weight-bold">slide-left</h6>
                <LaddaButton
                  loading={this.state.loading[8]}
                  onClick={() => this.startLoading(8)}
                  data-style={SLIDE_LEFT}
                  className="btn btn-primary"
                >Submit</LaddaButton>
              </Col>

              <Col>
                <h6 className="text-muted small font-weight-bold">slide-right</h6>
                <LaddaButton
                  loading={this.state.loading[9]}
                  onClick={() => this.startLoading(9)}
                  data-style={SLIDE_RIGHT}
                  className="btn btn-primary"
                >Submit</LaddaButton>
              </Col>

              <Col>
                <h6 className="text-muted small font-weight-bold">slide-up</h6>
                <LaddaButton
                  loading={this.state.loading[10]}
                  onClick={() => this.startLoading(10)}
                  data-style={SLIDE_UP}
                  className="btn btn-primary"
                >Submit</LaddaButton>
              </Col>

              <Col>
                <h6 className="text-muted small font-weight-bold">slide-down</h6>
                <LaddaButton
                  loading={this.state.loading[11]}
                  onClick={() => this.startLoading(11)}
                  data-style={SLIDE_DOWN}
                  className="btn btn-primary"
                >Submit</LaddaButton>
              </Col>
            </Row>

          </Card.Body>
          <hr className="m-0" />
          <Card.Body className="demo-vertical-spacing">
            <h6>Built-in progress bar</h6>

            <Row className="progress-demo">
              <Col>
                <h6 className="text-muted small font-weight-bold">expand-right</h6>
                <LaddaButton
                  loading={!!this.state.progress[0]}
                  progress={this.state.progress[0] || 0}
                  onClick={() => this.startProgress(0)}
                  data-style={EXPAND_RIGHT}
                  className="btn btn-danger"
                >Submit</LaddaButton>
              </Col>

              <Col>
                <h6 className="text-muted small font-weight-bold">contract</h6>
                <LaddaButton
                  loading={!!this.state.progress[1]}
                  progress={this.state.progress[1] || 0}
                  onClick={() => this.startProgress(1)}
                  data-style={CONTRACT}
                  className="btn btn-danger"
                >Submit</LaddaButton>
              </Col>
            </Row>

          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default ReactLadda
