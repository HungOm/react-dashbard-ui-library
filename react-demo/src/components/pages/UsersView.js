import React, { Component } from 'react'
import { Card, Media, Button, Table, Row, Col, Badge } from 'react-bootstrap'
import * as numeral from 'numeral'
import '../../vendor/styles/pages/users.scss'

class UsersView extends Component {
  constructor(props) {
    super(props)
    props.setTitle('User view - Pages')

    this.state = {
      userData: {
        avatar: '5-small.png',
        name: 'Nelle Maxwell',
        username: 'nmaxwell',
        email: 'nmaxwell@mail.com',
        company: 'Company Ltd.',
        id: 3425433,
        registered: '01/23/2017',
        latest_activity: '01/23/2018',
        verified: true,
        role: 1,
        status: 1,

        permissions: [
          { module: 'Users', read: true, write: false, create: false, delete: false },
          { module: 'Articles', read: true, write: true, create: true, delete: false },
          { module: 'Staff', read: false, write: false, create: false, delete: false }
        ],

        // Statistics
        posts: 25,
        followers: 534,
        following: 236,

        info: {
          birthday: 'May 3, 1995',
          country: 'Canada',
          languages: ['English'],
          phone: '+0 (123) 456 7891',
          website: '',
          music: ['Rock', 'Alternative', 'Electro', 'Drum & Bass', 'Dance'],
          movies: ['The Green Mile', 'Pulp Fiction', 'Back to the Future', 'WALL·E', 'Django Unchained', 'The Truman Show', 'Home Alone', 'Seven Pounds'],

          twitter: 'https://twitter.com/user',
          facebook: 'https://www.facebook.com/user',
          google: '',
          linkedin: '',
          instagram: 'https://www.instagram.com/user'
        }
      }
    }
  }

