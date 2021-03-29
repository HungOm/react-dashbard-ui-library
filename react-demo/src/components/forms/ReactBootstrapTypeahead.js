import React, { Component } from 'react'
import { Form, InputGroup, Button, Card } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import '../../vendor/libs/react-bootstrap-typeahead/react-bootstrap-typeahead.scss'

const countryNames = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
  'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan',
  'Bahamas, The', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium',
  'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana',
  'Brazil', 'Brunei ', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia',
  'Cameroon', 'Canada', 'Cabo Verde', 'Central African Republic', 'Chad', 'Chile',
  'China', 'Colombia', 'Comoros', 'Congo, Democratic Republic of the',
  'Congo, Republic of the', 'Costa Rica', 'Cote d\'Ivoire', 'Croatia', 'Cuba',
  'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica',
  'Dominican Republic', 'Timor-Leste', 'Ecuador', 'Egypt', 'El Salvador',
  'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland',
  'France', 'Gabon', 'Gambia, The', 'Georgia', 'Germany', 'Ghana', 'Greece',
  'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See',
  'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran',
  'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan',
  'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kosovo', 'Kuwait',
  'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya',
  'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar',
  'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands',
  'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco',
  'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal',
  'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea',
  'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestinian Territories', 'Panama',
  'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
  'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia',
  'Saint Vincent and the Grenadines', 'Samoa ', 'San Marino', 'Sao Tome and Principe',
  'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore',
  'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
  'South Korea', 'South Sudan', 'Spain ', 'Sri Lanka', 'Sudan', 'Suriname',
  'Swaziland ', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania',
  'Thailand ', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
  'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates',
  'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan',
  'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe '
]
const countries = countryNames.map((countryName, i) => ({
  id: i,
  label: countryName
}))

