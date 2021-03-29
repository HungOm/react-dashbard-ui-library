import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

class Thumbnails extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Thumbnails - UI elements')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Thumbnails
        </h4>

        <Row>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail">
              <img src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail">
              <img src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail">
              <img src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail">
              <img src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
        </Row>

        <h6 className="pb-1 mt-5 mb-4">With overlay</h6>

        <Row>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail">
              <div className="img-thumbnail-overlay bg-dark opacity-25"></div>
              <img src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail">
              <div className="img-thumbnail-overlay bg-primary opacity-50"></div>
              <img src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail">
              <div className="img-thumbnail-overlay bg-success opacity-25"></div>
              <img src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail">
              <div className="img-thumbnail-overlay bg-white opacity-50"></div>
              <img src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
        </Row>

        <h6 className="pb-1 mt-5 mb-4">With overlay and content</h6>

        <Row>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail">
              <span className="img-thumbnail-overlay bg-dark opacity-25"></span>
              <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
              <img src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail">
              <span className="img-thumbnail-overlay bg-primary opacity-50"></span>
              <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
              <img src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail">
              <span className="img-thumbnail-overlay bg-success opacity-25"></span>
              <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
              <img src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail">
              <span className="img-thumbnail-overlay bg-white opacity-75"></span>
              <span className="img-thumbnail-content text-secondary text-xlarge"><i className="ion ion-ios-search"></i></span>
              <img src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
        </Row>

        <h6 className="pb-1 mt-5 mb-4">Shadow on hover</h6>

        <Row>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-shadow">
              <span className="img-thumbnail-overlay bg-dark opacity-25"></span>
              <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
              <img src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-shadow">
              <span className="img-thumbnail-overlay bg-primary opacity-50"></span>
              <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
              <img src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-shadow">
              <span className="img-thumbnail-overlay bg-success opacity-25"></span>
              <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
              <img src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-shadow">
              <span className="img-thumbnail-overlay bg-white opacity-75"></span>
              <span className="img-thumbnail-content text-secondary text-xlarge"><i className="ion ion-ios-search"></i></span>
              <img src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
        </Row>

        <h6 className="pb-1 mt-5 mb-4">Zoom In animation on hover</h6>

        <Row>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-zoom-in">
              <span className="img-thumbnail-overlay bg-dark opacity-25"></span>
              <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
              <img src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-zoom-in">
              <span className="img-thumbnail-overlay bg-primary opacity-50"></span>
              <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
              <img src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-zoom-in">
              <span className="img-thumbnail-overlay bg-success opacity-25"></span>
              <span className="img-thumbnail-content text-white text-xlarge"><i className="ion ion-ios-search"></i></span>
              <img src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
          <Col sm={6} xl={3} className="mb-4">
            <a href="#d" onClick={this.prevent} className="img-thumbnail img-thumbnail-zoom-in">
              <span className="img-thumbnail-overlay bg-white opacity-75"></span>
              <span className="img-thumbnail-content text-secondary text-xlarge"><i className="ion ion-ios-search"></i></span>
              <img src={`${process.env.PUBLIC_URL}/img/bg/4.jpg`} alt="Preview" className="img-fluid" />
            </a>
          </Col>
        </Row>

      </div>
    )
  }
}

export default Thumbnails
