import React, { Component } from 'react'
import { Breadcrumb, Card, Form, Row, Col, Media } from 'react-bootstrap'

class ForumsList extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Forum list - Pages')

    this.state = {
      sectionsData: [{
        title: 'General',
        forums: [{
          title: 'Getting started',
          threads: 12,
          replies: 34,
          lastUpdate: {
            date: '1d',
            thread: {
              title: 'Aliquam et velit vel nisi egestas pulvinar sit amet ac tellus'
            },
            user: {
              avatar: '2-small.png',
              name: 'Leon Wilson'
            }
          }
        }, {
          title: 'Announcements',
          threads: 43,
          replies: 112,
          lastUpdate: {
            date: '1d',
            thread: {
              title: 'Sed scelerisque justo elit, sed maximus arcu fringilla at'
            },
            user: {
              avatar: '3-small.png',
              name: 'Allie Rodriguez'
            }
          }
        }, {
          title: 'Guides',
          threads: 42,
          replies: 654,
          lastUpdate: {
            date: '1d',
            thread: {
              title: 'Donec lobortis molestie sem, ac consectetur turpis egestas quis'
            },
            user: {
              avatar: '4-small.png',
              name: 'Kenneth Frazier'
            }
          }
        }]
      }, {
        title: 'Purchasing',
        forums: [{
          title: 'Payments',
          threads: 632,
          replies: 4234,
          lastUpdate: {
            date: '1d',
            thread: {
              title: 'Donec tellus nibh, efficitur a interdum id, vulputate ultrices mi'
            },
            user: {
              avatar: '5-small.png',
              name: 'Nellie Maxwell'
            }
          }
        }, {
          title: 'Shipping',
          threads: 53,
          replies: 116,
          lastUpdate: {
            date: '1d',
            thread: {
              title: 'Pellentesque in consequat erat'
            },
            user: {
              avatar: '6-small.png',
              name: 'Mae Gibson'
            }
          }
        }, {
          title: 'Products',
          threads: 33,
          replies: 86,
          lastUpdate: {
            date: '1d',
            thread: {
              title: 'Vivamus maximus lectus sed finibus pellentesque'
            },
            user: {
              avatar: '7-small.png',
              name: 'Alice Hampton'
            }
          }
        }]
      }, {
        title: 'Partnership',
        forums: [{
          title: 'Requirements',
          threads: 58,
          replies: 176,
          lastUpdate: {
            date: '1d',
            thread: {
              title: 'Nullam luctus eget odio in bibendum'
            },
            user: {
              avatar: '8-small.png',
              name: 'Hallie Lewis'
            }
          }
        }, {
          title: 'Conditions',
          threads: 134,
          replies: 568,
          lastUpdate: {
            date: '1d',
            thread: {
              title: 'Donec rutrum metus mi, eget consequat metus posuere non'
            },
            user: {
              avatar: '9-small.png',
              name: 'Amanda Warner'
            }
          }
        }]
      }, {
        title: 'Support',
        forums: [{
          title: 'Common questions',
          threads: 32,
          replies: 578,
          lastUpdate: {
            date: '1d',
            thread: {
              title: 'Integer eu tortor purus'
            },
            user: {
              avatar: '10-small.png',
              name: 'Wayne Morgan'
            }
          }
        }, {
          title: 'Site issues',
          threads: 12,
          replies: 56,
          lastUpdate: {
            date: '1d',
            thread: {
              title: 'Nullam luctus eget odio in bibendum'
            },
            user: {
              avatar: '11-small.png',
              name: 'Belle Ross'
            }
          }
        }]
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
            <Breadcrumb.Item active><i className="ion ion-ios-chatbubbles"></i>&nbsp; Forums</Breadcrumb.Item>
          </Breadcrumb>
          <Col xs={12} md={3} className="p-0 mb-3">
            <Form.Control placeholder="Search..." />
          </Col>
        </h4>

        {this.state.sectionsData.map(section => 
          <div key={section.title}>
            <Card className="mb-3">

              <Card.Header as={Row} noGutters className="align-items-center">
                <Col className="font-weight-bold">{section.title}</Col>
                <Col xs={6} className="d-none d-md-block text-muted">
                  <Row noGutters className="align-items-center">
                    <Col xs={3}>Threads</Col>
                    <Col xs={3}>Replies</Col>
                    <Col xs={6}>Last update</Col>
                  </Row>
                </Col>
              </Card.Header>

              {section.forums.map((forum, index) =>
                <div key={forum.title}>
                  <Card.Body className="py-3">

                    <Row noGutters className="align-items-center">
                      <Col><a href="#d" onClick={this.prevent} className="text-big font-weight-semibold">{forum.title}</a></Col>
                      <Col xs={6} className="d-none d-md-block">

                        <Row noGutters className="align-items-center">
                          <Col md={3}>{forum.threads}</Col>
                          <Col md={3}>{forum.replies}</Col>
                          <Col md={6}>
                            {forum.lastUpdate &&
                              <Media className="align-items-center">
                                <img src={`${process.env.PUBLIC_URL}/img/avatars/${forum.lastUpdate.user.avatar}`} alt="Author" className="d-block ui-w-30 rounded-circle" />
                                <Media.Body className="flex-truncate ml-2">
                                  <a href="#d" onClick={this.prevent} className="d-block text-truncate">{forum.lastUpdate.thread.title}</a>
                                  <div className="text-muted small text-truncate">{forum.lastUpdate.date} ago &nbsp;·&nbsp; <a href="#d" onClick={this.prevent} className="text-muted">{forum.lastUpdate.user.name}</a></div>
                                </Media.Body>
                              </Media>
                            }
                          </Col>
                        </Row>

                      </Col>
                    </Row>

                  </Card.Body>
                  {index !== (section.forums.length - 1) && <hr className="m-0" />}
                </div>
              )}
            </Card>
          </div>
        )}
      </div>
    )
  }
}

export default ForumsList
