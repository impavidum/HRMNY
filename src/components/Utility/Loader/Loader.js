import React, { useState } from 'react'
import { css } from '@emotion/core'
import './loader.scss'

// Loader
import ClipLoader from 'react-spinners/ClipLoader'

const override = css`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px;
`;

const Loader = () => {
  const [loading, setLoading] = useState(true)
  return (
    <div className='loader'>
      <ClipLoader
        css={override}
        sizeUnit={"px"}
        size={20}
        color={'#68686E'}
        loading={loading}
      />
    </div>
  )
}

export default Loader