import React, { Component } from 'react'
import { Breadcrumb, Card, Form, Col, Media, Button, Badge } from 'react-bootstrap'
import * as numeral from 'numeral'

class ForumsList extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Forum discussion - Pages')

    this.state = {
      // Tags
      tags: {
        solved: { title: 'Solved', color: 'success' },
        locked: { title: 'Locked', color: 'default' },
        closed: { title: 'Closed', color: 'secondary' },
        sticky: { title: 'Sticky', color: 'warning' },
        hot: { title: 'Hot!', color: 'danger' }
      },

      discussionData: {
        title: 'Research in advertising',
        tags: ['sticky'],
        text: `
        <p>
          Aliquam varius euismod lectus, vel consectetur nibh tincidunt vitae. In non dignissim est. Sed eu ligula metus. Vivamus eget quam sit amet risus venenatis laoreet ut vel magna. Sed dui ligula, tincidunt in nunc eu, rhoncus iaculis nisi.
        </p>
        <p>
          Sed et convallis odio, vel laoreet tellus. Vivamus a leo eu metus porta pulvinar. Pellentesque tristique varius rutrum.
        </p>
        <p>
          Praesent sed lacinia erat. Proin efficitur pulvinar ante ullamcorper finibus. Mauris feugiat sapien quis porttitor lacinia. Curabitur finibus justo in elementum pellentesque. Morbi iaculis tortor vel justo porta, quis blandit velit bibendum. Donec eu leo dignissim, condimentum libero eu, dapibus odio. Etiam sodales venenatis posuere. Etiam condimentum nec velit eu scelerisque. Donec cursus tellus est, at hendrerit nulla commodo eu. Praesent euismod pellentesque tempor.
        </p>
        <p>
          Nulla mollis sem id tempus pharetra. Mauris finibus eros et leo ultricies volutpat. Nunc in lacus nec ex posuere gravida. Mauris metus nulla, mollis at felis vitae, congue ullamcorper velit. In vulputate dui sapien, in placerat tellus pellentesque ac. Duis pretium ex felis, sed vulputate orci efficitur id. Vivamus nec mauris ex. Nullam sed dolor id augue elementum ullamcorper. Donec sit amet consectetur erat.
        </p>`,
        date: '3 days',
        likes: 48,
        views: 1203,

        author: {
          avatar: '3-small.png',
          name: 'Allie Rodriguez',
          memberSince: '01/12/2017',
          posts: 1234
        },

        replies: [{
          text: `Nulla mollis sem id tempus pharetra. Mauris finibus eros et leo ultricies volutpat. Nunc in lacus nec ex posuere gravida. Mauris metus nulla, mollis at felis vitae, congue ullamcorper velit. In vulputate dui sapien, in placerat tellus pellentesque ac. Duis pretium ex felis, sed vulputate orci efficitur id. Vivamus nec mauris ex. Nullam sed dolor id augue elementum ullamcorper. Donec sit amet consectetur erat.`,
          date: '20 May',
          likes: 15,
          dislikes: 3,

          author: {
            avatar: '5-small.png',
            name: 'Nellie Maxwell',
            memberSince: '01/13/2017',
            posts: 345
          }
        }, {
          text: `In quis tortor et urna fermentum varius et ac nibh. Praesent dignissim leo velit, in volutpat metus rutrum sit amet. Nulla gravida nibh magna, finibus ullamcorper lacus sollicitudin ut. Proin vehicula vitae lectus a dictum. Nunc eu eros ut velit porta tristique nec eu dolor. Sed auctor elit at sapien accumsan aliquet. Vestibulum at nunc dignissim, tristique ipsum vitae, dapibus dolor. Quisque tincidunt enim sed congue venenatis. Fusce non lacus et augue cursus faucibus sit amet vitae turpis. In hac habitasse platea dictumst. Curabitur tincidunt velit maximus eros lobortis, at hendrerit nulla cursus. Donec nec metus et elit accumsan ultrices.`,
          date: '21 May',
          likes: 16,
          dislikes: 4,

          author: {
            avatar: '7-small.png',
            name: 'Alice Hampton',
            memberSince: '01/14/2017',
            posts: 346
          }
        }, {
          text: `Ea inani epicurei mea. No docendi antiopam quo, ad dicant viderer cotidieque vix. Ea mea dicat ludus, utroque explicari conclusionemque ius eu, in scaevola tractatos persecuti per.`,
          date: '22 May',
          likes: 17,
          dislikes: 1,

          author: {
            avatar: '8-small.png',
            name: 'Hallie Lewis',
            memberSince: '01/15/2017',
            posts: 347
          }
        }, {
          text: `Donec ornare eu lorem sit amet laoreet. Praesent mollis eros dui, eget tincidunt arcu rutrum ut. Morbi et dui molestie, tincidunt nibh vel, consequat sapien. Phasellus nec imperdiet erat, et viverra metus.`,
          date: '23 May',
          likes: 18,
          dislikes: 2,

          author: {
            avatar: '12-small.png',
            name: 'Wayne Morgan',
            memberSince: '01/16/2017',
            posts: 348
          }
        }, {
          text: `Proin luctus molestie magna, non rutrum nisi laoreet non. Pellentesque venenatis tincidunt tortor, ac dignissim sem volutpat placerat. Donec pharetra lacus at ullamcorper pharetra. Duis iaculis, erat nec sollicitudin efficitur, est erat tempus nisl, a pharetra nisi metus at eros. Maecenas non metus pretium, vestibulum odio id, hendrerit sem.`,
          date: '24 May',
          likes: 19,
          dislikes: 5,

          author: {
            avatar: '11-small.png',
            name: 'Belle Ross',
            memberSince: '01/17/2017',
            posts: 349
          }
        }]
      }
    }
  }

  formatInt (v) {
    return numeral(v).format('0,0')
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
            <Breadcrumb.Item>Getting started</Breadcrumb.Item>
            <Breadcrumb.Item active>
              {this.state.discussionData.title}
              {this.state.discussionData.tags.map(tag =>
                <small key={tag}><Badge variant={this.state.tags[tag].color} className="align-text-bottom ml-1">{this.state.tags[tag].title}</Badge></small>
              )}
            </Breadcrumb.Item>
          </Breadcrumb>
          <Col xs={12} md={3} className="p-0 mb-3">
            <Form.Control placeholder="Search..." />
          </Col>
        </h4>

        <Card className="mb-4">
          <Card.Header as={Media} className="flex-wrap align-items-center">
            <img src={`${process.env.PUBLIC_URL}/img/avatars/${this.state.discussionData.author.avatar}`} className="d-block ui-w-40 rounded-circle" alt="Author" />
            <Media.Body className="ml-3">
              <a href="#d" onClick={this.prevent}>{this.state.discussionData.author.name}</a>
              <div className="text-muted small">{this.state.discussionData.date} ago</div>
            </Media.Body>
            <div className="text-muted small ml-3">
              <div>Member since <strong>{this.state.discussionData.author.memberSince}</strong></div>
              <div><strong>{this.formatInt(this.state.discussionData.author.posts)}</strong> posts</div>
            </div>
          </Card.Header>

          <Card.Body dangerouslySetInnerHTML={{__html: this.state.discussionData.text}} />

          <Card.Footer className="pt-0 px-0 pb-3">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="px-4 pt-3">
                <a href="#d" onClick={this.prevent} className="text-muted">
                  <i className="ion ion-ios-heart-empty text-danger text-large align-middle"></i>&nbsp;
                  <span className="align-middle">{this.formatInt(this.state.discussionData.likes)}</span>
                </a>
                <span className="text-muted ml-4">
                  <i className="ion ion-ios-eye text-lighter text-large align-middle"></i>&nbsp;
                  <span className="align-middle">{this.formatInt(this.state.discussionData.views)}</span>
                </span>
              </div>
              <div className="px-4 pt-3">
                <Button variant="primary"><i className="ion ion-md-create"></i>&nbsp; Reply</Button>
              </div>
            </div>
          </Card.Footer>
        </Card>

        {this.state.discussionData.replies.map(reply =>
          <Card className="mb-3" key={reply.author.name + reply.date}>
            <Card.Body as={Media}>
              <img src={`${process.env.PUBLIC_URL}/img/avatars/${reply.author.avatar}`} alt="Author" className="d-block ui-w-40 rounded-circle" />
              <Media.Body className="ml-4">
                <div className="float-right text-muted small">{reply.date}</div>
                <a href="#d" onClick={this.prevent}>{reply.author.name}</a>
                <div className="text-muted small">Member since {reply.author.memberSince} &nbsp;·&nbsp; {this.formatInt(reply.author.posts)} posts</div>
                <div className="mt-2" dangerouslySetInnerHTML={{__html: reply.text}}></div>
                <div className="small mt-2">
                  <a href="#d" onClick={this.prevent} className="text-light">Reply</a>
                  <a href="#d" onClick={this.prevent} className="text-light ml-3">
                    <i className="ion ion-ios-thumbs-up"></i> {reply.likes}</a>
                  <a href="#d" onClick={this.prevent} className="text-light ml-3">
                    <i className="ion ion-ios-thumbs-down"></i> {reply.dislikes}</a>
                </div>
              </Media.Body>
            </Card.Body>
          </Card>
        )}

      </div>
    )
  }
}

export default ForumsList
