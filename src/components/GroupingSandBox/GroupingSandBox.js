import React, { useState, useEffect } from 'react'
import './grouping.scss'

// Component Imports
import Grid from '../Grid/Grid'
import Card from '../Utility/Card/Card'
import Filter from '../../components/Filter/Filter'
import WeekBar from '../../components/Charting/WeekBar/WeekBar'
import MonthBar from '../../components/Charting/MonthBar/MonthBar'
import WeekDensity from '../../components/Charting/WeekDensity/WeekDensity'
import StackedBar from '../../components/Charting/StackedBar/StackedBar'
import EventByTriggerObject from '../../components/EventByTriggerObject/EventByTriggerObject'
import Pagination from '../../components/Utility/Pagination/Pagination'
import EventList from '../EventList/EventList'
import GroupingHeader from '../Utility/GroupingHeader/GroupingHeader'
import Modal from '../Utility/Modal/Modal'
import Editor from '../Editor/Editor'

// Helper Funcs
// import formatGroupingDataForDup from '../../helperFuncs/formatGroupingDataForDup'

// // Query Imports
// import {
//   GET_FILTER_DATA,
//   GET_ITEMS,
//   GET_WEEKBAR_DATA,
//   GET_ENTITY_LIST,
//   GET_WEEK_DENSITY_DATA,
//   GET_MONTHBAR_DATA,
//   GET_WEEKSEVERITY_DATA,
//   GET_ITEM_COUNT,
//   GET_ENTITY_COUNT
// } from './GroupingQueries'

// import { callbackify } from 'util'

// GraphQL
// import { Query } from 'react-apollo'

// Moment
// import moment from 'moment'
// import Loader from '../Utility/Loader/Loader'
// import { setWeek } from 'date-fns'

const levelSuggestions = ['Critical',
  'Informational',
  'Notice',
  'Warning',
  'Alert',
  'Error',
  'Emergency']
const sourceSuggestions = ['Orion', 'Splunk']
const typeSuggestions = ['Alerts', 'Traps', 'Syslogs', 'Windows Events', 'VMware Events']

const yellow = '#F3B817'
const blue = '#00B1EA'
const purple = '#6F2AD2'
const orange = '#EA7317'
const cream = '#ECEBF3'
const grey = '#8293A0'

