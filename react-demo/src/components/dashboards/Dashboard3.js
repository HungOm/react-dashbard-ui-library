import React, { Component } from 'react'
import { Card, Row, Col, Button, Media, Table, Badge, Tabs, Tab } from 'react-bootstrap'

import * as Chartjs from 'react-chartjs-2'

class  Dashboard3 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Dashboard 3 - Dashboards')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h4 className="d-flex justify-content-between align-items-center py-2 mb-4">
          <div className="font-weight-bold">Shop Overview</div>
          <Button variant="outline-primary" className="rounded-pill">View reports</Button>
        </h4>

        <hr className="container-m-nx border-light my-0" />

        {/* Stats block */}
        <Row noGutters className="row-bordered container-m-nx">

          {/* Counters */}
          <Col sm={6} md={3} lg={6} xl={3}>
            <div className="d-flex align-items-center container-p-x py-4">
              <div className="lnr lnr-cart display-4 text-primary"></div>
              <div className="ml-3">
                <div className="text-muted small">Monthly sales</div>
                <div className="text-large">2362</div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={3} lg={6} xl={3}>
            <div className="d-flex align-items-center container-p-x py-4">
              <div className="lnr lnr-earth display-4 text-primary"></div>
              <div className="ml-3">
                <div className="text-muted small">Monthly visits</div>
                <div className="text-large">687,123</div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={3} lg={6} xl={3}>
            <div className="d-flex align-items-center container-p-x py-4">
              <div className="lnr lnr-gift display-4 text-primary"></div>
              <div className="ml-3">
                <div className="text-muted small">Products</div>
                <div className="text-large">985</div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={3} lg={6} xl={3}>
            <div className="d-flex align-items-center container-p-x py-4">
              <div className="lnr lnr-users display-4 text-primary"></div>
              <div className="ml-3">
                <div className="text-muted small">Users</div>
                <div className="text-large">105,652</div>
              </div>
            </div>
          </Col>
          {/* / Counters */}

          {/* Payments graph */}
          <Col lg={8} xl={9} className="container-p-x py-4">
            <h5 className="text-muted font-weight-normal mb-4">Payments received</h5>
            <div className="w-100">
              <Chartjs.Line
                height={200}
                data={{
                  labels: ['2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02'],
                  datasets: [{
                    label: 'Sales',
                    data: [137, 187, 85, 72, 85, 120, 183, 89, 143, 105, 116, 77, 76, 180, 158, 172, 143, 164],
                    borderWidth: 2,
                    backgroundColor: 'rgba(87, 181, 255, .85)',
                    borderColor: 'rgba(87, 181, 255, 1)',
                    pointBackgroundColor: 'rgba(0,0,0,0)',
                    pointBorderColor: 'rgba(0,0,0,0)',
                    pointRadius: 10
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
                  legend: {
                    display: false
                  },
                  responsive: true,
                  maintainAspectRatio: false
                }}
              />
            </div>
          </Col>
          {/* / Payments graph */}

          {/* Payment stats */}
          <Col lg={4} xl={3} className="d-flex container-p-x py-4">
            <div className="align-self-center w-100">
              <div className="mb-4">
                <span className="text-muted small">Monthly Income</span><br />
                <span className="text-large">$5,123.56</span>
              </div>
              <div className="mb-4">
                <span className="text-muted small"><strong>PayPal</strong> Payments</span><br />
                <span className="text-big">$2,123.44</span>
              </div>
              <div>
                <span className="text-muted small"><strong>Credit Card</strong> Payments</span><br />
                <span className="text-big">$3,000.12</span>
              </div>
            </div>
          </Col>
          {/* / Payment stats */}

          {/* Mini-graphs */}
          <Col sm={4} className="d-flex align-items-center container-p-x py-4">
            <div>
              <div className="text-muted small">View depth</div>
              <strong className="text-large font-weight-normal">4.23</strong>
              <sup className="text-success small">+ 12%</sup>
            </div>
            <div className="w-50 ml-auto">
              <Chartjs.Line
                height={40}
                data={{
                  datasets: [{
                    data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
                      38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 60
                    ],
                    borderWidth: 1,
                    backgroundColor: 'rgba(103, 58, 183, .2)',
                    borderColor: 'rgba(103, 58, 183, 1)',
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
          </Col>
          <Col sm={4} className="d-flex align-items-center container-p-x py-4">
            <div>
              <div className="text-muted small">Bounce rate</div>
              <strong className="text-large font-weight-normal">23%</strong>
              <sup className="text-danger small">- 5%</sup>
            </div>
            <div className="w-50 ml-auto">
              <Chartjs.Line
                height={40}
                data={{
                  datasets: [{
                    data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61,
                      38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 60
                    ],
                    borderWidth: 1,
                    backgroundColor: 'rgba(206, 221, 54, .2)',
                    borderColor: 'rgba(206, 221, 54, 1)',
                    pointBorderColor: 'rgba(0,0,0,0)',
                    pointRadius: 1,
                    lineTension: 0
                  }],
                  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']                }}
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
          </Col>
          <Col sm={4} className="d-flex align-items-center container-p-x py-4">
            <div>
              <div className="text-muted small">Time on site</div>
              <strong className="text-large font-weight-normal">3:44</strong>
              <sup className="text-success small">+ 2%</sup>
            </div>
            <div className="w-50 ml-auto">
              <Chartjs.Line
                height={40}
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
          </Col>
          {/* / Mini-graphs */}

        </Row>
        {/* / Stats block */}

        <hr className="container-m-nx border-light mt-0 mb-4" />

        <Row>

          <Col md={7} lg={12} xl={7}>

            {/* Popular products */}
            <Card className="mb-4">
              <Card.Header as="h6">Popular products</Card.Header>
              <Table responsive className="card-table">
                <thead>
                  <tr>
                    <th colSpan="2">Item</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>Views</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-middle" style={{ width: '75px' }}>
                      <img className="ui-w-40" src={`${process.env.PUBLIC_URL}/img/uikit/ps4.jpg`} alt="Product" />
                    </td>
                    <td className="align-middle">
                      <a href="#d" onClick={this.prevent} className="text-body">PlayStation 4 1TB (Jet Black)</a>
                    </td>
                    <td className="align-middle">$480.00</td>
                    <td className="align-middle">123</td>
                    <td className="align-middle">3,432</td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <img className="ui-w-40" src={`${process.env.PUBLIC_URL}/img/uikit/nike-1.jpg`} alt="Product" />
                    </td>
                    <td className="align-middle">
                      <a href="#d" onClick={this.prevent} className="text-body">Nike Men Black Liteforce III Sneakers</a>
                    </td>
                    <td className="align-middle">$57.55</td>
                    <td className="align-middle">222</td>
                    <td className="align-middle">7,231</td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <img className="ui-w-40" src={`${process.env.PUBLIC_URL}/img/uikit/headphones.jpg`} alt="Product" />
                    </td>
                    <td className="align-middle">
                      <a href="#d" onClick={this.prevent} className="text-body">Wireless headphones</a>
                    </td>
                    <td className="align-middle">$235.55</td>
                    <td className="align-middle">43</td>
                    <td className="align-middle">3,572</td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <img className="ui-w-40" src={`${process.env.PUBLIC_URL}/img/uikit/backpack.jpg`} alt="Product" />
                    </td>
                    <td className="align-middle">
                      <a href="#d" onClick={this.prevent} className="text-body">HERO ATHLETES BAG</a>
                    </td>
                    <td className="align-middle">$160.00</td>
                    <td className="align-middle">38</td>
                    <td className="align-middle">3,111</td>
                  </tr>
                  <tr>
                    <td className="align-middle">
                      <img className="ui-w-40" src={`${process.env.PUBLIC_URL}/img/uikit/chair-1.jpg`} alt="Product" />
                    </td>
                    <td className="align-middle">
                      <a href="#d" onClick={this.prevent} className="text-body">POÄNG</a>
                    </td>
                    <td className="align-middle">$159.00</td>
                    <td className="align-middle">34</td>
                    <td className="align-middle">5,489</td>
                  </tr>
                </tbody>
              </Table>
              <a href="#d" onClick={this.prevent} className="card-footer d-block text-center text-body small font-weight-semibold">SHOW MORE</a>
            </Card>
            {/* / Popular products */}

          </Col>
          <Col md={5} lg={12} xl={5}>

            {/* Sales */}
            <div className="nav-tabs-top mb-4">
              <Tabs defaultActiveKey="sale-stats">
                <Tab eventKey="sale-stats" title="Sale stats">
                  <Table className="card-table">
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
                        <td>02/05/2018</td>
                        <td>12</td>
                        <td>1</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>02/04/2018</td>
                        <td>16</td>
                        <td>2</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>02/03/2018</td>
                        <td>5</td>
                        <td>0</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>02/02/2018</td>
                        <td>21</td>
                        <td>1</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>02/01/2018</td>
                        <td>16</td>
                        <td>2</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>01/31/2018</td>
                        <td>5</td>
                        <td>0</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td>01/30/2018</td>
                        <td>21</td>
                        <td>1</td>
                        <td>10</td>
                      </tr>
                    </tbody>
                  </Table>
                  <a href="#d" onClick={this.prevent} className="card-footer d-block text-center text-body small font-weight-semibold">SHOW MORE</a>
                </Tab>
                <Tab eventKey="latest-sales" title="Latest sales">
                  <Table className="table card-table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Qty.</th>
                        <th>Sum.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="align-middle">
                          <a href="#d" onClick={this.prevent} className="text-body">PlayStation 4 1TB (Jet Black)</a>
                        </td>
                        <td className="align-middle">1</td>
                        <td className="align-middle">$480.00</td>
                      </tr>
                      <tr>
                        <td className="align-middle">
                          <a href="#d" onClick={this.prevent} className="text-body">Nike Men Black Liteforce III Sneakers</a>
                        </td>
                        <td className="align-middle">2</td>
                        <td className="align-middle">$115.1</td>
                      </tr>
                      <tr>
                        <td className="align-middle">
                          <a href="#d" onClick={this.prevent} className="text-body">Wireless headphones</a>
                        </td>
                        <td className="align-middle">1</td>
                        <td className="align-middle">$235.55</td>
                      </tr>
                      <tr>
                        <td className="align-middle">
                          <a href="#d" onClick={this.prevent} className="text-body">HERO ATHLETES BAG</a>
                        </td>
                        <td className="align-middle">1</td>
                        <td className="align-middle">$160.00</td>
                      </tr>
                      <tr>
                        <td className="align-middle">
                          <a href="#d" onClick={this.prevent} className="text-body">POÄNG</a>
                        </td>
                        <td className="align-middle">3</td>
                        <td className="align-middle">$477.00</td>
                      </tr>
                      <tr>
                        <td className="align-middle">
                          <a href="#d" onClick={this.prevent} className="text-body">Apple iWatch (black)</a>
                        </td>
                        <td className="align-middle">1</td>
                        <td className="align-middle">$399.00</td>
                      </tr>
                      <tr>
                        <td className="align-middle">
                          <a href="#d" onClick={this.prevent} className="text-body">WALKING 400 BLUE CAT3</a>
                        </td>
                        <td className="align-middle">2</td>
                        <td className="align-middle">$41.1</td>
                      </tr>
                    </tbody>
                  </Table>
                  <a href="#d" onClick={this.prevent} className="card-footer d-block text-center text-body small font-weight-semibold">SHOW MORE</a>
                </Tab>
              </Tabs>
            </div>
            {/* / Sales */}

          </Col>
          <Col md={6}>

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
          <Col md={6}>

            {/* Latest comments */}
            <Card className="mb-4">
              <Card.Header as="h6">Latest comments</Card.Header>
              <Card.Body>

                <Media className="pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/9-small.png`} className="d-block ui-w-40 rounded-circle" alt="User avatar" />
                  <Media.Body className="flex-truncate ml-3">
                    <a href="#d" onClick={this.prevent}>Amanda Warner</a>
                    <span className="text-muted mx-1">commented on</span>
                    <a href="#d" onClick={this.prevent}>Article Name</a>
                    <p className="text-truncate my-1">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.</p>
                    <div className="clearfix">
                      <span className="float-left text-muted small">2 hours ago</span>
                    </div>
                  </Media.Body>
                </Media>

                <Media className="pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/8-small.png`} className="d-block ui-w-40 rounded-circle" alt="User avatar" />
                  <Media.Body className="flex-truncate ml-3">
                    <a href="#d" onClick={this.prevent}>Hallie Lewis</a>
                    <span className="text-muted mx-1">commented on</span>
                    <a href="#d" onClick={this.prevent}>Article Name</a>
                    <p className="text-truncate my-1">Vivendum torquatos ut nec, sit audiam deterruisset ei, cu sed nibh autem scriptorem. Ea quo vidit deleniti constituto, ex qui malis mollis iudicabit, viris fabellas id has.</p>
                    <div className="clearfix">
                      <span className="float-left text-muted small">2 hours ago</span>
                    </div>
                  </Media.Body>
                </Media>

                <Media className="pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/7-small.png`} className="d-block ui-w-40 rounded-circle" alt="User avatar" />
                  <Media.Body className="flex-truncate ml-3">
                    <a href="#d" onClick={this.prevent}>Alice Hampton</a>
                    <span className="text-muted mx-1">commented on</span>
                    <a href="#d" onClick={this.prevent}>Article Name</a>
                    <p className="text-truncate my-1">Eam facilis laboramus reprehendunt ei, ex esse fastidii per.</p>
                    <div className="clearfix">
                      <span className="float-left text-muted small">2 hours ago</span>
                    </div>
                  </Media.Body>
                </Media>

                <Media>
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/6-small.png`} className="d-block ui-w-40 rounded-circle" alt="User avatar" />
                  <Media.Body className="flex-truncate ml-3">
                    <a href="#d" onClick={this.prevent}>Mae Gibson</a>
                    <span className="text-muted mx-1">commented on</span>
                    <a href="#d" onClick={this.prevent}>Article Name</a>
                    <p className="text-truncate my-1">Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.</p>
                    <div className="clearfix">
                      <span className="float-left text-muted small">2 hours ago</span>
                    </div>
                  </Media.Body>
                </Media>

              </Card.Body>
              <a href="#d" onClick={this.prevent} className="card-footer d-block text-center text-body small font-weight-semibold">SHOW MORE</a>
            </Card>
            {/* / Latest comments */}

          </Col>
        </Row>
      </div>
    )
  }
}

export default Dashboard3
