import React, { useState } from 'react'

// Styles Imports
import './grouping-header.scss'

// Component Imports
import DateRange from '../DateRange/DateRange'
import Menu from '../Menu/Menu'

const GroupingHeader = props => {
  const [title, setTitle] = useState(props.title)

  const handleChange = event => {
    setTitle(event.target.value)
  }

  const saveEditRecievesTitle = () => {
    props.saveEdit({ title })
  }

  const {
    editing,
    weekDaysInit,
    dateRangeText,
    weekYear,
    dropdown,
    duration,
    durationVal,
    setDurationVal,
    setStartEndDates,
    startDate,
    endDate,
    selectedDays,
    location,
    params,
    grouping,
    editClick,
    toggleEditMode,
    saveEdit,
    toggleModal,
    duplicateGrouping,
    closeMenu,
    showMenu,
    toggleShowMenu,
    formattedGroupingData,
    showDelModal,
    showDupModal,
    showDupModalFunc,
    groupingID,
    chips,
    groupingUpdated,
    dateChanged
  } = props
  return (
    <div className={`grouping-header ${editing ? 'editing' : ''}`}>
      {!editing ? <div className="header">
        {title}
      </div> : <div className="header-input">
          <input id="input" type="text" value={title} onChange={handleChange} />
        </div>}

      {weekDaysInit != null && <DateRange
        text={params ? params.formattedDateString : grouping.subtitle}
        weekYear={weekYear}
        dropdown={dropdown}
        duration={duration}
        durationVal={durationVal}
        setDurationVal={setDurationVal}
        setStartEndDates={setStartEndDates}
        startDate={startDate}
        endDate={endDate}
        selectedDays={weekDaysInit}
        location={location}
        params={params}
        dateChanged={dateChanged}
      />}

      {location !== '/list' &&
        <Menu
          editing={editing}
          editClick={editClick}
          toggleEditMode={toggleEditMode}
          saveEditRecievesTitle={saveEditRecievesTitle}
          toggleModal={toggleModal}
          closeMenu={closeMenu}
          showMenu={showMenu}
          toggleShowMenu={toggleShowMenu}
          duplicateGrouping={duplicateGrouping}
          grouping={grouping}
          formattedGroupingData={formattedGroupingData}
          showDelModal={showDelModal}
          showDupModal={showDupModal}
          showDupModalFunc={showDupModalFunc}
          groupingUpdated={groupingUpdated}
          groupingID={groupingID}
          updatedHeaderTitle={title}
          chips={chips}
        />
      }

    </div>
  )
}

export default GroupingHeader
