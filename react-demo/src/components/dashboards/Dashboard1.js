import React, { Component } from 'react'
import { Card, Row, Col, Button, Dropdown, Form, InputGroup, Media, Table, Badge } from 'react-bootstrap'

import PerfectScrollbar from 'react-perfect-scrollbar'
import '../../vendor/libs/react-perfect-scrollbar/react-perfect-scrollbar.scss'
import * as Chartjs from 'react-chartjs-2'

class Dashboard1 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Dashboard 1 - Dashboards')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          Dashboard
          <div className="text-muted text-tiny mt-1"><small className="font-weight-normal">Today is Tuesday, 8 February 2018</small></div>
        </h4>

        {/* Counters */}
        <Row>
          <Col sm={6} xl={3}>

            <Card className="mb-4">
              <Card.Body className="d-flex align-items-center">
                <div className="lnr lnr-cart display-4 text-success"></div>
                <div className="ml-3">
                  <div className="text-muted small">Monthly sales</div>
                  <div className="text-large">2362</div>
                </div>
              </Card.Body>
            </Card>

          </Col>
          <Col sm={6} xl={3}>

            <Card className="mb-4">
              <Card.Body className="d-flex align-items-center">
                <div className="lnr lnr-earth display-4 text-info"></div>
                <div className="ml-3">
                  <div className="text-muted small">Monthly visits</div>
                  <div className="text-large">687,123</div>
                </div>
              </Card.Body>
            </Card>

          </Col>
          <Col sm={6} xl={3}>

            <Card className="mb-4">
              <Card.Body className="d-flex align-items-center">
                <div className="lnr lnr-gift display-4 text-danger"></div>
                <div className="ml-3">
                  <div className="text-muted small">Products</div>
                  <div className="text-large">985</div>
                </div>
              </Card.Body>
            </Card>

          </Col>
          <Col sm={6} xl={3}>

            <Card className="mb-4">
              <Card.Body className="d-flex align-items-center">
                <div className="lnr lnr-users display-4 text-warning"></div>
                <div className="ml-3">
                  <div className="text-muted small">Users</div>
                  <div className="text-large">105,652</div>
                </div>
              </Card.Body>
            </Card>

          </Col>
        </Row>
        {/* / Counters */}

        {/* Statistics */}
        <Card className="mb-4">
          <Card.Header as="h6" className="with-elements">
            <div className="card-header-title">Statistics</div>
            <div className="card-header-elements ml-auto">
              <label className="text m-0">
                <span className="text-light text-tiny font-weight-semibold align-middle">
                  SHOW STATS
                </span>
                <span className="switcher switcher-sm d-inline-block align-middle mr-0 ml-2">
                  <input type="checkbox" className="switcher-input" defaultChecked />
                  <span className="switcher-indicator">
                    <span className="switcher-yes"></span>
                    <span className="switcher-no"></span>
                  </span>
                </span>
              </label>
            </div>
          </Card.Header>
          <Row noGutters className="row-bordered">
            <Col md={8} lg={12} xl={8}>
              <Card.Body>
                <div className="w-100">
                  <Chartjs.Line
                    height={210}
                    data={{
                      labels: ['2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05'],
                      datasets: [{
                        label: 'Visits',
                        data: [93, 25, 95, 59, 46, 68, 4, 41],
                        borderWidth: 1,
                        backgroundColor: 'rgba(28,180,255,.05)',
                        borderColor: 'rgba(28,180,255,1)'
                      }, {
                        label: 'Returns',
                        data: [83, 1, 43, 28, 56, 82, 80, 66],
                        borderWidth: 1,
                        borderDash: [5, 5],
                        backgroundColor: 'rgba(136, 151, 170, 0.1)',
                        borderColor: '#8897aa'
                      }]
                    }}
                    options={{
                      scales: {
                        xAxes: [{
                          gridLines: {
                            display: false
                          },
                          ticks: {
                            fontColor: '#aaa'
                          }
                        }],
                        yAxes: [{
                          gridLines: {
                            display: false
                          },
                          ticks: {
                            fontColor: '#aaa',
                            stepSize: 20
                          }
                        }]
                      },
                      responsive: true,
                      maintainAspectRatio: false
                    }}
                  />
                </div>
              </Card.Body>
            </Col>

            <Col md={4} lg={12} xl={4}>
              <Card.Body>

                {/* Numbers */}
                <Row>
                  <Col xs={6} xl={5} className="text-muted mb-3">Total sales</Col>
                  <Col xs={6} xl={7} className="mb-3">
                    <span className="text-big">10,332</span>
                    <sup className="text-success">+12%</sup>
                  </Col>
                  <Col xs={6} xl={5} className="text-muted mb-3">Income amount</Col>
                  <Col xs={6} xl={7} className="mb-3">
                    <span className="text-big">$1,534</span>
                    <sup className="text-danger">-5%</sup>
                  </Col>
                  <Col xs={6} xl={5} className="text-muted mb-3">Total budget</Col>
                  <Col xs={6} xl={7} className="mb-3">
                    <span className="text-big">$10,534</span>
                    <sup className="text-success">+12%</sup>
                  </Col>
                  <Col xs={6} xl={5} className="text-muted mb-3">Page views</Col>
                  <Col xs={6} xl={7} className="mb-3">
                    <span className="text-big">21,332</span>
                    <sup className="text-danger">-12%</sup>
                  </Col>
                  <Col xs={6} xl={5} className="text-muted mb-3">Completed tasks</Col>
                  <Col xs={6} xl={7} className="mb-3">
                    <span className="text-big">12</span>
                    <sup className="text-success">+12%</sup>
                  </Col>
                </Row>
                {/* / Numbers */}

              </Card.Body>
            </Col>
          </Row>
        </Card>
        {/* / Statistics */}

        <Row>

          {/* Charts */}
          <Col sm={6} xl={4}>

            <Card className="mb-4">
              <Card.Header as="h6" className="with-elements border-0 pr-0 pb-0">
                <div className="card-header-title">Sales</div>
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
              <div className="mt-3">
                <Chartjs.Line
                  height={100}
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
              <Card.Footer className="text-center py-2">
                <Row>
                  <Col>
                    <div className="text-muted small">Target</div>
                    <strong className="text-big">500</strong>
                  </Col>
                  <Col>
                    <div className="text-muted small">Current</div>
                    <strong className="text-big">421</strong>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>

          </Col>
          <Col sm={6} xl={4}>

            <Card className="mb-4">
              <Card.Body>
                <div className="float-right text-success">
                  <small className="ion ion-md-arrow-round-up text-tiny"></small> 12%
                </div>
                <div className="text-muted small">Total revenue</div>
                <div className="text-xlarge">$1,534</div>
              </Card.Body>
              <div className="px-2">
                <Chartjs.Bar className="w-100"
                  height={117}
                  data={{
                    datasets: [{
                      data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
                        38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
                      ],
                      borderWidth: 0,
                      backgroundColor: '#673AB7'
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

          </Col>
          <Col sm={6} xl={4}>

            <Card className="mb-4">
              <Card.Body className="pb-0">
                <div className="text-right small mb-4">Aug 2017 - Feb 2018</div>
                <div className="w-100 my-3">
                  <Chartjs.Line
                    height={86}
                    data={{
                      datasets: [{
                        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
                          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47
                        ],
                        borderWidth: 1,
                        backgroundColor: 'rgba(206, 221, 54, 0.2)',
                        borderColor: '#cedd36',
                        pointBackgroundColor: 'rgba(0,0,0,0)',
                        pointBorderColor: 'rgba(0,0,0,0)',
                        pointRadius: 1
                      }],
                      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
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
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-primary" size="xs" className="icon-btn float-right"><i className="ion ion-md-sync"></i></Button>
                Unique visitors
              </Card.Footer>
            </Card>

          </Col>
          <Col sm={6} xl={3}>

            <Card className="mb-4">
              <Card.Header as="h6" className="bg-success text-white">
                <i className="ion ion-md-cash"></i>&nbsp;
                Revenue
              </Card.Header>
              <div className="bg-success text-white">
                <div className="d-flex align-items-center position-relative mt-4" style={{height: '140px'}}>
                  <div className="w-100 position-absolute" style={{top: 0}}>
                    <Chartjs.Doughnut
                      height={140}
                      data={{
                        datasets: [{
                          data: [85, 15],
                          backgroundColor: ['#fff', 'rgba(255,255,255,0.3)'],
                          hoverBackgroundColor: ['#fff', 'rgba(255,255,255,0.3)'],
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
                  <div className="w-100 text-center text-xlarge">85</div>
                </div>
                <div className="text-center mt-3 mb-4">
                  Sales today
                </div>
              </div>
              <Card.Footer className="border-0 text-center py-3">
                <Row>
                  <Col>
                    <div className="text-muted small mb-1">Target</div>
                    <strong className="text-big">$1225</strong>
                  </Col>
                  <Col>
                    <div className="text-muted small mb-1">Current</div>
                    <strong className="text-big">$654</strong>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>

          </Col>
          {/* / Charts */}

          <Col xl={9}>

            <Row>
              <Col md={6}>

                {/* Tasks */}
                <Card className="mb-4">
                  <Card.Header as="h6" className="with-elements">
                    <div className="card-header-title">Tasks</div>
                    <div className="card-header-elements ml-auto">
                      <Button variant="default" size="xs" className="md-btn-flat">Show more</Button>
                    </div>
                  </Card.Header>
                  <PerfectScrollbar style={{height: '234px'}}>
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
                        <Form.Check custom type="checkbox" className="ui-todo-item" id="todo-7" label={<React.Fragment>
                          Call mom
                        </React.Fragment>} />
                      </div>
                    </Card.Body>
                  </PerfectScrollbar>
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
              <Col md={6}>

                {/* Team ToDo */}
                <Card className="mb-4">
                  <Card.Header as="h6" className="with-elements">
                    <div className="card-header-title">Team TODO</div>
                    <div className="card-header-elements ml-auto">
                      <Button variant="default" size="xs" className="md-btn-flat">Show more</Button>
                    </div>
                  </Card.Header>
                  <PerfectScrollbar style={{height: '300px'}}>
                    <Card.Body>
                      <div className="rounded ui-bordered p-3 mb-3">
                        Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                        <Media className="align-items-center mt-3">
                          <img src={`${process.env.PUBLIC_URL}/img/avatars/12-small.png`} className="d-block ui-w-30 rounded-circle" alt="Avatar" />
                          <Media.Body className="ml-2">Arthur Duncan</Media.Body>
                          <div className="text-muted small text-nowrap">02/08/2018</div>
                        </Media>
                      </div>
                      <div className="rounded ui-bordered p-3 mb-3">
                        Sit meis deleniti eu, pri vidit meliore docendi ut.
                        <Media className="align-items-center mt-3">
                          <img src={`${process.env.PUBLIC_URL}/img/avatars/11-small.png`} className="d-block ui-w-30 rounded-circle" alt="Avatar" />
                          <Media.Body className="ml-2">Belle Ross</Media.Body>
                          <div className="text-muted small text-nowrap">02/06/2018</div>
                        </Media>
                      </div>
                      <div className="rounded ui-bordered p-3">
                        Cum ea graeci tractatos.
                        <Media className="align-items-center mt-3">
                          <img src={`${process.env.PUBLIC_URL}/img/avatars/10-small.png`} className="d-block ui-w-30 rounded-circle" alt="Avatar" />
                          <Media.Body className="ml-2">Wayne Morgan</Media.Body>
                          <div className="text-muted small text-nowrap">02/04/2018</div>
                        </Media>
                      </div>
                    </Card.Body>
                  </PerfectScrollbar>
                </Card>
                {/* / Team ToDo */}

              </Col>
            </Row>

          </Col>
          <Col md={8}>

            {/* Sale stats */}
            <Card className="mb-4">
              <Card.Header as="h6" className="with-elements">
                <div className="card-header-title">Sale stats</div>
                <div className="card-header-elements ml-auto">
                  <Button variant="default" size="xs" className="md-btn-flat">Show more</Button>
                </div>
              </Card.Header>
              <Table responsive className="card-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Sales</th>
                    <th>Cancelled</th>
                    <th>Delivered</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>02/08/2018</td>
                    <td>12</td>
                    <td>1</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>02/07/2018</td>
                    <td>16</td>
                    <td>2</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>02/06/2018</td>
                    <td>5</td>
                    <td>0</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td>02/05/2018</td>
                    <td>21</td>
                    <td>1</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </Table>
            </Card>
            {/* / Sale stats */}

          </Col>
          <Col md={4}>

            {/* Type gadgets chart */}
            <Card className="mb-4">
              <Card.Header as="h6" className="with-elements">
                <div className="card-header-title">Type gadgets</div>
                <div className="card-header-elements ml-auto">
                  <Button variant="outline-primary" size="xs" className="icon-btn md-btn-flat"><i className="ion ion-md-sync"></i></Button>
                </div>
              </Card.Header>
              <div className="py-4 px-3">
                <div className="w-100">
                  <Chartjs.Pie
                    height={162}
                    data={{
                      labels: ['Desktops', 'Smartphones', 'Tablets'],
                      datasets: [{
                        data: [1225, 654, 211],
                        backgroundColor: ['rgba(99,125,138,0.5)', 'rgba(28,151,244,0.5)', 'rgba(2,188,119,0.5)'],
                        borderColor: ['#647c8a', '#2196f3', '#02bc77'],
                        borderWidth: 1
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
                      position: 'right',
                      labels: {
                        boxWidth: 12
                      }
                    },
                      responsive: true,
                      maintainAspectRatio: false
                    }}
                  />
                </div>
              </div>
            </Card>
            {/* / Type gadgets chart */}

          </Col>
          <Col md={6} lg={12} xl={6}>

            {/* Comments */}
            <Card className="mb-4">
              <Card.Header as="h6">Comments</Card.Header>
              <Card.Body>
                <Media className="pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/9-small.png`} className="d-block ui-w-40 rounded-circle" alt="Avatar" />
                  <Media.Body className="ml-3">
                    <a href="#d" onClick={this.prevent}>Amanda Warner</a>
                    <span className="text-muted mx-1">commented on</span>
                    <a href="#d" onClick={this.prevent}>Article Name</a>
                    <p className="my-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
                    <div className="clearfix">
                      <a href="#d" onClick={this.prevent} className="float-right text-lightest small">
                        <span className="ion ion-ios-thumbs-down"></span>
                      </a>
                      <a href="#d" onClick={this.prevent} className="float-right text-lightest small">
                        <span className="ion ion-ios-thumbs-up mr-2"></span>
                      </a>
                      <span className="float-left text-muted small">2 hours ago</span>
                    </div>
                  </Media.Body>
                </Media>
                <Media className="pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/8-small.png`} className="d-block ui-w-40 rounded-circle" alt="Avatar" />
                  <Media.Body className="ml-3">
                    <a href="#d" onClick={this.prevent}>Hallie Lewis</a>
                    <span className="text-muted mx-1">commented on</span>
                    <a href="#d" onClick={this.prevent}>Article Name</a>
                    <p className="my-1">Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.</p>
                    <div className="clearfix">
                      <a href="#d" onClick={this.prevent} className="float-right text-lightest small">
                        <span className="ion ion-ios-thumbs-down"></span>
                      </a>
                      <a href="#d" onClick={this.prevent} className="float-right text-lightest small">
                        <span className="ion ion-ios-thumbs-up mr-2"></span>
                      </a>
                      <span className="float-left text-muted small">2 hours ago</span>
                    </div>
                  </Media.Body>
                </Media>
                <Media>
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/7-small.png`} className="d-block ui-w-40 rounded-circle" alt="Avatar" />
                  <Media.Body className="ml-3">
                    <a href="#d" onClick={this.prevent}>Alice Hampton</a>
                    <span className="text-muted mx-1">commented on</span>
                    <a href="#d" onClick={this.prevent}>Article Name</a>
                    <p className="my-1">Eam facilis laboramus reprehendunt ei, ex esse fastidii per.</p>
                    <div className="clearfix">
                      <a href="#d" onClick={this.prevent} className="float-right text-lightest small">
                        <span className="ion ion-ios-thumbs-down"></span>
                      </a>
                      <a href="#d" onClick={this.prevent} className="float-right text-lightest small">
                        <span className="ion ion-ios-thumbs-up mr-2"></span>
                      </a>
                      <span className="float-left text-muted small">2 hours ago</span>
                    </div>
                  </Media.Body>
                </Media>
              </Card.Body>
              <a href="#d" onClick={this.prevent} className="card-footer d-block text-center text-body small font-weight-semibold">SHOW MORE</a>
            </Card>
            {/* / Comments */}

          </Col>
          <Col md={6} lg={12} xl={6}>

            {/* Support tickets */}
            <Card className="mb-4">
              <Card.Header as="h6">Support tickets</Card.Header>
              <Card.Body>
                <div className="pb-1 mb-3">
                  <Badge variant="outline-warning" className="float-right">Feature</Badge>
                  <a href="#d" onClick={this.prevent}>Lorem ipsum dolor sit amet, vis erat denique in.</a>&nbsp;
                  <span className="text-muted">#34563</span>
                  <br />
                  <small className="text-muted">Created by <a href="#d" onClick={this.prevent} className="text-body">Mike Greene</a> &nbsp;·&nbsp; 1 day ago</small>
                </div>
                <div className="pb-1 mb-3">
                  <Badge variant="outline-danger" className="float-right">Bug</Badge>
                  <a href="#d" onClick={this.prevent}>Dicunt prodesset te vix.</a>&nbsp;
                  <span className="text-muted">#34524</span>
                  <br />
                  <small className="text-muted">Created by <a href="#d" onClick={this.prevent} className="text-body">Leon Wilson</a> &nbsp;·&nbsp; 1 day ago</small>
                </div>
                <div className="pb-1 mb-3">
                  <Badge variant="outline-success" className="float-right">Question</Badge>
                  <a href="#d" onClick={this.prevent}>Sit meis deleniti eu, pri vidit meliore docendi ut?</a>&nbsp;
                  <span className="text-muted">#34563</span>
                  <br />
                  <small className="text-muted">Created by <a href="#d" onClick={this.prevent} className="text-body">Allie Rodriguez</a> &nbsp;·&nbsp; 1 day ago</small>
                </div>
                <div className="pb-1 mb-3">
                  <Badge variant="outline-secondary" className="float-right">Enhancement</Badge>
                  <a href="#d" onClick={this.prevent}>Eu tantas offendit mnesarchum sit, vide novum ad pri.</a>&nbsp;
                  <span className="text-muted">#34563</span>
                  <br />
                  <small className="text-muted">Created by <a href="#d" onClick={this.prevent} className="text-body"> Kenneth Frazier</a> &nbsp;·&nbsp; 1 day ago</small>
                </div>
                <div>
                  <Badge variant="outline-danger" className="float-right">Bug</Badge>
                  <a href="#d" onClick={this.prevent}>Dicunt prodesset te vix.</a>&nbsp;
                  <span className="text-muted">#34524</span>
                  <br />
                  <small className="text-muted">Created by <a href="#d" onClick={this.prevent} className="text-body">Leon Wilson</a> &nbsp;·&nbsp; 1 day ago</small>
                </div>
              </Card.Body>
              <a href="#d" onClick={this.prevent} className="card-footer d-block text-center text-body small font-weight-semibold">SHOW MORE</a>
            </Card>
            {/* / Support tickets */}
          </Col>

        </Row>
      </div>
    )
  }
}

export default Dashboard1
