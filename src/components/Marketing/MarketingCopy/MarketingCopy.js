import React from 'react';
import './marketing-copy.scss';


const MarketingCopy = props => {
  return (
    <div className={`marketing-copy ${props.divide ? 'divide' : ''}`}>
      <div className="contain">
        {props.children}
      </div>
    </div>
  )
}

export default MarketingCopy
