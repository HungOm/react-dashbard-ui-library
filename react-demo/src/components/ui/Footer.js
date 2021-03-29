import React, { Component } from 'react'
import {  } from 'react-bootstrap'

class Footer extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Footer - UI elements')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> Footer
        </h4>

        <nav className="footer bg-footer-theme pt-4 mb-4">
          <div className="container text-center py-4">
            <div className="pb-3">
              <a href="#d" onClick={this.prevent} className="footer-text text-large font-weight-normal">.bg-footer-theme</a> <span className="align-top">©</span>
            </div>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">ABOUT US</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">About</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Our Story</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Shipping</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">CATEGORY</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Woman</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Man</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Kids</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">SUPPORT</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">FAQ</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Support</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Consultant</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">PARTNERS</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Wholesale</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Office solutions</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Press Resource</a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="footer bg-white pt-4 mb-4">
          <div className="container text-center py-4">
            <div className="pb-3">
              <a href="#d" onClick={this.prevent} className="footer-text text-large font-weight-normal">.bg-white</a> <span className="align-top">©</span>
            </div>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">ABOUT US</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">About</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Our Story</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Shipping</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">CATEGORY</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Woman</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Man</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Kids</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">SUPPORT</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">FAQ</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Support</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Consultant</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">PARTNERS</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Wholesale</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Office solutions</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Press Resource</a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="footer bg-primary pt-4 mb-4">
          <div className="container text-center py-4">
            <div className="pb-3">
              <a href="#d" onClick={this.prevent} className="footer-text text-large font-weight-normal">.bg-primary</a> <span className="align-top">©</span>
            </div>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">ABOUT US</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">About</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Our Story</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Shipping</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">CATEGORY</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Woman</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Man</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Kids</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">SUPPORT</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">FAQ</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Support</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Consultant</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">PARTNERS</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Wholesale</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Office solutions</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Press Resource</a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="footer bg-secondary pt-4 mb-4">
          <div className="container text-center py-4">
            <div className="pb-3">
              <a href="#d" onClick={this.prevent} className="footer-text text-large font-weight-normal">.bg-secondary</a> <span className="align-top">©</span>
            </div>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">ABOUT US</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">About</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Our Story</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Shipping</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">CATEGORY</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Woman</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Man</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Kids</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">SUPPORT</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">FAQ</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Support</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Consultant</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">PARTNERS</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Wholesale</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Office solutions</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Press Resource</a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="footer bg-success pt-4 mb-4">
          <div className="container text-center py-4">
            <div className="pb-3">
              <a href="#d" onClick={this.prevent} className="footer-text text-large font-weight-normal">.bg-success</a> <span className="align-top">©</span>
            </div>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">ABOUT US</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">About</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Our Story</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Shipping</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">CATEGORY</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Woman</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Man</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Kids</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">SUPPORT</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">FAQ</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Support</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Consultant</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">PARTNERS</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Wholesale</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Office solutions</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Press Resource</a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="footer bg-info pt-4 mb-4">
          <div className="container text-center py-4">
            <div className="pb-3">
              <a href="#d" onClick={this.prevent} className="footer-text text-large font-weight-normal">.bg-info</a> <span className="align-top">©</span>
            </div>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">ABOUT US</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">About</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Our Story</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Shipping</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">CATEGORY</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Woman</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Man</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Kids</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">SUPPORT</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">FAQ</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Support</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Consultant</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">PARTNERS</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Wholesale</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Office solutions</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Press Resource</a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="footer bg-warning pt-4 mb-4">
          <div className="container text-center py-4">
            <div className="pb-3">
              <a href="#d" onClick={this.prevent} className="footer-text text-large font-weight-normal">.bg-warning</a> <span className="align-top">©</span>
            </div>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">ABOUT US</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">About</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Our Story</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Shipping</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">CATEGORY</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Woman</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Man</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Kids</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">SUPPORT</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">FAQ</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Support</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Consultant</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">PARTNERS</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Wholesale</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Office solutions</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Press Resource</a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="footer bg-danger pt-4 mb-4">
          <div className="container text-center py-4">
            <div className="pb-3">
              <a href="#d" onClick={this.prevent} className="footer-text text-large font-weight-normal">.bg-danger</a> <span className="align-top">©</span>
            </div>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">ABOUT US</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">About</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Our Story</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Shipping</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">CATEGORY</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Woman</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Man</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Kids</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">SUPPORT</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">FAQ</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Support</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Consultant</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">PARTNERS</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Wholesale</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Office solutions</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Press Resource</a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="footer bg-dark pt-4 mb-4">
          <div className="container text-center py-4">
            <div className="pb-3">
              <a href="#d" onClick={this.prevent} className="footer-text text-large font-weight-normal">.bg-dark</a> <span className="align-top">©</span>
            </div>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">ABOUT US</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">About</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Our Story</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Shipping</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">CATEGORY</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Woman</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Man</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Kids</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">SUPPORT</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">FAQ</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Support</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Consultant</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">PARTNERS</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Wholesale</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Office solutions</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Press Resource</a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="footer bg-lighter pt-4 mb-4">
          <div className="container text-center py-4">
            <div className="pb-3">
              <a href="#d" onClick={this.prevent} className="footer-text text-large font-weight-normal">.bg-lighter</a> <span className="align-top">©</span>
            </div>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">ABOUT US</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">About</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Our Story</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Shipping</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">CATEGORY</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Woman</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Man</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Kids</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">SUPPORT</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">FAQ</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Support</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Consultant</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">PARTNERS</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Wholesale</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Office solutions</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Press Resource</a>
              </div>
            </div>
          </div>
        </nav>

        <nav className="footer bg-light pt-4 mb-4">
          <div className="container text-center py-4">
            <div className="pb-3">
              <a href="#d" onClick={this.prevent} className="footer-text text-large font-weight-normal">.bg-light</a> <span className="align-top">©</span>
            </div>
            <hr className="mb-4" />
            <div className="row">
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">ABOUT US</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">About</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Our Story</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Shipping</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">CATEGORY</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Woman</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Man</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Kids</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">SUPPORT</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">FAQ</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Support</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Consultant</a>
              </div>
              <div className="col-sm pb-4">
                <div className="footer-text small font-weight-bold mb-3">PARTNERS</div>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Wholesale</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Office solutions</a>
                <a href="#d" onClick={this.prevent} className="footer-link d-block pb-2">Press Resource</a>
              </div>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Footer
