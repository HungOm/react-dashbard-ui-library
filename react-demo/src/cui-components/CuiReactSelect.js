import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import '../vendor/libs/react-select/react-select.scss'

const options = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
]

const groupedOptions = [
  {
    label: 'Colours',
    options: options,
  },
  {
    label: 'Flavours',
    options: [
      { value: 'vanilla', label: 'Vanilla', rating: 'safe' },
      { value: 'chocolate', label: 'Chocolate', rating: 'good' },
      { value: 'strawberry', label: 'Strawberry', rating: 'wild' },
      { value: 'salted-caramel', label: 'Salted Caramel', rating: 'crazy' }
    ],
  }
]

class CuiReactSelect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      disabled: false,
      singleValue: options[0],
      multiValue: [
        options[0],
        options[4],
        options[7]
      ],
      groupedValue: groupedOptions[0][3],
    }
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-select</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/JedWatson/react-select" className="ui-block-description">https://github.com/JedWatson/react-select</a>

        <div className="no-ie10" data-name="react-select"></div>

        {!isIE10Mode && <React.Fragment>
          <h4 className="ui-block-heading">Default</h4>

          <div className="cui-example cui-example-vertical-spacing-sm">
            <Select className="react-select" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.singleValue}
              isClearable={true}
              isSearchable={true}
              isDisabled={this.state.disabled} />

            <Select isMulti className="react-select" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.multiValue}
              isDisabled={this.state.disabled} />

            <Button variant="default" onClick={() => this.setState({
              disabled: !this.state.disabled
            })}>Toggle disabled</Button>
          </div>

          <h4 className="ui-block-heading">Grouped</h4>

          <div className="cui-example cui-example-vertical-spacing-sm">
            <Select className="react-select" classNamePrefix="react-select"
              options={groupedOptions}
              defaultValue={this.state.groupedValue} />
          </div>

          <h4 className="ui-block-heading">Creatable</h4>

          <div className="cui-example cui-example-vertical-spacing-sm">
            <CreatableSelect className="react-select" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.singleValue} />

            <CreatableSelect isMulti className="react-select" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.multiValue} />
          </div>

          <h4 className="ui-block-heading">States</h4>

          <div className="cui-example cui-example-vertical-spacing-sm">
            <Select className="react-select is-valid" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.singleValue} />

            <Select isMulti className="react-select is-valid" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.multiValue} />

            <Select className="react-select is-invalid" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.singleValue} />

            <Select isMulti className="react-select is-invalid" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.multiValue} />
          </div>

          <h4 className="ui-block-heading">Colors</h4>

          <div className="cui-example cui-example-vertical-spacing-sm">
            <Select isMulti className="react-select react-select-primary" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.multiValue} />

            <Select isMulti className="react-select react-select-secondary" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.multiValue} />

            <Select isMulti className="react-select react-select-success" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.multiValue} />

            <Select isMulti className="react-select react-select-info" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.multiValue} />

            <Select isMulti className="react-select react-select-warning" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.multiValue} />

            <Select isMulti className="react-select react-select-danger" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.multiValue} />

            <Select isMulti className="react-select react-select-dark" classNamePrefix="react-select"
              options={options}
              defaultValue={this.state.multiValue} />
          </div>
        </React.Fragment>}
      </div>
    )
  }
}

export default CuiReactSelect
