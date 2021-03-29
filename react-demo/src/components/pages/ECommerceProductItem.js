import React, { Component } from 'react'
import { Card, Row, Button, Media, Col, Table, Tabs, Tab, Badge } from 'react-bootstrap'
import * as numeral from 'numeral'
import '../../vendor/styles/pages/products.scss'

class ECommerceProductItem extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Product item - Pages')

    this.state = {
      productData: {
        id: 3455632,
        title: 'Samsung Galaxy S7 Edge',
        price: 1049,
        category: 'Mobile phones',
        in_stock: 123,
        tax: 25,
        status: 1,

        // Statistics
        rating: 4.3,
        reviews: 123,
        sales: 1045,
        views: 65326,
        wished: 3671,

        // Options
        options: {
          brand: 'Samsung',
          storages: ['32GB', '64GB'],
          colors: [['Black', '#000'], ['Green', '#5f9ea0'], ['Gold', '#c5baab']],
          warranties: ['Standard - 1 year', 'Extended - 2 years | $99'],
          ships_from: ['USA', 'China', 'Germany']
        },

        // Meta
        meta: {
          title: 'Samsung Galaxy S7 Edge',
          description: 'Buy Samsung Galaxy S7 Edge!',
          keywords: 'Mobile, Smartphone, Samsung, Galaxy, S3, Edge'
        },

        // Images
        images: [
          { image: 's7edge-1.jpg', primary: true },
          { image: 's7edge-2.jpg' },
          { image: 's7edge-3.jpg' },
          { image: 's7edge-4.jpg' }
        ],

        // Discounts
        discounts: [
          { discount: '5', type: 'General', code: '-', quantity: '100', done: '65', start_date: '-', end_date: '-' },
          { discount: '10', type: 'General', code: '-', quantity: '-', done: '-', start_date: '02/01/2018', end_date: '03/01/2018' },
          { discount: '20', type: 'Code', code: 'G446DJ', quantity: '100', done: '-', start_date: '02/12/2018', end_date: '03/05/2018' },
          { discount: '15', type: 'Code', code: 'HDA56D', quantity: '30', done: '-', start_date: '02/23/2018', end_date: '04/06/2018' },
          { discount: '10', type: 'General', code: '-', quantity: '-', done: '-', start_date: '05/14/2018', end_date: '05/30/2018' }
        ],

        // Description
        description: `
<div class="row">
  <div class="col-md">
    <p>
      <span class="text-muted">Dimension:</span>&nbsp; 150.9 x 72.6 x 7.7mm</p>
    <p>
      <span class="text-muted">Weight:</span>&nbsp; 157g</p>
    <p>
      <span class="text-muted">Camera Resolution (Rear):</span>&nbsp; Dual Pixel 12.0 MP</p>
    <p>
      <span class="text-muted">Camera Resolution (Front):</span>&nbsp; CMOS 5MP</p>
    <p>
      <span class="text-muted">Battery, Talk Time:</span>&nbsp; 3G CDMA: Up to 36 hours</p>
    <p>
      <span class="text-muted">Battery Type and Size:</span>&nbsp; 3600 mAh</p>
    <p>
      <span class="text-muted">Music Play Time:</span>&nbsp; Up to 66 hours</p>
    <p>
      <span class="text-muted">Video Play Time:</span>&nbsp; Up to 19 hours</p>
    <p>
      <span class="text-muted">Internet Use Time:</span>&nbsp; 3G: Up to 13 hours; LTE: Up to 15 hours; Wi-Fi: Up to 15 hours</p>
    <p>
      <span class="text-muted">Music Play Time:</span>&nbsp; Up to 66 hours</p>
  </div>
  <div class="col-md">
    <p>
      <span class="text-muted">Internal Memory:</span>&nbsp; 32GB</p>
    <p>
      <span class="text-muted">External Memory:</span>&nbsp; MicroSD (Up to 256GB)</p>
    <p>
      <span class="text-muted">Wi-Fi:</span>&nbsp; 802.11 a/b/g/n/ac 2.4G+5GHz, VHT80 MU-MIMO</p>
    <p>
      <span class="text-muted">USB:</span>&nbsp; USB 2.0</p>
    <p>
      <span class="text-muted">Bluetooth:</span>&nbsp; Bluetooth v4.2</p>
    <p>
      <span class="text-muted">ANT+:</span>&nbsp; Yes</p>
    <p>
      <span class="text-muted">Location Technology:</span>&nbsp; GPS, Glonass</p>
    <p>
      <span class="text-muted">Wi-Fi Direct:</span>&nbsp; Yes</p>
    <p>
      <span class="text-muted">NFC:</span>&nbsp; Yes</p>
    <p>
      <span class="text-muted">Processor Speed, Type:</span>&nbsp; 2.15GHz, 1.6GHz, Quad-Core</p>
  </div>
  <div class="col-md">
    <p>
      <span class="text-muted">Main Display Resolution:</span>&nbsp; 2560 x 1440 (Quad HD)</p>
    <p>
      <span class="text-muted">Main Display Size:</span>&nbsp; 5.5” (139.5mm)</p>
    <p>
      <span class="text-muted">Main Display Technology:</span>&nbsp; Dual edge Super AMOLED®</p>
    <p>
      <span class="text-muted">Color Depth:</span>&nbsp; 16M</p>
    <p>
      <span class="text-muted">Audio Playing Format:</span>&nbsp; MP3, M4A, 3GA, AAC, OGG, OGA, WAV, WMA, AMR, AWB, FLAC, MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA</p>
    <p>
      <span class="text-muted">Video Playing Format:</span>&nbsp; MP4, M4V, 3GP, 3G2, WMV, ASF, AVI, FLV, MKV, WEBM</p>
    <p>
      <span class="text-muted">Video Playing Resolution:</span>&nbsp; UHD 4K (3840 x 2160) @60fps</p>
    <p>
      <span class="text-muted">S-Voice:</span>&nbsp; Yes</p>
  </div>
</div>`
      }
    }
  }

  prevent(e) {
    e.preventDefault()
  }

  get productImage() {
    return this.state.productData.images.find(i => !!i.primary).image
  }

  uiStarClass(i) {
    if (this.state.productData.rating > (i - 1) && this.state.productData.rating < i) return 'half-filled'
    if (this.state.productData.rating >= i) return 'filled'
    return ''
  }

  formatInt(v) {
    return numeral(v).format('0,0')
  }

  formatPrice(p) {
    return numeral(p).format('$0,0.00')
  }

  render() {
    return (
      <div>
        <Media className="align-items-center py-3 mb-4">
          <img src={`${process.env.PUBLIC_URL}/img/uikit/${this.productImage}`} alt="" className="d-block ui-w-80 ui-bordered" />
          <Media.Body className="ml-4">
            <h4 className="font-weight-bold mb-2">{this.state.productData.title} <span className="text-muted">#{this.state.productData.id}</span></h4>
            <Button variant="primary" size="sm">Edit</Button>&nbsp;
            <Button variant="default" size="sm">Show item page</Button>
          </Media.Body>
        </Media>

        <div className="nav-tabs-top nav-responsive-sm">
          <Tabs defaultActiveKey="overview">
            <Tab eventKey="overview" title="Overview">
              <Row noGutters className="row-bordered">
                <Col md={6} lg className="d-flex align-items-center">
                  <Card.Body className="d-flex align-items-center">

                    <div>
                      <div className="ui-stars text-large text-nowrap">
                        {[1, 2, 3, 4, 5].map(i =>
                          <div className={'ui-star ' + this.uiStarClass(i)} key={i}>
                            <i className="ion ion-md-star"></i>
                            <i className="ion ion-md-star"></i>
                          </div>
                        )}
                      </div>
                      <a href="#d" onClick={this.prevent} className="d-block text-muted small">{this.state.productData.reviews} reviews</a>
                    </div>

                  </Card.Body>
                </Col>
                <Col md={6} lg className="d-flex align-items-center">
                  <Card.Body className="d-flex align-items-center">

                    <div className="lnr lnr-cart display-4 text-secondary"></div>
                    <div className="ml-3">
                      <div className="text-muted small line-height-1">Sales</div>
                      <div className="text-xlarge">{this.formatInt(this.state.productData.sales)}</div>
                    </div>

                  </Card.Body>
                </Col>
                <Col md={6} lg className="d-flex align-items-center">
                  <Card.Body className="d-flex align-items-center">

                    <div className="lnr lnr-earth display-4 text-secondary"></div>
                    <div className="ml-3">
                      <div className="text-muted small line-height-1">Views</div>
                      <div className="text-xlarge">{this.formatInt(this.state.productData.views)}</div>
                    </div>

                  </Card.Body>
                </Col>
                <Col md={6} lg className="d-flex align-items-center">
                  <Card.Body className="d-flex align-items-center">

                    <div className="lnr lnr-gift display-4 text-secondary"></div>
                    <div className="ml-3">
                      <div className="text-muted small line-height-1">Wished</div>
                      <div className="text-xlarge">{this.formatInt(this.state.productData.wished)}</div>
                    </div>

                  </Card.Body>
                </Col>
              </Row>
              <hr className="m-0" />

              <Card.Body>

                <h6 className="small font-weight-semibold mb-4">Basic info</h6>

                <Table className="product-item-table">
                  <tbody>
                    <tr>
                      <td>Price:</td>
                      <td><strong>{this.formatPrice(this.state.productData.price)}</strong></td>
                    </tr>
                    <tr>
                      <td>Category:</td>
                      <td>{this.state.productData.category}</td>
                    </tr>
                    <tr>
                      <td>Items in stock:</td>
                      <td>{this.state.productData.in_stock}</td>
                    </tr>
                    <tr>
                      <td>Tax:</td>
                      <td>{this.state.productData.tax}%</td>
                    </tr>
                    <tr>
                      <td>Status:</td>
                      <td>
                        {this.state.productData.status === 1 && <Badge variant="success">Published</Badge>}
                        {this.state.productData.status === 2 && <Badge variant="danger">Out of stock</Badge>}
                        {this.state.productData.status === 3 && <Badge variant="info">Pending</Badge>}
                      </td>
                    </tr>
                  </tbody>
                </Table>

              </Card.Body>
              <hr className="m-0" />

              <Card.Body>

                <h6 className="small font-weight-semibold mb-4">Options</h6>

                <Table className="product-item-table">
                  <tbody>
                    <tr>
                      <td>Brand:</td>
                      <td>{this.state.productData.options.brand}</td>
                    </tr>
                    <tr>
                      <td>Storages:</td>
                      <td>{this.state.productData.options.storages.join(', ')}</td>
                    </tr>
                    <tr>
                      <td>Colors:</td>
                      <td>
                        {this.state.productData.options.colors.map(color =>
                          <React.Fragment key={color[0]}>
                            <span className="ui-product-color align-middle" style={{ background: color[1] }}></span> <span className="align-middle">{color[0]}</span> &nbsp;
                          </React.Fragment>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>Warranties:</td>
                      <td>{this.state.productData.options.warranties.join(', ')}</td>
                    </tr>
                    <tr>
                      <td>Ships from:</td>
                      <td>{this.state.productData.options.ships_from.join(', ')}</td>
                    </tr>
                  </tbody>
                </Table>

              </Card.Body>
              <hr className="m-0" />

              <Card.Body className="product-item-table">

                <h6 className="small font-weight-semibold mb-4">Meta</h6>

                <Table>
                  <tbody>
                    <tr>
                      <td>Title:</td>
                      <td>{this.state.productData.meta.title}</td>
                    </tr>
                    <tr>
                      <td>Description:</td>
                      <td>{this.state.productData.meta.description}</td>
                    </tr>
                    <tr>
                      <td>Keywords:</td>
                      <td>{this.state.productData.meta.keywords}</td>
                    </tr>
                  </tbody>
                </Table>

              </Card.Body>
            </Tab>
            <Tab eventKey="description" title="Description">

              <Card.Body className="p-5" dangerouslySetInnerHTML={{ __html: this.state.productData.description }}></Card.Body>
              
            </Tab>
            <Tab eventKey="discounts" title="Discounts">
              <Card.Body>

                <Table responsive className="product-item-discounts-table">
                  <thead>
                    <tr>
                      <th>Discount</th>
                      <th>Type</th>
                      <th>Code</th>
                      <th>Quantity</th>
                      <th>Done</th>
                      <th>Start date</th>
                      <th>End date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.productData.discounts.map(discount =>
                      <tr key={[discount.discount, discount.type, discount.start_date, discount.end_date].join()}>
                        <td>{discount.discount}%</td>
                        <td>{discount.type}</td>
                        <td>{discount.code}</td>
                        <td>{discount.quantity}</td>
                        <td>{discount.done}</td>
                        <td>{discount.start_date}</td>
                        <td>{discount.end_date}</td>
                      </tr>
                    )}
                  </tbody>
                </Table>

              </Card.Body>
            </Tab>
            <Tab eventKey="images" title="Images">
              <Card.Body>

                <div className="mb-4">
                  <Badge variant="primary badge-dot" /> Primary image
                </div>

                <Row>
                  {this.state.productData.images.map(image =>
                    <Col xs={12} sm={6} md={4} xl={3} className="mb-4" key={image.image}>
                      <a href={`${process.env.PUBLIC_URL}/img/uikit/${image.image}`} className={'d-block ui-bordered ' + (image.primary ? 'border-primary' : '')} target="_blank" rel="noopener noreferrer">
                        <img src={`${process.env.PUBLIC_URL}/img/uikit/${image.image}`} className="img-fluid" alt="" />
                      </a>
                    </Col>
                  )}
                </Row>

              </Card.Body>
            </Tab>
          </Tabs>
        </div>

      </div>
    )
  }
}

export default ECommerceProductItem
