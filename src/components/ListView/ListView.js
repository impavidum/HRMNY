import React, { useState, useEffect } from 'react'

// Styles Imports
import './list-view.scss'

// Component Imports
import Navbar from '../../components/Utility/Navbar/Navbar'
import Grouping from '../../components/Grouping/Grouping'

// Layout
import LVGroupingData from './LVGroupingData'

const ListView = props => {
  const { params } = props
  const [events, setEvents] = useState([])
  const [count, setCount] = useState(11)
  const [page, setPage] = useState(0)

  // Component Did Mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handlePageClick = data => {
    let page = data.selected * 15
    setPage(page)
  }

  return (
    <div className="list-view" >
      <Navbar />

      <Grouping
        grouping={LVGroupingData}
        params={params}
        count={count}
        events={events}
        {...props}
      />
    </div>
  )
}

export default ListView
