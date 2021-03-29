import React, { Component } from 'react'

class CuiCustomSelect extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Custom select</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <select className="custom-select">
            <option defaultValue>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
          <select className="custom-select" multiple>
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
        </div>

        <h4 className="ui-block-heading">Sizes</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <select className="custom-select custom-select-lg">
            <option defaultValue>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
          <select className="custom-select custom-select-lg" multiple>
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>

          <select className="custom-select custom-select-sm">
            <option defaultValue>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
          <select className="custom-select custom-select-sm" multiple>
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
        </div>

        <h4 className="ui-block-heading">Inverted</h4>

        <div className="cui-example">
          <div className="bg-dark p-4">
            <select className="custom-select custom-select-inverted">
              <option defaultValue>Open this select menu</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
        </div>

        <h4 className="ui-block-heading">Disabled</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <select className="custom-select" disabled="">
            <option defaultValue>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>

          <div className="bg-dark p-4">
            <select className="custom-select custom-select-inverted" disabled="">
              <option defaultValue>Open this select menu</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
        </div>

        <h4 className="ui-block-heading">Validations states</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <div className="form-group">
            <select className="custom-select is-valid">
              <option defaultValue>Open this select menu</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>

          <div className="form-group">
            <select className="custom-select is-invalid">
              <option defaultValue>Open this select menu</option>
              <option>One</option>
              <option>Two</option>
              <option>Three</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default CuiCustomSelect
