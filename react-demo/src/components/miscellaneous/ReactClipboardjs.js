import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Clipboard from 'react-clipboard.js'

class ReactClipboardjs extends Component {
  constructor(props) {
    super(props)
    props.setTitle('React Clipboardjs - Miscellaneous')

    this.onChange = this.onChange.bind(this)

    this.state = {
      text: ''
    }
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Miscellaneous /</span> React Clipboardjs
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-4" />

        <Card>
          <Card.Body>
            <textarea className="form-control mb-3" value={this.state.text} onChange={this.onChange} rows={6} />
            <br />

            <Clipboard data-clipboard-text={this.state.text} className="btn btn-primary">
              Copy to clipboard
            </Clipboard>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default ReactClipboardjs
