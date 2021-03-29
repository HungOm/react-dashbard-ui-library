import React, { Component } from 'react'
import { Button, Card, ProgressBar, Row, Col, Badge, DropdownButton, Dropdown } from 'react-bootstrap'

class ProjectsList extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Project list - Pages')

    this.state = {
      statuses: {
        1: { title: 'Active', color: 'success' },
        2: { title: 'Pending', color: 'warning' }
      },

      projectsData: [{
        status: 1,
        title: 'Frontend Development',
        tasks: 15,
        completedTasks: 5,
        shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac malesuada nisl. Maecenas quis ultrices tellus.',
        created: '02/01/2018',
        deadline: '03/12/2018',
        team: [
          { avatar: '2-small.png' },
          { avatar: '3-small.png' },
          { avatar: '4-small.png' },
          { avatar: '5-small.png' },
          { avatar: '6-small.png' }
        ]
      }, {
        status: 1,
        title: 'Website',
        tasks: 44,
        completedTasks: 29,
        shortDescription: 'Aliquam sem elit, semper sed ante ut, aliquam molestie risus.',
        created: '02/01/2018',
        deadline: '03/12/2018',
        team: [
          { avatar: '7-small.png' },
          { avatar: '8-small.png' },
          { avatar: '9-small.png' }
        ]
      }, {
        status: 1,
        title: 'UI update',
        tasks: 54,
        completedTasks: 48,
        shortDescription: 'Etiam venenatis varius lectus sed fermentum. Nullam hendrerit, massa sed tincidunt sagittis, leo nibh semper sapien, vitae interdum nisl erat ut sapien.',
        created: '02/01/2018',
        deadline: '03/12/2018',
        team: [
          { avatar: '10-small.png' },
          { avatar: '11-small.png' },
          { avatar: '12-small.png' }
        ]
      }, {
        status: 2,
        title: 'SEO',
        tasks: 70,
        completedTasks: 45,
        shortDescription: 'Suspendisse scelerisque nisi ac semper ornare.',
        created: '02/01/2018',
        deadline: '03/12/2018',
        team: [
          { avatar: '2-small.png' },
          { avatar: '3-small.png' },
          { avatar: '4-small.png' }
        ]
      }, {
        status: 1,
        title: 'example.com design',
        tasks: 84,
        completedTasks: 28,
        shortDescription: 'Pellentesque imperdiet nunc quis fringilla euismod. Nunc iaculis eu augue sit amet faucibus.',
        created: '02/01/2018',
        deadline: '03/12/2018',
        team: [
          { avatar: '5-small.png' },
          { avatar: '6-small.png' },
          { avatar: '7-small.png' },
          { avatar: '8-small.png' }
        ]
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
          <div>Projects</div>
          <Button variant="primary rounded-pill" className="d-block"><span className="ion ion-md-add"></span>&nbsp; Create project</Button>
        </h4>

        <Row>
          {this.state.projectsData.map(project =>
            <Col sm={6} xl={4} key={project.title}>
              <Card className="mb-4">

                <Card.Body className="d-flex justify-content-between align-items-start pb-3">
                  <div>
                    <a href="#d" onClick={this.prevent} className="text-body text-big font-weight-semibold">{project.title}</a>
                    <Badge variant={this.state.statuses[project.status].color} className="align-text-bottom ml-1">{this.state.statuses[project.status].title}</Badge>
                    <div className="text-muted small mt-1">{project.tasks - project.completedTasks} opened tasks, {project.completedTasks} tasks completed</div>
                  </div>
                  <DropdownButton variant="default icon-btn borderless rounded-pill md-btn-flat hide-arrow" size="sm" title={<i className="ion ion-ios-more"></i>} alignRight={!isRTL}>
                    <Dropdown.Item>View</Dropdown.Item>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Remove</Dropdown.Item>
                  </DropdownButton>
                </Card.Body>

                <ProgressBar now={this.completedPercent(project.tasks, project.completedTasks)} className="rounded-0" style={{ height: '3px' }} />
                <div className="card-body small pt-2 pb-0">
                  <strong>{this.completedPercent(project.tasks, project.completedTasks)}%</strong> completed
                </div>

                <Card.Body className="pb-3">
                  {project.shortDescription}
                </Card.Body>

                <Card.Body className="pt-0">
                  <Row>
                    <Col>
                      <div className="text-muted small">Created</div>
                      <div className="font-weight-bold">{project.created}</div>
                    </Col>
                    <Col>
                      <div className="text-muted small">Deadline</div>
                      <div className="font-weight-bold">{project.deadline}</div>
                    </Col>
                  </Row>
                </Card.Body>
                <hr className="m-0" />

                <Card.Body className="py-3">
                  <div className="text-muted small mb-2">Team</div>
                  <div className="d-flex flex-wrap">
                    {project.team.map(member =>
                      <a key={member.avatar} href="#d" onClick={this.prevent} className="d-block mr-1 mb-1">
                        <img src={`${process.env.PUBLIC_URL}/img/avatars/${member.avatar}`} alt="Team member" className="ui-w-30 rounded-circle" />
                      </a>
                    )}
                  </div>
                </Card.Body>

              </Card>
            </Col>
          )}
        </Row>

      </div>
    )
  }
}

export default ProjectsList
