import React, { Component } from 'react'

class HorizontalSidenavExample extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Horizontal sidenav - Layouts')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Layouts /</span> Horizontal sidenav
        </h4>

        <div className="layout-example-block layout-example-block-3">
          <code>.layout-wrapper.layout-1.layout-without-sidenav</code>

          <div className="layout-example-block">
            <code>.layout-inner</code>

            <div className="layout-example-block layout-example-block-navbar">
              <code>.layout-navbar</code>
            </div>

            <div className="layout-example-block layout-example-block-container">
              <code>.layout-container</code>

              <div className="layout-example-block layout-example-block-content">
                <code>.layout-content</code>

                <div className="layout-example-block-inner">

                  <div className="layout-example-block layout-example-block-sidenav-horizontal">
                    <code>.sidenav-horizontal</code>
                  </div>

                  <div className="layout-example-block layout-example-block-container-fluid">
                    <code>.container-fluid</code>
                  </div>

                  <div className="layout-example-block layout-example-block-footer">
                    <code>.footer</code>
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

export default HorizontalSidenavExample
