import React, { Component } from 'react'
import { Card, Badge, Table, Row, Col, Media } from 'react-bootstrap'
import * as numeral from 'numeral'

class ECommerceOrderDetail extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Order detail - Pages')

    this.state = {
      orderData: {
        id: 3455632,
        status: 1,
        lastUpdate: '02/25/2018',
        date: '02/17/2018 16:23',

        billing: {
          name: 'John Doe',
          phone: '123-456-7891',
          email: 'jdoe@email.com',
          country: 'USA',
          state: 'California',
          city: 'San Francisco',
          zip_code: '94108',
          address: '950 Mason St, San Francisco, CA 94108, USA'
        },

        shipping: {
          name: 'John Doe',
          phone: '123-456-7891',
          email: 'jdoe@email.com',
          country: 'USA',
          state: 'California',
          city: 'San Francisco',
          zip_code: '94108',
          address: '950 Mason St, San Francisco, CA 94108, USA'
        },

        items: [{
          image: 'nike-1.jpg',
          title: 'Nike Men Black Liteforce III Sneakers',
          id: 3455632,
          price: 115.10,
          quantity: 2,
          options: {
            color: '#e81e2c',
            size: 'EU 37',
            ships_from: 'China'
          }
        }, {
          image: 's7edge-1.jpg',
          title: 'Samsung Galaxy S7 Edge',
          id: 3455644,
          price: 1049.00,
          quantity: 1,
          options: {
            color: '#000',
            storage: '32GB',
            warranty: 'Standard - 1 year',
            ships_from: 'China'
          }
        }, {
          image: 'sunglasses.jpg',
          title: 'WALKING 400 BLUE CAT3',
          id: 3455601,
          price: 20.55,
          quantity: 1,
          options: {
            ships_from: 'Germany'
          }
        }]
      }
    }
  }

  formatPrice (p) {
    return numeral(p).format('$0,0.00')
  }

  formatOptionLabel (v) {
    return v.replace(/_/g, ' ').replace(/^(.)/, (m, $1) => $1.toUpperCase())
  }

  get orderItems() {
    return this.state.orderData.items.reduce((cnt, i) => cnt + i.quantity, 0)
  }

  get orderAmount() {
    return this.formatPrice(
      this.state.orderData.items.reduce((cnt, i) => cnt + i.price, 0)
    )
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          Order <span className="text-muted">#{this.state.orderData.id}</span>
        </h4>

        <Card>

          {/* Status */}
          <Card.Body>
            <strong className="mr-2">Status:</strong>
            <span className="text-big">
              {this.state.orderData.status === 1 && <Badge variant="success">Shipped</Badge>}
              {this.state.orderData.status === 2 && <Badge variant="warning">Pending</Badge>}
              {this.state.orderData.status === 3 && <Badge variant="info">Sent</Badge>}
              {this.state.orderData.status === 4 && <Badge variant="danger">Cancelled</Badge>}
            </span>
            <span className="text-muted small ml-1">{this.state.orderData.lastUpdate}</span>
          </Card.Body>
          <hr className="m-0" />
          {/* / Status */}

          {/* Info */}
          <Card.Body className="pb-1">
            <Row>
              <Col md={4} className="mb-3">
                <div className="text-muted small">Date</div>
                {this.state.orderData.date}
              </Col>
              <Col md={4} className="mb-3">
                <div className="text-muted small">Items</div>
                {this.orderItems}
              </Col>
              <Col md={4} className="mb-3">
                <div className="text-muted small">Amount</div>
                {this.orderAmount}
              </Col>
            </Row>
          </Card.Body>
          <hr className="m-0" />
          {/* / Info */}

          {/* Billing */}
          <Card.Body>
            <h6 className="small font-weight-semibold">
              Billing Info
            </h6>
            <Row>
              <Col md={6} className="mb-3">
                <div className="text-muted small">Name</div>
                {this.state.orderData.billing.name}
              </Col>
              <Col md={3} className="mb-3">
                <div className="text-muted small">Phone</div>
                {this.state.orderData.billing.phone}
              </Col>
              <Col md={3} className="mb-3">
                <div className="text-muted small">Email</div>
                {this.state.orderData.billing.email}
              </Col>
              <Col md={3} className="mb-3">
                <div className="text-muted small">Country</div>
                {this.state.orderData.billing.country}
              </Col>
              <Col md={3} className="mb-3">
                <div className="text-muted small">State / Region</div>
                {this.state.orderData.billing.state}
              </Col>
              <Col md={3} className="mb-3">
                <div className="text-muted small">City</div>
                {this.state.orderData.billing.city}
              </Col>
              <Col md={3} className="mb-3">
                <div className="text-muted small">ZIP Code</div>
                {this.state.orderData.billing.zip_code}
              </Col>
              <Col xs={12}>
                <div className="text-muted small">Address</div>
                {this.state.orderData.billing.address}
              </Col>
            </Row>
          </Card.Body>
          <hr className="m-0" />
          {/* / Billing */}

          {/* Shipping */}
          <Card.Body>
            <h6 className="small font-weight-semibold">
              Shipping Info
            </h6>
            <div className="row">
              <Col md={6} className="mb-3">
                <div className="text-muted small">Name</div>
                {this.state.orderData.shipping.name}
              </Col>
              <Col md={3} className="mb-3">
                <div className="text-muted small">Phone</div>
                {this.state.orderData.shipping.phone}
              </Col>
              <Col md={3} className="mb-3">
                <div className="text-muted small">Email</div>
                {this.state.orderData.shipping.email}
              </Col>
              <Col md={3} className="mb-3">
                <div className="text-muted small">Country</div>
                {this.state.orderData.shipping.country}
              </Col>
              <Col md={3} className="mb-3">
                <div className="text-muted small">State / Region</div>
                {this.state.orderData.shipping.state}
              </Col>
              <Col md={3} className="mb-3">
                <div className="text-muted small">City</div>
                {this.state.orderData.shipping.city}
              </Col>
              <Col md={3} className="mb-3">
                <div className="text-muted small">ZIP Code</div>
                {this.state.orderData.shipping.zip_code}
              </Col>
              <Col xs={12}>
                <div className="text-muted small">Address</div>
                {this.state.orderData.shipping.address}
              </Col>
            </div>
          </Card.Body>
          <hr className="m-0" />
          {/* / Shipping */}

          {/* Items */}
          <Card.Body>
            <h6 className="small font-weight-semibold">
              Items
            </h6>

            <Table bordered responsive style={{ minWidth: '550px' }}>
              <tbody>
                {this.state.orderData.items.map(item =>
                  <tr key={item.id}>
                    <td className="p-4">
                      <Media className="align-items-center">
                        <img src={`${process.env.PUBLIC_URL}/img/uikit/${item.image}`} className="d-block ui-w-40 ui-bordered mr-4" alt={item.title} />
                        <Media.Body>
                          <a href="#d" onClick={this.prevent} className="d-block text-body">{item.title} <span className="text-muted">#{item.id}</span></a>
                          <small>
                            {Object.keys(item.options).map(optionKey => {
                              const optionValue = item.options[optionKey]
                              return (
                                <React.Fragment key={optionKey + optionValue}>
                                  <span className="text-muted">{this.formatOptionLabel(optionKey)}:</span>
                                  {optionKey === 'color'
                                    ? <span className="ui-product-color ui-product-color-sm align-text-bottom" style={{ background: optionValue }}></span>
                                    : optionValue}
                                  &nbsp;
                                </React.Fragment>
                              )
                            })}
                          </small>
                        </Media.Body>
                      </Media>
                    </td>
                    <td className="p-4 align-middle" style={{ width: '66px' }}>x{item.quantity}</td>
                    <td className="p-4 text-right align-middle font-weight-semibold" style={{ width: '100px' }}>{this.formatPrice(item.price)}</td>
                  </tr>
                )}
              </tbody>
            </Table>

          </Card.Body>
          {/* / Items */}

        </Card>
      </div>
    )
  }
}

export default ECommerceOrderDetail
