import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import '../../vendor/libs/react-select/react-select.scss'

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
];

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

class SelectsAndTags extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Selects and tags - Forms')

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
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> Selects and tags
        </h4>

        {isIE10Mode && <div className="alert alert-danger">
          <strong>react-select</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode && <Card className="mb-4">
          <Card.Header as="h6">react-select</Card.Header>
          <Card.Body className="demo-vertical-spacing-sm">
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
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Grouped</div>            

            <Select className="react-select" classNamePrefix="react-select"
              options={groupedOptions}
              defaultValue={this.state.groupedValue} />
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Creatable</div>            

            <div className="demo-vertical-spacing-sm">
              <CreatableSelect className="react-select" classNamePrefix="react-select"
                options={options}
                defaultValue={this.state.singleValue} />

              <CreatableSelect isMulti className="react-select" classNamePrefix="react-select"
                options={options}
                defaultValue={this.state.multiValue} />
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">States</div>            

            <div className="demo-vertical-spacing-sm">
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
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Colors</div>            

            <div className="demo-vertical-spacing-sm">
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
          </Card.Body>
        </Card>}

      </div>
    )
  }
}

export default SelectsAndTags
