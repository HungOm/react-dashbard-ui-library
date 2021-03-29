import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import ToolkitProvider, { Search, ColumnToggle, CSVExport } from 'react-bootstrap-table2-toolkit'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import filterFactory, { textFilter, selectFilter, numberFilter } from 'react-bootstrap-table2-filter'
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor'
import '../../vendor/libs/react-bootstrap-table2/react-bootstrap-table2.scss'

const { SearchBar } = Search
const { ToggleList } = ColumnToggle
const { ExportCSVButton } = CSVExport

class ReactBootstrapTable2 extends Component {
  constructor(props) {
    super(props)
    props.setTitle('React Bootstrap Table 2 - Tables')

    this.state = {
      data: []
    }

    // Load data
    this.loadData('/json/table-data.json').then(data => {
      this.setState({ data })
    })
  }

  async loadData(url) {
    const response = await axios.get(process.env.PUBLIC_URL + url)
    return response.data
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10

    const columns = [{
      text: 'ID',
      dataField: 'id',
      sort: true,
      filter: numberFilter({
        comparatorClassName: 'custom-select'
      })
    }, {
      text: 'First Name',
      dataField: 'first_name',
      sort: true,
      filter: textFilter()
    }, {
      text: 'Last Name',
      dataField: 'last_name',
      sort: true,
      filter: textFilter()
    }, {
      text: 'Gender',
      dataField: 'gender',
      sort: true,
      filter: selectFilter({
        options: {
          'male': 'Male',
          'female': 'Female'
        },
        className: 'custom-select'
      }),
      editor: {
        type: Type.SELECT,
        options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' }
        ]
      }
    }, {
      text: 'Company',
      dataField: 'company',
      sort: true,
      filter: textFilter()
    }]

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Tables /</span> React Bootstrap Table 2
        </h4>

        {isIE10Mode && <div className="alert alert-danger">
          <strong>react-bootstrap-table2</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode && <React.Fragment>

          <ToolkitProvider
            keyField="id"
            data={this.state.data}
            columns={columns}
            bootstrap4
            search
            columnToggle
            exportCSV>
            {props => (
              <div>
                <div className="row">
                  <div className="col-md-6 mb-4 mb-md-0"><ToggleList { ...props.columnToggleProps } /></div>
                  <div className="col-md-6 d-flex align-items-start justify-content-end">
                    <ExportCSVButton { ...props.csvProps } className="mr-2">Export</ExportCSVButton>
                    <SearchBar { ...props.searchProps } />
                  </div>
                </div>

                <BootstrapTable
                  {...props.baseProps }
                  wrapperClasses="table-responsive"
                  pagination = {paginationFactory()}
                  selectRow = {{ mode: 'checkbox', classes: 'table-success' }}
                  filter={filterFactory()}
                  cellEdit={ cellEditFactory({ mode: 'click' }) }
                />
              </div>
            )}
          </ToolkitProvider>

          <Card className="mb-3 mt-4">
            <Card.Header>Within card</Card.Header>
            <ToolkitProvider
              keyField="id"
              data={this.state.data}
              columns={columns}
              bootstrap4
              search
              columnToggle
              exportCSV>
              {props => (
                <React.Fragment>
                  <div className="row card-body pb-0">
                    <div className="col-md-6 mb-4 mb-md-0"><ToggleList { ...props.columnToggleProps } /></div>
                    <div className="col-md-6 d-flex align-items-start justify-content-end">
                      <ExportCSVButton { ...props.csvProps } className="mr-2">Export</ExportCSVButton>
                      <SearchBar { ...props.searchProps } />
                    </div>
                  </div>

                  {/* !!! Add .card table class to the table and .react-bs-table-card class to the wrapper */}
                  <BootstrapTable
                    {...props.baseProps }
                    wrapperClasses="table-responsive react-bs-table-card"
                    classes="card-table border-top"
                    pagination = {paginationFactory({ classes: 'bg-danger' })}
                    selectRow = {{ mode: 'checkbox', classes: 'table-success' }}
                    filter={filterFactory()}
                    cellEdit={ cellEditFactory({ mode: 'click' }) }
                  />
                </React.Fragment>
              )}
            </ToolkitProvider>

          </Card>
        </React.Fragment>}
      </div>
    )
  }
}

export default ReactBootstrapTable2
