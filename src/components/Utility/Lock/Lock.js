import React from 'react'
import './lock.scss'

// Component Imports
import Modal from '../Modal/Modal'

// Icon Imports
import IosLock from 'react-ionicons/lib/IosLock'
import IosUnlock from 'react-ionicons/lib/IosUnlock'

const Lock = props => {
  const { showLockModal, onToggleLockModal, onGroupingLock } = props
  return (
    <div className="lock-component">
      <IosLock onClick={onToggleLockModal} color='#C2C2C2' />
      {showLockModal && <Modal handleClose={onToggleLockModal}></Modal>}


      {/* {!unlocked
          ? <IosLock onClick={onGroupingLock} color='#C2C2C2' />
          : <IosUnlock onClick={onGroupingLock} color='#C2C2C2' />
        } */}
    </div>
  )
}

export default Lock
