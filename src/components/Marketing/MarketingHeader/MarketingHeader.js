import React, { useState } from 'react'
import './marketing-header.scss'

import marketingLogo from '../../../assets/images/noshadow.png'

import good from '../../../assets/images/good.png'
import fair from '../../../assets/images/fair.png'
import poor from '../../../assets/images/poor.png'

const MarketingHeader = () => {
  const [logo, setLogo] = useState(good)
  const [loaded, setLoaded] = useState(false)

  // const scrollTo = () => {
  //   window.scrollTo(0, window.innerHeight);
  // }

  // const handleImageLoaded = () => {
  //   console.log('loaded')
  //   setLoaded(true)

  //   if(!this.state.loaded) {
  //     setTimeout(()=>{
  //       setLogo(poor)

  //     }, 500)

  //     setTimeout(()=>{
  //       setLogo(fair)

  //     }, 750)
  //     setTimeout(()=>{
  //       setLogo(good)

  //     }, 1000)
  //   }
  // }

  // const handleImageErrored = () => {
  //   console.log('error')
  // }

  return (
    <div className="marketing-header">
      <img
        src={logo}
        alt="good"
        className="logo"
      // onLoad={this.handleImageLoaded}
      // onError={this.handleImageErrored}
      />
      <h1 className="tagline">Harmonizing your enterprise monitoring systems should be <span>simple</span>.</h1>
      <div className="bar"></div>
    </div>
  )
}

export default MarketingHeader
