import React, { Component } from 'react'
import { Card, Row, Col, Button, Dropdown, Form, InputGroup, Media, Badge, ProgressBar } from 'react-bootstrap'

import * as Chartjs from 'react-chartjs-2'

class  Dashboard2 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Dashboard 2 - Dashboards')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>
        <Media as="h4" className="align-items-center font-weight-bold py-3 mb-4">
          <img src={`${process.env.PUBLIC_URL}/img/avatars/1.png`} alt="User" className="ui-w-50 rounded-circle" />
          <Media.Body className="ml-3">
            Welcome back, Mike!
            <div className="text-muted text-tiny mt-1"><small className="font-weight-normal">Today is Tuesday, 8 February 2018</small></div>
          </Media.Body>
        </Media>

        <hr className="container-m-nx mt-0 mb-4" />

        <Row>
          <Col xl={6} className="d-flex align-items-stretch">

            {/* Stats + Links */}
            <Card className="d-flex w-100 mb-4">
              <Row noGutters className="row-bordered h-100">
                <Col sm={6} md={4} lg={6} className="d-flex align-items-center">

                  <a href="#d" onClick={this.prevent} className="card-body media align-items-center text-body">
                    <i className="lnr lnr-chart-bars display-4 d-block text-primary"></i>
                    <span className="media-body d-block ml-3">
                      <span className="text-big font-weight-bolder">$1,342.11</span><br />
                      <small className="text-muted">Earned this month</small>
                    </span>
                  </a>

                </Col>
                <Col sm={6} md={4} lg={6} className="d-flex align-items-center">

                  <a href="#d" onClick={this.prevent} className="card-body media align-items-center text-body">
                    <i className="lnr lnr-hourglass display-4 d-block text-primary"></i>
                    <span className="media-body d-block ml-3">
                      <span className="text-big"><span className="font-weight-bolder">152</span> Working Hours</span><br />
                      <small className="text-muted">Spent this month</small>
                    </span>
                  </a>

                </Col>
                <Col sm={6} md={4} lg={6} className="d-flex align-items-center">

                  <a href="#d" onClick={this.prevent} className="card-body media align-items-center text-body">
                    <i className="lnr lnr-checkmark-circle display-4 d-block text-primary"></i>
                    <span className="media-body d-block ml-3">
                      <span className="text-big"><span className="font-weight-bolder">54</span> Tasks</span><br />
                      <small className="text-muted">Completed this month</small>
                    </span>
                  </a>

                </Col>
                <Col sm={6} md={4} lg={6} className="d-flex align-items-center">

                  <a href="#d" onClick={this.prevent} className="card-body media align-items-center text-body">
                    <i className="lnr lnr-license display-4 d-block text-primary"></i>
                    <span className="media-body d-block ml-3">
                      <span className="text-big"><span className="font-weight-bolder">6</span> Projects</span><br />
                      <small className="text-muted">Done this month</small>
                    </span>
                  </a>

                </Col>
              </Row>
            </Card>
            {/* / Stats + Links */}

          </Col>
          <Col xl={6} className="d-flex align-items-stretch">

            {/* Daily progress chart */}
            <Card className="w-100 mb-4">
              <Card.Body>
                <Button variant="outline-primary" size="sm" className="icon-btn float-right"><i className="ion ion-md-sync"></i></Button>
                <div className="text-muted small">Working hours</div>
                <div className="text-big">Daily Progress</div>
              </Card.Body>
              <div className="px-2 mt-4">
                <Chartjs.Bar
                  height={120}
                  data={{
                    datasets: [{
                      data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
                        38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
                      ],
                      borderWidth: 0,
                      backgroundColor: 'rgba(87, 181, 255, 1)'
                    }],
                    labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
                  }}
                  options={{
                    scales: {
                      xAxes: [{
                        display: false
                      }],
                      yAxes: [{
                        display: false
                      }]
                    },
                    legend: {
                      display: false
                    },
                    responsive: true,
                    maintainAspectRatio: false
                  }}
                />
              </div>
            </Card>
            {/* / Daily progress chart */}

          </Col>

          <Col xl={5}>

            {/* Tasks */}
            <Card className="mb-4">
              <Card.Header as="h6" className="with-elements">
                <div className="card-header-title">Tasks</div>
                <div className="card-header-elements ml-auto">
                  <Button variant="default" size="xs" className="md-btn-flat">Show more</Button>
                </div>
              </Card.Header>
              <Card.Body>
                <p className="text-muted small">Today</p>
                <div className="custom-controls-stacked">
                  <Form.Check custom type="checkbox" className="ui-todo-item" id="todo-1" label={<React.Fragment>
                    Buy products
                    <Badge variant="outline-default" className="ui-todo-badge font-weight-normal ml-2">58 mins left</Badge>
                  </React.Fragment>} />
                  <Form.Check custom type="checkbox" className="ui-todo-item" id="todo-2" label={<React.Fragment>
                    Reply to emails
                  </React.Fragment>} />
                  <Form.Check custom type="checkbox" className="ui-todo-item" id="todo-3" label={<React.Fragment>
                    Write blog post
                    <Badge variant="outline-default" className="ui-todo-badge font-weight-normal ml-2">20 mins left</Badge>
                  </React.Fragment>} />
                  <Form.Check custom defaultChecked type="checkbox" className="ui-todo-item" id="todo-4" label={<React.Fragment>
                    Wash my car
                  </React.Fragment>} />
                </div>
              </Card.Body>
              <hr className="m-0" />
              <Card.Body>
                <p className="text-muted small">Tomorrow</p>
                <div className="custom-controls-stacked">
                  <Form.Check custom type="checkbox" className="ui-todo-item" id="todo-5" label={<React.Fragment>
                    Buy antivirus
                  </React.Fragment>} />
                  <Form.Check custom type="checkbox" className="ui-todo-item" id="todo-6" label={<React.Fragment>
                    Jane's Happy Birthday
                  </React.Fragment>} />
                </div>
              </Card.Body>
              <Card.Footer>
                <InputGroup>
                  <Form.Control placeholder="Type your task" />
                  <InputGroup.Append>
                    <Button variant="primary">Add</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Card.Footer>
            </Card>
            {/* / Tasks */}

          </Col>
          <Col xl={7}>

            {/* Stats */}
            <Row>
              <Col md={6}>

                <Card className="mb-4">
                  <Card.Header as="h6" className="with-elements border-0 pr-0 pb-0">
                    <div className="card-header-title">Revenue</div>
                    <div className="card-header-elements ml-auto">
                      <Dropdown alignRight={!isRTL} className="dropdown-toggle-hide-arrow">
                        <Dropdown.Toggle variant="default" size="sm" className="icon-btn borderless rounded-pill md-btn-flat mr-3"><i className="ion ion-ios-more"></i></Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Action 1</Dropdown.Item>
                          <Dropdown.Item>Action 2</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </Card.Header>
                  <div className="mt-5">
                    <Chartjs.Line
                      height={120}
                      data={{
                        datasets: [{
                          data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
                            38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
                          ],
                          borderWidth: 1,
                          backgroundColor: 'rgba(0,0,0,0)',
                          borderColor: '#009688',
                          pointBorderColor: 'rgba(0,0,0,0)',
                          pointRadius: 1,
                          lineTension: 0
                        }],
                        labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
                      }}
                      options={{
                        scales: {
                          xAxes: [{
                            display: false
                          }],
                          yAxes: [{
                            display: false
                          }]
                        },
                        legend: {
                          display: false
                        },
                        responsive: true,
                        maintainAspectRatio: false
                      }}
                    />
                  </div>
                  <Card.Footer className="text-center py-3">
                    <Row>
                      <Col>
                        <div className="text-muted small">Target</div>
                        <strong className="text-big">$2,000.00</strong>
                      </Col>
                      <Col>
                        <div className="text-muted small">Last month</div>
                        <strong className="text-big">$2,835.22</strong>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>

              </Col>
              <Col md={6}>

                <Card className="pt-2 mb-4">
                  <div className="d-flex align-items-center position-relative mt-4" style={{ height: '110px' }}>
                    <div className="w-100 position-absolute" style={{ top: 0 }}>
                      <Chartjs.Doughnut
                        height={110}
                        data={{
                          datasets: [{
                            data: [54, 46],
                            backgroundColor: ['#673AB7', '#f9f9f9'],
                            hoverBackgroundColor: ['#673AB7', '#f9f9f9'],
                            borderWidth: 0
                          }]
                        }}
                        options={{
                          scales: {
                            xAxes: [{
                              display: false
                            }],
                            yAxes: [{
                              display: false
                            }]
                          },
                          legend: {
                            display: false
                          },
                          tooltips: {
                            enabled: false
                          },
                          cutoutPercentage: 94,
                          responsive: true,
                          maintainAspectRatio: false
                        }}
                      />
                    </div>
                    <div className="w-100 text-center text-large">54</div>
                  </div>
                  <div className="text-center pb-2 my-3">
                    Tasks completed
                  </div>
                  <Card.Footer className="text-center py-3">
                    <Row>
                      <Col>
                        <div className="text-muted small">Target</div>
                        <strong className="text-big">100</strong>
                      </Col>
                      <Col>
                        <div className="text-muted small">Last month</div>
                        <strong className="text-big">85</strong>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>

              </Col>
              <Col md={6}>

                <Card className="mb-4">
                  <Card.Header as="h6" className="with-elements">
                    <div className="card-header-title">Task to Do</div>
                    <div className="card-header-elements ml-auto">
                      <Button variant="outline-secondary" size="xs" className="icon-btn borderless">→</Button>
                    </div>
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-between">
                    <div className="text-large">14</div>
                    <div className="text-right small">
                      10%<br />Last week: 12
                    </div>
                  </Card.Body>
                </Card>

              </Col>
              <Col md={6}>

                <Card className="mb-4">
                  <Card.Header as="h6" className="with-elements">
                    <div className="card-header-title">Overdue tasks</div>
                    <div className="card-header-elements ml-auto">
                      <Button variant="outline-secondary" size="xs" className="icon-btn borderless">→</Button>
                    </div>
                  </Card.Header>
                  <Card.Body className="d-flex justify-content-between">
                    <div className="text-large">5</div>
                    <div className="text-right small">
                      10%<br />Last week: 12
                    </div>
                  </Card.Body>
                </Card>

              </Col>
            </Row>
            {/* / Stats */}

          </Col>
        </Row>

        <hr className="container-m-nx mt-0 mb-4" />

        <h6 className="font-weight-semibold mb-4">Current Progress</h6>

        {/* Project progress */}

        <Card className="pb-4 mb-2">
          <Row noGutters className="align-items-center">
            <Col xs={12} md={5} className="px-4 pt-4">
              <a href="#d" onClick={this.prevent} className="text-body font-weight-semibold">Project Title</a><br />
              <small className="text-muted">Create the new product design</small>
            </Col>
            <Col xs={4} md={2} className="text-muted small px-4 pt-4">
              <strong>In Progress</strong> <br /> 3D modeling
            </Col>
            <Col xs={4} md={2} className="text-muted small px-4 pt-4">
              12 Jan 2018 <br /> 4:45
            </Col>
            <Col xs={4} md={3} className="px-4 pt-4">
              <div className="text-right text-muted small">60%</div>
              <ProgressBar now={60} style={{height: '6px'}} />
            </Col>
          </Row>
        </Card>

        <Card className="pb-4 mb-2">
          <Row noGutters className="align-items-center">
            <Col xs={12} md={5} className="px-4 pt-4">
              <a href="#d" onClick={this.prevent} className="text-body font-weight-semibold">Project Title</a><br />
              <small className="text-muted">Design and development</small>
            </Col>
            <Col xs={4} md={2} className="text-muted small px-4 pt-4">
              <strong>In Progress</strong> <br /> Coding
            </Col>
            <Col xs={4} md={2} className="text-muted small px-4 pt-4">
              19 Jan 2018 <br /> 8:44
            </Col>
            <Col xs={4} md={3} className="px-4 pt-4">
              <div className="text-right text-muted small">84%</div>
              <ProgressBar now={84} style={{height: '6px'}} />
            </Col>
          </Row>
        </Card>

        <Card className="pb-4 mb-2">
          <Row noGutters className="align-items-center">
            <Col xs={12} md={5} className="px-4 pt-4">
              <a href="#d" onClick={this.prevent} className="text-body font-weight-semibold">Project Title</a><br />
              <small className="text-muted">Create the concept</small>
            </Col>
            <Col xs={4} md={2} className="text-muted small px-4 pt-4">
              <strong>Done</strong>
            </Col>
            <Col xs={4} md={2} className="text-muted small px-4 pt-4">
              1 Feb 2018
            </Col>
            <Col xs={4} md={3} className="px-4 pt-4">
              <div className="text-right text-muted small">100%</div>
              <ProgressBar now={100} style={{height: '6px'}} />
            </Col>
          </Row>
        </Card>

        <Card className="pb-4 mb-4">
          <Row noGutters className="align-items-center">
            <Col xs={12} md={5} className="px-4 pt-4">
              <a href="#d" onClick={this.prevent} className="text-body font-weight-semibold">Project Title</a><br />
              <small className="text-muted">SEO enchantsment</small>
            </Col>
            <Col xs={4} md={2} className="text-muted small px-4 pt-4">
              <strong>In Progress</strong> <br /> Optimizing markup
            </Col>
            <Col xs={4} md={2} className="text-muted small px-4 pt-4">
              12 Jan 2018 <br /> 10:21
            </Col>
            <Col xs={4} md={3} className="px-4 pt-4">
              <div className="text-right text-muted small">23%</div>
              <ProgressBar now={23} style={{height: '6px'}} />
            </Col>
          </Row>
        </Card>

        {/* / Project progress */}

        <hr className="container-m-nx mt-0 mb-4" />

        <Row>
          <Col md={6}>

            {/* Messages */}
            <Card className="mb-4">
              <Card.Header as="h6">Messages</Card.Header>
              <Card.Body>
                <Media className="pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/6-small.png`} className="d-block ui-w-40 rounded-circle" alt="User avatar" />
                  <Media.Body className="ml-3">
                    <div className="mb-1">
                      <strong className="font-weight-semibold">Mae Gibson</strong> &nbsp;
                      <small className="text-muted">58m ago</small>
                    </div>
                    <a href="#d" onClick={this.prevent} className="text-body">Sit meis deleniti eu, pri vidit meliore docendi ut.</a>
                  </Media.Body>
                </Media>
                <Media className="pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/4-small.png`} className="d-block ui-w-40 rounded-circle" alt="User avatar" />
                  <Media.Body className="ml-3">
                    <div className="mb-1">
                      <strong className="font-weight-semibold">Kenneth Frazier</strong> &nbsp;
                      <small className="text-muted">1h ago</small>
                    </div>
                    <a href="#d" onClick={this.prevent} className="text-body">Mea et legere fuisset, ius amet purto luptatum te.</a>
                  </Media.Body>
                </Media>
                <Media className="pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/5-small.png`} className="d-block ui-w-40 rounded-circle" alt="User avatar" />
                  <Media.Body className="ml-3">
                    <div className="mb-1">
                      <strong className="font-weight-semibold">Nelle Maxwell</strong> &nbsp;
                      <small className="text-muted">2h ago</small>
                    </div>
                    <a href="#d" onClick={this.prevent} className="text-body">Sit meis deleniti eu, pri vidit meliore docendi ut.</a>
                  </Media.Body>
                </Media>
                <Media>
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-40 rounded-circle" alt="User avatar" />
                  <Media.Body className="ml-3">
                    <div className="mb-1">
                      <strong className="font-weight-semibold">Mike Greene</strong> &nbsp;
                      <small className="text-muted">1d ago</small>
                    </div>
                    <a href="#d" onClick={this.prevent} className="text-body">Lorem ipsum dolor sit amet, vis erat denique in.</a>
                  </Media.Body>
                </Media>
              </Card.Body>
              <a href="#d" onClick={this.prevent} className="card-footer d-block text-center text-body small font-weight-semibold">SHOW MORE</a>
            </Card>
            {/* / Messages */}

          </Col>
          <Col md={6}>

            {/* Feed */}
            <Card className="mb-4">
              <Card.Header as="h6">Feed</Card.Header>
              <Card.Body>
                <Media className="pb-1 mb-3">
                  <div className="ui-feed-icon-container">
                    <span className="ui-icon ui-feed-icon ion ion-ios-thumbs-up bg-success text-white"></span>
                    <img src={`${process.env.PUBLIC_URL}/img/avatars/7-small.png`} className="ui-w-40 rounded-circle" alt="User avatar" />
                  </div>
                  <Media.Body className="align-self-center ml-3">
                    <a href="#d" onClick={this.prevent}>Alice Hampton</a> liked&nbsp;
                    <a href="#d" onClick={this.prevent}>Article Name</a>
                    <div className="text-muted small">2 hours ago</div>
                  </Media.Body>
                </Media>
                <Media className="pb-1 mb-3">
                  <div className="ui-feed-icon-container">
                    <span className="ui-icon ui-feed-icon ion ion-ios-text bg-secondary text-white"></span>
                    <img src={`${process.env.PUBLIC_URL}/img/avatars/8-small.png`} className="ui-w-40 rounded-circle" alt="User avatar" />
                  </div>
                  <Media.Body className="align-self-center ml-3">
                    <a href="#d" onClick={this.prevent}>Hallie Lewis</a> commented on&nbsp;
                    <a href="#d" onClick={this.prevent}>Article Name</a>
                    <div className="my-1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
                    </div>
                    <div className="text-muted small">2 hours ago</div>
                  </Media.Body>
                </Media>
                <Media className="pb-1 mb-3">
                  <div className="ui-feed-icon-container">
                    <span className="ui-icon ui-feed-icon ion ion-ios-thumbs-down bg-danger text-white"></span>
                    <img src={`${process.env.PUBLIC_URL}/img/avatars/9-small.png`} className="ui-w-40 rounded-circle" alt="User avatar" />
                  </div>
                  <Media.Body className="align-self-center ml-3">
                    <a href="#d" onClick={this.prevent}>Amanda Warner</a> disliked&nbsp;
                    <a href="#d" onClick={this.prevent}>Article Name</a>
                    <div className="text-muted small">2 hours ago</div>
                  </Media.Body>
                </Media>
                <Media>
                  <div className="ui-feed-icon-container">
                    <span className="ui-icon ui-feed-icon ion ion-md-checkmark bg-primary text-white"></span>
                    <img src={`${process.env.PUBLIC_URL}/img/avatars/11-small.png`} className="ui-w-40 rounded-circle" alt="User avatar" />
                  </div>
                  <Media.Body className="align-self-center ml-3">
                    <a href="#d" onClick={this.prevent}>Belle Ross</a> followed&nbsp;
                    <a href="#d" onClick={this.prevent}>Nelle Maxwell</a>
                    <div className="text-muted small">2 hours ago</div>
                  </Media.Body>
                </Media>
              </Card.Body>
              <a href="#d" onClick={this.prevent} className="card-footer d-block text-center text-body small font-weight-semibold">SHOW MORE</a>
            </Card>
            {/* / Feed */}

          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard2
