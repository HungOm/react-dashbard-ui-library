import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import Swiper from 'react-id-swiper'
import '../../vendor/libs/react-id-swiper/react-id-swiper.scss'
import '../../cui-components/CuiReactIdSwiper.css'

class CarouselComponent extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Carousel - UI elements')
  }

  render() {
    const swiperWithArrows = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      renderPrevButton: () => <div className="swiper-button-prev custom-icon"><i className="lnr lnr-chevron-left text-primary" /></div>,
      renderNextButton: () => <div className="swiper-button-next custom-icon"><i className="lnr lnr-chevron-right text-primary" /></div>
    }

    const swiperWithPagination = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }

    const swiperWithFractionPagination = {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      }
    }

    const swiperWithProgress = {
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      renderPrevButton: () => <div className="swiper-button-prev custom-icon"><i className="lnr lnr-chevron-left" /></div>,
      renderNextButton: () => <div className="swiper-button-next custom-icon"><i className="lnr lnr-chevron-right" /></div>
    }

    const swiperWithScrollbar = {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true
      }
    }

    const verticalSwiper = {
      containerClass: 'swiper-container example-swiper-vertical',
      direction: 'vertical',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }

    const swiperMultipleSlides = {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }

    const swiperFadeEffect = {
      containerClass: 'swiper-container example-swiper-fade-effect',
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      renderPagination: () => <div className="swiper-pagination swiper-pagination-white" />,
      renderPrevButton: () => <div className="swiper-button-prev custom-icon"><i className="lnr lnr-chevron-left small" /></div>,
      renderNextButton: () => <div className="swiper-button-next custom-icon"><i className="lnr lnr-chevron-right small" /></div>
    }

    const swiper3dCubeEffect = {
      containerClass: 'swiper-container example-swiper-3d-cube-effect',
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }

    const swiper3dCoverflowEffect = {
      containerClass: 'swiper-container example-swiper-3d-coverflow-effect',
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      }
    }

    const swiper3dFlipEffect = {
      containerClass: 'swiper-container example-swiper-3d-flip-effect',
      effect: 'flip',
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      renderPrevButton: () => <div className="swiper-button-prev custom-icon"><i className="lnr lnr-chevron-left text-muted small" /></div>,
      renderNextButton: () => <div className="swiper-button-next custom-icon"><i className="lnr lnr-chevron-right text-muted small" /></div>
    }

    const isIE10Mode = document['documentMode'] === 10
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Carousel
        </h4>

        <hr className="container-m-nx border-light mt-0" />

        <h5 className="font-weight-bold pt-1 pb-1 mt-4 mb-4">Bootstrap carousel</h5>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/img/bg/2.jpg`}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/img/bg/3.jpg`}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {isIE10Mode && <div className="alert alert-danger mt-4">
          <strong>react-id-swiper</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode && <React.Fragment>
          <hr className="container-m-nx border-light mt-5" />

          <h5 className="font-weight-bold pt-1 pb-1 mt-4 mb-4">react-id-swiper</h5>

          <div className="demo-vertical-spacing w-100">
            {/* Default */}
            <Swiper>
              <div>I'm Slide 1</div>
              <div>I'm Slide 2</div>
              <div>I'm Slide 3</div>
              <div>I'm Slide 4</div>
              <div>I'm Slide 5</div>
            </Swiper>

            {/* With arrows */}
            <Swiper {...swiperWithArrows}>
              <div>I'm Slide 1</div>
              <div>I'm Slide 2</div>
              <div>I'm Slide 3</div>
              <div>I'm Slide 4</div>
              <div>I'm Slide 5</div>
            </Swiper>

            {/* With pagination */}
            <Swiper {...swiperWithPagination}>
              <div>I'm Slide 1</div>
              <div>I'm Slide 2</div>
              <div>I'm Slide 3</div>
              <div>I'm Slide 4</div>
              <div>I'm Slide 5</div>
            </Swiper>

            {/* With fraction pagination */}
            <Swiper {...swiperWithFractionPagination}>
              <div>I'm Slide 1</div>
              <div>I'm Slide 2</div>
              <div>I'm Slide 3</div>
              <div>I'm Slide 4</div>
              <div>I'm Slide 5</div>
            </Swiper>

            {/* With progress */}
            <Swiper {...swiperWithProgress}>
              <div>I'm Slide 1</div>
              <div>I'm Slide 2</div>
              <div>I'm Slide 3</div>
              <div>I'm Slide 4</div>
              <div>I'm Slide 5</div>
            </Swiper>

            {/* With scrollbar */}
            <Swiper {...swiperWithScrollbar}>
              <div>I'm Slide 1</div>
              <div>I'm Slide 2</div>
              <div>I'm Slide 3</div>
              <div>I'm Slide 4</div>
              <div>I'm Slide 5</div>
            </Swiper>

            {/* Vertical */}
            <Swiper {...verticalSwiper}>
              <div>I'm Slide 1</div>
              <div>I'm Slide 2</div>
              <div>I'm Slide 3</div>
              <div>I'm Slide 4</div>
              <div>I'm Slide 5</div>
            </Swiper>

            {/* Multiple slides */}
            <Swiper {...swiperMultipleSlides}>
              <div>I'm Slide 1</div>
              <div>I'm Slide 2</div>
              <div>I'm Slide 3</div>
              <div>I'm Slide 4</div>
              <div>I'm Slide 5</div>
            </Swiper>

            {/* Fade effect */}
            <Swiper {...swiperFadeEffect}>
              <div>I'm Slide 1</div>
              <div>I'm Slide 2</div>
              <div>I'm Slide 3</div>
              <div>I'm Slide 4</div>
              <div>I'm Slide 5</div>
            </Swiper>

            {/* 3D cube effect */}
            <Swiper {...swiper3dCubeEffect}>
              <div>I'm Slide 1</div>
              <div>I'm Slide 2</div>
              <div>I'm Slide 3</div>
              <div>I'm Slide 4</div>
              <div>I'm Slide 5</div>
            </Swiper>

            {/* 3D coverflow effect */}
            <Swiper {...swiper3dCoverflowEffect}>
              <div>I'm Slide 1</div>
              <div>I'm Slide 2</div>
              <div>I'm Slide 3</div>
              <div>I'm Slide 4</div>
              <div>I'm Slide 5</div>
            </Swiper>

            {/* 3D flip effect */}
            <Swiper {...swiper3dFlipEffect}>
              <div>I'm Slide 1</div>
              <div>I'm Slide 2</div>
              <div>I'm Slide 3</div>
              <div>I'm Slide 4</div>
              <div>I'm Slide 5</div>
            </Swiper>
          </div>
        </React.Fragment>}

      </div>
    )
  }
}

export default CarouselComponent
