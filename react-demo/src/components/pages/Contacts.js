import React, { Component } from 'react'
import { Button, ButtonGroup, Form, Card, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap'
import '../../vendor/styles/pages/contacts.scss'

class Contacts extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Contacts - Pages')

    this.state = {
      viewMode: 'col',

      contactsData: [{
        avatar: '9.png',
        name: 'Amanda Warner',
        username: 'awarner',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '5.png',
        name: 'Nelle Maxwell',
        username: 'nmaxwell',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '4.png',
        name: 'Kenneth Frazier',
        username: 'kfrazier',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '6.png',
        name: 'Mae Gibson',
        username: 'mgibson',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '12.png',
        name: 'Arthur Duncan',
        username: 'aduncan',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '11.png',
        name: 'Belle Ross',
        username: 'bross',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '3.png',
        name: 'Allie Rodriguez',
        username: 'arodriguez',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }, {
        avatar: '7.png',
        name: 'Alice Hampton',
        username: 'ahampton',
        company: 'Company Inc.',
        phone: '+0 (123) 456 7891'
      }]
    }
  }

  setViewMode(viewMode) {
    this.setState({ viewMode })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          Contacts
        </h4>

        <div className="d-flex flex-wrap justify-content-between ui-bordered px-3 pt-3 mb-4">
          <div>
            {/* View toggle */}
            <ButtonGroup className="mb-3">
              <Button variant="default icon-btn md-btn-flat" onClick={() => this.setViewMode('col')} active={this.state.viewMode === 'col'}><i className="ion ion-md-apps"></i></Button>
              <Button variant="default icon-btn md-btn-flat" onClick={() => this.setViewMode('row')} active={this.state.viewMode === 'row'}><i className="ion ion-md-menu"></i></Button>
            </ButtonGroup>
            {/* / View toggle */}

            <Button variant="outline-primary" className="mb-3 ml-3"><span className="ion ion-md-add"></span>&nbsp; Add contact</Button>
          </div>
          <Form.Control className="mb-3" placeholder="Search..." style={{ maxWidth: '200px' }} />
        </div>

        {/* Set `.contacts-col-view` or '.contacts-row-view' to control view mode */}
        <Row className={`contacts-${this.state.viewMode}-view`}>
          {this.state.contactsData.map(contact =>
            <Col xs={12} key={contact.username} className="contacts-col">

              <Card className="mb-4">
                <Card.Body>
                  <div className="contacts-dropdown">
                    <DropdownButton title={<i className="ion ion-ios-more"></i>} variant="default icon-btn borderless rounded-pill md-btn-flat hide-arrow" size="sm" alignRight={!isRTL}>
                      <Dropdown.Item href="#d" onClick={this.prevent}>Edit</Dropdown.Item>
                      <Dropdown.Item href="#d" onClick={this.prevent}>Remove</Dropdown.Item>
                    </DropdownButton>
                  </div>

                  <div className="contact-content">
                    <img src={`${process.env.PUBLIC_URL}/img/avatars/${contact.avatar}`} className="contact-content-img rounded-circle" alt="Contact" />
                    <div className="contact-content-about">
                      <h5 className="contact-content-name mb-1"><a href="#d" onClick={this.prevent} className="text-body">{contact.name}</a></h5>
                      <div className="contact-content-user text-muted small mb-2">@{contact.username}</div>
                      <div className="small">
                        <div v-if="contact.company">{contact.company}</div>
                        <div v-if="contact.phone">{contact.phone}</div>
                      </div>
                      <hr className="border-light" />
                      <div>
                        <a href="#d" onClick={this.prevent} className="text-secondary"><span className="ion ion-md-mail"></span></a> &nbsp;&nbsp;
                        <a href="#d" onClick={this.prevent} className="text-secondary"><span className="ion ion-ios-chatbubbles"></span></a> &nbsp;&nbsp;
                        <span className="text-lighter">|</span> &nbsp;&nbsp;
                        <a href="#d" onClick={this.prevent} className="text-twitter"><span className="ion ion-logo-twitter"></span></a> &nbsp;&nbsp;
                        <a href="#d" onClick={this.prevent} className="text-facebook"><span className="ion ion-logo-facebook"></span></a> &nbsp;&nbsp;
                        <a href="#d" onClick={this.prevent} className="text-instagram"><span className="ion ion-logo-instagram"></span></a>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>

            </Col>

          )}
        </Row>{/* / .row */}

      </div>
    )
  }
}

export default Contacts
