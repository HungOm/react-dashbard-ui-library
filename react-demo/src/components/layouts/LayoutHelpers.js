import React, { Component } from 'react'
import layoutHelpers from '../../shared/layouts/helpers'
import { NavLink } from 'react-router-dom'
import { Card, Row, Col, Table } from 'react-bootstrap'

class LayoutHelpers extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Layout helpers - Layouts')
  }

  isSmallScreen(e) {
    e.preventDefault()
    alert(layoutHelpers.isSmallScreen())
  }

  isLayout1(e) {
    e.preventDefault()
    alert(layoutHelpers.isLayout1())
  }

  isCollapsed(e) {
    e.preventDefault()
    alert(layoutHelpers.isCollapsed())
  }

  isFixed(e) {
    e.preventDefault()
    alert(layoutHelpers.isFixed())
  }

  isOffcanvas(e) {
    e.preventDefault()
    alert(layoutHelpers.isOffcanvas())
  }

  isNavbarFixed(e) {
    e.preventDefault()
    alert(layoutHelpers.isNavbarFixed())
  }

  isFooterFixed(e) {
    e.preventDefault()
    alert(layoutHelpers.isFooterFixed())
  }

  isReversed(e) {
    e.preventDefault()
    alert(layoutHelpers.isReversed())
  }

  setCollapsed(e, collapsed, animate) {
    e.preventDefault()
    layoutHelpers.setCollapsed(collapsed, animate)
  }

  toggleCollapsed(e, animate) {
    e.preventDefault()
    layoutHelpers.toggleCollapsed(animate)
  }

  setPosition(e, fixed, offcanvas) {
    e.preventDefault()
    layoutHelpers.setPosition(fixed, offcanvas)
  }

  setNavbarFixed(e, fixed) {
    e.preventDefault()
    layoutHelpers.setNavbarFixed(fixed)
  }

  setFooterFixed(e, fixed) {
    e.preventDefault()
    layoutHelpers.setFooterFixed(fixed)
  }

  setReversed(e, reversed) {
    e.preventDefault()
    layoutHelpers.setReversed(reversed)
  }

  render() {
    return (
      <div>
        <div className="py-3 mb-4">
          <h4 className="font-weight-bold mb-2">
            <span className="text-muted font-weight-light">Layouts /</span> Layout helpers
          </h4>
          <div className="text-muted text-big font-weight-light">
            Layout helpers allow you to easily set layout options and get current layout info. See also <NavLink to="/layouts/options">layout options</NavLink>
          </div>
        </div>

        <hr className="container-m-nx border-light mt-0 mb-4" />

        <pre className="layout-example-code mb-4"><code>import layoutHelpers from 'shared/layouts/helpers'{'\n'}
...{'\n'}
toggleSidenav() {'{'}{'\n'}
&nbsp;&nbsp;layoutHelpers.toggleCollapsed(){'\n'}
}</code></pre>

        <Row>

          <Col md={6}>
            <Card body className="mb-4">
              <pre className="layout-example-code text-big p-0 mb-3"><code>getLayoutSidenav()</code></pre>
              Returns the <code>.layout-sidenav</code> element (if exists). Otherwise returns <code>null</code>.
            </Card>
          </Col>

          <Col md={6}>
            <Card body className="mb-4">
              <pre className="layout-example-code text-big p-0 mb-3"><code>getSidenav()</code></pre>
              Returns the <code>.sidenav.layout-sidenav</code> element or <code>.sidenav</code> element within <code>.layout-sidenav</code> (if exists). Otherwise returns <code>null</code>.
            </Card>
          </Col>

          <Col md={6}>
            <Card body className="mb-4">
              <pre className="layout-example-code text-big p-0 mb-3"><code>getLayoutNavbar()</code></pre>
              Returns the <code>.layout-navbar</code> element (if exists). Otherwise returns <code>null</code>.
            </Card>
          </Col>

          <Col md={6}>
            <Card body className="mb-4">
              <pre className="layout-example-code text-big p-0 mb-3"><code>getLayoutFooter()</code></pre>
              Returns the <code>.layout-footer</code> element (if exists). Otherwise returns <code>null</code>.
            </Card>
          </Col>

          <Col md={6}>
            <Card body className="mb-4">
              <pre className="layout-example-code text-big p-0 mb-3"><code>getLayoutContainer()</code></pre>
              Returns the <code>.layout-container</code> element (if exists). Otherwise returns <code>null</code>.
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>isSmallScreen()</code></pre>
                Returns <code>true</code> if the window width is less than 992px (lg breakpoint).
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.isSmallScreen(e)}>&rsaquo; isSmallScreen()</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>isLayout1()</code></pre>
                Returns <code>true</code> if the current layout is <code>.layout-1</code>.
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.isLayout1(e)}>&rsaquo; isLayout1()</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>isCollapsed()</code></pre>
                Returns <code>true</code> if the layout sidenav is collapsed.
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.isCollapsed(e)}>&rsaquo; isCollapsed()</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>isFixed()</code></pre>
                Returns <code>true</code> if the layout position is fixed.
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.isFixed(e)}>&rsaquo; isFixed()</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>isOffcanvas()</code></pre>
                Returns <code>true</code> if the current layout is offcanvas.
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.isOffcanvas(e)}>&rsaquo; isOffcanvas()</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>isNavbarFixed()</code></pre>
                Returns <code>true</code> if the layout navbar position is fixed.
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.isNavbarFixed(e)}>&rsaquo; isNavbarFixed()</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>isFooterFixed()</code></pre>
                Returns <code>true</code> if the layout footer position is fixed.
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.isFooterFixed(e)}>&rsaquo; isFooterFixed()</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>isReversed()</code></pre>
                Returns <code>true</code> if layout is reversed.
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.isReversed(e)}>&rsaquo; isReversed()</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>setCollapsed(collapsed, animate = true)</code></pre>
                Collapse / expand layout sidenav.
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setCollapsed(e, false, true)}>&rsaquo; setCollapsed(false, true)</a></code>
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setCollapsed(e, true, true)}>&rsaquo; setCollapsed(true, true)</a></code>
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setCollapsed(e, false, false)}>&rsaquo; setCollapsed(false, false)</a></code>
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setCollapsed(e, true, false)}>&rsaquo; setCollapsed(true, false)</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>toggleCollapsed(animate = true)</code></pre>
                Toggle layout sidenav.
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.toggleCollapsed(e, true)}>&rsaquo; toggleCollapsed(true)</a></code>
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.toggleCollapsed(e, false)}>&rsaquo; toggleCollapsed(false)</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>setPosition(fixed, offcanvas)</code></pre>
                <p>Set layout position. <code className="layout-example-run"><a href="#d" onClick={(e) => this.setCollapsed(e, true, false)}>&rsaquo; collapse sidenav</a></code></p>
                <span className="text-muted">Note:</span> If the layout position is fixed and the current layout is <code>.layout-1</code>, the layout navbar position also will be fixed.
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setPosition(e, false, false)}>&rsaquo; setPosition(false, false)</a></code>
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setPosition(e, true, false)}>&rsaquo; setPosition(true, false)</a></code>
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setPosition(e, false, true)}>&rsaquo; setPosition(false, true)</a></code>
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setPosition(e, true, true)}>&rsaquo; setPosition(true, true)</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>setNavbarFixed(fixed)</code></pre>
                Set layout navbar position. <code className="layout-example-run"><a href="#d" onClick={(e) => this.setPosition(e, false, false)}>&rsaquo; reset layout position</a></code>
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setNavbarFixed(e, true)}>&rsaquo; setNavbarFixed(true)</a></code>
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setNavbarFixed(e, false)}>&rsaquo; setNavbarFixed(false)</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>setFooterFixed(fixed)</code></pre>
                Set layout footer position.
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setFooterFixed(e, true)}>&rsaquo; setFooterFixed(true)</a></code>
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setFooterFixed(e, false)}>&rsaquo; setFooterFixed(false)</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <pre className="layout-example-code text-big p-0 mb-3"><code>setReversed(reversed)</code></pre>
                Reverse layout.
              </Card.Body>
              <Card.Footer className="media border-light">
                <div><strong>Run:</strong></div>
                <div className="media-body ml-3">
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setReversed(e, true)}>&rsaquo; setReversed(true)</a></code>
                  <code className="layout-example-run"><a href="#d" onClick={(e) => this.setReversed(e, false)}>&rsaquo; setReversed(false)</a></code>
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col md={6}>
            <Card body className="mb-4">
              <pre className="layout-example-code text-big p-0 mb-3"><code>update()</code></pre>
              Update layout.
            </Card>

            <Card body className="mb-4">
              <pre className="layout-example-code text-big p-0 mb-3"><code>setAutoUpdate(enable)</code></pre>
              Update layout on window resize.
            </Card>
          </Col>

          <Col md={6}>
            <Card body className="mb-4">
              <pre className="layout-example-code text-big p-0 mb-3"><code>on(event, callback)</code></pre>
              <p>Add an event listener. You can set listener namespace using the next syntax: <code>{'{'}EventName}.{'{'}Namespace}</code>.</p>
              <pre className="layout-example-code p-0"><code>{'// Subscribe to `resize` event.\n'}
{'// No namespace defined.\n'}
layoutHelpers.on('resize', function() {'{'}{'\n'}
&nbsp;&nbsp;...{'\n'}
}){'\n'}
{'\n'}
{'// Subscribe to `resize` event\n'}
{'// with `page-1` namespace.\n'}
layoutHelpers.on('resize.page-1', function() {'{'}{'\n'}
&nbsp;&nbsp;...{'\n'}
})</code></pre>
            </Card>
          </Col>

          <Col md={6}>
            <Card body className="mb-4">
              <pre className="layout-example-code text-big p-0 mb-3"><code>off(event)</code></pre>
              <p>Remove an event listener. Will remove only events with given namespace, otherwise will remove all events without namespace.</p>
              <pre className="layout-example-code p-0"><code>{'// Remove all `resize` listeners\n'}
{'// without namespace.\n'}
layoutHelpers.off('resize'){'\n'}
{'\n'}
{'// Remove all `resize` listeners\n'}
{'// with `page-1` namespace.\n'}
this.layoutHelpers.off('resize.page-1')</code></pre>
            </Card>
          </Col>

          <Col md={6}>
            <Card body className="mb-4">
              <pre className="layout-example-code text-big p-0 mb-3"><code>init()</code></pre>
              Performs <code>layoutHelpers</code> initialization. Invoked automatically after the page loaded.
              You need to call this method only if the <code>destroy()</code> method called before.
              If <code>layoutHelpers</code> is already initialized, nothing will happen.
            </Card>
          </Col>

          <Col md={6}>
            <Card body className="mb-4">
              <pre className="layout-example-code text-big p-0 mb-3"><code>destroy()</code></pre>
              Remove bound events, clean markup and disable layout auto update.
              <div className="alert alert-warning mt-3 mb-0">
                Will remove all bound events except <code>init</code> events. You will need unbind <code>init</code> events manually using the <code>off()</code> method.
              </div>
            </Card>
          </Col>

        </Row>

        <hr className="container-m-nx mb-5" />
        <h5 className="mb-4">Events</h5>
        <Card>
          <Card.Body>
            <p>You can subscribe / unsubscribe events in two ways:</p>
            <ol className="mb-4">
              <li className="mb-1">
                Using the <code>on()</code> / <code>off()</code> methods <strong>(preferred way)</strong>;
              </li>
              <li>
                Using <code>window.addEventListener('layout{'{'}EventName}', ...)</code> / <code>window.removeEventListener('layout{'{'}EventName}', ...)</code>.
              </li>
            </ol>
            <div className="alert alert-warning mt-3 mb-0">
              The <code>destroy()</code> method will remove only events bound using the <code>on()</code> method. So, after destroy, you will need to manually remove events bound using <code>window.addEventListener</code>.
            </div>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <pre className="layout-example-code p-0"><code>Examples:{'\n'}
{'\n'}
{'// - Using the on() / off() methods, without namespace:\n'}
{'\n'}
{'// Subscribe to `resize` event.\n'}
layoutHelpers.on('resize', function() {'{'}{'\n'}
&nbsp;&nbsp;...{'\n'}
}){'\n'}

{'// Unsubscribe `resize` event.\n'}
layoutHelpers.off('resize'){'\n'}
{'\n'}
{'// - Using the on() / off() methods, with `page-1` namespace:\n'}
{'\n'}
{'// Subscribe to `resize` event.\n'}
layoutHelpers.on('resize.page-1', function() {'{'}{'\n'}
&nbsp;&nbsp;...{'\n'}
}){'\n'}
{'\n'}
{'// Unsubscribe `resize` event.\n'}
layoutHelpers.off('resize.page-1'){'\n'}
{'\n'}
{'// - Using window.addEventListener / window.removeEventListener:\n'}
{'\n'}
function resizeCallback() {'{'}{'\n'}
&nbsp;&nbsp;...{'\n'}
}{'\n'}
{'\n'}
{'// Subscribe to `resize` event.\n'}
window.addEventListener('layoutresize', resizeCallback, false){'\n'}
{'\n'}
{'// Unsubscribe `resize` event.\n'}
window.removeEventListener('layoutresize', resizeCallback, false)</code></pre>
          </Card.Body>
          <hr className="m-0" />
          <Card.Body>
            <h6>Available events:</h6>
            <Table className="m-0">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>init</code></td>
                  <td>Triggered after <code>layoutHelpers</code> initialization completed.</td>
                </tr>
                <tr>
                  <td><code>toggle</code></td>
                  <td>Triggered after layout sidenav collapsed / expanded.</td>
                </tr>
                <tr>
                  <td><code>resize</code></td>
                  <td>Delayed window resize event. Default resize event delay: <code>200ms</code></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default LayoutHelpers
