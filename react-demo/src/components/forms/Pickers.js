import React, { Component } from 'react'
import { Button, Card } from 'react-bootstrap'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import '../../vendor/libs/react-datepicker/react-datepicker.scss'
import Flatpickr from 'react-flatpickr'
import '../../vendor/libs/react-flatpickr/react-flatpickr.scss'
import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker
} from 'react-color'

// react-datepicker custom input
//

class ExampleCustomInput extends Component {
  render() {
    return (
      <Button onClick={this.props.onClick}>
        {this.props.value}
      </Button>
    )
  }
}

//

class Pickers extends Component {
  constructor(props) {
    super(props)
    props.setTitle('Pickers - Forms')

    this.state = {
      // react-datepicker state
      //

      startDate: new Date(),
      endDate: moment().add(5, 'days').toDate(),

      // react-flatpickr state
      //

      date: null,
      time: null,
      datetime: null,
      full: null,
      range: null,
      inline: null,

      // react-color state
      //

      color: '#A4DD00'
    }

    // react-datepicker bindings
    //

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)

    // react-color bindings
    //

    this.handleChangeComplete = this.handleChangeComplete.bind(this)

  }

  // react-datepicker methods
  //

  setDates({ startDate = this.state.startDate, endDate = this.state.endDate }) {
    if (moment(startDate).isAfter(endDate)) {
      endDate = startDate
    }

    this.setState({
      startDate,
      endDate
    })
  }

  handleChange(date) {
    this.setDates({ startDate: date })
  }

  handleChangeStart(startDate) {
    this.setDates({ startDate })
  }

  handleChangeEnd(endDate) {
    this.setDates({ endDate })
  }

  get placement() {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'
    return isRTL ? 'auto-end' : 'auto-start'
  }

  // react-color methods
  //

  handleChangeComplete(color) {
    this.setState({
      color: color.rgb
    })
  }

  //

  render() {
    const isIEMode = typeof document['documentMode'] === 'number'
    const isIE10Mode = document['documentMode'] === 10
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl'

    // react-flatpickr config
    //

    const dateConfig = {
      altInput: true,
      animate: !isRTL
    }
    const timeConfig = {
      enableTime: true,
      noCalendar: true,
      altInput: true,
      animate: !isRTL
    }
    const datetimeConfig = {
      enableTime: true,
      altInput: true,
      animate: !isRTL
    }
    const fullConfig = {
      weekNumbers: true,
      enableTime: true,
      mode: 'multiple',
      minDate: 'today',
      altInput: true,
      animate: !isRTL
    }
    const rangeConfig = {
      mode: 'range',
      altInput: true,
      animate: !isRTL
    }
    const inlineConfig = {
      inline: true,
      altInput: true,
      allowInput: false,
      animate: !isRTL
    }

    return (
      <div>
        <h4 className="font-weight-bold py-3 mb-4">
          <span className="text-muted font-weight-light">Forms /</span> Pickers
        </h4>

        {isIE10Mode && <div className="alert alert-danger">
          <strong>react-datepicker</strong> doesn't support Internet Explorer 10
        </div>}

        {!isIE10Mode && <React.Fragment>
          <Card className="mb-4">
            <Card.Header as="h6">react-datepicker</Card.Header>
            <Card.Body>
              <DatePicker className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange}
                popperPlacement={this.placement}
              />
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Custom</div>

              <DatePicker className="form-control"
                dateFormat="MM/dd/yyyy"
                placeholderText="Click to select a date"
                todayButton={"Today"}
                highlightDates={[moment().subtract(2, 'days').toDate(), moment().add(3, 'days').toDate()]}
                showWeekNumbers
                isClearable={true}
                selected={this.state.startDate}
                onChange={this.handleChange}
                popperPlacement={this.placement}
              />
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Datetime</div>

              <div className="demo-vertical-spacing-sm">
                <div>
                  <DatePicker className="form-control"
                    calendarClassName="react-datepicker--with-time"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="Time"
                    popperPlacement={this.placement}
                  />
                </div>
                <div>
                  <DatePicker className="form-control"
                    calendarClassName="react-datepicker--with-time"
                    todayButton={"Today"}
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="Time"
                    popperPlacement={this.placement}
                  />
                </div>

                <div>
                  {/* Time input */}
                  <DatePicker className="form-control"
                    selected={this.state.startDate}
                    timeInputLabel="Time:"
                    onChange={this.handleChange}
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                    popperPlacement={this.placement}
                  />
                </div>
              </div>
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Time</div>

              <DatePicker className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
                popperPlacement={this.placement}
              />
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Mix/Max</div>

              <DatePicker className="form-control"
                calendarClassName="react-datepicker--with-time"
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="Time"
                minDate={moment().subtract(5, 'days').toDate()}
                maxDate={moment().add(34, 'days').toDate()}
                minTime={moment().hours(17).minutes(0).toDate()}
                maxTime={moment().hours(20).minutes(30).toDate()}
                showDisabledMonthNavigation
                popperPlacement={this.placement}
              />
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Disabled</div>

              <DatePicker className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange}
                disabled={true}
                popperPlacement={this.placement}
              />
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Read only</div>

              <DatePicker className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange}
                readOnly={true}
                popperPlacement={this.placement}
              />
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Portal</div>

              <div className="demo-vertical-spacing-sm">
                <div>
                  <DatePicker className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    withPortal
                    todayButton={"Today"}
                  />
                </div>
                <div>
                  <DatePicker className="form-control"
                    calendarClassName = "react-datepicker--with-time"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    withPortal
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    timeCaption="Time"
                    todayButton={"Today"}
                  />
                </div>
              </div>
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Dropdowns</div>

              <div className="demo-vertical-spacing-sm" style={{ zIndex: 3, position: 'relative' }}>
                <div>
                  {/* Year dropdown */}
                  <DatePicker className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showYearDropdown
                    dateFormatCalendar="MMMM"
                    scrollableYearDropdown
                    yearDropdownItemNumber={15}
                    popperPlacement={this.placement}
                  />
                </div>

                <div>
                  {/* Month dropdown */}
                  <DatePicker className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showMonthDropdown
                    popperPlacement={this.placement}
                  />
                </div>

                <div>
                  {/* MonthYear dropdown */}
                  <DatePicker className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    dateFormatCalendar={"MMM yyyy"}
                    minDate={moment().subtract(6, 'months').toDate()}
                    maxDate={moment().add(6, 'months').toDate()}
                    showMonthYearDropdown
                    popperPlacement={this.placement}
                  />
                </div>

                <div>
                  {/* Year select dropdown */}
                  <DatePicker className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    popperPlacement={this.placement}
                  />
                </div>
              </div>
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Inline</div>

              <DatePicker
                calendarClassName="react-datepicker--inline"
                inline
                selected={this.state.startDate}
                onChange={this.handleChange}
                popperPlacement={this.placement}
              />
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Custom component</div>

              <div style={{ zIndex: 4, position: 'relative' }}>
                <DatePicker
                  customInput={<ExampleCustomInput />}
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  popperPlacement={this.placement}
                />
              </div>
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Multiple months</div>

              <div className="demo-vertical-spacing-sm" style={{ zIndex: 3, position: 'relative' }}>
                <div>
                  <DatePicker className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    monthsShown={2}
                    popperPlacement={this.placement}
                  />
                </div>

                <div>
                  {/* with year dropdown */}
                  <DatePicker className="form-control"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    showYearDropdown
                    monthsShown={2}
                    popperPlacement={this.placement}
                  />
                </div>
              </div>
              <div>
                {/* inline */}
                <DatePicker
                  calendarClassName="react-datepicker--inline"
                  selected={this.state.startDate}
                  inline
                  onChange={this.handleChange}
                  monthsShown={2}
                  popperPlacement={this.placement}
                />
              </div>
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Month picker</div>

              <DatePicker className="form-control"
                selected={this.state.startDate}
                onChange={this.handleChange}
                dateFormat="MM/yyyy"
                showMonthYearPicker
                popperPlacement={this.placement}
              />
            </Card.Body>
            <hr className="m-0" />
            <Card.Body>
              <div className="text-light small font-weight-semibold mb-3">Range</div>

              <div className="demo-vertical-spacing-sm">
                <div className="d-flex align-items-center">
                  <div className="w-100">
                    <DatePicker className="form-control"
                      selected={this.state.startDate}
                      selectsStart
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onChange={this.handleChangeStart}
                      popperPlacement={this.placement}
                    />
                  </div>
                  <div className="px-2">&ndash;</div>
                  <div className="w-100">
                    <DatePicker className="form-control"
                      selected={this.state.endDate}
                      selectsEnd
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      onChange={this.handleChangeEnd}
                      popperPlacement={this.placement}
                    />
                  </div>
                </div>

                {/* Month */}
                <div className="d-flex align-items-center">
                  <div className="w-100">
                    <DatePicker className="form-control"
                      selected={this.state.startDate}
                      selectsStart
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      onChange={this.handleChangeStart}
                      popperPlacement={this.placement}
                    />
                  </div>
                  <div className="px-2">&ndash;</div>
                  <div className="w-100">
                    <DatePicker className="form-control"
                      selected={this.state.endDate}
                      selectsEnd
                      startDate={this.state.startDate}
                      endDate={this.state.endDate}
                      dateFormat="MM/yyyy"
                      showMonthYearPicker
                      onChange={this.handleChangeEnd}
                      popperPlacement={this.placement}
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </React.Fragment>}

        <Card className="mb-4">
          <Card.Header as="h6">react-flatpickr</Card.Header>
          <Card.Body className="demo-vertical-spacing">
            <div>
              <Flatpickr
                placeholder={!isIEMode ? 'Date picker' : null}
                value={this.state.date}
                options={dateConfig}
                onChange={date => { this.setState({ date }) }} />
            </div>
            <div>
              <Flatpickr
                placeholder={!isIEMode ? 'Time picker' : null}
                value={this.state.time}
                options={timeConfig}
                onChange={time => { this.setState({ time }) }} />
            </div>
            <div>
              <Flatpickr
                placeholder={!isIEMode ? 'Datetime picker' : null}
                value={this.state.datetime}
                options={datetimeConfig}
                onChange={datetime => { this.setState({ datetime }) }} />
            </div>
            <div>
              <Flatpickr
                placeholder={!isIEMode ? 'Features' : null}
                value={this.state.full}
                options={fullConfig}
                onChange={full => { this.setState({ full }) }} />
            </div>
            <div>
              <Flatpickr
                placeholder={!isIEMode ? 'Range picker' : null}
                value={this.state.range}
                options={rangeConfig}
                onChange={range => { this.setState({ range }) }} />
            </div>
            <div>
              <Flatpickr
                placeholder={!isIEMode ? 'Inline datepicker' : null}
                value={this.state.inline}
                options={inlineConfig}
                onChange={inline => { this.setState({ inline }) }} />
            </div>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header as="h6">react-color</Card.Header>
          <Card.Body className="demo-vertical-spacing">
            <AlphaPicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
            <BlockPicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
            <ChromePicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
            <CirclePicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
            <CompactPicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
            <GithubPicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
            <HuePicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
            <MaterialPicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
            <PhotoshopPicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
            <SketchPicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
            <SliderPicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
            <SwatchesPicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
            <TwitterPicker color={this.state.color} onChangeComplete={this.handleChangeComplete} />
          </Card.Body>
        </Card>

      </div>
    )
  }
}

export default Pickers
