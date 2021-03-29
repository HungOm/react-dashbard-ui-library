import React, { Component } from 'react'
import { Breadcrumb } from 'react-bootstrap'

class CuiBreadcrumbs extends Component {
  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Breadcrumbs</h3>

        <h4 className="ui-block-heading">Example</h4>

        <div className="cui-example cui-example-vertical-spacing">
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
        </div>
      </div>
    )
  }
}

export default CuiBreadcrumbs
