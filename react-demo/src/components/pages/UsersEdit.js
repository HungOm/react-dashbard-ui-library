import React, { Component } from 'react'
import { Button, Form, Tabs, Tab, Card, Media, Table } from 'react-bootstrap'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import '../../vendor/libs/react-select/react-select.scss'
import '../../vendor/styles/pages/users.scss'

const LANGUAGES = [
  { value: 'English', label: 'English' },
  { value: 'German', label: 'German' },
  { value: 'French', label: 'French' }
]

class UsersEdit extends Component {
  constructor(props) {
    super(props)
    props.setTitle('User edit - Pages')

    this.state = {
      userData: {
        avatar: '5-small.png',
        name: 'Nelle Maxwell',
        username: 'nmaxwell',
        email: 'nmaxwell@mail.com',
        company: 'Company Ltd.',
        id: 3425433,
        verified: true,
        role: 1,
        status: 1,

        permissions: [
          { module: 'Users', read: true, write: false, create: false, delete: false },
          { module: 'Articles', read: true, write: true, create: true, delete: false },
          { module: 'Staff', read: false, write: false, create: false, delete: false }
        ],

        info: {
          birthday: 'May 3, 1995',
          country: 'Canada',
          languages: ['English'],
          phone: '+0 (123) 456 7891',
          website: '',
          music: ['Rock', 'Alternative', 'Electro', 'Drum & Bass', 'Dance'],
          movies: ['The Green Mile', 'Pulp Fiction', 'Back to the Future', 'WALL·E', 'Django Unchained', 'The Truman Show', 'Home Alone', 'Seven Pounds'],

          twitter: 'https://twitter.com/user',
          facebook: 'https://www.facebook.com/user',
          google: '',
          linkedin: '',
          instagram: 'https://www.instagram.com/user'
        }
      }
    }
  }

  onValueChange(field, e, valType = String) {
    this.setState({
      userData: {
        ...this.state.userData,
        [field]: field === 'verified' ? e.target.checked : valType(e.target.value)
      }
    })
  }

  onPermissionChange(permission, field, e) {
    permission[field] = e.target.checked
    this.setState({
      userData: {
        ...this.state.userData,
        permissions: [...this.state.userData.permissions]
      }
    })
  }

  onInfoValueChange(field, e, valType = String) {
    this.setState({
      userData: {
        ...this.state.userData,
        info: {
          ...this.state.userData.info,
          [field]: valType(e.target.value)
        }
      }
    })
  }

  getLanguageOptions(langs) {
    return langs.reduce((result, lang) => {
      const found = LANGUAGES.find(l => l.value === lang)
      if (found) result.push(found)
      return result
    }, [])
  }

  getSelectObject(arr) {
    return arr.map(val => ({ value: val, label: val }))
  }

  onInfoSelectChange(field, e) {
    let val
    if (Array.isArray(e)) {
      val = e.map(obj => obj.value)
    } else if (e.target.multiple) {
      val = []
      const options = e.target.options
      for (let i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) val.push(options[i].value)
      }
    } else {
      val = e.target.value.split(',').map(tag => tag.replace(/^\s+|\s+$/g, ''))
    }

    this.setState({
      userData: {
        ...this.state.userData,
        info: {
          ...this.state.userData.info,
          [field]: val
        }
      }
    })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          Edit user <span className="text-muted">#{this.state.userData.id}</span>
        </h4>

        <div className="nav-tabs-top nav-responsive-sm">
          <Tabs defaultActiveKey="account">
            <Tab eventKey="account" title="Account">
              <Card.Body>

