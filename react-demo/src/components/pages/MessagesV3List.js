import React, { Component } from 'react'
import { Media, Button, Badge, Form, OverlayTrigger, Tooltip, ListGroup, Card, Row, Col } from 'react-bootstrap'
import '../../vendor/styles/pages/messages.scss'

class Messages3List extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Messages list v3 - Pages')

    this.state = {
      selected: [],

      // Mail boxes
      currentMailBox: 'inbox',
      mailBoxes: {
        inbox: { title: 'Inbox', icon: 'ion ion-ios-filing', count: 15 },
        sent: { title: 'Sent', icon: 'ion ion ion-ios-mail' },
        drafts: { title: 'Drafts', icon: 'ion ion ion-md-create' },
        spam: { title: 'Spam', icon: 'ion ion ion-md-folder-open' },
        trash: { title: 'Trash', icon: 'ion ion ion-md-trash' }
      },

      // Labels
      labels: {
        clients: { title: 'Clients', color: 'success' },
        important: { title: 'Important', color: 'danger' },
        social: { title: 'Social', color: 'info' },
        other: { title: 'Other', color: 'warning' }
      },

      // Messages
      messagesData: [
        { id: 1, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' },
        { id: 2, marked: true, label: null, unread: false, attachments: false, sender: 'Mae Gibson', subject: 'Street Photography Competition', date: '1d ago' },
        { id: 3, marked: false, label: 'important', unread: false, attachments: false, sender: 'GitHub', subject: '[GitHub] Your password has been changed', date: '1d ago' },
        { id: 4, marked: true, label: 'clients', unread: true, attachments: true, sender: 'Nelle Maxwell', subject: 'New design concepts', date: '1d ago' },
        { id: 5, marked: false, label: null, unread: false, attachments: false, sender: 'Dropbox', subject: 'Complete your Dropbox setup', date: '1d ago' },
        { id: 6, marked: false, label: 'other', unread: false, attachments: false, sender: 'Task manager', subject: 'You have 5 overdue tasks!', date: '1d ago' },
        { id: 7, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' },
        { id: 8, marked: false, label: null, unread: false, attachments: false, sender: 'Mae Gibson', subject: 'Street Photography Competition', date: '1d ago' },
        { id: 9, marked: false, label: 'important', unread: false, attachments: false, sender: 'GitHub', subject: '[GitHub] Your password has been changed', date: '1d ago' },
        { id: 10, marked: false, label: 'clients', unread: true, attachments: true, sender: 'Nelle Maxwell', subject: 'New design concepts', date: '1d ago' },
        { id: 11, marked: true, label: null, unread: false, attachments: false, sender: 'Dropbox', subject: 'Complete your Dropbox setup', date: '1d ago' },
        { id: 12, marked: false, label: 'other', unread: false, attachments: false, sender: 'Task manager', subject: 'You have 5 overdue tasks!', date: '1d ago' },
        { id: 13, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' },
        { id: 14, marked: false, label: null, unread: false, attachments: false, sender: 'Mae Gibson', subject: 'Street Photography Competition', date: '1d ago' },
        { id: 15, marked: false, label: 'important', unread: false, attachments: false, sender: 'GitHub', subject: '[GitHub] Your password has been changed', date: '1d ago' },
        { id: 16, marked: false, label: 'clients', unread: true, attachments: true, sender: 'Nelle Maxwell', subject: 'New design concepts', date: '1d ago' },
        { id: 17, marked: false, label: null, unread: false, attachments: false, sender: 'Dropbox', subject: 'Complete your Dropbox setup', date: '1d ago' },
        { id: 18, marked: false, label: 'other', unread: false, attachments: false, sender: 'Task manager', subject: 'You have 5 overdue tasks!', date: '1d ago' },
        { id: 19, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' },
        { id: 20, marked: false, label: null, unread: false, attachments: false, sender: 'Mae Gibson', subject: 'Street Photography Competition', date: '1d ago' },
        { id: 21, marked: false, label: 'important', unread: false, attachments: false, sender: 'GitHub', subject: '[GitHub] Your password has been changed', date: '1d ago' },
        { id: 22, marked: false, label: 'clients', unread: true, attachments: true, sender: 'Nelle Maxwell', subject: 'New design concepts', date: '1d ago' },
        { id: 23, marked: false, label: null, unread: false, attachments: false, sender: 'Dropbox', subject: 'Complete your Dropbox setup', date: '1d ago' },
        { id: 24, marked: false, label: 'other', unread: false, attachments: false, sender: 'Task manager', subject: 'You have 5 overdue tasks!', date: '1d ago' },
        { id: 25, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' }
      ]
    }
  }

  toggleSelect(e, message) {
    const selected = this.state.selected.slice(0)
    if (e.target.checked) {
      selected.push(message)
    } else {
      selected.splice(selected.indexOf(message), 1)
    }
    this.setState({ selected })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <Row>

        {/* Messages sidebox */}
        <Col className="messages-sidebox mb-4">

          <Button variant="primary" block className="mt-md-4">Compose</Button>
          <hr className="border-light my-4" />

          {/* Mail boxes */}
          {Object.keys(this.state.mailBoxes).map(box =>
            <a key={box} href="#d" onClick={this.prevent} className={`d-flex justify-content-between align-items-center py-2 ${this.state.currentMailBox === box ? 'font-weight-bold text-body' : 'text-muted'}`}>
              <div><i className={this.state.mailBoxes[box].icon}></i> &nbsp; {this.state.mailBoxes[box].title}</div>
              {this.state.mailBoxes[box].count && <Badge variant="primary">{this.state.mailBoxes[box].count}</Badge>}
            </a>
          )}
          {/* / Mail boxes */}

          <hr className="border-light my-4" />

          {/* Labels */}
          <h6 className="text-tiny font-weight-bold">LABELS</h6>
          {Object.keys(this.state.labels).map(label =>
            <a key={label} href="#d" onClick={this.prevent} className="d-block text-muted py-1">
              <Badge variant={`${this.state.labels[label].color} badge-dot`} /> &nbsp; {this.state.labels[label].title}
            </a>
          )}
          {/* / Labels */}

        </Col>
        {/* / Messages sidebox */}

        <Col>

          {/* Messages list */}
          <Card>
            {/* Header */}
            <Card.Header as="h4" className="media flex-wrap align-items-center py-4">
              <Media.Body><i className="ion ion-ios-filing"></i> &nbsp; Inbox</Media.Body>
              <Form.Control size="sm" placeholder="Search..." style={{ maxWidth: '10rem' }} />
            </Card.Header>
            {/* / Header */}

            {/* Controls */}
            <Media className="flex-wrap align-items-center py-1 px-2">
              <Media.Body className="d-flex flex-wrap flex-basis-100 flex-basis-sm-auto">
                <OverlayTrigger overlay={<Tooltip>Refresh</Tooltip>}>
                  <Button variant="default borderless md-btn-flat icon-btn text-muted"><i className="ion ion-md-refresh"></i></Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Mark as unread</Tooltip>}>
                  <Button variant="default borderless md-btn-flat icon-btn text-muted"><i className="ion ion-md-mail-unread"></i></Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Mark as important</Tooltip>}>
                  <Button variant="default borderless md-btn-flat icon-btn text-muted"><i className="ion ion-md-alert"></i></Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Move to spam</Tooltip>}>
                  <Button variant="default borderless md-btn-flat icon-btn text-muted"><i className="ion ion-md-folder-open"></i></Button>
                </OverlayTrigger>
                <OverlayTrigger overlay={<Tooltip>Move to trash</Tooltip>}>
                  <Button variant="default borderless md-btn-flat icon-btn text-muted"><i className="ion ion-md-trash"></i></Button>
                </OverlayTrigger>
              </Media.Body>

              <div className="text-muted mr-3 ml-auto">1-25 of 91</div>

              <div className="d-flex flex-wrap">
                <Button variant="default borderless md-btn-flat icon-btn text-muted"><i className="ion ion-ios-arrow-back"></i></Button>
                <Button variant="default borderless md-btn-flat icon-btn text-muted"><i className="ion ion-ios-arrow-forward"></i></Button>
              </div>
            </Media>
            <hr className="border-light m-0" />
            {/* / Controls */}

            <ListGroup className="messages-list">

              {this.state.messagesData.map(message =>
                <ListGroup.Item className="px-4" key={message.id}>
                  <div className="message-checkbox mr-1">
                    <Form.Check custom type="checkbox" id={`message-select-${message.id}`}
                      onChange={e => this.toggleSelect(e, message)}
                      label="" />
                  </div>
                  <a href="#d" onClick={this.prevent} className={`ion d-block text-big mr-3 ${message.marked ? 'text-warning ion-md-star' : 'text-lighter ion-md-star-outline'}`}><span className="sr-only">Marked message</span></a>
                  <a href="#d" onClick={this.prevent} className="message-sender flex-shrink-1 d-block text-body">
                    {message.label && <Badge variant={`${this.state.labels[message.label].color} badge-dot`} className="mr-1" />}
                    {message.sender}
                  </a>
                  <a href="#d" onClick={this.prevent} className={`message-subject flex-shrink-1 d-block text-body ${message.unread ? 'font-weight-bold' : ''}`}>
                    {message.subject}
                    {message.attachments && <i className="ion ion-md-attach ml-1" />}
                  </a>
                  <div className="message-date text-muted">{message.date}</div>
                </ListGroup.Item>
              )}

            </ListGroup>

          </Card>
          {/* / Messages list */}

        </Col>

      </Row>
    )
  }
}

export default Messages3List
