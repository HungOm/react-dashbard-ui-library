import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import IdleTimer from 'react-idle-timer'

class ReactIdleTimer extends Component {
  constructor(props) {
    super(props)
    props.setTitle('React Idle Timer - Miscellaneous')

    this.idleTimer = null
    this.onAction = this.onAction.bind(this)
    this.onActive = this.onActive.bind(this)
    this.onIdle = this.onIdle.bind(this)

    this.state = {
      isActive: true,
      lastActiveTime: new Date().toString(),
      remainingTime: 0,
      log: ''
    }

    this.intervalId = setInterval(() => {
      if (!this.idleTimer || (!this.state.isActive && !this.state.remainingTime)) return
      this.setState({
        remainingTime: this.idleTimer.getRemainingTime()
      })
    }, 200)
  }

  getLastActiveTime() {
    return new Date(this.idleTimer.getLastActiveTime()).toString()
  }

  onAction(e) {
    if (this.unmounted) return
    this.setState(state => ({
      lastActiveTime: this.getLastActiveTime(),
      log: `Action: ${e.type}\n` + state.log
    }))
  }

  onActive(e) {
    if (this.unmounted) return
    this.setState(state => ({
      isActive: true,
      lastActiveTime: this.getLastActiveTime(),
      log: `User is active\n` + state.log
    }))
  }

  onIdle(e) {
    if (this.unmounted) return
    this.setState(state => ({
      isActive: false,
      lastActiveTime: this.getLastActiveTime(),
      log: `Idle\n` + state.log
    }))
  }

  componentWillUnmount() {
    this.unmounted = true
    clearInterval(this.intervalId)
    this.intervalId = null
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Miscellaneous /</span> React Idle Timer
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-4" />

        <Card>
          <Card.Body>
            <div className="mb-1">
              <label className="form-label">Remaining time:</label> {this.state.remainingTime}
            </div>
            <div className="mb-1">
              <label className = "form-label" > Last active: </label> {this.state.lastActiveTime}
            </div>
            <textarea readOnly
              value={this.state.log}
              className={'form-control ' + (this.state.isActive ? 'is-valid' : 'is-invalid')}
              style={{ height: 300 }}
            />

            {!this.componentUnmounted && <IdleTimer
              ref={ref => { this.idleTimer = ref }}
              element={document}
              onActive={this.onActive}
              onIdle={this.onIdle}
              onAction={this.onAction}
              debounce={250}
              timeout={5000} />}
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default ReactIdleTimer
