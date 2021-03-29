import React, { Component } from 'react'
import { Card, Button, Form, Col, Media, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import axios from 'axios'
import * as numeral from 'numeral'
import Nouislider from 'nouislider-react'
import '../../vendor/libs/nouislider-react/nouislider-react.scss'
import '../../vendor/styles/pages/products.scss'

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import '../../vendor/libs/react-bootstrap-table2/react-bootstrap-table2.scss'

const { SearchBar } = Search

class ECommerceProductList extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Product list - Pages')

    this.state = {
      data: [],
      filterSales: [10, 834],
      filterPrice: [10, 2000],
      filterStatus: 'Any'
    }

    // Load data
    this.loadData('/json/pages_e-commerce_product-list.json').then(data => {
      this.setState({ data })
    })
  }

  async loadData(url) {
    const response = await axios.get(process.env.PUBLIC_URL + url)
    return response.data
  }

  convertToNumber(val) {
    return parseInt(String(val).replace(/[$, ]/g, ''))
  }

  formatPrice(price) {
    return numeral(this.convertToNumber(price)).format('$0,0')
  }

  onSliderValueChange(key, value) {
    this.setState(state => {
      // Convert value to array of numbers
      value = value.map(this.convertToNumber)

      // Do nothing if value isn't changed to prevent recursive state update
      return String(value) === String(state[key]) ? null : {
        [key]: value
      } 
    })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
    
    const filterSalesOptions = {
      step: 10,
      connect: true,
      tooltips: true,
      range: {
        'min': [ 10 ],
        'max': [ 834 ]
      },
      format: {
        to: value => Math.round(parseInt(value)),
        from: value => parseInt(value)
      },
      direction: isRTL ? 'rtl' : 'ltr'
    }
    
    const filterPriceOptions = {
      step: 50,
      connect: true,
      tooltips: true,
      range: {
        'min': [ 10 ],
        'max': [ 2000 ]
      },
      format: {
        to: value => numeral(value).format('$0,0'),
        from: value => parseInt(value.replace(/[$, ]/g, ''))
      },
      direction: isRTL ? 'rtl' : 'ltr'
    }

    const columns = [{
      text: 'Product',
      dataField: 'title',
      sort: true,
      classes: 'py-2 align-middle',
      headerStyle: { minWidth: '300px' },
      formatter: (cell, row) => {
        return (
          <Media className="align-items-center">
            <img className="d-block ui-w-40" src={`${process.env.PUBLIC_URL}/img/uikit/${row.image}`} alt="" />
            {/* Generate link to product here */}
            <a href="#d" onClick={this.prevent} className="media-body d-block text-body ml-3">{row.title}</a>
          </Media>
        )
      }
    }, {
      text: 'Id',
      dataField: 'id',
      sort: true,
      classes: 'py-2 align-middle'
    }, {
      text: 'In stock',
      dataField: 'in_stock',
      sort: true,
      classes: 'py-2 align-middle'
    }, {
      text: 'Price',
      dataField: 'price',
      sort: true,
      classes: 'py-2 align-middle',
      formatter: (cell, row) => {
        return (<React.Fragment>
          {numeral(row.price).format('$0,0.00')}
        </React.Fragment>)
      }
    }, {
      text: 'Sales',
      dataField: 'sales',
      sort: true,
      classes: 'py-2 align-middle'
    }, {
      text: 'Views',
      dataField: 'views',
      sort: true,
      classes: 'py-2 align-middle',
      formatter: (cell, row) => {
        return (<React.Fragment>
          {numeral(row.views).format('0,0')}
        </React.Fragment>)
      }
    }, {
      text: 'Status',
      dataField: 'status',
      sort: true,
      classes: 'py-2 align-middle',
      formatter: (cell, row) => {
        return (<React.Fragment>
          {row.status === 1 && <Badge variant="outline-success">Published</Badge>}
          {row.status === 2 && <Badge variant="outline-danger">Out of stock</Badge>}
          {row.status === 3 && <Badge variant="outline-info">Pending</Badge>}
        </React.Fragment>)
      }
    }, {
      isDummyField: true,
      text: '',
      dataField: 'actions',
      classes: 'py-2 align-middle text-nowrap',
      formatter: (cell, row) => (<React.Fragment>
        <OverlayTrigger overlay={<Tooltip>Show</Tooltip>}>
          <Button variant="default btn-xs icon-btn md-btn-flat"><i className="ion ion-md-eye"></i></Button>
        </OverlayTrigger>
        &nbsp;
        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
          <Button variant="default btn-xs icon-btn md-btn-flat"><i className="ion ion-md-create"></i></Button>
        </OverlayTrigger>
      </React.Fragment>)
    }]

    return (
      <div>
        <h4 className="d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4">
          <div>Products</div>
          <Button variant="primary rounded-pill" className="d-block"><span className="ion ion-md-add"></span>&nbsp; Add product</Button>
        </h4>

        {/* Filters */}
        <div className="ui-bordered px-4 pt-4 mb-4">
          <Form.Row>

            <Col md className="mb-4">
              <Form.Label className="pb-1">
                Sales
                <span className="text-muted font-weight-normal ml-2">{this.state.filterSales[0]} - {this.state.filterSales[1]}</span>
              </Form.Label>
              <Nouislider className="product-list-slider my-3 mx-2"
                start={this.state.filterSales}
                onSet={val => this.onSliderValueChange('filterSales', val)}
                {...filterSalesOptions} />
            </Col>

            <Col md className="mb-4">
              <Form.Label className="pb-1">
                Price
                <span className="text-muted font-weight-normal ml-2">{this.formatPrice(this.state.filterPrice[0])} - {this.formatPrice(this.state.filterPrice[1])}</span>
              </Form.Label>
              <Nouislider className="product-list-slider my-3 mx-2"
                start={this.state.filterPrice}
                onSet={val => this.onSliderValueChange('filterPrice', val)}
                {...filterPriceOptions} />
            </Col>

            <Col md className="mb-4">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" className="custom-select" value={this.state.filterStatus} onChange={e => this.setState({ filterStatus: e.target.value })}>
                <option value="Any">Any</option>
                <option value="Published">Published</option>
                <option value="Out of stock">Out of stock</option>
                <option value="Pending">Pending</option>
                <option value="Hidden">Hidden</option>
              </Form.Control>
            </Col>

            <Col md xl={2} className="mb-4">
              <Form.Label className="d-none d-md-block">&nbsp;</Form.Label>
              <Button variant="secondary" block>Show</Button>
            </Col>

          </Form.Row>
        </div>
        {/* / Filters */}

        {isIE10Mode && <div className="alert alert-danger">
          <strong>react-bootstrap-table2</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode &&
          <Card>
            <ToolkitProvider
              keyField="id"
              data={this.state.data}
              columns={columns}
              bootstrap4
              search>
              {props => (<React.Fragment>
                {/* Search bar */}
                <Card.Body className="d-flex justify-content-end pb-0">
                  <div style={{ maxWidth: '300px' }}>
                    <SearchBar {...props.searchProps} />
                  </div>
                </Card.Body>

                <BootstrapTable
                  {...props.baseProps}
                  wrapperClasses="table-responsive react-bs-table-card"
                  classes="products-table card-table table-striped border-top"
                  pagination={paginationFactory()}
                />
              </React.Fragment>)}
            </ToolkitProvider>
          </Card>
        }
      </div>
    )
  }
}

export default ECommerceProductList
