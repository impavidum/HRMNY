// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import Dashboard from '../../Dashboard/Dashboard'

const PrivateRoute = ({component: Component, authed, ...rest}) => {

    // Add your own authentication on the below line.
    // console.log('privateroute:', props)
    // const isLoggedIn = props.store.value.authed

    return (
        <Route
            // {...rest}
            render={props =>
                isLoggedIn ? (
                    <Dashboard {...props} />
                ) : (
                        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                    )
            }
        />
    )
}

export default PrivateRoute