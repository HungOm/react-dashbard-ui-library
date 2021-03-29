import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'
import ReactTable from 'react-table'
import '../../vendor/libs/react-table/react-table.scss'

class ReactTableComponent extends Component {
  constructor(props) {
    super(props)
    props.setTitle('React Table - Tables')

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
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Tables /</span> React Table
        </h4>

        <ReactTable className="-striped -highlight"
          data={this.state.data}
          columns={columns}
          filterable
          defaultFilterMethod={(filter, row) => String(row[filter.id]).toLowerCase().includes(filter.value.toLowerCase())}
          defaultPageSize={10}
          previousText="&larr; Previous"
          nextText="Next &rarr;"
        />

        <Card className="mb-3 mt-4">
          <Card.Header as="h6">Within card</Card.Header>
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
    )
  }
}

export default ReactTableComponent
