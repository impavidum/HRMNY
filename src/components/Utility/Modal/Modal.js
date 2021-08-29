import React, { useState, useEffect } from 'react'
import { Mutation } from 'react-apollo'

// Styles Imports
import './modal.scss'

// Component Imports
import Button from '../Button/Button'

// Mutation Imports
import { DELETE_GROUPING_MUTATION } from '../../Grouping/GroupingMutations'

// Ionicons
import IosTrashOutline from 'react-ionicons/lib/IosTrashOutline'

const Modal = props => {
  const { closeModal, showDeldModal, confirm, onConfirm, confirmText, cancel, trashIcon, wideButtons, modalHeaderText, modalBodyText, cancelText, groupingID } = props
  const [groupingDeleted, setGroupingDeleted] = useState(false)
  const [showCannotDelModal, setShowCannotDelModal] = useState(false)

  useEffect(() => {
    if(groupingDeleted) {
      closeModal()
      showDeldModal()
      setGroupingDeleted(false)
    }
  }, [groupingDeleted])

  const renderModalConfirmButton = () => {
    if (onConfirm === 'refresh') {
      return <Button onClick={() => { window.location.reload() }} buttonType={`${wideButtons ? 'wideButtons' : ''}`}>{confirmText}</Button>
    } else if (onConfirm === 'deleteGrouping') {
      if (groupingID === "cjyjtg8pp04h70b99atcze7wb" || groupingID === "cjyjtgrvz04jq0b9907or4xh8" || groupingID === "cjyjtgwrl04k70b99kq7xjn6t" || groupingID === "cjyjthhqg04nq0b99e5sfg5fc") {
        if (!showCannotDelModal) {
          setShowCannotDelModal(true)
          showCannotDelModal()
          closeModal()
        }
        return <div></div>
      }
      return <Mutation mutation={DELETE_GROUPING_MUTATION} variables={{ id: groupingID }} onCompleted={() => { setGroupingDeleted(true) }}>
        {(deleteGroupingMutation, { loading, data }) => {
          if (loading) { return <Button buttonType={`${wideButtons ? 'wideButtons' : ''}`}>{props.loadingText}</Button> }
          return (
            <Button onClick={deleteGroupingMutation} buttonType={`${wideButtons ? 'wideButtons' : ''}`}>{confirmText}</Button>
          )
        }}
      </Mutation>
    } else {
      return <div>{<Button onClick={closeModal} buttonType={`${wideButtons ? 'wideButtons' : ''}`}>{confirmText}</Button>}</div>
    }
  }

  // Oopsies ma buttplug fell out

  return (
    <div className="modal">
      <section className="modal-main">
        {/* Header */}
        <h1>{modalHeaderText}</h1>
        {/* Icons */}
        {trashIcon && <IosTrashOutline color="#68686E" fontSize="50px" />}
        {/* Body Text */}
        <p>{modalBodyText}</p>
        {/* Buttons */}
        <div className={`modal-buttons ${wideButtons ? 'wideButtons' : ''}`}>
          {confirm && <div>{renderModalConfirmButton()}</div>}
          {cancel && <Button onClick={closeModal} buttonType={`muted ${wideButtons ? 'wideButtons' : ''}`}>{cancelText}</Button>}
        </div>
      </section>
    </div>
  )
}

export default Modal
