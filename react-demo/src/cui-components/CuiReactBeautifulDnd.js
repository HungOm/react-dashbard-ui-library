import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// ****************************************************************************
// Sort data
//

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

const reorderMap = (itemMap, source, destination) => {
  const sourceKey = source.droppableId === 'multi-vertical-first-droppable' || source.droppableId === 'multi-horizontal-first-droppable' ? 'first' : 'second'
  const destinationKey = destination.droppableId === 'multi-vertical-first-droppable' || destination.droppableId === 'multi-horizontal-first-droppable' ? 'first' : 'second'
  const current = [...itemMap[sourceKey]]
  const next = [...itemMap[destinationKey]]
  const target = current[source.index]

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(
      current,
      source.index,
      destination.index,
    )
    const result = {
      ...itemMap,
      [sourceKey]: reordered,
    }
    return result
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1)
  // insert into next
  next.splice(destination.index, 0, target)

  const result = {
    ...itemMap,
    [sourceKey]: current,
    [destinationKey]: next,
  }

  return result
}

// ****************************************************************************
// Examples
//

function SimpleVerticalExample ({ items, onChange }) {
  const onDragEnd = (result) => {
    if (!result.destination) return
    onChange(reorder(
      items,
      result.source.index,
      result.destination.index,
    ))
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="simple-vertical-droppable">
        {(droppableProvided, droppableSnapshot) => (
          <div ref={droppableProvided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <div className="bg-light p-2 mb-1"
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}>
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

function SimpleHorizontalExample ({ items, onChange }) {
  const onDragEnd = (result) => {
    if (!result.destination) return
    onChange(reorder(
      items,
      result.source.index,
      result.destination.index,
    ))
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="simple-horizontal-droppable" direction="horizontal">
        {(droppableProvided, droppableSnapshot) => (
          <div ref={droppableProvided.innerRef} className="d-flex">
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                  <div className="bg-light p-2 mr-1 d-inline-block"
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}>
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

function MultiVerticalExample ({ itemsMap, onChange }) {
  const onDragEnd = (result) => {
    if (!result.destination) return
    onChange(reorderMap(
      itemsMap,
      result.source,
      result.destination,
    ))
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Row>
        <Col xs={6}>

          <Droppable droppableId="multi-vertical-first-droppable">
            {(droppableProvided, droppableSnapshot) => (
              <div ref={droppableProvided.innerRef} style={{ minHeight: '30px' }} className="bg-light p-2">
                {itemsMap.first.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(draggableProvided, draggableSnapshot) => (
                      <div className="bg-light p-2 my-1"
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}>
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>

        </Col>
        <Col xs={6}>

          <Droppable droppableId="multi-vertical-second-droppable">
            {(droppableProvided, droppableSnapshot) => (
              <div ref={droppableProvided.innerRef} style={{ minHeight: '30px' }} className="bg-light p-2">
                {itemsMap.second.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(draggableProvided, draggableSnapshot) => (
                      <div className="bg-light p-2 my-1"
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}>
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {droppableProvided.placeholder}
              </div>
            )}
          </Droppable>

        </Col>
      </Row>
    </DragDropContext>
  )
}

function MultiHorizontalExample ({ itemsMap, onChange }) {
  const onDragEnd = (result) => {
    if (!result.destination) return
    onChange(reorderMap(
      itemsMap,
      result.source,
      result.destination,
    ))
  }
  return (
    <div className="border border-light p-3">
      <DragDropContext onDragEnd={onDragEnd}>

        <Droppable droppableId="multi-horizontal-first-droppable" direction="horizontal">
          {(droppableProvided, droppableSnapshot) => (
            <div ref={droppableProvided.innerRef} style={{ minHeight: '30px' }} className="d-flex bg-light p-2">
              {itemsMap.first.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(draggableProvided, draggableSnapshot) => (
                    <div className="bg-light p-2 mr-1 d-inline-block"
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}>
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="multi-horizontal-second-droppable" direction="horizontal">
          {(droppableProvided, droppableSnapshot) => (
            <div ref={droppableProvided.innerRef} style={{ minHeight: '30px' }} className="d-flex mt-2 bg-light p-2">
              {itemsMap.second.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(draggableProvided, draggableSnapshot) => (
                    <div className="bg-light p-2 mr-1 d-inline-block"
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}>
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>

      </DragDropContext>
    </div>
  )
}

// ****************************************************************************
//

class CuiReactBeautifulDnd extends Component {
  constructor (props) {
    super(props)

    this.onChangeSimple = this.onChangeSimple.bind(this)
    this.onChangeMulti = this.onChangeMulti.bind(this)

    this.state = {
      simple: [
        { id: 'item-1', content: 'Item 1' },
        { id: 'item-2', content: 'Item 2' },
        { id: 'item-3', content: 'Item 3' },
        { id: 'item-4', content: 'Item 4' },
        { id: 'item-5', content: 'Item 5' }
      ],
      multi: {
        first: [
          { id: 'item-1.1', content: 'Item 1.1' },
          { id: 'item-1.2', content: 'Item 1.2' },
          { id: 'item-1.3', content: 'Item 1.3' },
          { id: 'item-1.4', content: 'Item 1.4' },
          { id: 'item-1.5', content: 'Item 1.5' }
        ],
        second: [
          { id: 'item-2.1', content: 'Item 2.1' },
          { id: 'item-2.2', content: 'Item 2.2' },
          { id: 'item-2.3', content: 'Item 2.3' },
        ]
      }
    }
  }

  onChangeSimple (items) {
    this.setState({ simple: items })
  }

  onChangeMulti (itemsMap) {
    this.setState({ multi: itemsMap })
  }

  render() {
    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-beautiful-dnd</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/atlassian/react-beautiful-dnd" className="ui-block-description">https://github.com/atlassian/react-beautiful-dnd</a>

        <h4 className="ui-block-heading">Simple example</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <SimpleVerticalExample items={this.state.simple} onChange={this.onChangeSimple} />
          <SimpleHorizontalExample items={this.state.simple} onChange={this.onChangeSimple} />
        </div>

        <h4 className="ui-block-heading">Milti column example</h4>

        <div className="cui-example cui-example-vertical-spacing">
          <MultiVerticalExample itemsMap={this.state.multi} onChange={this.onChangeMulti} />
          <MultiHorizontalExample itemsMap={this.state.multi} onChange={this.onChangeMulti} />
        </div>
      </div>
    )
  }
}

export default CuiReactBeautifulDnd
