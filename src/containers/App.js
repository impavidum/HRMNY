import React, { useState } from 'react'
import { Consumer } from '../data/AppContext'

// Styles Imports
import './app.scss'

// Component Imports
import Navbar from '../components/Utility/Navbar/Navbar'

const App = () => {
  return (
    <Consumer>
      {(context) => (
        <div className='app'>
          <Navbar />
        </div>
      )}
    </Consumer>
  )
}

export default App

