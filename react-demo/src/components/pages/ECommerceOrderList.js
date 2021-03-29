import React, { Component } from 'react'
import { Card, Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import axios from 'axios'
import * as numeral from 'numeral'

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import '../../vendor/libs/react-bootstrap-table2/react-bootstrap-table2.scss'

const { SearchBar } = Search

class ECommerceOrderList extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Order list - Pages')

    this.state = {
      data: [],
      filterSales: [10, 834],
      filterPrice: [10, 2000],
      filterStatus: 'Any'
    }

    // Load data
    this.loadData('/json/pages_e-commerce_order-list.json').then(data => {
      this.setState({ data })
    })
  }

  async loadData(url) {
    const response = await axios.get(process.env.PUBLIC_URL + url)
    return response.data
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10

    const columns = [{
      text: 'Id',
      dataField: 'id',
      sort: true,
      classes: 'align-middle'
    }, {
      text: 'Customer',
      dataField: 'customer',
      sort: true,
      classes: 'align-middle'
    }, {
      text: 'Amount',
      dataField: 'amount',
      sort: true,
      classes: 'align-middle',
      formatter: (cell, row) => {
        return (<React.Fragment>
          {numeral(row.amount).format('$0,0.00')}
        </React.Fragment>)
      }
    }, {
      text: 'Date',
      dataField: 'date',
      sort: true,
      classes: 'align-middle'
    }, {
      text: 'Status',
      dataField: 'status',
      sort: true,
      classes: 'align-middle',
      formatter: (cell, row) => {
        return (<React.Fragment>
          {row.status === 1 && <Badge variant="outline-success">Shipped</Badge>}
          {row.status === 2 && <Badge variant="outline-warning">Pending</Badge>}
          {row.status === 3 && <Badge variant="outline-info">Sent</Badge>}
          {row.status === 4 && <Badge variant="outline-danger">Cancelled</Badge>}
        </React.Fragment>)
      }
    }, {
      isDummyField: true,
      text: '',
      dataField: 'actions',
      classes: 'text-nowrap align-middle',
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
        <h4 className="font-weight-bold py-3 mb-4">
          Orders
        </h4>

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
                  classes="orders-table card-table table-striped border-top"
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

export default ECommerceOrderList
