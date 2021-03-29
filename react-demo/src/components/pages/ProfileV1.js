import React, { Component } from 'react'
import { Card, Row, Col, Media, Button } from 'react-bootstrap'

class ProfileV1 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Profile v1 - Pages')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>

        {/* Header */}
        <div className="container-m-nx container-m-ny bg-white mb-4">
          <Media as={Col} md={10} lg={8} xl={7} className="py-5 mx-auto">
            <img src={`${process.env.PUBLIC_URL}/img/avatars/5.png`} alt="User" className="d-block ui-w-100 rounded-circle" />
            <Media.Body className="ml-5">
              <h4 className="font-weight-bold mb-4">Nellie Maxwell</h4>

              <div className="text-muted mb-4">
                Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad harum primis electram duo, porro principes ei has.
              </div>

              <a href="#d" onClick={this.prevent} className="d-inline-block text-body">
                <strong>234</strong>&nbsp;
                <span className="text-muted">followers</span>
              </a>
              <a href="#d" onClick={this.prevent} className="d-inline-block text-body ml-3">
                <strong>111</strong>&nbsp;
                <span className="text-muted">following</span>
              </a>
            </Media.Body>
          </Media>
          <hr className="m-0" />
        </div>
        {/* Header */}

        <Row>
          <Col>

            {/* Info */}
            <Card className="mb-4">
              <Card.Body>

                <Row className="mb-2">
                  <Col md={3} className="text-muted">Birthday:</Col>
                  <Col md={9}>
                    May 3, 1995
                  </Col>
                </Row>

                <Row className="mb-2">
                  <Col md={3} className="text-muted">Country:</Col>
                  <Col md={9}>
                    <a href="#d" onClick={this.prevent} className="text-body">Canada</a>
                  </Col>
                </Row>

                <Row className="mb-2">
                  <Col md={3} className="text-muted">Languages:</Col>
                  <Col md={9}>
                    <a href="#d" onClick={this.prevent} className="text-body">English</a>
                  </Col>
                </Row>

                <h6 className="my-3">Contacts</h6>

                <Row className="mb-2">
                  <Col md={3} className="text-muted">Phone:</Col>
                  <Col md={9}>
                    +0 (123) 456 7891
                  </Col>
                </Row>

                <h6 className="my-3">Interests</h6>

                <Row className="mb-2">
                  <Col md={3} className="text-muted">Favorite music:</Col>
                  <Col md={9}>
                    <a href="#d" onClick={this.prevent} className="text-body">Rock</a>,&nbsp;
                    <a href="#d" onClick={this.prevent} className="text-body">Alternative</a>,&nbsp;
                    <a href="#d" onClick={this.prevent} className="text-body">Electro</a>,&nbsp;
                    <a href="#d" onClick={this.prevent} className="text-body">Drum &amp; Bass</a>,&nbsp;
                    <a href="#d" onClick={this.prevent} className="text-body">Dance</a>
                  </Col>
                </Row>

                <Row>
                  <Col md={3} className="text-muted">Favorite movies:</Col>
                  <Col md={9}>
                    <a href="#d" onClick={this.prevent} className="text-body">The Green Mile</a>,&nbsp;
                    <a href="#d" onClick={this.prevent} className="text-body">Pulp Fiction</a>,&nbsp;
                    <a href="#d" onClick={this.prevent} className="text-body">Back to the Future</a>,&nbsp;
                    <a href="#d" onClick={this.prevent} className="text-body">WALL·E</a>,&nbsp;
                    <a href="#d" onClick={this.prevent} className="text-body">Django Unchained</a>,&nbsp;
                    <a href="#d" onClick={this.prevent} className="text-body">The Truman Show</a>,&nbsp;
                    <a href="#d" onClick={this.prevent} className="text-body">Home Alone</a>,&nbsp;
                    <a href="#d" onClick={this.prevent} className="text-body">Seven Pounds</a>
                  </Col>
                </Row>

              </Card.Body>
              <Card.Footer className="text-center p-0">
                <Row noGutters className="row-bordered row-border-light">
                  <a href="#d" onClick={this.prevent} className="d-flex col flex-column text-body py-3">
                    <div className="font-weight-bold">24</div>
                    <div className="text-muted small">posts</div>
                  </a>
                  <a href="#d" onClick={this.prevent} className="d-flex col flex-column text-body py-3">
                    <div className="font-weight-bold">51</div>
                    <div className="text-muted small">videos</div>
                  </a>
                  <a href="#d" onClick={this.prevent} className="d-flex col flex-column text-body py-3">
                    <div className="font-weight-bold">215</div>
                    <div className="text-muted small">photos</div>
                  </a>
                </Row>
              </Card.Footer>
            </Card>
            {/* / Info */}

            {/* Posts */}

            <Card className="mb-4">
              <Card.Body>
                <p>
                  Aliquam varius euismod lectus, vel consectetur nibh tincidunt vitae. In non dignissim est. Sed eu ligula metus. Vivamus eget quam sit amet risus venenatis laoreet ut vel magna. Sed dui ligula, tincidunt in nunc eu, rhoncus iaculis nisi.
                </p>
                <p>
                  Sed et convallis odio, vel laoreet tellus. Vivamus a leo eu metus porta pulvinar. Pellentesque tristique varius rutrum.
                </p>
                <div className="ui-bordered">
                  <a href="#d" onClick={this.prevent} className="ui-rect ui-bg-cover text-white" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/1.jpg')` }}>
                    <div className="d-flex justify-content-start align-items-end ui-rect-content p-2">
                      <div className="bg-dark rounded text-white small py-1 px-2">
                        <i className="ion ion-md-link"></i> &nbsp; external.com/some/page
                      </div>
                    </div>
                  </a>
                  <div className="p-4">
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                    Duis ut quam nec mi bibendum finibus et id tortor. Maecenas tristique dolor enim, sed tristique sem cursus et. Etiam tempus iaculis blandit. Vivamus a justo a elit bibendum pulvinar ut non erat. Cras in purus sed leo mattis consequat viverra id arcu.
                  </div>
                </div>
              </Card.Body>

              <Card.Footer>
                <a href="#d" onClick={this.prevent} className="d-inline-block text-muted">
                  <small className="align-middle">
                    <strong>123</strong> Likes</small>
                </a>
                <a href="#d" onClick={this.prevent} className="d-inline-block text-muted ml-3">
                  <small className="align-middle">
                    <strong>12</strong> Comments</small>
                </a>
                <a href="#d" onClick={this.prevent} className="d-inline-block text-muted ml-3">
                  <i className="ion ion-md-share align-middle"></i>&nbsp;
                  <small className="align-middle">Repost</small>
                </a>
              </Card.Footer>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus commodo bibendum. Vivamus laoreet blandit odio, vel finibus quam dictum ut.
                </p>
                <a href="#d" onClick={this.prevent} className="ui-rect ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/6.jpg')` }}><span className="sr-only">Post image</span></a>
              </Card.Body>
              <Card.Footer>
                <a href="#d" onClick={this.prevent} className="d-inline-block text-muted">
                  <small className="align-middle">
                    <strong>123</strong> Likes</small>
                </a>
                <a href="#d" onClick={this.prevent} className="d-inline-block text-muted ml-3">
                  <small className="align-middle">
                    <strong>12</strong> Comments</small>
                </a>
                <a href="#d" onClick={this.prevent} className="d-inline-block text-muted ml-3">
                  <i className="ion ion-md-share align-middle"></i>&nbsp;
                  <small className="align-middle">Repost</small>
                </a>
              </Card.Footer>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <p>
                  Aliquam viverra ornare tincidunt. Vestibulum sit amet vestibulum quam. Donec eu est non velit rhoncus interdum eget vel lorem.
                </p>

                <div className="border-top-0 border-right-0 border-bottom-0 ui-bordered pl-3 mt-4 mb-2">
                  <Media className="mb-3">
                    <img src={`${process.env.PUBLIC_URL}/img/avatars/4-small.png`} className="d-block ui-w-40 rounded-circle" alt="Post" />
                    <Media.Body className="ml-3">
                      Kenneth Frazier
                      <div className="text-muted small">3 days ago</div>
                    </Media.Body>
                  </Media>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus commodo bibendum. Vivamus laoreet blandit odio, vel finibus quam dictum ut.
                  </p>
                  <a href="#d" onClick={this.prevent} className="ui-rect ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/8.jpg')` }}><span className="sr-only">Post image</span></a>
                </div>
                <a href="#d" onClick={this.prevent} className="text-muted small">Reposted from @kfrazier/posts/123</a>
              </Card.Body>

              <Card.Footer>
                <a href="#d" onClick={this.prevent} className="d-inline-block text-muted">
                  <small className="align-middle">
                    <strong>123</strong> Likes</small>
                </a>
                <a href="#d" onClick={this.prevent} className="d-inline-block text-muted ml-3">
                  <small className="align-middle">
                    <strong>12</strong> Comments</small>
                </a>
                <a href="#d" onClick={this.prevent} className="d-inline-block text-muted ml-3">
                  <i className="ion ion-md-share align-middle"></i>&nbsp;
                  <small className="align-middle">Repost</small>
                </a>
              </Card.Footer>
            </Card>

            {/* / Posts */}

          </Col>
          <Col xl={4}>

            {/* Side info */}
            <Card className="mb-4">
              <Card.Body>
                <Button variant="primary rounded-pill">+&nbsp; Follow</Button> &nbsp;
                <Button variant="default icon-btn md-btn-flat rounded-pill"><i className="ion ion-md-mail"></i></Button>
              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body>
                <p className="mb-2">
                  <i className="ion ion-md-desktop ui-w-30 text-center text-lighter"></i> UI/UX Designer</p>
                <p className="mb-2">
                  <i className="ion ion-ios-navigate ui-w-30 text-center text-lighter"></i> London, United Kingdom</p>
                <p className="mb-0">
                  <i className="ion ion-md-globe ui-w-30 text-center text-lighter"></i>&nbsp;
                  <a href="#d" onClick={this.prevent} className="text-body">website.com</a>
                </p>
              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body>
                <a href="#d" onClick={this.prevent} className="d-block text-body mb-2">
                  <i className="ion ion-logo-twitter ui-w-30 text-center text-twitter"></i> @nmaxwell
                </a>
                <a href="#d" onClick={this.prevent} className="d-block text-body mb-2">
                  <i className="ion ion-logo-facebook ui-w-30 text-center text-facebook"></i> nmaxwell
                </a>
                <a href="#d" onClick={this.prevent} className="d-block text-body mb-0">
                  <i className="ion ion-logo-instagram ui-w-30 text-center text-instagram"></i> nmaxwell
                </a>
              </Card.Body>
            </Card>
            {/* / Side info */}

            {/* Skills */}
            <Card className="mb-4">
              <Card.Header>Skills</Card.Header>
              <Card.Body>
                <div className="mb-1">HTML - <small className="text-muted">80%</small></div>
                <div className="progress mb-3" style={{ height: '4px' }}>
                  <div className="progress-bar bg-secondary" style={{ width: '80%' }}></div>
                </div>

                <div className="mb-1">CSS - <small className="text-muted">95%</small></div>
                <div className="progress mb-3" style={{ height: '4px' }}>
                  <div className="progress-bar bg-success" style={{ width: '95%' }}></div>
                </div>

                <div className="mb-1">Javascript - <small className="text-muted">90%</small></div>
                <div className="progress mb-3" style={{ height: '4px' }}>
                  <div className="progress-bar bg-warning" style={{ width: '90%' }}></div>
                </div>

                <div className="mb-1">UI/UX - <small className="text-muted">80%</small></div>
                <div className="progress" style={{ height: '4px' }}>
                  <div className="progress-bar bg-danger" style={{ width: '80%' }}></div>
                </div>
              </Card.Body>
              <Card.Footer>
                <a href="#d" onClick={this.prevent} className="d-block text-center text-body small font-weight-semibold">SHOW ALL SKILLS</a>
              </Card.Footer>
            </Card>
            {/* / Skills */}

            {/* Friends */}
            <Card className="mb-4">
              <Card.Header className="with-elements">
                <span className="card-header-title">Friends &nbsp;
                  <small className="text-muted">591</small>
                </span>
                <div className="card-header-elements ml-md-auto">
                  <a href="#d" onClick={this.prevent} className="btn btn-default md-btn-flat btn-xs">Show All</a>
                </div>
              </Card.Header>
              <Row noGutters className="row-bordered row-border-light">
                <a href="#d" onClick={this.prevent} className="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-body py-3 px-2">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/2-small.png`} alt="User" className="d-block ui-w-40 rounded-circle mb-2" />
                  <div className="text-center small">Leon Wilson</div>
                </a>
                <a href="#d" onClick={this.prevent} className="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-body py-3 px-2">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/3-small.png`} alt="User" className="d-block ui-w-40 rounded-circle mb-2" />
                  <div className="text-center small">Allie Rodriguez</div>
                </a>
                <a href="#d" onClick={this.prevent} className="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-body py-3 px-2">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/4-small.png`} alt="User" className="d-block ui-w-40 rounded-circle mb-2" />
                  <div className="text-center small">Kenneth Frazier</div>
                </a>
                <a href="#d" onClick={this.prevent} className="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-body py-3 px-2">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/5-small.png`} alt="User" className="d-block ui-w-40 rounded-circle mb-2" />
                  <div className="text-center small">Nellie Maxwell</div>
                </a>
                <a href="#d" onClick={this.prevent} className="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-body py-3 px-2">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/6-small.png`} alt="User" className="d-block ui-w-40 rounded-circle mb-2" />
                  <div className="text-center small">Mae Gibson</div>
                </a>
                <a href="#d" onClick={this.prevent} className="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-body py-3 px-2">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/7-small.png`} alt="User" className="d-block ui-w-40 rounded-circle mb-2" />
                  <div className="text-center small">Alice Hampton</div>
                </a>
                <a href="#d" onClick={this.prevent} className="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-body py-3 px-2">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/11-small.png`} alt="User" className="d-block ui-w-40 rounded-circle mb-2" />
                  <div className="text-center small">Belle Ross</div>
                </a>
                <a href="#d" onClick={this.prevent} className="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-body py-3 px-2">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/12-small.png`} alt="User" className="d-block ui-w-40 rounded-circle mb-2" />
                  <div className="text-center small">Arthur Duncan</div>
                </a>
                <a href="#d" onClick={this.prevent} className="d-flex col-4 col-sm-3 col-md-4 flex-column align-items-center text-body py-3 px-2">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/9-small.png`} alt="User" className="d-block ui-w-40 rounded-circle mb-2" />
                  <div className="text-center small">Amanda Warner</div>
                </a>
              </Row>
            </Card>
            {/* / Friends */}

            {/* Photos */}
            <Card className="mb-4">
              <Card.Header className="with-elements">
                <span className="card-header-title">Photos</span>
                <div className="card-header-elements ml-2">
                  <small className="text-muted">54</small>
                </div>
                <div className="card-header-elements ml-md-auto">
                  <a href="#d" onClick={this.prevent} className="btn btn-default md-btn-flat btn-xs">Show More</a>
                </div>
              </Card.Header>
              <Row noGutters className="align-items-start pt-1 pl-1">

                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/1.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/2.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/3.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/4.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/5.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/6.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/7.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/8.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/9.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/10.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/11.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/12.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/13.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/14.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/15.jpg')` }} />
                </a>
                <a href="#d" onClick={this.prevent} className="d-block col-3 col-sm-2 col-lg-3 pr-1 pb-1">
                  <span className="d-block ui-square ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/16.jpg')` }} />
                </a>

              </Row>
            </Card>
            {/* / Photos */}

          </Col>
        </Row>

      </div>
    )
  }
}

export default ProfileV1
