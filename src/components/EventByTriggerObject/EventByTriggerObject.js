import React, { useState, useEffect } from 'react'

// Styles Imports
import './event-by-trigger-object.scss'

// Component Imports
import Loader from '../Utility/Loader/Loader'

// Hooks Imports
import { useReturnPrevProps } from '../../hooks/returnPrevProps'

const EventList = props => {
  const { data, count, error, empty } = props
  const [preLoaded, setPreLoaded] = useState(false)
  const prevEmpty = useReturnPrevProps(empty)

  useEffect(() => {
    if(!preLoaded && prevEmpty !== empty) {
      setPreLoaded(true)
    }
  })

  const handleTriggerClick = name => {
    props.onTriggerClick({ name })
  }

  return (
    <div className="event-by-trigger-object">
      {/* Loader */}
      {(empty && !preLoaded) && <Loader />}

      {/* Error */}
      {error && `Error: ${error}`}

      {/* Desktop */}
      {!error && data.entities && (preLoaded || !empty) && data.entities.length ? <ul className="trigger-object-list">
        {data.entities.map((entity, index) => {
          return (
            <li
              key={entity.name}
              className={`${
                index % (count - 1) === 0 && index !== 0 ? 'last' : ''
                }`}
              onClick={() => { handleTriggerClick(entity.name) }}
            >
              <div className='name'>
                {entity.name}
              </div>
              <span className='count'>
                {entity.items.length}
              </span>
            </li>
          )
        })}
      </ul> : <div className="no-results">No Results Were Found...</div>}
    </div>
  )
}

export default EventList
