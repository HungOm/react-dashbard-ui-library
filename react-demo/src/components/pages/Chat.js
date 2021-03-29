import React, { Component } from 'react'
import { Card, Row, Col, Form, Media, Badge, InputGroup, Button } from 'react-bootstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import '../../vendor/libs/react-perfect-scrollbar/react-perfect-scrollbar.scss'
import '../../vendor/styles/pages/chat.scss'

class Chat extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Chat - Pages')

    this.toggleSidebox = this.toggleSidebox.bind(this)

    this.state = {
      sideboxOpen: false,

      user: {
        avatar: '1-small.png'
      },

      contactsData: [
        { avatar: '12-small.png', name: 'Arthur Duncan', username: 'aduncan', online: false, newMessages: 0 },
        { avatar: '5-small.png', name: 'Nellie Maxwell', username: 'nmaxwell', online: true, newMessages: 2 },
        { avatar: '9-small.png', name: 'Amanda Warner', username: 'awarner', online: false, newMessages: 0 },
        { avatar: '6-small.png', name: 'Mae Gibson', username: 'mgibson', online: true, newMessages: 0 },
        { avatar: '2-small.png', name: 'Leon Wilson', username: 'lwilson', online: true, newMessages: 5 },
        { avatar: '7-small.png', name: 'Alice Hampton', username: 'ahampton', online: false, newMessages: 0 },
        { avatar: '8-small.png', name: 'Hallie Lewis', username: 'hlewis', online: false, newMessages: 1 },
        { avatar: '4-small.png', name: 'Kenneth Frazier', username: 'kfrazier', online: true, newMessages: 0 },
        { avatar: '10-small.png', name: 'Wayne Morgan', username: 'wmorgan', online: false, newMessages: 0 },
        { avatar: '3-small.png', name: 'Allie Rodriguez', username: 'arodriguez', online: true, newMessages: 0 },
        { avatar: '11-small.png', name: 'Belle Ross', username: 'bross', online: false, newMessages: 0 }
      ],

      chatData: {
        user: 'kfrazier',
        status: 'Typing...',
        messages: [
          { you: true, text: 'Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.', date: '2:33 am' },
          { you: false, text: 'Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.', date: '2:34 am' },
          { you: true, text: 'Cum ea graeci tractatos.', date: '2:35 am' },
          { you: false, text: 'Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit. Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.', date: '2:36 am' },
          { you: false, text: 'Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci.', date: '2:37 am' },
          { you: true, text: 'Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.', date: '2:38 am' },
          { you: false, text: 'Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.', date: '2:39 am' },
          { you: true, text: 'Cum ea graeci tractatos.', date: '2:40 am' },
          { you: true, text: 'Morbi finibus, lorem id placerat ullamcorper, nunc enim ultrices massa, id dignissim metus urna eget purus.', date: '2:41 am' },
          { you: false, text: 'Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit. Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.', date: '2:42 am' },
          { you: true, text: 'Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.', date: '2:43 am' },
          { you: false, text: 'Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.', date: '2:44 am' }
        ]
      }
    }
  }

  toggleSidebox(e) {
    e.preventDefault()
    this.setState({
      sideboxOpen: !this.state.sideboxOpen
    })
  }

  get chatUser() {
    for (let i = 0, l = this.state.contactsData.length; i < l; i++) {
      if (this.state.contactsData[i].username === this.state.chatData.user) return this.state.contactsData[i]
    }

    return {
      avatar: '',
      name: '',
      username: '',
      online: false,
      newMessages: 0
    }
  }

  get chatContacts() {
    //
    // Sort contacts (online then offline)
    //
    return [].concat(
      // Online
      this.state.contactsData.reduce((c, i) => {
        if (i.online) c.push(i)
        return c
      }, []).sort(function (a, b) {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()

        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
      })
    ).concat(
      // Offline
      this.state.contactsData.reduce((c, i) => {
        if (!i.online) c.push(i)
        return c
      }, []).sort(function (a, b) {
        const nameA = a.name.toUpperCase()
        const nameB = b.name.toUpperCase()

        if (nameA < nameB) return -1
        if (nameA > nameB) return 1
        return 0
      })
    )
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (<React.Fragment>
      {/* `.chat-wrapper` fills all available space of container */}
      <div className={`chat-wrapper container-p-x container-p-y ${this.state.sideboxOpen ? 'chat-sidebox-open' : ''}`}>

        {/* Make card full height of `.chat-wrapper` */}
        <Card className="flex-grow-1 position-relative overflow-hidden">

          {/* Make row full height of `.card` */}
          <Row noGutters className="h-100">
            <Col className="chat-sidebox">

              {/* Chat contacts header */}
              <div className="flex-grow-0 px-4">
                <div className="media align-items-center">
                  <div className="media-body">
                    <Form.Control className="chat-search my-3" placeholder="Search..." />
                  </div>
                  <a href="#toggle-sidebox" onClick={this.toggleSidebox} className="chat-sidebox-toggler d-lg-none d-block text-muted text-large font-weight-light pl-3">&times;</a>
                </div>
                <hr className="border-light m-0" />
              </div>
              {/* / Chat contacts header */}

              {/* Wrap `.chat-scroll` to properly position scroll area. Remove this wrapper if you don't need scroll */}
              <div className="flex-grow-1 position-relative">
                <PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: true }} className="chat-contacts list-group chat-scroll py-3">

                  {this.chatContacts.map(contact =>
                    <a key={contact.name} href="#d" onClick={this.prevent} className={`list-group-item list-group-item-action ${contact.online ? 'online': ''} ${this.state.chatData && this.state.chatData.user === contact.username ? 'active' : ''}`}>
                      <img src={`${process.env.PUBLIC_URL}/img/avatars/${contact.avatar}`} className="d-block ui-w-40 rounded-circle" alt="Contact" />
                      <Media.Body className="ml-3">
                        {contact.name}
                        {contact.online && <div className="chat-status small"><span className="badge badge-dot"></span>&nbsp; Online</div>}
                        {!contact.online && <div className="chat-status small"><span className="badge badge-dot"></span>&nbsp; Offline</div>}
                      </Media.Body>
                      {contact.newMessages > 0 && <div className="badge badge-outline-success">{contact.newMessages}</div>}
                    </a>
                  )}

                </PerfectScrollbar>{/* / .chat-contacts */}
              </div>

            </Col>
            {!this.state.chatData &&
              <Col className="d-flex justify-content-center align-items-center">
                <div className="text-lighter text-large">Select a chat</div>
              </Col>
            }
            {this.state.chatData &&
              <Col className="d-flex flex-column">

                {/* Chat header */}
                <div className="flex-grow-0 py-3 pr-4 pl-lg-4">

                  <Media className="align-items-center">
                    <a href="#toggle-sidebox" onClick={this.toggleSidebox} className="chat-sidebox-toggler d-lg-none d-block text-muted text-large px-4 mr-2"><i className="ion ion-md-more"></i></a>

                    <div className="position-relative">
                      <Badge variant={`${this.chatUser.online ? 'success' : 'danger'} badge-dot indicator`} />
                      <img src={`${process.env.PUBLIC_URL}/img/avatars/${this.chatUser.avatar}`} className="ui-w-40 rounded-circle" alt="Interlocutor" />
                    </div>
                    <Media.Body className="pl-3">
                      <strong>{this.chatUser.name}</strong>
                      <div className="text-muted small"><em>{this.state.chatData.status}</em></div>
                    </Media.Body>
                    <div>
                      <Button variant="primary rounded-pill icon-btn mr-1"><i className="ion ion-ios-call"></i></Button>
                      <Button variant="secondary rounded-pill icon-btn mr-1"><i className="ion ion-md-videocam"></i></Button>
                      <Button variant="default rounded-pill icon-btn"><i className="ion ion-ios-more"></i></Button>
                    </div>
                  </Media>

                </div>
                <hr className="flex-grow-0 border-light m-0" />
                {/* / Chat header */}

                {/* Wrap `.chat-scroll` to properly position scroll area. Remove this wtapper if you don't need scroll */}
                <div className="flex-grow-1 position-relative">

                  {/* Remove `.chat-scroll` and add `.flex-grow-1` if you don't need scroll */}
                  <PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: true }} className="chat-messages chat-scroll p-4">

                    {this.state.chatData.messages.map(message =>
                      <div key={message.date} className={`mb-4 chat-message-${message.you ? 'right' : 'left'}`}>
                        <div>
                          <img src={`${process.env.PUBLIC_URL}/img/avatars/${message.you ? this.state.user.avatar : this.chatUser.avatar}`} className="ui-w-40 rounded-circle" alt="User" />
                          <div className="text-muted small text-nowrap mt-2">{message.date}</div>
                        </div>
                        <div className={`flex-shrink-1 bg-lighter rounded py-2 px-3 ${message.you ? 'mr-3' : 'ml-3'}`}>
                          <div className="font-weight-semibold mb-1">{message.you ? 'You' : this.chatUser.name}</div>
                          {message.text}
                        </div>
                      </div>

                    )}

                  </PerfectScrollbar>{/* / .chat-messages */}
                </div>

                {/* Chat footer */}
                <hr className="border-light m-0" />
                <div className="flex-grow-0 py-3 px-4">
                  <InputGroup>
                    <Form.Control placeholder="Type your message" />
                    <InputGroup.Append>
                      <Button variant="primary">Send</Button>
                    </InputGroup.Append>
                  </InputGroup>
                </div>
                {/* / Chat footer */}

              </Col>
            }
          </Row>{/* / .row */}

        </Card>{/* / .card */}

      </div>{/* / .chat-wrapper */}
    </React.Fragment>)
  }
}

export default Chat
