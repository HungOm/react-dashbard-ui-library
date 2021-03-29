import React, { Component } from 'react'
import { Card, Row, Col, Badge, Button, Dropdown, Media, ProgressBar, ListGroup, ToggleButtonGroup, ToggleButton, Table } from 'react-bootstrap'

import * as Chartjs from 'react-chartjs-2'

class Dashboard4 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Dashboard 4 - Dashboards')

    this.state = {
      displayRange: 3
    }
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>
        {/* Head block */}
        <div className="container-m-nx container-m-ny bg-white container-p-x py-5 mb-0">

          <div className="d-flex justify-content-between align-items-center mb-5">
            <div>
              <h2 className="font-weight-light mb-2">Server Statistics</h2>
              <Badge variant="success" className="font-weight-bold">RUNNING</Badge>
            </div>
            <Button variant="default" size="lg">
              <i className="ion ion-md-power text-danger"></i>&nbsp; Shut Down
            </Button>
          </div>

          {/* Stats */}
          <Row>
            <Col sm={6} md={4} lg={6} xl={4}>

              <div className="border-light ui-bordered p-3 mt-2">
                <Media className="align-items-center">
                  <Media.Body className="small mr-3">
                    <div className="font-weight-semibold mb-3">NETWORK</div>
                    <div className="mb-1">Transfer/mo: 1000GB</div>
                    <div className="mb-1">Incoming: 5.3GB</div>
                    <div>Outgoing: 243.2GB</div>
                  </Media.Body>
                  <div className="d-flex align-items-center position-relative" style={{ height: '60px', width: '60px' }}>
                    <div className="w-100 position-absolute" style={{ top: 0 }}>
                      <Chartjs.Doughnut
                        height={60}
                        data={{
                          datasets: [{
                            data: [24, 76],
                            backgroundColor: ['#4CAF50', 'rgba(255, 255, 255, .1)'],
                            hoverBackgroundColor: ['#4CAF50', 'rgba(255, 255, 255, .1)'],
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
                    <div className="w-100 text-center font-weight-bold">24%</div>
                  </div>
                </Media>
              </div>

            </Col>
            <Col sm={6} md={4} lg={6} xl={4}>

              <div className="border-light ui-bordered p-3 mt-2">
                <Media className="align-items-center">
                  <Media.Body className="small mr-3">
                    <div className="font-weight-semibold mb-3">STORAGE</div>
                    <div className="mb-1">Total: 500GB</div>
                    <div className="mb-1">Used: 429GB</div>
                    <div>Free: 71GB</div>
                  </Media.Body>
                  <div className="d-flex align-items-center position-relative" style={{ height: '60px', width: '60px' }}>
                    <div className="w-100 position-absolute" style={{ top: 0 }}>
                      <Chartjs.Doughnut
                        height={60}
                        data={{
                          datasets: [{
                            data: [86, 14],
                            backgroundColor: ['#d9534f', 'rgba(255, 255, 255, .1)'],
                            hoverBackgroundColor: ['#d9534f', 'rgba(255, 255, 255, .1)'],
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
                    <div className="w-100 text-center font-weight-bold">86%</div>
                  </div>
                </Media>
              </div>

            </Col>
            <Col sm={6} md={4} lg={6} xl={4}>

              <div className="border-light ui-bordered p-3 mt-2">
                <Media className="align-items-center">
                  <Media.Body className="small mr-3">
                    <div className="font-weight-semibold mb-3">MEMORY</div>
                    <div className="mb-1">Total: 32GB</div>
                    <div className="mb-1">Used: 20.4GB</div>
                    <div>Free: 11.6GB</div>
                  </Media.Body>
                  <div className="d-flex align-items-center position-relative" style={{ height: '60px', width: '60px' }}>
                    <div className="w-100 position-absolute" style={{ top: 0 }}>
                      <Chartjs.Doughnut
                        height={60}
                        data={{
                          datasets: [{
                            data: [63, 37],
                            backgroundColor: ['#28c3d7', 'rgba(255, 255, 255, .1)'],
                            hoverBackgroundColor: ['#28c3d7', 'rgba(255, 255, 255, .1)'],
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
                    <div className="w-100 text-center font-weight-bold">63%</div>
                  </div>
                </Media>
              </div>

            </Col>
          </Row>
          {/* / Stats */}

        </div>
        {/* / Head block */}

        <hr className="container-m-nx border-light mt-0 mb-4" />

        {/* Traffic chart */}
        <Card className="w-100 mb-4">
          <Card.Header as="h5" className="with-elements border-0 pb-0">
            <span className="card-header-title">Traffic</span>

            <div className="card-header-elements ml-auto">
              <ToggleButtonGroup type="radio" name="traffic-displayRange" size="xs"
                value={this.state.displayRange}
                onChange={displayRange => this.setState({ displayRange })}
              >
                <ToggleButton value={1} variant="default" className="borderless md-btn-flat">Month</ToggleButton>
                <ToggleButton value={3} variant="default" className="borderless md-btn-flat">3 Months</ToggleButton>
                <ToggleButton value={6} variant="default" className="borderless md-btn-flat">6 Months</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Card.Header>

          <div className="mt-5">
            <Chartjs.Line
              height={150}
              data={{
                datasets: [{
                  data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
                    38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
                  ],
                  borderWidth: 2,
                  backgroundColor: 'rgba(87, 181, 255, .85)',
                  borderColor: 'rgba(87, 181, 255, 1)',
                  pointBorderColor: 'rgba(0,0,0,0)',
                  pointBackgroundColor: 'rgba(0,0,0,0)',
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
            <Row className="row-bordered">
              <Col>
                <div className="text-muted small">Incoming</div>
                <strong>5.3GB</strong>
              </Col>
              <Col>
                <div className="text-muted small">Outgoing</div>
                <strong>243.2GB</strong>
              </Col>
              <Col>
                <div className="text-muted small">Total</div>
                <strong>248.5GB</strong>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
        {/* / Traffic chart */}

        <Row>

          {/* Charts */}
          <Col sm={6} xl={3}>

            <Card className="bg-success border-0 text-white mb-4">
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="text-xlarge">99.9%</div>
                  <div className="small opacity-75">SERVER UP TIME</div>
                </div>
                <i className="ion ion-md-time text-xlarge opacity-25"></i>
              </Card.Body>
            </Card>

          </Col>
          <Col sm={6} xl={3}>

            <Card className="mb-4">
              <Card.Body className="pb-3">
                <strong className="text-big mr-1">2366</strong>
                <small className="text-muted">VIEWS</small>
              </Card.Body>
              <div className="px-2">
                <Chartjs.Bar
                  height={35}
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
          <Col sm={6} xl={3}>

            <Card className="mb-4">
              <Card.Body className="d-flex justify-content-between align-items-center" style={{ height: '98px' }}>
                <div>
                  <div className="text-large">+39%</div>
                  <div className="text-muted text-tiny">VIEWS</div>
                </div>
                <div className="w-50">
                  <Chartjs.Line
                    height={35}
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
                      tooltips: {
                        enabled: false
                      },
                      responsive: true,
                      maintainAspectRatio: false
                    }}
                  />
                </div>
              </Card.Body>
            </Card>

          </Col>
          <Col sm={6} xl={3}>

            <Card className="mb-4">
              <Card.Body className="d-flex justify-content-between align-items-center" style={{ height: '98px' }}>
                <div>
                  <div className="text-muted small">View depth</div>
                  <strong className="text-large font-weight-normal">4.23</strong>
                  <sup className="text-success small">+ 12%</sup>
                </div>
                <div className="w-50">
                  <Chartjs.Line
                    height={35}
                    data={{
                      datasets: [{
                        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
                          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 60
                        ],
                        borderWidth: 1,
                        backgroundColor: 'rgba(206, 221, 54, 0)',
                        borderColor: 'rgba(206, 221, 54, 1)',
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
                      tooltips: {
                        enabled: false
                      },
                      responsive: true,
                      maintainAspectRatio: false
                    }}
                  />
                </div>
              </Card.Body>
            </Card>

          </Col>
          <Col sm={6} xl={4}>

            <Card className="mb-4">
              <Card.Header as="h6" className="with-elements border-0 pr-0 pb-0">
                <div className="card-header-title">Type gadgets</div>
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
              <div className="py-4 px-3">
                <div className="w-100">
                  <Chartjs.Pie
                    height={120}
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

          </Col>
          <Col sm={6} xl={4}>

            <Card className="mb-4">
              <Card.Header as="h6" className="with-elements border-0 pr-0 pb-0">
                <div className="card-header-title">New users</div>
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
              <div className="pt-4">
                <div className="w-100">
                  <Chartjs.Bar
                    height={144}
                    data={{
                      datasets: [{
                        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
                          38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 18
                        ],
                        borderWidth: 0,
                        backgroundColor: '#8897AA'
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
              </div>
            </Card>

          </Col>
          <Col sm={6} xl={4}>

            <Card className="mb-4">
              <Card.Header as="h6" className="with-elements border-0 pr-0 pb-0">
                <div className="card-header-title">Age users</div>
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
              <div className="py-4 px-3">
                <div className="w-100">
                  <Chartjs.Pie
                    height={120}
                    data={{
                      labels: ['18 - 24', '25 - 34', '34 - 45', '45+'],
                      datasets: [{
                        data: [1225, 654, 211, 402],
                        backgroundColor: ['rgba(99,125,138,0.5)', 'rgba(28,151,244,0.5)', 'rgba(2,188,119,0.5)', 'rgba(206, 221, 54, 0.5)'],
                        borderColor: ['#647c8a', '#2196f3', '#02bc77', 'rgba(206, 221, 54, 1)'],
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

          </Col>
          {/* / Charts */}

          <Col sm={6} xl={5}>

            {/* Traffic sources */}
            <Card className="mb-4">
              <Card.Header as="h6" className="with-elements">
                <div className="card-header-title">Traffic sources</div>
                <div className="card-header-elements ml-auto">
                  <Button variant="default" size="xs" className="md-btn-flat">More</Button>
                </div>
              </Card.Header>
              <Table responsive className="card-table m-0">
                <tbody>
                  <tr>
                    <td className="border-top-0 text-nowrap align-middle">
                      <a href="http://www.google.com" className="text-body">www.google.com</a>
                    </td>
                    <td className="w-100 border-top-0 align-middle">
                      <ProgressBar now={29.77} style={{height: '4px'}} />
                    </td>
                    <td className="border-top-0 text-nowrap align-middle">
                      11,963&nbsp;
                      <span className="text-muted small">29.77%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap align-middle">
                      <a href="http://www.google.de" className="text-body">www.google.de</a>
                    </td>
                    <td className="align-middle">
                      <ProgressBar now={28.39} variant="success" style={{height: '4px'}} />
                    </td>
                    <td className="text-nowrap align-middle">
                      11,963&nbsp;
                      <span className="text-muted small">28.39%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap align-middle">
                      <a href="http://www.twitter.com" className="text-body">www.twitter.com</a>
                    </td>
                    <td className="align-middle">
                      <ProgressBar now={23.65} variant="info" style={{height: '4px'}} />
                    </td>
                    <td className="text-nowrap align-middle">
                      9,965&nbsp;
                      <span className="text-muted small">23.65%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap align-middle">
                      <a href="http://www.facebook.com" className="text-body">www.facebook.com</a>
                    </td>
                    <td className="align-middle">
                      <ProgressBar now={10.02} variant="warning" style={{height: '4px'}} />
                    </td>
                    <td className="text-nowrap align-middle">
                      4,223&nbsp;
                      <span className="text-muted small">10.02%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-nowrap align-middle">
                      <a href="http://www.yahoo.com" className="text-body">www.yahoo.com</a>
                    </td>
                    <td className="align-middle">
                      <ProgressBar now={8.15} variant="danger" style={{height: '4px'}} />
                    </td>
                    <td className="text-nowrap align-middle">
                      3,437&nbsp;
                      <span className="text-muted small">8.15%</span>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
            {/* / Traffic sources */}

          </Col>
          <Col xl={7}>

            {/* Latest events */}
            <Card className="mb-4">
              <Card.Header as="h6" className="with-elements">
                <div className="card-header-title">Latest events</div>
                <div className="card-header-elements ml-auto">
                  <Button variant="default" size="xs" className="md-btn-flat">More</Button>
                </div>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item as="li" className="py-3">
                  <Badge variant="success" className="float-right">Success</Badge>
                  <div className="font-weight-semibold">System Boot</div>
                  <small className="text-muted">02/05/2018 11:32:45</small>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="py-3">
                  <Badge variant="success" className="float-right">Success</Badge>
                  <div className="font-weight-semibold">System Restart</div>
                  <small className="text-muted">02/05/2018 11:32:15</small>
                </ListGroup.Item>
                <ListGroup.Item as="li" className="py-3">
                  <Badge variant="danger" className="float-right">Failed</Badge>
                  <div className="font-weight-semibold">System Restart</div>
                  <small className="text-muted">02/05/2018 11:32:02</small>
                </ListGroup.Item>
              </ListGroup>
            </Card>
            {/* / Latest events */}

          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard4
