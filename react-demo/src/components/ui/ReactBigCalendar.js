import React, { Component } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'

// Big Calendar
import moment from 'moment'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

// Stylesheets
import '../../vendor/libs/react-big-calendar/react-big-calendar.scss'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'

const DragAndDropCalendar = withDragAndDrop(Calendar)
const allViews = Object.keys(Views).map(k => Views[k])
const localizer = momentLocalizer(moment) // or globalizeLocalizer
const NOW = new Date()
const EVENTS = [{
  id: 0,
  className: 'rbc-event-success',
  title: 'All Day Event very long title',
  start: moment(NOW).subtract(16, 'days').toDate(),
  end: moment(NOW).subtract(16, 'days').toDate(),
  allDay: true,
}, {
  id: 1,
  className: 'rbc-event-dark',
  title: 'Long Event',
  start: moment(NOW).subtract(14, 'days').toDate(),
  end: moment(NOW).subtract(12, 'days').toDate(),
}, {
  id: 4,
  className: 'rbc-event-info',
  title: 'Some Event',
  start: moment(NOW).subtract(12, 'days').set({ hour: 0, minute: 0, second: 0 }).toDate(),
  end: moment(NOW).subtract(12, 'days').set({ hour: 0, minute: 0, second: 0 }).toDate(),
}, {
  id: 5,
  className: 'rbc-event-warning',
  title: 'Conference',
  start: moment(NOW).subtract(10, 'days').set({ hour: 0, minute: 0, second: 0 }).toDate(),
  end: moment(NOW).subtract(9, 'days').set({ hour: 8, minute: 0, second: 0 }).toDate(),
  desc: 'Big conference for important people',
  allDay: true,
}, {
  id: 6,
  className: 'rbc-event-secondary',
  title: 'Meeting',
  start: moment(NOW).subtract(9, 'days').set({ hour: 10, minute: 30, second: 0 }).toDate(),
  end: moment(NOW).subtract(9, 'days').set({ hour: 12, minute: 30, second: 0 }).toDate(),
  desc: 'Pre-meeting meeting, to prepare for the meeting',
}, {
  id: 7,
  className: 'rbc-event-danger',
  title: 'Lunch',
  start: moment(NOW).subtract(9, 'days').set({ hour: 12, minute: 0, second: 0 }).toDate(),
  end: moment(NOW).subtract(9, 'days').set({ hour: 13, minute: 0, second: 0 }).toDate(),
  desc: 'Power lunch',
}, {
  id: 8,
  title: 'Meeting',
  start: moment(NOW).subtract(9, 'days').set({ hour: 14, minute: 0, second: 0 }).toDate(),
  end: moment(NOW).subtract(9, 'days').set({ hour: 15, minute: 0, second: 0 }).toDate(),
}, {
  id: 9,
  className: 'rbc-event-success',
  title: 'Happy Hour',
  start: moment(NOW).subtract(9, 'days').set({ hour: 17, minute: 0, second: 0 }).toDate(),
  end: moment(NOW).subtract(9, 'days').set({ hour: 17, minute: 30, second: 0 }).toDate(),
  desc: 'Most important meal of the day',
}, {
  id: 10,
  className: 'rbc-event-dark',
  title: 'Dinner',
  start: moment(NOW).subtract(9, 'days').set({ hour: 20, minute: 0, second: 0 }).toDate(),
  end: moment(NOW).subtract(9, 'days').set({ hour: 21, minute: 0, second: 0 }).toDate(),
}, {
  id: 11,
  className: 'rbc-event-info',
  title: 'Birthday Party',
  start: moment(NOW).subtract(8, 'days').set({ hour: 7, minute: 0, second: 0 }).toDate(),
  end: moment(NOW).subtract(8, 'days').set({ hour: 10, minute: 30, second: 0 }).toDate(),
}, {
  id: 12,
  className: 'rbc-event-warning',
  title: 'Late Night Event',
  start: moment(NOW).subtract(6, 'days').set({ hour: 19, minute: 30, second: 0 }).toDate(),
  end: moment(NOW).subtract(5, 'days').set({ hour: 2, minute: 0, second: 0 }).toDate(),
}, {
  id: 12.5,
  className: 'rbc-event-secondary',
  title: 'Late Same Night Event',
  start: moment(NOW).subtract(6, 'days').set({ hour: 19, minute: 30, second: 0 }).toDate(),
  end: moment(NOW).subtract(6, 'days').set({ hour: 23, minute: 30, second: 0 }).toDate(),
}, {
  id: 13,
  className: 'rbc-event-danger',
  title: 'Multi-day Event',
  start: moment(NOW).subtract(4, 'days').set({ hour: 19, minute: 30, second: 0 }).toDate(),
  end: moment(NOW).subtract(2, 'days').set({ hour: 2, minute: 0, second: 0 }).toDate(),
}, {
  id: 14,
  title: 'Today',
  start: moment(NOW).subtract(3, 'hours').toDate(),
  end: moment(NOW).add(3, 'hours').toDate(),
}, {
  id: 15,
  className: 'rbc-event-success',
  title: 'Point in Time Event',
  start: NOW,
  end: NOW,
}]

