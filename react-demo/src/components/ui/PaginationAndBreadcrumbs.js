import React, { Component } from 'react'
import { Card, Pagination, Breadcrumb } from 'react-bootstrap'

class PaginationAndBreadcrumbs extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Pagination and breadcrumbs - UI elements')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Pagination and breadcrumbs
        </h4>

        <Card className="mb-4">
          <Card.Header as="h6">Pagination</Card.Header>
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Default</div>

            <Pagination className="flex-wrap">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{12}</Pagination.Item>
              <Pagination.Item active>{10}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <div className="text-light small font-weight-semibold mb-3">Sizes</div>

            <Pagination size="sm" className="flex-wrap">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{12}</Pagination.Item>
              <Pagination.Item active>{10}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>

            <Pagination size="lg" className="flex-wrap">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{12}</Pagination.Item>
              <Pagination.Item active>{10}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">Breadcrumbs</Card.Header>
          <Card.Body className="demo-vertical-spacing">
            <Breadcrumb>
              <Breadcrumb.Item active>Home</Breadcrumb.Item>
            </Breadcrumb>

            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Library</Breadcrumb.Item>
            </Breadcrumb>

            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Library</Breadcrumb.Item>
              <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default PaginationAndBreadcrumbs