                <Media className="align-items-center">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/${this.state.userData.avatar}`} alt="User" className="d-block ui-w-80" />
                  <Media.Body className="ml-3">
                    <Form.Label className="d-block mb-2">Avatar</Form.Label>
                    <Button variant="outline-primary" size="sm">Change</Button>&nbsp;
                    <Button variant="default md-btn-flat" size="sm">Reset</Button>
                  </Media.Body>
                </Media>

              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body className="pb-2">

                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control value={this.state.userData.username} onChange={e => this.onValueChange('username', e)} className="mb-1" />
                  <a href="#d" onClick={this.prevent} className="small">Reset password</a>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={this.state.userData.name} onChange={e => this.onValueChange('name', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={this.state.userData.email} onChange={e => this.onValueChange('email', e)} className="mb-1" />
                  <a href="#d" onClick={this.prevent} className="small">Resend confirmation</a>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Company</Form.Label>
                  <Form.Control value={this.state.userData.company} onChange={e => this.onValueChange('company', e)} />
                </Form.Group>

              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body className="pb-2">

                <Form.Group>
                  <Form.Label>Role</Form.Label>
                  <Form.Control as="select" className="custom-select" value={this.state.userData.role} onChange={e => this.onValueChange('role', e, Number)}>
                    <option value="1">User</option>
                    <option value="2">Author</option>
                    <option value="3">Staff</option>
                    <option value="4">Admin</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Control as="select" className="custom-select" value={this.state.userData.status} onChange={e => this.onValueChange('status', e, Number)}>
                    <option value="1">Active</option>
                    <option value="2">Banned</option>
                    <option value="3">Deleted</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Check type="checkbox" custom className="m-0" id="user-verified"
                    checked={this.state.userData.verified}
                    onChange={e => this.onValueChange('verified', e)}
                    label="Verified" />
                </Form.Group>

              </Card.Body>
              <hr className="border-light m-0" />
              <Table responsive className="card-table m-0">
                <thead>
                  <tr>
                    <th>Module Permission</th>
                    <th>Read</th>
                    <th>Write</th>
                    <th>Create</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.userData.permissions.map((permissions, i) =>
                    <tr key={permissions.module}>
                      <td>{permissions.module}</td>
                      <td>
                        <Form.Check type="checkbox" custom className="px-2 m-0" id={`permission-${i}-read`}
                          checked={permissions.read}
                          onChange={e => this.onPermissionChange(permissions, 'read', e)}
                          label="" />
                      </td>
                      <td>
                        <Form.Check type="checkbox" custom className="px-2 m-0" id={`permission-${i}-write`}
                          checked={permissions.write}
                          onChange={e => this.onPermissionChange(permissions, 'write', e)}
                          label="" />
                      </td>
                      <td>
                        <Form.Check type="checkbox" custom className="px-2 m-0" id={`permission-${i}-create`}
                          checked={permissions.create}
                          onChange={e => this.onPermissionChange(permissions, 'create', e)}
                          label="" />
                      </td>
                      <td>
                        <Form.Check type="checkbox" custom className="px-2 m-0" id={`permission-${i}-delete`}
                          checked={permissions.delete}
                          onChange={e => this.onPermissionChange(permissions, 'delete', e)}
                          label="" />
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>

            </Tab>
            <Tab eventKey="information" title="Information">
              <Card.Body className="pb-2">

                <h6 className="mb-4">Social links</h6>

                <Form.Group>
                  <Form.Label>Twitter</Form.Label>
                  <Form.Control value={this.state.userData.info.twitter} onChange={e => this.onInfoValueChange('twitter', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Facebook</Form.Label>
                  <Form.Control value={this.state.userData.info.facebook} onChange={e => this.onInfoValueChange('facebook', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Google+</Form.Label>
                  <Form.Control value={this.state.userData.info.google} onChange={e => this.onInfoValueChange('google', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>LinkedIn</Form.Label>
                  <Form.Control value={this.state.userData.info.linkedin} onChange={e => this.onInfoValueChange('linkedin', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Instagram</Form.Label>
                  <Form.Control value={this.state.userData.info.instagram} onChange={e => this.onInfoValueChange('instagram', e)} />
                </Form.Group>

              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body className="pb-2">

                <h6 className="mb-4">Personal info</h6>

                <Form.Group>
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control value={this.state.userData.info.birthday} onChange={e => this.onInfoValueChange('birthday', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control as="select" className="custom-select" value={this.state.userData.info.country} onChange={e => this.onInfoValueChange('country', e)}>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Languages</Form.Label>
                  {!isIE10Mode &&
                    <Select className="react-select" classNamePrefix="react-select"
                      isMulti
                      options={LANGUAGES}
                      defaultValue={this.getLanguageOptions(this.state.userData.info.languages)}
                      onChange={val => this.onInfoSelectChange('languages', val)} />
                  }
                  {isIE10Mode &&
                    <select className="custom-select" multiple size="5" value={this.state.userData.info.languages} onChange={e => this.onInfoSelectChange('languages', e)}>
                      {LANGUAGES.map(lang => 
                        <option value={lang.value} key={lang.value}>{lang.label}</option>
                      )}
                    </select>
                  }
                </Form.Group>

              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body className="pb-2">

                <h6 className="mb-4">Contacts</h6>

                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control value={this.state.userData.info.phone} onChange={e => this.onInfoValueChange('phone', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Website</Form.Label>
                  <Form.Control value={this.state.userData.info.website} onChange={e => this.onInfoValueChange('website', e)} />
                </Form.Group>

              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body className="pb-2">

                <h6 className="mb-4">Interests</h6>

                <Form.Group>
                  <Form.Label>Favorite music</Form.Label>
                  {!isIE10Mode &&
                    <CreatableSelect className="react-select" classNamePrefix="react-select"
                      isMulti
                      options={this.getSelectObject(this.state.userData.info.music)}
                      defaultValue={this.getSelectObject(this.state.userData.info.music)}
                      onChange={val => this.onInfoSelectChange('music', val)}
                    />
                  }
                  {isIE10Mode &&
                    <Form.Control value={this.state.userData.info.music.join(',')} onChange={e => this.onInfoSelectChange('music', e)} />
                  }
                </Form.Group>

                <Form.Group>
                  <Form.Label>Favorite movies</Form.Label>
                  {!isIE10Mode &&
                    <CreatableSelect className="react-select" classNamePrefix="react-select"
                      isMulti
                      options={this.getSelectObject(this.state.userData.info.movies)}
                      defaultValue={this.getSelectObject(this.state.userData.info.movies)}
                      onChange={val => this.onInfoSelectChange('movies', val)}
                    />
                  }
                  {isIE10Mode &&
                    <Form.Control value={this.state.userData.info.movies.join(',')} onChange={e => this.onInfoSelectChange('movies', e)} />
                  }
                </Form.Group>

              </Card.Body>
            </Tab>
          </Tabs>
        </div>

        <div className="text-right mt-3">
          <Button variant="primary">Save changes</Button>&nbsp;
          <Button variant="default">Cancel</Button>
        </div>
      </div>
    )
  }
}

export default UsersEdit
