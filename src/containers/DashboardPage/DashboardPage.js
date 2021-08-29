import React from 'react'
import { Consumer } from '../../data/AppContext'

// Styles Imports
import './dashboard-page.scss'

// Component Imports
import Dashboard from '../../components/Dashboard/Dashboard'

const DashboardPage = props => {
    const { history, location } = props
    return (
        <Consumer>
            {(context) => (
                <Dashboard store={context.store} actions={context.actions} history={history} {...location.state} location={location.pathname} />
            )}
        </Consumer>
    )
}

export default DashboardPage