import React, { Component } from 'react'
import { Button, Form, Nav, Card, ListGroup, Row, Col, Alert } from 'react-bootstrap'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import '../../vendor/libs/react-select/react-select.scss'
import '../../vendor/styles/pages/account.scss'

const LANGUAGES = [
  { value: 'English', label: 'English' },
  { value: 'German', label: 'German' },
  { value: 'French', label: 'French' }
]

class AccountSettings extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Account settings - Pages')

    this.state = {
      curTab: 'general',

      accountData: {
        avatar: '5-small.png',
        name: 'Nelle Maxwell',
        username: 'nmaxwell',
        email: 'nmaxwell@mail.com',
        company: 'Company Ltd.',
        verified: false,

        info: {
          bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.',
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
        },

        notifications: {
          comments: true,
          forum: true,
          followings: false,
          news: true,
          products: false,
          blog: true
        }
      }
    }
  }

  onValueChange(field, e) {
    this.setState({
      accountData: {
        ...this.state.accountData,
        [field]: e.target.value
      }
    })
  }

  onInfoValueChange(field, e, String) {
    this.setState({
      accountData: {
        ...this.state.accountData,
        info: {
          ...this.state.accountData.info,
          [field]: e.target.value
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
      accountData: {
        ...this.state.accountData,
        info: {
          ...this.state.accountData.info,
          [field]: val
        }
      }
    })
  }

  onNotificationsChange(field, e) {
    this.setState({
      accountData: {
        ...this.state.accountData,
        notifications: {
          ...this.state.accountData.notifications,
          [field]: e.target.checked
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
          Account settings
        </h4>

        <Card>
          <Row noGutters className="row-bordered row-border-light">

            <Col md={3} className="pt-0">
              <Nav className="account-settings-links list-group list-group-flush" onSelect={curTab => this.setState({ curTab })} activeKey={this.state.curTab}>
                <Nav.Link as={ListGroup.Item} eventKey="general" className="list-group-item-action cursor-pointer">General</Nav.Link>
                <Nav.Link as={ListGroup.Item} eventKey="password" className="list-group-item-action cursor-pointer">Change password</Nav.Link>
                <Nav.Link as={ListGroup.Item} eventKey="info" className="list-group-item-action cursor-pointer">Info</Nav.Link>
                <Nav.Link as={ListGroup.Item} eventKey="links" className="list-group-item-action cursor-pointer">Social links</Nav.Link>
                <Nav.Link as={ListGroup.Item} eventKey="connections" className="list-group-item-action cursor-pointer">Connections</Nav.Link>
                <Nav.Link as={ListGroup.Item} eventKey="notifications" className="list-group-item-action cursor-pointer">Notifications</Nav.Link>
              </Nav>
            </Col>

            {this.state.curTab === 'general' && <Col md={9}>
              <Card.Body className="media align-items-center">

                <img src={`${process.env.PUBLIC_URL}/img/avatars/${this.state.accountData.avatar}`} alt="Profile" className="d-block ui-w-80" />
                <div className="media-body ml-4">
                  <Button variant="outline-primary">Upload new photo</Button> &nbsp;
                  <Button variant="default md-btn-flat">Reset</Button>
                  <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                </div>

              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body>

                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control value={this.state.accountData.username} onChange={e => this.onValueChange('username', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={this.state.accountData.name} onChange={e => this.onValueChange('name', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control value={this.state.accountData.email} onChange={e => this.onValueChange('email', e)} />
                  {!this.state.accountData.verified &&
                    <Alert variant="warning" className="mt-3 mb-0">
                      Your email is not confirmed. Please check your inbox.<br />
                      <a href="#d" onClick={this.prevent}>Resend confirmation</a>
                    </Alert>
                  }
                </Form.Group>

                <Form.Group>
                  <Form.Label>Company</Form.Label>
                  <Form.Control value={this.state.accountData.company} onChange={e => this.onValueChange('company', e)} />
                </Form.Group>

              </Card.Body>
            </Col>}

            {this.state.curTab === 'password' && <Col md={9}>
              <Card.Body className="pb-2">

                <Form.Group>
                  <Form.Label>Current password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>New password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Repeat new password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

              </Card.Body>
            </Col>}

            {this.state.curTab === 'info' && <Col md={9}>
              <Card.Body className="pb-2">

                <Form.Group>
                  <Form.Label>Bio</Form.Label>
                  <Form.Control as="textarea" rows="5" value={this.state.accountData.info.bio} onChange={e => this.onInfoValueChange('bio', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control value={this.state.accountData.info.birthday} onChange={e => this.onInfoValueChange('birthday', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Country</Form.Label>
                  <Form.Control as="select" className="custom-select" value={this.state.accountData.info.country} onChange={e => this.onInfoValueChange('country', e)}>
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
                      defaultValue={this.getLanguageOptions(this.state.accountData.info.languages)}
                      onChange={val => this.onInfoSelectChange('languages', val)} />
                  }
                  {isIE10Mode &&
                    <select className="custom-select" multiple size="5" value={this.state.accountData.info.languages} onChange={e => this.onInfoSelectChange('languages', e)}>
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
                  <Form.Control value={this.state.accountData.info.phone} onChange={e => this.onInfoValueChange('phone', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Website</Form.Label>
                  <Form.Control value={this.state.accountData.info.website} onChange={e => this.onInfoValueChange('website', e)} />
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
                      options={this.getSelectObject(this.state.accountData.info.music)}
                      defaultValue={this.getSelectObject(this.state.accountData.info.music)}
                      onChange={val => this.onInfoSelectChange('music', val)}
                    />
                  }
                  {isIE10Mode &&
                    <Form.Control value={this.state.accountData.info.music.join(',')} onChange={e => this.onInfoSelectChange('music', e)} />
                  }
                </Form.Group>

                <Form.Group>
                  <Form.Label>Favorite movies</Form.Label>
                  {!isIE10Mode &&
                    <CreatableSelect className="react-select" classNamePrefix="react-select"
                      isMulti
                      options={this.getSelectObject(this.state.accountData.info.movies)}
                      defaultValue={this.getSelectObject(this.state.accountData.info.movies)}
                      onChange={val => this.onInfoSelectChange('movies', val)}
                    />
                  }
                  {isIE10Mode &&
                    <Form.Control value={this.state.accountData.info.movies.join(',')} onChange={e => this.onInfoSelectChange('movies', e)} />
                  }
                </Form.Group>

              </Card.Body>
            </Col>}

            {this.state.curTab === 'links' && <Col md={9}>
              <Card.Body className="pb-2">

                <Form.Group>
                  <Form.Label>Twitter</Form.Label>
                  <Form.Control value={this.state.accountData.info.twitter} onChange={e => this.onInfoValueChange('twitter', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Facebook</Form.Label>
                  <Form.Control value={this.state.accountData.info.facebook} onChange={e => this.onInfoValueChange('facebook', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Google+</Form.Label>
                  <Form.Control value={this.state.accountData.info.google} onChange={e => this.onInfoValueChange('google', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>LinkedIn</Form.Label>
                  <Form.Control value={this.state.accountData.info.linkedin} onChange={e => this.onInfoValueChange('linkedin', e)} />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Instagram</Form.Label>
                  <Form.Control value={this.state.accountData.info.instagram} onChange={e => this.onInfoValueChange('instagram', e)} />
                </Form.Group>

              </Card.Body>
            </Col>}

            {this.state.curTab === 'connections' && <Col md={9}>
              <Card.Body>

                <Button variant="twitter">Connect to <strong>Twitter</strong></Button>

              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body>

                <h5 className="mb-2">
                  <a href="#d" onClick={this.prevent} className="float-right text-muted text-tiny"><i className="ion ion-md-close"></i> Remove</a>
                  <i className="ion ion-logo-google text-google"></i>&nbsp;
                  You are connected to Google:
                </h5>
                nmaxwell@mail.com

              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body>

                <Button variant="facebook">Connect to <strong>Facebook</strong></Button>

              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body>

                <Button variant="instagram">Connect to <strong>Instagram</strong></Button>

              </Card.Body>
            </Col>}

            {this.state.curTab === 'notifications' && <Col md={9}>
              <Card.Body className="pb-2">

                <h6 className="mb-4">Activity</h6>

                <Form.Group>
                  <label className="switcher">
                    <input type="checkbox" className="switcher-input" checked={this.state.accountData.notifications.comments} onChange={e => this.onNotificationsChange('comments', e)} />
                    <span className="switcher-indicator">
                      <span className="switcher-yes"></span>
                      <span className="switcher-no"></span>
                    </span>
                    <span className="switcher-label">Email me when someone comments on my article</span>
                  </label>
                </Form.Group>

                <Form.Group>
                  <label className="switcher">
                    <input type="checkbox" className="switcher-input" checked={this.state.accountData.notifications.forum} onChange={e => this.onNotificationsChange('forum', e)} />
                    <span className="switcher-indicator">
                      <span className="switcher-yes"></span>
                      <span className="switcher-no"></span>
                    </span>
                    <span className="switcher-label">Email me when someone answers on my forum thread</span>
                  </label>
                </Form.Group>

                <Form.Group>
                  <label className="switcher">
                    <input type="checkbox" className="switcher-input" checked={this.state.accountData.notifications.followings} onChange={e => this.onNotificationsChange('followings', e)} />
                    <span className="switcher-indicator">
                      <span className="switcher-yes"></span>
                      <span className="switcher-no"></span>
                    </span>
                    <span className="switcher-label">Email me when someone follows me</span>
                  </label>
                </Form.Group>

              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body className="pb-2">

                <h6 className="mb-4">Application</h6>

                <Form.Group>
                  <label className="switcher">
                    <input type="checkbox" className="switcher-input" checked={this.state.accountData.notifications.news} onChange={e => this.onNotificationsChange('news', e)} />
                    <span className="switcher-indicator">
                      <span className="switcher-yes"></span>
                      <span className="switcher-no"></span>
                    </span>
                    <span className="switcher-label">News and announcements</span>
                  </label>
                </Form.Group>

                <Form.Group>
                  <label className="switcher">
                    <input type="checkbox" className="switcher-input" checked={this.state.accountData.notifications.products} onChange={e => this.onNotificationsChange('products', e)} />
                    <span className="switcher-indicator">
                      <span className="switcher-yes"></span>
                      <span className="switcher-no"></span>
                    </span>
                    <span className="switcher-label">Weekly product updates</span>
                  </label>
                </Form.Group>

                <Form.Group>
                  <label className="switcher">
                    <input type="checkbox" className="switcher-input" checked={this.state.accountData.notifications.blog} onChange={e => this.onNotificationsChange('blog', e)} />
                    <span className="switcher-indicator">
                      <span className="switcher-yes"></span>
                      <span className="switcher-no"></span>
                    </span>
                    <span className="switcher-label">Weekly blog digest</span>
                  </label>
                </Form.Group>

              </Card.Body>
            </Col>}

          </Row>
        </Card>

        <div className="text-right mt-3">
          <Button variant="primary">Save changes</Button>&nbsp;
          <Button variant="default">Cancel</Button>
        </div>

      </div>
    )
  }
}

export default AccountSettings
