import React, { Component } from 'react'
import { Nav, Tab, Card, NavDropdown, Badge, Tabs, Row, Col, Button } from 'react-bootstrap'

class Navs extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Navs - UI elements')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Navs
        </h4>

        <div className="demo-vertical-spacing-sm bg-lighter rounded p-4 mb-4 clearfix">
          {/* Left */}
          <Nav activeKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Another Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Center */}
          <Nav activeKey="link-1" className="justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Another Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Right */}
          <Nav activeKey="link-1" className="justify-content-end">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Another Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Vertical */}
          <Nav activeKey="link-1" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Another Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <hr className="container-m-nx border-light my-4" />
        <h5 className="font-weight-bold py-3 my-4">
          Tabs & Pills
        </h5>

        <div className="demo-vertical-spacing">
          {/* Default tabs */}
          <Nav variant="tabs" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Alt tabs */}
          <Nav variant="tabs tabs-alt" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Pills */}
          <Nav variant="pills" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <div className="material-style-only">
          <h6 className="text-muted pb-1 mt-5 mb-4">Light (material only)</h6>

          <div className="demo-vertical-spacing bg-primary rounded p-4" id="nav-light-demo">
            {/* Default tabs */}
            <Nav variant="tabs md-tabs-light" defaultActiveKey="link-1">
              <Nav.Item>
                <Nav.Link eventKey="link-1">Active</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Dropdown" alignRight={isRTL}>
                <NavDropdown.Item eventKey="2.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="2.3">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Alt tabs */}
            <Nav variant="tabs tabs-alt md-tabs-light" defaultActiveKey="link-1">
              <Nav.Item>
                <Nav.Link eventKey="link-1">Active</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Dropdown" alignRight={isRTL}>
                <NavDropdown.Item eventKey="2.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="2.3">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
              </Nav.Item>
            </Nav>

            {/* Pills */}
            <Nav variant="pills md-pills-light" defaultActiveKey="link-1">
              <Nav.Item>
                <Nav.Link eventKey="link-1">Active</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Dropdown" alignRight={isRTL}>
                <NavDropdown.Item eventKey="2.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="2.2">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="2.3">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3" disabled>Disabled</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>

        <h6 className="pb-1 mt-5 mb-4">Sizes</h6>

        <div className="demo-vertical-spacing">
          {/* Large */}
          <Nav variant="tabs tabs nav-lg" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav variant="tabs tabs nav-lg tabs-alt" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav variant="tabs pills nav-lg" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Small */}
          <Nav variant="tabs nav-sm" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav variant="tabs nav-sm tabs-alt" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav variant="pills nav-sm" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <h6 className="pb-1 mt-5 mb-4">Fill & Justify</h6>

        <div className="demo-vertical-spacing">
          <Nav variant="pills" fill={true} defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>

          <Nav variant="pills" justify={true} defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <h6 className="pb-1 mt-5 mb-4">Dropdowns</h6>

        <div className="demo-vertical-spacing" id="nav-dropdowns-demo">
          {/* Default tabs */}
          <Nav variant="tabs" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Dropdown" alignRight={isRTL}>
              <NavDropdown.Item eventKey="2.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="2.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="2.3">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Alt tabs */}
          <Nav variant="tabs tabs-alt" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Dropdown" alignRight={isRTL}>
              <NavDropdown.Item eventKey="2.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="2.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="2.3">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Pills */}
          <Nav variant="pills" defaultActiveKey="link-1">
            <Nav.Item>
              <Nav.Link eventKey="link-1">Active</Nav.Link>
            </Nav.Item>
            <NavDropdown title="Dropdown" alignRight={isRTL}>
              <NavDropdown.Item eventKey="2.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="2.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="2.3">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link eventKey="link-3">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <hr className="container-m-nx border-light my-4" />
        <h5 className="font-weight-bold py-3 my-4">
          Panel tabs
        </h5>

        <div className="row">
          <div className="col-xl-6">

            <div className="nav-tabs-top mb-4">
              <Tabs defaultActiveKey="home">
                <Tab eventKey="home" title="Home">
                  <Card.Body>
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                  </Card.Body>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <Card.Body>
                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                  </Card.Body>
                </Tab>
                <Tab eventKey="messages" title="Messages">
                  <Card.Body>
                    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                  </Card.Body>
                </Tab>
              </Tabs>
            </div>

          </div>
          <div className="col-xl-6">

            <div className="nav-tabs-bottom mb-4">
              <Tabs defaultActiveKey="home">
                <Tab eventKey="home" title="Home">
                  <Card.Body>
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                  </Card.Body>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <Card.Body>
                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                  </Card.Body>
                </Tab>
                <Tab eventKey="messages" title="Messages">
                  <Card.Body>
                    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                  </Card.Body>
                </Tab>
              </Tabs>
            </div>

          </div>
          <div className="col-xl-6">

            <div className="nav-tabs-left mb-4">
              <Tabs defaultActiveKey="home">
                <Tab eventKey="home" title="Home">
                  <Card.Body>
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                  </Card.Body>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <Card.Body>
                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                  </Card.Body>
                </Tab>
                <Tab eventKey="messages" title="Messages">
                  <Card.Body>
                    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                  </Card.Body>
                </Tab>
              </Tabs>
            </div>

          </div>
          <div className="col-xl-6">

            <div className="nav-tabs-right mb-4">
              <Tabs defaultActiveKey="home">
                <Tab eventKey="home" title="Home">
                  <Card.Body>
                    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                  </Card.Body>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <Card.Body>
                    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                  </Card.Body>
                </Tab>
                <Tab eventKey="messages" title="Messages">
                  <Card.Body>
                    <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                  </Card.Body>
                </Tab>
              </Tabs>
            </div>

          </div>
        </div>

        <hr className="container-m-nx border-light my-4" />
        <h5 className="font-weight-bold py-3 my-4">
          Responsive navs
        </h5>

        <div className="demo-vertical-spacing">
          {/* .nav-responsive-md - stacked on extra small and small screens */}
          <div className="nav-responsive-md">
            <Nav activeKey="link-1" className="justify-content-end">
              <Nav.Item>
                <Nav.Link eventKey="link-1">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Another Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          {/* .nav-responsive-lg - stacked on extra small, small and medium screens */}
          <div className="nav-responsive-lg">
            <Nav variant="tabs" defaultActiveKey="link-1">
              <Nav.Item>
                <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          {/* .nav-responsive-lg - stacked on extra small, small and medium screens */}
          <div className="nav-responsive-lg">
            <Nav variant="tabs tabs-alt" defaultActiveKey="link-1">
              <Nav.Item>
                <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          {/* .nav-responsive-lg - stacked on extra small, small and medium screens */}
          <div className="nav-responsive-lg">
            <Nav variant="pills" defaultActiveKey="link-1">
              <Nav.Item>
                <Nav.Link eventKey="link-1">Active <Badge variant="primary">22</Badge></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link <Badge variant="outline-success">22</Badge></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4" disabled>Disabled</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          {/* .nav-responsive-xl - stacked on extra small, small, medium and large screens */}
          <div className="nav-tabs-top nav-responsive-xl">
            <Tabs defaultActiveKey="home">
              <Tab eventKey="home" title="Home">
                <Card.Body>
                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                </Card.Body>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Card.Body>
                  <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                </Card.Body>
              </Tab>
              <Tab eventKey="messages" title="Messages">
                <Card.Body>
                  <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                </Card.Body>
              </Tab>
            </Tabs>
          </div>

          {/* .nav-responsive-lg - stacked on extra small, small and medium screens */}
          <div className="nav-tabs-left nav-responsive-lg">
            <Tabs defaultActiveKey="home">
              <Tab eventKey="home" title="Home">
                <Card.Body>
                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                </Card.Body>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Card.Body>
                  <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                </Card.Body>
              </Tab>
              <Tab eventKey="messages" title="Messages">
                <Card.Body>
                  <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                </Card.Body>
              </Tab>
            </Tabs>
          </div>

          {/* .nav-responsive-md - stacked on extra small and small screens */}
          <div className="nav-tabs-right nav-responsive-md">
            <Tabs defaultActiveKey="home">
              <Tab eventKey="home" title="Home">
                <Card.Body>
                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                </Card.Body>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Card.Body>
                  <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                </Card.Body>
              </Tab>
              <Tab eventKey="messages" title="Messages">
                <Card.Body>
                  <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                </Card.Body>
              </Tab>
            </Tabs>
          </div>

          {/* .nav-responsive-sm - stacked on extra small screens */}
          <div className="nav-tabs-bottom nav-responsive-sm">
            <Tabs defaultActiveKey="home">
              <Tab eventKey="home" title="Home">
                <Card.Body>
                  <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                </Card.Body>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Card.Body>
                  <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
                </Card.Body>
              </Tab>
              <Tab eventKey="messages" title="Messages">
                <Card.Body>
                  <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
                </Card.Body>
              </Tab>
            </Tabs>
          </div>
        </div>

        <hr className="container-m-nx border-light my-4" />
        <h5 className="font-weight-bold py-3 my-4">
          Within cards
        </h5>

        <Row>
          <Col md>

            <Card className="text-center mb-3">
              <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#card-tabs-active" className="nav-responsive-md">
                  <Nav.Item>
                    <Nav.Link href="#card-tabs-active" onClick={this.prevent}>Active</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#card-tabs-link" onClick={this.prevent}>Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#card-tabs-disabled" onClick={this.prevent} disabled>Disabled</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title as="h4">Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

          </Col>
          <Col md>

            <Card className="text-center mb-3">
              <Card.Header>
                <Nav variant="pills" defaultActiveKey="#card-pills-active" className="nav-responsive-md">
                  <Nav.Item>
                    <Nav.Link href="#card-pills-active" onClick={this.prevent}>Active</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#card-pills-link" onClick={this.prevent}>Link</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#card-pills-disabled" onClick={this.prevent} disabled>Disabled</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>
                <Card.Title as="h4">Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

          </Col>
        </Row>

        <div className="material-style-only">
          <div className="text-muted pb-1 mt-5 mb-4">Light (material only)</div>

          <Row>
            <Col md>

              <Card className="text-center mb-3">
                <Card.Header className="bg-primary border-0">
                  <Nav variant="tabs" defaultActiveKey="#md-card-tabs-active" className="md-tabs-light nav-responsive-md">
                    <Nav.Item>
                      <Nav.Link href="#md-card-tabs-active" onClick={this.prevent}>Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#md-card-tabs-link" onClick={this.prevent}>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#md-card-tabs-disabled" onClick={this.prevent} disabled>Disabled</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Card.Title as="h4">Special title treatment</Card.Title>
                  <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>
            <Col md>

              <Card className="text-center mb-3">
                <Card.Header className="bg-primary border-0">
                  <Nav variant="pills" defaultActiveKey="#md-card-pills-active" className="md-pills-light nav-responsive-md">
                    <Nav.Item>
                      <Nav.Link href="#md-card-pills-active" onClick={this.prevent}>Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#md-card-pills-link" onClick={this.prevent}>Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="#md-card-pills-disabled" onClick={this.prevent} disabled>Disabled</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Card.Title as="h4">Special title treatment</Card.Title>
                  <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>
          </Row>
        </div>

      </div>
    )
  }
}

export default Navs
