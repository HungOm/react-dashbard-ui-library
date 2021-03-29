import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import Lightbox from 'react-image-lightbox'
import '../vendor/libs/react-image-lightbox/react-image-lightbox.scss'

const images = [
  `${process.env.PUBLIC_URL}/img/bg/1.jpg`,
  `${process.env.PUBLIC_URL}/img/bg/2.jpg`,
  `${process.env.PUBLIC_URL}/img/bg/3.jpg`,
  `${process.env.PUBLIC_URL}/img/bg/4.jpg`,
]

class CuiReactImageLightbox extends Component {
  constructor (props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  openImage (e, imageUrl) {
    e.preventDefault()
    this.setState({
      photoIndex: images.indexOf(imageUrl),
      isOpen: true
    })
  }

  render() {
    const nextSrcIndex = (this.state.photoIndex + 1) % images.length
    const prevSrcIndex = (this.state.photoIndex + images.length - 1) % images.length

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-image-lightbox</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/frontend-collective/react-image-lightbox" className="ui-block-description">https://github.com/frontend-collective/react-image-lightbox</a>

        <div className="alert alert-warning rtl-only mt-5">
          <strong>react-image-lightbox</strong> does not support RTL mode.
        </div>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example cui-example-vertical-spacing">
          {/* Images */}
          <Row>
            {images.map((imageUrl, i) => (
              <Col sm={3} key={imageUrl}>
                <a href={imageUrl} onClick={e => this.openImage(e, imageUrl)} className="img-thumbnail img-thumbnail-shadow">
                  <img src={imageUrl} alt={`Example ${i + 1}`} className="w-100" />
                </a>
              </Col>
            ))}
          </Row>

          {/* Lightbox */}
          {this.state.isOpen && (
            <Lightbox
              mainSrc={images[this.state.photoIndex]}
              nextSrc={images[nextSrcIndex]}
              prevSrc={images[prevSrcIndex]}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: prevSrcIndex,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: nextSrcIndex,
                })
              }
            />
          )}
        </div>
      </div>
    )
  }
}

export default CuiReactImageLightbox
