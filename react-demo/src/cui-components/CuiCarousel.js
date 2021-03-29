import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

class CuiCarousel extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Carousel</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example">
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
        </div>
      </div>
    )
  }
}

export default CuiCarousel
