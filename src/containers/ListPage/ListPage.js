import React from 'react'
import { Consumer } from '../../data/AppContext'

// Styles Imports
import './list-page.scss'

// Component Imports
import ListView from '../../components/ListView/ListView'

const ListPage = props => {
  const { history, location } = props
  return (
    <Consumer>
      {(context) => (
        <ListView store={context.store} actions={context.actions} history={history} location={location.pathname} params={location.state} />
      )}
    </Consumer>
  )
}

export default ListPage

