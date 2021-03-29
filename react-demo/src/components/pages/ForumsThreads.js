import React, { Component } from 'react'
import { Breadcrumb, Card, Form, Row, Col, Media, Button, Badge, Pagination } from 'react-bootstrap'

class ForumsList extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Forum threads - Pages')

    this.state = {
      // Tags
      tags: {
        solved: { title: 'Solved', color: 'success' },
        locked: { title: 'Locked', color: 'default' },
        closed: { title: 'Closed', color: 'secondary' },
        sticky: { title: 'Sticky', color: 'warning' },
        hot: { title: 'Hot!', color: 'danger' }
      },

      threadsData: [{
        title: 'Aliquam et velit vel nisi egestas pulvinar sit amet ac tellus',
        startedAt: '25 days',
        startedBy: 'Leon Wilson',
        replies: 12,
        lastUpdate: {
          date: '1 day',
          user: { avatar: '2-small.png', name: 'Leon Wilson' }
        }
      }, {
        title: 'Sed scelerisque justo elit, sed maximus arcu fringilla at',
        tags: ['solved'],
        startedAt: '25 days',
        startedBy: 'Allie Rodriguez',
        replies: 43,
        lastUpdate: {
          date: '1 day',
          user: { avatar: '3-small.png', name: 'Allie Rodriguez' }
        }
      }, {
        title: 'Donec lobortis molestie sem, ac consectetur turpis egestas quis',
        tags: ['locked'],
        startedAt: '25 days',
        startedBy: 'Kenneth Frazier',
        replies: 42,
        lastUpdate: {
          date: '1 day',
          user: { avatar: '4-small.png', name: 'Kenneth Frazier' }
        }
      }, {
        title: 'Donec tellus nibh, efficitur a interdum id, vulputate ultrices mi',
        startedAt: '25 days',
        startedBy: 'Nellie Maxwell',
        replies: 632,
        lastUpdate: {
          date: '1 day',
          user: { avatar: '5-small.png', name: 'Nellie Maxwell' }
        }
      }, {
        title: 'Pellentesque in consequat erat',
        tags: ['closed'],
        startedAt: '25 days',
        startedBy: 'Mae Gibson',
        replies: 53,
        lastUpdate: {
          date: '1 day',
          user: { avatar: '6-small.png', name: 'Mae Gibson' }
        }
      }, {
        title: 'Vivamus maximus lectus sed finibus pellentesque',
        startedAt: '25 days',
        startedBy: 'Alice Hampton',
        replies: 33,
        lastUpdate: {
          date: '1 day',
          user: { avatar: '7-small.png', name: 'Alice Hampton' }
        }
      }, {
        title: 'Nullam luctus eget odio in bibendum',
        startedAt: '25 days',
        startedBy: 'Hallie Lewis',
        replies: 58,
        lastUpdate: {
          date: '1 day',
          user: { avatar: '8-small.png', name: 'Hallie Lewis' }
        }
      }, {
        title: 'Donec rutrum metus mi, eget consequat metus posuere non',
        tags: ['solved'],
        startedAt: '25 days',
        startedBy: 'Amanda Warner',
        replies: 134,
        lastUpdate: {
          date: '1 day',
          user: { avatar: '9-small.png', name: 'Amanda Warner' }
        }
      }, {
        title: 'Integer eu tortor purus',
        startedAt: '25 days',
        startedBy: 'Wayne Morgan',
        replies: 32,
        lastUpdate: {
          date: '1 day',
          user: { avatar: '12-small.png', name: 'Wayne Morgan' }
        }
      }, {
        title: 'Nullam luctus eget odio in bibendum',
        tags: ['hot'],
        startedAt: '25 days',
        startedBy: 'Belle Ross',
        replies: 12,
        lastUpdate: {
          date: '1 day',
          user: { avatar: '11-small.png', name: 'Belle Ross' }
        }
      }]
    }
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h4 className="d-flex flex-wrap justify-content-between align-items-center pt-3 mb-4">
          <Breadcrumb className="font-weight-bold">
            <Breadcrumb.Item><i className="ion ion-ios-chatbubbles"></i></Breadcrumb.Item>
            <Breadcrumb.Item active>Getting started</Breadcrumb.Item>
          </Breadcrumb>
          <Col xs={12} md={3} className="p-0 mb-3">
            <Form.Control placeholder="Search..." />
          </Col>
        </h4>

        <div className="mb-4">
          <Button variant="primary"><i className="ion ion-md-add"></i>&nbsp; New thread</Button>
        </div>

        <Card className="mb-3">
          <Card.Header className="d-none d-md-block">
            <Row noGutters className="align-items-center">
              <Col></Col>
              <Col xs={4} className="text-muted">
                <Row noGutters className="align-items-center">
                  <Col xs={4}>Replies</Col>
                  <Col xs={8}>Last update</Col>
                </Row>
              </Col>
            </Row>
          </Card.Header>

          {this.state.threadsData.map((thread, index) =>
            <div key={thread.title + thread.startedAt + thread.startedBy}>
              <Card.Body className="py-3">

                <Row noGutters className="align-items-center">
                  <Col>
                    <a href="#d" onClick={this.prevent} className="text-big">{thread.title}</a>
                    {thread.tags && thread.tags.length && <React.Fragment>
                      {thread.tags.map(tag =>
                        <Badge key={tag} variant={this.state.tags[tag].color} className="align-text-bottom ml-1">{this.state.tags[tag].title}</Badge>
                      )}
                    </React.Fragment>}
                    <div className="text-muted small mt-1">Started {thread.startedAt} ago &nbsp;·&nbsp; <a href="#d" onClick={this.prevent} className="text-muted">{thread.startedBy}</a></div>
                  </Col>
                  <Col xs={4} className="d-none d-md-block">

                    <Row noGutters className="align-items-center">
                      <Col xs={4}>{thread.replies}</Col>
                      <Media className="col-8 align-items-center">
                        <img src={`${process.env.PUBLIC_URL}/img/avatars/${thread.lastUpdate.user.avatar}`} alt="Author" className="d-block ui-w-30 rounded-circle" />
                        <Media.Body className="flex-truncate ml-2">
                          <div className="line-height-1 text-truncate">{thread.lastUpdate.date} ago</div>
                          <a href="#d" onClick={this.prevent} className="text-muted small text-truncate">by {thread.lastUpdate.user.name}</a>
                        </Media.Body>
                      </Media>
                    </Row>

                  </Col>
                </Row>

              </Card.Body>
              {index !== (this.state.threadsData.length - 1) && <hr className="m-0" />}
            </div>
          )}
        </Card>

        <Pagination>
          <Pagination.Prev disabled />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    )
  }
}

export default ForumsList
