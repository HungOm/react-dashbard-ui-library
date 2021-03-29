import React, { Component } from 'react'

import Clipboard from 'react-clipboard.js'

class CuiReactClipboardjs extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)

    this.state = {
      text: ''
    }
  }

  onChange (e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-clipboard.js</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/nihey/react-clipboard.js" className="ui-block-description">https://github.com/nihey/react-clipboard.js</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example">

          <textarea className="form-control mb-3" value={this.state.text} onChange={this.onChange} rows={6} />

          <Clipboard data-clipboard-text={this.state.text} className="btn btn-primary">
            Copy to clipboard
          </Clipboard>

        </div>
      </div>
    )
  }
}

export default CuiReactClipboardjs
