import React, { Component } from 'react'
import { Button, Card, Form, Col, DropdownButton, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap'
import axios from 'axios'
import * as moment from 'moment'
import Flatpickr from 'react-flatpickr'
import '../../vendor/libs/react-flatpickr/react-flatpickr.scss'

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import '../../vendor/libs/react-bootstrap-table2/react-bootstrap-table2.scss'

const { SearchBar } = Search

class TicketsList extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Ticket list - Pages')

    this.onCreatedFilterValueChange = this.onCreatedFilterValueChange.bind(this)

    this.state = {
      // Filters
      filterPriority: 'Any',
      filterStatus: 'Any',
      filterCreatedDate: [null, null],

      data: []
    }

    // Load data
    this.loadData('/json/pages_tickets_list.json').then(data => {
      this.setState({ data })
    })
  }

  async loadData(url) {
    const response = await axios.get(process.env.PUBLIC_URL + url)
    return response.data
  }

  onCreatedFilterValueChange(dates) {
    const filterCreatedDate = []
    filterCreatedDate[0] = dates && dates[0] ? moment(dates[0]).format('MM/DD/YYYY') : null
    filterCreatedDate[1] = dates && dates[1] ? moment(dates[1]).format('MM/DD/YYYY') : null
    this.setState({ filterCreatedDate })
  }

  priorityDropdownVariant(priority) {
    let variant

    if (priority === 1) variant = 'danger'
    if (priority === 2) variant = 'success'
    if (priority === 3) variant = 'warning'

    return `${variant} btn-xs md-btn-flat`
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10
    const isIEMode = typeof document['documentMode'] === 'number'
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    const columns = [{
      text: 'Id',
      dataField: 'id',
      sort: true,
      headerClasses: 'text-nowrap',
      classes: 'align-middle py-3'
    }, {
      text: 'Subject',
      dataField: 'subject',
      sort: true,
      headerClasses: 'text-nowrap',
      headerStyle: { minWidth: '300px' },
      classes: 'align-middle py-3'
    }, {
      text: 'Created at',
      dataField: 'created_at',
      sort: true,
      headerClasses: 'text-nowrap',
      classes: 'align-middle py-3'
    }, {
      text: 'Last update',
      dataField: 'last_update',
      sort: true,
      headerClasses: 'text-nowrap',
      classes: 'align-middle py-3'
    }, {
      text: 'Priority',
      dataField: 'priority',
      sort: true,
      headerClasses: 'text-nowrap',
      classes: 'align-middle py-3',
      formatter: (cell, row) => (
        <DropdownButton
          variant={this.priorityDropdownVariant(row.priority)}
          alignRight={isRTL}
          title={<React.Fragment>
            {row.priority === 1 && 'High'}
            {row.priority === 2 && 'Medium'}
            {row.priority === 3 && 'Low'}
          </React.Fragment>}
        >
          <Dropdown.Item active={row.priority === 1 ? 'true' : undefined}>High</Dropdown.Item>
          <Dropdown.Item active={row.priority === 2 ? 'true' : undefined}>Medium</Dropdown.Item>
          <Dropdown.Item active={row.priority === 3 ? 'true' : undefined}>Low</Dropdown.Item>
        </DropdownButton>
      )
    }, {
      text: 'Status',
      dataField: 'status',
      sort: true,
      headerClasses: 'text-nowrap',
      classes: 'align-middle py-3',
      formatter: (cell, row) => (
        <DropdownButton
          variant="outline-secondary btn-xs md-btn-flat"
          alignRight={isRTL}
          title={<React.Fragment>
            {row.status === 1 && 'Open'}
            {row.status === 2 && 'Reopened'}
            {row.status === 3 && 'In progress'}
            {row.status === 4 && 'Closed'}
          </React.Fragment>}
        >
          <Dropdown.Item active={row.status === 1 ? 'true' : undefined}>Open</Dropdown.Item>
          <Dropdown.Item active={row.status === 2 ? 'true' : undefined}>Reopened</Dropdown.Item>
          <Dropdown.Item active={row.status === 3 ? 'true' : undefined}>In progress</Dropdown.Item>
          <Dropdown.Item active={row.status === 4 ? 'true' : undefined}>Closed</Dropdown.Item>
        </DropdownButton>
      )
    }, {
      isDummyField: true,
      text: '',
      dataField: 'actions',
      classes: 'text-nowrap align-middle text-center py-3',
      formatter: (cell, row) => (<React.Fragment>
        <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
          <Button variant="default btn-xs icon-btn md-btn-flat"><i className="ion ion-md-create"></i></Button>
        </OverlayTrigger>
        &nbsp;
        <OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
          <Button variant="default btn-xs icon-btn md-btn-flat"><i className="ion ion-md-close"></i></Button>
        </OverlayTrigger>
      </React.Fragment>)
    }]

    return (
      <div>
        <h4 className="d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4">
          <div>Tickets</div>
          <Button variant="primary rounded-pill" className="d-block"><span className="ion ion-md-add"></span>&nbsp; Create ticket</Button>
        </h4>

        {/* Filters */}
        <div className="ui-bordered px-4 pt-4 mb-4">
          <Form.Row className="align-items-center">
            <Col md className="mb-4">
              <Form.Label>Priority</Form.Label>
              <Form.Control as="select" className="custom-select" value={this.state.filterPriority} onChange={e => this.setState({ filterPriority: e.target.value })}>
                <option value="Any">Any</option>
                <option value="Published">Published</option>
                <option value="Out of stock">Out of stock</option>
                <option value="Pending">Pending</option>
              </Form.Control>
            </Col>
            <Col md className="mb-4">
              <Form.Label>Status</Form.Label>
              <Form.Control as="select" className="custom-select" value={this.state.filterPriority} onChange={e => this.setState({ filterPriority: e.target.value })}>
                <option value="Any">Any</option>
                <option value="Open">Open</option>
                <option value="Reopened">Reopened</option>
                <option value="In progress">In progress</option>
                <option value="Closed">Closed</option>
              </Form.Control>
            </Col>
            <Col md className="mb-4">
              <Form.Label>Created</Form.Label>
              <Flatpickr
                placeholder={!isIEMode ? 'Any' : null}
                value={this.state.filterCreatedDate}
                options={{ altInput: true, mode: 'range', animate: !isRTL, dateFormat: 'm/d/Y', altFormat: 'm/d/Y' }}
                onChange={this.onCreatedFilterValueChange} />
            </Col>
            <Col md xl={2} className=" mb-4">
              <Form.Label className=" d-none d-md-block">&nbsp;</Form.Label>
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
                  classes="card-table table-striped border-top"
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

export default TicketsList