// Custom toolbar
const CustomToolbar = (toolbar) => {
  return (
    <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center pb-4">
      <label className='text-large font-weight-light'>{toolbar.label}</label>
      <ButtonGroup size="sm" className="w-100 w-md-auto mt-3 mt-md-0">
        <Button active={toolbar.view === 'month'} onClick={() => toolbar.onView('month')}>Month</Button>
        <Button active={toolbar.view === 'week'} onClick={() => toolbar.onView('week')}>Week</Button>
        <Button active={toolbar.view === 'work_week'} onClick={() => toolbar.onView('work_week')}>Work week</Button>
        <Button active={toolbar.view === 'day'} onClick={() => toolbar.onView('day')}>Day</Button>
        <Button active={toolbar.view === 'agenda'} onClick={() => toolbar.onView('agenda')}>Agenda</Button>
      </ButtonGroup>
      <ButtonGroup size="sm" className="w-100 w-md-auto mt-2 mt-md-0">
        <Button onClick={() => toolbar.onNavigate('PREV')}><i className="ion ion-ios-arrow-back scaleX--1-rtl" /></Button>
        <Button onClick={() => toolbar.onNavigate('TODAY')}>Today</Button>
        <Button onClick={() => toolbar.onNavigate('NEXT')}><i className="ion ion-ios-arrow-forward scaleX--1-rtl" /></Button>
      </ButtonGroup>
    </div>
  )
}

class ReactBigCalendar extends Component {
  constructor(props) {
    super(props)
    props.setTitle('React Big Calendar - UI elements')

    this.moveEvent = this.moveEvent.bind(this)
    this.newEvent = this.newEvent.bind(this)

    this.state = {
      events: EVENTS
    }
  }

  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })
  }

  newEvent(event) {
    // let idList = this.state.events.map(a => a.id)
    // let newId = Math.max(...idList) + 1
    // let hour = {
    //   id: newId,
    //   title: 'New Event',
    //   allDay: event.slots.length == 1,
    //   start: event.start,
    //   end: event.end,
    // }
    // this.setState({
    //   events: this.state.events.concat([hour]),
    // })
  }

  render() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">UI elements /</span> React Big Calendar
        </h4>

        <hr className="container-m-nx border-light mt-0 mb-4" />

        <div className="cui-example cui-example-vertical-spacing">
          <DragAndDropCalendar
            style={{ height: '900px' }}
            events={this.state.events}
            views={allViews}
            showMultiDayTimes
            popup
            selectable
            resizable
            step={60}
            defaultDate={new Date()}
            localizer={localizer}
            eventPropGetter={({ className }) => className ? { className } : null}
            onEventDrop={this.moveEvent}
            onEventResize={this.resizeEvent}
            onSelectSlot={this.newEvent}
            components={{ toolbar: CustomToolbar }}
            rtl={isRTL}
          />
        </div>
      </div>
    )
  }
}

export default ReactBigCalendar
