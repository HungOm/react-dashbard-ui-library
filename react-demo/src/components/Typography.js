import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

class Typography extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Typography')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          Typography
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-4" />

        <h6 className="text-muted small font-weight-bold py-3 my-4">
          Headings
        </h6>

        <h1>h1. Bootstrap heading
          <small className="text-muted">Secondary text</small>
        </h1>
        <h2>h2. Bootstrap heading
          <small className="text-muted">Secondary text</small>
        </h2>
        <h3>h3. Bootstrap heading
          <small className="text-muted">Secondary text</small>
        </h3>
        <h4>h4. Bootstrap heading
          <small className="text-muted">Secondary text</small>
        </h4>
        <h5>h5. Bootstrap heading
          <small className="text-muted">Secondary text</small>
        </h5>
        <h6>h6. Bootstrap heading
          <small className="text-muted">Secondary text</small>
        </h6>

        <hr className="container-m-nx border-light my-4" />
        <h6 className="text-muted small font-weight-bold py-3 my-4">
          Display headings
        </h6>

        <h1 className="display-1">Display 1</h1>
        <h1 className="display-2">Display 2</h1>
        <h1 className="display-3">Display 3</h1>
        <h1 className="display-4">Display 4</h1>

        <hr className="container-m-nx border-light my-4" />
        <h6 className="text-muted small font-weight-bold py-3 my-4">
          Paragraph
        </h6>

        <p>
          Lorem ipsum dolor sit amet, ad tibique blandit qui, error zril eleifend ut vel. Et paulo labores molestiae has, ei eos virtute dolorem.
        </p>

        {/* Lead */}
        <p className="lead">
          Lorem ipsum dolor sit amet, ad tibique blandit qui, error zril eleifend ut vel. Et paulo labores molestiae has, ei eos virtute dolorem.
        </p>

        <hr className="container-m-nx border-light my-4" />
        <h6 className="text-muted small font-weight-bold py-3 my-4">
          Inline text elements
        </h6>

        {/* Marked text */}
        <p>
          You can use the mark tag to
          <mark>highlight</mark> text.
        </p>

        {/* Deleted text */}
        <p>
          <del>This line of text is meant to be treated as deleted text.</del>
        </p>

        {/* Strikethrough text */}
        <p>
          <s>This line of text is meant to be treated as no longer accurate.</s>
        </p>

        {/* Underlined text */}
        <p>
          <u>This line of text will render as underlined</u>
        </p>

        {/* Small text */}
        <p>
          <small>This line of text is meant to be treated as fine print.</small>
        </p>

        {/* Bold */}
        <p>
          <strong>rendered as bold text</strong>
        </p>

        {/* Italics */}
        <p>
          <em>rendered as italicized text</em>
        </p>

        <hr className="container-m-nx border-light my-4" />
        <h6 className="text-muted small font-weight-bold py-3 my-4">
          Abbreviations
        </h6>

        {/* Basic abbreviation */}
        <p>
          An abbreviation of the word attribute is
          <abbr title="attribute">attr</abbr>.
        </p>

        {/* Initialism */}
        <p>
          <abbr title="HyperText Markup Language" className="initialism">HTML</abbr> is the best thing since sliced bread.
        </p>

        <hr className="container-m-nx border-light my-4" />
        <h6 className="text-muted small font-weight-bold py-3 my-4">
          Addresses
        </h6>

        <address>
          <strong>Twitter, Inc.</strong>
          <br /> 1355 Market Street, Suite 900
          <br /> San Francisco, CA 94103
          <br />
          <abbr title="Phone">P:</abbr> (123) 456-7890
        </address>

        <address>
          <strong>Full Name</strong>
          <br />
          <a href="mailto:#">first.last@example.com</a>
        </address>

        <hr className="container-m-nx border-light my-4" />
        <h6 className="text-muted small font-weight-bold py-3 my-4">
          Blockquotes
        </h6>

        <div className="demo-vertical-spacing">
          {/* Default blockquote */}
          <blockquote className="blockquote">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </blockquote>

          {/* Blockquote options */}
          <blockquote className="blockquote">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>

          <blockquote className="blockquote text-center">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>

          <blockquote className="blockquote text-right">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </div>

        <hr className="container-m-nx border-light my-4" />
        <h6 className="text-muted small font-weight-bold py-3 my-4">
          Lists
        </h6>

        <div className="demo-vertical-spacing-lg">
          {/* Unordered */}
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>

          {/* Ordered */}
          <ol>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ol>

          {/* Unstyled */}
          <ul className="list-unstyled">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>

          {/* Inline */}
          <ul className="list-inline">
            <li className="list-inline-item">Lorem ipsum</li>
            <li className="list-inline-item">Phasellus iaculis</li>
            <li className="list-inline-item">Nulla volutpat</li>
          </ul>

          {/* Description */}
          <dl>
            <dt>Description lists</dt>
            <dd>A description list is perfect for defining terms.</dd>
            <dt>Euismod</dt>
            <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
            <dd>Donec id elit non mi porta gravida at eget metus.</dd>
            <dt>Malesuada porta</dt>
            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
          </dl>

          {/* Horizontal description */}
          <dl className="row">
            <dt className="col-sm-3">Description lists</dt>
            <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

            <dt className="col-sm-3">Euismod</dt>
            <dd className="col-sm-9">
              <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
              <p>Donec id elit non mi porta gravida at eget metus.</p>
            </dd>

            <dt className="col-sm-3">Malesuada porta</dt>
            <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

            <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
            <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

            <dt className="col-sm-3">Nesting</dt>
            <dd className="col-sm-9">
              <dl className="row">
                <dt className="col-sm-4">Nested definition list</dt>
                <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
              </dl>
            </dd>
          </dl>
        </div>

        <hr className="container-m-nx border-light my-4" />
        <h6 className="text-muted small font-weight-bold py-3 my-4">
          Code
        </h6>

        {/* Inline */}
        <p>
          For example, <code>&lt;section&gt;</code> should be wrapped as inline.
        </p>

        {/* User input */}
        <p>
          To switch directories, type <kbd>cd</kbd> followed by the name of the directory.
          <br /> To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
        </p>

        {/* Code block */}
        <pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>

        {/* Variables */}
        <p>
          <var>y</var> = <var>m</var><var>x</var> + <var>b</var>
        </p>

        {/* Sample output */}
        <p>
          <samp>This text is meant to be treated as sample output from a computer program.</samp>
        </p>

        <hr className="container-m-nx border-light my-4" />
        <h6 className="text-muted small font-weight-bold py-3 my-4">
          Jumbotron
        </h6>

        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button variant="primary" size="lg">Learn more</Button>
          </p>
        </Jumbotron>

        <hr className="container-m-nx border-light my-4" />
        <h6 className="text-muted small font-weight-bold py-3 my-4">
          Figures
        </h6>

        <figure className="figure" style={{ maxWidth: '25rem' }}>
          <img src={`${process.env.PUBLIC_URL}/img/bg/1.jpg`} className="figure-img img-fluid" alt="Figure" />
          <figcaption className="figure-caption">A caption for the above image.</figcaption>
        </figure>
      </div>
    )
  }
}

export default Typography
