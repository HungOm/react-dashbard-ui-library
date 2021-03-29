import React, { Component } from 'react'

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
import '../vendor/libs/react-ladda/react-ladda.scss'

class CuiReactLadda extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: [false, false, false, false, false, false, false, false, false, false, false, false],
      progress: [false, false]
    }
  }

  startLoading (i) {
    if (this.state.loading[i]) return

    this.updateLoadingValue(i, true)
    setTimeout(() => {
      this.updateLoadingValue(i, false)
    }, 2000)
  }

  startProgress (i) {
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

  updateLoadingValue (index, value) {
    this.setState(({ loading }) => {
      loading[index] = value
      return { loading }
    })
  }

  updateProgressValue (index, value) {
    this.setState(({ progress }) => {
      progress[index] = value
      return { progress }
    })
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-ladda</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/jsdir/react-ladda" className="ui-block-description">https://github.com/jsdir/react-ladda</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <div className="row button-demo">
            <div className="col">
              <h6>expand-left</h6>
              <LaddaButton
                loading={this.state.loading[0]}
                onClick={() => this.startLoading(0)}
                data-style={EXPAND_LEFT}
                className="btn btn-primary"
              >Submit</LaddaButton>
            </div>

            <div className="col">
              <h6>expand-right</h6>
              <LaddaButton
                loading={this.state.loading[1]}
                onClick={() => this.startLoading(1)}
                data-style={EXPAND_RIGHT}
                className="btn btn-primary"
              >Submit</LaddaButton>
            </div>

            <div className="col">
              <h6>expand-up</h6>
              <LaddaButton
                loading={this.state.loading[2]}
                onClick={() => this.startLoading(2)}
                data-style={EXPAND_UP}
                className="btn btn-primary"
              >Submit</LaddaButton>
            </div>

            <div className="col">
              <h6>expand-down</h6>
              <LaddaButton
                loading={this.state.loading[3]}
                onClick={() => this.startLoading(3)}
                data-style={EXPAND_DOWN}
                className="btn btn-primary"
              >Submit</LaddaButton>
            </div>
          </div>

          <div className="row button-demo">
            <div className="col">
              <h6>contract</h6>
              <LaddaButton
                loading={this.state.loading[4]}
                onClick={() => this.startLoading(4)}
                data-style={CONTRACT}
                className="btn btn-primary"
              >Submit</LaddaButton>
            </div>

            <div className="col">
              <h6>contract-overlay</h6>
              <LaddaButton
                loading={this.state.loading[5]}
                onClick={() => this.startLoading(5)}
                data-style={CONTRACT_OVERLAY}
                className="btn btn-primary"
                style={{zIndex: 10}}
              >Submit</LaddaButton>
            </div>

            <div className="col">
              <h6>zoom-in</h6>
              <LaddaButton
                loading={this.state.loading[6]}
                onClick={() => this.startLoading(6)}
                data-style={ZOOM_IN}
                className="btn btn-primary"
              >Submit</LaddaButton>
            </div>

            <div className="col">
              <h6>zoom-out</h6>
              <LaddaButton
                loading={this.state.loading[7]}
                onClick={() => this.startLoading(7)}
                data-style={ZOOM_OUT}
                className="btn btn-primary"
              >Submit</LaddaButton>
            </div>
          </div>

          <div className="row button-demo">
            <div className="col">
              <h6>slide-left</h6>
              <LaddaButton
                loading={this.state.loading[8]}
                onClick={() => this.startLoading(8)}
                data-style={SLIDE_LEFT}
                className="btn btn-primary"
              >Submit</LaddaButton>
            </div>

            <div className="col">
              <h6>slide-right</h6>
              <LaddaButton
                loading={this.state.loading[9]}
                onClick={() => this.startLoading(9)}
                data-style={SLIDE_RIGHT}
                className="btn btn-primary"
              >Submit</LaddaButton>
            </div>

            <div className="col">
              <h6>slide-up</h6>
              <LaddaButton
                loading={this.state.loading[10]}
                onClick={() => this.startLoading(10)}
                data-style={SLIDE_UP}
                className="btn btn-primary"
              >Submit</LaddaButton>
            </div>

            <div className="col">
              <h6>slide-down</h6>
              <LaddaButton
                loading={this.state.loading[11]}
                onClick={() => this.startLoading(11)}
                data-style={SLIDE_DOWN}
                className="btn btn-primary"
              >Submit</LaddaButton>
            </div>
          </div>

          <div className="row">
            <h5 className="col mt-5 mb-4">Built-in progress bar</h5>
          </div>

          <div className="row progress-demo">
            <div className="col">
              <h6>expand-right</h6>
              <LaddaButton
                loading={!!this.state.progress[0]}
                progress={this.state.progress[0] || 0}
                onClick={() => this.startProgress(0)}
                data-style={EXPAND_RIGHT}
                className="btn btn-danger"
              >Submit</LaddaButton>
            </div>

            <div className="col">
              <h6>contract</h6>
              <LaddaButton
                loading={!!this.state.progress[1]}
                progress={this.state.progress[1] || 0}
                onClick={() => this.startProgress(1)}
                data-style={CONTRACT}
                className="btn btn-danger"
              >Submit</LaddaButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CuiReactLadda
