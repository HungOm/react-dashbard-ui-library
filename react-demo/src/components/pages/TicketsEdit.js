import React, { Component } from 'react'
import { Card, Button, Form, Media, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import CreatableSelect from 'react-select/creatable'
import '../../vendor/libs/react-select/react-select.scss'
import '../../vendor/styles/pages/tickets.scss'

class TicketsEdit extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Ticket edit - Pages')

    this.onTagsChange = this.onTagsChange.bind(this)
    this.removeAssignee = this.removeAssignee.bind(this)
    this.removeAttachment = this.removeAttachment.bind(this)

    this.state = {
      ticketData: {
        author: {
          avatar: '11-small.png',
          name: 'Belle Ross',
          username: 'bross'
        },
        id: '34564',
        created_at: '04/24/2017',
        last_update: '01/27/2018',
        subject: 'esse velit enim elit dolor magna est laboris',
        description: 'Ticket description',
        priority: 1,
        status: 3,
        tags: ['Feature', 'High priority'],
        assignee: [
          { avatar: '9-small.png', name: 'Amanda Warner' },
          { avatar: '2-small.png', name: 'Leon Wilson' },
          { avatar: '8-small.png', name: 'Hallie Lewis' }
        ],
        attachments: [
          { path: 'img/bg/5.jpg' },
          { path: 'img/bg/6.jpg' },
          { path: 'img/bg/7.jpg' },
          { path: 'path/to/file.txt' }
        ]
      }
    }
  }

  onValueChange(field, e, valType = String) {
    this.setState({
      ticketData: {
        ...this.state.ticketData,
        [field]: valType(e.target.value)
      }
    })
  }

  // Tags object
  get tagsObject() {
    return this.state.ticketData.tags.map(tag => (
      { value: tag, label: tag }
    ))
  }

  onTagsChange(e) {
    let tags
    if (Array.isArray(e)) {
      tags = e.map(tagObj => tagObj.value)
    } else {
      tags = e.target.value.split(',').map(tag => tag.replace(/^\s+|\s+$/g, ''))
    }

    this.setState({
      ticketData: {
        ...this.state.ticketData,
        tags
      }
    })
  }

  removeAssignee(assigneeToRemove) {
    const assignee = [...this.state.ticketData.assignee]
    assignee.splice(assignee.indexOf(assigneeToRemove), 1)
    this.setState({
      ticketData: {
        ...this.state.ticketData,
        assignee
      }
    })
  }

  removeAttachment(attachmentToRemove) {
    const attachments = [...this.state.ticketData.attachments]
    attachments.splice(attachments.indexOf(attachmentToRemove), 1)
    this.setState({
      ticketData: {
        ...this.state.ticketData,
        attachments
      }
    })
  }

  isImage (file) {
    return /\.jpg$|\.png$|\.gif$/i.test(file.path)
  }

  fileExt (file) {
    const parts = file.path.split('.')
    return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : 'FILE'
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          Ticket #{this.state.ticketData.id}
        </h4>

        <Card>
          {/* Ticket */}
          <Card.Body>

            {/* Header */}
            <Row noGutters>
              <Col sm={6} md={8} lg={7} xl={8}>

                {/* Author */}
                <Media className="align-items-center mb-4">
                  <img src={`${process.env.PUBLIC_URL}/img/avatars/${this.state.ticketData.author.avatar}`} alt="Assignee" className="d-block ui-w-50 rounded-circle" />
                  <Media.Body className="ml-3">
                    <h5 className="mb-1"><a href="#d" onClick={this.prevent} className="text-body">{this.state.ticketData.author.name}</a></h5>
                    <div className="text-muted small">@{this.state.ticketData.author.username}</div>
                  </Media.Body>
                </Media>

              </Col>
              <Col sm={6} md={4} lg={5} xl={4}>

                {/* Dates */}
                <Row noGutters className="row-bordered row-border-light ui-bordered mb-4">
                  <Col className="py-1 px-3">
                    <div className="text-muted small">Created at</div>
                    <div className="font-weight-semibold">{this.state.ticketData.created_at}</div>
                  </Col>
                  <Col className="py-1 px-3">
                    <div className="text-muted small">Last update</div>
                    <div className="font-weight-semibold">{this.state.ticketData.last_update}</div>
                  </Col>
                </Row>

              </Col>
            </Row>
            {/* / Header */}

            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control value={this.state.ticketData.subject} onChange={e => this.onValueChange('subject', e)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={5} value={this.state.ticketData.description} onChange={e => this.onValueChange('description', e)} />
            </Form.Group>

          </Card.Body>
          {/* / Ticket */}

          <hr className="border-light m-0" />

          {/* Ticket settings */}
          <Card.Body>

            <Form.Row>
              <Col sm={6}>

                <Form.Group>
                  <Form.Label>Priority</Form.Label>
                  <Form.Control as="select" className="custom-select" value={this.state.ticketData.priority} onChange={e => this.onValueChange('priority', e, Number)}>
                    <option value="1">High</option>
                    <option value="2">Medium</option>
                    <option value="3">Low</option>
                  </Form.Control>
                </Form.Group>

              </Col>
              <Col sm={6}>

                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Control as="select" className="custom-select" value={this.state.ticketData.status} onChange={e => this.onValueChange('status', e, Number)}>
                    <option value="1">Open</option>
                    <option value="2">Reopened</option>
                    <option value="3">In progress</option>
                    <option value="4">Closed</option>
                  </Form.Control>
                </Form.Group>

              </Col>
            </Form.Row>

            <Form.Group>
              <Form.Label>Tags</Form.Label>
              {!isIE10Mode &&
                <CreatableSelect className="react-select react-select-primary" classNamePrefix="react-select"
                  isMulti
                  options={this.tagsObject}
                  defaultValue={this.tagsObject}
                  onChange={this.onTagsChange} />
              }
              {isIE10Mode && 
                <Form.Control value={this.state.ticketData.tags.join(',')} onChange={this.onTagsChange} />
              }
            </Form.Group>

            <div className="ui-bordered px-3 pt-3 mb-3">
              <Form.Label className="mb-2">Assignee</Form.Label>
              <div>
                {this.state.ticketData.assignee.map((assignee, i) =>
                  <div key={assignee.avatar} className="ui-feed-icon-container d-inline-block mr-3 mb-3">
                    <a href="#remove-assignee" onClick={() => this.removeAssignee(assignee)} className="ui-icon ui-feed-icon ion ion-md-close bg-secondary text-white"><span className="sr-only">Remove assignee</span></a>
                    <OverlayTrigger overlay={<Tooltip>{assignee.name}</Tooltip>}>
                      <img src={`${process.env.PUBLIC_URL}/img/avatars/${assignee.avatar}`} className="ticket-assignee" alt="Assignee" />
                    </OverlayTrigger>
                  </div>
                )}
                <a href="#d" onClick={this.prevent} className="ticket-assignee-add bg-lighter text-muted mb-3">
                  <span className="ion ion-md-add"></span>
                </a>
              </div>
            </div>

            <div className="ui-bordered px-3 pt-3">
              <Form.Label>Attached files</Form.Label>
              <div className="clearfix">
                {this.state.ticketData.attachments.map((file, i) =>
                  <div key={file.path} className="ui-feed-icon-container float-left pt-2 mr-3 mb-3">
                    <a href="#remove-attachment" onClick={() => this.removeAttachment(file)} className="ui-icon ui-feed-icon ion ion-md-close bg-secondary text-white"><span className="sr-only">Remove attachment</span></a>
                    {this.isImage(file)
                      ? <a style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${file.path})` }} href={`${process.env.PUBLIC_URL}/${file.path}`} target="_blank" rel="noopener noreferrer" className="ticket-file-img"><span className="sr-only">Image link</span></a>
                      : <a href="#d" onClick={this.prevent} className="ticket-file bg-light text-muted font-weight-bold">{ this.fileExt(file) }</a>
                    }
                  </div>
                )}
                <a href="#d" onClick={this.prevent} className="ticket-file-add float-left bg-lighter text-muted mt-2 mb-3">
                  <span className="ion ion-md-add"></span>
                </a>
              </div>
            </div>

          </Card.Body>
          {/* / Ticket settings */}

          {/* Footer */}
          <Card.Footer>
            <Button variant="primary" className="mr-2">Save ticket</Button>
            <Button variant="default">Cancel</Button>
            <Button variant="outline-danger icon-btn borderless float-right"><i className="ion ion-md-trash"></i></Button>
          </Card.Footer>
          {/* Footer */}
        </Card>

      </div>
    )
  }
}

export default TicketsEdit
