import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import Sidenav from '../vendor/libs/sidenav'

class CuiAppBrand extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sidenavCollapsed: false
    }
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">App brand</h3>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example">
          <div className="ui-bordered p-4 mb-4">
            <div className="app-brand">
              <a href="#d" onClick={this.prevent} className="app-brand-text text-body text-big">Brand</a>
            </div>
          </div>

          <div className="ui-bordered p-4">
            <div className="app-brand">
              <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Brand" className="app-brand-logo ui-w-40" />
              <a href="#d" onClick={this.prevent} className="app-brand-text text-body text-big ml-2">Brand</a>
            </div>
          </div>
        </div>

        <h4 className="ui-block-heading">Within navbar</h4>

        <div className="cui-example">
          <Navbar bg="light" expand="lg">
            {/* Brand */}
            <Navbar.Brand href="#app-brand-1" className="app-brand" onClick={this.prevent}>
              <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Brand" className="app-brand-logo ui-w-40" />
              <span className="app-brand-text ml-2">Brand</span>
            </Navbar.Brand>
            {/* / Brand */}

            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="mr-auto">
                <Nav.Link href="#app-brand-3" onClick={this.prevent}>Home</Nav.Link>
                <Nav.Link href="#app-brand-4" onClick={this.prevent}>Features</Nav.Link>
                <Nav.Link href="#app-brand-5" onClick={this.prevent}>Pricing</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <h4 className="ui-block-heading">Within sidenav</h4>

        <div className="cui-example">
          <div className="mb-4">
            <Button variant="primary" onClick={() => this.setState({
              sidenavCollapsed: !this.state.sidenavCollapsed
            })}>Toggle collapsed</Button>
          </div>

          {/* Simple text */}

          <Sidenav className={`d-inline-flex bg-light align-top mr-4 mb-4 ${this.state.sidenavCollapsed ? 'sidenav-collapsed' : ''}`} style={{height: '400px'}}>
            {/* Brand */}
            <div className="app-brand py-3">
              <a href="#d" onClick={this.prevent} className="app-brand-text sidenav-text text-big">Brand</a>
            </div>
            <Sidenav.Divider className="my-0" />
            {/* / Brand */}

            <div className="sidenav-inner py-3">
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">tem </Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-settings">Item 2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-paper">Item 3</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 4</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball">Item 5</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire">Item 6</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 7</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 8</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 9</Sidenav.Link>
            </div>
          </Sidenav>

          {/* With logo */}

          <Sidenav className={`d-inline-flex bg-light align-top mr-4 mb-4 ${this.state.sidenavCollapsed ? 'sidenav-collapsed' : ''}`} style={{height: '400px'}}>
            {/* Brand */}
            <div className="app-brand py-3">
              <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Brand" className="app-brand-logo ui-w-40" />
              <a href="#d" onClick={this.prevent} className="app-brand-text sidenav-text text-big ml-2">
                Brand<br />
                <span className="text-tiny font-weight-semibold opacity-25">ADMIN AREA</span>
              </a>
            </div>
            <Sidenav.Divider className="my-0" />
            {/* / Brand */}

            <div className="sidenav-inner py-3">
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">tem </Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-settings">Item 2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-paper">Item 3</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 4</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball">Item 5</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire">Item 6</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 7</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 8</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 9</Sidenav.Link>
            </div>
          </Sidenav>

          {/* With layout sidenav toggle */}

          <Sidenav className={`d-inline-flex bg-light align-top mr-4 mb-4 ${this.state.sidenavCollapsed ? 'sidenav-collapsed' : ''}`} style={{height: '400px'}}>
            {/* Brand */}
            <div className="app-brand py-3">
              <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Brand" className="app-brand-logo ui-w-40" />
              <a href="#d" onClick={this.prevent} className="app-brand-text sidenav-text text-big ml-2">Brand</a>
              <a href="#d" onClick={this.prevent} className="layout-sidenav-toggle sidenav-link text-large ml-auto">
                <i className="ion ion-md-menu align-middle"></i>
              </a>
            </div>
            <Sidenav.Divider className="my-0" />
            {/* / Brand */}

            <div className="sidenav-inner py-3">
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">tem </Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-settings">Item 2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-paper">Item 3</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 4</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball">Item 5</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire">Item 6</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 7</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 8</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 9</Sidenav.Link>
            </div>
          </Sidenav>

        </div>
      </div>
    )
  }
}

export default CuiAppBrand
