import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Lightbox from 'react-image-lightbox'
import '../../vendor/libs/react-image-lightbox/react-image-lightbox.scss'
import Carousel, { Modal, ModalGateway } from 'react-images'

// react-image-lightbox
const images1 = [
  `${process.env.PUBLIC_URL}/img/bg/1.jpg`,
  `${process.env.PUBLIC_URL}/img/bg/2.jpg`,
  `${process.env.PUBLIC_URL}/img/bg/3.jpg`,
  `${process.env.PUBLIC_URL}/img/bg/4.jpg`,
]

// react-images
const images2 = [
  { src: `${process.env.PUBLIC_URL}/img/bg/1.jpg` },
  { src: `${process.env.PUBLIC_URL}/img/bg/2.jpg` },
  { src: `${process.env.PUBLIC_URL}/img/bg/3.jpg` },
  { src: `${process.env.PUBLIC_URL}/img/bg/4.jpg` },
]

class LightboxComponent extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Lightbox - UI elements')

    this.closeModal = this.closeModal.bind(this)

    this.state = {
      // react-image-lightbox
      photoIndex1: 0,
      isOpen1: false,

      // react-images
      photoIndex2: 0,
      isOpen2: false,
    }
  }

  // react-image-lightbox
  openImage(e, imageUrl) {
    e.preventDefault()
    this.setState({
      photoIndex1: images1.indexOf(imageUrl),
      isOpen1: true
    })
  }

  // react-images
  openModal(e, image) {
    e.preventDefault()
    this.setState({
      photoIndex2: images2.indexOf(image),
      isOpen2: true
    })
  }
  closeModal() {
    this.setState({ isOpen2: false })
  }

  render() {
    const isIEMode = typeof document['documentMode'] === 'number'

    // react-image-lightbox
    const nextSrcIndex = (this.state.photoIndex1 + 1) % images1.length
    const prevSrcIndex = (this.state.photoIndex1 + images1.length - 1) % images1.length

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Lightbox
        </h4>

        <hr className="container-m-nx border-light mt-0" />

        <h5 className="font-weight-bold pt-1 pb-1 mt-4 mb-4">react-image-lightbox</h5>

        {/* Images */}
        <Row>
          {images1.map((imageUrl, i) => (
            <Col sm={3} key={imageUrl}>
              <a href={imageUrl} onClick={e => this.openImage(e, imageUrl)} className="img-thumbnail img-thumbnail-shadow">
                <img src={imageUrl} alt={`Example ${i + 1}`} className="w-100" />
              </a>
            </Col>
          ))}
        </Row>

        {/* Lightbox */}
        {this.state.isOpen1 && (
          <Lightbox
            mainSrc={images1[this.state.photoIndex1]}
            nextSrc={images1[nextSrcIndex]}
            prevSrc={images1[prevSrcIndex]}
            onCloseRequest={() => this.setState({ isOpen1: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex1: prevSrcIndex,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex1: nextSrcIndex,
              })
            }
          />
        )}

        {isIEMode && <div className="alert alert-danger mt-4">
          <strong>react-images</strong> doesn't support Internet Explorer 10 and 11
        </div>}

        {!isIEMode && <React.Fragment>
          <hr className="container-m-nx border-light mt-5 mb-4" />

          <h5 className="font-weight-bold pt-1 pb-1 mb-4">react-images</h5>

          {/* Images */}
          <Row>
            {images2.map((image, i) => (
              <Col sm={3} key={image.src}>
                <a href={image.src} onClick={e => this.openModal(e, image)} className="img-thumbnail img-thumbnail-shadow">
                  <img src={image.src} alt={`Example ${i + 1}`} className="w-100" />
                </a>
              </Col>
            ))}
          </Row>

          {/* Lightbox */}
          <ModalGateway>
            {this.state.isOpen2 ? (
              <Modal onClose={this.closeModal} styles={{
                positioner: s => ({ ...s, zIndex: 999999}),
                blanket: s => ({ ...s, zIndex: 999998})
              }}>
                <Carousel views={images2} currentIndex={this.state.photoIndex2} />
              </Modal>
            ) : null}
          </ModalGateway>
        </React.Fragment>}
      </div>
    )
  }
}

export default LightboxComponent
