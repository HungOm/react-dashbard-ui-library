import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

class CuiUtilities extends Component {
  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">Utilities</h3>
        <p className="ui-block-description">
          See more: <a href="https://getbootstrap.com/docs/4.0/utilities" target="_blank" rel="noopener noreferrer">https://getbootstrap.com/docs/4.0/utilities</a>
        </p>

        <h4 className="ui-block-heading">Border color</h4>

        <div className="cui-example">
          <div className="cui-utils-example-border-color">
            <span className="bg-lighter border-primary"></span>
            <span className="bg-lighter border-secondary"></span>
            <span className="bg-lighter border-success"></span>
            <span className="bg-lighter border-danger"></span>
            <span className="bg-lighter border-warning"></span>
            <span className="bg-lighter border-info"></span>
            <span className="bg-lighter border-light"></span>
            <span className="bg-lighter border-dark"></span>
            <span className="bg-lighter border-white"></span>
            <span className="bg-lighter border-transparent"></span>
          </div>
        </div>

        <h4 className="ui-block-heading">Text color</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <div>
            <p><a href="#d" onClick={this.prevent} className="text-primary">Primary link</a></p>
            <p><a href="#d" onClick={this.prevent} className="text-secondary">Secondary link</a></p>
            <p><a href="#d" onClick={this.prevent} className="text-success">Success link</a></p>
            <p><a href="#d" onClick={this.prevent} className="text-danger">Danger link</a></p>
            <p><a href="#d" onClick={this.prevent} className="text-warning">Warning link</a></p>
            <p><a href="#d" onClick={this.prevent} className="text-info">Info link</a></p>
            <p><a href="#d" onClick={this.prevent} className="text-dark">Dark link</a></p>
            <p><a href="#d" onClick={this.prevent} className="text-body">Body link</a></p>
            <p><a href="#d" onClick={this.prevent} className="text-muted">Muted link</a></p>
            <p><a href="#d" onClick={this.prevent} className="text-light">Light link</a></p>
            <p><a href="#d" onClick={this.prevent} className="text-lighter">Lighter link</a></p>
            <p><a href="#d" onClick={this.prevent} className="text-lightest">Lightest link</a></p>
          </div>
        </div>

        <h4 className="ui-block-heading">Background color</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <div className="cui-utils-example-bg-color">
            <div className="row mx-0">
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-primary text-white"><code>.bg-primary</code></a>
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-primary-dark text-white"><code>.bg-primary-dark</code></a>
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-primary-darker text-white"><code>.bg-primary-darker</code></a>

              <div className="w-100"></div>

              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-secondary text-white"><code>.bg-secondary</code></a>
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-secondary-dark text-white"><code>.bg-secondary-dark</code></a>
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-secondary-darker text-white"><code>.bg-secondary-darker</code></a>
            </div>
            <div className="row mx-0">
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-success text-white"><code>.bg-success</code></a>
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-success-dark text-white"><code>.bg-success-dark</code></a>
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-success-darker text-white"><code>.bg-success-darker</code></a>
            </div>
            <div className="row mx-0">
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-info text-white"><code>.bg-info</code></a>
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-info-dark text-white"><code>.bg-info-dark</code></a>
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-info-darker text-white"><code>.bg-info-darker</code></a>
            </div>
            <div className="row mx-0">
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-warning text-white"><code>.bg-warning</code></a>
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-warning-dark text-white"><code>.bg-warning-dark</code></a>
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-warning-darker text-white"><code>.bg-warning-darker</code></a>
            </div>
            <div className="row mx-0">
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-danger text-white"><code>.bg-danger</code></a>
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-danger-dark text-white"><code>.bg-danger-dark</code></a>
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-danger-darker text-white"><code>.bg-danger-darker</code></a>
            </div>
            <div className="row mx-0">
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-light text-body"><code>.bg-light</code></a>
            </div>
            <div className="row mx-0">
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-lighter text-body"><code>.bg-lighter</code></a>
            </div>
            <div className="row mx-0">
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-lightest text-body"><code>.bg-lightest</code></a>
            </div>
            <div className="row mx-0">
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-dark text-white"><code>.bg-dark</code></a>
            </div>
            <div className="row mx-0">
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-white text-body"><code>.bg-white</code></a>
            </div>
            <div className="row mx-0">
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-transparent text-body"><code>.bg-transparent</code></a>
            </div>
            <div className="row mx-0">
              <a href="#d" onClick={this.prevent} className="d-block col-sm bg-body text-body"><code>.bg-body</code></a>
            </div>
          </div>
        </div>

