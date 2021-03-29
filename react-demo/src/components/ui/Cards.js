import React, { Component } from 'react'
import { Card, CardGroup, CardDeck, CardColumns, Row, Col, Button, ListGroup, ProgressBar, Form, Pagination, Badge } from 'react-bootstrap'

class Cards extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Cards - UI elements')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Cards
        </h4>

        <Card style={{ maxWidth: '20rem' }}>
          <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Card image cap" />
          <Card.Body>
            <Card.Title as="h4">Card title</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

        <h6 className="pb-1 mt-5 mb-4">Content types</h6>

        <Row>
          <Col md={6}>

            <Card body className="mb-3">
              This is some text within a card block.
              </Card>

          </Col>
          <Col md={6}>

            <Card body className="mb-3">
              <Card.Title as="h4">Card title</Card.Title>
              <div className="card-subtitle text-muted mb-3">Card subtitle</div>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Card.Link href="#d" onClick={this.prevent}>Card link</Card.Link>
              <Card.Link href="#d" onClick={this.prevent}>Another link</Card.Link>
            </Card>

          </Col>
          <Col md={6}>

            <Card className="mb-3">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Card image cap" />
              <Card.Body>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <Col md={6}>

            <Card className="mb-3">
              <ListGroup variant="flush">
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>

          </Col>
        </Row>

        <h6 className="pb-1 mt-5 mb-4">Mixed</h6>

        <Card style={{ maxWidth: '20rem' }}>
          <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Card image cap" />
          <Card.Body>
            <Card.Title as="h4">Card title</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#d" onClick={this.prevent}>Card link</Card.Link>
            <Card.Link href="#d" onClick={this.prevent}>Another link</Card.Link>
          </Card.Body>
        </Card>

        <h6 className="pb-1 mt-5 mb-4">Header and footer</h6>

        <Row>
          <Col md>

            <Card className="mb-3">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title as="h4">Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

          </Col>
          <Col md>

            <Card className="mb-3">
              <Card.Header as="h4">Featured</Card.Header>
              <Card.Body>
                <Card.Title as="h4">Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

          </Col>
          <div className="w-100"></div>
          <Col md>

            <Card className="mb-3">
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </Card.Body>
            </Card>

          </Col>
          <Col md>

            <Card className="text-center mb-3">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title as="h4">Special title treatment</Card.Title>
                <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                2 days ago
                </Card.Footer>
            </Card>

          </Col>
        </Row>

        <h6 className="pb-1 mt-5 mb-4">Text alignment</h6>

        <Row>
          <Col lg>

            <Card body className="mb-3">
              <Card.Title as="h4">Special title treatment</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card>

          </Col>
          <Col lg>

            <Card body className="text-center mb-3">
              <Card.Title as="h4">Special title treatment</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card>

          </Col>
          <Col lg>

            <Card body className="text-right mb-3">
              <Card.Title as="h4">Special title treatment</Card.Title>
              <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card>

          </Col>
        </Row>

        <h6 className="pb-1 mt-5 mb-4">Images</h6>

        <Row>
          <Col lg={4}>

            <Card className="mb-3">
              <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bg/5.jpg`} alt="Card image cap" />
              <Card.Body>
                <Card.Title as="h4">Card title</Card.Title>
                <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="small text-muted">Last updated 3 mins ago</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <Col lg={4}>

            <Card className="mb-3">
              <Card.Body>
                <Card.Title as="h4">Card title</Card.Title>
                <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text className="small text-muted">Last updated 3 mins ago</Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Card image cap" />
            </Card>

          </Col>
          <Col lg={4}>

            <Card bg="dark" text="white" className="border-0">
              <Card.Img src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Card image cap" />
              <Card.ImgOverlay>
                <Card.Title as="h4">Card title</Card.Title>
                <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>

          </Col>
        </Row>

        <h6 className="pb-1 mt-5 mb-4">Condenced</h6>

        <Card className="card-condenced" style={{ maxWidth: '20rem' }}>
          <Card.Header>Card header</Card.Header>
          <img className="w-100" src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Preview" />
          <Card.Body>
            <Card.Title as="h4">Card title</Card.Title>
            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#d" onClick={this.prevent}>Card link</Card.Link>
            <Card.Link href="#d" onClick={this.prevent}>Another link</Card.Link>
          </Card.Body>
        </Card>

        <h6 className="pb-1 mt-5 mb-4">Style variation</h6>

        <Row>
          <Col md>

            <Card bg="primary" text="white" className="mb-3">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title as="h4">Primary card title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <Col md>

            <Card bg="secondary" text="white" className="mb-3">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title as="h4">Secondary card title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <Col md>

            <Card bg="success" text="white" className="mb-3">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title as="h4">Success card title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <div className="w-100"></div>
          <Col md>

            <Card bg="danger" text="white" className="mb-3">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title as="h4">Danger card title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <Col md>

            <Card bg="warning" text="body" className="mb-3">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title as="h4">Warning card title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <Col md>

            <Card bg="info" text="white" className="mb-3">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title as="h4">Info card title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <div className="w-100"></div>
          <Col md>

            <Card bg="dark" text="white" className="mb-3">
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title as="h4">Dark card title</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
        </Row>

        {/* Outline */}
        <Row>
          <Col md>

            <Card body bg="transparent" border="primary" className="shadow-none mb-3">
              <Card.Title as="h4">Primary card title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card>

          </Col>
          <Col md>

            <Card body bg="transparent" border="secondary" className="shadow-none mb-3">
              <Card.Title as="h4">Secondary card title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card>

          </Col>
          <Col md>

            <Card body bg="transparent" border="success" className="shadow-none mb-3">
              <Card.Title as="h4">Success card title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card>

          </Col>
          <div className="w-100"></div>
          <Col md>

            <Card body bg="transparent" border="danger" className="shadow-none mb-3">
              <Card.Title as="h4">Danger card title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card>

          </Col>
          <Col md>

            <Card body bg="transparent" border="warning" className="shadow-none mb-3">
              <Card.Title as="h4">Warning card title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card>

          </Col>
          <Col md>

            <Card body bg="transparent" border="info" className="shadow-none mb-3">
              <Card.Title as="h4">Info card title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card>

          </Col>
          <div className="w-100"></div>
          <Col md>

            <Card body bg="transparent" border="dark" className="shadow-none mb-3">
              <Card.Title as="h4">Dark card title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card>

          </Col>
        </Row>

        <h6 className="pb-1 mt-5 mb-4">Hover cards</h6>

        <Row>
          <Col lg>

            <Card body className="card-hover mb-3">
              <Card.Title as="h4">Card title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card>

          </Col>
          <Col lg>

            <Card body bg="primary" text="white" className="card-hover border-0 mb-3">
              <Card.Title as="h4">Primary card title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card>

          </Col>
          <Col lg>

            <Card body bg="transparent" border="primary" className="card-hover shadow-none mb-3">
              <Card.Title as="h4">Primary card title</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
            </Card>

          </Col>
        </Row>

        <h6 className="pb-1 mt-5 mb-4">Header elements</h6>

        <Row>
          <Col md>

            <Card className="mb-3">
              {/* Add `.with-elements` to the parent `.card-header` element */}
              <Card.Header className="with-elements">
                <span className="card-header-title mr-2">Card header</span>
                <div className="card-header-elements">
                  <Badge variant="outline-success">20</Badge>
                  <Badge pill variant="primary">12</Badge>
                </div>
                <div className="card-header-elements ml-md-auto">
                  <Badge variant="outline-success">20</Badge>
                  <Badge pill variant="primary">12</Badge>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <Col md>

            <Card body className="mb-3">
              <Card.Title as="div" className="with-elements">
                <h5 className="m-0 mr-2">Card title</h5>
                <div className="card-title-elements">
                  <Badge variant="outline-success">20</Badge>
                  <Badge pill variant="primary">12</Badge>
                </div>
                <div className="card-title-elements ml-md-auto">
                  <Badge variant="outline-success">20</Badge>
                  <Badge pill variant="primary">12</Badge>
                </div>
              </Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</Card.Text>
            </Card>

          </Col>
          <div className="w-100"></div>
          <Col md>

            <Card className="mb-3">
              {/* Add `.with-elements` to the parent `.card-header` element */}
              <Card.Header className="with-elements">
                <span className="card-header-title mr-2">Card header</span>
                <div className="card-header-elements">
                  <Button variant="outline-primary" size="xs"><span className="ion ion-md-add" /> Add</Button>
                  <Button variant="success icon-btn" size="xs"><span className="ion ion-md-cloud-download" /></Button>
                </div>
                <div className="card-header-elements ml-md-auto">
                  <Button variant="outline-primary" size="xs"><span className="ion ion-md-add" /> Add</Button>
                  <Button variant="success icon-btn" size="xs"><span className="ion ion-md-cloud-download" /></Button>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <Col md>

            <Card body className="mb-3">
              <Card.Title as="div" className="with-elements">
                <h5 className="m-0 mr-2">Card title</h5>
                <div className="card-title-elements">
                  <Button variant="outline-primary" size="xs"><span className="ion ion-md-add" /> Add</Button>
                  <Button variant="success icon-btn" size="xs"><span className="ion ion-md-cloud-download" /></Button>
                </div>
                <div className="card-title-elements ml-md-auto">
                  <Button variant="outline-primary" size="xs"><span className="ion ion-md-add" /> Add</Button>
                  <Button variant="success icon-btn" size="xs"><span className="ion ion-md-cloud-download" /></Button>
                </div>
              </Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</Card.Text>
            </Card>

          </Col>
          <div className="w-100"></div>
          <Col md>

            <Card className="mb-3">
              {/* Add `.with-elements` to the parent `.card-header` element */}
              <Card.Header className="with-elements">
                <span className="card-header-title mr-2">Card header</span>
                <div className="card-header-elements">
                  <select className="custom-select custom-select-sm w-auto" defaultValue="1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <Form.Control size="sm" placeholder="Search" style={{ width: '50px' }} />
                  <label className="switcher switcher-sm mr-0">
                    <input type="checkbox" className="switcher-input" />
                    <span className="switcher-indicator">
                      <span className="switcher-yes"></span>
                      <span className="switcher-no"></span>
                    </span>
                  </label>
                </div>
                <div className="card-header-elements ml-md-auto">
                  <select className="custom-select custom-select-sm w-auto" defaultValue="1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <Form.Control size="sm" placeholder="Search" style={{ width: '50px' }} />
                  <label className="switcher switcher-sm mr-0">
                    <input type="checkbox" className="switcher-input" />
                    <span className="switcher-indicator">
                      <span className="switcher-yes"></span>
                      <span className="switcher-no"></span>
                    </span>
                  </label>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <Col md>

            <Card body className="mb-3">
              <Card.Title as="div" className="with-elements">
                <h5 className="m-0 mr-2">Card title</h5>
                <div className="card-title-elements">
                  <select className="custom-select custom-select-sm w-auto" defaultValue="1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <Form.Control size="sm" placeholder="Search" style={{ width: '50px' }} />
                  <label className="switcher switcher-sm mr-0">
                    <input type="checkbox" className="switcher-input" />
                    <span className="switcher-indicator">
                      <span className="switcher-yes"></span>
                      <span className="switcher-no"></span>
                    </span>
                  </label>
                </div>
                <div className="card-title-elements ml-md-auto">
                  <select className="custom-select custom-select-sm w-auto" defaultValue="1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                  <Form.Control size="sm" placeholder="Search" style={{ width: '50px' }} />
                  <label className="switcher switcher-sm mr-0">
                    <input type="checkbox" className="switcher-input" />
                    <span className="switcher-indicator">
                      <span className="switcher-yes"></span>
                      <span className="switcher-no"></span>
                    </span>
                  </label>
                </div>
              </Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</Card.Text>
            </Card>

          </Col>
          <div className="w-100"></div>
          <Col md>

            <Card className="mb-3">
              {/* Add `.with-elements` to the parent `.card-header` element */}
              <Card.Header className="with-elements">
                <span className="card-header-title mr-2">Card header</span>
                <div className="card-header-elements">
                  <span className="text text-muted"><small>Some TEXT</small></span>
                  <span className="ion ion-md-star"></span>
                </div>
                <div className="card-header-elements ml-md-auto">
                  <span className="text text-muted"><small>Some TEXT</small></span>
                  <span className="ion ion-md-star"></span>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <Col md>

            <Card body className="mb-3">
              <Card.Title as="div" className="with-elements">
                <h5 className="m-0 mr-2">Card title</h5>
                <div className="card-title-elements">
                  <span className="text text-muted"><small>Some TEXT</small></span>
                  <span className="ion ion-md-star"></span>
                </div>
                <div className="card-title-elements ml-md-auto">
                  <span className="text text-muted"><small>Some TEXT</small></span>
                  <span className="ion ion-md-star"></span>
                </div>
              </Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</Card.Text>
            </Card>

          </Col>
          <div className="w-100"></div>
          <Col md>

            <Card className="mb-3">
              {/* Add `.with-elements` to the parent `.card-header` element */}
              <Card.Header className="with-elements">
                <span className="card-header-title mr-2">Card header</span>
                <div className="card-header-elements">
                  <Pagination size="sm" className="mb-0">
                    <Pagination.Item>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                  </Pagination>
                  <ProgressBar now={60} style={{ height: '6px', width: '50px' }} />
                </div>
                <div className="card-header-elements ml-md-auto">
                  <Pagination size="sm" className="mb-0">
                    <Pagination.Item>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                  </Pagination>
                  <ProgressBar now={60} style={{ height: '6px', width: '50px' }} />
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</Card.Text>
              </Card.Body>
            </Card>

          </Col>
          <Col md>

            <Card body className="mb-3">
              <Card.Title as="div" className="with-elements">
                <h5 className="m-0 mr-2">Card title</h5>
                <div className="card-title-elements">
                  <Pagination size="sm" className="mb-0">
                    <Pagination.Item>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                  </Pagination>
                  <ProgressBar now={60} style={{ height: '6px', width: '50px' }} />
                </div>
                <div className="card-title-elements ml-md-auto">
                  <Pagination size="sm" className="mb-0">
                    <Pagination.Item>1</Pagination.Item>
                    <Pagination.Item>2</Pagination.Item>
                  </Pagination>
                  <ProgressBar now={60} style={{ height: '6px', width: '50px' }} />
                </div>
              </Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, idque nostro eirmod qui at.</Card.Text>
            </Card>

          </Col>
        </Row>

        <h6 className="pb-1 mt-5 mb-4">Groups</h6>

        <CardGroup>
          <Card>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Card image cap" />
            <Card.Body>
              <Card.Title as="h4">Card title</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
            </Card.Body>
            <Card.Footer className="small text-muted">
              Last updated 3 mins ago
              </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bg/5.jpg`} alt="Card image cap" />
            <Card.Body>
              <Card.Title as="h4">Card title</Card.Title>
              <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
            </Card.Body>
            <Card.Footer className="small text-muted">
              Last updated 3 mins ago
              </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Card image cap" />
            <Card.Body>
              <Card.Title as="h4">Card title</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</Card.Text>
            </Card.Body>
            <Card.Footer className="small text-muted">
              Last updated 3 mins ago
              </Card.Footer>
          </Card>
        </CardGroup>

        <h6 className="pb-1 mt-5 mb-4">Decks</h6>

        <CardDeck>
          <Card>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Card image cap" />
            <Card.Body>
              <Card.Title as="h4">Card title</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
            </Card.Body>
            <Card.Footer className="small text-muted">
              Last updated 3 mins ago
              </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Card image cap" />
            <Card.Body>
              <Card.Title as="h4">Card title</Card.Title>
              <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
            </Card.Body>
            <Card.Footer className="small text-muted">
              Last updated 3 mins ago
              </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Card image cap" />
            <Card.Body>
              <Card.Title as="h4">Card title</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</Card.Text>
            </Card.Body>
            <Card.Footer className="small text-muted">
              Last updated 3 mins ago
              </Card.Footer>
          </Card>
        </CardDeck>

        <h6 className="pb-1 mt-5 mb-4">Columns</h6>

        <CardColumns>
          <Card>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bg/5.jpg`} alt="Card image cap" />
            <Card.Body>
              <Card.Title as="h4">Card title that wraps to a new line</Card.Title>
              <Card.Text>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <blockquote className="blockquote card-body mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer small text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card>
          <Card>
            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Card image cap" />
            <Card.Body>
              <Card.Title as="h4">Card title</Card.Title>
              <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
              <Card.Text className="small text-muted">Last updated 3 mins ago</Card.Text>
            </Card.Body>
          </Card>
          <Card bg="primary" text="white" className="text-center">
            <blockquote className="blockquote card-body mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
              <footer className="blockquote-footer text-white opacity-75">
                <small>
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </Card>
          <Card body className="text-center">
            <Card.Title as="h4">Card title</Card.Title>
            <Card.Text>This card has supporting text below as a natural lead-in to additional content.</Card.Text>
            <Card.Text className="small text-muted">Last updated 3 mins ago</Card.Text>
          </Card>
          <Card>
            <Card.Img src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Card image cap" />
          </Card>
          <Card className="text-right">
            <blockquote className="blockquote card-body mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer small text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card>
          <Card body>
            <Card.Title as="h4">Card title</Card.Title>
            <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</Card.Text>
            <Card.Text className="small text-muted">Last updated 3 mins ago</Card.Text>
          </Card>
        </CardColumns>

      </div>
    )
  }
}

export default Cards
