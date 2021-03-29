import React, { Component } from 'react'

class Layout1FlexExample extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Layout 1 (Flex) - Layouts')
  }

  render() {
    return (
      <div className="d-flex align-items-stretch flex-grow-1">
        <div className="w-25 bg-light container-p-x container-p-y">
          Side box
        </div>

        <div className="flex-grow-1 container-p-x container-p-y">
          <h4 className="font-weight-bold py-3 mb-4">
            <span className="text-muted font-weight-light">Layouts /</span> Layout 1 (Flex)
          </h4>

          <div className="layout-example-block layout-example-block-1">
            <code>.layout-wrapper.layout-1</code>

            <div className="layout-example-block">
              <code>.layout-inner</code>

              <div className="layout-example-block layout-example-block-navbar">
                <code>.layout-navbar</code>
              </div>

              <div className="layout-example-block layout-example-block-container">
                <code>.layout-container</code>

                <div className="layout-example-block-inner">

                  <div className="layout-example-block layout-example-block-sidenav">
                    <code>.layout-sidenav</code>
                  </div>

                  <div className="layout-example-block layout-example-block-content">
                    <code>.layout-content</code>

                    <div className="layout-example-block bg-white">
                      <code className="text-body">.container-fluid.d-flex.align-items-stretch</code>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Layout1FlexExample
