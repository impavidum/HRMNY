import React, { useState, useEffect } from 'react'

// Styles Imports
import './event-list.scss'

// Component Imports
import Loader from '../Utility/Loader/Loader'
import Error from '../Utility/Error/Error'

// Ionicons Imports
import IosArrowDown from 'react-ionicons/lib/IosArrowDown'
import IosArrowUp from 'react-ionicons/lib/IosArrowUp'

// React Table Imports
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"

// Moment
import Moment from 'react-moment'

// Hooks Imports
import { useReturnPrevProps } from '../../hooks/returnPrevProps'

const EventList = props => {
  const { items, error, empty } = props
  const [preLoaded, setPreLoaded] = useState(false)
  const [orderByCalled, setOrderByCalled] = useState(false)
  const [stateSelected, setStateSelected] = useState('name')
  const [direction, setDirection] = useState('_ASC')
  // const [truncdItems, setTruncdItems] = useState(null)
  // const [mouseOver, setMouseOver] = useState(false)
  const prevEmpty = useReturnPrevProps(empty)

  useEffect(() => {
    if(!preLoaded && prevEmpty !== empty) {
      setPreLoaded(true)
    }
  })

  // Pass orderBy Up To Grouping
  const callOrderBy = orderBy => {
    props.setOrderBy(orderBy)
  }

  // Manage Direction & OrderBy Values
  const setToggleOrderBy = selected => {
    if (selected !== stateSelected) {
      // set orderby_asc
      let direction = '_ASC'
      let orderBy = selected.concat(direction)
      callOrderBy(orderBy)
      setStateSelected(selected)
      setDirection(direction)
      setOrderByCalled(false)
    } else {
      // toggle orderby (selected + _ASC / _DESC)
      if (this.state.direction === '_ASC') {
        let orderBy = selected.concat('_DESC')
        callOrderBy(orderBy)
        setDirection('_DESC')
        setOrderByCalled(false)
      } else {
        let orderBy = selected.concat('_ASC')
        callOrderBy(orderBy)
        setDirection('_ASC')
        setOrderByCalled(false)
      }
    }
  }

  // Display OrderBy Icon
  const displayOrderByIcon = () => {
    if (direction === '_ASC') {
      return <IosArrowUp color="#68686E" fontSize="14px" />
    } else {
      return <IosArrowDown color="#68686E" fontSize="14px" />
    }
  }

  // mouseOver = () => {
  //   setTimeout(() => { 
  //     this.setState({ mouseOver: true })
  //   }, 1500)
  // }

  // mouseOut = () => {
  //     // if()
  //     // this.setState({ mouseOver: false })
  // }

  return (
    <div className="event-list">

      {/* Loader */}
      {!error && (empty && !preLoaded) && <Loader />}

      {/* Error */}
      {error && <Error error={error} />}

      {!error && (preLoaded || !empty) &&
        <Table>
          <Thead>
            <Tr>
              <Th onClick={() => setToggleOrderBy('name')} className={`${stateSelected === 'name' ? 'selected' : ''}`}>Name{displayOrderByIcon()}</Th>
              <Th onClick={() => setToggleOrderBy('type')} className={`narrow ${stateSelected === 'type' ? 'selected' : ''}`}>Type{displayOrderByIcon()}</Th>
              <Th onClick={() => setToggleOrderBy('level')} className={`narrow ${stateSelected === 'level' ? 'selected' : ''}`}>Level{displayOrderByIcon()}</Th>
              <Th>Trigger</Th>
              <Th onClick={() => setToggleOrderBy('triggerTime')} className={`${stateSelected === 'triggerTime' ? 'selected' : ''}`}>Trigger Time{displayOrderByIcon()}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items && items.map((item, index, array) => {
              return <Tr key={index} className={`body ${index !== 0 && index % 10 === 0 ? 'last' : ''} ${index % 2 === 1 ? 'dark' : ''}`}>
                <Td>
                  <span className="name">
                    {item.name}
                  </span>
                </Td>
                <Td className="narrow">
                  <span>{item.type}</span>
                </Td>
                <Td className="narrow">
                  <span>
                    {item.level}
                  </span>  </Td>
                <Td>
                  {/* <span className={`full-string ${this.state.mouseOver === true ? 'show' : ''}`}>HEllo</span> */}
                  {/* <span className="node" onMouseOver={this.mouseOver()} onMouseOut={this.mouseOut}>{item.trigger.name}</span> */}
                  <div className="neutralize node">
                    <span className="node">{item.trigger.name}</span>
                  </div>

                </Td>
                <Td>
                  <div className="neutralize">
                    {/* <span className="space-around">at</span> */}
                    <span><Moment date={item.triggerTime} format='h:mma'></Moment></span>
                    <span className="space-around">on</span>
                    <span><Moment date={item.triggerTime} format='MMM D'></Moment></span>
                  </div>
                </Td>
              </Tr>
            })}
          </Tbody>
        </Table>}
    </div>
  )
}

export default EventList