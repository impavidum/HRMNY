import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import '../../../scss/imports/_animate.css'

// Icon Imports
import good from '../../../assets/images/good.png'
import fair from '../../../assets/images/fair.png'
import poor from '../../../assets/images/poor.png'
import neutral from '../../../assets/images/neutral.png'

const Navbar = props => {
    const { health, loading } = props
    return (
      <div className={loading ? 'loading navbar animated infinite bounce' : 'navbar'}>
      {/* <a href="">Support</a> */}
      {/* <a href="">Integrations</a> */}
      <Link to="/">
      {!health && <img src={neutral} alt="neutral" className="logo"/>}
      {health === 'good' && <img src={good} alt="good" className="logo"/>}
      {health === 'fair' && <img src={fair} alt="fair" className="logo"/>}
      {health === 'poor' && <img src={poor} alt="poor" className="logo"/>}

      </Link>
        {/* <a href="">Settings</a> */}
      {/* <a href="">Account</a> */}
      </div>
    )
}

export default Navbar