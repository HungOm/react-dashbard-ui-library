import React, { Component } from 'react'
import { Card, Row, Col, Media, Button } from 'react-bootstrap'

class ProfileV2 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Profile v2 - Pages')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>

        <Row>
          <Col xl={4}>

            {/* Side info */}
            <Card className="mb-4">
              <Card.Body>
                <Media>
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/5.png`} alt="User" className="ui-w-60 rounded-circle" />
                  <Media.Body className="pt-2 ml-3">
                    <h5 className="mb-2">Nellie Maxwell</h5>
                    <div className="text-muted small">UI/UX Designer</div>

                    <div className="mt-2">
                      <a href="#d" onClick={this.prevent} className="text-twitter">
                        <span className="ion ion-logo-twitter"></span>
                      </a>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="#d" onClick={this.prevent} className="text-facebook">
                        <span className="ion ion-logo-facebook"></span>
                      </a>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="#d" onClick={this.prevent} className="text-instagram">
                        <span className="ion ion-logo-instagram"></span>
                      </a>
                    </div>

                    <div className="mt-3">
                      <Button variant="primary rounded-pill" size="sm">+&nbsp; Follow</Button> &nbsp;
                      <Button variant="default icon-btn md-btn-flat rounded-pill" size="sm"><i className="ion ion-md-mail"></i></Button> &nbsp;
                    </div>
                  </Media.Body>
                </Media>
              </Card.Body>
              <hr className="border-light m-0" />
              <Card.Body>
                <div className="mb-2">
                  <span className="text-muted">Birthday:</span>&nbsp;
                  May 3, 1995
                </div>
                <div className="mb-2">
                  <span className="text-muted">Country:</span>&nbsp;&nbsp;
                  <a href="#d" onClick={this.prevent} className="text-body">Canada</a>
                </div>
                <div className="mb-2">
                  <span className="text-muted">Languages:</span>&nbsp;&nbsp;
                  <a href="#d" onClick={this.prevent} className="text-body">English</a>
                </div>
                <div className='mb-4'>
                  <span className="text-muted">Phone:</span>&nbsp;
                  +0 (123) 456 7891
                </div>
                <div className="text-muted">
                  Lorem ipsum dolor sit amet, nibh suavitate qualisque ut nam. Ad harum primis electram duo, porro principes ei has.
                </div>
              </Card.Body>
            </Card>
            {/* / Side info */}

            {/* Links */}
            <Card className="mb-4">
              <Card.Header>Links</Card.Header>
              <Card.Body>
                <Media className="align-items-center pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/uikit/logo-5.png`} className="d-block ui-w-40 rounded-circle" alt="Link" />
                  <Media.Body className="flex-truncate ml-3">
                    <a href="#d" onClick={this.prevent}>Google+</a>
                    <div className="text-muted small text-truncate">plus.google.com/8975983245687028</div>
                  </Media.Body>
                </Media>

                <Media className="align-items-center pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/uikit/logo-6.png`} className="d-block ui-w-40 rounded-circle" alt="Link" />
                  <Media.Body className="flex-truncate ml-3">
                    <a href="#d" onClick={this.prevent}>Twitter</a>
                    <div className="text-muted small text-truncate">twitter.com/username</div>
                  </Media.Body>
                </Media>

                <Media className="align-items-center pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/uikit/logo-7.png`} className="d-block ui-w-40 rounded-circle" alt="Link" />
                  <Media.Body className="flex-truncate ml-3">
                    <a href="#d" onClick={this.prevent}>Instagram</a>
                    <div className="text-muted small text-truncate">instagram.com/username/</div>
                  </Media.Body>
                </Media>

                <Media className="align-items-center">
                  <img src={`${process.env.PUBLIC_URL}/img/uikit/logo-8.png`} className="d-block ui-w-40 rounded-circle" alt="Link" />
                  <Media.Body className="flex-truncate ml-3">
                    <a href="#d" onClick={this.prevent}>Amazingior Design With Perfect Lighting</a>
                    <div className="text-muted small text-truncate">example.com/articles/amazing-classic-interior-design-with-perfect-lighting</div>
                  </Media.Body>
                </Media>
              </Card.Body>
            </Card>
            {/* / Links */}

            {/* Friends */}
            <Card className="mb-4">
              <Card.Header>Friends</Card.Header>
              <Card.Body>
                <Media className="align-items-center pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/2-small.png`} className="d-block ui-w-40 rounded-circle" alt="User" />
                  <Media.Body className="ml-3">
                    <a href="#d" onClick={this.prevent} className="text-body">Leon Wilson</a>
                    <div className="text-muted small">@lwilson</div>
                  </Media.Body>
                  <Button variant="default md-btn-flat" size="sm" className="d-block">Follow</Button>
                </Media>

                <Media className="align-items-center pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/3-small.png`} className="d-block ui-w-40 rounded-circle" alt="User" />
                  <Media.Body className="ml-3">
                    <a href="#d" onClick={this.prevent} className="text-body">Allie Rodriguez</a>
                    <div className="text-muted small">@arodriguez</div>
                  </Media.Body>
                  <Button variant="success" size="sm" className="d-block"><i className="ion ion-md-checkmark"></i> Following</Button>
                </Media>

                <Media className="align-items-center pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/4-small.png`} className="d-block ui-w-40 rounded-circle" alt="User" />
                  <Media.Body className="ml-3">
                    <a href="#d" onClick={this.prevent} className="text-body">Kenneth Frazier</a>
                    <div className="text-muted small">@kfrazier</div>
                  </Media.Body>
                  <Button variant="default md-btn-flat" size="sm" className="d-block">Follow</Button>
                </Media>

                <Media className="align-items-center pb-1 mb-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} className="d-block ui-w-40 rounded-circle" alt="User" />
                  <Media.Body className="ml-3">
                    <a href="#d" onClick={this.prevent} className="text-body">Mike Greene</a>
                    <div className="text-muted small">@mgreene</div>
                  </Media.Body>
                  <Button variant="default md-btn-flat" size="sm" className="d-block">Follow</Button>
                </Media>

                <Media className="align-items-center">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/6-small.png`} className="d-block ui-w-40 rounded-circle" alt="User" />
                  <Media.Body className="ml-3">
                    <a href="#d" onClick={this.prevent} className="text-body">Mae Gibson</a>
                    <div className="text-muted small">@mgibson</div>
                  </Media.Body>
                  <Button variant="default md-btn-flat" size="sm" className="d-block">Follow</Button>
                </Media>
              </Card.Body>
            </Card>
            {/* / Friends */}

          </Col>
          <Col>

            {/* Info */}
            <div className="row no-gutters row-bordered ui-bordered text-center mb-4">
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
              <a href="#d" onClick={this.prevent} className="d-flex col flex-column text-body py-3">
                <div className="font-weight-bold">234</div>
                <div className="text-muted small">followers</div>
              </a>
              <a href="#d" onClick={this.prevent} className="d-flex col flex-column text-body py-3">
                <div className="font-weight-bold">111</div>
                <div className="text-muted small">following</div>
              </a>
            </div>
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
        </Row>

      </div>
    )
  }
}

export default ProfileV2
