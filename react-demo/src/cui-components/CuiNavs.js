import React, { Component } from 'react'
import { Nav, NavDropdown, Badge, Tabs, Tab, Card } from 'react-bootstrap'

class CuiNavs extends Component {
  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Navs</h3>

        <h4 className="ui-block-heading">Base</h4>

        <div className="cui-example cui-example-vertical-spacing">
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

        <h4 className="ui-block-heading">Vertical</h4>

        <div className="cui-example">
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

        <h4 className="ui-block-heading">Tabs & pills</h4>

        <div className="cui-example cui-example-vertical-spacing">
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

        <h4 className="ui-block-heading">Sizes</h4>

        <div className="cui-example cui-example-vertical-spacing">
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

        <h4 className="ui-block-heading">Fill & justify</h4>

        <div className="cui-example cui-example-vertical-spacing">
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

        <h4 className="ui-block-heading">Using dropdowns</h4>

        <div className="cui-example cui-example-vertical-spacing">
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

        <h4 className="ui-block-heading material-style-only">Light navs (Material only)</h4>

        <div className="cui-example material-style-only">
          <div className="cui-example-vertical-spacing bg-primary p-4">
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

        <h4 className="ui-block-heading">Top tabs</h4>

        <div className="cui-example" >
          <div className="nav-tabs-top">
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

        <h4 className="ui-block-heading">Left tabs</h4>

        <div className="cui-example">
          <div className="nav-tabs-left">
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

        <h4 className="ui-block-heading">Right tabs</h4>

        <div className="cui-example">
          <div className="nav-tabs-right">
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

        <h4 className="ui-block-heading">Bottom tabs</h4>

        <div className="cui-example">
          <div className="nav-tabs-bottom">
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
        <h4 className="ui-block-heading">Responsive navs</h4>

        <p>Try to resize window.</p>

        <div className="cui-example cui-example-vertical-spacing">
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
      </div>
    )
  }
}

export default CuiNavs
