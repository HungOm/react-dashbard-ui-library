import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class BrandColors extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Brand colors - Miscellaneous')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Miscellaneous /</span> Brand colors
        </h4>

        <Card>
          <Card.Body className="text-center">
            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-twitter text-white p-4">.bg-twitter</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-twitter">.text-twitter</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-twitter">.btn-twitter</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-twitter">.btn-outline-twitter</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-google text-white p-4">.bg-google</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-google">.text-google</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-google">.btn-google</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-google">.btn-outline-google</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-facebook text-white p-4">.bg-facebook</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-facebook">.text-facebook</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-facebook">.btn-facebook</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-facebook">.btn-outline-facebook</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-pinterest text-white p-4">.bg-pinterest</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-pinterest">.text-pinterest</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-pinterest">.btn-pinterest</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-pinterest">.btn-outline-pinterest</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-instagram text-white p-4">.bg-instagram</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-instagram">.text-instagram</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-instagram">.btn-instagram</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-instagram">.btn-outline-instagram</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-flickr text-white p-4">.bg-flickr</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-flickr">.text-flickr</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-flickr">.btn-flickr</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-flickr">.btn-outline-flickr</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-linkedin text-white p-4">.bg-linkedin</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-linkedin">.text-linkedin</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-linkedin">.btn-linkedin</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-linkedin">.btn-outline-linkedin</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-periscope text-white p-4">.bg-periscope</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-periscope">.text-periscope</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-periscope">.btn-periscope</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-periscope">.btn-outline-periscope</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-tumblr text-white p-4">.bg-tumblr</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-tumblr">.text-tumblr</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-tumblr">.btn-tumblr</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-tumblr">.btn-outline-tumblr</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-vimeo text-white p-4">.bg-vimeo</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-vimeo">.text-vimeo</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-vimeo">.btn-vimeo</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-vimeo">.btn-outline-vimeo</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-youtube text-white p-4">.bg-youtube</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-youtube">.text-youtube</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-youtube">.btn-youtube</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-youtube">.btn-outline-youtube</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-windows text-white p-4">.bg-windows</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-windows">.text-windows</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-windows">.btn-windows</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-windows">.btn-outline-windows</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-macos text-white p-4">.bg-macos</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-macos">.text-macos</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-macos">.btn-macos</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-macos">.btn-outline-macos</button>
              </div>
            </div>

            <hr className="mx-n4 my-4" />

            <div className="row align-items-center">
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <div className="bg-linux text-white p-4">.bg-linux</div>
              </div>
              <div className="col-6 col-md-3 mb-4 mb-md-0">
                <a href="#d" onClick={this.prevent} className="text-linux">.text-linux</a>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-linux">.btn-linux</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-outline-linux">.btn-outline-linux</button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default BrandColors
