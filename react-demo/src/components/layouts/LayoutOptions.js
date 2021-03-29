import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Alert } from 'react-bootstrap'

class LayoutOptions extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Layout options - Layouts')
  }

  render() {
    return (
      <div>
        <div className="py-3 mb-4">
          <h4 className="font-weight-bold mb-2">
            <span className="text-muted font-weight-light">Layouts /</span> Layout options
          </h4>
          <div className="text-muted text-big font-weight-light">
            You can configure the initial layout by setting control classes to the <strong className="font-weight-bold">html</strong> element. See also <NavLink to="/layouts/helpers">layout helpers</NavLink>.
          </div>
        </div>

        <hr className="container-m-nx border-light mt-0 mb-4" />

        <pre className="layout-example-code mb-4"><code>&lt;html className="layout-fixed layout-collapsed"&gt;{'\n'}
&nbsp;&nbsp;...{'\n'}
&lt;/html&gt;</code></pre>

        <Alert variant="warning" className="text-big p-4 mb-4">
          After the initial layout setup the recommended way to control layout options is <NavLink to="/layouts/helpers">layout helpers</NavLink>,
          because the helpers do some extra work, such as: setting container paddings (when navbar is fixed),
          performing layout animations, setting correct sidenav state classes depending on screen size etc.
        </Alert>

        <Card body className="mb-4">
          <pre className="layout-example-code text-big p-0 mb-3"><code>.layout-reversed</code></pre>
          Reverse layout direction without markup change.
        </Card>

        <Card body className="mb-4">
          <pre className="layout-example-code text-big p-0 mb-3"><code>.layout-expanded</code></pre>
          Expand layout sidenav on small screens (&lt; 992px).
        </Card>

        <Card body className="mb-4">
          <pre className="layout-example-code text-big p-0 mb-3"><code>.layout-collapsed</code></pre>
          Collapse layout sidenav on large screens (&gt;= 992px).
        </Card>

        <Card body className="mb-4">
          <pre className="layout-example-code text-big p-0 mb-3"><code>.layout-offcanvas</code></pre>
          Make layout sidenav offcanvas.
        </Card>

        <Card body className="mb-4">
          <pre className="layout-example-code text-big p-0 mb-3"><code>.layout-fixed</code></pre>
          Set layout position to fixed.
        </Card>

        <Card body className="mb-4">
          <pre className="layout-example-code text-big p-0 mb-3"><code>.layout-fixed-offcanvas</code></pre>
          Set layout position to fixed with offcanvas sidenav.
        </Card>

        <Card body className="mb-4">
          <pre className="layout-example-code text-big p-0 mb-3"><code>.layout-navbar-fixed</code></pre>
          Set layout navbar position to fixed.
        </Card>

        <Card body className="mb-4">
          <pre className="layout-example-code text-big p-0 mb-3"><code>.layout-footer-fixed</code></pre>
          Set layout footer position to fixed.
        </Card>
      </div>
    )
  }
}

export default LayoutOptions
