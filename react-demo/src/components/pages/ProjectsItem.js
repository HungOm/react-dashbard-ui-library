import React, { Component } from 'react'
import { Breadcrumb, Button, Badge, Card, ProgressBar, Tabs, Tab, Row, Col, Media, InputGroup, Form, ListGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import '../../vendor/styles/pages/projects.scss'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}
const reorderMap = (sections, source, destination) => {
  const sourceKey = parseInt(source.droppableId.replace('task-section-', ''))
  const destinationKey = parseInt(destination.droppableId.replace('task-section-', ''))
  const current = [...sections[sourceKey].tasks]
  const next = [...sections[destinationKey].tasks]
  const target = current[source.index]

  const result = [...sections]

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    result[sourceKey].tasks = reorder(
      current,
      source.index,
      destination.index,
    )
    return result
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1)
  // insert into next
  next.splice(destination.index, 0, target)

  result[sourceKey].tasks = current
  result[destinationKey].tasks = next

  return result
}

function Tasks({ sections, onChange, availableTags }) {
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

  const onDragEnd = (result) => {
    if (!result.destination) return
    onChange(reorderMap(
      sections,
      result.source,
      result.destination,
    ))
  }

  const toggleTask = (index, task) => {
    task.completed = !task.completed
    // Trigger update
    onChange([...sections])
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {sections.map((section, sectionIndex) => <React.Fragment key={section.title}>
        <Card.Body>
          <p className="text-muted small">{section.title}</p>
          <Droppable droppableId={`task-section-${sectionIndex}`}>
            {(droppableProvided, droppableSnapshot) => (
              <div ref={droppableProvided.innerRef} className="project-task-list custom-controls-stacked" style={{ minHeight: '40px' }}>
                {section.tasks.map((task, index) => (
                  <Draggable key={task.text} draggableId={task.text} index={index}>
                    {(draggableProvided, draggableSnapshot) => (<React.Fragment>
                      <div className="project-task-item" ref={draggableProvided.innerRef} {...draggableProvided.draggableProps}>

                        <label className="ui-todo-item custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" checked={task.completed} onChange={() => toggleTask(sectionIndex, task)} />
                          <span className="custom-control-label">{task.text}</span>
                          {task.tags && task.tags.map(tag =>
                            <Badge key={tag} variant={`${availableTags[tag].color} font-weight-normal ml-2`}>{availableTags[tag].title}</Badge>
                          )}
                          {task.left && <Badge variant="outline-default" className="ui-todo-badge font-weight-normal ml-2">{task.left} left</Badge>}
                        </label>

                        <div className="d-flex align-items-center float-right">
                          <div className="project-task-handle ion ion-ios-move text-lightest small mr-3" {...draggableProvided.dragHandleProps} />

                          <DropdownButton variant="default btn-xs rounded-pill icon-btn borderless md-btn-flat hide-arrow" className="task-list-actions" title={<i className="ion ion-ios-more"></i>} alignRight={!isRTL}>
                            <Dropdown.Item>Edit</Dropdown.Item>
                            <Dropdown.Item>Remove</Dropdown.Item>
                          </DropdownButton>
                        </div>

                      </div>
                    </React.Fragment>)}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>
        </Card.Body>
        {sectionIndex !== (sections.length - 1) && <hr className="m-0" />}
      </React.Fragment>)}
    </DragDropContext>
  )
}

class ProjectsItem extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Project item - Pages')

    this.onTasksChange = this.onTasksChange.bind(this)

    this.state = {
      projectPath: [
        { text: 'Projects' },
        { text: 'Website development', active: true }
      ],

      statuses: {
        1: { title: 'Active', color: 'success' },
        2: { title: 'Pending', color: 'warning' }
      },

      // Tags
      taskTags: {
        clients: { title: 'Clients', color: 'success' },
        important: { title: 'Important', color: 'danger' },
        social: { title: 'Social', color: 'info' },
        other: { title: 'Other', color: 'warning' }
      },

      projectData: {
        title: 'Frontend Development',
        status: 1,
        priority: 1,
        tasks: 44,
        completedTasks: 29,

        description: `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque magna augue, euismod at tortor et, laoreet maximus risus. Ut neque felis, luctus ut rhoncus id, elementum vitae lorem. Ut ac turpis sit amet lorem volutpat tincidunt. Vestibulum dui sapien, porttitor eget pellentesque id, ultrices id ipsum. Nam augue mi, maximus ut tortor et, fermentum efficitur diam. Suspendisse eget urna lorem. Fusce ligula augue, malesuada ullamcorper est nec, commodo laoreet tellus.</p>
  <p>Proin imperdiet purus et lectus luctus, rutrum fermentum lorem molestie. Nam urna felis, elementum elementum placerat id, fermentum ac urna. Etiam libero sem, porttitor ultrices efficitur condimentum, lobortis sit amet enim. Sed vitae orci nulla.</p>
  <p>Cras ultrices, dui id vulputate laoreet, diam orci semper ipsum, a aliquet nunc quam vitae turpis. Donec cursus tortor nec turpis semper, ac luctus mauris sagittis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
  <p>Aliquam ornare nisl semper nisl porttitor commodo vel vel libero. Pellentesque faucibus, nisl vel luctus porttitor, leo felis pellentesque augue, dignissim tempus risus odio sed lorem. Nunc nec malesuada nunc, ut mollis dui. Vestibulum ac lacinia massa. Phasellus eget purus nisi. Quisque sodales, tortor et elementum dapibus, nisl urna hendrerit metus, a rhoncus magna sem in libero. Aliquam mattis erat ut diam viverra, quis iaculis sem pulvinar. Vivamus ut mi vitae arcu finibus convallis. Nulla turpis lacus, tempor et sagittis non, egestas nec ante.</p>
  <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque pharetra turpis non aliquet ornare. Duis euismod ultricies est sed auctor. Sed luctus accumsan enim ut efficitur.</p>
        `,

        created: '02/01/2018',
        lastUpdate: '02/18/2018',
        deadline: '03/12/2018',

        hourRate: 35,
        hours: 74,

        tags: ['Development', 'Frontend', 'Backend', 'Design'],

        createdBy: {
          name: 'Mae Gibson'
        },

        client: {
          name: 'Company Ltd.'
        },

        leaders: [
          { avatar: '1-small.png', name: 'Mike Greene' }
        ],

        team: [
          { avatar: '2-small.png', name: 'Leon Wilson' },
          { avatar: '3-small.png', name: 'Allie Rodriguez' },
          { avatar: '4-small.png', name: 'Kenneth Frazier' },
          { avatar: '5-small.png', name: 'Nellie Maxwell' }
        ],

        attachments: [
          { name: 'image_1.jpg', size: '527KB', path: 'img/bg/5.jpg' },
          { name: 'image_2.jpg', size: '269KB', path: 'img/bg/6.jpg' },
          { name: 'assignment_letter.pdf', size: '156KB', path: '/path/to/assignment_letter.pdf' },
          { name: 'app_update.zip', size: '1.35MB', path: '/path/to/app_update.zip' }
        ],

        taskSections: [{
          title: 'Frontend',
          tasks: [
            { text: 'Update User profile page', tags: ['other'], completed: false },
            { text: 'Add images to the product gallery', completed: false },
            { text: 'Create invoice template', completed: false }
          ]
        }, {
          title: 'Backend',
          tasks: [
            { text: 'New blog layout', tags: ['clients'], completed: false },
            { text: 'Create UI design model', completed: false },
            { text: 'Help Web devs with HTML integration', completed: false },
            { text: 'New icons set for an iOS app', completed: false },
            { text: 'Create ad campaign banners set', completed: false },
            { text: 'Edit the draft for the icons', completed: false },
            { text: 'Fix validation issues and commit', tags: ['important'], completed: false },
            { text: 'Support tickets list doesn\'t support commas', completed: false }
          ]
        }],

        discussion: [{
          text: 'Pellentesque faucibus, nisl vel luctus porttitor, leo felis pellentesque augue, dignissim tempus risus odio sed lorem. Nunc nec malesuada nunc, ut mollis dui.',
          date: '2:33 am',
          user: { avatar: '1-small.png', name: 'Mike Greene' }
        }, {
          text: 'Quisque sodales, tortor et elementum dapibus, nisl urna hendrerit metus, a rhoncus magna sem in libero.',
          date: '2:34 am',
          user: { avatar: '5-small.png', name: 'Nelle Maxwell' }
        }, {
          text: 'Cum ea graeci tractatos.',
          date: '2:38 am',
          user: { avatar: '1-small.png', name: 'Mike Greene' }
        }, {
          text: 'Cras ultrices, dui id vulputate laoreet, diam orci semper ipsum, a aliquet nunc quam vitae turpis. Donec cursus tortor nec turpis semper, ac luctus mauris sagittis.',
          date: '2:38 am',
          user: { avatar: '2-small.png', name: 'Leon Wilson' }
        }, {
          text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
          date: '2:38 am',
          user: { avatar: '3-small.png', name: 'Allie Rodriguez' }
        }, {
          text: 'Aliquam ornare nisl semper nisl porttitor commodo vel vel libero.',
          date: '2:38 am',
          user: { avatar: '5-small.png', name: 'Kenneth Frazier' }
        }],

        activities: [{
          type: 'new_task',
          date: '2 hours',
          user: { avatar: '1-small.png', name: 'Mike Greene' },
          data: { taskTitle: 'Create invoice template' }
        }, {
          type: 'pushed_commit',
          date: '2 hours',
          user: { avatar: '2-small.png', name: 'Leon Wilson' },
          data: { commitId: 950458 }
        }, {
          type: 'pushed_commit',
          date: '2 hours',
          user: { avatar: '3-small.png', name: 'Allie Rodriguez' },
          data: { commitId: 950457 }
        }, {
          type: 'pushed_commit',
          date: '2 hours',
          user: { avatar: '5-small.png', name: 'Nellie Maxwell' },
          data: { commitId: 950456 }
        }, {
          type: 'completed_task',
          date: '2 hours',
          user: { avatar: '4-small.png', name: 'Kenneth Frazier' },
          data: { taskTitle: 'Google AdWords campain graphics' }
        }, {
          type: 'pushed_commit',
          date: '2 hours',
          user: { avatar: '4-small.png', name: 'Kenneth Frazier' },
          data: { commitId: 950455 }
        }, {
          type: 'new_task',
          date: '2 hours',
          user: { avatar: '5-small.png', name: 'Nellie Maxwell' },
          data: { taskTitle: 'Edit the draft for the icons' }
        }, {
          type: 'new_participant',
          date: '2 hours',
          user: { avatar: '1-small.png', name: 'Mike Greene' },
          data: { userName: 'Nellie Maxwell' }
        }]
      }
    }
  }

  completedPercent (tasks, completed) {
    return Math.round((completed / tasks) * 100)
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

  priorityDropdownVariant (priority) {
    let variant

    if (priority === 1) variant = 'danger'
    if (priority === 2) variant = 'success'
    if (priority === 3) variant = 'warning'

    return `${variant} btn-xs md-btn-flat`
  }

  onTasksChange(taskSections) {
    this.setState({
      projectData: {
        ...this.state.projectData,
        taskSections
      }
    })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>

        <h4 className="py-3 mb-4">
          <Breadcrumb className="font-weight-bold m-0" listProps={{ className: 'm-0' }}>
            {this.state.projectPath.map((item, i) =>
              <Breadcrumb.Item active={(this.state.projectPath.length - 1) === i} key={item.text}>{item.text}</Breadcrumb.Item>
            )}
          </Breadcrumb>
        </h4>

        {/* Header */}
        <div className="container-m-nx border-right-0 border-left-0 ui-bordered mb-4">
          <Row noGutters className="row-bordered row-border-light">
            <Col md={9}>
              <Media.Body className="container-p-x py-4">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <div><strong className="text-primary text-large">{this.completedPercent(this.state.projectData.tasks, this.state.projectData.completedTasks)}%</strong> completed</div>
                  <div className="text-muted small">{this.state.projectData.tasks - this.state.projectData.completedTasks} opened tasks, {this.state.projectData.completedTasks} tasks completed</div>
                </div>
                <ProgressBar now={this.completedPercent(this.state.projectData.tasks, this.state.projectData.completedTasks)} style={{ height: '4px' }} />
              </Media.Body>
            </Col>
            <Col md={3}>
              <div className="container-p-x py-4">
                <div className="text-muted small">Status</div>
                <strong className={`text-big text-${this.state.statuses[this.state.projectData.status].color}`}>{this.state.statuses[this.state.projectData.status].title}</strong>
              </div>
            </Col>
          </Row>
        </div>
        {/* / Header */}

        <Row>
          <Col>

            {/* Description */}
            <Card className="mb-4">
              <Card.Header as="h6">Description</Card.Header>
              <Card.Body dangerouslySetInnerHTML={{ __html: this.state.projectData.description }}></Card.Body>
            </Card>
            {/* / Description */}

            {/* Attached files */}
            {this.state.projectData.attachments && this.state.projectData.attachments.length &&
              <Card className="mb-4">
                <Card.Header as="h6">Attached files</Card.Header>
                <Card.Body className="p-3">
                  <Row noGutters>
                    {this.state.projectData.attachments.map(attachment =>
                      <Col md={6} lg={12} xl={6} key={attachment.path} className="p-1">

                        <div className="project-attachment ui-bordered p-2">
                          {this.isImage(attachment) && <div style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${attachment.path})`}} className="project-attachment-img"></div>}
                          {this.isFile(attachment) && <div className="project-attachment-file display-4"><i className={this.fileIcon(attachment)}></i></div>}

                          <Media.Body className="ml-3">
                            <strong className="project-attachment-filename">{attachment.name}</strong>
                            <div className="text-muted small">{attachment.size}</div>
                            <div>
                              {this.isImage(attachment) && <React.Fragment><a href="#d" onClick={this.prevent}>View</a> &nbsp;</React.Fragment>}
                              <a href="#d" onClick={this.prevent}>Download</a>
                            </div>
                          </Media.Body>
                        </div>

                      </Col>
                    )}
                  </Row>
                </Card.Body>
              </Card>
            }
            {/* / Attached files */}

            {/* Tabs */}
            <div className="nav-tabs-top mb-4">

              <Tabs defaultActiveKey="tasks">
                <Tab eventKey="tasks" title="Tasks">

                  <Tasks sections={this.state.projectData.taskSections} availableTags={this.state.taskTags} onChange={this.onTasksChange} />
                  <Card.Footer className="py-3">
                    <Button variant="primary"><i className="ion ion-md-add"></i>&nbsp; Add task</Button>&nbsp;
                    <Button variant="default md-btn-flat"><i className="ion ion-md-close"></i>&nbsp; Clear</Button>
                  </Card.Footer>

                </Tab>
                <Tab eventKey="discussion" title="Discussion">

                  <Card.Body>

                    {this.state.projectData.discussion.map(message => 
                      <Media key={`${message.date}${message.user.name}`} className="mb-3">
                        <div>
                          <img src={`${process.env.PUBLIC_URL}/img/avatars/${message.user.avatar}`} className="ui-w-40 rounded-circle" alt="Author" />
                          <div className="text-muted small text-nowrap mt-2">{message.date}</div>
                        </div>
                        <Media.Body className="bg-lighter rounded py-2 px-3 ml-3">
                          <div className="font-weight-semibold mb-1">{message.user.name}</div>
                          {message.text}
                        </Media.Body>
                      </Media>
                    )}

                  </Card.Body>
                  <Card.Footer>
                    <InputGroup>
                      <Form.Control placeholder="Type your message" />
                      <InputGroup.Append>
                        <Button variant="primary">Send</Button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Card.Footer>

                </Tab>
                <Tab eventKey="activity" title="Activity">
                  <Card.Body>

                    {this.state.projectData.activities.map(activity =>
                      <Media key={`${activity.type}${activity.date}${activity.user.name}`} className="pb-1 mb-3">
                        <div className="ui-feed-icon-container">
                          {activity.type === 'new_task' && <span className="ui-icon ui-feed-icon ion ion-md-add bg-primary text-white" />}
                          {activity.type === 'pushed_commit' && <span className="ui-icon ui-feed-icon ion ion-md-code bg-warning text-body" />}
                          {activity.type === 'completed_task' && <span className="ui-icon ui-feed-icon ion ion-md-checkmark bg-success text-white" />}
                          {activity.type === 'new_participant' && <span className="ui-icon ui-feed-icon ion ion-md-contact bg-info text-white" />}

                          <img src={`${process.env.PUBLIC_URL}/img/avatars/${activity.user.avatar}`} className="ui-w-40 rounded-circle" alt="User" />
                        </div>
                        <Media.Body className="align-self-center ml-3">
                          {activity.type === 'new_task' && <div><a href="#d" onClick={this.prevent}>{activity.user.name}</a> added new task <strong>{activity.data.taskTitle}</strong></div>}
                          {activity.type === 'pushed_commit' && <div><a href="#d" onClick={this.prevent}>{activity.user.name}</a> pushed commit <strong>#{activity.data.commitId}</strong></div>}
                          {activity.type === 'completed_task' && <div><a href="#d" onClick={this.prevent}>{activity.user.name}</a> completed task <strong>{activity.data.taskTitle}</strong></div>}
                          {activity.type === 'new_participant' && <div><a href="#d" onClick={this.prevent}>{activity.user.name}</a> assigned new participant <a href="#d" onClick={this.prevent}><strong>{activity.data.userName}</strong></a></div>}

                          <div className="text-muted small">{activity.date} ago</div>
                        </Media.Body>
                      </Media>
                    )}

                  </Card.Body>
                </Tab>
              </Tabs>
              {/* / Tabs */}
            </div>

          </Col>
          <Col md={4} xl={3}>

            {/* Project details */}
            <Card className="mb-4">
              <Card.Header as="h6">Project details</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">Client</div>
                  <div><a href="#d" onClick={this.prevent}>{this.state.projectData.client.name}</a></div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">Created by</div>
                  <div><a href="#d" onClick={this.prevent}>{this.state.projectData.createdBy.name}</a></div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">Created at</div>
                  <div>{this.state.projectData.created}</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">Last update</div>
                  <div>{this.state.projectData.lastUpdate}</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">Deadline</div>
                  <div><strong>{this.state.projectData.deadline}</strong></div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">Priority</div>
                  <DropdownButton
                    variant={this.priorityDropdownVariant(this.state.projectData.priority)}
                    title={<React.Fragment>
                      {this.state.projectData.priority === 1 && <span>High</span>}
                      {this.state.projectData.priority === 2 && <span>Medium</span>}
                      {this.state.projectData.priority === 3 && <span>Low</span>}
                    </React.Fragment>}
                    alignRight={!isRTL}
                    key={this.state.projectData.priority}
                  >
                    <Dropdown.Item active={this.state.projectData.priority === 1 ? 'true' : undefined}>High</Dropdown.Item>
                    <Dropdown.Item active={this.state.projectData.priority === 2 ? 'true' : undefined}>Medium</Dropdown.Item>
                    <Dropdown.Item active={this.state.projectData.priority === 3 ? 'true' : undefined}>Low</Dropdown.Item>
                  </DropdownButton>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">Hour rate</div>
                  <div>${this.state.projectData.hourRate}/h</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">Total hours</div>
                  <div>{this.state.projectData.hours}</div>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">Total cost</div>
                  <div><strong>${this.state.projectData.hourRate * this.state.projectData.hours}</strong></div>
                </ListGroup.Item>
                {this.state.projectData.tags && this.state.projectData.tags.length && <ListGroup.Item>
                  <div className="text-muted small">Tags</div>
                  <div className="d-flex flex-wrap">
                    {this.state.projectData.tags.map(tag =>
                      <Badge key={tag} variant="default" className="mt-1 mr-1">{tag}</Badge>
                    )}
                  </div>
                </ListGroup.Item>}
              </ListGroup>
            </Card>
            {/* / Project details */}

            {/* Leaders */}
            <Card className="mb-4">
              <Card.Header as="h6" className="with-elements">
                <span className="card-header-title">Leaders</span>
                <div className="card-header-elements ml-auto">
                  <Button variant="outline-primary btn-xs"><i className="ion ion-md-add"></i> Add</Button>
                </div>
              </Card.Header>
              <ListGroup variant="flush">
                {this.state.projectData.leaders.map(leader =>
                  <ListGroup.Item key={leader.name}>
                    <Media className="align-items-center">
                      <img src={`${process.env.PUBLIC_URL}/img/avatars/${leader.avatar}`} className="d-block ui-w-30 rounded-circle" alt="User" />
                      <Media.Body className="px-2">
                        <a href="#d" onClick={this.prevent} className="text-body">{leader.name}</a>
                      </Media.Body>
                      <a href="#d" onClick={this.prevent} className="d-block text-light text-large font-weight-light">&times;</a>
                    </Media>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card>
            {/* / Leaders */}

            {/* Participants */}
            <Card className="mb-4">
              <Card.Header as="h6" className="with-elements">
                <span className="card-header-title">Participants</span>
                <div className="card-header-elements ml-auto">
                  <Button variant="outline-primary btn-xs"><i className="ion ion-md-add"></i> Add</Button>
                </div>
              </Card.Header>
              <ListGroup variant="flush">
                {this.state.projectData.team.map(member =>
                  <ListGroup.Item key={member.name}>
                    <Media className="align-items-center">
                      <img src={`${process.env.PUBLIC_URL}/img/avatars/${member.avatar}`} className="d-block ui-w-30 rounded-circle" alt="Member" />
                      <Media.Body className="px-2">
                        <a href="#d" onClick={this.prevent} className="text-body">{member.name}</a>
                      </Media.Body>
                      <a href="#d" onClick={this.prevent} className="d-block text-light text-large font-weight-light">&times;</a>
                    </Media>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card>
            {/* / Participants */}

          </Col>
        </Row>

      </div>
    )
  }
}

export default ProjectsItem