  formatInt(v) {
    return numeral(v).format('0,0')
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <Media className="align-items-center py-3 mb-3">
          <img src={`${process.env.PUBLIC_URL}/img/avatars/${this.state.userData.avatar}`} alt="User" className="d-block ui-w-100 rounded-circle" />
          <Media.Body className="ml-4">
            <h4 className="font-weight-bold mb-0">{this.state.userData.name} <span className="text-muted font-weight-normal">@{this.state.userData.username}</span></h4>
            <div className="text-muted mb-2">ID: {this.state.userData.id}</div>
            <Button variant="primary" size="sm">Edit</Button>&nbsp;
            <Button variant="default" size="sm">Profile</Button>&nbsp;
            <Button variant="default icon-btn" size="sm"><i className="ion ion-md-mail"></i></Button>
          </Media.Body>
        </Media>
        <Card className="mb-4">
          <Card.Body>

            <Table className="user-view-table m-0">
              <tbody>
                <tr>
                  <td>Registered:</td>
                  <td>{this.state.userData.registered}</td>
                </tr>
                <tr>
                  <td>Latest activity:</td>
                  <td>{this.state.userData.latest_activity}</td>
                </tr>
                <tr>
                  <td>Verified:</td>
                  <td>
                    {this.state.userData.verified
                      ? <span><span className="ion ion-md-checkmark text-primary"></span>&nbsp; Yes</span>
                      : <span><span className="ion ion-md-close text-light"></span>&nbsp; No</span>
                    }                    
                  </td>
                </tr>
                <tr>
                  <td>Role:</td>
                  <td>
                    {this.state.userData.role === 1 && 'User'}
                    {this.state.userData.role === 2 && 'Author'}
                    {this.state.userData.role === 3 && 'Staff'}
                    {this.state.userData.role === 4 && 'Admin'}
                  </td>
                </tr>
                <tr>
                  <td>Status:</td>
                  <td>
                    {this.state.userData.status === 1 && <Badge variant="outline-success">Active</Badge>}
                    {this.state.userData.status === 2 && <Badge variant="outline-danger">Banned</Badge>}
                    {this.state.userData.status === 3 && <Badge variant="outline-default">Deleted</Badge>}
                  </td>
                </tr>
              </tbody>
            </Table>

          </Card.Body>
          <hr className="border-light m-0" />
          <Table responsive className="card-table m-0">
            <thead>
              <tr>
                <th>Module Permission</th>
                <th>Read</th>
                <th>Write</th>
                <th>Create</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userData.permissions.map(permissions =>
                <tr key={permissions.module}>
                  <td>{permissions.module}</td>
                  <td><span className={`ion ${permissions.read ? 'ion-md-checkmark text-primary' : 'ion-md-close text-light'}`} /></td>
                  <td><span className={`ion ${permissions.write ? 'ion-md-checkmark text-primary' : 'ion-md-close text-light'}`} /></td>
                  <td><span className={`ion ${permissions.create ? 'ion-md-checkmark text-primary' : 'ion-md-close text-light'}`} /></td>
                  <td><span className={`ion ${permissions.delete ? 'ion-md-checkmark text-primary' : 'ion-md-close text-light'}`} /></td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card>

        <Card>
          <Row noGutters className="row-bordered">

            <Col md className="d-flex align-items-center">
              <a href="#d" onClick={this.prevent} className="card-body d-block text-body">
                <div className="text-muted small line-height-1">Posts</div>
                <div className="text-xlarge">{this.formatInt(this.state.userData.posts)}</div>
              </a>
            </Col>

            <Col md className="d-flex align-items-center">
              <a href="#d" onClick={this.prevent} className="card-body d-block text-body">
                <div className="text-muted small line-height-1">Followers</div>
                <div className="text-xlarge">{this.formatInt(this.state.userData.followers)}</div>
              </a>
            </Col>

            <Col md className="d-flex align-items-center">
              <a href="#d" onClick={this.prevent} className="card-body d-block text-body">
                <div className="text-muted small line-height-1">Following</div>
                <div className="text-xlarge">{this.formatInt(this.state.userData.following)}</div>
              </a>
            </Col>

          </Row>
          <hr className="border-light m-0" />
          <Card.Body>

            <Table className="user-view-table m-0">
              <tbody>
                <tr>
                  <td>Username:</td>
                  <td>{this.state.userData.username}</td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>{this.state.userData.name}</td>
                </tr>
                <tr>
                  <td>E-mail:</td>
                  <td>{this.state.userData.email}</td>
                </tr>
                <tr>
                  <td>Company:</td>
                  <td>{this.state.userData.company}</td>
                </tr>
              </tbody>
            </Table>

            <h6 className="mt-4 mb-3">Social links</h6>

            <Table className="user-view-table m-0">
              <tbody>
                {this.state.userData.info.twitter ? <tr>
                  <td>Twitter:</td>
                  <td><a href="#d" onClick={this.prevent}>{this.state.userData.info.twitter}</a></td>
                </tr> : null}
                {this.state.userData.info.facebook ? <tr>
                  <td>Facebook:</td>
                  <td><a href="#d" onClick={this.prevent}>{this.state.userData.info.facebook}</a></td>
                </tr> : null}
                {this.state.userData.info.google ? <tr>
                  <td>Google+:</td>
                  <td><a href="#d" onClick={this.prevent}>{this.state.userData.info.google}</a></td>
                </tr> : null}
                {this.state.userData.info.linkedin ? <tr>
                  <td>LinkedIn:</td>
                  <td><a href="#d" onClick={this.prevent}>{this.state.userData.info.linkedin}</a></td>
                </tr> : null}
                {this.state.userData.info.instagram ? <tr>
                  <td>Instagram:</td>
                  <td><a href="#d" onClick={this.prevent}>{this.state.userData.info.instagram}</a></td>
                </tr> : null}
              </tbody>
            </Table>

            <h6 className="mt-4 mb-3">Personal info</h6>

            <Table className="user-view-table m-0">
              <tbody>
                {this.state.userData.info.birthday ? <tr>
                  <td>Birthday:</td>
                  <td>{this.state.userData.info.birthday}</td>
                </tr> : null}
                {this.state.userData.info.country ? <tr>
                  <td>Country:</td>
                  <td>{this.state.userData.info.country}</td>
                </tr> : null}
                {this.state.userData.info.languages.length ? <tr>
                  <td>Languages:</td>
                  <td>{this.state.userData.info.languages.join(', ')}</td>
                </tr> : null}
              </tbody>
            </Table>

            <h6 className="mt-4 mb-3">Contacts</h6>

            <Table className="user-view-table m-0">
              <tbody>
                {this.state.userData.info.phone ? <tr>
                  <td>Phone:</td>
                  <td>{this.state.userData.info.phone}</td>
                </tr> : null}
                {this.state.userData.info.website ? <tr>
                  <td>Website:</td>
                  <td>{this.state.userData.info.website}</td>
                </tr> : null}
              </tbody>
            </Table>

            <h6 className="mt-4 mb-3">Interests</h6>

            <Table className="user-view-table m-0">
              <tbody>
                {this.state.userData.info.music.length ? <tr>
                  <td>Favorite music:</td>
                  <td>{this.state.userData.info.music.join(', ')}</td>
                </tr> : null}
                {this.state.userData.info.movies.length ? <tr>
                  <td>Favorite movies:</td>
                  <td>{this.state.userData.info.movies.join(', ')}</td>
                </tr> : null}
              </tbody>
            </Table>

          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default UsersView
