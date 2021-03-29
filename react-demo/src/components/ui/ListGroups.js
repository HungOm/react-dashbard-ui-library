import React, { Component } from 'react'
import { ListGroup, Badge, Card } from 'react-bootstrap'

class ListGroups extends Component {
  constructor(props) {
    super(props)
    props.setTitle('List groups - UI elements')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> List groups
        </h4>

        <Card className="mb-4">
          <Card.Body>
            <ListGroup>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
                Dapibus ac facilisis in <Badge variant="default">14</Badge>
              </ListGroup.Item>
              <ListGroup.Item as="li" disabled>
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
                Morbi leo risus <Badge variant="success">22</Badge>
              </ListGroup.Item>
              <ListGroup.Item as="li" className="d-flex justify-content-between align-items-center">
                Porta ac consectetur ac <Badge pill variant="danger">13</Badge>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Vestibulum at eros
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Linked items</div>

            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action href="#link1" onClick={this.prevent}>
                Dapibus ac facilisis in
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" onClick={this.prevent}>
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item action href="#link3" onClick={this.prevent}>
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item action href="#link4" onClick={this.prevent}>
                Porta ac consectetur ac
              </ListGroup.Item>
              <ListGroup.Item action href="#link5" onClick={this.prevent}>
                Vestibulum at eros
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Contextual classes</div>

            <ListGroup>
              <ListGroup.Item variant="primary">
                This is a primary list group item
              </ListGroup.Item>
              <ListGroup.Item variant="secondary">
                This is a secondary list group item
              </ListGroup.Item>
              <ListGroup.Item variant="success">
                This is a success list group item
              </ListGroup.Item>
              <ListGroup.Item variant="danger">
                This is a danger list group item
              </ListGroup.Item>
              <ListGroup.Item variant="warning">
                This is a warning list group item
              </ListGroup.Item>
              <ListGroup.Item variant="info">
                This is an info list group item
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                This is a dark list group item
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Custom content</div>

            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action href="#link1" onClick={this.prevent}>
                <div className="d-flex justify-content-between w-100">
                  <h4 className="mb-1">List group item heading</h4>
                  <small>3 days ago</small>
                </div>
                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small>Donec id elit non mi porta.</small>
              </ListGroup.Item>
              <ListGroup.Item action href="#link2" onClick={this.prevent}>
                <div className="d-flex justify-content-between w-100">
                  <h4 className="mb-1">List group item heading</h4>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small className="text-muted">Donec id elit non mi porta.</small>
              </ListGroup.Item>
              <ListGroup.Item action href="#link3" onClick={this.prevent}>
                <div className="d-flex justify-content-between w-100">
                  <h4 className="mb-1">List group item heading</h4>
                  <small className="text-muted">3 days ago</small>
                </div>
                <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small className="text-muted">Donec id elit non mi porta.</small>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default ListGroups