const GroupingSandBox = props => {
  const { location, params, grouping, history, empty, updateEvents } = props
  const [editing, setEditing] = useState(true)
  const [toggleModal, setToggleModal] = useState(false)
  const [showDupModal, setShowDupModal] = useState(false)
  const [showDelModal, setShowDelModal] = useState(false)
  const [showDeldModal, setShowDeldModal] = useState(false)
  const [showCannotDelModal, setShowCannotDelModal] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [groupingData, setGroupingData] = useState(props.groupingData)
  const [formattedGroupingData, setFormattedGroupingData] = useState(null)
  const [name, setName] = useState('Webinar')
  const [page, setPage] = useState(0)
  const [types, setTypes] = useState([])
  const [levels, setLevels] = useState([])
  const [triggers, setTriggers] = useState([])
  const [names, setNames] = useState([])
  const [sources, setSources] = useState([])
  const [entitySuggestions, setEntitiySuggestions] = useState([])
  // const [chips, setChips] = useState(props.grouping.chips)
  const [initChips, setInitChips] = useState(false)
  const [dateRange, setDateRange] = useState(null)
  const [rangeType, setRangeType] = useState(null)
  const [duration, setDuration] = useState(null)
  const [monthYear, setMonthYear] = useState(null)
  const [weekYear, setWeekYear] = useState(null)
  const [weekDaysInit, setWeekDaysInit] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [orderBy, setOrderBy] = useState('name_ASC')
  const [count, setCount] = useState(11)
  const [title, setTitle] = useState(null)
  const [formattedDateString, setFormattedDateString] = useState(null)
  const [titleMargin, setTitleMargin] = useState(false)
  const [filterWidth, setFilterWidth] = useState(null)
  const [groupingMax, setGroupingMax] = useState(null)
  const [groupingMaxs, setGroupingMaxs] = useState([])
  const [dateChanged, setDateChanged] = useState(false)
  const [groupingLayout, setGroupingLayout] = useState(null)
  const [newGridElements, setNewGridElements] = useState([])


  // const calcGroupingMaxFunc = max => {
  //   // console.log('groupingMaxs:', groupingMaxs)
  //   if (groupingMaxs.some(item => max === item) || max === 0) {
  //     // console.log('some')
  //     return
  //   } else {
  //     if (max < 0) {
  //       // console.log('clearing groupingMaxs array...')
  //       setGroupingMaxs([])
  //       // this.setState({
  //       //   groupingMaxs: []
  //       // }, () => {
  //       //   console.log('should be empty array', this.state.groupingMaxs)
  //       //   this.setState({ groupingMaxs: [max] })
  //       //   let groupingMax = max + 50
  //       //   if (groupingMax < 50) { groupingMax += 50 } else
  //       //     if (groupingMax > 50 && groupingMax < 500) { groupingMax += 100 } else
  //       //       if (groupingMax > 500 && groupingMax < 2000) { groupingMax += 300 } else
  //       //         if (groupingMax > 2000) { groupingMax += 500 }
  //       //   let roundedMax = Math.ceil(groupingMax / 7.0) * 7
  //       //   this.setState({ groupingMax: roundedMax, dateChanged: false })
  //       // })
  //     } else {
  //       // console.log({
  //       // 'groupingMaxs': groupingMaxs,
  //       // 'max': max
  //       // })
  //       setGroupingMaxs([...groupingMaxs, max])
  //       // setGroupingMaxs([...groupingMaxs, max], () => {
  //       let groupingMax = Math.max(...groupingMaxs)
  //       // if (groupingMax < 50) { groupingMax += 50 } else
  //       //   if (groupingMax > 50 && groupingMax < 500) { groupingMax += 100 } else
  //       //     if (groupingMax > 500 && groupingMax < 2000) { groupingMax += 300 } else
  //       //       if (groupingMax > 2000) { groupingMax += 500 }
  //       let roundedMax = Math.ceil(groupingMax / 7.0) * 7
  //       // console.log('roundedMax:', roundedMax)
  //       setGroupingMax(roundedMax)
  //       // })
  //     }
  //   }
  // }

  // const dateChangedFunc = () => {
  //   // setGroupingMaxs([])
  // }

  // // Set Start/End Dates For Queries
  // const setStartEndDatesFunc = (startDate, endDate) => {
  //   // calcGroupingMaxFunc(-1)
  //   // dateChangedFunc()
  //   setStartDate(startDate)
  //   setEndDate(endDate)
  // }

  // Close Menu (For Click Off Menu)
  const closeMenuFunc = () => {
    setShowMenu(false)
  }

  // // Component Did Mount
  // useEffect(() => {
  //   // Initialize Week Picker
  //   var dates = [];
  //   for (var i = 0; i < 7; i++) {
  //     let date = new Date();
  //     let day = moment(date).day(i)._d
  //     dates.push(day);
  //   }
  //   setWeekDaysInit(dates)
  //   // Reset Duration On /list
  //   if (location === '/list') {
  //     setStartEndDatesFunc(params.startDateMoment, params.endDateMoment)
  //     setDuration(null)
  //   }
  // }, [])

  // const getTypeFromChip = (chip) => {
  //   switch (chip) {

  //     case 'Alerts':
  //       return 'ALERT'

  //     case 'Traps':
  //       return 'TRAP'

  //     case 'Syslogs':
  //       return 'SYSLOG'

  //     case 'winEvents':
  //       return 'WINDOWSEVENT'

  //     case 'vmwEvents':
  //       return 'VMWAREEVENT'

  //   }
  // }

  // useEffect(() => {
  //   // Get Formatted Grouping Data
  //   if (showMenu) {
  //     let formattedGroupingData = formatGroupingDataForDup(grouping)
  //     setFormattedGroupingData(formattedGroupingData)
  //   }
  //   // Initialize /list State
  //   if (location === '/list' && title === null) {
  //     const { title, types, levels, triggers, sources, formattedDateString, duration, startDateMoment, endDateMoment } = params
  //     return {
  //       title,
  //       types,
  //       levels,
  //       triggers,
  //       sources,
  //       formattedDateString,
  //       duration,
  //       startDate: startDateMoment,
  //       endDate: endDateMoment
  //       // dateRange,
  //       // rangeType,
  //     }
  //   } else if (grouping !== undefined && location !== '/list') {
  //     // Initialize Month/Week State
  //     let today = new Date()
  //     let month = moment(today).month()
  //     let week = moment(today).week()
  //     let year = moment(today).year()
  //     let monthYearInit = `m${month}y${year}`
  //     let weekYearInit = `w${week}y${year}`
  //     // let grouping = grouping
  //     // let chips = props.grouping.chips // Init Chips (temp fix)
  //     // let initChips = state.initChips // Init Chips (temp fix)
  //     if (monthYear != null) { return }
  //     if (weekYear != null) { return }
  //     if (grouping.title === 'LOGS & EVENTS' && grouping.subtitle === 'past 30 days') {
  //       // if (!initChips) {
  //       //   return { duration: 'm', monthYear, chips, initChips: true } // Init Chips (temp fix)
  //       // }
  //       setDuration('m')
  //       setMonthYear(monthYearInit)
  //     } else {
  //       // if (!initChips) {
  //       // setDuration('w')
  //       // setWeekYear(weekYearInit)
  //       // setChips(chips)
  //       // setInitChips(true) // Init Chips (temp fix)
  //       // }
  //       setDuration('w')
  //       setWeekYear(weekYearInit)
  //       setMonthYear(monthYearInit) // monthYear temporary, until queries can accept hourDayWeekYear
  //     }
  //   }
  //   // Close Menu If toggleModal: true
  //   if (toggleModal) {
  //     closeMenuFunc()
  //   }
  // })

  // // On Chart Click
  // const onChartClickFunc = x => {
  //   // Push Chip Of Selected Bar/Bar Section
  //   let selectedChip = x.selectedChip
  //   let allChips = [...chips]
  //   let allLevels = levels
  //   let allTypes = types

  //   if (selectedChip && !chips.includes(selectedChip)) {
  //     allChips.push(selectedChip)
  //     if (x.chipType === 'level') {
  //       allLevels = [...levels, selectedChip.toUpperCase()]
  //     } else {
  //       allTypes = [...types, getTypeFromChip(selectedChip)]
  //     }
  //   }

  //   history.push("/list", {
  //     title: grouping.title,
  //     chips: allChips,
  //     types: allTypes,
  //     levels: allLevels,
  //     triggers: triggers,
  //     sources: sources,
  //     formattedDateString: x.formattedDateString,
  //     startDateMoment: x.startDateMoment,
  //     endDateMoment: x.endDateMoment,
  //     duration: null
  //     // dateRange: x.dateRange,
  //     // rangeType: x.rangeType
  //   })
  // }


  // // On Trigger Click
  // const onTriggerClickFunc = x => {
  //   history.push("/list", {
  //     title: x.name, // Coming From EventByTriggerObject
  //     chips: [...chips, x.name],
  //     types: types,
  //     levels: levels,
  //     triggers: [...triggers, x.name], // Doesn't enter allChips
  //     sources: sources,
  //     formattedDateString: null,
  //     startDateMoment: startDate,
  //     endDateMoment: endDate,
  //     duration: duration
  //     // dateRange: x.dateRange, 
  //     // rangeType: x.rangeType
  //   })
  // }

  const setTitleMarginFunc = width => {
    // console.log(width)
    setTitleMargin(!titleMargin)
    setFilterWidth(width)
  }

  // Set Entity Suggestions On /list
  const setEntitiySuggestionsFunc = entitySuggestions => {
    setEntitiySuggestions(entitySuggestions)
  }

  // Set DurationVal In State For Queries
  const setDurationValFunc = (weekYear, monthYear, duration) => { // Temporary, until queries can accept hourDayWeekYear
    if (duration === 'm') {
      setMonthYear(monthYear)
    }
    if (duration === 'w') {
      setWeekYear(weekYear)
      setMonthYear(monthYear)
    }
  }
  // const setDurationValFunc = (DV, duration) => {
  //   if (duration === 'm') {
  //     setMonthYear(DV)
  //   }
  //   if (duration === 'w') {
  //     setWeekYear(DV)
  //   }
  // }

  // Handle Page Click
  const handlePageClickFunc = data => {
    let page = data.selected
    setPage(page)
  }

  // Handle Grid Edit Click
  const handleEditClickFunc = () => {
    setEditing(!editing)
    // resetChips()
  }

  // Show Cannot Delete Modal
  const showCannotDelModalFunc = () => {
    if (!showCannotDelModal) {
      setShowCannotDelModal(true)
    }
  }

  // Close Cannot Delete Modal
  const closeCannotDelModalFunc = () => {
    setShowCannotDelModal(false)
  }

  // Show Delete Grouping Modal
  const showDelModalFunc = () => {
    setShowMenu(false)
    setShowDelModal(true)
  }

  // Close Delete Grouping Modal
  const closeDelModalFunc = () => {
    setShowDelModal(false)
  }

  // Show Grouping Deleted Modal
  const showDeldModalFunc = () => {
    setShowDeldModal(true)
  }

  // Close Grouping Deleted Modal
  const closeDeldModalFunc = () => {
    setShowDeldModal(false)
  }

  // Show Duplicate Grouping Modal
  const showDupModalFunc = () => {
    setShowMenu(false)
    setShowDupModal(true)
  }

  // Close Duplicate Grouping Modal
  const closeDupModalFunc = () => {
    setShowDupModal(false)
  }

  // Toggle Show Menu On Icon Click
  const toggleShowMenuFunc = () => {
    setShowMenu(!showMenu)
  }

  // On Save Edit Click 
  const saveEditFunc = fromGroupingHeader => {
    let header = fromGroupingHeader.title
  }

  // // Duplicate Grouping
  // const duplicateGroupingFunc = () => {
  //   let formattedGroupingData = formatGroupingDataForDup(grouping)
  // }

  // On Grouping Update
  const groupingUpdatedFunc = () => {
    setEditing(false)
    setShowMenu(false)
  }

  // Enable Edit Mode
  const toggleEditModeFunc = () => {
    setEditing(!editing)
  }

  // Set OrderBy For EventList Query
  const setOrderByFunc = orderBy => {
    setOrderBy(orderBy)
  }

  // // Set Filter Chips For Queries
  // const setChipsFunc = (types, levels, triggers, sources, chips) => {
  //   setTypes(types)
  //   setLevels(levels)
  //   setTriggers(triggers)
  //   setSources(sources)
  //   setChips(chips)
  // }

  // const isLevel = value => {
  //   return (levelSuggestions.indexOf(value) > -1)
  // }

  // const isType = value => {
  //   return (typeSuggestions.indexOf(value) > -1)
  // }

  // const isSource = value => {
  //   return (sourceSuggestions.indexOf(value) > -1)
  // }

  // const updateChipsFunc = chips => {
  //   let unformattedTypes = []
  //   let levels = []
  //   let triggers = []
  //   // let names = []
  //   let sources = []

  //   // Restarts Function If Data Is Not Present
  //   if (empty) { setChips(chips) }

  //   chips.forEach(chip => {
  //     if (isType(chip)) {
  //       unformattedTypes.push(chip)
  //     } else if (isLevel(chip)) {
  //       levels.push(chip.toUpperCase())
  //     } else if (isSource(chip)) {
  //       sources.push(chip.toUpperCase())
  //     } else {
  //       triggers.push(chip)
  //     }
  //   })

  //   let types = []
  //   unformattedTypes.forEach(type => {
  //     type = type.replace(/\s/g, '')
  //     type = type.toUpperCase()
  //     type = type.slice(0, -1);
  //     types.push(type)
  //   })

  //   // Check Element Height
  //   // let height = this.divElement.clientHeight;
  //   // let width = this.divElement.clientWidth;
  //   // if (height > this.state.initialHeight && this.state.initialHeight !== null) {
  //   //   // console.log('onchange')

  //   //   props.setTitleMargin(width)
  //   // }

  //   // console.log('onChange chips', {
  //   //   'chips': chips,
  //   //   'types': types,
  //   //   'levels': levels,
  //   //   'triggers': triggers,
  //   //   'sources': sources
  //   // })
  //   // props.setChips(types, levels, triggers, sources, chips)
  //   setChips(chips)
  //   setTypes(types)
  //   setLevels(levels)
  //   setSources(sources)
  //   setTriggers(triggers)
  // }

  // Set Grouping Layout To State On Mount
  const setGroupingLayoutToState = (x) => {
    setGroupingLayout(x)
  }

  // Add Card
  const addCard = () => {
    console.log('hit addCard')
    if (groupingLayout) {
      // Create ID
      let randID = Math.random().toString(36).replace('0.', '')

      // Set x Value
      let groupingWidths = []
      groupingLayout.forEach((layout) => {
        if (layout.h === 1) {
          return
        } else {
          let elementWidth = layout.w
          groupingWidths.push(elementWidth)
        }
      })

      // Get Sum of Widths
      let groupingWidth = groupingWidths.reduce((a, b) => a + b, 0)
      let xVal = groupingWidth + 1

      // Increment newGridElements
      setNewGridElements([...newGridElements, randID])
      setGroupingLayout([...groupingLayout, {
        w: 2,
        h: 2,
        x: xVal,
        y: 0,
        i: randID
      }])
    } else console.log('error. no grouping layout set')
  }

  return (
    <div className='grouping'>
      {showDelModal &&
        <Modal
          showModal={showDelModalFunc}
          closeModal={closeDelModalFunc}
          showCannotDelModal={showCannotDelModalFunc}
          showDeldModal={showDeldModalFunc}
          groupingID={492049682}
          modalHeaderText="Delete Grouping"
          modalBodyText="Are you sure?"
          loadingText="DELETING..."
          confirm
          onConfirm="deleteGrouping"
          trashIcon
          cancel
          wideButtons
          confirmText="CONFIRM"
          cancelText="CANCEL"
        />}

      {showDupModal &&
        <Modal
          showModal={showDupModalFunc}
          closeModal={closeDupModalFunc}
          modalHeaderText="Grouping Duplicated"
          modalBodyText="Refresh the page to see changes. New groupings will appear at the bottom of the page."
          cancel
          confirm
          onConfirm="refresh"
          confirmText="REFRESH"
          wideButtons
          cancelText="CLOSE"
        />}

      {showDeldModal &&
        <Modal
          showDeldModal={showDeldModalFunc}
          closeModal={closeDeldModalFunc}
          modalHeaderText="Grouping Deleted"
          modalBodyText="Refresh the page to see changes."
          cancel
          confirm
          onConfirm="refresh"
          confirmText="REFRESH"
          wideButtons
          cancelText="CLOSE"
        />}

      {showCannotDelModal &&
        <Modal
          showCannotDelModal={showCannotDelModalFunc}
          closeModal={closeCannotDelModalFunc}
          modalHeaderText="Error"
          modalBodyText="Original groupings cannot be deleted."
          confirm
          confirmText="CLOSE"
          wideButtons
        />}


      {/* <GroupingHeader
        // Header Props
        classname="heading"
        title={'params ? params.title : grouping.title'}
        editing={editing}

        // DateRange Props
        weekDaysInit={weekDaysInit}
        weekYear={weekYear}
        // dropdown={this.dropdown}
        duration={duration}
        // durationVal={durationVal}
        setDurationVal={setDurationValFunc}
        setStartEndDates={setStartEndDatesFunc}
        startDate={startDate}
        endDate={endDate}
        selectedDays={weekDaysInit}
        location={location}
        params={params || 'shit'}
        grouping={grouping || 'shit'}
        dateChanged={dateChangedFunc}

        // Menu Props
        chips={chips}
        editClick={handleEditClickFunc}
        toggleEditMode={toggleEditModeFunc}
        saveEdit={saveEditFunc}
        // toggleModal={this.toggleModal}
        duplicateGrouping={duplicateGroupingFunc}
        closeMenu={closeMenuFunc}
        showMenu={showMenu}
        toggleShowMenu={toggleShowMenuFunc}
        formattedGroupingData={formattedGroupingData}
        showDelModal={showDelModalFunc}
        showDupModal={showDupModal}
        showDupModalFunc={showDupModalFunc}
        closeModal={closeDupModalFunc}
        groupingID={grouping.id}
        groupingUpdated={groupingUpdatedFunc}
      /> */}



      {/* Lock Grouping Component */}
      {/* <Lock showLockModal={this.state.showLockModal} onGroupingLock={this.onGroupingLock} onToggleLockModal={this.onToggleLockModal} /> */}


      {/* Body */}
      <div className='grouping-body'>
        {/* Grouping Editor */}
        {editing && <Editor addCard={addCard} />}
        <Grid editing={false} grouping={{ layoutLGs: [] }} setGroupingLayoutToState={setGroupingLayoutToState} layout={groupingLayout}>
          {newGridElements.length ? <div>{newGridElements.map(el => {
            console.log('bitch', el)
            return <Card key={el}>
              New Grid Element: {el}
                  </Card>
          })}</div> : <div>Didn't work</div>}

        </Grid>
      </div>
    </div>
  )
}

export default GroupingSandBox