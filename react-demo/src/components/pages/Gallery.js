import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import { Nav, Col, Modal } from 'react-bootstrap'
import Lightbox from 'react-image-lightbox'
import '../../vendor/libs/react-image-lightbox/react-image-lightbox.scss'

class Gallery extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Gallery - Pages')

    this.state ={
      curTag: 'all',
      galleryIndex: null,
      lightboxOpened: false,
      originalGalleryImages: [
        { url: 'img/bg/1.jpg', altText: '', tag: 'nature' },
        { url: 'img/bg/2.jpg', altText: '', tag: 'car' },
        { url: 'img/bg/3.jpg', altText: '', tag: 'other' },
        { url: 'img/bg/4.jpg', altText: '', tag: 'other' },
        { url: 'img/bg/5.jpg', altText: '', tag: 'other' },
        { url: 'img/bg/6.jpg', altText: '', tag: 'nature' },
        { url: 'img/bg/7.jpg', altText: '', tag: 'nature' },
        { url: 'img/bg/8.jpg', altText: '', tag: 'car' },
        { url: 'img/bg/9.jpg', altText: '', tag: 'animal' },
        { url: 'img/bg/10.jpg', altText: '', tag: 'animal' },
        { url: 'img/bg/11.jpg', altText: '', tag: 'other' },
        { url: 'img/bg/12.jpg', altText: '', tag: 'other' },
        { url: 'img/bg/13.jpg', altText: '', tag: 'nature' },
        { url: 'img/bg/14.jpg', altText: '', tag: 'animal' },
        { url: 'img/bg/15.jpg', altText: '', tag: 'other' },
        { url: 'img/bg/16.jpg', altText: '', tag: 'other' }
      ]
    }
  }

  openImage(e, galleryIndex) {
    e.preventDefault()
    this.setState({ lightboxOpened: true, galleryIndex })
  }

  get galleryImages() {
    const images = this.state.curTag === 'all'
      ? this.state.originalGalleryImages
      : this.state.originalGalleryImages.filter(img => img.tag === this.state.curTag)

    return images.map(img => {
      return Object.assign({}, img, { url: process.env.PUBLIC_URL + '/' + img.url })
    })
  }

  get galleryImageLinks () {
    return this.galleryImages.map(img => img.url)
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
    const isIE10Mode = document['documentMode'] === 10
    const masonryOptions = {
      transitionDuration: '0.3s',
      itemSelector: '.gallery-thumbnail',
      columnWidth: '.gallery-sizer',
      originLeft: !isRTL
    }
    const nextSrcIndex = (this.state.galleryIndex + 1) % this.galleryImages.length
    const prevSrcIndex = (this.state.galleryIndex + this.galleryImages.length - 1) % this.galleryImages.length

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          Gallery
        </h4>

        <Nav variant="tabs tabs-alt" className="mb-4" activeKey={this.state.curTag} onSelect={curTag => this.setState({ curTag })}>
          <Nav.Item>
            <Nav.Link eventKey="all">All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="nature">Nature</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="car">Cars</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="animal">Animal</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="other">Other</Nav.Link>
          </Nav.Item>
        </Nav>

        {!isIE10Mode && !isRTL && this.state.lightboxOpened && (
          <Lightbox
            mainSrc={this.galleryImages[this.state.galleryIndex].url}
            nextSrc={this.galleryImages[nextSrcIndex].url}
            prevSrc={this.galleryImages[prevSrcIndex].url}
            onCloseRequest={() => this.setState({ lightboxOpened: false })}
            onMovePrevRequest={() =>
              this.setState({
                galleryIndex: prevSrcIndex,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                galleryIndex: nextSrcIndex,
              })
            }
          />
        )}

        {/* RTL mode and IE10 fallback */}
        {(isIE10Mode || isRTL) && <Modal size="xl" show={this.state.galleryIndex !== null} onHide={() => this.setState({ galleryIndex: null })}>
          <button className="close position-absolute text-white opacity-100 px-3" style={{ fontSize:'40px',right:'0',zIndex:3 }} onClick={() => this.setState({ galleryIndex: null })}>&times;</button>
          <Modal.Body className="p-0">
            {this.state.galleryIndex !== null && <img src={this.galleryImageLinks[this.state.galleryIndex]} className="mw-100 rounded" alt="Gallery" />}
          </Modal.Body>
        </Modal>}

        {/* Images */}
        <Masonry options={masonryOptions} className="row form-row">

          {/* Add this element to properly relayout grid */}
          <Col sm={6} md={6} xl={3} className="gallery-sizer position-absolute" />

          {this.galleryImages.map((image, i) =>
            <Col sm={6} md={6} xl={3} key={i} className="gallery-thumbnail mb-2">
              <a onClick={e => this.openImage(e, i)} title={image.title} className="img-thumbnail img-thumbnail-zoom-in" href="#open-image">
                <span className="img-thumbnail-overlay bg-dark opacity-25"></span>
                <span className="img-thumbnail-content display-4 text-white">
                  <i className="ion ion-ios-search"></i>
                </span>
                <img src={image.url} alt={image.altText} className="img-fluid" />
              </a>
            </Col>
          )}

        </Masonry>
        {/* / Images */}

      </div>
    )
  }
}

export default Gallery
