import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap'

class CuiPagination extends Component {
  render() {
    return (
      <div className="ui-block ui-block-inline ui-block-pagination">
        <h3 className="ui-block-heading">Pagination</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example">
          <Pagination className="flex-wrap">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>

        <h4 className="ui-block-heading">Sizes</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <Pagination size="sm" className="flex-wrap">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>

          <Pagination size="lg" className="flex-wrap">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    )
  }
}

export default CuiPagination
