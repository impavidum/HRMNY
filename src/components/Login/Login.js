import React, { useState } from 'react'
import './login.scss'

// Component Imports
import Button from '../Utility/Button/Button'

// Icon Imports (Logo)
import neutral from '../../assets/images/neutral.png'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeUsername = event => {
        setUsername(event.target.value)
    }

    const handleChangePassword = event => {
        setPassword(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log('submitted')
    }

    return (
        <div className="h-container" style={{ height: '100vh' }}>
            <div className="login">
                <img src={neutral} alt="neutral" className="logo" />
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" placeholder="Username" value={username} onChange={handleChangeUsername} />
                    <input type="text" name="password" placeholder="Password" value={password} onChange={handleChangePassword} />
                    <Button buttonType="submit"><input type="submit" value="Login" /></Button>
                </form>
            </div>
        </div>
    )
}

export default Login
