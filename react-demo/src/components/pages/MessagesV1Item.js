import React, { Component } from 'react'
import { Media, Button, Badge, OverlayTrigger, Tooltip, Row, Col } from 'react-bootstrap'
import PerfectScrollbar from 'react-perfect-scrollbar'
import '../../vendor/libs/react-perfect-scrollbar/react-perfect-scrollbar.scss'
import '../../vendor/styles/pages/messages.scss'

class MessagesV1Item extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Message item v1 - Pages')

    this.toggleSidebox = this.toggleSidebox.bind(this)

    this.state = {
      sideboxOpen: false,

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

      // Message
      messageData: {
        subject: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.',
        date: '3 days',
        content: `
        <p>Hi Mike,</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <blockquote class="blockquote">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </blockquote>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`,

        sender: {
          avatar: 'img/avatars/6-small.png',
          name: 'Mae Gibson',
          email: 'mgibson@mail.com'
        },

        attachments: [
          { name: 'image_1.jpg', size: '527KB', path: 'img/bg/5.jpg' },
          { name: 'image_2.jpg', size: '269KB', path: 'img/bg/6.jpg' },
          { name: 'assignment_letter.pdf', size: '156KB', path: '/path/to/assignment_letter.pdf' },
          { name: 'app_update.zip', size: '1.35MB', path: '/path/to/app_update.zip' }
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

  isImage (file) {
    return /\.jpg$|\.png$|\.gif$/i.test(file.name)
  }

  isFile (file) {
    return !/\.jpg$|\.png$|\.gif$/i.test(file.name)
  }

  fileIcon (file) {
    let icon = 'far fa-file'

    if (/\.zip$|\.tar$|\.tar\.gz$|\.rar$/i.test(file.name)) icon = 'far fa-file-archive'
    if (/\.mp3$|\.wma$|\.ogg$|\.flac$|\.aac$/i.test(file.name)) icon = 'far fa-file-audio'
    if (/\.avi$|\.flv$|\.wmv$|\.mov$|\.mp4$/i.test(file.name)) icon = 'far fa-file-video'
    if (/\.js$|\.es6$|\.ts$/i.test(file.name)) icon = 'fab fa-js'
    if (/\.doc$|\.docx$/i.test(file.name)) icon = 'far fa-file-word'
    if (/\.htm$|\.html$/i.test(file.name)) icon = 'fab fa-html5'
    if (/\.pdf$/i.test(file.name)) icon = 'far fa-file-pdf'
    if (/\.txt$/i.test(file.name)) icon = 'far fa-file-alt'
    if (/\.css$/i.test(file.name)) icon = 'fab fa-css3'

    return icon
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      // `.messages-wrapper` fills all available space of container
      <div className={`messages-wrapper ${this.state.sideboxOpen ? 'messages-sidebox-open' : ''}`}>

        {/* Messages sidebox */}
        <PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: true }} className="messages-sidebox messages-scroll bg-body border-right">

          <div className="py-3 px-4">
            <Media className="align-items-center">
              <Media.Body>
                <Button variant="primary" block>Compose</Button>
              </Media.Body>
              <a href="#toggle-sidebox" onClick={this.toggleSidebox} className="messages-sidebox-toggler d-lg-none d-block text-muted text-large font-weight-light pl-4">&times;</a>
            </Media>
          </div>
          <hr className="border-light mx-4 mt-0 mb-4" />

          {/* Mail boxes */}
          {Object.keys(this.state.mailBoxes).map(box =>
            <a key={box} href="#d" onClick={this.prevent} className={`d-flex justify-content-between align-items-center py-2 px-4 ${this.state.currentMailBox === box ? 'font-weight-bold text-body' : 'text-muted'}`}>
              <div><i className={this.state.mailBoxes[box].icon}></i> &nbsp; {this.state.mailBoxes[box].title}</div>
              {this.state.mailBoxes[box].count && <Badge variant="primary">{this.state.mailBoxes[box].count}</Badge>}
            </a>
          )}
          {/* / Mail boxes */}

          <hr className="border-light m-4" />

          {/* Labels */}
          <h6 className="text-tiny font-weight-bold px-4">LABELS</h6>
          {Object.keys(this.state.labels).map(label =>
            <a key={label} href="#d" onClick={this.prevent} className="d-block text-muted py-1 px-4">
              <Badge variant={`${this.state.labels[label].color} badge-dot`} /> &nbsp; {this.state.labels[label].title}
            </a>
          )}
          {/* / Labels */}

        </PerfectScrollbar>
        {/* / Messages sidebox */}

        {/* Messages content wrapper */}
        <div className="d-flex flex-column w-100">

          {/* Wrap `.messages-scroll` to properly position scroll area. Remove this wrapper if you don't need scroll */}
          <div className="flex-grow-1 position-relative">

            {/* Remove `.messages-scroll` and add `.flex-grow-1` if you don't need scroll */}
            <PerfectScrollbar options={{ suppressScrollX: true, wheelPropagation: true }} className="messages-content messages-scroll">

              {/* Header */}
              <Media className="container-p-x py-3 py-lg-4">
                <a onClick={this.toggleSidebox} href="#toggle-sidebox" className="messages-sidebox-toggler d-lg-none d-block align-self-center text-muted text-large px-3 mr-3"><i className="ion ion-md-more"></i></a>

                {/* Sender photo */}
                <img src={`${process.env.PUBLIC_URL}/${this.state.messageData.sender.avatar}`} className="d-block ui-w-40 rounded-circle mt-1" alt="Sender" />
                <Media.Body className="pl-3">
                  {/* Sender & date */}
                  <div className="mb-1">
                    {this.state.messageData.sender.name} &lt;<a href="javascrip:void(0)">{this.state.messageData.sender.email}</a>&gt;
                    <span className="text-muted ml-2">{this.state.messageData.date} ago</span>
                  </div>

                  {/* Subject */}
                  <h5 className="line-height-inherit m-0">{this.state.messageData.subject}</h5>
                </Media.Body>
              </Media>
              <hr className="border-light m-0" />
              {/* / Header */}

              {/* Controls */}
              <Media className="flex-wrap align-items-center py-1 px-1 px-lg-4">
                <Media.Body className="d-flex flex-wrap flex-basis-100 flex-basis-sm-auto">
                  <OverlayTrigger overlay={<Tooltip>Back</Tooltip>}>
                    <Button variant="default borderless md-btn-flat icon-btn text-muted mr-3"><i className="ion ion-md-arrow-back"></i></Button>
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
                <div className="d-flex flex-wrap align-items-center ml-auto">
                  <Button variant="default borderless md-btn-flat text-muted px-3"><i className="ion ion-ios-undo"></i>&nbsp; Reply</Button>
                  <div className="text-lighter">|</div>
                  <Button variant="default borderless md-btn-flat text-muted px-3">Forward &nbsp;<i className="ion ion-ios-redo"></i></Button>
                </div>
              </Media>
              <hr className="border-light m-0" />
              {/* / Controls */}

              {/* Message content */}
              <div className="container-p-x py-4" dangerouslySetInnerHTML={{ __html: this.state.messageData.content }}></div>
              <hr className="border-light m-0" />
              {/* / Message content */}

              {/* Message attachments */}
              { this.state.messageData.attachments && this.state.messageData.attachments.length && <React.Fragment>
                <div className="container-p-x pt-4 pb-2">
                  <h6 className="small font-weight-semibold mb-4">Attachements</h6>

                  <Row>
                    {this.state.messageData.attachments.map(attachment => 
                      <Col sm={6} md={4} lg={6} xl={4} key={attachment.path}>
                        <div className="message-attachment ui-bordered p-2 mr-3 mb-3">

                          {this.isImage(attachment) && <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${attachment.path})` }} className="message-attachment-img"></div>}
                          {this.isFile(attachment) && <div className="message-attachment-file display-4"><i className={this.fileIcon(attachment)}></i></div>}

                          <div className="media-body ml-3">
                            <strong className="message-attachment-filename">{attachment.name}</strong>
                            <div className="text-muted small">{attachment.size}</div>
                            <div>
                              {this.isImage(attachment) && <React.Fragment><a href="#d" onClick={this.prevent}>View</a> &nbsp;</React.Fragment>}
                              <a href="#d" onClick={this.prevent}>Download</a>
                            </div>
                          </div>
                        </div>

                      </Col>
                    )}
                  </Row>
                </div>
                <hr className="border-light m-0" />
              </React.Fragment>}
              {/* / Message attachments */}

              {/* Footer */}
              <div className="text-right container-p-x py-4">
                <Button variant="primary"><i className="ion ion-ios-undo"></i>&nbsp; Reply</Button> &nbsp;
                <Button variant="default">Forward &nbsp;<i className="ion ion-ios-redo"></i></Button>
              </div>
              {/* / Footer */}

            </PerfectScrollbar>{/* / .messages-content */}
          </div>

        </div>

      </div>
    )
  }
}

export default MessagesV1Item
