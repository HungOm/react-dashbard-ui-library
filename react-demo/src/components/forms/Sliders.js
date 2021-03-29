import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import Nouislider from 'nouislider-react'
import '../../vendor/libs/nouislider-react/nouislider-react.scss'

class Sliders extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Sliders - Forms')

    this.state = {
      // Bootstrap's range select state
      //

      bsRangeValue: 40,

      // NoUiSlider state
      //

      singleValue: ['80.00'],
      rangeValue: ['4000', '8000'],
      fullValue: ['1450', '2050', '2350', '3000'],

      isDisabled: false,
      lastEvent: { name: '', value: '' },
    }

    // Bootstrap's range select bindings
    //

    this.onRangeChange = this.onRangeChange.bind(this)

    // NoUiSlider settings
    //

    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    // Default
    this.options1 = {
      step: 1,
      connect: [false, false],
      range: {
        min: 0,
        max: 100
      },
      direction: isRTL ? 'rtl' : 'ltr'
    }

    // Vertical
    this.options2 = {
      orientation: 'vertical',
      direction: 'rtl',
      step: 1,
      range: {
        min: 0,
        max: 100
      }
    }

    // Range
    this.options3 = {
      step: 1000,
      connect: true,
      range: {
        min: [2000],
        max: [10000]
      },
      direction: isRTL ? 'rtl' : 'ltr'
    }

    // Full
    this.options4 = {
      connect: true,
      behaviour: 'tap-drag',
      step: 150,
      tooltips: true,
      range: {
        min: 1000,
        max: 3750
      },
      pips: {
        mode: 'steps',
        stepped: true,
        density: 4
      },
      direction: isRTL ? 'rtl' : 'ltr'
    }

    // Vertical
    this.options5 = {
      connect: true,
      behaviour: 'tap-drag',
      step: 150,
      tooltips: true,
      direction: 'rtl',
      orientation: 'vertical',
      range: {
        min: 1000,
        max: 3750
      },
      pips: {
        mode: 'steps',
        stepped: true,
        density: 4
      }
    }

    // Colors
    this.options6 = {
      connect: true,
      behaviour: 'tap-drag',
      step: 1000,
      tooltips: true,
      range: {
        min: [2000],
        max: [10000]
      },
      pips: {
        mode: 'steps',
        stepped: true,
        density: 4
      },
      direction: isRTL ? 'rtl' : 'ltr'
    }
  }

  // Bootstrap's range select methods
  //

  onRangeChange(e) {
    this.setState({
      bsRangeValue: e.target.value
    })
  }

  // NoUiSlider methods
  //

  isValueChanged(oldVal, newVal) {
    oldVal = Array.isArray(oldVal) ? oldVal.map(v => parseFloat(v)) : parseFloat(oldVal)
    newVal = Array.isArray(newVal) ? newVal.map(v => parseFloat(v)) : parseFloat(newVal)
    return String(oldVal) !== String(newVal)
  }

  updateValue(key, value) {
    this.setState(state =>
      // Do nothing if value isn't changed to prevent recursive state update
      this.isValueChanged(state[key], value) ? {
        [key]: value
      } : null
    )
  }

  toggleDisabled() {
    this.setState({
      isDisabled: !this.state.isDisabled
    })
  }

  reset() {
    this.slider.noUiSlider.reset()

    // Force state update
    this.updateValue('singleValue', this.slider.noUiSlider.get())
  }

  logEvent(name, event) {
    this.setState({
      lastEvent: { name, value: event }
    })
  }

  //

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> Sliders
        </h4>

        <Card className="mb-4">
          <Card.Header as="h6">Default Bootstrap 4 slider</Card.Header>
          <Card.Body className="demo-vertical-spacing">
            <input type="range" className="custom-range" value={this.state.bsRangeValue} onChange={this.onRangeChange} />
            <pre>{this.state.bsRangeValue}</pre>

            <input type="range" className="custom-range" value={this.state.bsRangeValue} onChange={this.onRangeChange} disabled />
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">noUiSlider</Card.Header>
          <Card.Body className="demo-vertical-spacing-lg px-4 pt-4 pb-5">
            <Nouislider
              start={this.state.singleValue}
              instanceRef={instance => {
                instance && (this.slider = instance)
              }}
              disabled={this.state.isDisabled}
              {...this.options1}
              onUpdate={(...args) => {
                this.logEvent('update', ...args)
              }}
              onSlide={(...args) => this.logEvent('slide', ...args)}
              onSet={(...args) => {
                this.logEvent('set', ...args)
                this.updateValue('singleValue', args[0])
              }}
              onChange={(...args) => this.logEvent('change', ...args)}
              onStart={(...args) => this.logEvent('start', ...args)}
              onEnd={(...args) => this.logEvent('end', ...args)} />

            <div style={{marginTop: '2rem !important'}}>
              <pre><strong>Value: </strong>{ this.state.singleValue }</pre>
              <pre><strong>Last event: </strong>{ this.state.lastEvent.name }<br /><strong>Value: </strong>{ this.state.lastEvent.value }</pre>

              <Button variant="default" onClick={() => this.toggleDisabled()}>Toggle disabled</Button>&nbsp;
              <Button variant="default" onClick={() => this.reset()}>reset()</Button>
            </div>

            {/* Vertical */}

            <Nouislider
              start={this.state.singleValue}
              disabled={this.state.isDisabled}
              {...this.options2}
              onSet={val => this.updateValue('singleValue', val)}
              style={{height:'200px',margin:'0 auto 30px'}} />

            {/* Range */}

            <Nouislider
              start={this.state.rangeValue}
              onSet={val => this.updateValue('rangeValue', val)}
              {...this.options3} />

            {/* Full example */}

            <Nouislider
              start={this.state.fullValue}
              {...this.options4}
              onSet={val => this.updateValue('fullValue', val)} />

            <Nouislider
              start={this.state.fullValue}
              {...this.options5}
              onSet={val => this.updateValue('fullValue', val)}
              style={{height:'400px',margin:'0 auto 30px'}} />

            {/* Colors */}
            <Nouislider className="noUi-primary"
              start={this.state.rangeValue}
              {...this.options6}
              onSet={val => this.updateValue('rangeValue', val)} />

            <Nouislider className="noUi-secondary"
              start={this.state.rangeValue}
              {...this.options6}
              onSet={val => this.updateValue('rangeValue', val)} />

            <Nouislider className="noUi-success"
              start={this.state.rangeValue}
              {...this.options6}
              onSet={val => this.updateValue('rangeValue', val)} />

            <Nouislider className="noUi-info"
              start={this.state.rangeValue}
              {...this.options6}
              onSet={val => this.updateValue('rangeValue', val)} />

            <Nouislider className="noUi-warning"
              start={this.state.rangeValue}
              {...this.options6}
              onSet={val => this.updateValue('rangeValue', val)} />

            <Nouislider className="noUi-danger"
              start={this.state.rangeValue}
              {...this.options6}
              onSet={val => this.updateValue('rangeValue', val)} />

            <Nouislider className="noUi-dark"
              start={this.state.rangeValue}
              {...this.options6}
              onSet={val => this.updateValue('rangeValue', val)} />

            <br /><br />
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default Sliders
