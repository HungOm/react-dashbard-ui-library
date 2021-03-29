import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class CuiThumbnails extends Component {
  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Thumbnails</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example">
          <Row>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail">
                <img src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail">
                <img src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail">
                <img src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail">
                <img src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
          </Row>
        </div>

        <h4 className="ui-block-heading">With overlay</h4>

        <div className="cui-example">
          <Row>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail">
                <div className="img-thumbnail-overlay bg-dark opacity-25"></div>
                <img src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail">
                <div className="img-thumbnail-overlay bg-primary opacity-50"></div>
                <img src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail">
                <div className="img-thumbnail-overlay bg-success opacity-25"></div>
                <img src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail">
                <div className="img-thumbnail-overlay bg-white opacity-50"></div>
                <img src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
          </Row>
        </div>

        <h4 className="ui-block-heading">With overlay and content</h4>

        <div className="cui-example">
          <Row>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail">
                <span className="img-thumbnail-overlay bg-dark opacity-25"></span>
                <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
                <img src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail">
                <span className="img-thumbnail-overlay bg-primary opacity-50"></span>
                <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
                <img src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail">
                <span className="img-thumbnail-overlay bg-success opacity-25"></span>
                <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
                <img src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail">
                <span className="img-thumbnail-overlay bg-white opacity-75"></span>
                <span className="img-thumbnail-content text-secondary text-xlarge"><i className="ion ion-ios-search"></i></span>
                <img src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
          </Row>
        </div>

        <h4 className="ui-block-heading">Shadow on hover</h4>

        <div className="cui-example">
          <Row>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-shadow">
                <span className="img-thumbnail-overlay bg-dark opacity-25"></span>
                <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
                <img src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-shadow">
                <span className="img-thumbnail-overlay bg-primary opacity-50"></span>
                <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
                <img src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-shadow">
                <span className="img-thumbnail-overlay bg-success opacity-25"></span>
                <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
                <img src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-shadow">
                <span className="img-thumbnail-overlay bg-white opacity-75"></span>
                <span className="img-thumbnail-content text-secondary text-xlarge"><i className="ion ion-ios-search"></i></span>
                <img src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
          </Row>
        </div>

        <h4 className="ui-block-heading">Zoom In animation on hover</h4>

        <div className="cui-example">
          <Row>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-zoom-in">
                <span className="img-thumbnail-overlay bg-dark opacity-25"></span>
                <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
                <img src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-zoom-in">
                <span className="img-thumbnail-overlay bg-primary opacity-50"></span>
                <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
                <img src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-zoom-in">
                <span className="img-thumbnail-overlay bg-success opacity-25"></span>
                <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
                <img src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
            <Col md>
              <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-zoom-in">
                <span className="img-thumbnail-overlay bg-white opacity-75"></span>
                <span className="img-thumbnail-content text-secondary text-xlarge"><i className="ion ion-ios-search"></i></span>
                <img src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Preview" className="img-fluid" />
              </a>
            </Col>
          </Row>
        </div>

      </div>
    )
  }
}

export default CuiThumbnails
