import React, { Component } from 'react'
import { connect } from 'react-redux'

class LayoutFooter extends Component {
  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <nav className={`layout-footer footer bg-${this.props.footerBg}`}>
        <div className="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">
          <div className="pt-3">
            <span className="footer-text font-weight-bolder">Appwork</span> ©
          </div>
          <div>
            <a href="#d" onClick={this.prevent} className="footer-link pt-3">About Us</a>
            <a href="#d" onClick={this.prevent} className="footer-link pt-3 ml-4">Help</a>
            <a href="#d" onClick={this.prevent} className="footer-link pt-3 ml-4">Contact</a>
            <a href="#d" onClick={this.prevent} className="footer-link pt-3 ml-4">Terms &amp; Conditions</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default connect(store => ({
  footerBg: store.theme.footerBg
}))(LayoutFooter)
