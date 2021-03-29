import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import ReactTable from 'react-table'
import '../vendor/libs/react-table/react-table.scss'

class CuiReactTable extends Component {
  constructor(props) {
    super(props)

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
    const columns = [
      { Header: 'First Name', accessor: 'first_name' },
      { Header: 'Last Name', accessor: 'last_name' },
      {
        Header: 'Gender',
        accessor: 'gender',
        filterMethod: (filter, row) => {
          if (filter.value === "all") return true
          if (filter.value === "male") return row[filter.id] === 'male'
          return row[filter.id] === 'female'
        },
        Filter: ({ filter, onChange }) => (
          <select
            onChange={event => onChange(event.target.value)}
            style={{ width: "100%" }}
            value={filter ? filter.value : "all"}>
            <option value="all">Show All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        )
      },
      { Header: 'Company', accessor: 'company' }
    ]

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-table</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/tannerlinsley/react-table" className="ui-block-description">https://github.com/tannerlinsley/react-table</a>

        <h4 className="ui-block-heading">Examples</h4>

        <div className="cui-example cui-example-vertical-spacing-sm">
          <ReactTable className="-striped -highlight"
            data={this.state.data}
            columns={columns}
            filterable
            defaultFilterMethod={(filter, row) => String(row[filter.id]).toLowerCase().includes(filter.value.toLowerCase())}
            defaultPageSize={10}
            previousText="&larr; Previous"
            nextText="Next &rarr;"
          />

          <Card className="mb-3">
            <Card.Header>Within card</Card.Header>
            <ReactTable className="-striped -highlight card-react-table"
              data={this.state.data}
              columns={columns}
              filterable
              defaultFilterMethod={(filter, row) => String(row[filter.id]).toLowerCase().includes(filter.value.toLowerCase())}
              defaultPageSize={10}
              previousText="&larr; Previous"
              nextText="Next &rarr;"
            />
          </Card>
        </div>
      </div>
    )
  }
}

export default CuiReactTable
