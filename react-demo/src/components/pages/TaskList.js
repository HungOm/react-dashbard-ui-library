import React, { Component } from 'react'
import { Row, Col, Card, Nav, Badge, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import '../../vendor/styles/pages/tasks.scss'

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
              <div ref={droppableProvided.innerRef} className="task-list custom-controls-stacked" style={{ minHeight: '40px' }}>
                {section.tasks.map((task, index) => (
                  <Draggable key={task.text} draggableId={task.text} index={index}>
                    {(draggableProvided, draggableSnapshot) => (<React.Fragment>
                      <div className="task-list-item" ref={draggableProvided.innerRef} {...draggableProvided.draggableProps}>

                        <label className="ui-todo-item custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" checked={task.completed} onChange={() => toggleTask(sectionIndex, task)} />
                          <span className="custom-control-label">{task.text}</span>
                          {task.tags && task.tags.map(tag =>
                            <Badge key={tag} variant={`${availableTags[tag].color} font-weight-normal ml-2`}>{availableTags[tag].title}</Badge>
                          )}
                          {task.left && <Badge variant="outline-default" className="ui-todo-badge font-weight-normal ml-2">{task.left} left</Badge>}
                        </label>

                        <div className="d-flex align-items-center float-right">
                          <div className="task-list-handle ion ion-ios-move text-lightest small mr-3" {...draggableProvided.dragHandleProps} />

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

class TaskList extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Task list - Pages')

    this.onTasksChange = this.onTasksChange.bind(this)

    this.state = {
      curView: 'inbox',

      // "Projects" and "tags" tabs
      curTab: 'projects',

      // Projects
      projects: [
        { name: 'Website design' },
        { name: 'SEO improvement' },
        { name: 'example.com redesign' }
      ],

      // Tags
      tags: {
        clients: { title: 'Clients', color: 'success' },
        important: { title: 'Important', color: 'danger' },
        social: { title: 'Social', color: 'info' },
        other: { title: 'Other', color: 'warning' }
      },

      sectionsData: [{
        title: 'Today',
        tasks: [
          { text: 'Buy products', tags: ['other'], left: '58 mins', completed: false },
          { text: 'Reply to emails', completed: false },
          { text: 'Write blog post', left: '20 hours', completed: false },
          { text: 'Wash my car', completed: true }
        ]
      }, {
        title: 'Tomorrow',
        tasks: [
          { text: 'Buy antivirus', tags: ['other'], completed: false },
          { text: 'Jane\'s Happy Birthday', completed: false },
          { text: 'Call mom', completed: false }
        ]
      }, {
        title: 'Next week',
        tasks: [
          { text: 'New blog layout', tags: ['clients'], completed: false },
          { text: 'Create UI design model', completed: false },
          { text: 'New icons set for an iOS app', completed: false },
          { text: 'Create ad campaign banners set', completed: false },
          { text: 'Edit the draft for the icons', completed: false },
          { text: 'Fix validation issues and commit', tags: ['important'], completed: false },
          { text: 'Support tickets list doesn\'t support commas', completed: false },
          { text: 'Help Web devs with HTML integration', completed: false }
        ]
      }]
    }
  }

  selectTab(curTab) {
    this.setState({ curTab })
  }

  onTasksChange(sectionsData) {
    this.setState({ sectionsData })
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          Tasks
        </h4>

        <Row>
          <Col md={4} xl={3}>
            <div className="ui-bordered mb-4">

              <div className={`d-flex align-items-center w-100 py-2 px-3 ${this.state.curView === 'inbox' ? 'bg-lighter font-weight-bold' : ''}`}>
                <i className="ion ion-ios-filing ui-w-20 mr-1"></i>
                <a href="#d" onClick={this.prevent} className="d-block text-body">Inbox</a>
              </div>
              <div className={`d-flex align-items-center w-100 py-2 px-3 ${this.state.curView === 'today' ? 'bg-lighter font-weight-bold' : ''}`}>
                <i className="ion ion-md-calendar ui-w-20 mr-1"></i>
                <a href="#d" onClick={this.prevent} className="d-block text-body">Today</a>
              </div>
              <div className={`d-flex align-items-center w-100 py-2 px-3 ${this.state.curView === '7days' ? 'bg-lighter font-weight-bold' : ''}`}>
                <i className="ion ion-ios-calendar ui-w-20 mr-1"></i>
                <a href="#d" onClick={this.prevent} className="d-block text-body">Next 7 days</a>
              </div>

              <Nav variant="tabs tabs-alt nav-sm" className="nav-justified mt-3" defaultActiveKey="projects">
                <Nav.Item><Nav.Link eventKey="projects" onSelect={() => this.selectTab('projects')}>Projects</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="tags" onSelect={() => this.selectTab('tags')}>Tags</Nav.Link></Nav.Item>
              </Nav>

              {this.state.curTab === 'projects' &&
                <div className="py-3">
                  {this.state.projects.map(project => 
                    <div className="py-2 px-3" key={project.name}>
                      <a href="#d" onClick={this.prevent} className="text-body">{project.name}</a>
                    </div>
                  )}
                  <a href="#d" onClick={this.prevent} className="d-block text-light small py-2 px-3"><i className="ion ion-md-add"></i>&nbsp; Add project</a>
                </div>
              }
              {this.state.curTab === 'tags' &&
                <div className="py-3">
                  {Object.keys(this.state.tags).map(tag => 
                    <div className="py-2 px-3" key={this.state.tags[tag].title}>
                      <a href="#d" onClick={this.prevent} className="text-body"><Badge variant={`${this.state.tags[tag].color} badge-dot`} /> &nbsp; {this.state.tags[tag].title}</a>
                    </div>
                  )}
                  <a href="#d" onClick={this.prevent} className="d-block text-light small py-2 px-3"><i className="ion ion-md-add"></i>&nbsp; Add tag</a>
                </div>
              }

            </div>
          </Col>
          <Col>
            <Card>

              <Card.Header className="py-3">
                <Button variant="primary"><i className="ion ion-md-add"></i>&nbsp; Add task</Button>&nbsp;
                <Button variant="default md-btn-flat"><i className="ion ion-md-close"></i>&nbsp; Clear</Button>
              </Card.Header>

              <Tasks sections={this.state.sectionsData} availableTags={this.state.tags} onChange={this.onTasksChange} />

            </Card>
          </Col>
        </Row>

      </div>
    )
  }
}

export default TaskList
