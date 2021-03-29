import React, { Component } from 'react'
import { Card, DropdownButton, Dropdown, ProgressBar, Button, Row, Col, Badge } from 'react-bootstrap'

class Teams extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Teams - Pages')

    this.state = {
      statuses: {
        1: { title: 'Available', color: 'success' },
        2: { title: 'Busy', color: 'danger' }
      },

      teamsData: [{
        status: 2,
        title: 'Frontend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac malesuada nisl. Maecenas quis ultrices tellus.',

        leaders: [
          { avatar: '2-small.png' }
        ],

        members: [
          { avatar: '3-small.png' },
          { avatar: '4-small.png' },
          { avatar: '5-small.png' },
          { avatar: '6-small.png' }
        ],

        curProject: {
          title: 'Frontend Development',
          tasks: 15,
          completedTasks: 5,
          created: '02/01/2018',
          deadline: '03/12/2018'
        }
      }, {
        status: 2,
        title: 'Backend',
        description: 'Aliquam sem elit, semper sed ante ut, aliquam molestie risus.',

        leaders: [
          { avatar: '7-small.png' },
          { avatar: '8-small.png' }
        ],

        members: [
          { avatar: '9-small.png' },
          { avatar: '10-small.png' },
          { avatar: '11-small.png' },
          { avatar: '12-small.png' },
          { avatar: '1-small.png' },
          { avatar: '2-small.png' },
          { avatar: '3-small.png' },
          { avatar: '4-small.png' }
        ],

        curProject: {
          title: 'Website',
          tasks: 44,
          completedTasks: 29,
          created: '02/01/2018',
          deadline: '03/12/2018'
        }
      }, {
        status: 1,
        title: 'Design',
        description: 'Etiam venenatis varius lectus sed fermentum. Nullam hendrerit, massa sed tincidunt sagittis, leo nibh semper sapien, vitae interdum nisl erat ut sapien.',

        leaders: [
          { avatar: '5-small.png' }
        ],

        members: [
          { avatar: '6-small.png' },
          { avatar: '7-small.png' },
          { avatar: '8-small.png' },
          { avatar: '9-small.png' }
        ],

        curProject: null
      }, {
        status: 2,
        title: 'Marketing',
        description: 'Suspendisse scelerisque nisi ac semper ornare.',

        leaders: [
          { avatar: '7-small.png' }
        ],

        members: [
          { avatar: '8-small.png' },
          { avatar: '9-small.png' },
          { avatar: '10-small.png' }
        ],

        curProject: {
          title: 'example.com SEO',
          tasks: 70,
          completedTasks: 45,
          created: '02/01/2018',
          deadline: '03/12/2018'
        }
      }, {
        status: 1,
        title: 'Graphic',
        description: 'Pellentesque imperdiet nunc quis fringilla euismod. Nunc iaculis eu augue sit amet faucibus.',

        leaders: [
          { avatar: '11-small.png' }
        ],

        members: [
          { avatar: '12-small.png' },
          { avatar: '1-small.png' },
          { avatar: '2-small.png' },
          { avatar: '3-small.png' }
        ],

        curProject: null
      }]
    }
  }

  completedPercent(tasks, completed) {
    return Math.round((completed / tasks) * 100)
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>

        <h4 className="d-flex justify-content-between align-items-center w-100 font-weight-bold py-3 mb-4">
          <div>Teams</div>
          <Button variant="primary rounded-pill" className="d-block"><span className="ion ion-md-add"></span>&nbsp; Add team</Button>
        </h4>

        <Row>
          {this.state.teamsData.map(team =>
            <Col sm={6} xl={4} key={team.title}>

              <Card className="mb-4">
                <Card.Body className="pb-0">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <a href="#d" onClick={this.prevent} className="text-body text-big font-weight-semibold">{team.title}</a>
                      <Badge variant={this.state.statuses[team.status].color} className="align-text-bottom ml-1">{this.state.statuses[team.status].title}</Badge>
                    </div>
                    <DropdownButton title={<i className="ion ion-ios-more"></i>} variant="default icon-btn borderless rounded-pill md-btn-flat hide-arrow" size="sm" alignRight={!isRTL}>
                      <Dropdown.Item>View</Dropdown.Item>
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Remove</Dropdown.Item>
                    </DropdownButton>
                  </div>
                  <div className="mt-3">
                    {team.description}
                  </div>
                </Card.Body>
                <Card.Body className="pt-3 pb-0">
                  <div className="text-muted small mb-2">Leaders</div>
                  <div className="d-flex flex-wrap">
                    {team.leaders.map(leader =>
                      <a key={leader.avatar} href="#d" onClick={this.prevent} className="d-block mr-1 mb-1">
                        <img src={`${process.env.PUBLIC_URL}/img/avatars/${leader.avatar}`} alt="Leader" className="ui-w-30 rounded-circle" />
                      </a>
                    )}
                  </div>
                </Card.Body>
                <Card.Body className="py-3">
                  <div className="text-muted small mb-2">Members</div>
                  <div className="d-flex flex-wrap">
                    {team.members.map(member =>
                      <a key={member.avatar} href="#d" onClick={this.prevent} className="d-block mr-1 mb-1">
                        <img src={`${process.env.PUBLIC_URL}/img/avatars/${member.avatar}`} alt="Member" className="ui-w-30 rounded-circle" />
                      </a>
                    )}
                  </div>
                </Card.Body>
                <hr className="m-0" />

                {team.curProject && <Card.Body>
                  <div className="text-muted small">Current project</div>
                  <div className="mb-3"><a href="#d" onClick={this.prevent} className="text-body font-weight-semibold">{team.curProject.title}</a></div>
                  <div className="d-flex justify-content-between align-items-center small">
                    <div className="font-weight-bold">{this.completedPercent(team.curProject.tasks, team.curProject.completedTasks)}%</div>
                    <div className="text-muted">{team.curProject.completedTasks} / {team.curProject.tasks} tasks completed</div>
                  </div>
                  <ProgressBar now={this.completedPercent(team.curProject.tasks, team.curProject.completedTasks)} style={{ height: '3px' }} className="mt-1" />
                  <Row className="mt-3">
                    <Col>
                      <div className="text-muted small">Created</div>
                      <div className="small font-weight-bold">{team.curProject.created}</div>
                    </Col>
                    <Col>
                      <div className="text-muted small">Deadline</div>
                      <div className="small font-weight-bold">{team.curProject.deadline}</div>
                    </Col>
                  </Row>
                </Card.Body>}
                {!team.curProject && <Card.Body>
                  <div className="text-lighter">No current project</div>
                </Card.Body>}

              </Card>

            </Col>
          )}
        </Row>

      </div>
    )
  }
}

export default Teams
