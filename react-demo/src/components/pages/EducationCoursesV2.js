import React, { Component } from 'react'
import { Col, Card, Form, Nav, Badge, Media, Pagination, ListGroup } from 'react-bootstrap'
import * as numeral from 'numeral'

class EducationCoursesV2 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Courses v2 - Pages')

    this.state = {
      coursesData: [{
        image: '1.jpg',
        title: 'Complete Java Masterclass',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio ligula, rhoncus scelerisque ullamcorper iaculis.',
        price: 15.99,
        duration: '12h',
        rating: 4.5,
        votes: 55,
        tags: ['Java']
      }, {
        image: '2.jpg',
        title: 'The Complete Web Developer Course 2.0',
        description: 'Pellentesque at sodales tortor, eu volutpat metus.',
        price: 44.00,
        duration: '34h',
        rating: 3.5,
        votes: 55,
        tags: ['Backend']
      }, {
        image: '3.jpg',
        title: 'Python for Beginners: Learn Python Programming',
        description: 'Nulla lorem, placerat in ultricies sed, aliquet eu eros. In lacinia porttitor enim vel commodo.',
        price: 56.99,
        duration: '44h',
        rating: 4.5,
        votes: 55,
        tags: ['Backend', 'Python']
      }, {
        image: '4.jpg',
        title: 'Become a Web Developer from Scratch',
        description: 'Donec gravida id neque nec faucibus. Nam congue leo quis ligula dignissim, id scelerisque ipsum condimentum.',
        price: 0,
        duration: '16h',
        rating: 3.5,
        votes: 55,
        tags: ['HTML5', 'CSS3', 'JS']
      }, {
        image: '5.jpg',
        title: 'Become a Certified Web Developer',
        description: 'Vestibulum eget magna eget turpis imperdiet finibus. Maecenas mi velit, varius vel sapien sed, sodales dignissim risus.',
        price: 14.99,
        duration: '17h',
        rating: 4.5,
        votes: 55,
        tags: ['HTML5', 'CSS3', 'JS']
      }, {
        image: '6.jpg',
        title: 'Full stack Universal React with Redux, Node js and MongoDB',
        description: 'Integer fringilla varius vestibulum. Quisque efficitur tempor nisl vitae rutrum. Vestibulum et iaculis arcu, vitae placerat lacus.',
        price: 66.99,
        duration: '25h',
        rating: 5,
        votes: 55,
        tags: ['React', 'Redux', 'MongoDB', 'NodeJS']
      }]
    }
  }

  prevent(e) {
    e.preventDefault()
  }

  uiStarClass (i, rating) {
    if (rating > (i - 1) && rating < i) return 'half-filled'
    if (rating >= i) return 'filled'
    return ''
  }

  formatPrice (p) {
    return numeral(p).format('$0,0.00')
  }

  render() {
    return (
      <div>

          <h4 className="d-flex flex-wrap justify-content-between align-items-center w-100 font-weight-bold pt-2 mb-4">
            <Col xs={12} md className="px-0 pb-2">Courses</Col>
            <Col xs={12} md={3} className="px-0 pb-2">
              <Form.Control placeholder="Search..." />
            </Col>
          </h4>

          <Nav activeKey="development" className="container-m-nx bg-lighter container-p-x py-1 mb-4">
            <Nav.Item>
              <Nav.Link eventKey="development" className="text-body font-weight-bold pl-0">Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="web-development" className="nav-link text-muted">Web Development</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="mobile-apps" className="nav-link text-muted">Mobile Apps</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="programming-languages" className="nav-link text-muted">Programming Languages</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="databases" className="nav-link text-muted">Databases</Nav.Link>
            </Nav.Item>
          </Nav>

          <Card className="mb-4">
            <ListGroup variant="flush">
              {this.state.coursesData.map(course => (
                <ListGroup.Item key={course.title} className="py-4">

                  <Media className="flex-wrap">
                    <div className="d-none d-sm-block ui-w-140">
                      <a href="#d" onClick={this.prevent} className="d-block ui-rect-67 ui-bg-cover" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/img/bg/${course.image}')` }}><span className="sr-only">Cource image</span></a>
                    </div>
                    <Media.Body className="ml-sm-4">
                      <h5 className="mb-2">
                        <div className="float-right font-weight-semibold ml-3">{course.price ? this.formatPrice(course.price) : 'FREE'}</div>
                        <a href="#d" onClick={this.prevent} className="text-body">{course.title}</a>
                      </h5>
                      <div className="d-flex flex-wrap align-items-center mb-2">
                        <div className="text-muted small">
                          <i className="ion ion-md-time text-primary"></i>&nbsp;
                          <span>{course.duration}</span>
                        </div>
                        <div className="ui-stars ml-3">
                          {[1, 2, 3, 4, 5].map(i =>
                            <div className={'ui-star ' + this.uiStarClass(i, course.rating)} key={i}>
                              <i className="ion ion-md-star"></i>
                              <i className="ion ion-md-star"></i>
                            </div>
                          )}
                        </div>
                        <a href="#d" onClick={this.prevent} className="text-muted small">{course.votes}</a>
                      </div>
                      <div>{course.description}</div>
                      <div className="mt-2">
                        {course.tags.map(tag =>
                          <Badge variant="outline-default" key={tag} className="text-muted font-weight-normal mr-1">{tag}</Badge>
                        )}
                      </div>
                    </Media.Body>
                  </Media>

                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>

          <Pagination>
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
          </Pagination>

        </div>
    )
  }
}

export default EducationCoursesV2
