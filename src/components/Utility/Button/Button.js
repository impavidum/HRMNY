import React from 'react'
import './button.scss'

const Button = props => {
    const { onClick, buttonType, children } = props
    return (
      <div className={`button ${buttonType}`} onClick={onClick}>{children}</div>
    )
}

export default Button