        <h4 className="ui-block-heading">Opacity</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <div className="bg-dark opacity-25 p-3"><code className="bg-transparent text-white">.opacity-25</code></div>
          <div className="bg-dark opacity-50 p-3"><code className="bg-transparent text-white">.opacity-50</code></div>
          <div className="bg-dark opacity-75 p-3"><code className="bg-transparent text-white">.opacity-75</code></div>
          <div className="bg-dark opacity-100 p-3"><code className="bg-transparent text-white">.opacity-100</code></div>
        </div>

        <h4 className="ui-block-heading">Text sizing</h4>

        <div className="cui-example">
          {/* Tiny */}
          <p className="text-tiny">
            <code>.text-tiny</code> - Tiny text.
          </p>

          {/* Big */}
          <p className="text-big">
            <code>.text-big</code> - Big text.
          </p>

          {/* Large */}
          <p className="text-large">
            <code>.text-large</code> - Large text.
          </p>

          {/* Extra large */}
          <p className="text-xlarge">
            <code>.text-xlarge</code> - Extra large.
          </p>
        </div>

        <h4 className="ui-block-heading">Font weight</h4>

        <div className="cui-example">
          <p>
            <code>.font-weight-semibold</code> - <span className="font-weight-semibold">Semibold text.</span>
          </p>
        </div>

        <h4 className="ui-block-heading">Font family</h4>

        <div className="cui-example">
          <p>
            <code>.text-sans-serif</code> - <span className="text-sans-serif">Sans Serif font.</span>
          </p>
          <p>
            <code>.text-serif</code> - <span className="text-serif">Serif font.</span>
          </p>
          <p>
            <code>.text-monospace</code> - <span className="text-monospace">Monospaced font.</span>
          </p>
        </div>

        <h4 className="ui-block-heading">Line height</h4>

        <div className="cui-example">
          <p className="line-height-1">
            <code>.line-height-1</code> - line-height: 1<br />
            Nullam ornare diam sed arcu interdum condimentum. Maecenas pharetra nibh interdum, laoreet ex et, dapibus lorem. Pellentesque a justo eu dolor tempus luctus. Suspendisse nec nisl quis ligula volutpat scelerisque vel a mi. Vivamus et velit elit. Aliquam consequat orci id arcu venenatis tempus. Donec varius convallis enim, ac auctor libero euismod eu. Nam rutrum molestie diam et sagittis. Integer consequat vestibulum interdum. Integer consequat scelerisque lectus, et viverra massa aliquam at. Phasellus consequat faucibus justo eu pulvinar. Maecenas tincidunt non urna in luctus. Vivamus et tellus tortor. In eleifend euismod imperdiet.
          </p>

          <p className="line-height-condenced">
            <code>.line-height-condenced</code> - line-height: 1.3<br />
            Nullam ornare diam sed arcu interdum condimentum. Maecenas pharetra nibh interdum, laoreet ex et, dapibus lorem. Pellentesque a justo eu dolor tempus luctus. Suspendisse nec nisl quis ligula volutpat scelerisque vel a mi. Vivamus et velit elit. Aliquam consequat orci id arcu venenatis tempus. Donec varius convallis enim, ac auctor libero euismod eu. Nam rutrum molestie diam et sagittis. Integer consequat vestibulum interdum. Integer consequat scelerisque lectus, et viverra massa aliquam at. Phasellus consequat faucibus justo eu pulvinar. Maecenas tincidunt non urna in luctus. Vivamus et tellus tortor. In eleifend euismod imperdiet.
          </p>

