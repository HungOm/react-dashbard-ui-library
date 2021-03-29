import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import moment from 'moment'

import DatePicker from 'react-datepicker'
import '../vendor/libs/react-datepicker/react-datepicker.scss'

class ExampleCustomInput extends Component {
  render() {
    return (
      <Button onClick={this.props.onClick}>
        {this.props.value}
      </Button>
    )
  }
}

class CuiReactDatepicker extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleChangeStart = this.handleChangeStart.bind(this)
    this.handleChangeEnd = this.handleChangeEnd.bind(this)

    this.state = {
      startDate: new Date(),
      endDate: moment().add(5, 'days').toDate()
    }
  }

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

  render() {
    const isIE10Mode = document['documentMode'] === 10

    return (
      <div className="ui-block">
        <h3 className="ui-block-heading">react-datepicker</h3>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Hacker0x01/react-datepicker" className="ui-block-description">https://github.com/Hacker0x01/react-datepicker</a>

        <h4 className="ui-block-heading">Default</h4>

        <div className="no-ie10" data-name="react-datepicker"></div>

        {!isIE10Mode && <React.Fragment>
          <div className="cui-example">
            <DatePicker className="form-control"
              selected={this.state.startDate}
              onChange={this.handleChange}
              popperPlacement={this.placement}
            />
          </div>

          <h4 className="ui-block-heading">Custom</h4>

          <div className="cui-example">
            <DatePicker className="form-control"
              dateFormat = "MM/dd/yyyy"
              placeholderText="Click to select a date"
              todayButton={"Today"}
              highlightDates={[moment().subtract(2, 'days').toDate(), moment().add(3, 'days').toDate()]}
              showWeekNumbers
              isClearable={true}
              selected={this.state.startDate}
              onChange={this.handleChange}
              popperPlacement={this.placement}
            />
          </div>

          <h4 className="ui-block-heading">Datetime</h4>

          <div className="cui-example cui-example-vertical-spacing-sm">
            <div>
              <DatePicker className="form-control"
                calendarClassName = "react-datepicker--with-time"
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
                calendarClassName = "react-datepicker--with-time"
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

          <h4 className="ui-block-heading">Time</h4>

          <div className="cui-example">
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
          </div>

          <h4 className="ui-block-heading">Mix/Max</h4>

          <div className="cui-example">
            <DatePicker className="form-control"
              calendarClassName = "react-datepicker--with-time"
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
          </div>

          <h4 className="ui-block-heading">Disabled</h4>

          <div className="cui-example">
            <DatePicker className="form-control"
              selected={this.state.startDate}
              onChange={this.handleChange}
              disabled={true}
              popperPlacement={this.placement}
            />
          </div>

          <h4 className="ui-block-heading">Read only</h4>

          <div className="cui-example">
            <DatePicker className="form-control"
              selected={this.state.startDate}
              onChange={this.handleChange}
              readOnly={true}
              popperPlacement={this.placement}
            />
          </div>

          <h4 className="ui-block-heading">Portal</h4>

          <div className="cui-example cui-example cui-example-vertical-spacing-sm">
            <DatePicker className="form-control"
              selected={this.state.startDate}
              onChange={this.handleChange}
              withPortal
              todayButton={"Today"}
            />

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

          <h4 className="ui-block-heading">Dropdowns</h4>

          <div className="cui-example cui-example-vertical-spacing-sm" style={{zIndex: 3, position: 'relative'}}>
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

          <h4 className="ui-block-heading">Inline</h4>

          <div className="cui-example">
            <DatePicker
              calendarClassName="react-datepicker--inline"
              inline
              selected={this.state.startDate}
              onChange={this.handleChange}
              popperPlacement={this.placement}
            />
          </div>

          <h4 className="ui-block-heading">Custom component</h4>

          <div className="cui-example" style={{zIndex: 4, position: 'relative'}}>
            <DatePicker
              customInput={<ExampleCustomInput />}
              selected={this.state.startDate}
              onChange={this.handleChange}
              popperPlacement={this.placement}
            />
          </div>

          <h4 className="ui-block-heading">Multiple months</h4>

          <div className="cui-example cui-example-vertical-spacing-sm">
            <div className="cui-example-vertical-spacing-sm" style={{zIndex: 3, position: 'relative'}}>
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
          </div>

          <h4 className="ui-block-heading">Month picker</h4>

          <div className="cui-example">
            <DatePicker className="form-control"
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              popperPlacement={this.placement}
            />
          </div>

          <h4 className="ui-block-heading">Range</h4>

          <div className="cui-example cui-example-vertical-spacing-sm">
          
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
        </React.Fragment>}
      </div>
    )
  }
}

export default CuiReactDatepicker
