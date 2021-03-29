import React, { Component } from 'react'
import { Form, Col, Card, DropdownButton, Dropdown, Badge } from 'react-bootstrap'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}
const reorderMap = (state, source, destination) => {
  const sourceKey = source.droppableId.replace('tasks-', '') + 'Tasks'
  const destinationKey = destination.droppableId.replace('tasks-', '') + 'Tasks'
  const current = [...state[sourceKey]]
  const next = [...state[destinationKey]]
  const target = current[source.index]

  const result = {}

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    result[sourceKey] = reorder(
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

  result[sourceKey] = current
  result[destinationKey] = next

  return result
}

function Tasks({ id, taskList, availableTags }) {
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
  return (
    <Droppable droppableId={`tasks-${id}`}>
      {(droppableProvided, droppableSnapshot) =>
        <div ref={droppableProvided.innerRef} className="kanban-box px-2 pt-2" style={{ minHeight: '40px' }}>
          {taskList.map((task, index) =>
            <Draggable key={task.text} draggableId={`tasks-${id}-${task.text}`} index={index}>
              {(draggableProvided, draggableSnapshot) =>

                <div className="ui-bordered p-2 mb-2" ref={draggableProvided.innerRef} {...draggableProvided.draggableProps} {...draggableProvided.dragHandleProps}>
                  <div className="kanban-board-actions float-right ml-2">
                    <DropdownButton title={<i className="ion ion-ios-more"></i>} variant="default btn-xs rounded-pill icon-btn borderless md-btn-flat hide-arrow" alignRight={!isRTL}>
                      <Dropdown.Item>Edit</Dropdown.Item>
                      <Dropdown.Item>Remove</Dropdown.Item>
                    </DropdownButton>
                  </div>
                  {task.text}
                  {task.tags && task.tags.length && task.tags.map(tag =>
                    <Badge key={tag} variant={availableTags[tag].color} className="ml-1">{availableTags[tag].title}</Badge>
                  )}
                </div>

              }
            </Draggable>
          )}
          {droppableProvided.placeholder}
        </div>
      }
    </Droppable>
  )
}

class KanbanBoard extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Kanban board - Pages')

    this.onDragEnd = this.onDragEnd.bind(this)

    this.state = {
      // Tags
      tags: {
        clients: { title: 'Clients', color: 'success' },
        important: { title: 'Important', color: 'danger' },
        social: { title: 'Social', color: 'info' },
        other: { title: 'Other', color: 'warning' }
      },

      newTasks: [
        { text: 'New blog layout' },
        { text: 'Create UI design model', tags: ['clients'] },
        { text: 'Another icon set' },
        { text: 'iOS application design mockups' }
      ],

      inProgressTasks: [
        { text: 'New icons set for an iOS app', tags: ['other'] },
        { text: 'Create ad campaign banners set' }
      ],

      testTasks: [
        { text: 'Help Web devs with HTML integration' },
        { text: 'UI/UX design review', tags: ['important'] },
        { text: 'Marketing campaign review' },
        { text: 'Fix website issues on mobile' },
        { text: 'Create landing page for a new app', tags: ['social'] }
      ],

      doneTasks: [
        { text: 'Edit the draft for the icons', tags: ['important'] },
        { text: 'Create sketch for the "FAQ" page' }
      ]
    }
  }

  onDragEnd(result) {
    if (!result.destination) return
    this.setState(reorderMap(
      this.state,
      result.source,
      result.destination
    ))
  }

  prevent(e) {
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          Kanban board
        </h4>

        <DragDropContext onDragEnd={this.onDragEnd}>

          <Form.Row>
            <Col md>

              <Card className="mb-3">
                <Card.Header as="h6" className="text-center">New</Card.Header>
                <Tasks id="new" taskList={this.state.newTasks} availableTags={this.state.tags} />
                <Card.Footer className="text-center py-2">
                  <a href="#d" onClick={this.prevent}><i className="ion ion-md-add"></i>&nbsp; Add task</a>
                </Card.Footer>
              </Card>

            </Col>
            <Col md>

              <Card border="info" className="mb-3">
                <Card.Header as="h6" className="text-center text-info">In progress</Card.Header>
                <Tasks id="inProgress" taskList={this.state.inProgressTasks} availableTags={this.state.tags} />
              </Card>

            </Col>
            <Col md>

              <Card border="warning" className="mb-3">
                <Card.Header as="h6" className="text-center text-warning">Test</Card.Header>
                <Tasks id="test" taskList={this.state.testTasks} availableTags={this.state.tags} />
              </Card>

            </Col>
            <Col md>

              <Card border="success" className="mb-3">
                <Card.Header as="h6" className="text-center text-success">Done</Card.Header>
                <Tasks id="done" taskList={this.state.doneTasks} availableTags={this.state.tags} />
                <Card.Footer className="text-center py-2">
                  <a href="#d" onClick={this.prevent}><i className="ion ion-md-close"></i>&nbsp; Clear completed tasks</a>
                </Card.Footer>
              </Card>

            </Col>
          </Form.Row>

        </DragDropContext>
      </div>
    )
  }
}

export default KanbanBoard
