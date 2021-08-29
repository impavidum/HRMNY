import React from 'react'
import { Consumer } from '../../data/AppContext'

// Styles
import './login-page.scss'

// Components
import Login from '../../components/Login/Login'

const LoginPage = () => {
  return (
    <Consumer>
      {(context) => (
        <Login />
      )}
    </Consumer>
  )
}

export default LoginPage