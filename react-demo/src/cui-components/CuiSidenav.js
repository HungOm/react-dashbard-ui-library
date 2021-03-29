import React, { Component } from 'react'
import Sidenav from '../vendor/libs/sidenav'
import { Button } from 'react-bootstrap'

class CuiSidenav extends Component {
  constructor(props) {
    super(props)

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
      <div className="ui-block">
        <h3 className="ui-block-heading">Side Nav</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example">
          <Button variant="primary" className="mb-4" onClick={() => this.toggle('sidenav1')}>Toggle collapsed</Button>

          <Sidenav className={'bg-dark' + this.collapsed('sidenav1')} style={{height: '450px'}}>
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
        </div>

        <h4 className="ui-block-heading">Horizontal</h4>

        <div className="cui-example">
          <Sidenav orientation="horizontal" className="bg-dark" style={{position: 'relative', zIndex: 100}}>
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
        </div>

        <h4 className="ui-block-heading">Horizontal (show dropdown on hover)</h4>

        <div className="cui-example">
          <Sidenav orientation="horizontal" showDropdownOnHover={true} className="bg-dark" style={{position: 'relative', zIndex: 99}}>
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
        </div>

        <h4 className="ui-block-heading">Horizontal within container</h4>

        <div className="cui-example">
          <Sidenav orientation="horizontal" className="bg-dark" style={{position: 'relative', zIndex: 98}}>
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
        </div>

        <h4 className="ui-block-heading">No animation</h4>

        <div className="cui-example">
          <Button variant="primary" className="mb-4" onClick={() => this.toggle('sidenav2')}>Toggle collapsed</Button>

          <Sidenav animate={false} className={'bg-dark mb-4' + this.collapsed('sidenav2')} style={{height: '450px'}}>
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

          <Sidenav orientation="horizontal" animate={false} className="bg-dark" style={{position: 'relative', zIndex: 97}}>
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
        </div>

        <h4 className="ui-block-heading">No accordion</h4>

        <div className="cui-example">
          <Button variant="primary" className="mb-4" onClick={() => this.toggle('sidenav3')}>Toggle collapsed</Button>

          <Sidenav accordion={false} className={'bg-dark mb-4' + this.collapsed('sidenav3')} style={{height: '450px'}}>
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

          <Sidenav orientation="horizontal" accordion={false} className="bg-dark" style={{position: 'relative', zIndex: 96}}>
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
        </div>

        <h4 className="ui-block-heading">Elements</h4>

        <div className="cui-example">
          <div className="mb-4">
            <Button variant="primary" onClick={() => this.toggle('sidenav4')}>Toggle collapsed</Button>
          </div>

          <Sidenav className={'d-inline-flex bg-dark mr-4 mb-4' + this.collapsed('sidenav4')} style={{height: '450px'}}>
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
                <div className="progress mt-1 mb-3" style={{height: '4px'}}>
                  <div className="progress-bar bg-success" style={{width: '55%'}}></div>
                </div>

                <div className="small">
                  Release <div className="float-right">80%</div>
                </div>
                <div className="progress mb-1" style={{height: '4px'}}>
                  <div className="progress-bar bg-danger" style={{width: '80%'}}></div>
                </div>
              </Sidenav.Block>
            </div>
          </Sidenav>

          <Sidenav className={'d-inline-flex bg-dark mr-4 mb-4' + this.collapsed('sidenav4')} style={{height: '450px'}}>
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
              <div className="progress mt-1 mb-3" style={{height: '4px'}}>
                <div className="progress-bar bg-success" style={{width: '55%'}}></div>
              </div>

              <div className="small">
                Release <div className="float-right">80%</div>
              </div>
              <div className="progress mb-1" style={{height: '4px'}}>
                <div className="progress-bar bg-danger" style={{width: '80%'}}></div>
              </div>
            </Sidenav.Block>
          </Sidenav>
        </div>

        <h4 className="ui-block-heading">Colors (vertical)</h4>

        <div className="cui-example">
          <div className="mb-4">
            <Button variant="primary" onClick={() => this.toggle('sidenav5')}>Toggle collapsed</Button>
          </div>

          <Sidenav className={'d-inline-flex bg-sidenav-theme mr-4 mb-4' + this.collapsed('sidenav5')} style={{height: '450px'}}>
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

          <Sidenav className={'d-inline-flex bg-primary mr-4 mb-4' + this.collapsed('sidenav5')} style={{height: '450px'}}>
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

          <Sidenav className={'d-inline-flex bg-secondary mr-4 mb-4' + this.collapsed('sidenav5')} style={{height: '450px'}}>
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

          <Sidenav className={'d-inline-flex bg-success mr-4 mb-4' + this.collapsed('sidenav5')} style={{height: '450px'}}>
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

          <Sidenav className={'d-inline-flex bg-info mr-4 mb-4' + this.collapsed('sidenav5')} style={{height: '450px'}}>
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

          <Sidenav className={'d-inline-flex bg-warning mr-4 mb-4' + this.collapsed('sidenav5')} style={{height: '450px'}}>
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

          <Sidenav className={'d-inline-flex bg-danger mr-4 mb-4' + this.collapsed('sidenav5')} style={{height: '450px'}}>
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

          <Sidenav className={'d-inline-flex bg-white mr-4 mb-4' + this.collapsed('sidenav5')} style={{height: '450px'}}>
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

          <Sidenav className={'d-inline-flex bg-lighter mr-4 mb-4' + this.collapsed('sidenav5')} style={{height: '450px'}}>
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

          <Sidenav className={'d-inline-flex bg-light mr-4 mb-4' + this.collapsed('sidenav5')} style={{height: '450px'}}>
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

        <h4 className="ui-block-heading">Colors (horizontal)</h4>

        <div className="cui-example">

          <Sidenav orientation="horizontal" className="bg-sidenav-theme mb-4" style={{position: 'relative', zIndex: 95}}>
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

          <Sidenav orientation="horizontal" className="bg-primary mb-4" style={{position: 'relative', zIndex: 94}}>
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

          <Sidenav orientation="horizontal" className="bg-secondary mb-4" style={{position: 'relative', zIndex: 93}}>
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

          <Sidenav orientation="horizontal" className="bg-success mb-4" style={{position: 'relative', zIndex: 92}}>
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

          <Sidenav orientation="horizontal" className="bg-info mb-4" style={{position: 'relative', zIndex: 91}}>
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

          <Sidenav orientation="horizontal" className="bg-warning mb-4" style={{position: 'relative', zIndex: 90}}>
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

          <Sidenav orientation="horizontal" className="bg-danger mb-4" style={{position: 'relative', zIndex: 89}}>
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

          <Sidenav orientation="horizontal" className="bg-white mb-4" style={{position: 'relative', zIndex: 88}}>
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

          <Sidenav orientation="horizontal" className="bg-lighter mb-4" style={{position: 'relative', zIndex: 87}}>
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

          <Sidenav orientation="horizontal" className="bg-light mb-4" style={{position: 'relative', zIndex: 86}}>
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

        </div>

        <h4 className="ui-block-heading">With background</h4>

        <div className="cui-example">
          <div className="mb-4">
            <Button variant="primary" onClick={() => this.toggle('sidenav6')}>Toggle collapsed</Button>
          </div>

          <Sidenav className={'sidenav-dark d-inline-flex ui-bg-cover ui-bg-overlay-container mr-4 mb-4' + this.collapsed('sidenav6')} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg/1.jpg)`, height: '450px'}}>
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

          <Sidenav className={'sidenav-dark d-inline-flex ui-bg-cover ui-bg-overlay-container mr-4 mb-4' + this.collapsed('sidenav6')} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg/13.jpg)`, height: '450px'}}>
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

          <Sidenav className={'sidenav-light d-inline-flex ui-bg-cover ui-bg-overlay-container mr-4 mb-4' + this.collapsed('sidenav6')} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg/16.jpg)`, height: '450px'}}>
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

        <h5 className="mt-5 mb-4"><code>&lt;Sidenav&gt;</code> component</h5>

        <pre>
&lt;Sidenav orientation=&quot;vertical&quot; accordion={'{'}false}&gt;
  ...
&lt;/Sidenav&gt;
        </pre>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>orientation</strong></td>
                <td><code>'vertical'</code></td>
                <td>Sidenav orientation. <div className="mt-2">Values: &nbsp; <code>'vertical'</code>, <code>'horizontal'</code></div></td>
              </tr>
              <tr>
                <td><strong>accordion</strong></td>
                <td><code>true</code></td>
                <td>Enable/disable accordion behaviour. <div className="mt-2">Values: &nbsp; <code>true</code>, <code>false</code></div></td>
              </tr>
              <tr>
                <td><strong>animate</strong></td>
                <td><code>true</code></td>
                <td>Enable/disable animations. <div className="mt-2">Values: &nbsp; <code>true</code>, <code>false</code></div></td>
              </tr>
              <tr>
                <td><strong>closeChildren</strong></td>
                <td><code>false</code></td>
                <td>Close all children menus when the parent menu closes. <div className="mt-2">Values: &nbsp; <code>true</code>, <code>false</code></div></td>
              </tr>
              <tr>
                <td><strong>showDropdownOnHover</strong></td>
                <td><code>false</code></td>
                <td>Open dropdown on hover <em className="text-muted">(horizontal mode only)</em>. <div className="mt-2">Values: &nbsp; <code>true</code>, <code>false</code></div></td>
              </tr>
              <tr>
                <td><strong>onOpen</strong></td>
                <td>
                </td>
                <td>
                  Called immediately after toggle link clicked.
                  <ul className="mt-3">
                    <li>Return <code>false</code> to prevent menu opening.</li>
                    <li>Return <code>Promise</code> and call <code>reject()</code> to prevent menu opening or call <code>resolve()</code> to continue.</li>
                  </ul>
                  <pre className="mt-4">
class SomeComponent extends Component {'{'}{"\n"}
&nbsp;&nbsp;onOpenCallback (sidenavInstance, itemEl, toggleLinkEl, menuEl) {'{'}{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;...{"\n"}
&nbsp;&nbsp;}{"\n"}
{"\n"}
&nbsp;&nbsp;render() {'{'}{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;return ({"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Sidenav onOpen={'{'}this.onOpenCallback}&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Sidenav&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;){"\n"}
&nbsp;&nbsp;}{"\n"}
}
</pre>
                </td>
              </tr>
              <tr>
                <td><strong>onOpened</strong></td>
                <td>
                </td>
                <td>
                  Called after menu/dropdown open animation ends.
                  <pre className="mt-4">
class SomeComponent extends Component {'{'}{"\n"}
&nbsp;&nbsp;onOpenedCallback (sidenavInstance, itemEl, toggleLinkEl, menuEl) {'{'}{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;...{"\n"}
&nbsp;&nbsp;}{"\n"}
{"\n"}
&nbsp;&nbsp;render() {'{'}{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;return ({"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Sidenav onOpened={'{'}this.onOpenedCallback}&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Sidenav&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;){"\n"}
&nbsp;&nbsp;}{"\n"}
}
                  </pre>
                </td>
              </tr>
              <tr>
                <td><strong>onClose</strong></td>
                <td>
                </td>
                <td>
                  Called immediately after toggle link clicked.
                  <ul className="mt-3">
                    <li>Return <code>false</code> to prevent menu closing.</li>
                    <li>Return <code>Promise</code> and call <code>reject()</code> to prevent menu closing or call <code>resolve()</code> to continue.</li>
                  </ul>
                  <div><strong>Note:</strong> <code>autoClosed</code> is <code>true</code> when the menu is in accordion mode and the action is triggered by SideNav plugin itself.</div>
                  <pre className="mt-4">
class SomeComponent extends Component {'{'}{"\n"}
&nbsp;&nbsp;onCloseCallback (sidenavInstance, itemEl, toggleLinkEl, menuEl, autoClosed) {'{'}{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;...{"\n"}
&nbsp;&nbsp;}{"\n"}
{"\n"}
&nbsp;&nbsp;render() {'{'}{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;return ({"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Sidenav onClose={'{'}this.onCloseCallback}&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Sidenav&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;){"\n"}
&nbsp;&nbsp;}{"\n"}
}
                  </pre>
                </td>
              </tr>
              <tr>
                <td><strong>onClosed</strong></td>
                <td>
                </td>
                <td>
                  Called after menu/dropdown close animation ends.
                  <pre className="mt-4">
class SomeComponent extends Component {'{'}{"\n"}
&nbsp;&nbsp;onClosedCallback (sidenavInstance, itemEl, toggleLinkEl, menuEl) {'{'}{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;...{"\n"}
&nbsp;&nbsp;}{"\n"}
{"\n"}
&nbsp;&nbsp;render() {'{'}{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;return ({"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Sidenav onClosed={'{'}this.onClosedCallback}&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Sidenav&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;){"\n"}
&nbsp;&nbsp;}{"\n"}
}
                  </pre>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5 className="mt-5 mb-4"><code>&lt;Sidenav.Link&gt;</code> component</h5>

        <pre>
&lt;Sidenav.Link href=&quot;#&quot; disabled={'{'}true}&gt;{"\n"}
&nbsp;&nbsp;Link text{"\n"}
&lt;/Sidenav.Link&gt;
        </pre>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>href</strong></td>
                <td><code>''</code></td>
                <td>Anchor's <code>href</code> attribute</td>
              </tr>
              <tr>
                <td><strong>icon</strong></td>
                <td></td>
                <td>Icon class</td>
              </tr>
              <tr>
                <td><strong>target</strong></td>
                <td></td>
                <td>Anchor's <code>target</code> attribute</td>
              </tr>
              <tr>
                <td><strong>linkClass</strong></td>
                <td><code>''</code></td>
                <td>Custom anchor classes</td>
              </tr>
              <tr>
                <td><strong>badgeText</strong></td>
                <td><code></code></td>
                <td>Link badge</td>
              </tr>
              <tr>
                <td><strong>badgeVariant</strong></td>
                <td><code>'primary'</code></td>
                <td>Badge variant</td>
              </tr>
              <tr>
                <td><strong>disabled</strong></td>
                <td><code>false</code></td>
                <td>Disable item</td>
              </tr>
              <tr>
                <td><strong>active</strong></td>
                <td><code>false</code></td>
                <td>Activate item</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5 className="mt-5 mb-4"><code>&lt;Sidenav.RouterLink&gt;</code> component</h5>

        <pre>
&lt;Sidenav.RouterLink to=&quot;/route&quot; disabled={'{'}true}&gt;{"\n"}
&nbsp;&nbsp;Link text{"\n"}
&lt;/Sidenav.RouterLink&gt;
        </pre>

        <div className="alert alert-info">
          All additional properties are passed to the "react-router-dom/NavLink" component. See&nbsp;
          <a href="https://reacttraining.com/react-router/web/guides/basic-components/navigation" target="_blank" rel="noopener noreferrer">https://reacttraining.com/react-router/web/guides/basic-components/navigation</a>
        </div>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>icon</strong></td>
                <td></td>
                <td>Icon class</td>
              </tr>
              <tr>
                <td><strong>linkClass</strong></td>
                <td><code>''</code></td>
                <td>Custom anchor classes</td>
              </tr>
              <tr>
                <td><strong>badgeText</strong></td>
                <td><code></code></td>
                <td>Link badge</td>
              </tr>
              <tr>
                <td><strong>badgeVariant</strong></td>
                <td><code>'primary'</code></td>
                <td>Badge variant</td>
              </tr>
              <tr>
                <td><strong>disabled</strong></td>
                <td><code>false</code></td>
                <td>Disable item</td>
              </tr>
              <tr>
                <td><strong>active</strong></td>
                <td><code>false</code></td>
                <td>Activate item</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5 className="mt-5 mb-4"><code>&lt;Sidenav.Menu&gt;</code> component</h5>

        <pre>
&lt;Sidenav.Menu open={'{'}true} linkText={'{'}&lt;strong&gt;Link text&lt;/strong&gt;}&gt;{"\n"}
&nbsp;&nbsp;&lt;Sidenav.Link href="#"&gt;Link 1&lt;/Sidenav.Link&gt;{"\n"}
&nbsp;&nbsp;&lt;Sidenav.Link href="#"&gt;Link 2&lt;/Sidenav.Link&gt;{"\n"}
&nbsp;&nbsp;&lt;Sidenav.Link href="#"&gt;Link 3&lt;/Sidenav.Link&gt;{"\n"}
&lt;/Sidenav.Menu&gt;
        </pre>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>linkText</strong></td>
                <td></td>
                <td>Link text. Accepts both string and HTML element</td>
              </tr>
              <tr>
                <td><strong>icon</strong></td>
                <td></td>
                <td>Icon class</td>
              </tr>
              <tr>
                <td><strong>linkClass</strong></td>
                <td><code>''</code></td>
                <td>Custom anchor classes</td>
              </tr>
              <tr>
                <td><strong>badgeText</strong></td>
                <td><code></code></td>
                <td>Link badge</td>
              </tr>
              <tr>
                <td><strong>badgeVariant</strong></td>
                <td><code>'primary'</code></td>
                <td>Badge variant</td>
              </tr>
              <tr>
                <td><strong>open</strong></td>
                <td><code>false</code></td>
                <td>Open menu item</td>
              </tr>
              <tr>
                <td><strong>disabled</strong></td>
                <td><code>false</code></td>
                <td>Disable item</td>
              </tr>
              <tr>
                <td><strong>active</strong></td>
                <td><code>false</code></td>
                <td>Activate item</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h5 className="mt-5 mb-4"><code>&lt;Sidenav.Divider&gt;</code> component</h5>

        <pre>
&lt;Sidenav.Divider /&gt;
        </pre>

        <h5 className="mt-5 mb-4"><code>&lt;Sidenav.Header&gt;</code> component</h5>

        <pre>
&lt;Sidenav.Header&gt;{"\n"}
&nbsp;&nbsp;Header text{"\n"}
&lt;/Sidenav.Header&gt;
        </pre>

        <h5 className="mt-5 mb-4"><code>&lt;Sidenav.Block&gt;</code> component</h5>

        <pre>
&lt;Sidenav.Block&gt;{"\n"}
&nbsp;&nbsp;Content{"\n"}
&lt;/Sidenav.Block&gt;
        </pre>

        <h6 className="text-muted small font-weight-bold mt-5 mb-4">METHODS</h6>

        <pre>
class SomeComponent extends Component {'{'}{"\n"}
&nbsp;&nbsp;someCallback() {'{'}{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;this.sidenavRef.sidenav.method(...arguments){"\n"}
&nbsp;&nbsp;}{"\n"}
{"\n"}
&nbsp;&nbsp;render() {'{'}{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;return ({"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Sidenav ref={'{'}el => this.sidenavRef = el}&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Sidenav&gt;{"\n"}
&nbsp;&nbsp;&nbsp;&nbsp;){"\n"}
&nbsp;&nbsp;}{"\n"}
}
        </pre>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Arguments</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>open(el[, closeChildren=options.closeChildren])</code></td>
                <td>
                  <ul className="ui-list">
                    <li><code>el</code> - <code>.sidenav-item</code> or <code>.sidenav-toggle</code> element</li>
                    <li><code>closeChildren</code> - Close all children menus when the parent menu closes. <em className="text-muted">(optional)</em></li>
                  </ul>
                </td>
                <td>Open menu/dropdown</td>
              </tr>
              <tr>
                <td><code>close(el[, closeChildren=options.closeChildren])</code></td>
                <td>
                  <ul className="ui-list">
                    <li><code>el</code> - <code>.sidenav-item</code> or <code>.sidenav-toggle</code> element</li>
                    <li><code>closeChildren</code> - Close all children menus when the parent menu closes. <em className="text-muted">(optional)</em></li>
                  </ul>
                </td>
                <td>Close menu/dropdown</td>
              </tr>
              <tr>
                <td><code>toggle(el[, closeChildren=options.closeChildren])</code></td>
                <td>
                  <ul className="ui-list">
                    <li><code>el</code> - <code>.sidenav-item</code> or <code>.sidenav-toggle</code> element</li>
                    <li><code>closeChildren</code> - Close all children menus when the parent menu closes. <em className="text-muted">(optional)</em></li>
                  </ul>
                </td>
                <td>Toggle menu/dropdown</td>
              </tr>
              <tr>
                <td><code>closeAll([closeChildren=options.closeChildren])</code></td>
                <td>
                  <ul className="ui-list">
                    <li><code>closeChildren</code> - Close all children menus when the parent menu closes. <em className="text-muted">(optional)</em></li>
                  </ul>
                </td>
                <td>Close all menus/dropdowns</td>
              </tr>
              <tr>
                <td><code>setActive(el, active[, openTree=true[, deactivateOthers=true]])</code></td>
                <td>
                  <ul className="ui-list">
                    <li><code>el</code> - <code>.sidenav-item</code> or <code>.sidenav-link</code> element</li>
                    <li><code>active</code> - Set to <code>true</code> to activate; <code>false</code> to deactivate</li>
                    <li><code>openTree</code> - Open parent menu tree</li>
                    <li><code>deactivateOthers</code> - Deactivate currently active items</li>
                  </ul>
                </td>
                <td>Activate/deactivate item</td>
              </tr>
              <tr>
                <td><code>setDisabled(el, disabled)</code></td>
                <td>
                  <ul className="ui-list">
                    <li><code>el</code> - <code>.sidenav-item</code> or <code>.sidenav-link</code> element</li>
                    <li><code>disabled</code> - Set to <code>true</code> to disable; <code>false</code> to enable</li>
                  </ul>
                </td>
                <td>Disable/enable item</td>
              </tr>
              <tr>
                <td><code>isActive(el)</code></td>
                <td>
                  <ul className="ui-list">
                    <li><code>el</code> - <code>.sidenav-item</code> or <code>.sidenav-link</code> element</li>
                  </ul>
                </td>
                <td>Returns <code>true</code> if item is active</td>
              </tr>
              <tr>
                <td><code>isOpened(el)</code></td>
                <td>
                  <ul className="ui-list">
                    <li><code>el</code> - <code>.sidenav-item</code> or <code>.sidenav-link</code> element</li>
                  </ul>
                </td>
                <td>Returns <code>true</code> if menu item is opened</td>
              </tr>
              <tr>
                <td><code>isDisabled(el)</code></td>
                <td>
                  <ul className="ui-list">
                    <li><code>el</code> - <code>.sidenav-item</code> or <code>.sidenav-link</code> element</li>
                  </ul>
                </td>
                <td>Returns <code>true</code> if item is disabled</td>
              </tr>
              <tr>
                <td><code>update()</code></td>
                <td>
                </td>
                <td>Update scrollbar<em className="text-muted">(vertical mode)</em> / scrollable area<em className="text-muted">(horizontal mode)</em></td>
              </tr>
              <tr>
                <td><code>destroy()</code></td>
                <td>
                </td>
                <td>Destroy SideNav instance</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default CuiSidenav
