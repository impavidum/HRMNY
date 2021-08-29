import React, { useState, useEffect, forwardRef } from 'react'

//Styles Imports
import './date-range.scss'

// Moment
import Moment from 'react-moment'
import moment from 'moment'

// Month Picker
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

// Week Picker
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

// Ionicons
import MdArrowDropdown from 'react-ionicons/lib/MdArrowDropdown'

// Week Picker Logic
const getWeekDays = (weekStart) => {
  const days = [weekStart]
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate()
    );
  }
  return days
}

const getWeekRange = (date) => {
  return {
    from: moment(date)
      .startOf('week')
      .toDate(),
    to: moment(date)
      .endOf('week')
      .toDate(),
  }
}

const Input = forwardRef((props, ref) => {
  return (
    <button
      className="btn picker-input"
      onClick={props.onClick}
      ref={ref}
    >
      {props.value}
      <MdArrowDropdown color="#68686E" />
    </button>
  )
})

const DateRange = props => {
  const { startDate, endDate, duration, location, params } = props
  const [startDateMonth, setStartDateMonth] = useState(new Date())
  const [showWeekPicker, setShowWeekPicker] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  const [hoverRange, setHoverRange] = useState(undefined)
  const [selectedDays, setSelectedDays] = useState(props.selectedDays)
  const [selectedDay, setSelectedDay] = useState(undefined)
  const [dropDownDuration, setDropDownDuration] = useState(null)
  const [initDashboard, setInitDashboard] = useState(false)
  const [initListPage, setInitListPage] = useState(false)


  // Component Did Mount
  useEffect(() => {
    // Initialize Start/End Date
    if (startDate === null && endDate === null) {
      let day = new Date()
      let y = moment(day).year()
      let m = moment(day).month()
      switch (duration) {
        case 'm':
          let startDateMonth = new Date(y, m, 1, 0, 0, 0)
          let endDateMonth = new Date(y, m + 1, 0, 23, 59, 59)
          props.setStartEndDates(startDateMonth, endDateMonth)
          return
        case 'w':
          let selectedDays = getWeekDays(getWeekRange(day).from)
          let startDateWeek = selectedDays[0]
          let endDateInt = Number(moment(selectedDays[6]).date())
          let endDateWeek = new Date(y, m, endDateInt, 23, 59, 59)
          props.setStartEndDates(startDateWeek, endDateWeek)
      }
    }

    // Initialize Date Range
    if (location !== '/list' && initDashboard === false) {
      let day = new Date()
      let y = moment(day).year()
      let m = moment(day).month()
      switch (duration) {
        case 'm':
          let startDateMonth = new Date(y, m, 1, 0, 0, 0)
          let endDateMonth = new Date(y, m + 1, 0, 23, 59, 59)
          props.setStartEndDates(startDateMonth, endDateMonth)
          setInitDashboard(true)
        case 'w':
          let selectedDays = getWeekDays(getWeekRange(day).from)
          let startDateWeek = selectedDays[0]
          let endDateInt = Number(moment(selectedDays[6]).date())
          let endDateWeek = new Date(y, m, endDateInt, 23, 59, 59)
          props.setStartEndDates(startDateWeek, endDateWeek)
          setInitDashboard(true)
        default:
          return
      }
    }

    // Initialize Date Range On ListPage
    if (location === '/list' && !initListPage) {
      const { duration, startDateMoment, endDateMoment } = params
      if (duration === 'm') {
        props.setStartEndDates(startDateMoment, endDateMoment)
        setDropDownDuration('m')
        setStartDateMonth(startDateMonth)
        setInitListPage(true)
      }
      if (duration === 'w') {
        props.setStartEndDates(startDateMoment, endDateMoment)
        let selectedDays = getWeekDays(getWeekRange(startDateMoment).from)
        setDropDownDuration('w')
        setSelectedDays(selectedDays)
        setInitListPage(true)
      }
    }
  }, [])

  // Open DropDown OnClick
  const openDropDown = () => {
    setShowDropDown(!showDropDown)
  }

  // Month Picker handleChange
  const handleChange = selectedMonth => {
    // Get Values
    let month = moment(selectedMonth).month()
    let year = moment(selectedMonth).year()
    let startDate = new Date(year, month, 1, 0, 0, 0)
    let endDate = new Date(year, month + 1, 0, 23, 59, 59)

    // Formatting
    let monthYear = `m${month}y${year}`

    // Close DropDown
    if (props.location === '/list') {
      openDropDown()
    }

    // SetState/Pass Data Up To Grouping
    // this.props.dateChanged()
    props.setDurationVal(null, monthYear, props.duration)
    props.setStartEndDates(startDate, endDate)
    setStartDateMonth(selectedMonth)
    setDropDownDuration('m')
  }

  // OnClick Open Week Picker
  const openWeekPicker = () => {
    setShowWeekPicker(!showWeekPicker)
  }

  const getSelectedWeekDays = selectedDays => {
    setSelectedDays(selectedDays)
  }

  // Week Picker Logic
  const handleDayChange = date => {
    // Get Values
    let selectedDays = getWeekDays(getWeekRange(date).from)
    let year = moment(date).year()
    let month = moment(date).month() // Temporary, until queries can accept hourDayWeekYear
    let week = moment(date).week()

    let startDate = selectedDays[0]
    let endDateInt = Number(moment(selectedDays[6]).date())
    let endDate = new Date(year, month, endDateInt, 23, 59, 59)

    // Formatting
    let weekYear = `w${week}y${year}`
    let monthYear = `m${month}y${year}` // Temporary, until queries can accept hourDayWeekYear

    // SetState/Pass Data Up To Grouping
    setSelectedDays(selectedDays)
    setShowWeekPicker(false)
    setDropDownDuration('w')

    // Close Picker
    openWeekPicker()
    // Close DropDown
    if (props.location === '/list') {
      openDropDown()
    }
    // this.props.dateChanged()
    props.setDurationVal(weekYear, monthYear, duration)
    props.setStartEndDates(startDate, endDate)
  }

  const handleDayEnter = date => {
    setHoverRange(getWeekRange(date))
  }

  const handleDayLeave = () => {
    setHoverRange(undefined)
  }

  const handleWeekClick = (weekNumber, days, e) => {
    setSelectedDays(days)
  }

  // Set State For Day Picker
  const handleDayClick = day => {
    // Get Start/End Moments
    let year = moment(day).year()
    let month = moment(day).month()
    let date = day.getDate()
    let startDayMoment = new Date(year, month, date, 0, 0, 0)
    let endDayMoment = new Date(year, month, date, 23, 59, 59)

    // Close DropDown
    if (location === '/list') {
      openDropDown()
    }
    // this.props.dateChanged()
    props.setStartEndDates(startDayMoment, endDayMoment)
    setSelectedDay(day)
    setDropDownDuration('d')
  }

  // Close Pickers On Overlay Click
  const closePickers = () => {
    setShowWeekPicker(false)
    setShowDropDown(false)
  }

  // Format DropDown Input
  const formatDropDownInput = () => {
    switch (dropDownDuration) {
      case 'd':
        return <Moment format="LL">{selectedDay}</Moment>
      case 'm':
        return <Moment format="MMMM YYYY">
          {startDateMonth}
        </Moment>
      case 'w':
        return <div>
          {selectedDays.length === 7 && (
            <div onClick={openWeekPicker}>
              {moment(selectedDays[0]).format('LL')} –{' '}
              {moment(selectedDays[6]).format('LL')}
            </div>
          )}
        </div>
      default:
        return <span>{props.text}</span>;
    }
  }

  // const { showWeekPicker, selectedDays, selectedDay, hoverRange } = this.state
  const notListPage = location !== '/list'
  // Week Picker Logic
  const daysAreSelected = selectedDays.length > 0

  const modifiers = {
    hoverRange,
    selectedRange: daysAreSelected && {
      from: selectedDays[0],
      to: selectedDays[6],
    },
    hoverRangeStart: hoverRange && hoverRange.from,
    hoverRangeEnd: hoverRange && hoverRange.to,
    selectedRangeStart: daysAreSelected && selectedDays[0],
    selectedRangeEnd: daysAreSelected && selectedDays[6],
  }
  return (
    <div className='date-picker'>
      <div className={`overlay ${showDropDown || showWeekPicker ? 'show' : ''}`} onClick={closePickers} />

      {/* ListView Pickers */}
      {location === "/list" && <div className="picker-wrapper" style={{ position: 'relative' }}>
        <button className="btn picker-input" onClick={openDropDown}>
          {formatDropDownInput()}
          <MdArrowDropdown color="#68686E" />
        </button>
        <div className={`drop-down ${showDropDown ? 'show-drop-down' : ''}`}>
          <div className="arrow-up"></div>
          <ul>
            <li>
              Day
                <div className="bridge" />
              <div className="drop-down-day-picker">
                <DayPicker
                  month={selectedDay}
                  onDayClick={handleDayClick}
                  selectedDays={selectedDay}
                  showOutsideDays
                  disabledDays={[
                    {
                      after: new Date(),
                    }
                  ]}
                />
              </div>
            </li>
            <li>
              Week
                <div className="bridge" />
              <div className="drop-down-week-picker">
                <DayPicker
                  month={selectedDays[0]}
                  selectedDays={selectedDays}
                  showOutsideDays
                  modifiers={modifiers}
                  onDayClick={handleDayChange}
                  onDayMouseEnter={handleDayEnter}
                  onDayMouseLeave={handleDayLeave}
                  onWeekClick={handleWeekClick}
                  disabledDays={[
                    {
                      after: new Date(),
                    }
                  ]}
                />
              </div>
            </li>
            <li>
              Month
                <div className="bridge" />
              <div className="drop-down-month-picker">
                <DatePicker
                  openToDate={startDateMonth}
                  value={startDateMonth}
                  customInput={<Input />}
                  inline
                  selected={startDateMonth}
                  onChange={handleChange}
                  dateFormat="MMMM yyyy"
                  showMonthYearPicker
                  maxDate={new Date()}
                />
              </div>
            </li>
            {/* <li>Custom</li> */}
          </ul>
        </div>
      </div>}

      {/* Dashboard Pickers */}
      {/* Month Picker */}
      {duration === 'm' && notListPage && <div className="picker-wrapper">
        <DatePicker
          openToDate={startDateMonth}
          value={startDateMonth}
          customInput={<Input />}
          selected={startDateMonth}
          onChange={handleChange}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          maxDate={new Date()}
        />
      </div>}

      <div className="picker-wrapper">
        {/* Week Picker */}
        {duration === 'w' && notListPage && <button className="btn">
          {selectedDays.length === 7 && (
            <div onClick={openWeekPicker} className="picker-input">
              {moment(selectedDays[0]).format('LL')} –{' '}
              {moment(selectedDays[6]).format('LL')}
            </div>
          )}
          <MdArrowDropdown color="#68686E" />
          {showWeekPicker ? <div className="week-picker">
            <div className="arrow-up"></div>
            <DayPicker
              month={selectedDays[0]}
              selectedDays={selectedDays}
              showOutsideDays
              modifiers={modifiers}
              onDayClick={handleDayChange}
              onDayMouseEnter={handleDayEnter}
              onDayMouseLeave={handleDayLeave}
              onWeekClick={handleWeekClick}
              disabledDays={[
                {
                  after: new Date(),
                }
              ]}
            />
          </div> : <div />}
        </button>}
      </div>

    </div>
  )
}

export default DateRange
