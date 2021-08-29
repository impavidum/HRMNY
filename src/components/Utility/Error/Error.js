
import React from 'react'
import './error.scss'

const Error = props => {
    const { error } = props
    return (
      <h1>Error: {error} </h1>
    )
}

export default Error