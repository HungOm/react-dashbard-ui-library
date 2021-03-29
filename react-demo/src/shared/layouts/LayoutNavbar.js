import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav, FormControl, Dropdown, Badge, ListGroup, Media } from 'react-bootstrap'
import layoutHelpers from './helpers'

class LayoutNavbar extends Component {
  constructor(props) {
    super(props)
    this.isRTL = document.documentElement.getAttribute('dir') === 'rtl'
  }

  toggleSidenav(e) {
    e.preventDefault()
    layoutHelpers.toggleCollapsed()
  }

  render() {
    return (
      <Navbar bg={this.props.navbarBg} expand="lg" className="layout-navbar align-items-lg-center container-p-x">

        {/* Brand demo (see src/demo.css) */}
        <Navbar.Brand as={NavLink} to="/" className="app-brand demo d-lg-none py-0 mr-4">
          <span className="app-brand-logo demo bg-primary">
            <svg viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stopOpacity=".25" offset="0"></stop><stop stopOpacity=".1" offset=".3"></stop><stop stopOpacity="0" offset=".9"></stop></linearGradient><linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlinkHref="#a"></linearGradient><linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlinkHref="#a"></linearGradient></defs><path style={{fill: '#fff'}} transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>
          </span>
          <span className="app-brand-text demo font-weight-normal ml-2">Appwork</span>
        </Navbar.Brand>

        {/* Sidenav toggle (see src/demo.css) */}
        {this.props.sidenavToggle && (
          <Nav className="layout-sidenav-toggle d-lg-none align-items-lg-center mr-auto">
            <Nav.Item as="a" className="nav-link px-0 mr-lg-4" href="#toggle" onClick={this.toggleSidenav}>
              <i className="ion ion-md-menu text-large align-middle"></i>
            </Nav.Item>
          </Nav>
        )}

        <Navbar.Toggle />

        <Navbar.Collapse>
          {/* Divider */}
          <hr className="d-lg-none w-100 my-2" />

          <Nav className="align-items-lg-center">
            {/* Search */}
            <label className="nav-item navbar-text navbar-search-box p-0 active">
              <i className="ion ion-ios-search navbar-icon align-middle"></i>
              <span className="navbar-search-input pl-2">
                <FormControl className="navbar-text mx-2" placeholder="Search..." style={{width: '200px'}} />
              </span>
            </label>
          </Nav>

          <Nav className="align-items-lg-center ml-auto">
            <Dropdown as={Nav.Item} className="demo-navbar-notifications mr-lg-3" alignRight={!this.isRTL}>
              <Dropdown.Toggle as={Nav.Link} className="hide-arrow">
                <i className="ion ion-md-notifications-outline navbar-icon align-middle"></i>
                <Badge variant="primary badge-dot indicator"></Badge>
                <span className="d-lg-none align-middle">&nbsp; Notifications</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className="bg-primary text-center text-white font-weight-bold p-3">
                  4 New Notifications
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item as={Media} action className="d-flex align-items-center">
                    <div className="ui-icon ui-icon-sm flex-shrink-0 ion ion-md-home bg-secondary border-0 text-white"></div>
                    <Media.Body className="line-height-condenced ml-3">
                      <div className="text-body">Login from 192.168.1.1</div>
                      <div className="text-light small mt-1">
                        Aliquam ex eros, imperdiet vulputate hendrerit et.
                      </div>
                      <div className="text-light small mt-1">12h ago</div>
                    </Media.Body>
                  </ListGroup.Item>

                  <ListGroup.Item as={Media} action className="d-flex align-items-center">
                    <div className="ui-icon ui-icon-sm flex-shrink-0 ion ion-md-person-add bg-info border-0 text-white"></div>
                    <Media.Body className="line-height-condenced ml-3">
                      <div className="text-body">You have <strong>4</strong> new followers</div>
                      <div className="text-light small mt-1">
                        Phasellus nunc nisl, posuere cursus pretium nec, dictum vehicula tellus.
                      </div>
                    </Media.Body>
                  </ListGroup.Item>

                  <ListGroup.Item as={Media} action className="d-flex align-items-center">
                    <div className="ui-icon ui-icon-sm flex-shrink-0 ion ion-md-power bg-danger border-0 text-white"></div>
                    <Media.Body className="line-height-condenced ml-3">
                      <div className="text-body">Server restarted</div>
                      <div className="text-light small mt-1">
                        19h ago
                      </div>
                    </Media.Body>
                  </ListGroup.Item>

                  <ListGroup.Item as={Media} action className="d-flex align-items-center">
                    <div className="ui-icon ui-icon-sm flex-shrink-0 ion ion-md-warning bg-warning border-0 text-body"></div>
                    <Media.Body className="line-height-condenced ml-3">
                      <div className="text-body">99% server load</div>
                      <div className="text-light small mt-1">
                        Etiam nec fringilla magna. Donec mi metus.
                      </div>
                      <div className="text-light small mt-1">
                        20h ago
                      </div>
                    </Media.Body>
                  </ListGroup.Item>
                </ListGroup>

                <a href="#link" className="d-block text-center text-light small p-2 my-1" onClick={e => e.preventDefault()}>Show all notifications</a>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown as={Nav.Item} className="demo-navbar-messages mr-lg-3" alignRight={!this.isRTL}>
              <Dropdown.Toggle as={Nav.Link} className="hide-arrow">
                <i className="ion ion-ios-mail navbar-icon align-middle"></i>
                <Badge variant="primary badge-dot indicator"></Badge>
                <span className="d-lg-none align-middle">&nbsp; Messages</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className="bg-primary text-center text-white font-weight-bold p-3">
                  4 New Messages
                </div>
                <ListGroup variant="flush">
                  <ListGroup.Item as={Media} action className="d-flex align-items-center">
                    <img src={`${process.env.PUBLIC_URL}/img/avatars/6-small.png`} className="d-block flex-shrink-0 ui-w-40 rounded-circle" alt="User" />
                    <Media.Body className="line-height-condenced ml-3">
                      <div className="text-body line-height-condenced">Sit meis deleniti eu, pri vidit meliore docendi ut.</div>
                      <div className="text-light small mt-1">
                        Mae Gibson &nbsp;·&nbsp; 58m ago
                      </div>
                    </Media.Body>
                  </ListGroup.Item>

                  <ListGroup.Item as={Media} action className="d-flex align-items-center">
                    <img src={`${process.env.PUBLIC_URL}/img/avatars/4-small.png`} className="d-block flex-shrink-0 ui-w-40 rounded-circle" alt="User" />
                    <Media.Body className="line-height-condenced ml-3">
                      <div className="text-body line-height-condenced">Mea et legere fuisset, ius amet purto luptatum te.</div>
                      <div className="text-light small mt-1">
                        Kenneth Frazier &nbsp;·&nbsp; 1h ago
                      </div>
                    </Media.Body>
                  </ListGroup.Item>

                  <ListGroup.Item as={Media} action className="d-flex align-items-center">
                    <img src={`${process.env.PUBLIC_URL}/img/avatars/5-small.png`} className="d-block flex-shrink-0 ui-w-40 rounded-circle" alt="User" />
                    <Media.Body className="line-height-condenced ml-3">
                      <div className="text-body line-height-condenced">Sit meis deleniti eu, pri vidit meliore docendi ut.</div>
                      <div className="text-light small mt-1">
                        Nelle Maxwell &nbsp;·&nbsp; 2h ago
                      </div>
                    </Media.Body>
                  </ListGroup.Item>

                  <ListGroup.Item as={Media} action className="d-flex align-items-center">
                    <img src={`${process.env.PUBLIC_URL}/img/avatars/11-small.png`} className="d-block flex-shrink-0 ui-w-40 rounded-circle" alt="User" />
                    <Media.Body className="line-height-condenced ml-3">
                      <div className="text-body line-height-condenced">Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.</div>
                      <div className="text-light small mt-1">
                        Belle Ross &nbsp;·&nbsp; 5h ago
                      </div>
                    </Media.Body>
                  </ListGroup.Item>
                </ListGroup>

                <a href="#link" className="d-block text-center text-light small p-2 my-1" onClick={e => e.preventDefault()}>Show all messages</a>
              </Dropdown.Menu>
            </Dropdown>

            {/* Divider */}
            <div className="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>

            <Dropdown as={Nav.Item} className="demo-navbar-user" alignRight={!this.isRTL}>
              <Dropdown.Toggle as={Nav.Link}>
                <span className="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/1.png`} className="d-block ui-w-30 rounded-circle" alt="User" />
                  <span className="px-1 mr-lg-2 ml-2 ml-lg-0">Mike Greene</span>
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item hred="#"><i className="ion ion-ios-person text-lightest"></i> &nbsp; My profile</Dropdown.Item>
                <Dropdown.Item hred="#"><i className="ion ion-ios-mail text-lightest"></i> &nbsp; Messages</Dropdown.Item>
                <Dropdown.Item hred="#"><i className="ion ion-md-settings text-lightest"></i> &nbsp; Account settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item hred="#"><i className="ion ion-ios-log-out text-danger"></i> &nbsp; Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

LayoutNavbar.propTypes = {
  sidenavToggle: PropTypes.bool
}

LayoutNavbar.defaultProps = {
  sidenavToggle: true
}

export default connect(store => ({
  navbarBg: store.theme.navbarBg
}))(LayoutNavbar)