class ReactBootstrapTypeahead extends Component {
  constructor(props) {
    super(props)
    props.setTitle('React Bootstrap Typeahead - Forms')

    this.state = {
      size: undefined,
      state: undefined,
      alignment: 'justify',
      disabled: false,
      paginate: false,
      isLoading: false
    }
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> React Bootstrap Typeahead
        </h4>

        {isIE10Mode && <div className="alert alert-danger">
          <strong>react-bootstrap-typeahead</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode && <React.Fragment>
          <Card>
            <Card.Body>
              <div className="row">
                <div className="col-md-3 custom-controls-stacked mb-4 mb-md-0">
                  <label className="form-label mb-2">Size</label>
                  <Form.Check custom inline type="radio" name="react-bootstrap-typeahead-size" id="react-bootstrap-typeahead-size-1"
                    checked={this.state.size === 'small'} onChange={() => this.setState({ size: 'small' })}
                    label="Small" />
                  <Form.Check custom inline type="radio" name="react-bootstrap-typeahead-size" id="react-bootstrap-typeahead-size-2"
                    checked={!this.state.size} onChange={() => this.setState({ size: undefined })}
                    label="Default" />
                  <Form.Check custom inline type="radio" name="react-bootstrap-typeahead-size" id="react-bootstrap-typeahead-size-3"
                    checked={this.state.size === 'large'} onChange={() => this.setState({ size: 'large' })}
                    label="Large" />
                </div>
                <div className="col-md-3 custom-controls-stacked mb-4 mb-md-0">
                  <label className="form-label mb-2">Dropdown alignment</label>
                  <Form.Check custom inline type="radio" name="react-bootstrap-typeahead-alignment" id="react-bootstrap-typeahead-alignment-1"
                    checked={this.state.alignment === 'justify'} onChange={() => this.setState({ alignment: 'justify' })}
                    label="Justify (default)" />
                  <Form.Check custom inline type="radio" name="react-bootstrap-typeahead-alignment" id="react-bootstrap-typeahead-alignment-2"
                    checked={this.state.alignment === 'left'} onChange={() => this.setState({ alignment: 'left' })}
                    label="Align left" />
                  <Form.Check custom inline type="radio" name="react-bootstrap-typeahead-alignment" id="react-bootstrap-typeahead-alignment-3"
                    checked={this.state.alignment === 'right'} onChange={() => this.setState({ alignment: 'right' })}
                    label="Align right" />
                </div>
                <div className="col-md-3 custom-controls-stacked mb-4 mb-md-0">
                  <label className="form-label mb-2">Validation state</label>
                  <Form.Check custom inline type="radio" name="react-bootstrap-typeahead-state" id="react-bootstrap-typeahead-state-1"
                    checked={!this.state.state} onChange={() => this.setState({ state: undefined })}
                    label="None" />
                  <Form.Check custom inline type="radio" name="react-bootstrap-typeahead-state" id="react-bootstrap-typeahead-state-2"
                    checked={this.state.state === 'valid'} onChange={() => this.setState({ state: 'valid' })}
                    label="Valid" />
                  <Form.Check custom inline type="radio" name="react-bootstrap-typeahead-state" id="react-bootstrap-typeahead-state-3"
                    checked={this.state.state === 'invalid'} onChange={() => this.setState({ state: 'invalid' })}
                    label="Invalid" />
                </div>
                <div className="col-md-3 custom-controls-stacked">
                  <Form.Check custom inline type="checkbox" name="react-bootstrap-typeahead-paginate" id="react-bootstrap-typeahead-disabled"
                    checked={this.state.disabled} onChange={e => this.setState({ disabled: e.target.checked })}
                    label="Disabled" />
                  <Form.Check custom inline type="checkbox" name="react-bootstrap-typeahead-paginate" id="react-bootstrap-typeahead-paginate"
                    checked={this.state.paginate} onChange={e => this.setState({ paginate: e.target.checked })}
                    label="Paginate results" />
                  <Form.Check custom inline type="checkbox" name="react-bootstrap-typeahead-isLoading" id="react-bootstrap-typeahead-isLoading"
                    checked={this.state.isLoading} onChange={e => this.setState({ isLoading: e.target.checked })}
                    label="Loading state" />
                </div>
              </div>
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="demo-vertical-spacing-sm">
                <Typeahead
                  id="react-bootstrap-typeahead-single"
                  options={countries}
                  placeholder="Choose country..."
                  isValid={this.state.state === 'valid'}
                  isInvalid={this.state.state === 'invalid'}
                  bsSize={this.state.size}
                  align={this.state.alignment}
                  disabled={this.state.disabled}
                  paginate={this.state.paginate}
                  isLoading={this.state.isLoading}
                  clearButton
                />

                <Typeahead
                  id="react-bootstrap-typeahead-multi"
                  options={countries}
                  placeholder="Choose countries"
                  multiple
                  isValid={this.state.state === 'valid'}
                  isInvalid={this.state.state === 'invalid'}
                  bsSize={this.state.size}
                  align={this.state.alignment}
                  disabled={this.state.disabled}
                  paginate={this.state.paginate}
                  isLoading={this.state.isLoading}
                  clearButton
                />
              </div>
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Within input group</div>

              <div className="demo-vertical-spacing-sm">
                {/* Single select */}

                <InputGroup size={this.state.size === 'small' ? 'sm' : (this.state.size === 'large' ? 'lg' : undefined)}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Country</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Typeahead
                    id="react-bootstrap-typeahead-single-ig-1"
                    options={countries}
                    placeholder="Choose country..."
                    isValid={this.state.state === 'valid'}
                    isInvalid={this.state.state === 'invalid'}
                    bsSize={this.state.size}
                    align={this.state.alignment}
                    disabled={this.state.disabled}
                    paginate={this.state.paginate}
                    isLoading={this.state.isLoading}
                    clearButton
                  />
                </InputGroup>

                <InputGroup size={this.state.size === 'small' ? 'sm' : (this.state.size === 'large' ? 'lg' : undefined)}>
                  <Typeahead
                    id="react-bootstrap-typeahead-single-ig-2"
                    options={countries}
                    placeholder="Choose country..."
                    isValid={this.state.state === 'valid'}
                    isInvalid={this.state.state === 'invalid'}
                    bsSize={this.state.size}
                    align={this.state.alignment}
                    disabled={this.state.disabled}
                    paginate={this.state.paginate}
                    isLoading={this.state.isLoading}
                    clearButton
                  />
                  <InputGroup.Append>
                    <Button variant="primary">Submit</Button>
                  </InputGroup.Append>
                </InputGroup>

                <InputGroup size={this.state.size === 'small' ? 'sm' : (this.state.size === 'large' ? 'lg' : undefined)}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Country</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Typeahead
                    id="react-bootstrap-typeahead-single-ig-3"
                    options={countries}
                    placeholder="Choose country..."
                    isValid={this.state.state === 'valid'}
                    isInvalid={this.state.state === 'invalid'}
                    bsSize={this.state.size}
                    align={this.state.alignment}
                    disabled={this.state.disabled}
                    paginate={this.state.paginate}
                    isLoading={this.state.isLoading}
                    clearButton
                  />
                  <InputGroup.Append>
                    <Button variant="primary">Submit</Button>
                  </InputGroup.Append>
                </InputGroup>

                {/* Multiple select */}

                <InputGroup size={this.state.size === 'small' ? 'sm' : (this.state.size === 'large' ? 'lg' : undefined)}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Country</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Typeahead
                    id="react-bootstrap-typeahead-single-ig-1"
                    options={countries}
                    placeholder="Choose countries"
                    multiple
                    isValid={this.state.state === 'valid'}
                    isInvalid={this.state.state === 'invalid'}
                    bsSize={this.state.size}
                    align={this.state.alignment}
                    disabled={this.state.disabled}
                    paginate={this.state.paginate}
                    isLoading={this.state.isLoading}
                    clearButton
                  />
                </InputGroup>

                <InputGroup size={this.state.size === 'small' ? 'sm' : (this.state.size === 'large' ? 'lg' : undefined)}>
                  <Typeahead
                    id="react-bootstrap-typeahead-single-ig-2"
                    options={countries}
                    placeholder="Choose countries"
                    multiple
                    isValid={this.state.state === 'valid'}
                    isInvalid={this.state.state === 'invalid'}
                    bsSize={this.state.size}
                    align={this.state.alignment}
                    disabled={this.state.disabled}
                    paginate={this.state.paginate}
                    isLoading={this.state.isLoading}
                    clearButton
                  />
                  <InputGroup.Append>
                    <Button variant="primary">Submit</Button>
                  </InputGroup.Append>
                </InputGroup>

                <InputGroup size={this.state.size === 'small' ? 'sm' : (this.state.size === 'large' ? 'lg' : undefined)}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Country</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Typeahead
                    id="react-bootstrap-typeahead-single-ig-3"
                    options={countries}
                    placeholder="Choose countries"
                    multiple
                    isValid={this.state.state === 'valid'}
                    isInvalid={this.state.state === 'invalid'}
                    bsSize={this.state.size}
                    align={this.state.alignment}
                    disabled={this.state.disabled}
                    paginate={this.state.paginate}
                    isLoading={this.state.isLoading}
                    clearButton
                  />
                  <InputGroup.Append>
                    <Button variant="primary">Submit</Button>
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </Card.Body>

          </Card>
        </React.Fragment>}
      </div>
    )
  }
}

export default ReactBootstrapTypeahead
