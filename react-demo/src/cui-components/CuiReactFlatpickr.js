import React, { Component } from 'react'

import Flatpickr from 'react-flatpickr'
import '../vendor/libs/react-flatpickr/react-flatpickr.scss'

class CuiReactFlatpickr extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: null,
      time: null,
      datetime: null,
      full: null,
      range: null,
      inline: null
    }
  }
  render() {
    const isIEMode = typeof document['documentMode'] === 'number'
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    const dateConfig = {
      altInput: true,
      animate: !isRTL
    }
    const timeConfig = {
      enableTime: true,
      noCalendar: true,
      altInput: true,
      animate: !isRTL
    }
    const datetimeConfig = {
      enableTime: true,
      altInput: true,
      animate: !isRTL
    }
    const fullConfig = {
      weekNumbers: true,
      enableTime: true,
      mode: 'multiple',
      minDate: 'today',
      altInput: true,
      animate: !isRTL
    }
    const rangeConfig = {
      mode: 'range',
      altInput: true,
      animate: !isRTL
    }
    const inlineConfig = {
      inline: true,
      altInput: true,
      allowInput: false,
      animate: !isRTL
    }

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-flatpickr</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/haoxins/react-flatpickr" className="ui-block-description">https://github.com/haoxins/react-flatpickr</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="alert alert-warning rtl-only mt-5">
          Flatpickr does not support animations in RTL mode.
        </div>

        <div className="cui-example cui-example-vertical-spacing">
          <Flatpickr
            placeholder={!isIEMode ? 'Date picker' : null}
            value={this.state.date}
            options={dateConfig}
            onChange={date => { this.setState({date}) }} />
          <Flatpickr
            placeholder={!isIEMode ? 'Time picker' : null}
            value={this.state.time}
            options={timeConfig}
            onChange={time => { this.setState({time}) }} />
          <Flatpickr
            placeholder={!isIEMode ? 'Datetime picker' : null}
            value={this.state.datetime}
            options={datetimeConfig}
            onChange={datetime => { this.setState({datetime}) }} />
          <Flatpickr
            placeholder={!isIEMode ? 'Features' : null}
            value={this.state.full}
            options={fullConfig}
            onChange={full => { this.setState({full}) }} />
          <Flatpickr
            placeholder={!isIEMode ? 'Range picker' : null}
            value={this.state.range}
            options={rangeConfig}
            onChange={range => { this.setState({range}) }} />
          <div>
            <Flatpickr
              placeholder={!isIEMode ? 'Inline datepicker' : null}
              value={this.state.inline}
              options={inlineConfig}
              onChange={inline => { this.setState({inline}) }} />
          </div>
        </div>
      </div>
    )
  }
}

export default CuiReactFlatpickr
