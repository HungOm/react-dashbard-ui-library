import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'

class Pricing extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Pricing - Pages')

    this.onBilledAnnuallyChange = this.onBilledAnnuallyChange.bind(this)

    this.state = {
      billedAnnually: true,
      discountPercent: 20,

      pricingData: {
        professional: 12,
        smallBuisness: 20,
        enterprise: 50
      }
    }
  }

  planPrice(price) {
    return this.state.billedAnnually ? Math.floor(price * 12 * (100 - this.state.discountPercent) / 100) : price
  }

  onBilledAnnuallyChange(e) {
    this.setState({
      billedAnnually: e.target.checked
    })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div className="container px-0">

        <h1 className="text-center font-weight-bolder pt-5 mb-3">
          Pricing plans
        </h1>
        <div className="text-center text-muted text-large font-weight-light">
          Choose the best plan that fits your needs
        </div>

        <div className="d-flex align-items-center my-5">
          <div className="flex-shrink-1 w-100 text-right text-big mr-3">Billed monthly</div>
          <label className="switcher switcher-lg switcher-success m-0">
            <input type="checkbox" className="switcher-input" checked={this.state.billedAnnually} onChange={this.onBilledAnnuallyChange} />
            <span className="switcher-indicator">
              <span className="switcher-yes"></span>
              <span className="switcher-no"></span>
            </span>
          </label>
          <div className="flex-shrink-1 w-100 text-success text-big ml-3">Billed annually - Save {this.state.discountPercent}%</div>
        </div>

        <div className="row no-gutters row-bordered ui-bordered text-center">

          <Col md className="d-flex flex-column py-4">
            <div className="display-1 text-primary my-4"><i className="lnr lnr-briefcase text-big"></i></div>
            <h5 className="m-0">Professional</h5>
            <div className="flex-grow-1">
              <div className="py-4 my-2">
                <span className="d-inline-block text-muted text-big align-middle mr-2">$</span>
                <span className="display-3 d-inline-block font-weight-bold align-middle">{this.planPrice(this.state.pricingData.professional)}</span>
                <span className="d-inline-block text-muted text-big align-middle ml-2">/ {this.state.billedAnnually ? 'yr' : 'mo'}</span>
              </div>
              <div className="pb-5">
                <p className="ui-company-text mb-2">5 users</p>
                <p className="ui-company-text mb-2">10 projects</p>
                <p className="ui-company-text mb-0">100GB space</p>
              </div>
            </div>
            <div className="px-md-3 px-lg-5">
              <Button variant="outline-primary rounded-pill" size="lg">Get Started</Button>
            </div>
          </Col>

          <Col md className="d-flex flex-column py-4">
            <div className="display-1 text-primary my-4"><i className="lnr lnr-store text-big"></i></div>
            <h5 className="m-0">Small Buisness</h5>
            <div className="flex-grow-1">
              <div className="py-4 my-2">
                <span className="d-inline-block text-muted text-big align-middle mr-2">$</span>
                <span className="display-3 d-inline-block font-weight-bold align-middle">{this.planPrice(this.state.pricingData.smallBuisness)}</span>
                <span className="d-inline-block text-muted text-big align-middle ml-2">/ {this.state.billedAnnually ? 'yr' : 'mo'}</span>
              </div>
              <div className="pb-5">
                <p className="ui-company-text mb-2">20 users</p>
                <p className="ui-company-text mb-2">100 projects</p>
                <p className="ui-company-text mb-0">300GB space</p>
              </div>
            </div>
            <div className="px-md-3 px-lg-5">
              <Button variant="primary rounded-pill" size="lg">Get Started</Button>
            </div>
          </Col>

          <Col md className="d-flex flex-column py-4">
            <div className="display-1 text-primary my-4"><i className="lnr lnr-apartment text-big"></i></div>
            <h5 className="m-0">Enterprise</h5>
            <div className="flex-grow-1">
              <div className="py-4 my-2">
                <span className="d-inline-block text-muted text-big align-middle mr-2">$</span>
                <span className="display-3 d-inline-block font-weight-bold align-middle">{this.planPrice(this.state.pricingData.enterprise)}</span>
                <span className="d-inline-block text-muted text-big align-middle ml-2">/ {this.state.billedAnnually ? 'yr' : 'mo'}</span>
              </div>
              <div className="pb-5">
                <p className="ui-company-text mb-2">Unlimited users</p>
                <p className="ui-company-text mb-2">Unlimited projects</p>
                <p className="ui-company-text mb-0">1000GB space</p>
              </div>
            </div>
            <div className="px-md-3 px-lg-5">
              <Button variant="outline-primary rounded-pill" size="lg">Get Started</Button>
            </div>
          </Col>

        </div>

        <div className="text-center text-big mt-5">
          <a href="#d" onClick={this.prevent}>Get started with a 14-day no-obligation free trial</a>
        </div>

        <hr className="border-light mt-5" />
        <h3 className="text-center font-weight-light my-5">Frequently Asked Questions</h3>

        <Row>
          <Col md={6}>

            <h5 className="mb-2">Dapibus ac facilisis in?</h5>
            <p className="ui-company-text text-muted mb-4">
              Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu.
            </p>

            <h5 className="mb-2">Cras justo odio?</h5>
            <p className="ui-company-text text-muted mb-4">
              Etiam vivendo eu sea, purto ponderum mediocritatem at pro.
            </p>

            <h5 className="mb-2">Porta ac consectetur ac?</h5>
            <p className="ui-company-text text-muted mb-4">
              Iuvaret deleniti vulputate nec ne, id vix lucilius legendos deseruisse.
            </p>

            <h5 className="mb-2">Ne ornatus albucius ius?</h5>
            <p className="ui-company-text text-muted mb-4">
              Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.
            </p>

          </Col>
          <Col md={6}>

            <h5 className="mb-2">Ne ornatus albucius ius?</h5>
            <p className="ui-company-text text-muted mb-4">
              Lorem ipsum dolor sit amet, mea in pertinax hendrerit gloriatur.
            </p>

            <h5 className="mb-2">Quo insolens intellegam dissentiet at?</h5>
            <p className="ui-company-text text-muted mb-4">
              Ex fugit legimus fuisset per. Ex quidam option diceret ius.
            </p>

            <h5 className="mb-2">Ad his assum delenit blandit?</h5>
            <p className="ui-company-text text-muted mb-4">
              Ne ornatus albucius ius, nostrum dignissim repudiandae an usu.
            </p>

            <h5 className="mb-2">Dapibus ac facilisis in?</h5>
            <p className="ui-company-text text-muted mb-4">
              Lorem ipsum dolor sit amet, ius virtute suscipit te. Ius prima euismod consequat eu.
            </p>

          </Col>
        </Row>

      </div>
    )
  }
}

export default Pricing
