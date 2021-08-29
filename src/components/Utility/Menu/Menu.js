import React, { useState, useEffect } from 'react'
import { Mutation } from 'react-apollo'

// Styles Imports
import './menu.scss'

// Icon Imports
import IosOptionsOutline from 'react-ionicons/lib/IosOptionsOutline'
import IosMore from 'react-ionicons/lib/IosMore'

// Component Imports
import Button from '../Button/Button'

// Mutations
import {
  DUPLICATE_GROUPING_MUTATION,
  UPDATE_GROUPING_MUTATION,
} from '../../Grouping/GroupingMutations'

const Menu = props => {
  const { editing, toggleEditMode, showDelModal, showMenu, formattedGroupingData, groupingID, updatedHeaderTitle, chips, showDupModal } = props
  const [succes, setSuccess] = useState(false)
  const [groupingUpdated, setGroupingUpdated] = useState(false)
  const [groupingDuplicated, setGroupingDuplicated] = useState(false)

  useEffect(() => {
    if (groupingDuplicated && !showDupModal) {
      props.showDupModalFunc()
      setGroupingDuplicated(false)
    }
    if (groupingUpdated) {
      props.groupingUpdated()
      setGroupingUpdated(false)
    }
  }, [groupingDuplicated, groupingUpdated])

  // Toggle Show Menu On Icon Click
  const toggleShowMenu = () => {
    props.toggleShowMenu()
  }

  // Close Menu On Overlay Click
  const closeMenu = () => {
    props.closeMenu()
  }

  // Save Edit
  const saveEdit = () => {
    closeMenu()
    props.saveEditRecievesTitle()
  }

  // Cancel Edit
  const cancelEdit = () => {
    closeMenu()
    props.editClick()
  }

  return (
    <div className="menu-component">
      {!editing ? <div>
        <div className={`overlay ${showMenu ? 'show' : ''}`} onClick={closeMenu} />
        <IosMore onClick={toggleShowMenu} color="#68686E" fontSize="26px" />
        {showMenu && <div>
          <ul className="dropdown">

            <li onClick={toggleEditMode}>Edit</li>

            <Mutation mutation={DUPLICATE_GROUPING_MUTATION} variables={{ grouping: formattedGroupingData }} onCompleted={(data) => { setGroupingDuplicated(data.createGrouping.success) }}>
              {(duplicateGroupingMutation, { loading, data }) => {
                if (loading) { return <li>Duplicating...</li> }
                return (
                  <li onClick={duplicateGroupingMutation}>Duplicate</li>
                )
              }}
            </Mutation>

            <li onClick={showDelModal}>Delete</li>

          </ul>
        </div>}
      </div> : <div className="edit-buttons">
          <Button onClick={cancelEdit} buttonType="muted half-container-width-mobile">CANCEL</Button>

          <Mutation mutation={UPDATE_GROUPING_MUTATION} variables={{ title: updatedHeaderTitle, chips: chips, id: groupingID }} onCompleted={() => { setGroupingUpdated(true) }}>
            {(updateGroupingMutation, { loading, data }) => {
              if (loading) { return <Button buttonType="right half-container-width-mobile">UPDATING...</Button> }
              return (
                <Button onClick={updateGroupingMutation} buttonType="right half-container-width-mobile">SAVE</Button>
              )
            }}
          </Mutation>

        </div>}
    </div>
  )
}

export default Menu
