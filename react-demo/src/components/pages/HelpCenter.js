import React, { Component } from 'react'
import { Card, Form, Row, Col } from 'react-bootstrap'

class HelpCenter extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Help center - Pages')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>

        <h3 className="row align-items-center font-weight-bold py-4 mb-4">
          <Col>
            Help center
            <div className="text-muted text-tiny font-weight-light">Answers to common questions</div>
          </Col>
          <Col sm={6} md={4} xl={3} className="mt-4 mt-sm-0">
            <Form.Control size="lg" placeholder="Search topic..." />
          </Col>
        </h3>
        <hr className="container-m-nx border-light my-0" />

        <Row className="row-bordered my-4">
          <Col xs={6} sm={4} md={3} lg={4} xl={3}>
            <a href="#d" onClick={this.prevent} className="card card-hover text-body my-2">
              <Card.Body className="text-center py-5">
                <div className="lnr lnr-home display-3 text-primary"></div>
                <h5 className="m-0 mt-3">Getting started</h5>
              </Card.Body>
            </a>
          </Col>
          <Col xs={6} sm={4} md={3} lg={4} xl={3}>
            <a href="#d" onClick={this.prevent} className="card card-hover text-body my-2">
              <Card.Body className="text-center py-5">
                <div className="lnr lnr-users display-3 text-primary"></div>
                <h5 className="m-0 mt-3">Accounts</h5>
              </Card.Body>
            </a>
          </Col>
          <Col xs={6} sm={4} md={3} lg={4} xl={3}>
            <a href="#d" onClick={this.prevent} className="card card-hover text-body my-2">
              <Card.Body className="text-center py-5">
                <div className="lnr lnr-apartment display-3 text-primary"></div>
                <h5 className="m-0 mt-3">Membership</h5>
              </Card.Body>
            </a>
          </Col>
          <Col xs={6} sm={4} md={3} lg={4} xl={3}>
            <a href="#d" onClick={this.prevent} className="card card-hover text-body my-2">
              <Card.Body className="text-center py-5">
                <div className="lnr lnr-lock display-3 text-primary"></div>
                <h5 className="m-0 mt-3">Privacy</h5>
              </Card.Body>
            </a>
          </Col>
          <Col xs={6} sm={4} md={3} lg={4} xl={3}>
            <a href="#d" onClick={this.prevent} className="card card-hover text-body my-2">
              <Card.Body className="text-center py-5">
                <div className="lnr lnr-bug display-3 text-primary"></div>
                <h5 className="m-0 mt-3">Issues</h5>
              </Card.Body>
            </a>
          </Col>
          <Col xs={6} sm={4} md={3} lg={4} xl={3}>
            <a href="#d" onClick={this.prevent} className="card card-hover text-body my-2">
              <Card.Body className="text-center py-5">
                <div className="lnr lnr-bubble display-3 text-primary"></div>
                <h5 className="m-0 mt-3">Contacts</h5>
              </Card.Body>
            </a>
          </Col>
        </Row>
        <hr className="container-m-nx border-light my-0" />

        <Card className="mt-5">
          <Card.Header as="h5" className="py-4 px-5">Getting started</Card.Header>
          <Row noGutters className="row-bordered">
            <Col md={6} className="p-5">
              <h6 className="mb-4">Maecenas nec augue placerat</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Sed luctus urna nunc.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Curabitur ac nibh nulla.</a>
            </Col>
            <Col md={6} className="p-5">
              <h6 className="mb-4">Viverra tellus non pulvinar risus</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Fusce in viverra lectus.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Fusce id urna cursus, auctor tortor ut, fermentum magna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris non elit nec quam tempor auctor eu in massa.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Vestibulum condimentum enim molestie condimentum tempus.</a>
            </Col>
            <Col md={6} className="p-5">
              <h6 className="mb-4">Lorem ipsum dolor sit amet</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec dignissim iaculis purus.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Vestibulum euismod mauris elit, ut lobortis erat tincidunt at.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nunc pharetra justo at magna consequat accumsan.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec urna lorem, rhoncus nec tristique et, scelerisque in libero.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nullam vitae nibh bibendum, mattis mauris et, rhoncus nibh.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nullam lacinia molestie ex, id posuere metus porta eget.</a>
            </Col>
          </Row>
        </Card>

        <Card className="mt-5">
          <Card.Header as="h5" className="py-4 px-5">Accounts</Card.Header>
          <Row noGutters className="row-bordered">
            <Col md={6} className="p-5">
              <h6 className="mb-4">Maecenas nec augue placerat</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Sed luctus urna nunc.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Curabitur ac nibh nulla.</a>
            </Col>
            <Col md={6} className="p-5">
              <h6 className="mb-4">Viverra tellus non pulvinar risus</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Fusce in viverra lectus.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Fusce id urna cursus, auctor tortor ut, fermentum magna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris non elit nec quam tempor auctor eu in massa.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Vestibulum condimentum enim molestie condimentum tempus.</a>
            </Col>
            <Col md={6} className="p-5">
              <h6 className="mb-4">Lorem ipsum dolor sit amet</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec dignissim iaculis purus.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Vestibulum euismod mauris elit, ut lobortis erat tincidunt at.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nunc pharetra justo at magna consequat accumsan.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec urna lorem, rhoncus nec tristique et, scelerisque in libero.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nullam vitae nibh bibendum, mattis mauris et, rhoncus nibh.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nullam lacinia molestie ex, id posuere metus porta eget.</a>
            </Col>
            <Col md={6} className="p-5">
              <h6 className="mb-4">Maecenas nec augue placerat</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Sed luctus urna nunc.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Curabitur ac nibh nulla.</a>
            </Col>
          </Row>
        </Card>

        <Card className="mt-5">
          <Card.Header as="h5" className="py-4 px-5">Membership</Card.Header>
          <Row noGutters className="row-bordered">
            <Col md={6} className="p-5">
              <h6 className="mb-4">Maecenas nec augue placerat</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Sed luctus urna nunc.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Curabitur ac nibh nulla.</a>
            </Col>
            <Col md={6} className="p-5">
              <h6 className="mb-4">Lorem ipsum dolor sit amet</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec dignissim iaculis purus.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Vestibulum euismod mauris elit, ut lobortis erat tincidunt at.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nunc pharetra justo at magna consequat accumsan.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec urna lorem, rhoncus nec tristique et, scelerisque in libero.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nullam vitae nibh bibendum, mattis mauris et, rhoncus nibh.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nullam lacinia molestie ex, id posuere metus porta eget.</a>
            </Col>
          </Row>
        </Card>

        <Card className="mt-5">
          <Card.Header as="h5" className="py-4 px-5">Privacy</Card.Header>
          <Row noGutters className="row-bordered">
            <Col md={6} className="p-5">
              <h6 className="mb-4">Maecenas nec augue placerat</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Sed luctus urna nunc.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Curabitur ac nibh nulla.</a>
            </Col>
            <Col md={6} className="p-5">
              <h6 className="mb-4">Viverra tellus non pulvinar risus</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Fusce in viverra lectus.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Fusce id urna cursus, auctor tortor ut, fermentum magna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris non elit nec quam tempor auctor eu in massa.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Vestibulum condimentum enim molestie condimentum tempus.</a>
            </Col>
            <Col md={6} className="p-5">
              <h6 className="mb-4">Lorem ipsum dolor sit amet</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec dignissim iaculis purus.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Vestibulum euismod mauris elit, ut lobortis erat tincidunt at.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nunc pharetra justo at magna consequat accumsan.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec urna lorem, rhoncus nec tristique et, scelerisque in libero.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nullam vitae nibh bibendum, mattis mauris et, rhoncus nibh.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nullam lacinia molestie ex, id posuere metus porta eget.</a>
            </Col>
          </Row>
        </Card>

        <Card className="mt-5">
          <Card.Header as="h5" className="py-4 px-5">Issues</Card.Header>
          <Row noGutters className="row-bordered">
            <Col md={6} className="p-5">
              <h6 className="mb-4">Maecenas nec augue placerat</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Sed luctus urna nunc.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Curabitur ac nibh nulla.</a>
            </Col>
            <Col md={6} className="p-5">
              <h6 className="mb-4">Viverra tellus non pulvinar risus</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Fusce in viverra lectus.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Fusce id urna cursus, auctor tortor ut, fermentum magna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris non elit nec quam tempor auctor eu in massa.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Vestibulum condimentum enim molestie condimentum tempus.</a>
            </Col>
            <Col md={6} className="p-5">
              <h6 className="mb-4">Lorem ipsum dolor sit amet</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec dignissim iaculis purus.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Vestibulum euismod mauris elit, ut lobortis erat tincidunt at.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nunc pharetra justo at magna consequat accumsan.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec urna lorem, rhoncus nec tristique et, scelerisque in libero.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nullam vitae nibh bibendum, mattis mauris et, rhoncus nibh.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Nullam lacinia molestie ex, id posuere metus porta eget.</a>
            </Col>
            <Col md={6} className="p-5">
              <h6 className="mb-4">Maecenas nec augue placerat</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Sed luctus urna nunc.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Curabitur ac nibh nulla.</a>
            </Col>
          </Row>
        </Card>

        <Card className="mt-5">
          <Card.Header as="h5" className="py-4 px-5">Contacts</Card.Header>
          <Row noGutters className="row-bordered">
            <Col md={6} className="p-5">
              <h6 className="mb-4">Maecenas nec augue placerat</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Sed luctus urna nunc.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Curabitur ac nibh nulla.</a>
            </Col>
            <Col md={6} className="p-5">
              <h6 className="mb-4">Viverra tellus non pulvinar risus</h6>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Fusce in viverra lectus.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Fusce id urna cursus, auctor tortor ut, fermentum magna.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Mauris non elit nec quam tempor auctor eu in massa.</a>
              <a href="#d" onClick={this.prevent} className="d-block mb-3"><i className="ion ion-ios-arrow-forward"></i>&nbsp; Vestibulum condimentum enim molestie condimentum tempus.</a>
            </Col>
          </Row>
        </Card>

      </div>
    )
  }
}

export default HelpCenter
