import React, { Component } from 'react'
import Sidenav from '../../vendor/libs/sidenav'
import { Button } from 'react-bootstrap'

class SidenavComponent extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Sidenav - UI elements')

    this.state = {
      sidenav1Collapsed: false,
      sidenav2Collapsed: false,
      sidenav3Collapsed: false,
      sidenav4Collapsed: false,
      sidenav5Collapsed: false,
      sidenav6Collapsed: false
    }
  }

  toggle(stateName) {
    this.setState({
      [stateName + 'Collapsed']: !this.state[stateName + 'Collapsed']
    })
  }

  collapsed(stateName) {
    return this.state[stateName + 'Collapsed'] ? ' sidenav-collapsed' : ''
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Sidenav
        </h4>

        <h6 className="pb-1 mt-5 mb-4">Vertical</h6>

        <Button variant="primary" className="mb-4" onClick={() => this.toggle('sidenav1')}>Toggle collapsed</Button>

        <Sidenav className={'bg-dark' + this.collapsed('sidenav1')} style={{ height: '450px' }}>
          <div className="sidenav-inner py-3">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2" role="menu">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire">Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <h6 className="pb-1 mt-5 mb-4">Horizontal</h6>

        <Sidenav orientation="horizontal" className="bg-dark" style={{ position: 'relative', zIndex: 100 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire">Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <h6 className="pb-1 mt-5 mb-4">Horizontal (show dropdown on hover)</h6>

        <Sidenav orientation="horizontal" showDropdownOnHover={true} className="bg-dark" style={{ position: 'relative', zIndex: 99 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/libs" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire">Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <h6 className="pb-1 mt-5 mb-4">Horizontal (within container)</h6>

        <Sidenav orientation="horizontal" className="bg-dark" style={{ position: 'relative', zIndex: 98 }}>
          <div className="container d-flex">
            <div className="sidenav-inner">
              <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
              <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
                <Sidenav.Menu linkText="Item 2.2">
                  <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                  <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                  <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
                </Sidenav.Menu>
                <Sidenav.Menu linkText="Item 2.3">
                  <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                  <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                  <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
                </Sidenav.Menu>
              </Sidenav.Menu>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire">Item 5</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
            </div>
          </div>
        </Sidenav>

        <h6 className="pb-1 mt-5 mb-4">No animation</h6>

        <Button variant="primary" className="mb-4" onClick={() => this.toggle('sidenav2')}>Toggle collapsed</Button>

        <Sidenav animate={false} className={'bg-dark mb-4' + this.collapsed('sidenav2')} style={{ height: '450px' }}>
          <div className="sidenav-inner py-3">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire">Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav orientation="horizontal" animate={false} className="bg-dark" style={{ position: 'relative', zIndex: 97 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/libs" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire">Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <h6 className="pb-1 mt-5 mb-4">No accordion</h6>

        <Button variant="primary" className="mb-4" onClick={() => this.toggle('sidenav3')}>Toggle collapsed</Button>

        <Sidenav accordion={false} className={'bg-dark mb-4' + this.collapsed('sidenav3')} style={{ height: '450px' }}>
          <div className="sidenav-inner py-3">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire">Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav orientation="horizontal" accordion={false} className="bg-dark" style={{ position: 'relative', zIndex: 96 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/libs" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire">Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <h6 className="pb-1 mt-5 mb-4">Elements</h6>

        <div className="mb-4">
          <Button variant="primary" onClick={() => this.toggle('sidenav4')}>Toggle collapsed</Button>
        </div>

        <Sidenav className={'d-inline-flex bg-dark mr-4 mb-4' + this.collapsed('sidenav4')} style={{ height: '450px' }}>
          <div className="sidenav-inner">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center ie-mh-1">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link" active={true}>Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Block className="my-1">
              <div className="small">
                Milestone <div className="float-right">55%</div>
              </div>
              <div className="progress mt-1 mb-3" style={{ height: '4px' }}>
                <div className="progress-bar bg-success" style={{ width: '55%' }}></div>
              </div>

              <div className="small">
                Release <div className="float-right">80%</div>
              </div>
              <div className="progress mb-1" style={{ height: '4px' }}>
                <div className="progress-bar bg-danger" style={{ width: '80%' }}></div>
              </div>
            </Sidenav.Block>
          </div>
        </Sidenav>

        <Sidenav className={'d-inline-flex bg-dark mr-4 mb-4' + this.collapsed('sidenav4')} style={{ height: '450px' }}>
          <Sidenav.Block className="my-1">
            <div className="media align-items-center">
              <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
              <div className="media-body pl-3">
                <h5 className="sidenav-text mb-1">Mike Greene</h5>
                <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
              </div>
            </div>
          </Sidenav.Block>
          <Sidenav.Divider className="mt-0"></Sidenav.Divider>

          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link" active={true}>Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>

          <Sidenav.Divider className="mb-0"></Sidenav.Divider>
          <Sidenav.Block className="my-1">
            <div className="small">
              Milestone <div className="float-right">55%</div>
            </div>
            <div className="progress mt-1 mb-3" style={{ height: '4px' }}>
              <div className="progress-bar bg-success" style={{ width: '55%' }}></div>
            </div>

            <div className="small">
              Release <div className="float-right">80%</div>
            </div>
            <div className="progress mb-1" style={{ height: '4px' }}>
              <div className="progress-bar bg-danger" style={{ width: '80%' }}></div>
            </div>
          </Sidenav.Block>
        </Sidenav>

        <h6 className="pb-1 mt-5 mb-4">Colors (vertical)</h6>

        <div className="mb-4">
          <Button variant="primary" onClick={() => this.toggle('sidenav5')}>Toggle collapsed</Button>
        </div>

        <Sidenav className={'d-inline-flex bg-sidenav-theme mr-4 mb-4' + this.collapsed('sidenav5')} style={{ height: '450px' }}>
          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav className={'d-inline-flex bg-primary mr-4 mb-4' + this.collapsed('sidenav5')} style={{ height: '450px' }}>
          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav className={'d-inline-flex bg-secondary mr-4 mb-4' + this.collapsed('sidenav5')} style={{ height: '450px' }}>
          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav className={'d-inline-flex bg-success mr-4 mb-4' + this.collapsed('sidenav5')} style={{ height: '450px' }}>
          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav className={'d-inline-flex bg-info mr-4 mb-4' + this.collapsed('sidenav5')} style={{ height: '450px' }}>
          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav className={'d-inline-flex bg-warning mr-4 mb-4' + this.collapsed('sidenav5')} style={{ height: '450px' }}>
          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav className={'d-inline-flex bg-danger mr-4 mb-4' + this.collapsed('sidenav5')} style={{ height: '450px' }}>
          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav className={'d-inline-flex bg-white mr-4 mb-4' + this.collapsed('sidenav5')} style={{ height: '450px' }}>
          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav className={'d-inline-flex bg-lighter mr-4 mb-4' + this.collapsed('sidenav5')} style={{ height: '450px' }}>
          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav className={'d-inline-flex bg-light mr-4 mb-4' + this.collapsed('sidenav5')} style={{ height: '450px' }}>
          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <h6 className="pb-1 mt-5 mb-4">Colors (horizontal)</h6>

        <Sidenav orientation="horizontal" className="bg-sidenav-theme mb-4" style={{ position: 'relative', zIndex: 95 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav orientation="horizontal" className="bg-primary mb-4" style={{ position: 'relative', zIndex: 94 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav orientation="horizontal" className="bg-secondary mb-4" style={{ position: 'relative', zIndex: 93 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav orientation="horizontal" className="bg-success mb-4" style={{ position: 'relative', zIndex: 92 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav orientation="horizontal" className="bg-info mb-4" style={{ position: 'relative', zIndex: 91 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav orientation="horizontal" className="bg-warning mb-4" style={{ position: 'relative', zIndex: 90 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav orientation="horizontal" className="bg-danger mb-4" style={{ position: 'relative', zIndex: 89 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav orientation="horizontal" className="bg-white mb-4" style={{ position: 'relative', zIndex: 88 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav orientation="horizontal" className="bg-lighter mb-4" style={{ position: 'relative', zIndex: 87 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav orientation="horizontal" className="bg-light mb-4" style={{ position: 'relative', zIndex: 86 }}>
          <div className="sidenav-inner">
            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <h6 className="pb-1 mt-5 mb-4">With background</h6>

        <div className="mb-4">
          <Button variant="primary" onClick={() => this.toggle('sidenav6')}>Toggle collapsed</Button>
        </div>

        <Sidenav className={'sidenav-dark d-inline-flex ui-bg-cover ui-bg-overlay-container mr-4 mb-4' + this.collapsed('sidenav6')} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg/1.jpg)`, height: '450px' }}>
          <div className="ui-bg-overlay bg-dark opacity-25"></div>

          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav className={'sidenav-dark d-inline-flex ui-bg-cover ui-bg-overlay-container mr-4 mb-4' + this.collapsed('sidenav6')} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg/13.jpg)`, height: '450px' }}>
          <div className="ui-bg-overlay bg-warning opacity-25"></div>

          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

        <Sidenav className={'sidenav-light d-inline-flex ui-bg-cover ui-bg-overlay-container mr-4 mb-4' + this.collapsed('sidenav6')} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg/16.jpg)`, height: '450px' }}>
          <div className="ui-bg-overlay bg-white opacity-75"></div>

          <div className="sidenav-inner mb-2">
            <Sidenav.Block className="my-1">
              <div className="media align-items-center">
                <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-50 rounded-circle" alt="User avatar" />
                <div className="media-body pl-3">
                  <h5 className="sidenav-text mb-1">Mike Greene</h5>
                  <div className="small"><a href="#d" onClick={this.prevent} className="sidenav-link"><strong className="sidenav-text">5</strong> new messages</a></div>
                </div>
              </div>
            </Sidenav.Block>
            <Sidenav.Divider className="mt-0"></Sidenav.Divider>

            <Sidenav.RouterLink to="/complete-ui/plugins" icon="ion ion-md-link">Router link</Sidenav.RouterLink>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-notifications-outline">Some Long Long Long Long Long Item</Sidenav.Link>
            <Sidenav.Menu icon="ion ion-ios-settings" disabled={true} linkText="Item 1">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.1</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.2</Sidenav.Link>
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 1.3</Sidenav.Link>
            </Sidenav.Menu>
            <Sidenav.Menu icon="ion ion-md-paper" linkText="Item 2">
              <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.1</Sidenav.Link>
              <Sidenav.Menu disabled={true} linkText="Item 2.2">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.2.3</Sidenav.Link>
              </Sidenav.Menu>
              <Sidenav.Menu open={true} linkText="Item 2.3">
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.1</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.2</Sidenav.Link>
                <Sidenav.Link href="#d" onClick={this.prevent}>Item 2.3.3</Sidenav.Link>
              </Sidenav.Menu>
            </Sidenav.Menu>

            <Sidenav.Divider className="mb-0"></Sidenav.Divider>
            <Sidenav.Header className="small font-weight-semibold">SECTION HEADER</Sidenav.Header>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-flask">Item 3</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-basketball" active={true}>Item 4</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-bonfire" disabled={true}>Item 5</Sidenav.Link>

            <Sidenav.Divider></Sidenav.Divider>

            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cafe">Item 6</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-ios-cloud-outline">Item 7</Sidenav.Link>
            <Sidenav.Link href="#d" onClick={this.prevent} icon="ion ion-md-code">Item 8</Sidenav.Link>
          </div>
        </Sidenav>

      </div>
    )
  }
}

export default SidenavComponent
