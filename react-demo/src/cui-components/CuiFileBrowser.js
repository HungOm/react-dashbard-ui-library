import React, { Component } from 'react'

class CuiFileBrowser extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">File browser</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example">
          <label className="custom-file">
            <input type="file" className="custom-file-input" />
            <span className="custom-file-label"></span>
          </label>
        </div>

        <h4 className="ui-block-heading">Disabled</h4>

        <div className="cui-example">
          <label className="custom-file">
            <input type="file" className="custom-file-input" disabled />
            <span className="custom-file-label"></span>
          </label>
        </div>

        <h4 className="ui-block-heading">Validations states</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <label className="custom-file">
            <input type="file" className="custom-file-input is-valid" />
            <span className="custom-file-label"></span>
          </label>

          <label className="custom-file">
            <input type="file" className="custom-file-input is-invalid" />
            <span className="custom-file-label"></span>
          </label>
        </div>
      </div>
    )
  }
}

export default CuiFileBrowser