          <p className="line-height-inherit">
            <code>.line-height-inherit</code> - line-height: inherit<br />
            Nullam ornare diam sed arcu interdum condimentum. Maecenas pharetra nibh interdum, laoreet ex et, dapibus lorem. Pellentesque a justo eu dolor tempus luctus. Suspendisse nec nisl quis ligula volutpat scelerisque vel a mi. Vivamus et velit elit. Aliquam consequat orci id arcu venenatis tempus. Donec varius convallis enim, ac auctor libero euismod eu. Nam rutrum molestie diam et sagittis. Integer consequat vestibulum interdum. Integer consequat scelerisque lectus, et viverra massa aliquam at. Phasellus consequat faucibus justo eu pulvinar. Maecenas tincidunt non urna in luctus. Vivamus et tellus tortor. In eleifend euismod imperdiet.
          </p>
        </div>

        <h4 className="ui-block-heading">Text decoration and transform</h4>

        <div className="cui-example">
          <p>
            <code>.text-decoration-none</code> - <span className="text-decoration-none" style={{textDecoration: 'underline'}}>Text decoration - none</span>
          </p>

          <p>
            <code>.text-transform-none</code> - <span className="text-transform-none" style={{textTransform: 'uppercase'}}>Text transform - none</span>
          </p>
        </div>

        <h4 className="ui-block-heading">Expanded text</h4>

        <div className="cui-example">
          <p>
            <code>.text-expanded</code> - <span className="text-expanded">Encrease letter-spacing property.</span>
          </p>
        </div>

        <h4 className="ui-block-heading">Shadows</h4>

        <div className="cui-example">
          <p className="shadow-none" style={{boxShadow: '0 0 10px red'}}>
            <code>.shadow-none</code> - box-shadow: none
          </p>
        </div>

        <h4 className="ui-block-heading">Overflow</h4>

        <div className="cui-example">
          <p className="text-nowrap overflow-hidden">
            <code>.overflow-hidden</code> - overflow: hidden<br />
            Nullam ornare diam sed arcu interdum condimentum. Maecenas pharetra nibh interdum, laoreet ex et, dapibus lorem. Pellentesque a justo eu dolor tempus luctus. Suspendisse nec nisl quis ligula volutpat scelerisque vel a mi. Vivamus et velit elit. Aliquam consequat orci id arcu venenatis tempus. Donec varius convallis enim, ac auctor libero euismod eu. Nam rutrum molestie diam et sagittis. Integer consequat vestibulum interdum. Integer consequat scelerisque lectus, et viverra massa aliquam at. Phasellus consequat faucibus justo eu pulvinar. Maecenas tincidunt non urna in luctus. Vivamus et tellus tortor. In eleifend euismod imperdiet.
          </p>

          <p className="text-nowrap overflow-scroll">
            <code>.overflow-scroll</code> - overflow: scroll<br />
            Nullam ornare diam sed arcu interdum condimentum. Maecenas pharetra nibh interdum, laoreet ex et, dapibus lorem. Pellentesque a justo eu dolor tempus luctus. Suspendisse nec nisl quis ligula volutpat scelerisque vel a mi. Vivamus et velit elit. Aliquam consequat orci id arcu venenatis tempus. Donec varius convallis enim, ac auctor libero euismod eu. Nam rutrum molestie diam et sagittis. Integer consequat vestibulum interdum. Integer consequat scelerisque lectus, et viverra massa aliquam at. Phasellus consequat faucibus justo eu pulvinar. Maecenas tincidunt non urna in luctus. Vivamus et tellus tortor. In eleifend euismod imperdiet.
          </p>

          <p className="overflow-auto text-nowrap">
            <code>.overflow-auto</code> - overflow: auto<br />
            Nullam ornare diam sed arcu interdum condimentum. Maecenas pharetra nibh interdum, laoreet ex et, dapibus lorem. Pellentesque a justo eu dolor tempus luctus. Suspendisse nec nisl quis ligula volutpat scelerisque vel a mi. Vivamus et velit elit. Aliquam consequat orci id arcu venenatis tempus. Donec varius convallis enim, ac auctor libero euismod eu. Nam rutrum molestie diam et sagittis. Integer consequat vestibulum interdum. Integer consequat scelerisque lectus, et viverra massa aliquam at. Phasellus consequat faucibus justo eu pulvinar. Maecenas tincidunt non urna in luctus. Vivamus et tellus tortor. In eleifend euismod imperdiet.
          </p>

