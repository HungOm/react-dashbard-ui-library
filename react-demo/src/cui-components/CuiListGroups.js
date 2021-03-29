import React, { Component } from 'react'
import { ListGroup, Badge } from 'react-bootstrap'

class CuiListGroups extends Component {
  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">List groups</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example">
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
        </div>

        <h4 className="ui-block-heading">Linked items</h4>

        <div className="cui-example">
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
        </div>

        <h4 className="ui-block-heading">Contextual classes</h4>

        <div className="cui-example">
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
        </div>

        <h4 className="ui-block-heading">Custom content</h4>

        <div className="cui-example">
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
        </div>
      </div>
    )
  }
}

export default CuiListGroups
