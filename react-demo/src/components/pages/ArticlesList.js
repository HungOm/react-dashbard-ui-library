import React, { Component } from 'react'
import { Card, Button, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap'
import axios from 'axios'

import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator'
import '../../vendor/libs/react-bootstrap-table2/react-bootstrap-table2.scss'

const { SearchBar } = Search

class ArticlesList extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Articles list - Pages')

    this.state = {
      data: []
    }

    // Load data
    this.loadData('/json/pages_articles_list.json').then(data => {
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
      sort: true
    }, {
      text: 'Title',
      dataField: 'title',
      sort: true,
      headerStyle: { minWidth: '18rem' },
      formatter: (cell, row) => {
        return <a href="#d" onClick={this.prevent}>{row.title}</a>
      }
    }, {
      text: 'Likes',
      dataField: 'likes',
      sort: true
    }, {
      text: 'Comments',
      dataField: 'comments',
      sort: true
    }, {
      text: 'Created at',
      dataField: 'created_at',
      sort: true,
      classes: 'text-nowrap'
    }, {
      text: 'status',
      dataField: 'Status',
      sort: true,
      formatter: (cell, row) => {
        switch (row.status) {
          case 1: return <Badge variant="outline-success">Published</Badge>
          case 2: return <Badge variant="outline-info">Draft</Badge>
          case 3: return <Badge variant="outline-default">Deleted</Badge>
          default: return ''
        }
      }
    }, {
      isDummyField: true,
      text: '',
      dataField: 'actions',
      classes: 'text-center text-nowrap',
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
          <div>Articles</div>
          <Button variant="primary rounded-pill" className="d-block"><span className="ion ion-md-add"></span>&nbsp; Create article</Button>
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
                  classes="card-table border-top"
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

export default ArticlesList
