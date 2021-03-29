import React, { Component } from 'react'
import { Button, Badge, Form, Card, Row, Col } from 'react-bootstrap'
import loadable from '@loadable/component'
import '../../vendor/libs/react-quill/typography.scss'
import '../../vendor/libs/react-quill/editor.scss'
import '../../vendor/styles/pages/messages.scss'

// Catch error in IE10
const ReactQuill = loadable(() => new Promise(resolve =>
  import('react-quill').then(Component => resolve(Component)).catch(() => resolve(<div />))
))

class MessagesV3Compose extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Compose message v3 - Pages')

    this.state = {
      // Mail boxes
      currentMailBox: null,
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

      // Message
      messageData: {
        to: '',
        subject: '',
        content: ''
      }
    }
  }

  onValueChange(field, e) {
    this.setState({
      messageData: {
        ...this.state.messageData,
        [field]: typeof e === 'string' ? e : e.target.value
      }
    })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isIE10Mode = document['documentMode'] === 10
    const modules = {
      toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }, { 'size': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        ['blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }, { 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
      ]
    }

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
          <Card>
            <Card.Header as="h4" className="py-4">New message</Card.Header>
            <Card.Body>

              <Form.Group>
                <Form.Label>To:</Form.Label>
                <Form.Control value={this.state.messageData.to} onChange={e => this.onValueChange('to', e)} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Subject:</Form.Label>
                <Form.Control value={this.state.messageData.subject} onChange={e => this.onValueChange('subject', e)} />
              </Form.Group>

              <Form.Group className="mt-4">
                {/* Set Quill editor's height */}
                <style>
                  {'.message-editor .ql-container { height: 400px }'}
                </style>

                {!isIE10Mode && (
                  <ReactQuill className="message-editor" modules={modules}
                    value={this.state.messageData.content}
                    onChange={val => this.onValueChange('content', val)} />
                )}

                {/* Fallback */}
                {isIE10Mode && (
                  <Form.Control as="textarea" style={{ height: '400px' }}
                    value={this.state.messageData.content}
                    onChange={e => this.onValueChange('content', e)} />
                )}
              </Form.Group>

              <div className="text-right mt-4">
                <Button variant="primary ml-2"><i className="ion ion-ios-paper-plane"></i>&nbsp; Send</Button>
                <Button variant="default ml-2"><i className="ion ion-md-save"></i>&nbsp; Save</Button>
                <Button variant="default ml-2">Cancel</Button>
              </div>

            </Card.Body>
          </Card>

        </Col>
      </Row>
    )
  }
}

export default MessagesV3Compose
