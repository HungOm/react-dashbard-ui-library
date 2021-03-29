import React, { Component } from 'react'
import { Card, Table, Button, Media, Row, Col } from 'react-bootstrap'
import { Link as RouterLink } from 'react-router-dom'
import * as numeral from 'numeral'

class Invoice extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Invoice - Pages')

    this.state = {
      invoiceData: {
        id: 49029,
        date: 'January 12, 2015',
        dueDate: 'May 12, 2015',
        taxPercent: 25,

        recipient: {
          name: 'Alice Hampton',
          company: 'Company LTD',
          street: '70 Bowman St.',
          city: 'South Windsor, CT 06074',
          country: 'United States',
          phone: '+9 (965) 645 8146',
          email: 'ahampton@mail.com'
        },

        details: {
          bankName: 'Finance Bank',
          country: 'United States',
          city: 'West New York, NJ 07093',
          address: '23 Sussex Ave.',
          iban: 'ETD85039283901259',
          swiftCode: 'AS4F1'
        },

        items: [{
          title: 'Website design and development',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
          hourRate: 50,
          hours: 63
        }, {
          title: 'Branding',
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
          hourRate: 47.95,
          hours: 36
        }]
      }
    }
  }

  get invoiceSubtotal() {
    return this.state.invoiceData.items.reduce((cnt, item) => {
      cnt += item.hourRate * item.hours
      return cnt
    }, 0)
  }

  get invoiceTax() {
    return this.invoiceSubtotal * this.state.invoiceData.taxPercent / 100
  }

  get invoiceTotal() {
    return this.invoiceSubtotal + this.invoiceTax
  }

  formatPrice(p) {
    return numeral(p).format('$0,0.00')
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          Invoice
        </h4>

        <Card>
          <Card.Body className="p-5">
            
            <div className="row">
              <Col sm={6} className="pb-4">

                <Media className="align-items-center mb-4">
                  <div className="ui-w-40">
                    <div className="w-100 position-relative" style={{ paddingBottom: '54%' }}>
                      <svg className="w-100 h-100 position-absolute" viewBox="0 0 148 80" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="a" x1="46.49" x2="62.46" y1="53.39" y2="48.2" gradientUnits="userSpaceOnUse"><stop stopOpacity=".25" offset="0"></stop><stop stopOpacity=".1" offset=".3"></stop><stop stopOpacity="0" offset=".9"></stop></linearGradient><linearGradient id="e" x1="76.9" x2="92.64" y1="26.38" y2="31.49" xlinkHref="#a"></linearGradient><linearGradient id="d" x1="107.12" x2="122.74" y1="53.41" y2="48.33" xlinkHref="#a"></linearGradient></defs><path fill="#999" transform="translate(-.1)" d="M121.36,0,104.42,45.08,88.71,3.28A5.09,5.09,0,0,0,83.93,0H64.27A5.09,5.09,0,0,0,59.5,3.28L43.79,45.08,26.85,0H.1L29.43,76.74A5.09,5.09,0,0,0,34.19,80H53.39a5.09,5.09,0,0,0,4.77-3.26L74.1,35l16,41.74A5.09,5.09,0,0,0,94.82,80h18.95a5.09,5.09,0,0,0,4.76-3.24L148.1,0Z"></path><path transform="translate(-.1)" d="M52.19,22.73l-8.4,22.35L56.51,78.94a5,5,0,0,0,1.64-2.19l7.34-19.2Z" fill="url(#a)"></path><path transform="translate(-.1)" d="M95.73,22l-7-18.69a5,5,0,0,0-1.64-2.21L74.1,35l8.33,21.79Z" fill="url(#e)"></path><path transform="translate(-.1)" d="M112.73,23l-8.31,22.12,12.66,33.7a5,5,0,0,0,1.45-2l7.3-18.93Z" fill="url(#d)"></path></svg>
                    </div>
                  </div>
                  <Media.Body className="text-big font-weight-bold ml-2">
                    Appwork
                  </Media.Body>
                </Media>

                <div className="mb-1">Office 154, 330 North Brand Boulevard</div>
                <div className="mb-1">Glendale, CA 91203, USA</div>
                <div>+0 (123) 456 7891, +9 (876) 543 2198</div>

              </Col>

              <Col sm={6} className="text-right pb-4">

                <h6 className="text-big text-large font-weight-bold mb-3">INVOICE #{this.state.invoiceData.id}</h6>
                <div className="mb-1">Date: <strong className="font-weight-semibold">{this.state.invoiceData.date}</strong></div>
                <div>Due date: <strong className="font-weight-semibold">{this.state.invoiceData.dueDate}</strong></div>

              </Col>
            </div>

            <hr className="mb-4" />

            <Row>
              <Col sm={6} className="mb-4">

                <div className="font-weight-bold mb-2">Invoice To:</div>
                <div>{this.state.invoiceData.recipient.name}</div>
                {this.state.invoiceData.recipient.company && <div>{this.state.invoiceData.recipient.company}</div>}
                <div>{this.state.invoiceData.recipient.street}</div>
                <div>{this.state.invoiceData.recipient.city}</div>
                <div>{this.state.invoiceData.recipient.country}</div>
                {this.state.invoiceData.recipient.phone && <div>{this.state.invoiceData.recipient.phone}</div>}
                <div>{this.state.invoiceData.recipient.email}</div>

              </Col>
              <Col sm={6} className="mb-4">

                <div className="font-weight-bold mb-2">Payment Details:</div>
                <table>
                  <tbody>
                    <tr>
                      <td className="pr-3">Total Due:</td>
                      <td><strong>{this.formatPrice(this.invoiceTotal)}</strong></td>
                    </tr>
                    <tr>
                      <td className="pr-3">Bank name:</td>
                      <td>{this.state.invoiceData.details.bankName}</td>
                    </tr>
                    <tr>
                      <td className="pr-3">Country:</td>
                      <td>{this.state.invoiceData.details.country}</td>
                    </tr>
                    <tr>
                      <td className="pr-3">City:</td>
                      <td>{this.state.invoiceData.details.city}</td>
                    </tr>
                    <tr>
                      <td className="pr-3">Address:</td>
                      <td>{this.state.invoiceData.details.address}</td>
                    </tr>
                    <tr>
                      <td className="pr-3">IBAN:</td>
                      <td>{this.state.invoiceData.details.iban}</td>
                    </tr>
                    <tr>
                      <td className="pr-3">SWIFT code:</td>
                      <td>{this.state.invoiceData.details.swiftCode}</td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>

            <div className="table-responsive mb-4">
              <Table className="m-0">
                <thead>
                  <tr>
                    <th className="py-3">Task description</th>
                    <th className="py-3">Rate</th>
                    <th className="py-3">Hours</th>
                    <th className="py-3">Line total</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.invoiceData.items.map(item => 
                    <tr key={item.title}>
                      <td className="py-3">
                        <div className="font-weight-semibold">{item.title}</div>
                        {item.description && <div className="text-muted">{item.description}</div>}
                      </td>
                      <td className="py-3">
                        <strong>{this.formatPrice(item.hourRate)}</strong>
                      </td>
                      <td className="py-3">
                        <strong>{item.hours}</strong>
                      </td>
                      <td className="py-3">
                        <strong>{this.formatPrice(item.hourRate * item.hours)}</strong>
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td colSpan="3" className="text-right py-3">
                      Subtotal:<br />
                      Tax({this.state.invoiceData.taxPercent}%):<br />
                      <span className="d-block text-big mt-2">Total:</span>
                    </td>
                    <td className="py-3">
                      <strong>{this.formatPrice(this.invoiceSubtotal)}</strong><br />
                      <strong>{this.formatPrice(this.invoiceTax)}</strong><br />
                      <strong className="d-block text-big mt-2">{this.formatPrice(this.invoiceTotal)}</strong>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <div className="text-muted">
              <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet, dolor id dapibus dapibus, neque mi tincidunt quam, quis congue ligula risus vitae magna. Curabitur ultrices nisi massa, nec viverra lorem feugiat sed. Mauris non porttitor nunc. Integer eu orci in magna auctor vestibulum.
            </div>

          </Card.Body>

          <Card.Footer className="text-right">
            <RouterLink to="/pages/invoice-print" target="_blank" rel="noopener noreferrer" className="btn btn-default ml-2"><i className="ion ion-md-print"></i>&nbsp; Print</RouterLink>
            <Button variant="primary" className="ml-2"><i className="ion ion-ios-paper-plane"></i>&nbsp; Send</Button>
          </Card.Footer>
        </Card>

      </div>
    )
  }
}

export default Invoice
