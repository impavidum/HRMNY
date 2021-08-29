import React from 'react'
import './card.scss'

const Card = props => {
    const { title, pos, size, list, listView, loading, children } = props
    return (
      <div className={`card ${size} ${pos} ${list ? 'list' : ''} ${loading ? 'loading' : ''} ${listView ? 'listViewCard' : ''}`}>
        <span className="card-title">{title}</span>
        <div className={`card-body`}>
          {children}
        </div>
      </div>
    )
}

export default Card
