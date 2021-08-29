import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

// GraphQL Imports
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

// React Context
import { Provider } from './data/AppContext.js'

// Component Imports
import ListPage from './containers/ListPage/ListPage'
import DashboardPage from './containers/DashboardPage/DashboardPage'
import LoginPage from './containers/LoginPage/LoginPage'

// Styles
import './index.scss'


// GraphQL Setup
const client = new ApolloClient({ 
  // uri: 'https://192.168.21.110:3000/',
  // uri: 'http://demo.harmony.tech:3000/',
  uri: 'http://localhost:3000/',
})

// fetchOptions: {
//   mode: 'no-cors',
// }, 
// const client = new ApolloClient({ uri: 'https://us1.prisma.sh/public-petalvulture-610/harmony/dev' })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider>
      <Router>
        <Route path='/login' component={LoginPage} />
        <Route exact path='/' component={DashboardPage} />
        <Route path='/list' component={ListPage} />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
)
