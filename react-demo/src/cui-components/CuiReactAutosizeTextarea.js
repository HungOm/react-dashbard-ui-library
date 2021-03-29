import React, { Component } from 'react'

import TextareaAutosize from 'react-autosize-textarea'

class CuiReactAutosizeTextarea extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-autosize-textarea</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/buildo/react-autosize-textarea" className="ui-block-description">https://github.com/buildo/react-autosize-textarea</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example">
          <TextareaAutosize rows={5} maxRows={15} className="form-control" />
        </div>
      </div>
    )
  }
}

export default CuiReactAutosizeTextarea