          <div className="overflow-visible bg-light py-3" style={{width: '75%', overflow: 'hidden'}}>
            <code>.overflow-visible</code> - overflow: visible<br />
            <div className="bg-primary py-3" style={{width: '130%'}}></div>
          </div>
        </div>

        <h4 className="ui-block-heading">Cursor</h4>

        <div className="cui-example">
          <p className="ui-bordered p-4 cursor-pointer">
            <code>.cursor-pointer</code> - cursor: pointer
          </p>
          <p className="cursor-move ui-bordered p-4">
            <code>.cursor-move</code> - cursor: move / cursor: grab
          </p>
        </div>

        <h4 className="ui-block-heading">Sizing</h4>

        <p>Responsive variations for <code>.w-100</code> and <code>.w-auto</code>:</p>

        <ul>
          <li><code>.w-sm-100</code></li>
          <li><code>.w-md-100</code></li>
          <li><code>.w-lg-100</code></li>
          <li><code>.w-xl-100</code></li>
          <li><code>.w-sm-auto</code></li>
          <li><code>.w-md-auto</code></li>
          <li><code>.w-lg-auto</code></li>
          <li><code>.w-xl-auto</code></li>
        </ul>

        <h4 className="ui-block-heading">Layout container spacing</h4>

        <div className="cui-example mb-4">
          <div className="bg-light p-4 mb-4">
            <div className="bg-white container-p-x mb-4"><code>.container-p-x</code></div>
            <div className="bg-white container-p-y"><code>.container-p-y</code></div>
          </div>

          <p>Negative:</p>

          <div className="bg-light p-4">
            <div className="bg-light container-p-x mb-4">
              <div className="container-m-nx bg-white"><code>.container-m-nx</code></div>
            </div>
            <div className="bg-light container-p-y">
              <div className="container-m-ny bg-white"><code>.container-m-ny</code></div>
            </div>
          </div>
        </div>

        <h4 className="ui-block-heading">Negative horizontal margins</h4>

        <div className="cui-example mb-4">
          <div className="bg-light p-4">
            <div className="p-3">Top block</div>

            <div className="mx-lg-n4 bg-dark text-white p-3">
              Collapse horizontal spacing on large screens
            </div>

            <div className="p-3">Bottom block</div>
          </div>
        </div>

