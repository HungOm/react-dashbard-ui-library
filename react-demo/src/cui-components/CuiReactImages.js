import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import Carousel, { Modal, ModalGateway } from 'react-images'

const images = [
  { src: `${process.env.PUBLIC_URL}/img/bg/1.jpg` },
  { src: `${process.env.PUBLIC_URL}/img/bg/2.jpg` },
  { src: `${process.env.PUBLIC_URL}/img/bg/3.jpg` },
  { src: `${process.env.PUBLIC_URL}/img/bg/4.jpg` },
]

class CuiReactImages extends Component {
  constructor(props) {
    super(props)

    this.closeModal = this.closeModal.bind(this)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }
  
  openModal (e, image) {
    e.preventDefault()
    this.setState({
      photoIndex: images.indexOf(image),
      isOpen: true
    })
  }
  
  closeModal () {
    this.setState({ isOpen: false })
  }
 
  render() {
    const isIEMode = typeof document['documentMode'] === 'number'

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-images</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/jossmac/react-images" className="ui-block-description">https://github.com/jossmac/react-images</a>

        <div className="alert alert-warning rtl-only mt-5">
          <strong>react-images</strong> does not support RTL mode.
        </div>

        <div className="no-ie10" data-name="react-images"></div>

        {!isIEMode && <React.Fragment>
          <h4 className="ui-block-heading">Examples</h4>

          <div className="cui-example cui-example-vertical-spacing">
            {/* Images */}
            <Row>
              {images.map((image, i) => (
                <Col sm={3} key={image.src}>
                  <a href={image.src} onClick={e => this.openModal(e, image)} className="img-thumbnail img-thumbnail-shadow">
                    <img src={image.src} alt={`Example ${i + 1}`} className="w-100" />
                  </a>
                </Col>
              ))}
            </Row>

            {/* Lightbox */}
            <ModalGateway>
              {this.state.isOpen ? (
                <Modal onClose={this.closeModal}>
                  <Carousel views={images} currentIndex={this.state.photoIndex} />
                </Modal>
              ) : null}
            </ModalGateway>
          </div>
        </React.Fragment>}
      </div>
    )
  }
}

export default CuiReactImages
