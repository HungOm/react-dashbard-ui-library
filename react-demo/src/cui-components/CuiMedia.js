import React, { Component } from 'react'
import { Media } from 'react-bootstrap'

class CuiMedia extends Component {
  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Media</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example">
          <Media>
            <a href="#d" onClick={this.prevent} className="d-flex mr-3">
              <img src={`${process.env.PUBLIC_URL}/img/avatars/1-small.png`} alt="User avatar" style={{width:'46px',height:'46px'}} className="rounded" />
            </a>
            <Media.Body>
              <a href="#d" onClick={this.prevent}>Mike Greene</a>&nbsp;
              <span className="text-muted">commented on</span>&nbsp;
              <a href="#d" onClick={this.prevent}>Article Name</a>
              <p className="my-1">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
              <a href="#d" onClick={this.prevent} className="d-block float-right text-muted small"><span className="ion ion-ios-thumbs-down"></span></a>
              <a href="#d" onClick={this.prevent} className="d-block float-right text-muted small"><span className="ion ion-ios-thumbs-up mr-2"></span></a>
              <span className="d-block float-left text-muted small">2 hours ago</span>
            </Media.Body>
          </Media>

          <hr />

          <Media>
            <a href="#d" onClick={this.prevent} className="d-flex mr-3">
              <img src={`${process.env.PUBLIC_URL}/img/avatars/2-small.png`} alt="User avatar" style={{width:'46px',height:'46px'}} className="rounded" />
            </a>
            <Media.Body>
              <a href="#d" onClick={this.prevent}>Leon Wilson</a>&nbsp;
              <span className="text-muted">commented on</span>&nbsp;
              <a href="#d" onClick={this.prevent}>Article Name</a>
              <p className="my-1">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
              <a href="#d" onClick={this.prevent} className="d-block float-right text-muted small"><span className="ion ion-ios-thumbs-down"></span></a>
              <a href="#d" onClick={this.prevent} className="d-block float-right text-muted small"><span className="ion ion-ios-thumbs-up mr-2"></span></a>
              <span className="d-block float-left text-muted small">2 hours ago</span>
            </Media.Body>
          </Media>

          <hr />

          <Media>
            <a href="#d" onClick={this.prevent} className="d-flex mr-3">
              <img src={`${process.env.PUBLIC_URL}/img/avatars/3-small.png`} alt="User avatar" style={{width:'46px',height:'46px'}} className="rounded" />
            </a>
            <Media.Body>
              <a href="#d" onClick={this.prevent}>Allie Rodriguez</a>&nbsp;
              <span className="text-muted">commented on</span>&nbsp;
              <a href="#d" onClick={this.prevent}>Article Name</a>
              <p className="my-1">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
              <a href="#d" onClick={this.prevent} className="d-block float-right text-muted small"><span className="ion ion-ios-thumbs-down"></span></a>
              <a href="#d" onClick={this.prevent} className="d-block float-right text-muted small"><span className="ion ion-ios-thumbs-up mr-2"></span></a>
              <span className="d-block float-left text-muted small">2 hours ago</span>
            </Media.Body>
          </Media>
        </div>

        <h4 className="ui-block-heading">Nesting</h4>

        <div className="cui-example">
          <Media>
            <a href="#d" onClick={this.prevent} className="d-flex mr-3">
              <img src={`${process.env.PUBLIC_URL}/img/avatars/4-small.png`} alt="User avatar" style={{width:'46px',height:'46px'}} className="rounded" />
            </a>
            <Media.Body>
              <a href="#d" onClick={this.prevent}>Kenneth Frazier</a> <span className="text-muted small">14 hours ago</span>
              <p className="my-1">
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>
              <a href="#d" onClick={this.prevent} className="text-muted small"><span className="ion ion-ios-thumbs-up"></span></a>&nbsp;&nbsp;
              <a href="#d" onClick={this.prevent} className="text-muted small"><span className="ion ion-ios-thumbs-down"></span></a>
              <span className="text-muted small">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
              <a href="#d" onClick={this.prevent} className="text-muted small">Reply</a>

              <Media className="mt-3">
                <a href="#d" onClick={this.prevent} className="d-flex mr-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/5-small.png`} alt="User avatar" style={{width:'32px',height:'32px'}} className="rounded" />
                </a>
                <Media.Body>
                  <a href="#d" onClick={this.prevent}>Nelle Maxwell</a> <span className="text-muted small">14 hours ago</span>
                  <p className="my-1">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                  </p>
                  <a href="#d" onClick={this.prevent} className="text-muted small"><span className="ion ion-ios-thumbs-up"></span></a>&nbsp;&nbsp;
                  <a href="#d" onClick={this.prevent} className="text-muted small"><span className="ion ion-ios-thumbs-down"></span></a>
                  <span className="text-muted small">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                  <a href="#d" onClick={this.prevent} className="text-muted small">Reply</a>

                  <Media className="mt-3">
                    <a href="#d" onClick={this.prevent} className="d-flex mr-3">
                      <img src={`${process.env.PUBLIC_URL}/img/avatars/6-small.png`} alt="User avatar" style={{width:'32px',height:'32px'}} className="rounded" />
                    </a>
                    <Media.Body>
                      <a href="#d" onClick={this.prevent}>Nelle Maxwell</a> <span className="text-muted small">14 hours ago</span>
                      <p className="my-1">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                        Donec lacinia congue felis in faucibus.
                      </p>
                      <a href="#d" onClick={this.prevent} className="text-muted small"><span className="ion ion-ios-thumbs-up"></span></a>&nbsp;&nbsp;
                      <a href="#d" onClick={this.prevent} className="text-muted small"><span className="ion ion-ios-thumbs-down"></span></a>
                      <span className="text-muted small">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                      <a href="#d" onClick={this.prevent} className="text-muted small">Reply</a>
                    </Media.Body>
                  </Media>
                </Media.Body>
              </Media>

              <Media className="mt-3">
                <a href="#d" onClick={this.prevent} className="d-flex mr-3">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/7-small.png`} alt="User avatar" style={{width:'32px',height:'32px'}} className="rounded" />
                </a>
                <Media.Body>
                  <a href="#d" onClick={this.prevent}>Alice Hampton</a> <span className="text-muted small">14 hours ago</span>
                  <p className="my-1">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                    Donec lacinia congue felis in faucibus.
                  </p>
                  <a href="#d" onClick={this.prevent} className="text-muted small"><span className="ion ion-ios-thumbs-up"></span></a>&nbsp;&nbsp;
                  <a href="#d" onClick={this.prevent} className="text-muted small"><span className="ion ion-ios-thumbs-down"></span></a>
                  <span className="text-muted small">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                  <a href="#d" onClick={this.prevent} className="text-muted small">Reply</a>
                </Media.Body>
              </Media>

            </Media.Body>
          </Media>
        </div>
      </div>
    )
  }
}

export default CuiMedia