        <p>
          The classes are named using the format <code>m{'{'}sides}--{'{'}size}</code>
          for xs and <code>m{'{'}sides}--{'{'}breakpoint}-{'{'}size}</code> for sm, md, lg, and xl.
        </p>

        <p>Where sides is one of:</p>

        <ul>
          <li><code>l</code> - for classes that set <code>margin-left</code></li>
          <li><code>r</code> - for classes that set <code>margin-right</code></li>
          <li><code>x</code> - for classes that set both <code>*-left</code> and <code>*-right</code></li>
        </ul>

        <p>Where size is one of:</p>

        <ul>
          <li><code>1</code> - (by default) for classes that set the <code>margin</code> to <code>-1 * ($spacer * .25)</code></li>
          <li><code>2</code> - (by default) for classes that set the <code>margin</code> to <code>-1 * ($spacer * .5)</code></li>
          <li><code>3</code> - (by default) for classes that set the <code>margin</code> to <code>-1 * ($spacer)</code></li>
          <li><code>4</code> - (by default) for classes that set the <code>margin</code> to <code>-1 * ($spacer * 1.5)</code></li>
          <li><code>5</code> - (by default) for classes that set the <code>margin</code> to <code>-1 * ($spacer * 3)</code></li>
        </ul>

        <h4 className="ui-block-heading">Flex</h4>

        <p><code>.flex-basis-100</code> - flex-basis: 100%</p>
        <p><code>.flex-basis-auto</code> - flex-basis: auto</p>

        <p>Responsive variations also exist for <code>.flex-basis-100</code> and <code>.flex-basis-auto</code>.</p>

        <ul>
          <li><code>.flex-basis-sm-100</code></li>
          <li><code>.flex-basis-md-100</code></li>
          <li><code>.flex-basis-lg-100</code></li>
          <li><code>.flex-basis-xl-100</code></li>
          <li><code>.flex-basis-sm-auto</code></li>
          <li><code>.flex-basis-md-auto</code></li>
          <li><code>.flex-basis-lg-auto</code></li>
          <li><code>.flex-basis-xl-auto</code></li>
        </ul>

        <h4 className="ui-block-heading">Bordered rows</h4>

        <div className="alert alert-info">
          <code>.row-bordered</code> class defines <code>overflow: hidden</code> on
          the parent container and <code>position: relative</code> on immediate children
          <code>.col</code> and <code>.col-*</code> blocks.
        </div>

        <div className="cui-example cui-example-vertical-spacing">
          <div className="row row-bordered">
            <Col md={4} className="p-3">Col 1</Col>
            <Col md={4} className="p-3">Col 2</Col>
            <Col md={4} className="p-3">Col 3</Col>
            <div className="w-100"></div>
            <Col md={4} className="p-3">Col 4</Col>
            <Col md={4} className="p-3">Col 5</Col>
            <Col md={4} className="p-3">Col 6</Col>
          </div>
          <div className="row row-bordered row-border-light">
            <Col md={4} className="p-3">Col 1</Col>
            <Col md={4} className="p-3">Col 2</Col>
            <Col md={4} className="p-3">Col 3</Col>
            <Col md={4} className="p-3">Col 4</Col>
            <Col md={4} className="p-3">Col 5</Col>
            <Col md={4} className="p-3">Col 6</Col>
          </div>
        </div>

        <h4 className="ui-block-heading">Table cell</h4>

        <p>Add <code>.cell-fit</code> class to a <code>td</code> or <code>th</code> element to reduce column width to its content:</p>

        <div className="cui-example">
          <table className="table">
            <thead>
              <tr>
                <th className="cell-fit">#</th>
                <th>Full Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark Otto</td>
                <td className="cell-fit">@mdo</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Jacob Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 className="ui-block-heading">Transforms</h4>

        <div className="cui-example">
          <p className="font-weight-bold py-4">
            <code>.rotate-90</code> - <span className="rotate-90 d-inline-block">ROTATE</span>
          </p>

          <p className="font-weight-bold py-4">
            <code>.rotate-180</code> - <span className="rotate-180 d-inline-block">ROTATE</span>
          </p>

          <p className="font-weight-bold py-4">
            <code>.rotate-270</code> - <span className="rotate-270 d-inline-block">ROTATE</span>
          </p>

          <p className="font-weight-bold py-4">
            <code>.rotate--90</code> - <span className="rotate--90 d-inline-block">ROTATE</span>
          </p>

          <p className="font-weight-bold py-4">
            <code>.rotate--180</code> - <span className="rotate--180 d-inline-block">ROTATE</span>
          </p>

          <p className="font-weight-bold py-4">
            <code>.rotate--270</code> - <span className="rotate--270 d-inline-block">ROTATE</span>
          </p>

          <p className="font-weight-bold py-4">
            <code>.rotate-0</code> - <span className="rotate-0 d-inline-block">ROTATE</span>
          </p>

          <p className="font-weight-bold py-4">
            <code>.scaleX--1</code> - <span className="scaleX--1 d-inline-block">SCALE</span>
          </p>

          <p className="font-weight-bold py-4">
            <code>.scaleY--1</code> - <span className="scaleY--1 d-inline-block">SCALE</span>
          </p>

          <p>The next classes will have effect only in RTL mode:</p>

          <p className="font-weight-bold py-4">
            <code>.scaleX--1-rtl</code> - <span className="scaleX--1-rtl d-inline-block">SCALE</span>
          </p>

          <p className="font-weight-bold py-4">
            <code>.scaleY--1-rtl</code> - <span className="scaleY--1-rtl d-inline-block">SCALE</span>
          </p>
        </div>

        <h4 className="ui-block-heading">Fixes</h4>

        <div className="cui-example">
          {/* flex-truncate */}
          <p><code>.flex-truncate</code> - Fix for truncated text within flexbox container</p>

          {/* ie-mh-1 */}
          <p><code>.ie-mh-1</code> - Fix IE parent container height bug when containing image with fluid width</p>
        </div>
      </div>
    )
  }
}

export default CuiUtilities
