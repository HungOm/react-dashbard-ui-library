import React, { Component } from 'react'
import { Card, Row, Col, Dropdown, Media, ProgressBar, ToggleButtonGroup, ToggleButton, Table } from 'react-bootstrap'

import * as Chartjs from 'react-chartjs-2'

class Dashboard5 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Dashboard 5 - Dashboards')

    this.state = {
      displayRange: 12
    }
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>
        {/* Head stats */}
        <Row noGutters className="container-m-nx container-m-ny bg-lighter bg-white container-p-x pb-3 mb-4">
          <Col xs={6} sm={3} md className="pt-3 pr-4">
            <Media className="align-items-center">
              <div className="ion ion-logo-twitter text-twitter text-large"></div>
              <Media.Body className="ml-3">
                <div className="text-big font-weight-bold line-height-1">25,362</div>
                <div className="text-light text-tiny font-weight-semibold line-height-1 mt-1">FOLLOWERS</div>
              </Media.Body>
            </Media>
          </Col>
          <Col xs={6} sm={3} md className="pt-3 pr-4">
            <Media className="align-items-center">
              <div className="ion ion-logo-googleplus text-google text-large"></div>
              <Media.Body className="ml-3">
                <div className="text-big font-weight-bold line-height-1">12,941</div>
                <div className="text-light text-tiny font-weight-semibold line-height-1 mt-1">FOLLOWERS</div>
              </Media.Body>
            </Media>
          </Col>
          <Col xs={6} sm={3} md className="pt-3 pr-4">
            <Media className="align-items-center">
              <div className="ion ion-logo-facebook text-facebook text-large"></div>
              <Media.Body className="ml-3">
                <div className="text-big font-weight-bold line-height-1">18,665</div>
                <div className="text-light text-tiny font-weight-semibold line-height-1 mt-1">FOLLOWERS</div>
              </Media.Body>
            </Media>
          </Col>
          <Col xs={6} sm={3} md className="pt-3 pr-4">
            <Media className="align-items-center">
              <div className="ion ion-logo-pinterest text-pinterest text-large"></div>
              <Media.Body className="ml-3">
                <div className="text-big font-weight-bold line-height-1">5,719</div>
                <div className="text-light text-tiny font-weight-semibold line-height-1 mt-1">FOLLOWERS</div>
              </Media.Body>
            </Media>
          </Col>
          <Col xs={6} sm={3} md className="pt-3 pr-4">
            <Media className="align-items-center">
              <div className="ion ion-logo-instagram text-instagram text-large"></div>
              <Media.Body className="ml-3">
                <div className="text-big font-weight-bold line-height-1">8,636</div>
                <div className="text-light text-tiny font-weight-semibold line-height-1 mt-1">FOLLOWERS</div>
              </Media.Body>
            </Media>
          </Col>
        </Row>
        {/* / Head stats */}

        {/* Traffic chart + sources */}
        <Card className="mb-4">
          <Card.Header as="h5" className="with-elements border-0 pt-3 pb-0">
            <span className="card-header-title"><i className="ion ion-md-stats text-primary"></i>&nbsp; Traffic</span>

            <div className="card-header-elements ml-auto">
              <ToggleButtonGroup type="radio" name="traffic-displayRange" size="sm"
                value={this.state.displayRange}
                onChange={displayRange => this.setState({ displayRange })}
              >
                <ToggleButton value={1} variant="default" className="md-btn-flat">Month</ToggleButton>
                <ToggleButton value={6} variant="default" className="md-btn-flat">6 Months</ToggleButton>
                <ToggleButton value={12} variant="default" className="md-btn-flat">Year</ToggleButton>
                <ToggleButton value={36} variant="default" className="md-btn-flat">3 Years</ToggleButton>
              </ToggleButtonGroup>
            </div>
          </Card.Header>
          <hr className="border-light mb-0" />
          <Row noGutters className="row-bordered">
            <Col md={8} lg={12} xl={8} className="d-flex align-items-center p-4">
              <div className="w-100">
                <Chartjs.Line
                  height={230}
                  data={{
                    labels: ['2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02'],
                    datasets: [{
                      label: 'Visits',
                      data: [14, 37, 30, 46, 80, 42, 33, 13, 25, 6, 88, 96],
                      borderWidth: 1,
                      backgroundColor: 'rgba(38, 180, 255, 0.1)',
                      borderColor: '#26B4FF',
                      fill: false
                    }, {
                      label: 'Returns',
                      data: [56, 17, 19, 96, 73, 46, 67, 40, 77, 43, 64, 54],
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
                          fontColor: '#aaa',
                          autoSkipPadding: 50
                        }
                      }],
                      yAxes: [{
                        gridLines: {
                          display: false
                        },
                        ticks: {
                          fontColor: '#aaa',
                          maxTicksLimit: 5
                        }
                      }]
                    },
                    responsive: true,
                    maintainAspectRatio: false
                  }}
                />
              </div>
            </Col>

            {/* Sources */}
            <Col md={4} lg={12} xl={4} className="px-4 pt-4">
              <div className="pb-4">
                Twitter
                <div className="float-right small mt-1">
                  11,963 &nbsp;&nbsp;
                  <span className="text-muted">29.77%</span>
                </div>
                <ProgressBar now={29.77} variant="twitter" style={{height: '3px'}} className="mt-1" />
              </div>
              <div className="pb-4">
                Google+
                <div className="float-right small mt-1">
                  11,963 &nbsp;&nbsp;
                  <span className="text-muted">28.39%</span>
                </div>
                <ProgressBar now={28.39} variant="google" style={{height: '3px'}} className="mt-1" />
              </div>
              <div className="pb-4">
                Facebook
                <div className="float-right small mt-1">
                  9,965 &nbsp;&nbsp;
                  <span className="text-muted">23.65%</span>
                </div>
                <ProgressBar now={23.65} variant="facebook" style={{height: '3px'}} className="mt-1" />
              </div>
              <div className="pb-4">
                Pinterest
                <div className="float-right small mt-1">
                  4,223 &nbsp;&nbsp;
                  <span className="text-muted">10.02%</span>
                </div>
                <ProgressBar now={10.02} variant="pinterest" style={{height: '3px'}} className="mt-1" />
              </div>
              <div className="pb-4">
                Instagram
                <div className="float-right small mt-1">
                  3,437 &nbsp;&nbsp;
                  <span className="text-muted">8.15%</span>
                </div>
                <ProgressBar now={8.15} variant="instagram" style={{height: '3px'}} className="mt-1" />
              </div>
            </Col>
            {/* / Sources */}

          </Row>
        </Card>
        {/* / Traffic chart + sources */}

        <Row>

          {/* Charts */}
          <Col sm={6} xl={3}>

            <Card className="mb-4">
              <Card.Body className="pb-3">
                <strong className="text-big">2366</strong>&nbsp;
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
          <Col sm={6} xl={3}>

            <Card className="mb-4">
              <Card.Body className="d-flex justify-content-between align-items-center" style={{ height: '98px' }}>
                <div>
                  <div className="text-muted small">Time on site</div>
                  <strong className="text-large font-weight-normal">3:44</strong>
                  <sup className="text-success small">+ 2%</sup>
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
                        backgroundColor: 'rgba(136, 151, 170, .2)',
                        borderColor: 'rgba(136, 151, 170, 1)',
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
          <Col md={4}>

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
          <Col md={4}>

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
          <Col md={4}>

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

          <Col md={8} lg={12} xl={9}>

            {/* Popular queries */}
            <Card className="mb-4">
              <Card.Header as="h6">Popular queries</Card.Header>
              <Table responsive className="card-table">
                <thead>
                  <tr>
                    <th>Query</th>
                    <th>Clicks</th>
                    <th>Impressions</th>
                    <th>CTR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</td>
                    <td>130</td>
                    <td>260</td>
                    <td>16.9%</td>
                  </tr>
                  <tr>
                    <td>Nulla id ex at odio mollis faucibus quis non odio.</td>
                    <td>120</td>
                    <td>240</td>
                    <td>15.8%</td>
                  </tr>
                  <tr>
                    <td>Sed commodo pharetra tellus.</td>
                    <td>110</td>
                    <td>220</td>
                    <td>14.7%</td>
                  </tr>
                  <tr>
                    <td>Nullam eu felis dignissim, rutrum ante at, gravida quam. Suspendisse ornare massa in leo aliquet, non aliquet tellus scelerisque.</td>
                    <td>100</td>
                    <td>200</td>
                    <td>13.6%</td>
                  </tr>
                  <tr>
                    <td>Praesent placerat tincidunt ante, tincidunt porttitor turpis viverra quis.</td>
                    <td>90</td>
                    <td>180</td>
                    <td>12.5%</td>
                  </tr>
                  <tr>
                    <td>Mauris vel rhoncus velit.</td>
                    <td>80</td>
                    <td>160</td>
                    <td>11.4%</td>
                  </tr>
                  <tr>
                    <td>Vestibulum malesuada consectetur porttitor.</td>
                    <td>70</td>
                    <td>140</td>
                    <td>10.3%</td>
                  </tr>
                </tbody>
              </Table>
              <a href="#d" onClick={this.prevent} className="card-footer d-block text-center text-body small font-weight-semibold">SHOW MORE</a>
            </Card>
            {/* / Popular queries */}

          </Col>
          <Col md={4} lg={12} xl={3}>

            {/* Stats */}
            <Row>
              <Col sm={4} md={12} lg={4} xl={12}>

                <Card className="mb-4">
                  <Card.Header className="border-0 pb-0">Monthly clicks</Card.Header>
                  <Card.Body className="text-center text-success text-xlarge py-3">3,235</Card.Body>
                  <Card.Footer className="border-0 small pt-0">
                    <div className="float-right text-success">
                      <small className="ion ion-md-arrow-round-up"></small> 11.25%
                    </div>
                    <span className="text-muted">Total: 46,536</span>
                  </Card.Footer>
                </Card>

              </Col>
              <Col sm={4} md={12} lg={4} xl={12}>

                <Card className="mb-4">
                  <Card.Header className="border-0 pb-0">Monthly impressions</Card.Header>
                  <Card.Body className="text-center text-danger text-xlarge py-3">8,267</Card.Body>
                  <Card.Footer className="border-0 small pt-0">
                    <div className="float-right text-danger">
                      <small className="ion ion-md-arrow-round-down"></small> 5.38%
                    </div>
                    <span className="text-muted">Total: 20,369</span>
                  </Card.Footer>
                </Card>

              </Col>
              <Col sm={4} md={12} lg={4} xl={12}>

                <Card className="mb-4">
                  <Card.Header className="border-0 pb-0">Monthly avg. CTR</Card.Header>
                  <Card.Body className="text-center text-success text-xlarge py-3">21.73%</Card.Body>
                  <Card.Footer className="border-0 small pt-0">
                    <div className="float-right text-success">
                      <small className="ion ion-md-arrow-round-up"></small> 2.54%
                    </div>
                    <span className="text-muted">Total: 18.3%</span>
                  </Card.Footer>
                </Card>

              </Col>
            </Row>
            {/* / Stats */}

          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard5
